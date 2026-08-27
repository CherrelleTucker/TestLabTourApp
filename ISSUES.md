# GitHub Issues to Create

Create these issues at: https://github.com/CTuckerSolutions/TestLabTourApp/issues/new

---

## Issue 1: Finalize ET40 Structural Dynamics Tour Stops

**Title**: Content: Finalize ET40 Structural Dynamics (3 tour stops)

**Labels**: `content`, `priority`

**Body**:
```markdown
## Overview
ET40 Structural Dynamics has THREE distinct tour stops that need content finalization. Based on 2026-08-20 meeting with ET40 staff, guest interest breakdown:
- **65klbf Shaker (East Vibration Lab)**: 80% of guests want to see this
- **Anechoic Acoustic Testing**: 10% of guests
- **Impact Modal Testing**: 10% of guests

## Stops to Create/Update

### 1. East Vibration Lab (65klbf Shaker) - PRIORITY
- [ ] Create new stop definition in `data/stops.js` (if not exists)
- [ ] Add OnePager: `OnePagers/East Vibration Lab Capability Brochure.pdf` ✓ (already in repo)
- [ ] Hero photo of 65klbf shaker
- [ ] Gallery photos showing test articles
- [ ] Technical specs from capability brochure
- [ ] Quiz question about vibration testing

**Reference materials**:
- `OnePagers/East Vibration Lab Capability Brochure.pdf`
- `OnePagers/MSFC Structural Dynamics Testing April 2026.pdf`

### 2. Anechoic Acoustic Testing
- [ ] Create stop definition or merge into existing ET40 stop
- [ ] Photos of anechoic chamber
- [ ] Technical specs (frequency range, SPL capabilities)
- [ ] Use cases (launch acoustics, payload fairing testing)

### 3. Impact Modal Testing
- [ ] Create stop definition or merge into existing ET40 stop
- [ ] Photos of impact testing setup
- [ ] Technical specs (hammer types, frequency response)
- [ ] Use cases (modal analysis, structural health monitoring)

## Content POC
**Contact**: ET40 Structural Dynamics staff  
**Input received**: 2026-08-20 meeting  
**OnePagers received**: ✓

## Notes
- 80/10/10 split suggests East Vibration Lab should be featured prominently
- Consider making East Vibration Lab a standalone stop, with acoustic/modal as tabs or secondary stops
- All three share Building 4619 location
- Cross-link to Flat Floor stop (same building, different test capability)

## Definition of Done
- [ ] All three test capabilities represented in tour content
- [ ] East Vibration Lab prioritized (80% guest interest)
- [ ] Technical specs accurate per OnePagers
- [ ] Photos from ET40 staff or images.nasa.gov
- [ ] Content reviewed by ET40 POC
- [ ] Committed to `main` branch
```

---

## Issue 2: Finalize Vacuum Test Chamber (ETF/V20)

**Title**: Content: Finalize ETF Vacuum Test Chamber (V20)

**Labels**: `content`, `priority`

**Body**:
```markdown
## Facility
**Stop ID**: (check `data/stops.js` for existing stop ID, or assign new one)  
**Facility**: V20 Vacuum Test Chamber  
**Lab**: Environmental Test (ETF)  
**Building**: 4619

## Current Status
- [ ] Stop exists in `data/stops.js`
- [ ] Media assets added (photos, audio, video)
- [ ] OnePager PDF included
- [ ] All 6 tabs populated (About, Science, History, People, Specs, More Info)

## Content Needed
- [ ] Hero image of V20 chamber exterior/interior
- [ ] Technical specifications (chamber volume, pressure range, temperature range)
- [ ] Use cases (thermal-vacuum testing, space environment simulation)
- [ ] Gallery photos showing test articles inside chamber
- [ ] Historical context (when built, notable tests)
- [ ] Contact CTA for ETF branch

## Notes
- V20 is one of Marshall's iconic test facilities
- High visitor interest (visible from outside, impressive scale)
- Cross-reference with other ETF capabilities if applicable

## Definition of Done
- [ ] Content accurate and approved by ETF POC
- [ ] High-quality hero image
- [ ] Technical specs complete
- [ ] Committed to `main` branch
```

