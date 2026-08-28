/*
  Request Information Modal
  Collects user email and selected PDFs, triggers GitHub Action
*/

(function() {
  'use strict';

  const GITHUB_OWNER = 'CTuckerSolutions';
  const GITHUB_REPO = 'TestLabTourApp';
  const GITHUB_TOKEN = ''; // Configure via environment or secure method

  // Show modal
  function showRequestInfo() {
    var modal = document.getElementById('request-info-modal');
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      renderOnePagers();
    }
  }

  // Close modal
  function closeRequestInfo() {
    var modal = document.getElementById('request-info-modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
      resetForm();
    }
  }

  // Render one-pagers grid
  function renderOnePagers() {
    var grid = document.getElementById('onepagers-grid');
    if (!grid || !window.onePagers) return;

    grid.innerHTML = window.onePagers.map(function(pdf) {
      return '<label class="onepager-card">' +
        '<input type="checkbox" name="onepager" value="' + pdf.id + '" data-filename="' + pdf.filename + '" data-title="' + pdf.title + '">' +
        '<div class="card-content">' +
          '<strong>' + pdf.title + '</strong>' +
          '<span class="category-badge">' + pdf.category + '</span>' +
          '<p>' + pdf.description + '</p>' +
        '</div>' +
      '</label>';
    }).join('');
  }

  // Reset form
  function resetForm() {
    var form = document.getElementById('request-info-form');
    if (form) {
      form.reset();
    }
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    var nameInput = document.getElementById('requester-name');
    var emailInput = document.getElementById('requester-email');
    var orgInput = document.getElementById('requester-org');
    var commentsInput = document.getElementById('requester-comments');
    var submitBtn = document.getElementById('submit-request-btn');

    // Get selected PDFs
    var selectedCheckboxes = document.querySelectorAll('input[name="onepager"]:checked');
    var selectedPdfs = Array.from(selectedCheckboxes).map(function(cb) {
      return {
        id: cb.value,
        filename: cb.dataset.filename,
        title: cb.dataset.title
      };
    });

    if (selectedPdfs.length === 0) {
      alert('Please select at least one information packet.');
      return;
    }

    if (!nameInput.value.trim()) {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }

    if (!emailInput.value || !emailInput.validity.valid) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    if (!orgInput.value.trim()) {
      alert('Please enter your organization and role.');
      orgInput.focus();
      return;
    }

    // Check if token is configured
    if (!GITHUB_TOKEN || GITHUB_TOKEN === '') {
      alert('GitHub token not configured. Please contact the administrator.');
      return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Trigger GitHub Action via repository_dispatch
    var payload = {
      event_type: 'information-request',
      client_payload: {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        organization: orgInput.value.trim(),
        pdfs: selectedPdfs,
        comments: commentsInput.value.trim() || 'No additional comments',
        timestamp: new Date().toISOString()
      }
    };

    fetch(
      'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/dispatches',
      {
        method: 'POST',
        headers: {
          'Authorization': 'token ' + GITHUB_TOKEN,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(payload)
      }
    )
    .then(function(response) {
      if (!response.ok) {
        throw new Error('GitHub API error: ' + response.status);
      }
      // repository_dispatch returns 204 No Content on success
      return { success: true };
    })
    .then(function() {
      // Success!
      alert('Request submitted successfully! You should receive the materials within 1-2 business days.');
      closeRequestInfo();
    })
    .catch(function(error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request. Please try emailing us directly or try again later.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Request';
    });
  }

  // Initialize
  function init() {
    // Attach to window
    window.showRequestInfo = showRequestInfo;
    window.closeRequestInfo = closeRequestInfo;

    // Form submission
    var form = document.getElementById('request-info-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    // Click outside to close
    document.addEventListener('click', function(e) {
      var modal = document.getElementById('request-info-modal');
      if (modal && e.target === modal) {
        closeRequestInfo();
      }
    });

    // Escape key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var modal = document.getElementById('request-info-modal');
        if (modal && modal.classList.contains('show')) {
          closeRequestInfo();
        }
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
