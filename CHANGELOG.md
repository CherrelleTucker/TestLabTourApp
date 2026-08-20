# Changelog — MSFC Test Lab Tour App

## 2026-08-20 — Private Hosting, PWA, Documentation, UI Polish

### Private GitHub Enterprise Deployment
- **Migrated to GitHub Enterprise Cloud** with private repository and private GitHub Pages
- **Access control**: Repository and live site accessible only to invited collaborators
- **Authentication**: TestLabTours shared read-only account for iPad authentication
- **10 iPad deployment model**: All iPads pre-authenticated on NASA Guest WiFi
- **Internal use only**: Training and on-site visitor resource, not public-facing

### Progressive Web App (PWA) Features
- **Offline capability**: Service worker caches assets for offline use after first load
- **Installable app**: "Add to Home Screen" creates native-like app experience on iPads
- **App manifest**: Proper PWA configuration with Test Lab branding
- **App icon**: Square Test Lab icon hosted in public assets repo for iOS compatibility

### Branding Updates
- **Test Lab logo** replaces NASA meatball in header
- **Pill-shaped badge** container for horizontal logo (was circular)
- **Simplified header**: Logo + theme toggle only, removed redundant text
- **App icon**: Custom Test Lab square icon for home screen (via public TestLabAssets repo)

### UI Improvements
- **Back button**: Added to Tour stops page (upper left, returns to home)
- **Clear filters**: Discrete text link below filter chips (was full-width button)
- **Page navigation scroll fix**: Bottom nav now scrolls to top when clicked
- **Cleaner hero**: Removed "Self-Guided Tour" eyebrow and redundant instructional text

### Documentation
- **README.md**: Project overview, private hosting model, access control, deployment guide
- **SETUP.md**: Complete iPad setup with actual credentials, accounts summary, workflow diagrams
- **CONTRIBUTING.md**: Content authoring guide for adding/updating tour stops
- **Issue templates**: Created backlog for content priorities and feature requests
- **Quick reference card**: Printable guide for tour guides with all credentials

### Content Planning
- **ET40 priorities identified**: East Vibration Lab (65klbf shaker - 80% guest interest), Anechoic Acoustic, Impact Modal
- **OnePagers received**: East Vibration Lab and Structural Dynamics testing (April 2026)
- **Content backlog**: ETF V20, Flat Floor review, West Test Area, historical timeline recovery
- **Feature requests**: "Build Your Own Tour" interactive tool, Auburn lidar virtual tours

### Infrastructure
- **Three repositories**:
  - `CherrelleTucker/TestLabTourApp` — Personal development repo (public)
  - `CTuckerSolutions/TestLabTourApp` — Production app (private Pages)
  - `CTuckerSolutions/TestLabAssets` — Public assets for icons/logos
- **Hardware accounts documented**:
  - Test Lab Apple ID (device unlock): MSFCet01
  - TestLabTours GitHub (app access): GettinNASA26
  - NASA Guest WiFi (network connectivity)

### Bug Fixes
- Service worker cache version management for updates
- Badge shape rendering (circle → pill/oblong)
- Filter positioning and spacing adjustments
- GitHub Pages deployment queue conflicts resolved

## 2026-08-19 — Major Redesign, GitHub Pages Deployment, ET50 & History Tour

### New Stops Added
- **stop17: Special Test Equipment & Design (ET50)** — Building 4666
  - Focus on ET50's role designing infrastructure that enables all other test branches
  - Sarah's F-1 demolition story as narration
  - Highlights hardware reuse, common floor patterns, institutional memory
  - Links to facilities they support (4693, 4670, 4697, 4699, 4550, etc.)
  - ET50 now shows as active on home page instead of "Coming soon"
- **stop18: Marshall History Tour** — Institutional history Easter egg
  - ABMA to NASA transition, von Braun's story, Explorer 1 launch
  - Redstone Test Stand origins, Jordan Cemetery history
  - External links to YouTube, Wikipedia, Huntsville History Collection
  - Listed under ET50 lab category as historical deep-dive

## 2026-08-19 — Major Redesign & GitHub Pages Deployment

