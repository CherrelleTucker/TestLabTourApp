# Adding a new tour stop / facility

Adding a facility no longer means copy-pasting HTML. It's three steps, all
outside `index.html`:

## 1. Drop in the media
Create `tourapp/media/<stop-id>/img/` and (if there's video)
`tourapp/media/<stop-id>/video/`. Use plain, predictable names — this repo's
convention is:

- `img/hero.jpg` — the main image at the top of the stop page
- `img/detail-1.jpg` — the second, "go deeper" image
- `video/<name>.mp4` — if the stop has a video

`<stop-id>` should be a short slug, e.g. `east-test-area`.

## 2. Add one object to `tourapp/data/stops.js`
Copy an existing stop object (e.g. `stop3`, the shortest one) and fill in the
fields for the new facility. Every field is documented by the existing three
stops — `hero`, `factbox`, `narration`, `keyfacts`, `deepDive`, `detailImage`,
`lookFor`, `quiz`, `video` (or `null` if there isn't one), `cta`.

Two fields matter for wiring, not just content:

- `"id"` — must be unique; this is the URL hash (`#<id>`) the QR code for
  this stop will encode.
- `"nextStopId"` — set the *previous* stop's `nextStopId` to your new stop's
  `id` so the "Next stop →" button chains correctly. Set your new stop's own
  `nextStopId` to `null` if it's the last stop, or to whatever comes after it.

Nothing else in the file needs to change — the directory page, the chip
filters, and the stop page itself are all generated from this array by
`js/render.js`.

## 3. Generate its QR code
From the project root:
```
python make_qr.py
```
This reads the same `data/stops.js` file, so the new stop's QR code is
generated automatically (using `qrFile` if you set one, otherwise a
`NN-<id>` filename) — nothing to keep in sync by hand. Print the new PNG from
`tourapp/qr/` and place it at the facility.

## That's it
No HTML edits, no separate stop list to update, no risk of the directory page
and the stop detail page drifting out of sync — they're both views over the
same data.