---

## Issue 3: Finalize Flat Floor Content

**Title**: Content: Finalize Flat Floor (Flight Robotics Lab)

**Labels**: `content`, `priority`

**Body**:
```markdown
## Facility
**Stop ID**: `stop` (existing stop)  
**Facility**: Flat Floor / Flight Robotics Lab  
**Lab**: Structural Dynamics  
**Building**: 4619

## Current Status
- [x] Stop exists in `data/stops.js`
- [ ] All content finalized and approved
- [ ] Recent photos from Artemis III testing
- [ ] Quiz questions tested

## Content Review Needed
- [ ] Verify technical specs are current
- [ ] Confirm photo credits and clearances
- [ ] Review narration script for accuracy
- [ ] Update with any new Artemis III test results
- [ ] Cross-check "Ask Your Host" questions with tour guide feedback

## Notes
- This is stop #1 in the current app (hero stop)
- Content mostly complete but needs final review
- Photos from Artemis III lunar lighting tests are strong visuals

## Definition of Done
- [ ] Content reviewed by Structural Dynamics POC
- [ ] All media assets cleared for public release
- [ ] Technical specs verified as current
- [ ] Committed to `main` branch
```

---

## Issue 4: Finalize West Test Area Content

**Title**: Content: Finalize West Test Area Tour Stops

**Labels**: `content`, `priority`

**Body**:
```markdown
## Overview
West Test Area encompasses multiple outdoor test stands. Need to identify which facilities to feature and finalize content for each.

## Potential Tour Stops in West TA
- [ ] Identify specific test stands to include (e.g., 116, 300, others)
- [ ] Determine if one comprehensive "West TA" stop or multiple individual stands
- [ ] Confirm current operational status of each stand
- [ ] Verify visitor access and safety considerations

## Content Needed (per stop)
- [ ] Hero photo of test stand
- [ ] Technical specifications (thrust capability, test duration, propellant types)
- [ ] Historical context (Apollo, Shuttle, SLS testing)
- [ ] Gallery photos showing tests in action
- [ ] Safety information for outdoor tours
- [ ] Campus map pin placement

## Notes
- West TA facilities are outdoors (weather considerations)
- May require special PPE or safety briefing
- High visual interest (large-scale hardware, flame trenches)
- Historical significance (Saturn V testing heritage)

## Definition of Done
- [ ] West TA test stands identified for tour inclusion
- [ ] Content complete for each featured stand
- [ ] Photos from recent tests (if available) or historical archives
- [ ] Safety/access information documented
- [ ] Committed to `main` branch
```

---

## Issue 5: Recover Historical Timeline Content

**Title**: Feature: Restore historical timeline from previous app versions

**Labels**: `enhancement`, `content`

**Body**:
```markdown
## Description
Previous versions of the tour app included historical timeline information that was removed during redesigns. This content provided valuable institutional context and should be restored.

## What Was Removed
- [ ] Audit previous app versions (check git history, old mockups, backups)
- [ ] Identify timeline content that was present
- [ ] Document what was removed and why
- [ ] Determine what should be restored vs left out

## Proposed Restoration
- [ ] Recover timeline content from previous versions
- [ ] Decide where timeline fits in current app structure:
  - Option A: Dedicated "History" stop or section
  - Option B: Integrated into existing stops' History tabs
  - Option C: New timeline view accessible from welcome screen
- [ ] Update timeline with recent events (2024-2026)
- [ ] Source photos/media for timeline milestones

## Timeline Content Ideas
- ABMA to NASA transition (1960)
- Apollo-era test programs (1960s-1970s)
- Shuttle-era testing (1980s-2000s)
- SLS development (2010s-present)
- Artemis program (2020s)
- Key facility construction/upgrades

## Notes
- Timeline adds educational value and institutional memory
- Helps visitors understand Marshall's role in space history
- Can tie current facilities to historical programs

## Definition of Done
- [ ] Previous timeline content recovered from backups/git history
- [ ] Timeline location decided and implemented
- [ ] Content reviewed for accuracy
- [ ] Media assets sourced and cleared
- [ ] Committed to `main` branch
```

