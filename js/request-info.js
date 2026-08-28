/*
  Request Information Modal
  Collects user email and selected PDFs, creates GitHub Issue
*/

(function() {
  'use strict';

  const GITHUB_OWNER = 'CTuckerSolutions';
  const GITHUB_REPO = 'TestLabTourApp';
  const GITHUB_TOKEN = 'REPLACE_WITH_YOUR_TOKEN'; // Personal Access Token with 'public_repo' scope

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

    var emailInput = document.getElementById('requester-email');
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

    if (!emailInput.value || !emailInput.validity.valid) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    // Check if token is configured
    if (GITHUB_TOKEN === 'REPLACE_WITH_YOUR_TOKEN') {
      alert('GitHub token not configured. Please contact the administrator.');
      return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Create GitHub Issue
    var issueBody = formatIssueBody({
      email: emailInput.value,
      pdfs: selectedPdfs,
      comments: commentsInput.value || 'No additional comments'
    });

    fetch(
      'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/issues',
      {
        method: 'POST',
        headers: {
          'Authorization': 'token ' + GITHUB_TOKEN,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          title: 'Information Request: ' + emailInput.value,
          body: issueBody,
          labels: ['information-request']
        })
      }
    )
    .then(function(response) {
      if (!response.ok) {
        throw new Error('GitHub API error: ' + response.status);
      }
      return response.json();
    })
    .then(function(issue) {
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

  // Format issue body
  function formatIssueBody(data) {
    var body = '## Information Request\n\n';
    body += '**Requester Email:** ' + data.email + '\n\n';
    body += '**Requested Materials:**\n';
    data.pdfs.forEach(function(pdf) {
      body += '- [ ] ' + pdf.title + ' (`' + pdf.filename + '`)\n';
    });
    body += '\n**Additional Comments:**\n' + data.comments + '\n\n';
    body += '---\n';
    body += '**Action Required:** Send the checked materials to ' + data.email + ' and close this issue.\n';
    body += '**Files Location:** `OnePagers/` directory in this repository\n';
    return body;
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
