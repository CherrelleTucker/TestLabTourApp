/*
  Search functionality for the stops directory.
  Searches by stop title, location/building, and chips/tags.
*/
(function() {
  var searchInput = document.getElementById('stop-search');
  if (!searchInput) return;

  function normalizeText(text) {
    return (text || '').toLowerCase().trim();
  }

  function searchStops(query) {
    var normalizedQuery = normalizeText(query);
    if (!normalizedQuery) {
      // Empty search - show all stops
      document.querySelectorAll('#directory-list .stopcard').forEach(function(card) {
        card.style.display = '';
      });
      return;
    }

    document.querySelectorAll('#directory-list .stopcard').forEach(function(card) {
      var title = normalizeText(card.querySelector('h3')?.textContent);
      var location = normalizeText(card.querySelector('.meta')?.textContent);
      var chips = normalizeText(card.getAttribute('data-chips'));

      // Search across title, location, and chips
      var matches =
        title.indexOf(normalizedQuery) !== -1 ||
        location.indexOf(normalizedQuery) !== -1 ||
        chips.indexOf(normalizedQuery) !== -1;

      card.style.display = matches ? '' : 'none';
    });
  }

  // Debounce search input
  var searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function() {
      searchStops(e.target.value);
    }, 200);
  });

  // Clear filters when searching
  searchInput.addEventListener('input', function(e) {
    if (e.target.value) {
      // Clear active tour/capability chips when user starts searching
      document.querySelectorAll('#tour-chips .chip, #directory-chips .chip').forEach(function(chip) {
        chip.classList.remove('active');
      });
    }
  });
})();
