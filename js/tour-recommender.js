/*
  Smart Tour Recommendation Engine
  Suggests optimal tours based on time budget and interests
*/

// Extract all unique interest tags from stops
function extractInterestTags() {
  const tags = new Set();

  window.STOPS.forEach(stop => {
    if (!stop.legacySite && stop.available !== false) {
      // Add lab as a tag
      if (stop.lab) tags.add(stop.lab);

      // Add chips as tags
      if (stop.chips) {
        stop.chips.forEach(chip => tags.add(chip));
      }

      // Add location-based tags
      if (stop.location) {
        if (stop.location.includes('West Test Area')) tags.add('Outdoor Testing');
        if (stop.location.includes('East Test Area')) tags.add('Outdoor Testing');
        if (stop.location.includes('4619')) tags.add('Indoor Labs');
      }
    }
  });

  return Array.from(tags).sort();
}

// Score a tour based on criteria
function scoreTour(tour, timeLimit, interests, startLocation) {
  let score = 0;
  const { totalMinutes } = calculateTourTime(tour);

  // Time fit score (penalty if over time, bonus if close to target)
  if (totalMinutes > timeLimit) {
    score -= (totalMinutes - timeLimit) * 2; // Heavy penalty for exceeding time
  } else {
    const timeUtilization = totalMinutes / timeLimit;
    if (timeUtilization > 0.8) score += 50; // Bonus for using 80%+ of time
    if (timeUtilization > 0.9) score += 25; // Extra bonus for 90%+
  }

  // Interest match score
  if (interests.length > 0) {
    tour.forEach(stop => {
      let matchCount = 0;

      // Check lab match
      if (interests.includes(stop.lab)) matchCount++;

      // Check chip matches
      if (stop.chips) {
        stop.chips.forEach(chip => {
          if (interests.includes(chip)) matchCount++;
        });
      }

      // Location-based matches
      if (interests.includes('Outdoor Testing') &&
          (stop.location.includes('West Test Area') || stop.location.includes('East Test Area'))) {
        matchCount++;
      }
      if (interests.includes('Indoor Labs') && stop.location.includes('4619')) {
        matchCount++;
      }

      score += matchCount * 20; // 20 points per interest match
    });
  } else {
    // No interests specified - slight bonus for diversity
    score += tour.length * 5;
  }

  // Travel efficiency score (prefer fewer drives, more walks)
  const { breakdown } = calculateTourTime(tour);
  breakdown.forEach(leg => {
    if (leg.mode === 'walk') score += 10; // Bonus for walking (easier)
    if (leg.mode === 'drive' && leg.travelTime > 7) score -= 5; // Penalty for long drives
  });

  // Starting location match
  if (startLocation && tour.length > 0) {
    const firstStop = tour[0];
    if (startLocation.includes('4619') && firstStop.location.includes('4619')) {
      score += 30; // Bonus for starting where requested
    }
  }

  // Diversity bonus (different labs)
  const labs = new Set(tour.map(s => s.lab).filter(Boolean));
  score += labs.size * 10;

  // Location clustering bonus (staying in one area is easier)
  const locations = tour.map(s => {
    if (s.location.includes('4619')) return '4619';
    if (s.location.includes('West Test Area')) return 'WTA';
    if (s.location.includes('East Test Area')) return 'ETA';
    return 'other';
  });
  const uniqueLocations = new Set(locations);
  if (uniqueLocations.size === 1) score += 40; // Big bonus for single-location tour
  if (uniqueLocations.size === 2) score += 20; // Moderate bonus for two locations

  return score;
}

// Generate candidate tours
function generateCandidateTours(timeLimit, interests) {
  const activeStops = window.STOPS.filter(stop => !stop.legacySite && stop.available !== false);

  // Filter by interests if specified
  let relevantStops = activeStops;
  if (interests.length > 0) {
    relevantStops = activeStops.filter(stop => {
      // Check if stop matches any interest
      if (interests.includes(stop.lab)) return true;
      if (stop.chips && stop.chips.some(chip => interests.includes(chip))) return true;

      // Location-based matches
      if (interests.includes('Outdoor Testing') &&
          (stop.location.includes('West Test Area') || stop.location.includes('East Test Area'))) {
        return true;
      }
      if (interests.includes('Indoor Labs') && stop.location.includes('4619')) return true;

      return false;
    });

    // If no matches, fall back to all stops
    if (relevantStops.length === 0) relevantStops = activeStops;
  }

  const candidates = [];

  // Generate tours of different lengths (2-6 stops)
  for (let length = 2; length <= Math.min(6, relevantStops.length); length++) {
    // Sample different combinations
    for (let attempt = 0; attempt < 50; attempt++) {
      const tour = [];
      const used = new Set();

      // Pick random stops
      while (tour.length < length) {
        const randomStop = relevantStops[Math.floor(Math.random() * relevantStops.length)];
        if (!used.has(randomStop.id)) {
          tour.push(randomStop);
          used.add(randomStop.id);
        }
      }

      // Quick time check
      const { totalMinutes } = calculateTourTime(tour);
      if (totalMinutes <= timeLimit * 1.2) { // Allow 20% over for consideration
        candidates.push(tour);
      }
    }
  }

  // Add pre-built efficient tours
  candidates.push(...getPrebuiltTours(relevantStops, interests));

  return candidates;
}

