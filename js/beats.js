/*
  Beat sequence navigation for the stop-detail view: Arrive -> Orient ->
  Narrate -> Branch -> Advance. render.js builds the 5 .beat panels + the
  .beat-progress indicator per stop; this file owns which one is active and
  how a visitor moves between them. Beat position is transient UI state
  (not part of the URL hash) -- landing on a stop always starts at Arrive.

  Also drives the Narrate beat's cue-point highlighting and scrub bar off
  the narration:play/timeupdate/ended events dispatched by narration.js.
*/

var BEAT_ORDER = ['arrive', 'orient', 'narrate', 'branch', 'advance'];
var CUE_SEG_ORDER = ['hook', 'explainer', 'wowStat', 'media', 'why'];
var _scrubbing = {}; // stopId -> true while the user is dragging that stop's scrub bar

function _setActiveBeat(section, beatName) {
  function swap() {
    section.setAttribute('data-active-beat', beatName);
    section.querySelectorAll('.beat').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-beat') === beatName);
    });
    section.querySelectorAll('.beat-step').forEach(function (s) {
      var on = s.getAttribute('data-beat-jump') === beatName;
      s.classList.toggle('active', on);
      s.setAttribute('aria-selected', on);
    });
    // Scroll to top of the page smoothly when changing beats
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(swap);
  } else {
    swap();
  }
}

function _stopSectionFor(el) {
  return el.closest('[data-stop-section]');
}

