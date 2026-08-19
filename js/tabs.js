/*
  Tab switching for stop pages.
  Handles click events on tab buttons and switches between tab panels.
*/

// Global function for programmatic tab switching (called from nav buttons)
// If stopSection is provided, use it; otherwise find the currently active stop
function switchToTab(targetTab, stopSection) {
  if (!stopSection) {
    stopSection = document.querySelector('[data-stop-section]:not([hidden])');
  }
  if (!stopSection) return;

  // Update tab buttons
  stopSection.querySelectorAll('.tab-btn').forEach(function(btn) {
    var isActive = btn.dataset.tab === targetTab;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  // Update tab panels
  stopSection.querySelectorAll('.tab-panel').forEach(function(panel) {
    var isActive = panel.dataset.tab === targetTab;
    if (isActive) {
      panel.hidden = false;
      panel.classList.add('active');
    } else {
      panel.hidden = true;
      panel.classList.remove('active');
    }
  });

  // Scroll to top of tab content
  var stopTabs = stopSection.querySelector('.stop-tabs');
  if (stopTabs) {
    var scrollPromise = stopTabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // scrollIntoView can return a promise in some browsers; catch any AbortError from interrupted scroll
    if (scrollPromise && scrollPromise.catch) {
      scrollPromise.catch(function() { /* ignore */ });
    }
  }
}

(function() {
  document.addEventListener('click', function(e) {
    // Handle both tab buttons and tab navigation buttons (Previous/Next)
    var tabBtn = e.target.closest('.tab-btn');
    var navBtn = e.target.closest('.tab-nav-btn');
    var btn = tabBtn || navBtn;

    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    var stopSection = btn.closest('[data-stop-section]');
    if (!stopSection) return;

    var targetTab = btn.dataset.tab || btn.dataset.targetTab;
    if (!targetTab) return;

    switchToTab(targetTab, stopSection);
  });
})();
