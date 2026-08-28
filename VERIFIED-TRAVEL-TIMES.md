# Verified Travel Times — Based on Actual Tour Operations

**Date**: 2026-08-28  
**Source**: Tour coordinator confirmation + GPS coordinates

---

## Tour Logistics Summary

### Building 4619
- **Two parking areas**: North (for ET30 labs) and West (for V20/ET20 labs)
- **Within building**: 1-4 min walk depending on entrance
- **Can re-park** if tour switches between ET30 and ET20 stops

### East Test Area (ETA)
- **Gate procedure**: Visitor parks at gate, guide badges them through
- **Drive-to-entrance**: Each test stand is driven directly to (no parking walks)
- **Between stands**: 4 min drive between TS 300, TS 115, TS 116

### West Test Area (WTA)
- **Drive-to-entrance**: Each test stand is driven directly to
- **TS 4697 + TS 4699**: Adjacent, walkable (~65m, 2 min)
- **TS 4693**: Separate, 3 min drive from other WTA stands

---

## Travel Time Matrix

### Building 4619 Internal

| From → To | Time | Mode | Notes |
|-----------|------|------|-------|
| **Flat Floor (North) → LTA (West)** | 4 min | walk | End-to-end building walk |
| **Flat Floor (North) → LTAE (West)** | 4 min | walk | End-to-end building walk |
| **Flat Floor (North) → Structural Dynamics (West)** | 4 min | walk | End-to-end building walk |
| **Flat Floor (North) → ETF (West)** | 4 min | walk | End-to-end building walk |
| **LTA ↔ LTAE** | 1 min | walk | Adjacent bays, same entrance |
| **LTA → Structural Dynamics** | 2 min | walk | Same parking area |
| **LTA → ETF** | 2 min | walk | Same parking area |
| **LTAE → Structural Dynamics** | 2 min | walk | Same parking area |
| **LTAE → ETF** | 2 min | walk | Same parking area |

---

### Building 4619 → East Test Area

| From → To | Distance | Time | Mode |
|-----------|----------|------|------|
| **4619 (North) → TS 300** | 861m | 5 min | drive |
| **4619 (North) → TS 115** | 1,295m | 7 min | drive |
| **4619 (North) → TS 116** | 1,577m | 7 min | drive |
| **4619 (West) → TS 300** | 1,026m | 5 min | drive |
| **4619 (West) → TS 115** | 1,461m | 7 min | drive |
| **4619 (West) → TS 116** | 1,740m | 7 min | drive |

---

### Building 4619 → West Test Area

| From → To | Distance | Time | Mode |
|-----------|----------|------|------|
| **4619 (North) → TS 4693** | 1,102m | 7 min | drive |
| **4619 (North) → TS 4697 (F-1)** | 1,839m | 9 min | drive |
| **4619 (North) → TS 4699** | 1,832m | 9 min | drive |
| **4619 (West) → TS 4693** | 928m | 5 min | drive |
| **4619 (West) → TS 4697 (F-1)** | 1,666m | 7 min | drive |
| **4619 (West) → TS 4699** | 1,659m | 7 min | drive |

---

### East Test Area Internal

| From → To | Distance | Time | Mode | Notes |
|-----------|----------|------|------|-------|
| **TS 115 → TS 116** | 178m | 4 min | drive | Badged through gate |
| **TS 115 → TS 300** | 430m | 4 min | drive | Badged through gate |
| **TS 116 → TS 300** | 594m | 4 min | drive | Badged through gate |

---

### West Test Area Internal

| From → To | Distance | Time | Mode | Notes |
|-----------|----------|------|------|-------|
| **TS 4693 → TS 4697** | 454m | 3 min | drive | |
| **TS 4693 → TS 4699** | 453m | 3 min | drive | |
| **TS 4697 ↔ TS 4699** | 65m | 2 min | walk | Adjacent stands |

---

### Building 4619 → Building 4666 (ET50)

| From → To | Distance | Time | Mode |
|-----------|----------|------|------|
| **4619 (North) → 4666** | 1,394m | 7 min | drive |
| **4619 (West) → 4666** | 1,224m | 7 min | drive |

---

### East Test Area ↔ West Test Area

| From → To | Distance | Time | Mode |
|-----------|----------|------|------|
| **TS 115 (ETA) → TS 4693 (WTA)** | 1,333m | 7 min | drive |
| **TS 116 (ETA) → TS 4697 (WTA)** | 1,373m | 7 min | drive |
| **TS 300 (ETA) → TS 4693 (WTA)** | 860m | 5 min | drive |

---

## Example Tour Time Calculations

### Example 1: Building 4619 Tour (All West door stops)
```
Flat Floor (30 min)
  + 4 min walk to LTA
LTA (15 min)
  + 1 min walk to LTAE
LTAE (15 min)
  + 2 min walk to Structural Dynamics
Structural Dynamics (20 min)
────────────────────────────
Total: 87 minutes (1h 27m)
```

### Example 2: West Test Area Tour
```
4619 West door (starting point)
  + 7 min drive to TS 4697
TS 4697 F-1 Engine (20 min)
  + 2 min walk to TS 4699
TS 4699 (15 min)
  + 3 min drive to TS 4693
TS 4693 (15 min)
  + 5 min drive back to 4619
────────────────────────────
Total: 67 minutes (1h 7m)
```

### Example 3: Cross-Campus Tour
```
Flat Floor - 4619 North (30 min)
  + 5 min drive to TS 300 (ETA)
TS 300 (15 min)
  + 5 min drive to TS 4693 (WTA)
TS 4693 (15 min)
  + 7 min drive to Building 4666
ET50 (20 min)
────────────────────────────
Total: 97 minutes (1h 37m)
```

---

## Implementation Status

- [x] GPS coordinates verified for all active stops
- [x] Travel time algorithm updated with actual tour logistics
- [x] Test page created (`test-travel-times.html`)
- [ ] Integrate into main app UI (Build-a-Tour feature)
- [ ] Test with real tour scenarios
- [ ] Update stop duration data in `stops.js`

---

## Next Steps

1. **Verify stop durations**: Current `tourTime` field in stops.js shows estimates like "~30 min", "~15 min" — verify these
2. **Add travel time to stops.js**: Decide on data structure for storing pre-calculated travel times
3. **Build UI**: Create "Build Your Own Tour" interface that sums stop times + travel times
4. **Test edge cases**: Tours with demolished facilities, tours starting from different entrances