function _formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) seconds = 0;
  var m = Math.floor(seconds / 60);
  var s = Math.floor(seconds % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function _currentSegment(cues, currentTime) {
  var current = CUE_SEG_ORDER[0];
  for (var i = 0; i < CUE_SEG_ORDER.length; i++) {
    var seg = CUE_SEG_ORDER[i];
    if (typeof cues[seg] === 'number' && currentTime >= cues[seg]) current = seg;
  }
  return current;
}

// Reveal cards + transcript stay fully visible at all times (an offline
// kiosk should never gate real content behind audio playback) -- cue
// points only drive a highlight, never a show/hide.
function _applyCueHighlight(player, stopId) {
  var cues;
  try { cues = JSON.parse(player.getAttribute('data-cue-points') || '{}'); }
  catch (e) { cues = {}; }
  var section = _stopSectionFor(player);
  if (!section) return;
  var current = _currentSegment(cues, player._lastCurrentTime || 0);
  var transcriptSeg = (current === 'hook') ? 'hook' : 'explainer';
  section.querySelectorAll('.t-seg').forEach(function (t) {
    t.classList.toggle('seg-active', t.getAttribute('data-seg') === transcriptSeg);
  });
  ['wowStat', 'media', 'why'].forEach(function (seg) {
    var card = section.querySelector('.reveal-card[data-seg="' + seg + '"]');
    if (!card) return;
    var reached = typeof cues[seg] === 'number' && (player._lastCurrentTime || 0) >= cues[seg];
    card.classList.toggle('seen', reached);
    card.classList.toggle('active', current === seg);
  });
}

function _onNarrationPlay(e) {
  var stopId = e.detail.stopId;
  var player = document.querySelector('.audio-player[data-stop-id="' + stopId + '"]');
  if (!player) return;
  var bar = player.querySelector('.scrub-bar');
  if (bar) bar.disabled = false;
}

function _onNarrationTimeUpdate(e) {
  var stopId = e.detail.stopId;
  var player = document.querySelector('.audio-player[data-stop-id="' + stopId + '"]');
  if (!player) return;
  var currentTime = e.detail.currentTime || 0;
  var duration = e.detail.duration;
  player._lastCurrentTime = currentTime;
  if (isFinite(duration) && duration > 0) player._lastDuration = duration;
  _applyCueHighlight(player, stopId);
  if (_scrubbing[stopId]) return; // don't fight the user's thumb mid-drag
  var bar = player.querySelector('.scrub-bar');
  var elapsedEl = player.querySelector('.time-readout .elapsed');
  var remainingEl = player.querySelector('.time-readout .remaining');
  if (bar && isFinite(duration) && duration > 0) {
    bar.disabled = false;
    bar.value = Math.round((currentTime / duration) * 1000);
  }
  if (elapsedEl) elapsedEl.textContent = _formatTime(currentTime);
  if (remainingEl && isFinite(duration)) remainingEl.textContent = _formatTime(duration - currentTime);
}

function _onNarrationEnded(e) {
  var stopId = e.detail.stopId;
  var player = document.querySelector('.audio-player[data-stop-id="' + stopId + '"]');
  if (player) {
    var bar = player.querySelector('.scrub-bar');
    if (bar) bar.value = 1000;
    var elapsedEl = player.querySelector('.time-readout .elapsed');
    var remainingEl = player.querySelector('.time-readout .remaining');
    if (elapsedEl && remainingEl) { elapsedEl.textContent = remainingEl.textContent; remainingEl.textContent = '0:00'; }
  }
  // Narrate's job is done -- move on to the self-paced Branch beat.
  var section = _stopSectionFor(player || document.body);
  if (section) _setActiveBeat(section, 'branch');
}

document.addEventListener('narration:play', _onNarrationPlay);
document.addEventListener('narration:timeupdate', _onNarrationTimeUpdate);
document.addEventListener('narration:ended', _onNarrationEnded);

// Reset to Arrive whenever a stop view is (re-)landed on -- dispatched by
// app.js's show() only for elements carrying data-stop-section.
document.addEventListener('view:activated', function (e) {
  var section = document.getElementById(e.detail.id);
  if (section) _setActiveBeat(section, 'arrive');
});

document.addEventListener('click', function (e) {
  var jump = e.target.closest('.beat-step[data-beat-jump]');
  if (jump) {
    var jumpSection = _stopSectionFor(jump);
    if (jumpSection) _setActiveBeat(jumpSection, jump.getAttribute('data-beat-jump'));
    return;
  }
  var next = e.target.closest('[data-next]');
  if (next) {
    var nextSection = _stopSectionFor(next);
    if (nextSection) _setActiveBeat(nextSection, next.getAttribute('data-next'));
    return;
  }
  var prev = e.target.closest('[data-prev]');
  if (prev) {
    var prevSection = _stopSectionFor(prev);
    if (prevSection) _setActiveBeat(prevSection, prev.getAttribute('data-prev'));
    return;
  }
  // Tap-toggle hotspot markers -- there's no hover on the iPad this app
  // targets, so the lightbox's hover-reveal pattern becomes a tap toggle.
  var marker = e.target.closest('.callout-marker');
  if (marker) {
    var wasShown = marker.classList.contains('shown');
    marker.parentElement.querySelectorAll('.callout-marker.shown').forEach(function (m) {
      if (m !== marker) m.classList.remove('shown');
    });
    marker.classList.toggle('shown', !wasShown);
  }
});

document.addEventListener('pointerdown', function (e) {
  if (e.target.classList && e.target.classList.contains('scrub-bar')) {
    var player = e.target.closest('.audio-player');
    if (player) _scrubbing[player.getAttribute('data-stop-id')] = true;
  }
});

document.addEventListener('input', function (e) {
  if (!e.target.classList || !e.target.classList.contains('scrub-bar')) return;
  var player = e.target.closest('.audio-player');
  if (!player) return;
  var duration = player._lastDuration;
  if (!isFinite(duration) || duration <= 0) return;
  var draggedTime = (e.target.value / 1000) * duration;
  var elapsedEl = player.querySelector('.time-readout .elapsed');
  var remainingEl = player.querySelector('.time-readout .remaining');
  if (elapsedEl) elapsedEl.textContent = _formatTime(draggedTime);
  if (remainingEl) remainingEl.textContent = _formatTime(duration - draggedTime);
});

document.addEventListener('change', function (e) {
  if (!e.target.classList || !e.target.classList.contains('scrub-bar')) return;
  var player = e.target.closest('.audio-player');
  if (!player) return;
  var stopId = player.getAttribute('data-stop-id');
  var lastKnownDuration = player._lastDuration;
  _scrubbing[stopId] = false;
  if (typeof window.seekNarration === 'function' && isFinite(lastKnownDuration) && lastKnownDuration > 0) {
    window.seekNarration((e.target.value / 1000) * lastKnownDuration);
  }
});
