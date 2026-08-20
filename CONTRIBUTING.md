# Contributing Guide

How to add tour stops, update content, and modify the MSFC Test Lab Tour App.

## Table of Contents

1. [Adding a New Tour Stop](#adding-a-new-tour-stop)
2. [Updating Existing Content](#updating-existing-content)
3. [Creating Curated Tours](#creating-curated-tours)
4. [Media Asset Guidelines](#media-asset-guidelines)
5. [Testing Changes Locally](#testing-changes-locally)
6. [Deployment Process](#deployment-process)

---

## Adding a New Tour Stop

Every tour stop is defined in `data/stops.js`. No HTML edits required — the render engine dynamically generates all stop pages from this data.

### Step 1: Choose a Stop ID

Pick a unique `id` (e.g., `"stop19"`) — this becomes the URL hash (`#stop19`) and QR code target.

### Step 2: Add Stop Definition

Open `data/stops.js` and append a new object to the `window.STOPS` array:

```javascript
{
  "id": "stop19",
  "qrFile": "19-your-facility-name",  // for QR code generation
  "title": "Your Facility Full Name",
  "shortTitle": "Short Name",
  "location": "Building #### · Lab Name",
  "locationShort": "Building ####",
  "subtitle": "Lab Name · Building ####",
  "lab": "Lab Category",  // must match a key in labs.js
  "tourTime": "~20 min",
  "groupSize": "Up to 15",
  "accessible": true,  // wheelchair accessible?
  "chips": ["Capability Tag 1", "Capability Tag 2"],  // for filtering
  "available": true,  // false = "Coming soon"
  "hazards": ["Loud noises", "Uneven terrain"],  // visitor warnings
  "campusPin": { "xPct": 50, "yPct": 50 },  // position on campus map (0-100%)
  
  // Hero image shown at top of stop
  "hero": {
    "src": "img/hero.jpg",
    "alt": "Descriptive alt text for accessibility",
    "credit": "NASA/Photographer Name (Year) · Facility Name · images.nasa.gov"
  },
  
  // Thumbnail for directory card
  "thumb": "img/thumb.jpg",
  
  // Key fact shown on directory card
  "factbox": "A one-sentence wow fact about this facility.",
  
  // Audio narration (optional)
  "narration": {
    "durationLabel": "~45 sec · produced narration",
    "audio": "audio/narration.mp3",
    "text": "Full transcript of narration for accessibility..."
  },
  
  // About tab content
  "hook": "Opening sentence that hooks the visitor.",
  "whyItMatters": "Why this facility is important to NASA's mission...",
  "wowStat": 0,  // index into keyfacts array for featured stat
  "keyfacts": [
    { "num": "###", "label": "units", "detail": "Explanation of this stat" }
  ],
  
  // Science tab content
  "deepDive": {
    "summary": "Go deeper: how it works",
    "html": "Long-form explanation with <strong>HTML formatting</strong>..."
  },
  "detailImage": {
    "src": "img/detail.jpg",
    "alt": "Alt text",
    "credit": "NASA/..."
  },
  "video": {
    "embedId": "YouTubeVideoID",
    "title": "Video title",
    "credit": "NASA Marshall official channel"
  },
  
  // History tab content
  "gallery": [
    {
      "src": "img/gallery-1.jpg",
      "alt": "Alt text",
      "credit": "NASA/...",
      "caption": "Historical context..."
    }
  ],
  
  // People & Projects tab
  "askYourHost": [
    "Sample question visitors could ask tour guide?"
  ],
  
  // Specs tab
  "lookFor": "What to look for when visiting this facility in person.",
  "specs": [
    { "label": "Specification Name", "value": "Value with units" }
  ],
  
  // More Info tab
  "onepager": {
    "src": "OnePagers/facility-name.pdf",
    "title": "Facility Name Fact Sheet"
  },
  "externalLinks": [
    {
      "title": "Link Title",
      "url": "https://...",
      "context": "Brief description of what this link leads to"
    }
  ],
  
  // Navigation
  "wayfindNext": {
    "nextStopId": "stop20",  // or null if last stop
    "label": "Next stop: Facility Name"
  },
  
  // Quiz (optional)
  "quiz": {
    "question": "Quiz question text?",
    "choices": ["Choice A", "Choice B", "Choice C", "Choice D"],
    "correct": 1,  // 0-indexed
    "explanation": "Why this is the correct answer..."
  },
  
  // All media paths are relative to this folder
  "media": "media/your-facility-name"
}
```

### Step 3: Create Media Folder

```bash
mkdir -p media/your-facility-name/img
mkdir -p media/your-facility-name/audio
mkdir -p media/your-facility-name/video  # if needed
```

### Step 4: Add Media Assets

Place images in `media/your-facility-name/img/`:
- `hero.jpg` — Main hero image (1920×1080+ recommended)
- `thumb.jpg` — Directory card thumbnail (600×400+ recommended)
- `detail.jpg` — Science tab detail image
- `gallery-1.jpg`, `gallery-2.jpg`, etc. — History tab photos

Place audio in `media/your-facility-name/audio/`:
- `narration.mp3` — Narration audio (if available)

See [Media Asset Guidelines](#media-asset-guidelines) for specs.

### Step 5: Add OnePager PDF (Optional)

Place PDF in `OnePagers/`:
```bash
cp facility-name-fact-sheet.pdf OnePagers/your-facility-name.pdf
```

Update stop definition:
```javascript
"onepager": {
  "src": "OnePagers/your-facility-name.pdf",
  "title": "Facility Name Fact Sheet"
}
```

### Step 6: Test Locally

```bash
# Start local server
python -m http.server 8080

# Open in browser
open http://localhost:8080
```

Navigate to your new stop:
- From directory: Search for facility name
- Direct link: `http://localhost:8080#stop19`

Verify:
- [ ] All images load
- [ ] Audio plays (if present)
- [ ] Video embeds (if present)
- [ ] Quiz works (if present)
- [ ] All tabs render correctly
- [ ] No console errors

### Step 7: Commit & Deploy

```bash
git add data/stops.js media/your-facility-name/ OnePagers/your-facility-name.pdf
git commit -m "Add stop: Your Facility Name

- Complete stop definition with all tabs
- Hero, detail, and gallery images
- Narration audio
- OnePager PDF

Co-Authored-By: [Your Name] <your.email@nasa.gov>"

git push org main
```

GitHub Pages will rebuild in 2-3 minutes. iPads will fetch the update on next page load.

---

## Updating Existing Content

### Update Text Content

Edit `data/stops.js` and find the stop by `id`:

```javascript
{
  "id": "stop",  // Flat Floor example
  // ...
  "whyItMatters": "Updated description...",
  // ...
}
```

Commit and push:
```bash
git add data/stops.js
git commit -m "Update: Flat Floor description"
git push org main
```

### Replace Media Assets

```bash
# Replace hero image
cp new-hero.jpg media/flat-floor/img/hero.jpg

# Stage and commit
git add media/flat-floor/img/hero.jpg
git commit -m "Update: Flat Floor hero image"
git push org main
```

**Important**: Keep the same filename so the stop definition doesn't need changes. If changing filenames, update `data/stops.js` accordingly.

### Update Service Worker Cache

When adding/changing media assets, update `service-worker.js` to cache them:

```javascript
const ASSETS_TO_CACHE = [
  './index.html',
  // ... existing assets ...
  './media/your-facility-name/img/hero.jpg',  // add new assets
  './media/your-facility-name/audio/narration.mp3'
];
```

Also increment the cache version:
```javascript
const CACHE_NAME = 'msfc-tour-v2';  // was v1
```

This forces iPads to fetch fresh content instead of serving stale cached versions.

---

## Creating Curated Tours

Curated tours are defined in `data/tours.js`. Each tour is a subset of stops in a specific order.

### Add a New Tour

Open `data/tours.js` and append a new object:

```javascript
window.TOURS = [
  // ... existing tours ...
  {
    "id": "your-tour-id",
    "title": "Your Tour Name",
    "description": "Brief description for the filter chip",
    "stopIds": ["stop", "stop2", "stop5", "stop10"]  // in tour order
  }
];
```

### Example: Executive Tour (Short)

```javascript
{
  "id": "exec-tour",
  "title": "Executive Tour",
  "description": "Highlights tour for VIP visitors (90 min)",
  "stopIds": ["stop", "stop3", "stop7", "stop17"]
}
```

This creates a filter chip labeled "Executive Tour" — when clicked, only those 4 stops appear in the directory, reordered to match `stopIds`.

### Tour Design Tips

- **Keep tours to 4-8 stops** for time management
- **Order by physical proximity** when possible (minimize walking)
- **Mix test capabilities** for variety (don't do all structural tests)
- **End with a wow stop** or contact opportunity

---

## Media Asset Guidelines

### Image Specifications

| Asset Type | Recommended Size | Format | Notes |
|------------|------------------|--------|-------|
| Hero image | 1920×1080+ | JPEG | Main visual for stop, shown large |
| Thumbnail | 600×400+ | JPEG | Directory card, shown small |
| Detail image | 1200×800+ | JPEG | Science tab, shown medium |
| Gallery images | 1200×800+ | JPEG | History tab, variable sizes OK |

**Quality**: 80-90% JPEG compression. Balance file size vs visual quality for iPad bandwidth.

**Aspect ratios**: Hero images work best at 16:9. Gallery can vary.

### Audio Specifications

| Asset Type | Format | Bitrate | Notes |
|------------|--------|---------|-------|
| Narration | MP3 | 128 kbps | Mono acceptable for voice |

**Duration**: 30-60 seconds recommended. Longer narration should be split across tabs.

### Video Specifications

**Use YouTube embeds** for video content:

```javascript
"video": {
  "embedId": "dQw4w9WgXcQ",  // YouTube video ID from URL
  "title": "Video Title",
  "credit": "NASA Marshall official channel"
}
```

Do NOT commit large video files to the repo — GitHub has a 100MB file size limit, and videos would bloat clone times.

### PDF Specifications

| Asset Type | Max Size | Notes |
|------------|----------|-------|
| OnePager fact sheets | 2-5 MB | Compress if larger |

Use print-optimized PDFs (embed fonts, compress images).

### Image Credits

All images must include proper attribution:

```javascript
"credit": "NASA/Photographer Name (Year) · Facility Name · images.nasa.gov · cleared for public release"
```

**Only use cleared assets** from images.nasa.gov or Test Lab archives. No Google Images, no stock photos unless licensed.

### File Naming

Use lowercase with hyphens:
- ✅ `flat-floor-hero.jpg`
- ❌ `Flat Floor Hero.jpg`
- ❌ `flatFloorHero.jpg`

This avoids issues with case-sensitive servers and URL encoding.

---

## Testing Changes Locally

### Option 1: Python HTTP Server

```bash
cd tourapp-GitHubhosted
python -m http.server 8080
```

Navigate to `http://localhost:8080`

### Option 2: Node.js `serve`

```bash
npx serve
```

Automatically opens browser to `http://localhost:3000`

### Option 3: VS Code Live Server

Install "Live Server" extension, right-click `index.html` → "Open with Live Server"

### What to Test

- [ ] **Navigation**: Can you reach the new stop from directory?
- [ ] **Deep linking**: Does `#stop19` route correctly?
- [ ] **Media**: All images/audio/video load?
- [ ] **Tabs**: All 6 tabs render with content?
- [ ] **Responsive**: Rotate device to landscape — still readable?
- [ ] **Offline**: Airplane mode after first load — still works?
- [ ] **Accessibility**: Tab through with keyboard — logical order?

### Browser Console

Check for errors:
- `404 Not Found` → Missing asset, check file path
- `Failed to fetch` → Service worker issue, check HTTPS/localhost
- `Uncaught TypeError` → JavaScript error, check `stops.js` syntax

### Service Worker Testing

Chrome DevTools → Application → Service Workers:
- Verify "activated and is running"
- Click "Update" to force re-cache after changes
- Click "Unregister" to test fresh install

---

## Deployment Process

### Automatic Deployment (Recommended)

Every push to `main` triggers automatic GitHub Pages rebuild:

```bash
git add .
git commit -m "Descriptive commit message"
git push org main
```

**Wait 2-3 minutes** → changes live at `https://ctuckersolutions.github.io/TestLabTourApp`

### Verify Deployment

1. Open private browser window
2. Navigate to Pages URL
3. Log in with guest account
4. Force-refresh (Ctrl+Shift+R / Cmd+Shift+R)
5. Verify changes are live

### Rollback Procedure

If deployment breaks the app:

```bash
# Find last working commit
git log --oneline

# Revert to it
git revert <commit-hash>
git push org main
```

GitHub Pages rebuilds with reverted code.

### Staging Environment (Optional)

To test changes before deploying to production:

1. Create a `staging` branch
2. Enable GitHub Pages from `staging` branch at a different URL
3. Test on that URL before merging to `main`

---

## Content Style Guide

### Writing for Visitors

- **Active voice**: "Engineers test hardware" not "Hardware is tested"
- **Second person**: "You're standing at..." not "Visitors see..."
- **Present tense**: "The floor recreates..." not "The floor was designed to recreate..."

### Technical Terminology

- **Define jargon on first use**: "air-bearing floor — a surface that floats hardware on a cushion of air"
- **Conversational tone**: Avoid NASA acronyms without context
- **Story over specs**: Lead with narrative, follow with numbers

### Accessibility

- **Alt text**: Describe what's IN the image, not what it represents
  - ✅ "A test engineer adjusting hardware on the Flat Floor under low-angle lighting"
  - ❌ "Flat Floor test"
- **Transcripts**: All audio must have full text transcript
- **Link text**: Descriptive, not "click here"
  - ✅ "View the Flat Floor fact sheet (PDF)"
  - ❌ "Click here for PDF"

---

## Questions?

- **Content questions**: Contact project coordinator (see README)
- **Technical issues**: Check GitHub Issues or create a new one
- **Media sourcing**: Test Lab Compendium, images.nasa.gov, or tour guide archives

## Appendix: Stop Definition Field Reference

Complete list of all available fields in `data/stops.js`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier, used in URL hash |
| `qrFile` | string | ⚠️ | Filename prefix for QR code generation |
| `title` | string | ✅ | Full facility name |
| `shortTitle` | string | ✅ | Abbreviated name for nav |
| `location` | string | ✅ | Building number + lab name |
| `locationShort` | string | ✅ | Building number only |
| `subtitle` | string | | Secondary location detail |
| `lab` | string | ✅ | Lab category for filtering |
| `tourTime` | string | | Estimated visit duration |
| `groupSize` | string | | Max visitors |
| `accessible` | boolean | | Wheelchair accessible? |
| `chips` | array | ✅ | Capability tags for filtering |
| `available` | boolean | ✅ | `false` shows "Coming soon" |
| `hazards` | array | | Visitor safety warnings |
| `campusPin` | object | | Campus map coordinates |
| `hero` | object | ✅ | Main hero image |
| `thumb` | string | ✅ | Directory card thumbnail |
| `factbox` | string | ✅ | One-sentence wow fact |
| `narration` | object | | Audio narration + transcript |
| `hook` | string | ✅ | Opening sentence |
| `whyItMatters` | string | ✅ | Mission relevance |
| `wowStat` | number | | Index of featured keyfact |
| `keyfacts` | array | ✅ | By-the-numbers stats |
| `deepDive` | object | | Science tab long-form |
| `detailImage` | object | | Science tab image |
| `video` | object | | YouTube embed |
| `gallery` | array | | History tab photo gallery |
| `askYourHost` | array | | Discussion prompts |
| `lookFor` | string | | What to observe in person |
| `specs` | array | | Technical specifications |
| `onepager` | object | | PDF fact sheet link |
| `externalLinks` | array | | NASA.gov links |
| `wayfindNext` | object | | Next stop navigation |
| `quiz` | object | | Interactive quiz |
| `media` | string | ✅ | Base path for assets |

✅ Required · ⚠️ Required for QR codes
