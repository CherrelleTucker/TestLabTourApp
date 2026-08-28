/*
  GPS coordinates for tour stop locations (verified, not from campus map).
  Used to calculate accurate travel times between stops.

  Format: { stopId: { lat, lng, label, door, parkingArea } }
  - door: which entrance to use (affects walking distance within large buildings)
  - parkingArea: which parking lot visitors use for this stop
*/

window.GPS_COORDS = {
  // Building 4619 — Multiple entrances for different labs
  // ET30 labs (Flat Floor) use North door/parking
  'stop': { lat: 34.64510391309478, lng: -86.66992925788453, label: 'Flat Floor', door: 'North', parkingArea: 'north-4619' },

  // V20/ET20 labs (LTA, LTAE, Structural Dynamics, ETF) use West door/parking
  'stop14': { lat: 34.64491055497426, lng: -86.67199507384467, label: 'LTA', door: 'West', parkingArea: 'west-4619' },
  'stop15': { lat: 34.64491055497426, lng: -86.67199507384467, label: 'LTAE', door: 'West', parkingArea: 'west-4619' },
  'stop16': { lat: 34.64491055497426, lng: -86.67199507384467, label: 'Structural Dynamics', door: 'West', parkingArea: 'west-4619' },
  'stop12': { lat: 34.64491055497426, lng: -86.67199507384467, label: 'ETF', door: 'West', parkingArea: 'west-4619' },

  // East Test Area — Each stand is driven to (badged through gate by guide)
  'stop8': { lat: 34.6339873684231, lng: -86.65919643254514, label: 'Test Stand 300 (SPTA)', door: 'Outdoor', parkingArea: 'eta-direct' },
  'stop11': { lat: 34.62905746402652, lng: -86.65751820572076, label: 'Test Stand 116', door: 'Outdoor', parkingArea: 'eta-direct' },
  'stop13': { lat: 34.63047775853135, lng: -86.65651225241194, label: 'Test Stand 115', door: 'Outdoor', parkingArea: 'eta-direct' },

  // West Test Area — 4697+4699 are walkable cluster, 4693 is separate (drive between)
  'stop2': { lat: 34.63227850794282, lng: -86.67139709186281, label: 'Test Stand 4693', door: 'Outdoor', parkingArea: 'wta-direct' },
  'stop4': { lat: 34.62858222362769, lng: -86.67311036454826, label: 'Test Stand 4697 (F-1)', door: 'Outdoor', parkingArea: 'wta-direct' },
  'stop9': { lat: 34.62853383444907, lng: -86.67266961487452, label: 'Test Stand 4699', door: 'Outdoor', parkingArea: 'wta-direct' },

  // Building 4666 (ET50)
  'stop17': { lat: 34.63023413758244, lng: -86.6650800861073, label: 'ET50 Special Test Equipment', door: 'Front', parkingArea: 'building-4666' },

  // Historic stops
  'stop10': { lat: 34.63314796806077, lng: -86.66606156005027, label: 'Historic Test Stand', door: 'Outdoor', parkingArea: 'historic-area' },

  // Parking areas (reference only — actual stops use parkingArea field)
  '_parking_eta_wta': { lat: 34.62866896011838, lng: -86.66390584793228, label: 'Visitor Parking - East/West Test Areas (guide badges through)', door: 'Parking' },
  '_parking_4619_north': { lat: 34.64510391309478, lng: -86.66992925788453, label: 'Building 4619 North Parking', door: 'Parking' },
  '_parking_4619_west': { lat: 34.64491055497426, lng: -86.67199507384467, label: 'Building 4619 West Parking', door: 'Parking' },
};

/*
  Haversine formula to calculate distance between two GPS coordinates.
  Returns distance in meters.
*/
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