---

## Issue 6: Build-a-Tour Feature with Travel Time Calculation

**Title**: Feature: Interactive "Build Your Own Tour" tool with travel time calculation

**Labels**: `enhancement`, `feature-request`, `priority`

**Body**:
```markdown
## Description
Allow visitors (or tour coordinators) to dynamically create custom tours based on:
- **Interests/Topics**: (e.g., "propulsion testing", "space station hardware", "historical facilities")
- **Location**: (e.g., "Building 4619 only", "East Test Area tour")
- **Tags/Capabilities**: (e.g., "structural testing", "environmental simulation")

**NEW REQUIREMENT**: Calculate **total tour time** including both stop durations AND travel time between stops.

### Travel Time Examples
- **Within Building 4619**: Flat Floor → LTA → LTAE = 1-3 minute walks between stops
- **Across campus**: Building 4619 → West Test Area (WTA) = ~5 minute drive
- **Same building, different labs**: Minimal travel time
- **Different areas**: Must account for driving/walking distance

This would complement existing curated tours with a personalized tour planning tool.

## User Stories

**As a tour coordinator**, I want to build a custom tour for a VIP group interested in propulsion testing, so I can show them only relevant facilities without browsing the full directory.

**As a visitor**, I want to filter tour stops by building location, so I can plan an efficient walking route.

**As a tour guide**, I want to create a "greatest hits" tour combining stops from different labs, so I can tailor the experience to time constraints and group interests.

## Data Model Requirements

### Travel Time Matrix
Each stop needs travel time data to other stops:

```json
{
  "id": "stop",
  "title": "Flat Floor",
  "building": "4619",
  "tourTime": "~30 min",
  "travelTime": {
    "stop14": {"minutes": 2, "mode": "walk"},  // to LTA
    "stop15": {"minutes": 3, "mode": "walk"},  // to LTAE
    "stop7": {"minutes": 5, "mode": "drive"},  // to T-Tower (WTA)
    "stop9": {"minutes": 7, "mode": "drive"}   // to Test Stand 4670
  }
}
```

**Travel modes:**
- `walk` - Within same building or adjacent buildings
- `drive` - Requires vehicle transport across campus
- `shuttle` - Campus shuttle required (if applicable)

### Calculated Tour Time
```
Total Time = Σ(stop durations) + Σ(travel times between consecutive stops)
```

**Example calculation:**
- Stop 1: Flat Floor (30 min)
- Travel: Walk to LTA (2 min)
- Stop 2: LTA (15 min)
- Travel: Walk to LTAE (3 min)
- Stop 3: LTAE (15 min)
- **Total: 65 minutes**

## Proposed Implementation

### Option A: Enhanced Filtering (Low Effort)
- Extend existing search/filter UI
- Add multi-select filters (interest + location + tag)
- Display filtered results as a custom tour
- **Show total tour time** (sum of stop times + estimated travel)
- Export custom tour as PDF or shareable link

### Option B: Interactive Tour Builder (Medium Effort) ⭐ RECOMMENDED
- New "Build a Tour" screen with drag-and-drop interface
- Select stops from directory, reorder them
- **Real-time tour time calculation** as stops are added/reordered
- **Visual indicator** of travel time vs. stop time
- Optimize route suggestion ("reorder to minimize travel time")
- Save custom tour to local storage
- Print custom tour itinerary with travel directions

### Option C: Guided Tour Wizard (High Effort)
- Step-by-step wizard: "What interests you?" → suggest stops
- Map-based tour routing (optimize for walking distance)
- Time-based constraints ("I have 90 minutes")
- **Auto-calculate and show why stops were included/excluded based on time**
- Integration with campus map for wayfinding

## Technical Considerations
- **Travel time data storage**: Add `travelTime` object to each stop in `data/stops.js`
- **Calculation algorithm**: Dijkstra's or simple linear path (depends on optimization needs)
- Store custom tours in localStorage (persists on iPad)
- OR server-side storage with shareable URLs (requires backend)
- How do custom tours interact with existing curated tours?
- Should custom tours appear in "Curated Tours" filter?

## Design Questions
- Where does "Build a Tour" entry point live? (Welcome screen? Map screen?)
- How do users share custom tours? (QR code? URL? PDF export?)
- Should we track popular custom tours to inform future curated tours?
- **How to display travel time?** (e.g., "30 min tour + 5 min travel = 35 min total")
- **Should we suggest route optimizations?** (e.g., "Swap stops 2 and 3 to save 8 minutes")

## Data Collection Needed
- [ ] **Document travel times between all stops** (walking times within buildings, driving times across campus)
- [ ] Create travel time matrix or lookup table
- [ ] Identify stop clusters (e.g., all Building 4619 stops are close together)
- [ ] Document travel modes (walk vs. drive) for each connection
- [ ] Consider weather/accessibility factors (outdoor walking routes)

## Out of Scope (for MVP)
- Real-time availability checking (which facilities are open today)
- Calendar integration for tour scheduling
- Multi-user collaborative tour planning

## Success Metrics
- % of visitors who use custom tour builder
- Average number of stops in custom tours
- Most commonly combined stops (informs future curated tours)

## Definition of Done
- [ ] Design mockup approved
- [ ] Implementation approach selected (Option A/B/C)
- [ ] Feature implemented and tested
- [ ] User testing with tour guides
- [ ] Documentation in CONTRIBUTING.md
- [ ] Committed to `main` branch
```

