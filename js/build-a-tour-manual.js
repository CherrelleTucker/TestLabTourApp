/*
  Manual Tour Builder
  Browse and select stops manually
*/

function showManualStep(container, modeToggleHTML) {
  const activeStops = window.STOPS.filter(s => !s.legacySite && s.available !== false);

  // Calculate current tour time
  const { totalMinutes, breakdown } = customTour.length > 0 ? calculateTourTime(customTour) : { totalMinutes: 0, breakdown: [] };
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

  container.innerHTML = modeToggleHTML + `
    <div class="wizard-step">
      <!-- Current Tour Summary -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg);padding:var(--space-md);background:var(--panel-2);border-radius:var(--radius);border:2px solid var(--line)">
        <div>
          <h2 style="margin:0;font-size:var(--text-h2);color:var(--ink)">${customTour.length} Stops Selected</h2>
          <div style="font-size:var(--text-sm);color:var(--ink-soft);margin-top:var(--space-2xs)">
            Total time: <span class="tour-time-display" style="font-size:16px">${timeStr}</span>
          </div>
        </div>
        <div style="display:flex;gap:var(--space-xs)">
          ${customTour.length > 0 ? `
            <button class="btn secondary" onclick="clearCustomTour()" style="min-height:44px">
              Clear All
            </button>
            <button class="btn red" onclick="previewCustomTourPDF()" style="min-height:44px">
              📄 View PDF
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Selected Stops List -->
      ${customTour.length > 0 ? `
        <h2 class="wizard-section-header">Your Tour</h2>
        <div id="manual-tour-list" style="margin-bottom:var(--space-lg)">
          ${customTour.map((stop, index) => {
            const travel = breakdown[index];
            return `
              <div class="manual-tour-item" style="display:flex;align-items:start;gap:var(--space-sm);padding:var(--space-sm);background:var(--card);border:2px solid var(--line);border-radius:var(--radius-sm);margin-bottom:var(--space-xs)">
                <div style="font-weight:700;color:var(--nasa-red);min-width:24px;font-family:var(--font-mono);font-size:18px">${index + 1}</div>
                <div style="flex:1">
                  <div style="font-weight:600;color:var(--ink);font-size:var(--text-body)">${stop.shortTitle || stop.title}</div>
                  <div style="font-size:var(--text-sm);color:var(--ink-soft)">${stop.locationShort || stop.location}</div>
                  <div style="font-size:var(--text-sm);color:var(--nasa-blue);margin-top:var(--space-2xs)">
                    ${stop.tourTime || '~15 min'}
                    ${travel.travelTime > 0 ? ` + ~${travel.travelTime} min ${travel.mode}` : ''}
                  </div>
                </div>
                <div style="display:flex;gap:var(--space-2xs)">
                  ${index > 0 ? `<button class="btn secondary" onclick="moveStopUp(${index})" style="min-height:36px;padding:0 var(--space-sm)">↑</button>` : ''}
                  ${index < customTour.length - 1 ? `<button class="btn secondary" onclick="moveStopDown(${index})" style="min-height:36px;padding:0 var(--space-sm)">↓</button>` : ''}
                  <button class="btn secondary" onclick="removeStop(${index})" style="min-height:36px;padding:0 var(--space-sm);color:var(--nasa-red)">✕</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div style="text-align:center;padding:var(--space-xl);color:var(--ink-soft)">
          <p style="font-size:var(--text-lg);margin-bottom:var(--space-sm)">No stops selected yet</p>
          <p style="font-size:var(--text-sm)">Browse stops below and click to add them to your tour</p>
        </div>
      `}

      <!-- Browse Available Stops -->
      <h2 class="wizard-section-header">Available Stops</h2>
      <input type="search" id="manual-stop-search" placeholder="Search stops..."
        style="width:100%;padding:var(--space-sm);border:1.5px solid var(--line);border-radius:var(--radius-sm);font-size:var(--text-body);font-family:var(--font);color:var(--ink);background:var(--card);margin-bottom:var(--space-md)"
        oninput="filterManualStops(this.value)">

      <div id="manual-stops-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:var(--space-sm);max-height:400px;overflow-y:auto">
        ${activeStops.map(stop => {
          const isSelected = customTour.some(s => s.id === stop.id);
          return `
            <div class="manual-stop-card" data-stop-id="${stop.id}" data-title="${(stop.shortTitle || stop.title).toLowerCase()}" data-location="${(stop.location || '').toLowerCase()}"
              style="padding:var(--space-sm);border:2px solid ${isSelected ? 'var(--nasa-blue)' : 'var(--line)'};border-radius:var(--radius-sm);cursor:pointer;background:${isSelected ? 'var(--chip-blue-bg)' : 'var(--card)'};transition:all 0.15s"
              onclick="toggleStop('${stop.id}')">
              <div style="font-weight:600;color:var(--ink);font-size:var(--text-sm);margin-bottom:var(--space-2xs)">${stop.shortTitle || stop.title}</div>
              <div style="font-size:var(--text-xs);color:var(--ink-soft)">${stop.locationShort || stop.location}</div>
              <div style="font-size:var(--text-xs);color:var(--nasa-blue);margin-top:var(--space-2xs)">${stop.tourTime || '~15 min'}</div>
              ${isSelected ? '<div style="position:absolute;top:8px;right:8px;color:var(--nasa-blue);font-weight:700">✓</div>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
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

  // Re-render
  showWizardStep();
}

function removeStop(index) {
  customTour.splice(index, 1);
  showWizardStep();
}

function moveStopUp(index) {
  if (index === 0) return;
  [customTour[index - 1], customTour[index]] = [customTour[index], customTour[index - 1]];
  showWizardStep();
}

function moveStopDown(index) {
  if (index >= customTour.length - 1) return;
  [customTour[index], customTour[index + 1]] = [customTour[index + 1], customTour[index]];
  showWizardStep();
}

function clearCustomTour() {
  if (!confirm('Clear all stops from your tour?')) return;
  customTour = [];
  showWizardStep();
}

function filterManualStops(query) {
  const cards = document.querySelectorAll('.manual-stop-card');
  const lowerQuery = query.toLowerCase();

  cards.forEach(card => {
    const title = card.dataset.title || '';
    const location = card.dataset.location || '';
    const matches = title.includes(lowerQuery) || location.includes(lowerQuery);
    card.style.display = matches ? 'block' : 'none';
  });
}

async function previewCustomTourPDF() {
  if (customTour.length === 0) {
    alert('Add stops to your tour first!');
    return;
  }

  // Generate PDF from custom tour
  const stopTimes = window.tourStartTime ? calculateStopTimes({ tour: customTour, breakdown: calculateTourTime(customTour).breakdown }, window.tourStartTime) : null;
  const userCriteria = window.userTourCriteria || null;

  const pdfData = await generateTourPDF(customTour, null, stopTimes, userCriteria);

  // Open in new tab
  const pdfBlob = pdfData.doc.output('blob');
  const url = URL.createObjectURL(pdfBlob);
  window.open(url, '_blank');
}
