/*
  Build-a-Tour Feature
  Allows users to select tour stops and calculates total time including travel between locations
*/

let customTour = [];

function openBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Populate available stops
  populateAvailableStops();

  // Update display
  renderCustomTour();
}

function closeBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function populateAvailableStops() {
  const grid = document.getElementById('available-stops-grid');
  if (!grid) return;

  // Filter to active stops only (skip legacy/demolished)
  const activeStops = window.STOPS.filter(stop => !stop.legacySite && stop.available !== false);

  grid.innerHTML = activeStops.map(stop => {
    const isSelected = customTour.some(s => s.id === stop.id);
    const buttonClass = isSelected ? 'onepager-card selected' : 'onepager-card';

    return `
      <div class="${buttonClass}" onclick="toggleStop('${stop.id}')" style="cursor:pointer">
        <div style="font-size:2rem;margin-bottom:0.5rem">${getStopIcon(stop)}</div>
        <div style="font-weight:bold;margin-bottom:0.25rem">${stop.shortTitle || stop.title}</div>
        <div style="font-size:0.8rem;color:#666">${stop.locationShort || stop.location}</div>
        <div style="font-size:0.8rem;color:var(--nasa-blue);margin-top:0.25rem">${stop.tourTime || '~15 min'}</div>
        ${isSelected ? '<div style="margin-top:0.5rem;color:green">✓ Added</div>' : ''}
      </div>
    `;
  }).join('');
}

function getStopIcon(stop) {
  // Return emoji based on stop type
  if (stop.lab === 'Structural Dynamics') return '🔨';
  if (stop.lab === 'Environmental Test') return '🌡️';
  if (stop.lab === 'Propulsion Test') return '🚀';
  if (stop.chips && stop.chips.includes('History')) return '📜';
  if (stop.location && stop.location.includes('Test Stand')) return '🔥';
  return '🏢';
}

function toggleStop(stopId) {
  const stop = window.STOPS.find(s => s.id === stopId);
  if (!stop) return;

  const index = customTour.findIndex(s => s.id === stopId);

  if (index >= 0) {
    // Remove from tour
    customTour.splice(index, 1);
  } else {
    // Add to tour
    customTour.push(stop);
  }

  // Re-render both lists
  populateAvailableStops();
  renderCustomTour();
}

function renderCustomTour() {
  const container = document.getElementById('custom-tour-list');
  const totalTimeDisplay = document.getElementById('tour-total-time');

  if (customTour.length === 0) {
    container.innerHTML = '<p style="color:#999;text-align:center">Click stops below to add them to your tour</p>';
    totalTimeDisplay.textContent = '0 min';
    return;
  }

  // Calculate total time
  const { totalMinutes, breakdown } = calculateTourTime(customTour);

  // Render tour list with drag handles and remove buttons
  container.innerHTML = customTour.map((stop, index) => {
    const travel = breakdown[index];
    return `
      <div class="tour-stop-item" style="display:flex;align-items:center;gap:1rem;padding:0.75rem;background:white;border:1px solid #ddd;border-radius:8px;margin-bottom:0.5rem">
        <div style="font-size:1.5rem;color:#999;cursor:move" class="drag-handle">⋮⋮</div>
        <div style="flex:1">
          <div style="font-weight:bold">${index + 1}. ${stop.shortTitle || stop.title}</div>
          <div style="font-size:0.85rem;color:#666">${stop.locationShort || stop.location}</div>
          <div style="font-size:0.85rem;color:var(--nasa-blue);margin-top:0.25rem">
            Tour: ${stop.tourTime || '~15 min'}
            ${travel.travelTime > 0 ? ` + ${travel.travelTime} min ${travel.mode}` : ''}
          </div>
        </div>
        <button onclick="removeStop(${index})" style="background:#dc3545;color:white;border:none;padding:0.5rem 1rem;border-radius:4px;cursor:pointer">Remove</button>
      </div>
    `;
  }).join('');

  // Update total time
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;
  totalTimeDisplay.textContent = timeStr;

  // Show breakdown
  const stopTime = breakdown.reduce((sum, b) => sum + b.stopTime, 0);
  const travelTime = breakdown.reduce((sum, b) => sum + b.travelTime, 0);

  container.innerHTML += `
    <div style="margin-top:1rem;padding:1rem;background:#f8f9fa;border-radius:8px;font-size:0.9rem">
      <strong>Time Breakdown:</strong><br>
      Tour stops: ${stopTime} min<br>
      Travel time: ${travelTime} min<br>
      <strong>Total: ${timeStr}</strong>
    </div>
  `;
}

function calculateTourTime(stops) {
  if (stops.length === 0) return { totalMinutes: 0, breakdown: [] };

  let totalMinutes = 0;
  const breakdown = [];

  for (let i = 0; i < stops.length; i++) {
    const stop = stops[i];

    // Parse stop time (e.g., "~30 min" → 30)
    const stopTime = parseStopTime(stop.tourTime || '~15 min');
    totalMinutes += stopTime;

    // Calculate travel time to next stop
    let travelTime = 0;
    let mode = 'walk';

    if (i < stops.length - 1) {
      const nextStop = stops[i + 1];
      const travelData = calculateTravelTime(stop.id, nextStop.id);
      travelTime = travelData.minutes;
      mode = travelData.mode;
      totalMinutes += travelTime;
    }

    breakdown.push({ stopTime, travelTime, mode });
  }

  return { totalMinutes, breakdown };
}

function parseStopTime(timeStr) {
  // Parse "~30 min" or "30-45 min" or "1h 30m" to minutes
  const match = timeStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 15;
}

function removeStop(index) {
  customTour.splice(index, 1);
  populateAvailableStops();
  renderCustomTour();
}

function clearCustomTour() {
  if (customTour.length > 0 && !confirm('Clear all stops from your custom tour?')) {
    return;
  }
  customTour = [];
  populateAvailableStops();
  renderCustomTour();
}

function exportCustomTour() {
  if (customTour.length === 0) {
    alert('Add stops to your tour first!');
    return;
  }

  const { totalMinutes, breakdown } = calculateTourTime(customTour);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

  // Generate tour itinerary text
  let itinerary = `MSFC Test Lab Custom Tour\n`;
  itinerary += `Total Time: ${timeStr}\n`;
  itinerary += `Generated: ${new Date().toLocaleDateString()}\n\n`;
  itinerary += `─────────────────────────────────────\n\n`;

  customTour.forEach((stop, i) => {
    const travel = breakdown[i];
    itinerary += `${i + 1}. ${stop.title}\n`;
    itinerary += `   Location: ${stop.location}\n`;
    itinerary += `   Duration: ${stop.tourTime || '~15 min'}\n`;
    if (travel.travelTime > 0) {
      itinerary += `   → Travel to next stop: ${travel.travelTime} min (${travel.mode})\n`;
    }
    itinerary += `\n`;
  });

  const stopTime = breakdown.reduce((sum, b) => sum + b.stopTime, 0);
  const travelTime = breakdown.reduce((sum, b) => sum + b.travelTime, 0);

  itinerary += `─────────────────────────────────────\n`;
  itinerary += `Tour stops: ${stopTime} min\n`;
  itinerary += `Travel time: ${travelTime} min\n`;
  itinerary += `Total: ${timeStr}\n`;

  // Download as text file
  const blob = new Blob([itinerary], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `custom-tour-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert('Tour itinerary downloaded!');
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeBuildATour();
  }
});

// Close modal on background click
document.getElementById('build-a-tour-modal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeBuildATour();
  }
});