---

## Issue 7: Update Account & Add Tour Calendar Integration

**Title**: Infrastructure: Update primary account and integrate tour calendar

**Labels**: `infrastructure`, `enhancement`

**Body**:
```markdown
## Account Update

**Primary account change**:
- **Old**: cherrelle.j.tucker@nasa.gov (personal NASA account)
- **New**: testlabtours@gmail.com (shared team account)

**Required updates**:
- [ ] Update `SETUP.md` to reference testlabtours@gmail.com as primary contact
- [ ] Update any email addresses in app content
- [ ] Update GitHub repository collaborator list if needed
- [ ] Verify testlabtours@gmail.com has access to all necessary resources

## Tour Calendar Feature

**Goal**: Display scheduled tours in the app so visitors can see upcoming tour availability.

**Requirements**:
- [ ] Integrate with Test Lab tour calendar (Google Calendar at testlabtours@gmail.com?)
- [ ] Display upcoming tours on welcome screen or dedicated calendar view
- [ ] Show tour date/time, type, and availability status
- [ ] Read-only display (visitors shouldn't book through app)
- [ ] Update daily or on app load

**Implementation Options**:

### Option A: Embedded Google Calendar (Easiest)
- Embed public calendar iframe in app
- **Pros**: Zero code, auto-updates, familiar UI
- **Cons**: Requires calendar to be public; iframe may not work offline

### Option B: Calendar API Integration (Medium)
- Use Google Calendar API to fetch events
- Display in custom UI matching app design
- **Pros**: Full control over display, can work offline with cache
- **Cons**: Requires API key management, more complex

### Option C: Static Calendar Updates (Manual)
- Tour guide manually updates a "tours this week" section in app
- **Pros**: No API dependencies, works offline
- **Cons**: Requires manual updates, prone to being outdated

**Questions to answer**:
- [ ] Is tour calendar already maintained in Google Calendar?
- [ ] Can calendar be public (viewable by anyone with link)?
- [ ] What information should be shown? (date/time, tour type, guide name, capacity?)
- [ ] Where in app should calendar appear? (welcome screen? dedicated tab?)
- [ ] Should past tours be visible (history) or only upcoming?

## Definition of Done
- [ ] testlabtours@gmail.com is documented as primary account
- [ ] All references to cherrelle.j.tucker@nasa.gov updated
- [ ] Tour calendar integration approach decided and implemented
- [ ] Calendar displays correctly on iPad
- [ ] Documentation updated in README.md and SETUP.md
- [ ] Changes committed to `main` branch
```

---

## Create these issues at:
https://github.com/CTuckerSolutions/TestLabTourApp/issues/new

Copy/paste the title, labels, and body from above.
