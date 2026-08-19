# Changelog — August 19, 2026

## Overview
Major redesign and restructuring of the MSFC Test Lab Tour app, moving from the dark "Mission Control" theme with beat-based progression to a light NASAWDS theme with tabbed stop pages.

---

## 🎨 Theme & Design

### Light Theme Implementation
- **Replaced dark theme with light theme as default**
  - NASA blue header (#0b3d91) on white/light gray backgrounds
  - Clean NASAWDS-style color palette
  - Improved accessibility and readability
  
- **Added dark mode toggle**
  - Moon/sun icon button in header
  - Saves preference to localStorage
  - Respects system `prefers-color-scheme` on first visit
  - All components support both themes
  
- **Updated visual elements for light theme**
  - Starfield: subtle in light (8% opacity), prominent in dark (40%)
  - Grain texture: minimal in light (2%), standard in dark (5%)
  - Background gradient: gentler in light mode
  - Shadow styles adjusted for light backgrounds

**Files Modified:**
- `css/variables.css` - Complete color token redesign
- `css/base.css` - Theme-aware backgrounds and effects
- `js/app.js` - Theme toggle function and persistence

---

## 🗂️ Content Structure

### Tabbed Stop Pages
**Replaced linear "beat" progression (Arrive → Orient → Narrate → Branch → Advance) with 5-tab structure:**

1. **About** - Overview, hook, why it matters, hero image, quiz
2. **Science** - Deep dive content, detail images, video
3. **History** - Gallery, historical content (placeholder structure)
4. **People & Projects** - "Ask your host" questions, CTA
5. **Specs** - Technical specifications, "Look for it" guidance, next stop

**Design:**
- Stop header (title, location, chips, time) always visible above tabs
- Sticky tab bar below header
- Clean tab switching with fade animation
- Mobile-responsive (stacks properly on small screens)

**Files Created:**
- `js/render-tabs.js` - New tab-based stop renderer
- `js/tabs.js` - Tab switching functionality
- `css/tabs.css` - Tab styling and layout

**Files Modified:**
- `js/render.js` - Checks for tab builder, falls back to beats
- `index.html` - Added new CSS/JS includes

---

## 🔍 Search & Filtering

### Search Functionality
- **Added search bar to Stops page**
  - Real-time filtering (200ms debounce)
  - Searches across: stop name, building/location, tags/chips
  - Clears active filters when searching

### Filter Organization
- **Created labeled filter sections:**
  - "Curated Tours" container: History Walk, Active Test Stands, Quick Look
  - "Status" container: Active, Legacy, Campus Map
  - Side-by-side on desktop, stacked on mobile
  - Clear visual hierarchy with borders and labels

### Terminology Updates
- Changed "Virtual" → "Legacy" throughout
- Removed "canned tour" → "curated tour"
- Updated "Virtual site" badge → "Legacy"
- Moved Campus Map chip into Status filter group

**Files Created:**
- `css/search.css` - Search box and filter group styling
- `js/search.js` - Search functionality

**Files Modified:**
- `js/render.js` - Updated chip generation, filter logic
- `data/tours.js` - Added tour descriptions
- `index.html` - Added search UI and filter containers

---

## 📝 Content Improvements

### "Why It Matters" Restructure
**Restored two-part structure from original design:**
- **👤 To you** - Personal connection for visitors
- **🌍 To NASA and the world** - Broader mission impact

- Side-by-side cards on desktop
- Blue left border accent
- Uppercase headings with emoji icons
- Placeholder content from content-guidelines.md

**Future:** Data can be populated with `whyItMattersToYou` and `whyItMattersToWorld` fields in stops.js

### Home Page Cleanup
**Removed unnecessary sections:**
- ❌ "How it works" section
- ❌ "Reviewers" button
- ❌ "About this mockup" details
- ✅ Clean hero with two CTAs: "Start the tour" and "Work with the Test Lab"

---

## 🐛 Bug Fixes

### Quiz Functionality
**Issue:** Quiz buttons not responding to clicks
- **Cause:** Class mismatch (`quiz-opt` vs `opt`) and missing onclick handlers
- **Fix:** Updated render-tabs.js to use correct class and add onclick handlers
- Quiz now properly shows feedback, highlights correct/wrong answers, disables after selection

### Quiz Button Styling
**Issue:** Cramped, hard-to-tap quiz buttons
- Increased padding: `var(--space-sm) var(--space-md)`
- Increased spacing between buttons: `var(--space-xs)`
- Increased font size: 14px → 15px
- Increased min-height: 44px → 48px
- Added line-height: 1.4 for better readability

### Specs Table Spacing
**Issue:** Numbers cramped in "By the numbers" table
- Increased first column width: 64px → 100px
- Added right padding to number column
- Better visual separation between columns

---

## 📦 Files Summary

### New Files Created
```
css/tabs.css          - Tab navigation styling
css/search.css        - Search and filter styling
js/render-tabs.js     - Tab-based stop builder
js/tabs.js            - Tab switching logic
js/search.js          - Search functionality
```

### Modified Files
```
index.html            - Added new resources, updated structure
css/variables.css     - Complete theme token overhaul
css/base.css          - Theme-aware adjustments
css/components.css    - Quiz button improvements, keyfacts spacing
js/render.js          - Tab builder integration, filter updates
js/app.js             - Theme toggle functionality
data/tours.js         - Added descriptions, updated comments
```

---

## 🏢 Lab Categories & Organization (August 19, 2026 - Evening Session)

### Bento-Style Lab Cards on Home Page
**Added browseable lab category cards below the hero section:**
- **Layout:** Asymmetric bento grid with visual hierarchy
  - Propulsion: Large hero card (4 columns × 2 rows)
  - Structural Dynamics: Tall card (2 columns × 2 rows)
  - Structural Strength: Medium card (3 columns × 1 row)
  - Experimental Fluids & Environmental: Medium card (3 columns × 1 row)
  - Special Test Equipment: Wide card (6 columns × 1 row)
- **Content:** Each card shows up to 4 stops with "See all →" filter link
- **Visual Enhancement:** Hero images at 15% opacity behind each card
- **Responsive:** Desktop bento → tablet 2-column → mobile single-column

**Files Created:**
- `css/lab-cards.css` - Bento grid layout and card styling

**Files Modified:**
- `index.html` - Added lab cards section and CSS link
- `js/render.js` - Added `renderLabCards()` and `filterByLab()` functions
- `data/stops.js` - Added `lab` field to all 16 stops

### Lab Categorization (ET10-ET50 Mapping)
**Added `lab` field to categorize all stops by Test Lab branch:**
- **Propulsion (ET10):** 7 stops
  - F-1 Engine Test Stand, T-Tower, Solid Propulsion Test Area
  - Test Stand 4670, Redstone Test Stand, Test Stand 116, Test Stand 115
- **Structural Dynamics (ET40):** 3 stops
  - Flat Floor, Dynamic Test Stand (legacy), Vibe Table (placeholder)
- **Structural Strength (ET30):** 3 stops
  - Structural Test Stands, Load Test Annex (placeholder), Load Test Annex Extension (placeholder)
- **Experimental Fluids & Environmental (ET20):** 3 stops
  - Thermal Vacuum Testing, Neutral Buoyancy Simulator (legacy), Environmental Test Facility
- **Special Test Equipment (ET50):** 0 stops (coming soon)

### Building 4619 Multi-Lab Complex
**Added 3 placeholder stops for Building 4619 facilities:**
1. **Load Test Annex (LTA)** - Structural Strength (ET30)
2. **Load Test Annex Extension (LTAE)** - Structural Strength (ET30)
3. **Structural Dynamics Test Capability (Vibe Table)** - Structural Dynamics (ET40)

**Updated Environmental Test Facility:**
- Changed location from "East Test Area & main campus" to "Building 4619 & East Test Area"
- Now properly searchable by building number

**Search Enhancement:**
- Fixed search to query `.meta` class (was incorrectly targeting `.muted`)
- Searching "4619" now returns all 5 facilities in that building

### Listen Button Color Update
**Changed audio button from amber to NASA red:**
- Background: `var(--nasa-red)` with white text
- Hover: `filter: brightness(.93)` for consistency with other red buttons
- Works in both light and dark modes

**Files Modified:**
- `css/components.css` - Updated `.audio-btn` styling

---

## 🎯 Remaining Tasks

### Next Session - High Priority
- ✅ ~~Add lab categories to Home screen~~ **COMPLETED**

### Content Population
- [ ] Add `whyItMattersToYou` and `whyItMattersToWorld` to each stop in stops.js
- [ ] Add historical content for History tab
- [ ] Populate "People & Projects" with actual team/project info
- [ ] Add legacy site relationships (e.g., "Check out its predecessor")

### Features
- [ ] Link legacy sites to their active counterparts
- [ ] Add tour descriptions to UI (currently in data but not displayed)
- [ ] Consider PPE/hazard warnings display location

### Testing
- [ ] Test on iPad via PocketServer
- [ ] Verify all audio/video playback
- [ ] Test search across all stops
- [ ] Verify quiz functionality on all stops
- [ ] Test theme toggle persistence

---

## 💡 Design Decisions

### Why Tabs Instead of Beats?
- **User request:** Explicit requirement for tab-based navigation
- **Better organization:** Clear content categories vs. linear progression
- **Flexibility:** Easier to skip to relevant information
- **Familiar pattern:** Standard web UX pattern

### Why Two-Column "Why It Matters"?
- **Original design:** Matches content-guidelines.md structure
- **Clear purpose:** Separates personal relevance from institutional importance
- **Visual balance:** Two columns work better than three for this content length

### Why Light Theme Default?
- **Accessibility:** Better readability for general audiences
- **NASAWDS alignment:** Matches government design system
- **User preference:** Explicit request to move away from dark "Mission Control" aesthetic
- **Flexibility:** Dark mode still available via toggle

---

## 📊 Impact

- **Improved UX:** Clearer navigation, better information architecture
- **Better accessibility:** Light theme, improved contrast, larger touch targets
- **Enhanced search:** Visitors can quickly find facilities by building number or capability
- **Flexible theming:** Supports user preference while maintaining design consistency
- **Maintainable structure:** Tab system easier to extend than beat progression
- **Content-ready:** Structure supports planned content (history, people, projects)

---

*This changelog documents the collaborative redesign session on August 19, 2026, transforming the tour app from a dark-themed beat-based navigation to a light-themed tabbed structure with improved search and filtering capabilities.*
