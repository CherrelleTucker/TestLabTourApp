/*
  Build-a-Tour Feature
  Smart tour recommendation wizard based on time and interests
*/

let customTour = [];
let wizardStep = 'input'; // 'input', 'results', or 'manual'
let wizardMode = 'smart'; // 'smart' or 'manual'
let recommendedTours = [];

function openBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Reset to wizard input step
  wizardStep = wizardMode === 'smart' ? 'input' : 'manual';
  customTour = [];
  showWizardStep();
}

function closeBuildATour() {
  const modal = document.getElementById('build-a-tour-modal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

function toggleWizardMode() {
  if (wizardMode === 'smart') {
    wizardMode = 'manual';
    wizardStep = 'manual';
  } else {
    wizardMode = 'smart';
    wizardStep = 'input';
  }
  showWizardStep();
}

function showWizardStep() {
  const container = document.getElementById('wizard-container');
  if (!container) return;

  // Mode toggle at top
  const modeToggleHTML = `
    <div style="display:flex;gap:var(--space-xs);margin-bottom:var(--space-lg);padding:var(--space-sm);background:var(--panel-2);border-radius:var(--radius)">
      <button class="btn ${wizardMode === 'smart' ? 'red' : 'secondary'}" onclick="toggleWizardMode()" style="min-height:40px;font-size:var(--text-sm)">
        ✨ Smart Builder
      </button>
      <button class="btn ${wizardMode === 'manual' ? 'red' : 'secondary'}" onclick="toggleWizardMode()" style="min-height:40px;font-size:var(--text-sm)">
        🛠️ Manual Builder
      </button>
    </div>
  `;

  if (wizardStep === 'input') {
    showInputStep(container, modeToggleHTML);
  } else if (wizardStep === 'results') {
    showResultsStep(container, modeToggleHTML);
  } else if (wizardStep === 'manual') {
    showManualStep(container, modeToggleHTML);
  }
}

function showInputStep(container, modeToggleHTML) {
  const interestTags = extractInterestTags();

  container.innerHTML = modeToggleHTML + `
    <div class="wizard-step">
      <h2 class="wizard-section-header" style="margin-top:var(--space-md)">Time Budget</h2>
      <p style="color:var(--ink-soft);margin-bottom:var(--space-sm);font-size:var(--text-sm)">How much time do you have?</p>

      <div style="display:flex;gap:var(--space-xs);flex-wrap:wrap;align-items:center;margin-bottom:var(--space-sm)">
        <button class="time-chip" onclick="selectTime(30)">30 min</button>
        <button class="time-chip" onclick="selectTime(60)">1 hour</button>
        <button class="time-chip active" onclick="selectTime(90)">90 min</button>
        <button class="time-chip" onclick="selectTime(120)">2 hours</button>
        <button class="time-chip" onclick="selectTime(180)">3 hours</button>
        <span style="color:var(--ink-soft);margin:0 var(--space-2xs);font-size:var(--text-sm)">or</span>
        <input type="number" id="time-budget-custom" placeholder="Custom minutes" oninput="handleCustomTime()"
          style="width:130px;padding:var(--space-2xs) var(--space-xs);border:1.5px solid var(--line);border-radius:var(--radius-sm);font-size:var(--text-sm);font-family:var(--font);color:var(--ink);background:var(--card);min-height:40px">
      </div>

      <div style="display:flex;gap:var(--space-xs);align-items:center;margin-bottom:var(--space-md)">
        <span style="color:var(--ink-soft);font-size:var(--text-sm)">or time window:</span>
        <input type="time" id="time-start" onchange="calculateDuration()"
          style="width:110px;padding:var(--space-2xs) var(--space-xs);border:1.5px solid var(--line);border-radius:var(--radius-sm);font-size:var(--text-sm);font-family:var(--font);color:var(--ink);background:var(--card);min-height:40px">
        <span style="color:var(--ink-soft);font-size:var(--text-sm)">to</span>
        <input type="time" id="time-end" onchange="calculateDuration()"
          style="width:110px;padding:var(--space-2xs) var(--space-xs);border:1.5px solid var(--line);border-radius:var(--radius-sm);font-size:var(--text-sm);font-family:var(--font);color:var(--ink);background:var(--card);min-height:40px">
        <span id="calculated-duration" style="color:var(--nasa-blue);font-weight:700;font-family:var(--font-mono);font-size:var(--text-sm);min-width:70px"></span>
      </div>

      <!-- Interests -->
      <h2 class="wizard-section-header" style="margin-top:var(--space-md)">Interests <span style="font-weight:400;font-size:var(--text-sm);color:var(--ink-soft)">(optional)</span></h2>

      <div style="display:flex;gap:var(--space-2xs);flex-wrap:wrap;margin-bottom:var(--space-md)">
        ${interestTags.map(tag => `
          <button class="interest-chip" onclick="toggleInterest('${tag}')" data-interest="${tag}">
            ${tag}
          </button>
        `).join('')}
      </div>

      <!-- Starting Location -->
      <h2 class="wizard-section-header" style="margin-top:var(--space-md)">Starting Location <span style="font-weight:400;font-size:var(--text-sm);color:var(--ink-soft)">(optional)</span></h2>

      <select id="start-location" style="width:100%;padding:var(--space-xs);border:1.5px solid var(--line);border-radius:var(--radius-sm);font-size:var(--text-sm);font-family:var(--font);color:var(--ink);background:var(--card);min-height:40px;margin-bottom:var(--space-md)">
        <option value="">Any location</option>
        <option value="4619-north">Building 4619 (North door - ET30 labs)</option>
        <option value="4619-west">Building 4619 (West door - V20/ET20 labs)</option>
        <option value="eta">East Test Area</option>
        <option value="wta">West Test Area</option>
      </select>

      <!-- Generate Button -->
      <div style="text-align:center">
        <button class="btn red" onclick="generateRecommendations()" style="min-height:44px;font-size:var(--text-sm);font-weight:700">
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

  // Clear other inputs
  document.getElementById('time-budget-custom').value = '';
  document.getElementById('time-start').value = '';
  document.getElementById('time-end').value = '';
  document.getElementById('calculated-duration').textContent = '';
}

function handleCustomTime() {
  const customInput = document.getElementById('time-budget-custom');
  const value = parseInt(customInput.value);

  if (value && value > 0) {
    window.selectedTime = value;

    // Deselect chips
    document.querySelectorAll('.time-chip').forEach(chip => chip.classList.remove('active'));

    // Clear time window
    document.getElementById('time-start').value = '';
    document.getElementById('time-end').value = '';
    document.getElementById('calculated-duration').textContent = '';
  }
}

function calculateDuration() {
  const startInput = document.getElementById('time-start');
  const endInput = document.getElementById('time-end');
  const durationDisplay = document.getElementById('calculated-duration');

  if (!startInput.value || !endInput.value) {
    durationDisplay.textContent = '';
    return;
  }

  // Parse times
  const [startHour, startMin] = startInput.value.split(':').map(Number);
  const [endHour, endMin] = endInput.value.split(':').map(Number);

  let startMinutes = startHour * 60 + startMin;
  let endMinutes = endHour * 60 + endMin;

  // Handle crossing midnight
  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60;
  }

  const duration = endMinutes - startMinutes;

  if (duration > 0) {
    window.selectedTime = duration;

    const hours = Math.floor(duration / 60);
    const mins = duration % 60;
    const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

    durationDisplay.textContent = `= ${timeStr}`;

    // Deselect chips and clear custom input
    document.querySelectorAll('.time-chip').forEach(chip => chip.classList.remove('active'));
    document.getElementById('time-budget-custom').value = '';
  } else {
    durationDisplay.textContent = '';
  }
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

  // Check if user entered time window
  const startTime = document.getElementById('time-start').value;
  const endTime = document.getElementById('time-end').value;

  // Store time window if provided
  if (startTime && endTime) {
    window.tourStartTime = startTime;
  } else {
    window.tourStartTime = null;
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

function showResultsStep(container, modeToggleHTML) {
  const timeLimit = window.selectedTime;
  const interests = window.selectedInterests || [];

  container.innerHTML = modeToggleHTML + `
    <div class="wizard-step">
      <button class="btn secondary" onclick="wizardStep='input'; showWizardStep()" style="margin-bottom:var(--space-md)">
        ← Back to Search
      </button>

      <h2 class="wizard-section-header">Recommended Tours</h2>
      <p style="color:var(--ink-soft);margin-bottom:var(--space-lg)">
        Based on <span class="tour-time-display" style="font-size:18px">${timeLimit} min</span>
        ${interests.length > 0 ? `<br><span style="font-size:var(--text-sm)">Interests: ${interests.join(', ')}</span>` : ''}
      </p>

      ${recommendedTours.map((tour, index) => {
        const reasons = explainRecommendation(tour, timeLimit, interests);
        const hours = Math.floor(tour.totalMinutes / 60);
        const mins = tour.totalMinutes % 60;
        const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;
        const isBest = index === 0;

        return `
          <div class="tour-recommendation ${isBest ? 'best-match' : ''}" style="margin-bottom:var(--space-lg);padding:var(--space-md);background:var(--card);border:2px solid ${isBest ? 'var(--nasa-blue)' : 'var(--line)'};border-radius:var(--radius);position:relative">
            ${isBest ? '<div style="position:absolute;top:-12px;left:20px;background:linear-gradient(135deg, var(--nasa-red) 0%, oklch(55% 0.18 33.0) 100%);color:var(--on-accent);padding:0.25rem 1rem;border-radius:20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;box-shadow: 0 2px 8px rgba(252,61,33,0.4), inset 0 1px 0 rgba(255,255,255,0.2)">BEST MATCH</div>' : ''}

            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-sm);flex-wrap:wrap;gap:var(--space-xs)">
              <div>
                <h3 style="margin:0 0 var(--space-3xs) 0;font-size:var(--text-h2);color:var(--ink)">Tour Option ${index + 1}</h3>
                <div style="font-size:var(--text-sm);color:var(--ink-soft)">
                  ${tour.tour.length} stops · <span class="tour-time-display" style="font-size:16px">${timeStr}</span> total
                </div>
              </div>
              <div style="display:flex;gap:var(--space-xs);flex-wrap:wrap">
                <button class="btn secondary" onclick="selectTourForEdit(${index})" style="min-height:44px">
                  ✏️ Customize
                </button>
                <button class="btn ${isBest ? 'red' : ''}" onclick="previewTourPDF(${index})" style="min-height:44px">
                  📄 View PDF
                </button>
              </div>
            </div>

            <!-- Why this tour -->
            <div class="tour-reasoning" style="margin-bottom:var(--space-md)">
              <strong style="font-size:var(--text-sm);color:var(--nasa-blue);text-transform:uppercase;letter-spacing:0.5px">Why this tour:</strong>
              <ul>
                ${reasons.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>

            <!-- Stop list -->
            <div style="font-size:var(--text-body)">
              ${tour.tour.map((stop, i) => {
                const travel = tour.breakdown[i];
                const stopTimes = window.tourStartTime ? calculateStopTimes(tour, window.tourStartTime) : null;

                return `
                  <div style="display:flex;align-items:center;gap:var(--space-sm);padding:var(--space-xs) 0;border-bottom:1px solid var(--line)">
                    <div style="font-weight:700;color:var(--nasa-blue);min-width:20px;font-family:var(--font-mono)">${i + 1}.</div>
                    <div style="flex:1">
                      <div style="font-weight:600;color:var(--ink)">${stop.shortTitle || stop.title}</div>
                      <div style="font-size:var(--text-sm);color:var(--ink-soft)">${stop.locationShort || stop.location}</div>
                      ${stopTimes ? `<div style="font-size:var(--text-sm);color:var(--amber);font-family:var(--font-mono);font-weight:700;margin-top:2px">${stopTimes[i].start} – ${stopTimes[i].end}</div>` : ''}
                    </div>
                    <div style="text-align:right;font-size:var(--text-sm);color:var(--ink-soft);font-family:var(--font-mono)">
                      ${stop.tourTime || '~15 min'}
                      ${travel.travelTime > 0 ? `<br><span style="color:var(--ink-soft);opacity:0.7">+ ${travel.travelTime} min ${travel.mode}</span>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}

      <div style="text-align:center;margin-top:var(--space-lg)">
        <button class="btn secondary" onclick="wizardStep='input'; showWizardStep()" style="min-height:44px">
          Try Different Criteria
        </button>
      </div>
    </div>
  `;
}

function selectTourForEdit(index) {
  const tour = recommendedTours[index];
  customTour = [...tour.tour]; // Copy the tour
  wizardMode = 'manual';
  wizardStep = 'manual';
  showWizardStep();
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

// Calculate clock times for each stop
function calculateStopTimes(tour, startTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  let currentMinutes = startHour * 60 + startMin;

  const stopTimes = [];

  tour.tour.forEach((stop, index) => {
    const travel = tour.breakdown[index];
    const stopStart = currentMinutes;

    // Add stop duration
    currentMinutes += travel.stopTime;
    const stopEnd = currentMinutes;

    // Add travel time to next stop
    currentMinutes += travel.travelTime;

    stopTimes.push({
      start: formatTime(stopStart),
      end: formatTime(stopEnd)
    });
  });

  return stopTimes;
}

// Format minutes since midnight to HH:MM AM/PM
function formatTime(totalMinutes) {
  const hours24 = Math.floor(totalMinutes / 60) % 24;
  const mins = totalMinutes % 60;
  const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
  const ampm = hours24 >= 12 ? 'PM' : 'AM';
  return `${hours12}:${mins.toString().padStart(2, '0')} ${ampm}`;
}

// Preview tour as PDF in new tab
async function previewTourPDF(tourIndex) {
  const tourData = recommendedTours[tourIndex];
  if (!tourData) {
    alert('Tour not found');
    return;
  }

  const stopTimes = window.tourStartTime ? calculateStopTimes(tourData, window.tourStartTime) : null;
  const userCriteria = window.userTourCriteria || null;

  const pdfData = await generateTourPDF(tourData.tour, tourIndex, stopTimes, userCriteria);

  // Open in new tab
  const pdfBlob = pdfData.doc.output('blob');
  const url = URL.createObjectURL(pdfBlob);
  window.open(url, '_blank');
}

