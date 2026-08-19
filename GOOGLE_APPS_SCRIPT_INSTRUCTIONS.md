# Google Apps Script Deployment Instructions

## Overview
To host this tour app on Google Apps Script, you need to create a standalone HTML file with all CSS, JavaScript, and data inlined (no external file references).

## Quick Start

### Option 1: Use the Build Script (Recommended)
```bash
cd "c:\Users\cjtucke3\OneDrive - NASA\TestLab\Projects\Tour-App\tourapp -Delessio-2\tourapp"
python build_gas.py
```

This will create `gas_index.html` with everything bundled.

### Option 2: Manual Build
If you don't have the build script, follow these steps:

## Manual Build Steps

1. **Start with index.html as base**

2. **Inline all CSS files** (in order):
   - css/variables.css
   - css/base.css
   - css/components.css
   - css/brief.css
   - css/tabs.css
   - css/search.css
   
   Replace:
   ```html
   <link rel="stylesheet" href="css/variables.css">
   ```
   
   With:
   ```html
   <style>
   /* contents of variables.css */
   </style>
   ```

3. **Inline all JavaScript files** (in order):
   - data/stops.js
   - data/tours.js
   - js/render-tabs.js
   - js/render.js
   - js/app.js
   - js/tabs.js
   - js/search.js
   - js/lightbox.js
   - js/narration.js
   - js/beats.js
   - js/quiz.js
   
   Replace:
   ```html
   <script src="data/stops.js"></script>
   ```
   
   With:
   ```html
   <script>
   /* contents of stops.js */
   </script>
   ```

4. **Update media paths**:
   
   All media references need to be hosted externally (Google Apps Script can't serve binary files like images/videos). Options:
   
   - Host on Google Drive (get shareable links)
   - Host on NASA CDN/server
   - Use existing images.nasa.gov URLs
   
   Find and replace in the bundled file:
   ```
   media/flat-floor/img/hero.jpg 
   → 
   https://your-cdn.com/media/flat-floor/img/hero.jpg
   ```

## Google Apps Script Setup

1. **Create new Apps Script project**:
   - Go to https://script.google.com
   - New Project
   - Name it "MSFC Test Lab Tour"

2. **Create HTML file**:
   - File → New → HTML file
   - Name it `index`
   - Paste your bundled HTML content

3. **Create doGet function** (Code.gs):
   ```javascript
   function doGet() {
     return HtmlService.createHtmlOutputFromFile('index')
       .setTitle('MSFC Test Lab Tour')
       .setFaviconUrl('https://www.nasa.gov/favicon.ico')
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   }
   ```

4. **Deploy**:
   - Deploy → New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone (or Anyone with link)
   - Deploy
   - Copy the deployment URL

## Important Notes

### Media Files
Google Apps Script **cannot serve binary files** (images, videos, audio). You must:

1. Upload media to Google Drive:
   - Upload all files from `media/` folder
   - Right-click → Get link → Change to "Anyone with the link"
   - Use the sharing link format: `https://drive.google.com/uc?id=FILE_ID`

2. Or use a CDN/external host

### File Size Limits
- Google Apps Script has a 50MB limit per file
- If your bundled HTML exceeds this, you'll need to:
  - Externalize the data files (stops.js, tours.js)
  - Serve them from Google Drive or external host
  - Load them via fetch() in the app

### Testing
- Apps Script doesn't support `file://` protocol testing
- You must deploy and test via the web app URL
- Use "Test deployments" for development

## Current Media That Needs Hosting

From the tour app, these folders need external hosting:
```
media/
├── flat-floor/
│   ├── img/
│   ├── video/
│   └── audio/
├── structural-test-stands/
├── thermal-vac/
├── f1-engine/
├── nbs/
├── dynamic-test-stand/
├── t-tower/
├── solid-propulsion/
├── test-stand-4670/
├── redstone/
├── test-stand-116/
├── environmental-test/
├── test-stand-115/
└── shared/
    └── img/
        ├── NASA-Logo-Large.png
        └── campus-map.jpg
```

## Recommended Workflow

1. **Build the standalone HTML** (with build script or manually)
2. **Upload media to Google Drive** or NASA CDN
3. **Update all media paths** in the HTML to point to external URLs
4. **Create Apps Script project** with doGet() function
5. **Paste HTML** into index.html file
6. **Deploy** and test
7. **Share** the deployment URL

## Alternative: Host on NASA Server

If you have access to NASA web hosting, consider:
- Hosting the entire `tourapp` folder as-is (no bundling needed)
- Simpler deployment
- Better performance
- No file size limits
- Native media serving

The current structure is already web-server ready - just upload the `tourapp` folder and point to `index.html`.

---

*For questions or issues, refer to Google Apps Script documentation: https://developers.google.com/apps-script/guides/html*
