#!/usr/bin/env python3
"""
Google Apps Script build script for MSFC Test Lab Tour
Bundles all CSS and JS into a single HTML file.
Media files must be hosted externally (Google Drive, CDN, etc.)

Usage: python build_gas.py
Output: gas_index.html
"""

import os
import re

def read_file(path):
    """Read file contents"""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"Warning: {path} not found")
        return f"/* {path} not found */"

def main():
    print("Building Google Apps Script bundle...")

    # Read base HTML
    html = read_file('index.html')

    # CSS files to inline (in order)
    css_files = [
        'css/variables.css',
        'css/base.css',
        'css/components.css',
        'css/brief.css',
        'css/tabs.css',
        'css/search.css'
    ]

    # JavaScript files to inline (in order)
    js_files = [
        'data/stops.js',
        'data/tours.js',
        'js/render-tabs.js',
        'js/render.js',
        'js/app.js',
        'js/tabs.js',
        'js/search.js',
        'js/lightbox.js',
        'js/narration.js',
        'js/beats.js',
        'js/quiz.js'
    ]

    # Bundle all CSS
    css_bundle = []
    for css_file in css_files:
        content = read_file(css_file)
        css_bundle.append(f"/* {css_file} */\n{content}")

    bundled_css = '\n\n'.join(css_bundle)

    # Replace CSS links with bundled styles
    css_pattern = r'<link rel="stylesheet" href="css/[^"]+\.css">\n?'
    html = re.sub(css_pattern, '', html)

    # Insert bundled CSS
    html = html.replace('</head>', f'<style>\n{bundled_css}\n</style>\n</head>')

    # Bundle all JavaScript
    js_bundle = []
    for js_file in js_files:
        content = read_file(js_file)
        js_bundle.append(f"/* {js_file} */\n{content}")

    bundled_js = '\n\n'.join(js_bundle)

    # Replace JS script tags with bundled script
    js_pattern = r'<script src="[^"]+\.js"></script>\n?'
    html = re.sub(js_pattern, '', html)

    # Insert bundled JavaScript before </body>
    html = html.replace('</body>', f'<script>\n{bundled_js}\n</script>\n</body>')

    # Add notice about media files
    notice = """
<!--
  IMPORTANT: This file is bundled for Google Apps Script deployment.

  Media files (images, videos, audio) are NOT bundled and must be hosted externally:
  - Upload media folder to Google Drive or NASA CDN
  - Replace all media/ paths with external URLs
  - Example: media/flat-floor/img/hero.jpg -> https://drive.google.com/uc?id=YOUR_FILE_ID

  Search for "media/" in this file to find all references that need updating.
-->
"""
    html = html.replace('<body>', f'<body>\n{notice}')

    # Write output
    output_path = 'gas_index.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    # Calculate size and report
    size_mb = len(html.encode('utf-8')) / 1024 / 1024
    media_refs = len(re.findall(r'(?:src|poster|data-audio-src|href)="media/', html))

    print(f"\n✓ Bundle created: {output_path}")
    print(f"  Size: {size_mb:.2f} MB")
    print(f"  Media references to externalize: {media_refs}")
    print(f"\n⚠ Next steps:")
    print(f"  1. Upload media/ folder to Google Drive or CDN")
    print(f"  2. Replace all 'media/' paths in {output_path} with external URLs")
    print(f"  3. Create Apps Script project with doGet() function")
    print(f"  4. Paste {output_path} contents into Apps Script HTML file")
    print(f"  5. Deploy as web app")
    print(f"\nSee GOOGLE_APPS_SCRIPT_INSTRUCTIONS.md for detailed steps.")

if __name__ == '__main__':
    main()
