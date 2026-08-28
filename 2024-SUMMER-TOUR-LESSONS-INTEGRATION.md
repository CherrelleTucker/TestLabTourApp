# 2024 Summer of Engineering Tour — Lessons Learned Integration

**Source Document**: `2024 Summer of Engineering Tour Lessons Learned.pdf`  
**Integration Date**: 2026-08-24  
**Purpose**: Apply real-world tour operational insights from the 2024 Summer of Engineering series to improve the MSFC Test Lab Tour App

---

## Executive Summary

The 2024 Summer of Engineering Tours ran from June–September 2024, testing 12 different tour stop models across Marshall's Engineering Directorate. This document extracts actionable lessons from that experience and maps them to tour app improvements, content updates, and operational guidance for future tours.

### Key Findings from 2024 Tours

**What Worked:**
- **Pair model** (4205, 4707): Two paired labs, groups swap after 15 min — logistically successful
- **Multiple tour guides per lab**: Essential for keeping tours on time
- **Flexibility**: Each building required different tour models (no one-size-fits-all)
- **Collaboration focus**: Even least-attended stops (4705) produced valuable partnerships
- **0 budget execution**: Entire 13-week series cost $0

**What Didn't Work:**
- **Hub model** (4619): Central queuing with guides fetching groups — too much walking in long buildings
- **13-week duration**: Attendance waned; suggest 4–8 weeks max
- **Unrestricted signups**: People signed up for every tour, limiting spots for others
- **Single organizer**: Zero fault tolerance (sickness/emergency would have disrupted tours)

---

## Integration Priority Matrix

| Priority | Action | Impact | Effort | Location |
|----------|--------|--------|--------|----------|
| **HIGH** | Add tour timing guidance per building | High | Low | Stop definitions, CONTRIBUTING.md |
| **HIGH** | Document tour model recommendations | High | Low | New TOUR-GUIDE-PLAYBOOK.md |
| **HIGH** | Update existing stop tour times | Medium | Low | data/stops.js |
| **MEDIUM** | Add "logistics" metadata to stops | Medium | Medium | data/stops.js schema |
| **MEDIUM** | Create tour coordinator documentation | Medium | Medium | New TOUR-COORDINATOR-GUIDE.md |
| **LOW** | Add parking/wayfinding notes | Low | Low | Stop definitions |
| **LOW** | Integrate PowerApps signup learnings | Low | High | External system (out of scope) |

---

## Actionable Integrations

### 1. **Update Stop Definitions with Tour Model Guidance**

**Files to modify**: `data/stops.js`

Add new optional fields to each stop definition to guide tour coordinators:

```javascript
{
  "id": "stop",
  "title": "Flat Floor",
  // ... existing fields ...
  
  // NEW FIELDS based on 2024 lessons:
  "tourModel": "continuous",  // continuous | pairs | hub | rotation | van-shuttle
  "tourModelNotes": "10-min tours every 15 min work well. Multiple guides essential.",
  "logisticsWarnings": [
    "High demand — slots fill in hours",
    "2+ tour guides needed to keep on schedule"
  ],
  "parkingNotes": "Main lot; overflow parking at south lot",
  "buildingAccess": "Escort required through security checkpoint",
  "bestPractices": [
    "Limit to 15 people per tour to fit in lab",
    "Tours going long disrupt entire schedule — strict time management"
  ]
}
```

**Tour Model Definitions** (add to CONTRIBUTING.md):

- **Continuous**: Small tours start every X minutes (best for 1–2 labs, easy access)
  - *Example: 4755 (ECLSS/Friction Stir Welding)*
- **Pairs**: Two labs, groups swap after fixed time, new batch arrives at interval
  - *Example: 4205 (propulsion labs paired), 4707 (additive manufacturing paired)*
- **Hub**: Central queuing point, guides fetch groups and return them
  - *Best for: Compact buildings; avoid in long layouts like 4619*
- **Rotation**: Fixed groups see all labs in sequence (full 2-hour commitment)
  - *Example: 4602 (materials labs) — high logistics burden, fewer participants*
- **Van Shuttle**: Off-site or parking-constrained stops, vans ferry groups
  - *Example: 4605 (PLANET/HISET), 4666 (West Test Area driving tour)*

---

### 2. **Create Tour Guide Playbook**

