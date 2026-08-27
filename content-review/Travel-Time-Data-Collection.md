# Travel Time Data Collection Template
**For Build-a-Tour Feature: Calculate total tour time including travel between stops**

---

## Purpose

This document collects travel times between tour stops to enable accurate tour duration calculations. When users build custom tours, the app will calculate:

**Total Tour Time = Σ(stop durations) + Σ(travel times between consecutive stops)**

---

## Data Format

For each stop, document travel time TO other stops that might reasonably follow it in a tour.

### Travel Modes
- **walk** - Within same building or adjacent buildings (pedestrian access)
- **drive** - Requires vehicle transport across campus
- **shuttle** - Campus shuttle required (if separate from drive)

### Measurement Guidelines
- Measure realistic times (not theoretical minimum)
- Include time to exit one facility and enter the next
- Round to nearest minute
- For walking: Include time through doorways, hallways, outdoor paths
- For driving: Include parking, walking from vehicle to entrance

---

## Stop-by-Stop Travel Times

### Stop 1: Flat Floor (stop, Building 4619)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop2 - Structural Test Stands (4693/4697) | ___ | drive | Outdoor stands, different area |
| stop3 - Thermal Vacuum | ___ | drive/walk | Check if same building complex |
| stop4 - F-1 Engine Test Stand | ___ | drive | West Test Area |
| stop5 - Neutral Buoyancy | ___ | drive | Building 4705 |
| stop6 - Dynamic Test Stand 4550 | ___ | drive | Different area |
| stop7 - T-Tower 4572 | ___ | drive | West Test Area |
| stop14 - LTA (Building 4619) | **1-3** | **walk** | **Same building** |
| stop15 - LTAE (Building 4619) | **1-3** | **walk** | **Same building** |
| stop16 - Structural Dynamics (Building 4619) | **1-3** | **walk** | **Same building** |

---

### Stop 14: Load Test Annex - LTA (stop14, Building 4619)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | **2** | **walk** | **Same building** |
| stop15 - LTAE (Building 4619) | **1** | **walk** | **Adjacent bay** |
| stop16 - Structural Dynamics (Building 4619) | **2** | **walk** | **Same building** |
| stop2 - Structural Test Stands | ___ | drive | Outdoor stands |
| stop7 - T-Tower 4572 | ___ | drive | West Test Area |

---

### Stop 15: Load Test Annex Extension - LTAE (stop15, Building 4619)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | **3** | **walk** | **Same building** |
| stop14 - LTA (Building 4619) | **1** | **walk** | **Adjacent bay** |
| stop16 - Structural Dynamics (Building 4619) | **2** | **walk** | **Same building** |
| stop2 - Structural Test Stands | ___ | drive | Outdoor stands |
| stop7 - T-Tower 4572 | ___ | drive | West Test Area |

---

### Stop 16: Structural Dynamics (stop16, Building 4619)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | **2** | **walk** | **Same building** |
| stop14 - LTA (Building 4619) | **2** | **walk** | **Same building** |
| stop15 - LTAE (Building 4619) | **2** | **walk** | **Same building** |
| stop2 - Structural Test Stands | ___ | drive | Outdoor stands |

---

### Stop 2: Structural Test Stands (stop2, Test Stands 4693 & 4697)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | ___ | drive | Back to Building 4619 |
| stop14 - LTA (Building 4619) | ___ | drive | Back to Building 4619 |
| stop3 - Thermal Vacuum | ___ | drive/walk | Check location |
| stop4 - F-1 Engine Test Stand | ___ | drive | Outdoor stands area |
| stop7 - T-Tower 4572 | ___ | drive | West Test Area |

---

### Stop 7: T-Tower 4572 (stop7, West Test Area)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop4 - F-1 Engine Test Stand | ___ | drive/walk | Same general area? |
| stop - Flat Floor (Building 4619) | **~5** | **drive** | **Cross campus** |
| stop14 - LTA (Building 4619) | **~5** | **drive** | **Cross campus** |
| stop9 - Test Stand 4670 | ___ | drive | Check location |
| stop10 - Redstone Test Stand | ___ | drive | Check location |

