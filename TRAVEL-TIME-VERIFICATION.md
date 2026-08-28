# Travel Time Verification Sheet

**Purpose**: Verify GPS-calculated travel times against actual on-ground experience before implementing Build-a-Tour feature.

**Method**: Haversine distance formula + mode-based time estimates
- **Walk**: < 300m, ~80 m/min (3 mph) + 1 min entry/exit
- **Drive**: ≥ 300m, campus speed + 2 min parking/entry

---

## Calculated Distances (meters) and Travel Times

### Building 4619 Internal (All stops in same complex)

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **Flat Floor (North door) → LTA (West door)** | 175m | 4 min | walk | ☐ | ___ min |
| **Flat Floor → LTAE (West door)** | 175m | 4 min | walk | ☐ | ___ min |
| **Flat Floor → Structural Dynamics (West door)** | 175m | 4 min | walk | ☐ | ___ min |
| **LTA ↔ LTAE** | 0m (same entrance) | 2 min | walk | ☐ | ___ min |
| **LTA → Structural Dynamics** | 0m (same entrance) | 2 min | walk | ☐ | ___ min |

**Note**: North to West door is ~175m exterior, but interior hallways might be shorter or longer. Verify actual walking route.

---

### Building 4619 → East Test Area

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **4619 (North) → TS 300** | 861m | 5 min | drive | ☐ | ___ min |
| **4619 (North) → TS 115** | 1,295m | 7 min | drive | ☐ | ___ min |
| **4619 (North) → TS 116** | 1,577m | 7 min | drive | ☐ | ___ min |

---

### Building 4619 → West Test Area

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **4619 (North) → TS 4693** | 1,102m | 7 min | drive | ☐ | ___ min |
| **4619 (West) → TS 4693** | 928m | 5 min | drive | ☐ | ___ min |
| **4619 (North) → TS 4697 (F-1)** | 1,839m | 9 min | drive | ☐ | ___ min |
| **4619 (North) → TS 4699** | 1,832m | 9 min | drive | ☐ | ___ min |

---

### Building 4619 → Building 4666 (ET50)

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **4619 (North) → 4666 (Front)** | 1,394m | 7 min | drive | ☐ | ___ min |
| **4619 (West) → 4666 (Front)** | 1,224m | 7 min | drive | ☐ | ___ min |

---

### East Test Area Internal

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **TS 115 → TS 116** | 178m | 4 min | walk | ☐ | ___ min |
| **TS 115 → TS 300** | 430m | 5 min | drive | ☐ | ___ min |
| **TS 116 → TS 300** | 594m | 5 min | drive | ☐ | ___ min |

**Question**: Can you walk between ETA test stands or do roads/terrain require driving?

---

### West Test Area Internal

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **TS 4693 → TS 4697** | 454m | 5 min | drive | ☐ | ___ min |
| **TS 4697 → TS 4699** | 65m | 3 min | walk? | ☐ | ___ min |
| **TS 4693 → TS 4699** | 453m | 5 min | drive | ☐ | ___ min |

**Question**: 4697 and 4699 are only 65m apart — walkable or still need vehicle?

---

### East Test Area ↔ West Test Area

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **TS 115 (ETA) → TS 4693 (WTA)** | 1,333m | 7 min | drive | ☐ | ___ min |
| **TS 116 (ETA) → TS 4697 (WTA)** | 1,373m | 7 min | drive | ☐ | ___ min |

---

### Cross-Campus (Building 4666 ↔ Test Areas)

| From → To | Distance | Calculated Time | Mode | Verified? | Actual Time |
|-----------|----------|-----------------|------|-----------|-------------|
| **4666 → TS 115 (ETA)** | 437m | 5 min | drive | ☐ | ___ min |
| **4666 → TS 4693 (WTA)** | 903m | 5 min | drive | ☐ | ___ min |

---

## Stops Missing GPS Coordinates

**Need to add coordinates for:**
- `stop3` - Thermal Vacuum (XRCF, Building 4718/4708)
- `stop5` - Neutral Buoyancy (demolished Building 4705)
- `stop6` - Dynamic Test Stand (demolished Building 4550)
- `stop7` - T-Tower (demolished Building 4572)
- `stop9` - Building 4670 (West Test Area)
- `stop18` - Marshall History Tour (general campus/Dodd Road)

**Question**: Should we include demolished facilities in travel time calculations, or mark them as "legacy/no travel time"?

---

## Verification Notes

### Things to Check On-Ground:
1. **Building 4619 interior routing**: North door to West door — through building or around exterior?
2. **Parking locations**: Does each test area have its own lot, or shared parking requiring extra walk time?
3. **Security checkpoints**: Any badging delays between areas?
4. **Terrain**: Are ETA/WTA test stands walkable or vehicle-only due to roads/safety?
5. **Weather**: Outdoor walking times in summer heat vs. comfortable weather?
6. **Group size**: Does a bus/van of 20 people add time vs. single vehicle?

### Discrepancies to Investigate:
- Original template said "~5 min drive" from 4619 to WTA, but GPS shows 7-9 min to 4697/4699
- Template said 1-3 min walk within 4619, GPS shows 4 min North-to-West — verify interior route

---

## Approval Checklist

- [ ] Walk 3-5 key routes with stopwatch (e.g., 4619 North → West, 4619 → 4693, 115 → 116)
- [ ] Verify drive times match GPS estimates (campus speed limits, traffic, parking)
- [ ] Confirm walk vs. drive threshold (is 300m realistic cutoff?)
- [ ] Decide on demolished facility handling
- [ ] Add missing GPS coordinates for remaining stops
- [ ] Final sign-off by tour coordinator

**Once verified, these times will be used in the Build-a-Tour feature for automatic tour duration calculation.**