**New file**: `TOUR-GUIDE-PLAYBOOK.md`

Practical guidance for tour hosts based on real 2024 operational experience:

```markdown
# Tour Guide Playbook

Lessons from 2024 Summer of Engineering Tours — operational guidance for hosting facility tours at NASA Marshall.

## General Principles

### What Makes a Successful Tour Stop

✅ **Multiple tour guides per lab** (minimum 2)
- One guide going long doesn't upend the entire schedule
- Backup if primary guide has an emergency

✅ **Volunteers for logistics**
- Stragglers, parking direction, security escort
- 4602 success: 10 interns for logistics + 2 guides per lab

✅ **Flexibility in tour model**
- No one-size-fits-all: choose model based on building layout, lab count, and expected demand
- See Tour Model Recommendations section below

✅ **Advance coordination**
- Security: Door prop approvals, escort procedures
- Operations: Test schedules (avoid surprises like 4666 West TA Blue Origin conflict)
- Facilities: Parking maps, overflow areas, signage

❌ **What to Avoid**

- Single tour guide (zero fault tolerance)
- Hub model in long buildings (too much walking)
- Unrestricted signups (limit to 1–2 tour pairs per person)
- Over-long series (13 weeks = fatigue; suggest 4–8 weeks max)

---

## Tour Models by Building Type

### Building 4619 (Structural Test Lab, Flat Floor, TVAC)

**2024 Model Used**: Hub (central queue, guides fetch groups)  
**2024 Result**: ❌ Too much unnecessary walking  
**Recommendation**: **Pairs model** — pair TVAC/Flat Floor, Load Test Annex/Structural Dynamics

**Tour Timing**:
- 10-minute tours
- Start every 15 minutes
- 15 people per tour
- 1 hour total (4 labs = too many for longer window)

**Lessons**:
- One tour going long nearly upended the entire stop
- At least 2 tour guides per lab critical
- Volunteers helpful for stragglers

---

### Building 4755 (ECLSS, Friction Stir Welding)

**2024 Model Used**: Continuous  
**2024 Result**: ✅ Very successful — extended to 2 hours due to demand  
**Recommendation**: Keep continuous model; easy tour, high desirability

**Tour Timing**:
- 10-minute tours
- Start every 15 minutes
- 15 people per tour
- 2+ hours (demand justifies extension)

**Lessons**:
- Slots filled in 5 hours; opened 2nd hour to accommodate demand
- Designated tour groups unnecessary (straightforward flow)
- Multiple guides keep tours on time

---

### Building 4205 (Propulsion Labs)

**2024 Model Used**: Pairs (NTREES/Solid Prop, Green Prop/CFM, SIL/TVC)  
**2024 Result**: ✅ Logistically successful  
**Recommendation**: Keep pairs model for multi-lab buildings

**Tour Timing**:
- 10-minute tours per lab (2 labs = 30 min total commitment)
- Start every 15 minutes
- 15 people per tour
- 1 hour (with pairs model, participants limited to one pair)

**Lessons**:
- One tour running long does NOT upend entire stop (unlike hub model)
- Event host does less people-wrangling (known next destination)
- Parking filled up → include parking maps
- Call security ahead to prop open secured doors

---

### Building 4666 (West Test Area)

**2024 Model Used**: Van shuttle (lobby displays + driving tour)  
**2024 Result**: ✅ Easy, fun tour  
**Recommendation**: Keep van model for off-site/distant stops

**Tour Timing**:
- 20-minute tours
- 2 vans: 10 tourists + 1 driver + 1 guide per van
- Extended to 2 hours

**Lessons**:
- **CRITICAL**: Check Blue Origin test schedule week-of (West TA unexpectedly off-limits day-of)
- NASA banner flags helpful for pointing out overflow parking

---

### Building 4602 (Materials Testing Labs)

**2024 Model Used**: Rotation (4 fixed groups see all 6 labs)  
**2024 Result**: ⚠️ Difficult but successful (heavy pre-planning required)  
**Recommendation**: Only use rotation model if EM-level logistics support available

**Tour Timing**:
- 10-minute tours per lab
- Start every 15 minutes
- 25 people per color-coded group (Yellow, Blue, Green, Purple)
- 2 hours (full rotation through all labs)

**Lessons**:
- 2-hour commitment = slots filled more slowly (high barrier)
- **Success factor**: EM provided ~10 interns for logistics + 2 guides per lab
- Pre-planning was essential to tour stop success
- Building layout + number of labs = disaster potential without sufficient staffing

---

### Building 4493 (Space Systems Integration and Test Facility)

**2024 Model Used**: Continuous  
**2024 Result**: ✅ Very easy tour  
**Recommendation**: Keep continuous model

**Tour Timing**:
- 10-minute tours
- Start every 15 minutes
- 25 people per tour

**Lessons**:
- Participants enjoyed lobby museum before/after high bay tours
- Simple logistics, high satisfaction

---

### Building 4605 (PLANET/HISET)

**2024 Model Used**: Van shuttle (met in 4601, vans drove to 4605)  
**2024 Result**: ⚠️ Logistically challenging  
**Recommendation**: Van model necessary for parking constraints; use dedicated pickup/dropoff vans

**Tour Timing**:
- 10-minute tours per lab
- Start every 10 minutes
- 10 people per tour
- 1.5 hours
- Linear progression: Lobby → PLANET → HISET (clears lobby for next group)

**Lessons**:
- Small parking lot = met participants at 4601, vans shuttle to 4605
- **Key innovation**: One van dedicated to pickups, one to dropoffs → tours going long don't disrupt next tours
- One dedicated guide per lab (Lobby, PLANET, HISET) = linear flow, stays on time
- Participation began dropping off at this stop (late in series)

---

### Building 4487 (Avionics & Software Labs)

**2024 Model Used**: Pairs (Stray Light/Optics Mfg, GNC/Power Electronics, Imaging/Radiofreq, Printed Electronics/Failure Analysis)  
**2024 Result**: ⚠️ Most logistically challenging; successful due to pre-planning  
**Recommendation**: Pairs model + extensive pre-planning + multiple escorts

**Tour Timing**:
- 15-minute tours per lab (30 min per pair)
- Start every 30 minutes
- 15 people per tour
- 1–2 hours (participants could sign up for one or two pairs)

**Special Features**:
- Summer of AI collaboration: Scott Tashakkor (NESC) gave 1-hour AI/ML lecture
- Opening remarks by Jill Marlowe (NASA Digital Transformation Officer) and Larry Leopard (MSFC Associate Director, Technical)
- Total attendance: ~400 (in-person + online)

**Lessons**:
- Complex building layout = most difficult tour stop
- **Critical success factor**: Multiple tour guides AND multiple escorts
- Pre-planning more important here than any other stop

---

### Building 4600 (Structures Design/Analysis, SHARC, AI/ML Demos)

**2024 Model Used**: Lobby displays + lab tours  
**2024 Result**: ✅ Great stop for less-tangible work (AI/ML)  
**Recommendation**: Keep lobby-display + lab-tour model for software/computational work

**Tour Timing**:
- Tour structure not specified in 2024 doc

**Special Features**:
- Summer of AI collaboration: Kelsey Buckles (MSFC AI/ML advisor) gave lecture
- LLM cart in lobby for visitor interaction
- Portable Virtual Environments Lab demos in lobby
- Total attendance: ~350 (in-person + virtual)

**Lessons**:
- Excellent way to showcase intangible work (software, AI/ML, simulations)
- Lobby displays + interactive demos work well alongside lab tours

---

### Building 4711 (Electrostatic Levitation, Tribology, Contamination Control, NDE, Solid Rocket Testbed)

**2024 Model Used**: Hub (returned to hub model)  
**2024 Result**: ✅ Hub worked better in condensed building with longer tours  
**Recommendation**: Hub model acceptable for compact layouts + 30-min tours

**Tour Timing**:
- 30-minute tours
- 10 people per group

**Lessons**:
- Hub model more successful in compact building with longer tours (vs 4619's 15-min tours in long layout)
- Extra signs on pedestrian gates helped wayfinding
- Participation waning at this point in series

---

### Building 4656 (Composites Manufacturing)

**2024 Model Used**: Not specified  
**2024 Result**: ✅ Easy tour  
**Recommendation**: Standard continuous or hub model

**Tour Timing**:
- 30-minute tours
- 20 people per tour

**Lessons**:
- Having someone in parking lot to direct participants = important
- Send parking map in advance + live direction

---

### Building 4707 (Additive Manufacturing, Water Blast, Composites, CT Scanning)

**2024 Model Used**: Pairs  
**2024 Result**: ✅ Pairs worked well in long building  
**Recommendation**: Keep pairs model

**Tour Timing**:
- 15-minute tours per lab
- 15 people per tour

**Lessons**:
- Pairs model effective in long building layouts (like 4619 should have used)

---

## Major Operational Takeaways

### ✅ Success Factors

1. **Flexibility**: Each building needed a different tour model
2. **Multiple guides per lab**: Minimum 2 prevents single point of failure
3. **Pairs model advantage**: One tour going long doesn't cascade
4. **Volunteer logistics support**: Critical for complex stops (4602, 4487)
5. **Advance coordination**: Security (door props), operations (test schedules), facilities (parking)
6. **Attendance ≠ Success**: 4705 (low attendance) → partnership between 7-axis milling + 3D scanning for Orion

### ❌ Lessons from Challenges

1. **13 weeks too long**: Attendance waned; suggest 4–8 weeks
2. **Unrestricted signups**: Limit to 1–2 tour pairs per person
3. **Single organizer**: Zero fault tolerance; need small team
4. **Hub model in long buildings**: Too much walking (4619 failure vs 4711 success)
5. **Rotation model without support**: 4602 needed EM's 10 interns + 2 guides/lab
6. **2-hour commitment**: Slots filled more slowly (4602 rotation model)

### 🎯 Tour Length Recommendations

| Tour Duration | Best For | Participant Commitment | Fill Rate |
|---------------|----------|------------------------|-----------|
| 10–15 min | Easy, high-demand stops | Low (drop-in style) | Fast |
| 30 min | Medium complexity, pairs model | Medium | Medium |
| 1 hour | Multiple labs (pairs/hub) | Medium-High | Medium |
| 2 hours | Full rotation through many labs | High | Slow |

**Recommendation**: Default to 10–15 min tours starting every 15 min; extend to 30 min for complex labs or pairs model; avoid 2+ hour commitments unless exceptional circumstances.

---

## Future Suggestions from 2024 Report

### Event Structure

1. **Shorten series**: 4–8 weeks instead of 13
   - Maintains enthusiasm
   - Reduces organizer burnout
   - Would require multiple buildings per event day (requires careful planning)

2. **Expand beyond Engineering Directorate**:
   - Include HOSC (Huntsville Operations Support Center)
   - Include XRCF (X-Ray & Cryogenic Facility) — already featured in app
   - More MSFC-wide vs ED-only

3. **Team-based organization**:
   - Small team vs single organizer
   - Eliminates zero fault tolerance

4. **PowerApps for signups** (from Chelsea):
   - Prevents spreadsheet editing chaos
   - Enforces tour capacity limits
   - Enables attendance data analytics
   - Plan all tours upfront (not week-by-week)

### Participant Management

1. **Limit signups**: 1–2 tour pairs per person max
   - Prevents power users from crowding out others
   - Implemented successfully in 4205

2. **Balance tour length vs capacity**:
   - Short tours (10–15 min) = more people, higher satisfaction
   - Longer tours (2 hours) = burden on hosts, fewer participants
   - "Most common complaint: short tour duration. However, short tours mean more tours."

---

## App Content Updates Needed

### Immediate Actions

1. **Update `data/stops.js`** — add tour model metadata to existing stops:
   - Building 4619 (Flat Floor, Structural Stands, TVAC): Tour model recommendations
   - Building 4755 (ECLSS, Friction Stir Welding): Continuous model notes
   - Building 4205 (Propulsion labs): Pairs model best practices
   - Building 4666 (West Test Area): Van shuttle + test schedule coordination
   - Building 4602 (Materials labs): Rotation model logistics requirements
   - All others: Tour timing guidance

2. **Create `TOUR-GUIDE-PLAYBOOK.md`** (this document, refined)

3. **Create `TOUR-COORDINATOR-GUIDE.md`**:
   - Planning timeline (3-month leadtime from 2024 example)
   - Building POC identification and kickoff meeting
   - Sign-up system recommendations (PowerApps vs spreadsheet)
   - Communication cadence (2-3 weeks before stop, day-before meeting)

4. **Update `CONTRIBUTING.md`**:
   - Add tour model field definitions
   - Reference playbook for tour planning guidance

### Secondary Actions

5. **Add wayfinding/parking notes** to stop definitions where applicable:
   - 4205: Parking fills up, include maps
   - 4666: NASA banner flags for overflow parking
   - 4605: Meet at 4601 for van shuttle
   - 4705, 4711, 4707: Extra signs on pedestrian gates for buildings behind vehicle gates

6. **Document 4-8 week series structure** in coordinator guide:
   - Multiple buildings per day (vs one per week)
   - Careful planning required
   - Reduces fatigue, maintains enthusiasm

---

## Integration Checklist

### Phase 1: Documentation (Priority: HIGH)

- [ ] Create `TOUR-GUIDE-PLAYBOOK.md` (this document, refined)
- [ ] Create `TOUR-COORDINATOR-GUIDE.md` (event planning timeline, logistics)
- [ ] Update `CONTRIBUTING.md` (add tour model field definitions)

### Phase 2: Data Updates (Priority: HIGH)

- [ ] Update `data/stops.js` — add tour model metadata to existing stops
  - [ ] Building 4619 stops (Flat Floor, Structural, TVAC)
  - [ ] Building 4755 (ECLSS, Friction Stir Welding)
  - [ ] Building 4205 (Propulsion labs)
  - [ ] Building 4666 (West Test Area)
  - [ ] Building 4602 (Materials labs)
  - [ ] Building 4493 (SSITF)
  - [ ] Building 4605 (PLANET/HISET)
  - [ ] Building 4487 (Avionics/Software)
  - [ ] Building 4600 (Structures/AI)
  - [ ] Building 4711 (Electrostatic Levitation, etc.)
  - [ ] Building 4656 (Composites)
  - [ ] Building 4707 (Additive Manufacturing, etc.)

### Phase 3: Schema Extensions (Priority: MEDIUM)

- [ ] Define new optional fields for stop definitions:
  - `tourModel`: String (continuous | pairs | hub | rotation | van-shuttle)
  - `tourModelNotes`: String (free-form guidance)
  - `logisticsWarnings`: Array of strings
  - `parkingNotes`: String
  - `buildingAccess`: String
  - `bestPractices`: Array of strings

- [ ] Update `CONTRIBUTING.md` examples with new fields

### Phase 4: Validation (Priority: LOW)

- [ ] Review tour model assignments with Test Lab staff
- [ ] Test tour timing guidance on next real tour series
- [ ] Collect feedback from tour guides using playbook
- [ ] Iterate on documentation based on field usage

---

## Notes for Future Tours

### What Success Looks Like

- **Not just attendance**: 4705 had low attendance but led to 7-axis milling + 3D scanning partnership for Orion work
- **Collaboration facilitation**: Primary goal achieved even at less-attended stops
- **Broad demographic appeal**: Interns through late-career, all participated
- **Cross-center interest**: MAF, GSFC, KSC participants (not just MSFC)
- **Budget**: Entire 13-week, 12-building series cost $0

### What to Avoid

- **Event too long**: 13 weeks = fatigue
- **Zero fault tolerance**: Single organizer, single tour guide
- **Rigid tour models**: Hub worked in 4711 (compact, 30-min tours) but failed in 4619 (long, 15-min tours)
- **Silent capacity limits**: Unrestricted signups crowded out others
- **Surprises**: Blue Origin test at 4666 unexpectedly closed West TA day-of

### Critical Success Factors

1. **Pre-planning**: 2-3 weeks before stop, day-before meeting
2. **Multiple guides**: Minimum 2 per lab
3. **Logistics volunteers**: Essential for complex stops
4. **Flexibility**: Match tour model to building layout and lab count
5. **Advance coordination**: Security, operations, facilities
6. **Realistic time commitments**: Shorter tours = higher participation

---

## Related Documents

- **Source**: `2024 Summer of Engineering Tour Lessons Learned.pdf` (OneDrive - NASA\TestLab\Projects\Tour-App)
- **App Repo**: https://github.com/CTuckerSolutions/TestLabTourApp (private)
- **App Documentation**: `README.md`, `CONTRIBUTING.md`, `SETUP.md`
- **Content Data**: `data/stops.js`, `data/tours.js`

---

**Document Owner**: Cherrelle Tucker  
**Last Updated**: 2026-08-24  
**Next Review**: After next Test Lab tour series (date TBD)