---

### Stop 9: Test Stand 4670 (stop9, S-IC Test Stand)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | ___ | drive | Cross campus |
| stop7 - T-Tower 4572 | ___ | drive | West Test Area |
| stop10 - Redstone Test Stand | ___ | drive | Check proximity |

---

### Stop 10: Redstone Test Stand (stop10)

| To Stop | Minutes | Mode | Notes |
|---------|---------|------|-------|
| stop - Flat Floor (Building 4619) | ___ | drive | Cross campus |
| stop9 - Test Stand 4670 | ___ | drive | Check proximity |
| stop11 - Test Stand 116 | ___ | drive | Check location |

---

## Building/Area Clusters

Group stops by location to identify natural tour sequences:

### Building 4619 Cluster (Minimal Travel Time)
- stop - Flat Floor
- stop14 - LTA
- stop15 - LTAE
- stop16 - Structural Dynamics
- stop3 - Thermal Vacuum (verify if same building)
- stop12 - V20 Lunar Surface Simulator (verify location)

**Internal travel times:** 1-3 minutes walking between stops

---

### West Test Area Cluster (Outdoor Stands)
- stop7 - T-Tower 4572
- stop4 - F-1 Engine Test Stand (verify location)
- stop2 - Structural Test Stands 4693/4697 (verify if same area)

**Travel from Building 4619:** ~5 minutes drive

---

### Other Outdoor Test Stands (Verify Locations)
- stop9 - Test Stand 4670
- stop10 - Redstone Test Stand
- stop11 - Test Stand 116

---

## Data Collection Process

1. **Walk/drive each route** with stopwatch
2. **Test at realistic pace** (not rushing, not dawdling)
3. **Document**:
   - Start point (exit of previous stop)
   - End point (entrance of next stop)
   - Mode of travel
   - Any access restrictions or delays (locked doors, security checkpoints)
4. **Round to nearest minute** for simplicity
5. **Note special considerations**:
   - Weather impact (outdoor walking routes)
   - PPE requirements between stops
   - Escort/badge access needed

---

## JSON Structure (Once Data Collected)

After collecting travel times, they'll be added to `data/stops.js`:

```javascript
{
  "id": "stop",
  "title": "Flat Floor",
  "building": "4619",
  "tourTime": "~30 min",
  "travelTime": {
    "stop14": {"minutes": 2, "mode": "walk", "description": "Same building, down hallway to LTA bay"},
    "stop15": {"minutes": 3, "mode": "walk", "description": "Same building, through LTA to LTAE"},
    "stop16": {"minutes": 2, "mode": "walk", "description": "Same building, to structural dynamics lab"},
    "stop7": {"minutes": 5, "mode": "drive", "description": "Drive to West Test Area, park, walk to T-Tower"}
  }
}
```

---

## Questions to Resolve

- [ ] Are all Building 4619 stops truly within walking distance?
- [ ] Which stops require vehicle transport vs. walking?
- [ ] Are there campus shuttle routes that affect travel time?
- [ ] Do outdoor stops have weather/seasonal considerations?
- [ ] Are there security checkpoints that add time between areas?
- [ ] Can we create a "Building 4619 tour" with minimal travel time?
- [ ] What's the most efficient route through West Test Area stops?

---

## Next Steps

1. **Phase 1: Document Building 4619 internal times** (already have 1-3 min estimates, verify exact times)
2. **Phase 2: Document Building 4619 → West Test Area** (have ~5 min estimate for WTA, verify)
3. **Phase 3: Document all other cross-campus routes**
4. **Phase 4: Create travel time matrix** and add to `data/stops.js`
5. **Phase 5: Implement calculation logic** in tour builder UI

---

**Status:** Data collection started (Building 4619 estimates provided)  
**Owner:** Cherrelle Tucker  
**Last Updated:** 2026-08-27
