# Files to Copy for Google Apps Script Deployment

## Current Situation
Your Google Apps Script project structure:
```
TourApp/
├── index.gs     (Code.gs - the doGet function)
└── index.html   (HTML file to replace)
```

## What You Need

Since we can't run the Python build script, you have **two options**:

---

## Option 1: Manual Bundle (Complex, but complete)

You need to manually create a single HTML file with everything inlined.

### Step-by-step:

1. **Start with this base**: Copy `tourapp/index.html` content

2. **Replace ALL `<link>` tags** with inlined CSS:
   ```html
   <style>
   /* Copy contents of css/variables.css */
   
   /* Copy contents of css/base.css */
   
   /* Copy contents of css/components.css */
   
   /* Copy contents of css/brief.css */
   
   /* Copy contents of css/tabs.css */
   
   /* Copy contents of css/search.css */
   </style>
   ```

3. **Replace ALL `<script src=...>` tags** with inlined JavaScript:
   ```html
   <script>
   /* Copy contents of data/stops.js */
   
   /* Copy contents of data/tours.js */
   
   /* Copy contents of js/render-tabs.js */
   
   /* Copy contents of js/render.js */
   
   /* Copy contents of js/app.js */
   
   /* Copy contents of js/tabs.js */
   
   /* Copy contents of js/search.js */
   
   /* Copy contents of js/lightbox.js */
   
   /* Copy contents of js/narration.js */
   
   /* Copy contents of js/beats.js */
   
   /* Copy contents of js/quiz.js */
   </script>
   ```

4. **Handle media files**: 
   - All `media/` paths need to be updated to external URLs
   - Upload images to Google Drive or use original images.nasa.gov URLs
   - Find and replace: `media/flat-floor/img/hero.jpg` → `https://drive.google.com/uc?id=YOUR_FILE_ID`

---

## Option 2: Simple Test Deploy (Quick, limited functionality)

For a **quick preview without media**, just copy the structure with broken image links:

### Files you need:
Copy the **entire content** of these files in order into your Apps Script HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MSFC Test Lab Tour</title>

<style>
/* PASTE ENTIRE CONTENTS OF: css/variables.css */
/* PASTE ENTIRE CONTENTS OF: css/base.css */
/* PASTE ENTIRE CONTENTS OF: css/components.css */
/* PASTE ENTIRE CONTENTS OF: css/brief.css */
/* PASTE ENTIRE CONTENTS OF: css/tabs.css */
/* PASTE ENTIRE CONTENTS OF: css/search.css */
</style>

</head>
<body>
<!-- PASTE ENTIRE <body> CONTENTS FROM: index.html -->
<!-- (everything between <body> and </body>) -->

<script>
/* PASTE ENTIRE CONTENTS OF: data/stops.js */
/* PASTE ENTIRE CONTENTS OF: data/tours.js */
/* PASTE ENTIRE CONTENTS OF: js/render-tabs.js */
/* PASTE ENTIRE CONTENTS OF: js/render.js */
/* PASTE ENTIRE CONTENTS OF: js/app.js */
/* PASTE ENTIRE CONTENTS OF: js/tabs.js */
/* PASTE ENTIRE CONTENTS OF: js/search.js */
/* PASTE ENTIRE CONTENTS OF: js/lightbox.js */
/* PASTE ENTIRE CONTENTS OF: js/narration.js */
/* PASTE ENTIRE CONTENTS OF: js/beats.js */
/* PASTE ENTIRE CONTENTS OF: js/quiz.js */
</script>

</body>
</html>
```

---

## Option 3: Use a Computer with Python (Easiest)

On any computer with Python installed:

1. Copy the `tourapp` folder to that computer
2. Open terminal/command prompt in the `tourapp` folder
3. Run: `python build_gas.py`
4. Copy the resulting `gas_index.html` content to your Apps Script

---

## Recommended Approach

**For today (quick preview):**
- Just open `tourapp/index.html` in your local browser
- Take screenshots or record your screen
- Share that as the preview

**For proper deployment:**
- Find a computer with Python
- Run the build script
- Then handle the media hosting issue

---

## Your Code.gs File

Your `index.gs` file looks good already:
```javascript
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Test Laboratory Tour - Marshall Space Flight Center')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

This will work once you have the bundled HTML in your `index.html` file.

---

## The Media Problem

The biggest issue for Apps Script is that **all image/video/audio files** need external hosting:

```
media/flat-floor/img/hero.jpg          → Need external URL
media/flat-floor/video/narration.mp4   → Need external URL
media/flat-floor/audio/narration.mp3   → Need external URL
... (repeat for all 14 stops)
```

You'll need to either:
1. Upload ~241MB of media to Google Drive and update all paths
2. Find the original images.nasa.gov URLs and update the data

---

## Bottom Line

**Simplest path to a shareable preview:**
1. Open `C:\Users\cjtucke3\OneDrive - NASA\TestLab\Projects\Tour-App\tourapp -Delessio-2\tourapp\index.html` in Chrome
2. Use your browser (it works perfectly locally with all media)
3. Share screenshots or screen recording
4. Skip Apps Script for now until you have time to handle the bundling + media hosting

**Want it on Apps Script?**
- You need Python to run the build script OR manually copy/paste ~17 files
- You need to host all media externally (Google Drive or find original URLs)
- Then paste into Apps Script

---

*The tour works beautifully right now in a regular browser - Apps Script is just a hosting complexity, not a requirement for a preview!*
