#!/usr/bin/env python3
"""
Search images.nasa.gov (the public images-api.nasa.gov search API) for
candidate cleared photos, and download a chosen result into a stop's
media folder.

Usage
-----
    python fetch_images.py search "Load Test Annex Marshall" --limit 8
    python fetch_images.py get MSFC_240222_..._4900_7 --size large --out media/load-test-annex/img/hero.jpg

No API key needed -- images-api.nasa.gov is open. This only ever returns
metadata/images already cleared for public release by NASA.
"""

import argparse
import json
import sys
import urllib.parse
import urllib.request

SEARCH_URL = "https://images-api.nasa.gov/search"
ASSET_URL = "https://images-api.nasa.gov/asset/{nasa_id}"


def search(query, limit, center=None):
    params = {"q": query, "media_type": "image"}
    if center:
        params["center"] = center
    url = SEARCH_URL + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(url, timeout=30) as r:
        payload = json.load(r)

    items = payload["collection"]["items"][:limit]
    for item in items:
        data = item["data"][0]
        links = {l.get("render", l.get("rel")): l["href"] for l in item.get("links", [])}
        desc = (data.get("description") or "").strip().replace("\n", " ")
        print("-" * 78)
        print("nasa_id:      %s" % data["nasa_id"])
        print("title:        %s" % data.get("title"))
        print("date:         %s   center: %s   photographer: %s" % (
            data.get("date_created", "")[:10], data.get("center"), data.get("photographer")))
        print("description:  %s" % (desc[:280] + ("..." if len(desc) > 280 else "")))
        if links.get("image"):
            print("preview:      %s" % links["image"])
        print("nasa.gov:     https://images.nasa.gov/details/%s" % data["nasa_id"])


def get(nasa_id, size, out):
    with urllib.request.urlopen(ASSET_URL.format(nasa_id=urllib.parse.quote(nasa_id)), timeout=30) as r:
        payload = json.load(r)
    candidates = [i["href"] for i in payload["collection"]["items"] if i["href"].endswith(".jpg")]
    match = next((h for h in candidates if h.endswith("~%s.jpg" % size)), None)
    if not match:
        print("No '%s' size found. Available:" % size, file=sys.stderr)
        for h in candidates:
            print("  " + h, file=sys.stderr)
        sys.exit(1)

    parts = urllib.parse.urlsplit(match)
    safe_path = urllib.parse.quote(parts.path)
    match = urllib.parse.urlunsplit((parts.scheme, parts.netloc, safe_path, parts.query, parts.fragment))

    req = urllib.request.Request(match, headers={"User-Agent": "TourApp/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r, open(out, "wb") as f:
        f.write(r.read())
    print("saved %s -> %s" % (match, out))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    sp = sub.add_parser("search", help="search images.nasa.gov for candidates")
    sp.add_argument("query")
    sp.add_argument("--limit", type=int, default=8)
    sp.add_argument("--center", help="filter by NASA center code, e.g. MSFC")

    gp = sub.add_parser("get", help="download one image by nasa_id")
    gp.add_argument("nasa_id")
    gp.add_argument("--size", default="large", choices=["small", "medium", "large", "orig"])
    gp.add_argument("--out", required=True)

    args = ap.parse_args()
    if args.cmd == "search":
        search(args.query, args.limit, args.center)
    elif args.cmd == "get":
        get(args.nasa_id, args.size, args.out)


if __name__ == "__main__":
    main()
