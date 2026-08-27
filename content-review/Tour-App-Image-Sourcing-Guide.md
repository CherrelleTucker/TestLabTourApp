# Tour App Image Sourcing Guide
**General media requirements and sourcing strategy for all tour stops**

---

## NASA Image Usage - Tour App Compliance ✓

**Status:** The tour app qualifies as **non-commercial educational/informational use**

**From NASA Brand Center:** "NASA content is generally not subject to copyright in the United States" for educational and informational purposes including:
- Schools, textbooks
- Photo collections, exhibits  
- Educational websites

**Requirements:**
1. Credit NASA as the source (already doing this in all image credits)
2. Cannot imply NASA endorsement (not applicable - this IS a NASA facility tour)
3. No restrictions on federal employee images in educational context

**Reference:** https://www.nasa.gov/nasa-brand-center/images-and-media/

---

## Standard Image Requirements (All Stops)

Each tour stop uses this consistent media structure:

**Media directory:** `media/<facility-slug>/img/`

### Required Images

| File | Purpose | Specifications |
|------|---------|----------------|
| `arrive.jpg` | Aerial/exterior arrival view | Building exterior or aerial campus view showing location |
| `hero.jpg` | Primary dramatic interior shot | Wide view showing facility scale, key equipment, and distinctive features |
| `hero-alt.jpg` or `thumb` | Alternate angle for thumbnail | Different perspective of same facility |
| `bg.jpg` | Wide orientation photo | Full view for background and callout overlays |
| `detail-1.jpg` | Close-up for "lookFor" text | Specific feature mentioned in the stop's "lookFor" field |

### Gallery Images (2-3 recommended)

| File | Content |
|------|---------|
| `gallery-1.jpg` | Test/operation in progress OR historic view |
| `gallery-2.jpg` | Different era or program (shows evolution/versatility) |
| `gallery-3.jpg` | Technical detail OR people at work |

### Optional Media

| File | Purpose |
|------|---------|
| `video/narration-clip.mp4` | Short video clip or time-lapse |
| `audio/narration.mp3` | Generated via `gen_narration.py` (automated) |

---

## Example: LTA and LTAE Stops

### Stop 14: Load Test Annex (LTA)
**Media directory:** `media/lta/img/`
**Key heritage:** SLS Intertank, 30M lb capacity, adjustable crosshead
**Search focus:** "Load Test Annex MSFC", "Building 4619 structural test", "SLS Intertank test"

### Stop 15: Load Test Annex Extension (LTAE)  
**Media directory:** `media/ltae/img/`
**Key heritage:** SLS Engine Section, 106 anchor pads (340k lb each), 203-ft bay
**Search focus:** "LTAE Marshall", "SLS Engine Section test", "Building 4619 high bay"

---

## Search Strategy

### Primary Source: NASA Image and Video Library
**URL:** https://images.nasa.gov/

**Search terms by priority:**

1. **Facility-specific:**
   - "Load Test Annex MSFC"
   - "LTAE Marshall"
   - "Building 4619 structural test"
   - "Building 4619 MSFC interior"

2. **Program heritage:**
   - "SLS structural test Marshall"
   - "SLS Intertank test"
   - "SLS Engine Section test"
   - "Space Shuttle structural test MSFC"

3. **Test type:**
   - "Marshall structural test"
   - "MSFC load test"
   - "structural dynamics test Marshall"
   - "compression test MSFC"

4. **Broader fallbacks:**
   - "Building 4619 MSFC" (any content from this building)
   - "ET30 test" (branch designation)
   - "MSFC test facility interior"

### Secondary Sources

- **NASA Flickr - Marshall Space Flight Center:** https://www.flickr.com/photos/nasamarshall/
- **Internal MSFC Photo Archives** (if accessible)
- **Test Lab photo collection** (if maintained)

---

## Image Selection Criteria

### Hero Image (Most Important)

**Must have:**
- Shows facility scale (people for reference ideal)
- Key equipment visible (crosshead for LTA, cranes for LTAE)
- Good lighting and composition
- Clear, high-resolution

**Bonus points:**
- Active test in progress
- Modern (recent program like SLS)
- Dramatic angle or lighting

### Detail Image

**Must support the "lookFor" text:**
- **LTA:** "Look up at the adjustable crosshead — that massive steel structure spanning the bay"
- **LTAE:** "Look for the 10-foot grid pattern in the concrete floor — those anchor pads"

### Gallery Images

**Priorities:**
1. Historic vs. modern comparison (shows evolution)
2. Different test programs (shows versatility)
3. Technical detail (helps engineers/technical visitors)
4. Human element (operators, engineers working)

---

## Documentation Requirements

For each image selected, document:

1. **NASA ID** (from images.nasa.gov, format: MSFC-YYYY-#####)
2. **Date** (actual photo date if available)
3. **Credit line** (photographer/center, e.g., "NASA/MSFC")
4. **Alt text** (descriptive for accessibility)
5. **Caption** (what's shown, what program, what year)
6. **Clearance status** (from images.nasa.gov = cleared for public)

**Template for tracking:**

```
File: hero.jpg
NASA ID: MSFC-2023-01234
Date: 2023-05-15
Credit: NASA/Charles Beason (2023)
Alt: Wide interior view of Load Test Annex high bay showing adjustable crosshead at 80-foot elevation with SLS test article secured to reaction floor
Caption: The Load Test Annex adjustable crosshead positioned for SLS Intertank structural qualification testing, May 2023
Source: images.nasa.gov
Cleared: Yes (public domain, NASA content)
```

---

## Next Steps

### Phase 1: Image Search & Download
1. Search images.nasa.gov using keywords above
2. Download high-resolution versions of selected images
3. Document each image using template above

### Phase 2: Image Processing
1. Resize for web delivery (hero: ~1200px wide, gallery: ~800px wide)
2. Optimize file size (JPEG quality 85-90%)
3. Save with consistent naming to media directories

### Phase 3: Integration
1. Place images in `media/lta/img/` and `media/ltae/img/`
2. Update `data/stops.js` to reference new image paths
3. Update alt text and credit lines in stops.js
4. Generate audio narration: `python gen_narration.py --only stop14,stop15`

---

## Fallback Plan

If insufficient cleared imagery is available:

**Option A: Schedule Photo Shoot**
- Coordinate with ET30 Structural Strength Test Lab
- Bring cleared photographer to LTA/LTAE
- Capture required shots per checklist above
- Process through NASA imagery clearance

**Option B: Request Historic Archive Access**
- Contact MSFC Photo Archive
- Request cleared images from major test programs
- Search by program name (SLS, Shuttle, ISS) + Building 4619

**Option C: Use Existing Generic Facility Shots**
- Use Building 4619 exterior for both (already have aerial)
- Use generic "Test Lab capability" imagery as placeholder
- Add **"Representative imagery"** disclaimer in caption
- Continue searching for facility-specific shots

---

**Last Updated:** 2026-08-25
**Status:** Ready to begin image search
**Point of Contact:** Cherrelle Tucker, Project Coordinator