### Theme & Design
- **Light theme as default** with optional dark mode toggle
- NASA blue (#0b3d91) header on white/light gray backgrounds
- Cleaner NASAWDS-style color palette
- Dark mode still available via moon/sun toggle button in header
- Theme preference saved to localStorage

### Content Structure
- **Replaced linear "beat" progression with 6-tab structure per stop:**
  - About: Overview, hook, why it matters, hero image, quiz
  - Science: Deep dive, detail images, video
  - History: Gallery, historical content
  - People & Projects: "Ask your host" questions, Work with Us CTA
  - Specs: Technical specs, "Look for it" guidance, next stop navigation
  - **More Info: OnePager PDFs, external NASA links, contact CTA**
- Stop header (title, location, chips, time) always visible above tabs
- Sticky tab bar below header for easy navigation

### Navigation Improvements
- **Previous/Next buttons at bottom of each tab panel** for easier navigation without scrolling
- Buttons scroll to tab bar (not page top) for better UX
- **Tab switching fixed** for all stops (previously only worked on Flat Floor)
  - switchToTab now correctly targets the active stop section instead of always targeting the first stop in DOM
  - Previous/Next buttons use event delegation instead of inline onclick
- Removed "Brief" section (internal documentation)
- Removed Brief button from header and bottom navigation

### Search & Filtering
- Real-time search bar above filter chips (200ms debounce)
- Searches across stop name, location, and tags
- **Organized filters into labeled containers:**
  - "Curated Tours" (History Walk, Active Test Stands, Quick Look)
  - "Status" (Active, Legacy, Campus Map)
- Campus Map button moved to Status container with `margin-left: auto`

### Home Page Features
- **Browse by Test Lab section** with 5 lab category cards:
  - Propulsion (ET10)
  - Structural Dynamics (ET40)
  - Structural Strength (ET30)
  - Experimental Fluids & Environmental (ET20)
  - Special Test Equipment (ET50)
- Each lab card shows: hero image, lab name, up to 4 stops, "See all" link, **OnePager PDF link**
- **"Before you go" tour instructions** with actual parking, PPE, photography rules
  - Replaced generic placeholder text with real MSFC tour procedures
  - Removed redundant "How to take this tour" section
  - Increased spacing between sections for better readability
  - Changed to proper class name (inner) to pick up accordion styling
- **Removed "Contact us" button** from header bar (contact page and hero CTA are sufficient) — verified working

### Resources & External Links
- **OnePagers folder added to repo** (11 PDF fact sheets for ET branches)
- OnePager links on lab category cards on home page
- OnePager links in More Info tab of each stop
- External links to:
  - Marshall Space Flight Center Capabilities page
  - MSFC home page
- "Work with the Test Lab" CTAs throughout with email contact

### Deployment
- **Moved to root level** for cleaner URL structure
  - Old: `/tourapp/`
  - New: `/` (root)
- Successfully deployed to **GitHub Pages**
- Site accessible at: `https://cherrelletucker.github.io/TestLabTourApp/`
- All media files (images, video, audio) working correctly
- OnePagers served directly from repo

### Bug Fixes
- Fixed quiz buttons not responding (class mismatch and missing onclick handlers)
- Improved quiz button sizing (increased padding, margins, font size, min-height)
- Fixed "By the numbers" table padding in Specs tab
- Fixed Campus Map button positioning
- Fixed OnePager paths after root-level move

### Files Structure
```
TestLabTourApp/
├── index.html               # Main app
├── OnePagers/              # Lab-specific PDF fact sheets
│   ├── ET01_TEST LAB_3_1_21 .pdf
│   ├── ET10_PTL 3_1_21.pdf
│   ├── ET20_ARF_6_14_23.pdf
│   ├── ET20_ETF_6_13_23.pdf
│   ├── ET20_FD_3_1_21.pdf
│   ├── ET30_SSTL _3_1_21.pdf
│   ├── ET40 SDT _3_1_21.pdf
│   ├── ET50_STE_3_1_21.pdf
│   └── V-20 One Pager 100323.pdf
├── css/                    # 6 CSS files
├── js/                     # 11 JavaScript files
├── data/                   # stops.js, tours.js
├── media/                  # All images, video, audio (~240MB)
└── qr/                     # QR codes for each stop
```

### Content Updates
- Tour descriptions added for all curated tours
- "Ask your host" questions populated for stops
- "Why it matters" structured as two-part (To you / To NASA and the world)
- Terminology: "Virtual" → "Legacy", "canned tours" → "curated tours"
- **Em-dashes replaced with colons** in welcome hero text and all 16 stop titles
- **Transcript moved to collapsible dropdown** within audio player
  - "Show transcript" button integrated into Listen bar (white text with underline)
  - Transcript expands/collapses below audio controls instead of separate container
  - Toggle updates button text between "Show/Hide transcript"

---

## Future Work

### High Priority
- **Replace em-dashes (—) with appropriate punctuation** throughout stops.js
  - Use colons for clarifications
  - Use periods for sentence breaks
  - Use commas for list continuations
  - ~83 occurrences to update
- **Move tour instructions below lab cards** and expand "Before you go" section:
  - Parking information
  - PPE requirements
  - Check-in procedures
  - Safety protocols
  - Accessibility information

### Content Additions
- Add `whyItMattersToYou` and `whyItMattersToWorld` fields to all stops
- Populate History tab with historical content and photos
- Link legacy sites to their active counterparts with callouts
- Populate "People & Projects" with actual team/project information
- Consider PPE/hazard warnings display location

### Features
- Add tour descriptions to UI (currently in data but not displayed)
- Consider adding tour duration estimates
- Add print-friendly stylesheet for handouts

---

## Technical Details

### Built With
- Vanilla JavaScript (ES5-compatible)
- CSS custom properties (oklch color space)
- Offline-first architecture (no CDN dependencies)
- GitHub Pages for hosting

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Works offline via local file:// protocol

---

**Last Updated:** 2026-08-19  
**Deployed:** https://cherrelletucker.github.io/TestLabTourApp/
