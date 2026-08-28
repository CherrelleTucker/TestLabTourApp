/*
  Tour Guide Quick Start Modal
  Provides first-time guidance for Test Lab representatives leading tours
*/

(function() {
  'use strict';

  // Show the quick start modal
  function showQuickStart() {
    var modal = document.getElementById('quickstart-modal');
    if (modal) {
      modal.classList.add('show');
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  }

  // Close the quick start modal
  function closeQuickStart() {
    var modal = document.getElementById('quickstart-modal');
    if (modal) {
      modal.classList.remove('show');
      // Re-enable body scroll
      document.body.style.overflow = '';
    }
  }

  // Toggle "don't show again" preference
  function toggleDontShowAgain(checked) {
    try {
      localStorage.setItem('hideQuickStart', checked ? 'true' : 'false');
    } catch (e) {
      // localStorage unavailable - safe to ignore
    }
  }

  // Check if should show on first load
  function checkFirstLoad() {
    try {
      var hideQuickStart = localStorage.getItem('hideQuickStart') === 'true';
      var hasVisited = localStorage.getItem('hasVisitedTourApp') === 'true';

      // Show modal if:
      // 1. User hasn't opted out, AND
      // 2. It's their first visit
      if (!hideQuickStart && !hasVisited) {
        // Small delay so page renders first
        setTimeout(showQuickStart, 800);
        // Mark as visited
        localStorage.setItem('hasVisitedTourApp', 'true');
      }
    } catch (e) {
      // localStorage unavailable - don't show modal
    }
  }

  // Close modal when clicking outside content
  function handleOutsideClick(e) {
    var modal = document.getElementById('quickstart-modal');
    if (modal && e.target === modal) {
      closeQuickStart();
    }
  }

  // Close modal on escape key
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeQuickStart();
    }
  }

  // Initialize on DOM ready
  function init() {
    // Attach to window so onclick handlers in HTML can access it
    window.showQuickStart = showQuickStart;
    window.closeQuickStart = closeQuickStart;
    window.toggleDontShowAgain = toggleDontShowAgain;

    // Check if should show on first load
    checkFirstLoad();

    // Event listeners
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    // Add click handler to tour guide button if it exists
    var tourGuideBtn = document.getElementById('tour-guide-help-btn');
    if (tourGuideBtn) {
      tourGuideBtn.addEventListener('click', showQuickStart);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