// Pre-built efficient tour patterns
function getPrebuiltTours(stops, interests) {
  const tours = [];

  // Building 4619 tours (very efficient - all walking)
  const building4619Stops = stops.filter(s => s.location.includes('4619'));
  if (building4619Stops.length >= 3) {
    // West end tour
    const westStops = building4619Stops.filter(s => s.id !== 'stop'); // Exclude Flat Floor (North)
    if (westStops.length >= 2) {
      tours.push([westStops[0], westStops[1]]);
      if (westStops.length >= 3) tours.push([westStops[0], westStops[1], westStops[2]]);
    }

    // Full building tour
    if (building4619Stops.length >= 4) {
      tours.push([building4619Stops[0], building4619Stops[1], building4619Stops[2], building4619Stops[3]]);
    }
  }

  // West Test Area tours
  const wtaStops = stops.filter(s => s.location.includes('West Test Area'));
  if (wtaStops.length >= 2) {
    tours.push([wtaStops[0], wtaStops[1]]);
    if (wtaStops.length >= 3) tours.push([wtaStops[0], wtaStops[1], wtaStops[2]]);
  }

  // East Test Area tours
  const etaStops = stops.filter(s => s.location.includes('East Test Area'));
  if (etaStops.length >= 2) {
    tours.push([etaStops[0], etaStops[1]]);
  }

  // Cross-campus sampler (if time allows)
  if (building4619Stops.length > 0 && wtaStops.length > 0) {
    tours.push([building4619Stops[0], wtaStops[0]]);
  }

  return tours;
}

// Main recommendation function
function recommendTours(timeLimit, interests = [], startLocation = null, count = 3) {
  // Generate candidate tours
  const candidates = generateCandidateTours(timeLimit, interests);

  // Score each tour
  const scoredTours = candidates.map(tour => ({
    tour,
    score: scoreTour(tour, timeLimit, interests, startLocation),
    ...calculateTourTime(tour)
  }));

  // Filter out tours that exceed time limit by too much
  const validTours = scoredTours.filter(t => t.totalMinutes <= timeLimit * 1.1);

  // Sort by score (highest first)
  validTours.sort((a, b) => b.score - a.score);

  // Remove duplicates (tours with same stop IDs in different order)
  const unique = [];
  const seen = new Set();

  for (const tour of validTours) {
    const key = tour.tour.map(s => s.id).sort().join(',');
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(tour);
    }
  }

  // Return top N
  return unique.slice(0, count);
}

// Generate explanation for why tour was recommended
function explainRecommendation(tour, timeLimit, interests) {
  const reasons = [];
  const { totalMinutes } = calculateTourTime(tour.tour);

  // Time fit
  const timeUtilization = (totalMinutes / timeLimit) * 100;
  if (timeUtilization > 90) {
    reasons.push(`Maximizes your time (${Math.round(timeUtilization)}% of ${timeLimit} min)`);
  } else {
    reasons.push(`Fits comfortably in ${timeLimit} min (${totalMinutes} min tour)`);
  }

  // Interest matches
  if (interests.length > 0) {
    const matchingInterests = [];
    tour.tour.forEach(stop => {
      if (interests.includes(stop.lab)) matchingInterests.push(stop.lab);
      if (stop.chips) {
        stop.chips.forEach(chip => {
          if (interests.includes(chip)) matchingInterests.push(chip);
        });
      }
    });

    if (matchingInterests.length > 0) {
      const uniqueMatches = [...new Set(matchingInterests)];
      reasons.push(`Matches your interests: ${uniqueMatches.slice(0, 3).join(', ')}`);
    }
  }

  // Location efficiency
  const locations = tour.tour.map(s => {
    if (s.location.includes('4619')) return 'Building 4619';
    if (s.location.includes('West Test Area')) return 'West Test Area';
    if (s.location.includes('East Test Area')) return 'East Test Area';
    return s.location;
  });
  const uniqueLocations = new Set(locations);

  if (uniqueLocations.size === 1) {
    reasons.push(`All stops in ${Array.from(uniqueLocations)[0]} (easy logistics)`);
  } else if (tour.breakdown.filter(b => b.mode === 'walk').length > 2) {
    reasons.push('Minimal driving, mostly walking between stops');
  }

  // Diversity
  const labs = new Set(tour.tour.map(s => s.lab).filter(Boolean));
  if (labs.size >= 3) {
    reasons.push(`Diverse experience (${labs.size} different test capabilities)`);
  }

  return reasons;
}
