#!/usr/bin/env python3
"""
Pre-generate produced narration audio (ElevenLabs) for every stop in
data/stops.js, replacing the browser text-to-speech stand-in.

Why pre-generate instead of calling the TTS API from the page:
  - Zero runtime latency, no API key shipped to the browser, no per-visit cost.
  - You can use the slow/expensive high-quality model since generation time
    doesn't matter, and you can spot-check/regenerate individual files.
  - Output is a normal <audio> src, cacheable like any other static asset.

Usage
-----
    setx ELEVENLABS_API_KEY "sk_..."          (Windows, once, new shell after)
    python gen_narration.py --dry-run          # see what would be generated, no API calls
    python gen_narration.py                    # generate anything missing/changed
    python gen_narration.py --force            # regenerate everything
    python gen_narration.py --only stop,stop3  # just these stop ids
    python gen_narration.py --voice VOICE_ID   # override the default voice

Output
------
Each stop gets tourapp/media/<facility>/audio/narration.mp3, and its length
(seconds) is written back into data/stops.js as narration.durationLabel so
the page doesn't show a stale "stand-in" duration string.

Content-addressed caching: a per-stop hash of (voice_id + model_id + text)
is stored in media/<facility>/audio/narration.hash.json. If the narration
text hasn't changed and the file already exists, the API is not called
again -- so re-running the script after an unrelated stops.js edit only
re-synthesizes the stops whose narration text actually changed.
"""

import argparse
import hashlib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
STOPS_PATH = os.path.join(ROOT, "data", "stops.js")
MEDIA_ROOT = os.path.join(ROOT, "media")

API_KEY_ENV = "ELEVENLABS_API_KEY"
DEFAULT_VOICE_ID = "8Ln42OXYupYsag45MAUy"  # narration/documentary voice picked for this project
MODEL_ID = "eleven_multilingual_v2"        # quality model; latency doesn't matter here
TTS_URL = "https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

VOICE_SETTINGS = {
    "stability": 0.55,        # higher = steadier, less "performed" -- good for narration
    "similarity_boost": 0.8,
    "style": 0.15,            # small amount of expressiveness, not conversational
    "use_speaker_boost": True,
}


# --------------------------------------------------------------------- stops.js

def load_stops_text():
    with open(STOPS_PATH, "r", encoding="utf-8") as f:
        return f.read()


def parse_stops(raw_text):
    m = re.search(r"window\.STOPS\s*=\s*(\[.*\])\s*;", raw_text, re.S)
    if not m:
        raise RuntimeError("Could not find `window.STOPS = [ ... ];` in " + STOPS_PATH)
    return json.loads(m.group(1)), m.span(1)


def clean_for_tts(text):
    """Undo the couple of HTML entities that show up in narration text so the
    TTS engine doesn't try to sound out '&mdash;'. Add more replacements here
    as new stops are written -- this is the normalization pass any TTS engine
    needs for acronyms/units/entities, kept intentionally small right now
    because the current narration text is otherwise plain prose."""
    text = text.replace("&mdash;", "\u2014")
    text = text.replace("&amp;", "&")
    text = text.replace("&nbsp;", " ")
    return text


def set_duration_label(raw_text, stop_id, seconds):
    """Rewrite this stop's narration.durationLabel in the raw stops.js source,
    preserving everything else byte-for-byte. Matches the existing
    '~NN sec ... stand-in narration (device text-to-speech)' style but drops
    the stand-in caveat since real audio now exists."""
    label = "~{:d} sec \u00b7 produced narration".format(round(seconds))
    # Find this stop's block: from its "id": "<id>" up to the next top-level
    # "id": occurrence (or end of array), then patch durationLabel inside it.
    id_pat = re.compile(r'"id"\s*:\s*"' + re.escape(stop_id) + r'"')
    id_match = id_pat.search(raw_text)
    if not id_match:
        return raw_text, False
    start = id_match.start()
    next_id = re.compile(r'"id"\s*:\s*"[^"]+"').search(raw_text, id_match.end())
    end = next_id.start() if next_id else len(raw_text)
    block = raw_text[start:end]
    new_block, n = re.subn(
        r'("durationLabel"\s*:\s*")[^"]*(")',
        lambda mo: mo.group(1) + label.replace("\\", "\\\\") + mo.group(2),
        block,
        count=1,
    )
    if n == 0:
        return raw_text, False
    return raw_text[:start] + new_block + raw_text[end:], True


# ----------------------------------------------------------------------- audio

