/*
  Build-a-Tour Feature
  Smart tour recommendation wizard based on time and interests
*/

let customTour = [];
let wizardStep = 'input'; // 'input' or 'results'
let recommendedTours = [];

function openBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Reset to wizard input step
  wizardStep = 'input';
  showWizardStep();
}

function closeBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

function showWizardStep() {
  const container = document.getElementById('wizard-container');
  if (!container) return;

  if (wizardStep === 'input') {
    showInputStep(container);
  } else if (wizardStep === 'results') {
    showResultsStep(container);
  }
}

function showInputStep(container) {
  const interestTags = extractInterestTags();

  container.innerHTML = `
    <div class="wizard-step">
      <h3 style="margin-bottom:1.5rem">Let's build your perfect tour</h3>

      <!-- Time Budget -->
      <div class="form-section">
        <label class="form-label" for="time-budget">How much time do you have?</label>
        <div style="display:flex;gap:1rem;flex-wrap:wrap">
          <button class="time-chip" onclick="selectTime(30)">30 min</button>
          <button class="time-chip" onclick="selectTime(60)">1 hour</button>
          <button class="time-chip active" onclick="selectTime(90)">90 min</button>
          <button class="time-chip" onclick="selectTime(120)">2 hours</button>
          <button class="time-chip" onclick="selectTime(180)">3 hours</button>
        </div>
        <input type="number" id="time-budget-custom" placeholder="Or enter custom minutes..."
          style="margin-top:1rem;width:100%;padding:0.5rem;border:1px solid #ccc;border-radius:4px">
      </div>

      <!-- Interests -->
      <div class="form-section" style="margin-top:2rem">
        <label class="form-label">What are you interested in? (optional)</label>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem">
          ${interestTags.map(tag => `
            <button class="interest-chip" onclick="toggleInterest('${tag}')" data-interest="${tag}">
              ${tag}
            </button>
          `).join('')}
        </div>
        <p style="font-size:0.85rem;color:#666;margin-top:0.5rem">
          Leave blank for a general tour covering different capabilities
        </p>
      </div>

      <!-- Starting Location (optional) -->
      <div class="form-section" style="margin-top:2rem">
        <label class="form-label">Starting location (optional)</label>
        <select id="start-location" style="width:100%;padding:0.5rem;border:1px solid #ccc;border-radius:4px">
          <option value="">Any location</option>
          <option value="4619-north">Building 4619 (North door - ET30 labs)</option>
          <option value="4619-west">Building 4619 (West door - V20/ET20 labs)</option>
          <option value="eta">East Test Area</option>
          <option value="wta">West Test Area</option>
        </select>
      </div>

      <!-- Generate Button -->
      <div style="margin-top:2rem;text-align:center">
        <button class="btn red" onclick="generateRecommendations()" style="padding:1rem 2rem;font-size:1.1rem">
          ✨ Recommend Tours
        </button>
      </div>
    </div>
  `;

  // Set default time to 90 minutes
  window.selectedTime = 90;
  window.selectedInterests = [];
}

function selectTime(minutes) {
  window.selectedTime = minutes;

  // Update UI
  document.querySelectorAll('.time-chip').forEach(chip => chip.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('time-budget-custom').value = '';
}

function toggleInterest(interest) {
  if (!window.selectedInterests) window.selectedInterests = [];

  const index = window.selectedInterests.indexOf(interest);
  if (index >= 0) {
    window.selectedInterests.splice(index, 1);
    event.target.classList.remove('active');
  } else {
    window.selectedInterests.push(interest);
    event.target.classList.add('active');
  }
}

function generateRecommendations() {
  // Get time from custom input or selected button
  const customTime = document.getElementById('time-budget-custom').value;
  const timeLimit = customTime ? parseInt(customTime) : window.selectedTime;

  if (!timeLimit || timeLimit < 15) {
    alert('Please enter a time of at least 15 minutes');
    return;
  }

  const interests = window.selectedInterests || [];
  const startLocation = document.getElementById('start-location').value;

  // Generate recommendations
  recommendedTours = recommendTours(timeLimit, interests, startLocation, 3);

  if (recommendedTours.length === 0) {
    alert('No tours found matching your criteria. Try increasing your time budget or removing some interest filters.');
    return;
  }

  // Show results
  wizardStep = 'results';
  showWizardStep();
}

function showResultsStep(container) {
  const timeLimit = window.selectedTime;
  const interests = window.selectedInterests || [];

  container.innerHTML = `
    <div class="wizard-step">
      <button class="btn secondary" onclick="wizardStep='input'; showWizardStep()" style="margin-bottom:1rem">
        ← Back to Search
      </button>

      <h3 style="margin-bottom:0.5rem">Recommended Tours</h3>
      <p style="color:#666;margin-bottom:2rem">
        Based on ${timeLimit} min ${interests.length > 0 ? `· ${interests.join(', ')}` : ''}
      </p>

      ${recommendedTours.map((tour, index) => {
        const reasons = explainRecommendation(tour, timeLimit, interests);
        const hours = Math.floor(tour.totalMinutes / 60);
        const mins = tour.totalMinutes % 60;
        const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

        return `
          <div class="tour-recommendation" style="margin-bottom:2rem;padding:1.5rem;background:white;border:2px solid ${index === 0 ? 'var(--nasa-blue)' : '#ddd'};border-radius:8px;position:relative">
            ${index === 0 ? '<div style="position:absolute;top:-12px;left:20px;background:var(--nasa-blue);color:white;padding:0.25rem 1rem;border-radius:20px;font-size:0.85rem;font-weight:bold">BEST MATCH</div>' : ''}

            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem">
              <div>
                <h4 style="margin:0 0 0.5rem 0">Tour Option ${index + 1}</h4>
                <div style="font-size:0.9rem;color:#666">
                  ${tour.tour.length} stops · ${timeStr} total
                </div>
              </div>
              <button class="btn ${index === 0 ? 'red' : ''}" onclick="selectTour(${index})">
                Select This Tour
              </button>
            </div>

            <!-- Why this tour -->
            <div style="background:#f8f9fa;padding:1rem;border-radius:4px;margin-bottom:1rem">
              <strong style="font-size:0.9rem">Why this tour:</strong>
              <ul style="margin:0.5rem 0 0 1.2rem;font-size:0.9rem;color:#555">
                ${reasons.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>

            <!-- Stop list -->
            <div style="font-size:0.9rem">
              ${tour.tour.map((stop, i) => {
                const travel = tour.breakdown[i];
                return `
                  <div style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;border-bottom:1px solid #eee">
                    <div style="font-weight:bold;color:var(--nasa-blue);min-width:20px">${i + 1}.</div>
                    <div style="flex:1">
                      <div style="font-weight:bold">${stop.shortTitle || stop.title}</div>
                      <div style="font-size:0.85rem;color:#666">${stop.locationShort || stop.location}</div>
                    </div>
                    <div style="text-align:right;font-size:0.85rem;color:#666">
                      ${stop.tourTime || '~15 min'}
                      ${travel.travelTime > 0 ? `<br><span style="color:#999">+ ${travel.travelTime} min ${travel.mode}</span>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}

      <div style="text-align:center;margin-top:2rem">
        <button class="btn secondary" onclick="wizardStep='input'; showWizardStep()">
          Try Different Criteria
        </button>
      </div>
    </div>
  `;
}

function selectTour(index) {
  const tour = recommendedTours[index];
  customTour = tour.tour;
  wizardStep = 'manual';
  renderCustomTour();
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
