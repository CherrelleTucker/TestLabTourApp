# TODO: Fix Campus Pin Coordinates for Building 4619 Stops

## Problem
Several stops in Building 4619 have incorrect campus pin coordinates in `data/stops.js`, causing them to appear in the wrong location on the campus map PDF.

## Affected Stops

### V20 Chamber
- **Current**: `"campusPin": { "xPct": 74.5, "yPct": 80.4 }`
- **Issue**: Showing in West Test Area, should be in Building 4619
- **Location**: `"Building 4619 · Environmental Test Facility"`

### Others to verify:
- Flat Floor (stop) - `{ "xPct": 49.5, "yPct": 48.1 }` - seems correct
- LTA (stop14) - needs coordinate check
- LTAE - needs coordinate check

## Expected Behavior
All stops with location "Building 4619" should have campusPin coordinates that place them near Building 4619 on the campus map (approximately xPct: 49-51%, yPct: 48-50%).

## How to Fix
1. Open campus map in browser: `index.html` → Campus Map
2. Verify Building 4619 location on the aerial photo
3. For each Building 4619 stop:
   - Check if pin is in correct location
   - If wrong, adjust xPct/yPct in `data/stops.js`
   - Test in PDF map to verify

## Files to Update
- `data/stops.js` - Update campusPin coordinates for affected stops
