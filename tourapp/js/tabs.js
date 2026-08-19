/*
  Tab switching for stop pages.
  Handles click events on tab buttons and switches between tab panels.
*/
(function() {
  document.addEventListener('click', function(e) {
    var tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    var stopSection = tabBtn.closest('[data-stop-section]');
    if (!stopSection) return;

    var targetTab = tabBtn.dataset.tab;

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
