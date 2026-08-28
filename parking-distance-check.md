# Parking Distance Analysis

**Visitor Parking for East/West Test Areas**: 34.62866896011838, -86.66390584793228

This is critical for accurate drive time calculations — when driving between test stands, visitors must:
1. Walk from current stand to parking
2. Drive to destination area parking
3. Walk from parking to next stand

---

## Distance from Parking to Test Stands

### East Test Area Stands (from shared parking)

| Stand | GPS Coordinates | Distance from Parking | Walk Time |
|-------|----------------|----------------------|-----------|
| **TS 300 (stop8)** | 34.6339873684231, -86.65919643254514 | **1,416m** | 18 min walk |
| **TS 115 (stop13)** | 34.63047775853135, -86.65651225241194 | **1,840m** | 23 min walk |
| **TS 116 (stop11)** | 34.62905746402652, -86.65751820572076 | **1,631m** | 21 min walk |

**⚠️ PROBLEM**: These are all 1.4-1.8 km from parking — too far to walk comfortably (18-23 min).

**Question**: Is this the wrong parking lot for East Test Area? Or do visitors get driven directly to each stand (no parking walk)?

---

### West Test Area Stands (from shared parking)

| Stand | GPS Coordinates | Distance from Parking | Walk Time |
|-------|----------------|----------------------|-----------|
| **TS 4693 (stop2)** | 34.63227850794282, -86.67139709186281 | **770m** | 10 min walk |
| **TS 4697/F-1 (stop4)** | 34.62858222362769, -86.67311036454826 | **915m** | 12 min walk |
| **TS 4699** | 34.62853383444907, -86.67266961487452 | **868m** | 11 min walk |

**These are more reasonable** (10-12 min walks), but still significant.

---

## Revised Drive Time Model

If visitors park once and walk to multiple stands in an area:

### Model A: Park Once Per Area
```
Drive time from 4619 → WTA = Drive to parking (5-7 min) + Walk to first stand (10 min) = 15-17 min
Then: Walk between WTA stands (varies)
```

### Model B: Drive to Each Stand
```
Drive time from 4619 → WTA Stand 4693 = 5-7 min (no additional walk)
Drive time between WTA stands = 2-3 min (all < 500m apart)
```

---

## Questions to Resolve

1. **Tour bus/van model**: Do visitors stay in vehicle and get dropped at each stand entrance? Or do they park and walk?

2. **East Test Area**: The parking lot is 1.4-1.8 km from all three stands — is this:
   - Wrong parking lot (need separate ETA parking coordinates)?
   - Correct, but visitors are driven to stand entrances (no walk from parking)?
   - Correct, and 20-min walks are expected for outdoor test areas?

3. **West Test Area**: 10-12 min walks from parking — acceptable or also driven to stand entrance?

4. **Safety/PPE**: Do outdoor test areas require PPE donning time or safety briefings that add 5-10 min per stop?

---

## Recommendation

**Before implementing travel times, clarify the tour logistics:**

- [ ] Confirm parking lot usage (one central lot vs. multiple lots)
- [ ] Confirm walking vs. driving between stands in same area
- [ ] Get typical tour flow example (e.g., "4619 Flat Floor → drive to WTA parking → walk to 4693 → walk to 4697 → drive back to 4619")
- [ ] Factor in any safety briefing or PPE time for outdoor stands

**Then update travel time model** to match actual tour operations, not just GPS distance.