/*
  Calculate travel time between two stops based on actual tour operations.

  VERIFIED TOUR LOGISTICS (2026-08-28):

  Building 4619:
  - Two parking areas: North (for ET30/Flat Floor) and West (for V20/ET20 labs)
  - Walk end-to-end within building (~175m, 4 min)
  - Can re-park at other end if tour switches between ET30 and ET20 stops

  East Test Area (ETA):
  - Visitor parks at gate, guide badges them through
  - Drive directly to each test stand entrance (no parking walks)
  - Each stand is a separate drive (TS 300, TS 115, TS 116)

  West Test Area (WTA):
  - Drive directly to each stand entrance (no parking walks)
  - TS 4697 + TS 4699 are adjacent/walkable (~65m)
  - TS 4693 is separate, requires driving between
*/
function calculateTravelTime(fromStopId, toStopId) {
  const from = window.GPS_COORDS[fromStopId];
  const to = window.GPS_COORDS[toStopId];

  if (!from || !to) {
    console.warn(`Missing GPS coords for ${fromStopId} or ${toStopId}`);
    return { minutes: 5, mode: 'drive', estimated: true };
  }

  const distanceMeters = haversineDistance(from.lat, from.lng, to.lat, to.lng);
  const fromArea = from.parkingArea;
  const toArea = to.parkingArea;

  // ============================================================
  // BUILDING 4619 INTERNAL TRAVEL
  // ============================================================

  // Same exact entrance (e.g., LTA → LTAE, both West door)
  if (distanceMeters < 10) {
    return { minutes: 1, mode: 'walk', distance: distanceMeters, note: 'Adjacent bays, same entrance' };
  }

  // Within Building 4619, same parking area (e.g., all West door stops)
  if (fromArea === toArea && fromArea && (fromArea === 'north-4619' || fromArea === 'west-4619')) {
    return { minutes: 2, mode: 'walk', distance: distanceMeters, note: 'Same building, same parking area' };
  }

  // Building 4619 North ↔ West (different parking areas)
  if ((fromArea === 'north-4619' && toArea === 'west-4619') || (fromArea === 'west-4619' && toArea === 'north-4619')) {
    return { minutes: 4, mode: 'walk', distance: distanceMeters, note: 'Building 4619 end-to-end walk' };
  }

  // ============================================================
  // WEST TEST AREA (WTA) INTERNAL TRAVEL
  // ============================================================

  // TS 4697 ↔ TS 4699 (adjacent, walkable)
  if ((fromStopId === 'stop4' && toStopId === 'stop9') || (fromStopId === 'stop9' && toStopId === 'stop4')) {
    return { minutes: 2, mode: 'walk', distance: distanceMeters, note: 'TS 4697 and 4699 are adjacent' };
  }

  // Other WTA combinations (requires driving between)
  if (fromArea === 'wta-direct' && toArea === 'wta-direct') {
    return { minutes: 3, mode: 'drive', distance: distanceMeters, note: 'Drive between WTA test stands' };
  }

  // ============================================================
  // EAST TEST AREA (ETA) INTERNAL TRAVEL
  // ============================================================

  // Between ETA test stands (all require driving, badged through gate)
  if (fromArea === 'eta-direct' && toArea === 'eta-direct') {
    return { minutes: 4, mode: 'drive', distance: distanceMeters, note: 'Drive between ETA test stands (badged through)' };
  }

  // ============================================================
  // CROSS-AREA TRAVEL (different major areas)
  // ============================================================

  // Use GPS distance for cross-campus drives
  // Campus speed ~25 mph + 2 min for parking/re-entry + 1 min badge through if ETA/WTA
  const driveTimeMinutes = Math.ceil(distanceMeters / 670); // 670 m/min = 25 mph
  const parkingOverhead = 2;
  const badgeOverhead = (toArea === 'eta-direct' || toArea === 'wta-direct') ? 1 : 0;

  const totalMinutes = driveTimeMinutes + parkingOverhead + badgeOverhead;

  // Round to reasonable increments
  if (totalMinutes <= 5) return { minutes: 5, mode: 'drive', distance: distanceMeters };
  if (totalMinutes <= 7) return { minutes: 7, mode: 'drive', distance: distanceMeters };
  if (totalMinutes <= 9) return { minutes: 9, mode: 'drive', distance: distanceMeters };
  return { minutes: Math.ceil(totalMinutes / 2) * 2, mode: 'drive', distance: distanceMeters }; // Round to nearest 2 min
}

/*
  Pre-calculate all travel times between stops for quick lookup.
  Call this once when the app loads.
*/
function buildTravelTimeMatrix() {
  const matrix = {};
  const stopIds = Object.keys(window.GPS_COORDS);

  stopIds.forEach(fromId => {
    matrix[fromId] = {};
    stopIds.forEach(toId => {
      if (fromId === toId) {
        matrix[fromId][toId] = { minutes: 0, mode: 'none', distance: 0 };
      } else {
        matrix[fromId][toId] = calculateTravelTime(fromId, toId);
      }
    });
  });

  return matrix;
}

// Export for use in Build-a-Tour feature
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GPS_COORDS, calculateTravelTime, buildTravelTimeMatrix };
}