def mp3_duration_seconds(path):
    """Rough MP3 duration without extra dependencies: read the file size and
    the bitrate from ffprobe if available, else fall back to a byte-size
    heuristic against ElevenLabs' default 128kbps mp3_44100_128 output."""
    try:
        import subprocess
        out = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration",
             "-of", "default=noprint_wrappers=1:nokey=1", path],
            capture_output=True, text=True, timeout=15,
        )
        val = out.stdout.strip()
        if val:
            return float(val)
    except Exception:
        pass
    # Fallback: 128 kbps = 16 KB/sec
    size = os.path.getsize(path)
    return size / 16000.0


def synth(text, voice_id, api_key, out_format="mp3_44100_128"):
    body = json.dumps({
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": VOICE_SETTINGS,
    }).encode("utf-8")
    url = TTS_URL.format(voice_id=voice_id) + "?output_format=" + out_format
    req = urllib.request.Request(
        url,
        data=body,
        method="POST",
        headers={
            "xi-api-key": api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def content_hash(voice_id, text):
    h = hashlib.sha256()
    h.update(voice_id.encode("utf-8"))
    h.update(b"|")
    h.update(MODEL_ID.encode("utf-8"))
    h.update(b"|")
    h.update(text.encode("utf-8"))
    return h.hexdigest()[:16]


def slug_from_media(media_path):
    # stop["media"] looks like "media/flat-floor"
    return media_path.split("/", 1)[1] if "/" in media_path else media_path


# ------------------------------------------------------------------------ main

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dry-run", action="store_true", help="show what would be generated, no API calls")
    ap.add_argument("--force", action="store_true", help="regenerate even if hash matches")
    ap.add_argument("--only", help="comma-separated stop ids to process")
    ap.add_argument("--voice", default=DEFAULT_VOICE_ID, help="ElevenLabs voice_id")
    ap.add_argument("--no-write-back", action="store_true",
                     help="don't rewrite durationLabel in stops.js")
    args = ap.parse_args()

    api_key = os.environ.get(API_KEY_ENV)
    if not api_key and not args.dry_run:
        print("ERROR: set the %s environment variable first." % API_KEY_ENV, file=sys.stderr)
        print('  Windows (persist):  setx %s "sk_..."   (open a new shell after)' % API_KEY_ENV, file=sys.stderr)
        print('  Windows (this shell only):  $env:%s = "sk_..."' % API_KEY_ENV, file=sys.stderr)
        sys.exit(1)

    raw = load_stops_text()
    stops, _ = parse_stops(raw)

    only = set(args.only.split(",")) if args.only else None

    changed_any = False
    for stop in stops:
        stop_id = stop["id"]
        if only and stop_id not in only:
            continue

        text = clean_for_tts(stop["narration"]["text"])
        slug = slug_from_media(stop["media"])
        audio_dir = os.path.join(MEDIA_ROOT, slug, "audio")
        audio_path = os.path.join(audio_dir, "narration.mp3")
        hash_path = os.path.join(audio_dir, "narration.hash.json")

        new_hash = content_hash(args.voice, text)
        old_hash = None
        if os.path.exists(hash_path):
            try:
                old_hash = json.load(open(hash_path, encoding="utf-8")).get("hash")
            except Exception:
                old_hash = None

        needs_gen = args.force or new_hash != old_hash or not os.path.exists(audio_path)

        if not needs_gen:
            print("skip   %-8s (unchanged) -> %s" % (stop_id, os.path.relpath(audio_path, ROOT)))
            continue

        print("%s %-8s (%d chars) -> %s" % (
            "would-gen" if args.dry_run else "gen   ",
            stop_id, len(text), os.path.relpath(audio_path, ROOT)))

        if args.dry_run:
            continue

        os.makedirs(audio_dir, exist_ok=True)
        try:
            audio_bytes = synth(text, args.voice, api_key)
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "replace")
            print("  FAILED (%s): %s" % (e.code, detail[:300]), file=sys.stderr)
            continue
        except Exception as e:
            print("  FAILED: %s" % e, file=sys.stderr)
            continue

        with open(audio_path, "wb") as f:
            f.write(audio_bytes)
        json.dump({"hash": new_hash, "voice_id": args.voice, "model_id": MODEL_ID},
                  open(hash_path, "w", encoding="utf-8"))

        seconds = mp3_duration_seconds(audio_path)
        print("  ok, %.1fs" % seconds)

        if not args.no_write_back:
            raw, ok = set_duration_label(raw, stop_id, seconds)
            if ok:
                changed_any = True

        time.sleep(0.3)  # be polite to the API

    if changed_any and not args.dry_run:
        with open(STOPS_PATH, "w", encoding="utf-8", newline="") as f:
            f.write(raw)
        print("\nUpdated durationLabel entries in %s" % os.path.relpath(STOPS_PATH, ROOT))


if __name__ == "__main__":
    main()
