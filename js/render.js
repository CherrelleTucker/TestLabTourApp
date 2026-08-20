/*
  Builds the "Tour stops" directory and every stop-detail <section> from
  window.STOPS (data/stops.js). This is the only file that needs to change
  shape if the content schema changes — adding a new stop never touches this
  file, index.html, or any CSS.
*/
(function () {
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function chipHtml(chips) {
    return (chips || []).map(function (c) {
      return '<span class="chip">' + c + '</span>';
    }).join('');
  }

  // Status filters: Active/Legacy toggle plus Campus Map link
  function buildDirectoryChips(stops) {
    var all = ['Active'];
    // Legacy isn't a per-stop chip tag -- it's derived from legacySite, so
    // it's appended here rather than living in any stop's chips[] array.
    if (stops.some(function (s) { return s.legacySite; })) all.push('Legacy');
    // Rendered as <button>, not the decorative <span class="chip"> used for
    // per-stop tags — that tag-name difference is what lets button.chip get
    // interactive (hover/active) styling in components.css without touching
    // the read-only tags on each card.
    var html = all.map(function (c, i) {
      return '<button type="button" class="chip' + (i === 0 ? ' active' : ' grey') + '" data-chip="' + c + '">' + c + '</button>';
    }).join('\n');
    // Add Campus Map chip at the end
    html += '\n<button type="button" class="chip grey" onclick="show(\'campus-map\')">🗺 Campus Map</button>';
    return html;
  }

  // Restores #directory-list to window.STOPS array order -- undoes the
  // reordering filterByTour() does, so a capability-chip click always
  // starts from the master order before it hides anything.
  function _restoreMasterOrder() {
    var list = document.getElementById('directory-list');
    if (!list) return;
    window.STOPS.forEach(function (stop) {
      var card = list.querySelector('.stopcard[data-stop-id="' + stop.id + '"]');
      if (card) list.appendChild(card);
    });
  }

  // Filters the directory list by the Active/Legacy toggle -- "Active"
  // shows every stop except legacy ones, "Legacy" shows only
  // legacy ones. Matches by each card's data-chips attribute rather than
  // re-reading window.STOPS, so this stays a pure DOM operation. This
  // toggle and tour chips are mutually exclusive -- picking one clears the
  // other and restores master order.
  function filterDirectory(chip) {
    var host = document.getElementById('directory-chips');
    host.querySelectorAll('.chip').forEach(function (b) {
      b.classList.toggle('active', b.dataset.chip === chip);
    });
    var tourHost = document.getElementById('tour-chips');
    if (tourHost) tourHost.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });
    _restoreMasterOrder();
    document.querySelectorAll('#directory-list .stopcard').forEach(function (card) {
      var chips = (card.getAttribute('data-chips') || '').split('|');
      var show = chip === 'Active' ? chips.indexOf('Legacy') === -1 : chips.indexOf(chip) !== -1;
      card.style.display = show ? '' : 'none';
    });
  }

  function buildTourChips(tours) {
    if (!tours || !tours.length) return '';
    return tours.map(function (t) {
      return '<button type="button" class="chip grey" data-tour="' + t.id + '">' + t.label + '</button>';
    }).join('\n');
  }

  // Reorders #directory-list to match tour.stopIds (numbering via the
  // existing CSS counter then follows the tour's own order) and hides
  // every stop not on the tour. Mutually exclusive with capability chips.
  function filterByTour(tourId) {
    var tour = (window.TOURS || []).filter(function (t) { return t.id === tourId; })[0];
    if (!tour) return;
    var host = document.getElementById('directory-chips');
    host.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });
    var tourHost = document.getElementById('tour-chips');
    tourHost.querySelectorAll('.chip').forEach(function (b) {
      b.classList.toggle('active', b.dataset.tour === tourId);
    });
    var list = document.getElementById('directory-list');
    var members = {};
    tour.stopIds.forEach(function (id) {
      members[id] = true;
      var card = list.querySelector('.stopcard[data-stop-id="' + id + '"]');
      if (card) list.appendChild(card);
    });
    list.querySelectorAll('.stopcard').forEach(function (card) {
      card.style.display = members[card.getAttribute('data-stop-id')] ? '' : 'none';
    });
  }

  function directoryCardHtml(stop) {
    // Legacy is appended here (not stored in stop.chips) so the visible
    // per-card tag pills below don't grow a duplicate "Legacy" tag --
    // only the hidden filter attribute needs it.
    var filterChips = (stop.chips || []).concat(stop.legacySite ? ['Legacy'] : []);
    return (
      '<button class="stopcard" data-stop-id="' + stop.id + '" data-chips="' + filterChips.join('|') + '" onclick="show(\'' + stop.id + '\')">' +
        '<div class="thumb"><img src="' + stop.media + '/' + stop.thumb + '" alt="" style="view-transition-name:vt-hero-' + stop.id + '"></div>' +
        '<div class="body">' +
          (stop.legacySite
            ? '<span class="badge-legacy">\u25C6 Legacy site</span>'
            : '<span class="badge-cleared">\u25CF Available</span>') +
          '<h3 style="margin-top:6px">' + stop.title + '</h3>' +
          '<div class="meta">' + stop.location + ' · ' + stop.tourTime + '</div>' +
          '<div class="chips">' + chipHtml(stop.chips) + '</div>' +
        '</div>' +
      '</button>'
    );
  }

  function keyfactsHtml(facts) {
    return facts.map(function (f) {
      return (
        '<li><span class="num">' + f.num + '</span><span><b>' + f.label + '</b>' +
        '<div class="lbl">' + f.detail + '</div></span></li>'
      );
    }).join('');
  }

  function quizOptionsHtml(quiz) {
    return quiz.options.map(function (o) {
      var correctAttr = o.correct ? ' data-correct' : '';
      return '<button class="opt"' + correctAttr + ' onclick="answer(this,' + !!o.correct + ')">' + o.text + '</button>';
    }).join('\n');
  }

  function oneVideoHtml(stop, v) {
    return (
      '<div class="media">' +
        '<video controls preload="metadata" poster="' + stop.media + '/' + v.poster + '" title="' + v.title + '">' +
          '<source src="' + stop.media + '/' + v.src + '" type="video/mp4">' +
          "Your browser can't play this video." +
        '</video>' +
      '</div>' +
      '<div class="credit">' + v.credit + '</div>'
    );
  }

  function videoSectionHtml(stop) {
    var vids = [];
    if (Array.isArray(stop.videos)) vids = stop.videos;
    else if (stop.video) vids = [stop.video];
    if (!vids.length) return '';
    var title = vids[0].sectionTitle || 'Watch';
    return (
      '<h2>' + title + '</h2>' +
      vids.map(function (v) { return oneVideoHtml(stop, v); }).join('')
    );
  }

  function galleryHtml(stop) {
    var items = stop.gallery;
    if (!items || !items.length) return '';
    return (
      '<h2>' + (stop.galleryTitle || 'More from this stop') + '</h2>' +
      '<div class="gallery-grid">' +
      items.map(function (g) {
        return (
          '<figure class="gallery-item">' +
            '<button class="zoomable" type="button">' +
              '<img src="' + stop.media + '/' + g.src + '" alt="' + g.alt + '" loading="lazy">' +
              '<span class="zoom-hint" aria-hidden="true">⤢ Enlarge</span>' +
            '</button>' +
            '<figcaption>' + (g.caption ? '<span class="cap-text">' + g.caption + '</span>' : '') +
              '<span class="cap-credit">' + g.credit + '</span></figcaption>' +
          '</figure>'
        );
      }).join('') +
      '</div>'
    );
  }

  function infoRowHtml(stop) {
    var cells = [
      { k: 'Tour time', v: stop.tourTime }
    ];
    if (stop.groupSize) cells.push({ k: 'Group size', v: stop.groupSize });
    if (stop.locationShort && !stop.groupSize) cells.push({ k: 'Location', v: stop.locationShort });
    cells.push({ k: 'Accessible', v: stop.accessible ? '\u267F Yes' : 'No' });
    return (
      '<div class="info-row" style="margin-top:18px">' +
      cells.map(function (c) {
        return '<div class="cell"><div class="k">' + c.k + '</div><div class="v">' + c.v + '</div></div>';
      }).join('') +
      '</div>'
    );
  }

  // Beat sequence — Arrive -> Orient -> Narrate -> Branch -> Advance.
  // Each stop <section> gets a slim progress indicator plus 5 stacked
  // .beat panels; js/beats.js owns which one is .active and how you move
  // between them. This function only builds markup, never touches beat
  // state directly.

  function beatProgressHtml() {
    var steps = [
      ['arrive', 'Arrive'], ['orient', 'Orient'], ['narrate', 'Narrate'],
      ['branch', 'Branch'], ['advance', 'Advance']
    ];
    return (
      '<div class="beat-progress" role="tablist" aria-label="Stop sequence">' +
        steps.map(function (s, i) {
          return (
            '<button type="button" class="beat-step' + (i === 0 ? ' active' : '') + '" ' +
              'data-beat-jump="' + s[0] + '" role="tab" aria-selected="' + (i === 0) + '">' +
              '<span class="step-num">' + (i + 1) + '</span>' +
              '<span class="step-label">' + s[1] + '</span>' +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  // Every arrivePhoto is a tight NAIP crop with a fixed real-world footprint
  // (640m x 400m). This box is that footprint's size as a percentage of the
  // shared campus-map.jpg extent, so a locator strip can show "you are here"
  // on the full campus without a bespoke overview image per stop.
  var LOCATOR_BOX_W_PCT = 12.94;
  var LOCATOR_BOX_H_PCT = 8.19;

  function locatorHtml(stop) {
    if (!stop.campusPin) return '';
    var p = stop.campusPin;
    return (
      '<div class="media photo locator-frame">' +
        '<img class="shot" src="media/shared/img/campus-map.jpg" alt="" aria-hidden="true">' +
        '<span class="locator-box" style="left:' + p.xPct + '%;top:' + p.yPct + '%;width:' + LOCATOR_BOX_W_PCT + '%;height:' + LOCATOR_BOX_H_PCT + '%"></span>' +
      '</div>'
    );
  }

  function arriveBeatHtml(stop) {
    var media = stop.media;
    // arrivePhoto is new/optional per stop — falls back to the existing
    // hero shot wherever a confident map image couldn't be sourced.
    var photo = stop.arrivePhoto || stop.hero;
    var hazardsHtml = (stop.hazards && stop.hazards.length)
      ? '<div class="hazard-chips">' + stop.hazards.map(function (h) {
          return '<span class="chip hazard">⚠ ' + h + '</span>';
        }).join('') + '</div>'
      : '';
    return (
      '<div class="beat active" data-beat="arrive">' +
        '<div class="pad" style="padding-top:0">' +
          '<div class="chips" style="margin-bottom:8px">' + chipHtml(stop.chips) + '</div>' +
          '<h1>' + stop.title + '</h1>' +
          '<p class="muted">' + stop.location + ' · ' + stop.tourTime + '</p>' +
          locatorHtml(stop) +
          '<div class="media photo arrive-photo">' +
            '<img class="shot" src="' + media + '/' + photo.src + '" alt="' + photo.alt + '" style="view-transition-name:vt-hero-' + stop.id + '">' +
          '</div>' +
          '<div class="credit">' + photo.credit + '</div>' +
          hazardsHtml +
          '<button type="button" class="btn beat-next" data-next="orient">Begin →</button>' +
        '</div>' +
      '</div>'
    );
  }

  function orientBeatHtml(stop) {
    var media = stop.media;
    var photo = stop.orientPhoto || stop.hero; // orientPhoto: dedicated wide/facility shot for "getting oriented"; falls back to hero when a stop has none
    var markers = (stop.callouts || []).map(function (c) {
      var label = String(c.label).replace(/"/g, '&quot;');
      return (
        '<button type="button" class="callout-marker" style="left:' + c.xPct + '%;top:' + c.yPct + '%" aria-label="' + label + '">' +
          '<span class="dot" aria-hidden="true"></span>' +
          '<span class="callout-label" aria-hidden="true">' + c.label + '</span>' +
        '</button>'
      );
    }).join('');
    return (
      '<div class="beat" data-beat="orient">' +
        '<div class="pad" style="padding-top:0">' +
          '<h2>Get oriented</h2>' +
          '<p class="look">' + stop.lookFor + '</p>' +
          '<div class="media photo hero-photo orient-photo">' +
            '<img class="shot" src="' + media + '/' + photo.src + '" alt="' + photo.alt + '">' +
            markers +
          '</div>' +
          '<div class="credit">' + photo.credit + '</div>' +
          '<div class="factbox">' + stop.factbox + '</div>' +
          '<div class="stop-nav">' +
            '<button type="button" class="btn secondary beat-back" data-prev="arrive">← Arrive</button>' +
            '<button type="button" class="btn beat-next" data-next="narrate">I’m oriented →</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // hook is a stored prefix of narration.text; explainer is everything
  // after it — kept derived rather than duplicated into a second field.
  function explainerText(stop) {
    var full = stop.narration.text;
    var hook = stop.hook || '';
    return (hook && full.indexOf(hook) === 0) ? full.slice(hook.length).trim() : full;
  }

  function narrateBeatHtml(stop) {
    var media = stop.media;
    var wowFact = stop.keyfacts[stop.wowStat];
    // durationLabel is prose ("~38 sec · produced narration") for the audio
    // meta line; the scrub bar's readout wants a plain mm:ss instead.
    var secMatch = stop.narration.durationLabel.match(/(\d+)\s*sec/);
    var totalSeconds = secMatch ? parseInt(secMatch[1], 10) : null;
    var remainingText = totalSeconds ? ('0:' + (totalSeconds < 10 ? '0' : '') + totalSeconds) : '--:--';
    return (
      '<div class="beat" data-beat="narrate">' +
        '<div class="pad" style="padding-top:0">' +
          '<h1>' + stop.title + '</h1>' +

          '<div class="audio-player" data-stop-id="' + stop.id + '" data-cue-points=\'' + JSON.stringify(stop.cuePoints) + '\'>' +
            '<div class="audio">' +
              '<button class="audio-btn" onclick="toggleNarration(this)" aria-label="Play narration for this stop"' +
                (stop.narration.audio ? ' data-audio-src="' + media + '/' + stop.narration.audio + '"' : '') +
                ' data-stop-id="' + stop.id + '"' +
                ' data-narration="' + stop.narration.text.replace(/"/g, '&quot;') + '">▶ Listen</button>' +
              '<div class="audio-meta"><b>Listen to this stop</b><span>' + stop.narration.durationLabel + '</span></div>' +
            '</div>' +
            '<div class="scrub-row">' +
              '<input type="range" class="scrub-bar" min="0" max="1000" value="0" step="1" aria-label="Seek narration" disabled>' +
              '<div class="time-readout"><span class="elapsed">0:00</span><span class="sep">/</span><span class="remaining">' + remainingText + '</span></div>' +
            '</div>' +
          '</div>' +

          '<div class="transcript" aria-label="Full narration transcript">' +
            '<p>' +
              '<span class="t-seg seg-active" data-seg="hook">' + stop.hook + '</span> ' +
              '<span class="t-seg" data-seg="explainer">' + explainerText(stop) + '</span>' +
            '</p>' +
          '</div>' +

          '<div class="reveal-card" data-seg="wowStat">' +
            '<ul class="keyfacts">' + keyfactsHtml([wowFact]) + '</ul>' +
          '</div>' +

          '<div class="reveal-card" data-seg="media">' +
            '<div class="media photo" style="margin-top:8px">' +
              '<button class="zoomable" type="button">' +
                '<img class="shot" src="' + media + '/' + stop.detailImage.src + '" alt="' + stop.detailImage.alt + '">' +
                '<span class="zoom-hint" aria-hidden="true">⤢ Enlarge</span>' +
              '</button>' +
            '</div>' +
            '<div class="credit">' + stop.detailImage.credit + '</div>' +
          '</div>' +

          '<div class="reveal-card" data-seg="why">' +
            '<h2>Why it matters</h2>' +
            '<p>' + stop.whyItMatters + '</p>' +
          '</div>' +

          '<div class="stop-nav">' +
            '<button type="button" class="btn secondary beat-back" data-prev="orient">← Orient</button>' +
            '<button type="button" class="btn beat-next" data-next="branch">Skip to Branch →</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // specs = keyfacts minus the entry promoted to wowStat in Narrate — one
  // source of truth per fact, no duplicated content between beats.
  function specsFacts(stop) {
    return stop.keyfacts.filter(function (f, i) { return i !== stop.wowStat; });
  }

  function askYourHostHtml(stop) {
    var qs = stop.askYourHost || [];
    if (!qs.length) return '';
    return (
      '<div class="interact ask-host">' +
        '<h3>🗣️ Ask your host</h3>' +
        '<ul class="ask-list">' + qs.map(function (q) { return '<li>' + q + '</li>'; }).join('') + '</ul>' +
      '</div>'
    );
  }

  function branchBeatHtml(stop) {
    return (
      '<div class="beat" data-beat="branch">' +
        '<div class="pad" style="padding-top:0">' +
          '<h2>Go deeper (optional)</h2>' +
          '<details' + (stop.deepDive.open ? ' open' : '') + '>' +
            '<summary>' + stop.deepDive.summary + '</summary>' +
            '<div class="inner muted">' + stop.deepDive.html + '</div>' +
          '</details>' +

          '<h2>' + stop.keyfactsTitle + '</h2>' +
          '<ul class="keyfacts">' + keyfactsHtml(specsFacts(stop)) + '</ul>' +

          galleryHtml(stop) +

          '<div class="interact">' +
            '<h3>👀 Look for it</h3>' +
            '<p class="look">' + stop.lookFor + '</p>' +
            '<div class="quiz">' +
              '<p class="q">' + stop.quiz.question + '</p>' +
              quizOptionsHtml(stop.quiz) +
              '<p class="quiz-result" hidden data-correct-msg="' + stop.quiz.correctFeedback.replace(/"/g, '&quot;') + '" data-wrong-msg="' + stop.quiz.wrongFeedback.replace(/"/g, '&quot;') + '"></p>' +
            '</div>' +
          '</div>' +

          askYourHostHtml(stop) +

          videoSectionHtml(stop) +

          infoRowHtml(stop) +

          '<div class="cta-card">' +
            '<h3>' + stop.cta.heading + '</h3>' +
            '<p>' + stop.cta.body + '</p>' +
            '<button class="btn red small" style="margin-top:8px" onclick="show(\'contact\')">Talk to the Test Lab →</button>' +
          '</div>' +

          '<div class="stop-nav">' +
            '<button type="button" class="btn secondary beat-back" data-prev="narrate">← Narrate</button>' +
            '<button type="button" class="btn beat-next" data-next="advance">Next stop →</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function advanceBeatHtml(stop) {
    var wf = stop.wayfindNext;
    var nextBtn = wf.nextStopId
      ? '<button type="button" class="btn" onclick="show(\'' + wf.nextStopId + '\')">' + wf.label + ' →</button>'
      : '<button type="button" class="btn" onclick="show(\'welcome\')">Tour complete ✓</button>';
    return (
      '<div class="beat" data-beat="advance">' +
        '<div class="pad" style="padding-top:0">' +
          '<h2>Nice work.</h2>' +
          '<p class="muted">' + (wf.nextStopId ? 'Ready for the next stop?' : 'That’s the last stop on this tour.') + '</p>' +
          nextBtn +
          '<div class="stop-nav">' +
            '<button type="button" class="btn secondary beat-back" data-prev="branch">← Branch</button>' +
            '<button type="button" class="btn secondary" onclick="show(\'map\')">All stops</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function stopSectionHtml(stop) {
    // Use the new tab-based builder from render-tabs.js if available,
    // otherwise fall back to the beat-based builder
    if (typeof window.buildStopSection === 'function') {
      return window.buildStopSection(stop);
    }
    // Fallback to beat-based rendering
    return (
      '<section id="' + stop.id + '" class="view" aria-label="Tour stop: ' + stop.shortTitle + '" data-stop-section data-active-beat="arrive">' +
        '<div class="stop-head">' +
          '<button class="crumbs" onclick="show(\'map\')">← All stops</button>' +
        '</div>' +
        beatProgressHtml() +
        '<div class="beat-panels">' +
          arriveBeatHtml(stop) +
          orientBeatHtml(stop) +
          narrateBeatHtml(stop) +
          branchBeatHtml(stop) +
          advanceBeatHtml(stop) +
        '</div>' +
      '</section>'
    );
  }

  function renderDirectory() {
    var host = document.getElementById('directory-chips');
    var list = document.getElementById('directory-list');
    if (!host || !list) return;
    host.innerHTML = buildDirectoryChips(window.STOPS);
    host.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip');
      if (!btn) return;
      filterDirectory(btn.dataset.chip);
    });
    window.STOPS.forEach(function (stop) {
      list.appendChild(el(directoryCardHtml(stop)));
    });
    var tourHost = document.getElementById('tour-chips');
    if (tourHost && window.TOURS && window.TOURS.length) {
      tourHost.innerHTML = buildTourChips(window.TOURS);
      tourHost.addEventListener('click', function (e) {
        var btn = e.target.closest('.chip');
        if (!btn) return;
        filterByTour(btn.dataset.tour);
      });
    }
  }

  function renderStops() {
    var mount = document.getElementById('stops-mount');
    if (!mount) return;
    window.STOPS.forEach(function (stop) {
      mount.appendChild(el(stopSectionHtml(stop)));
    });
  }

  // Only stops with a confidently-traced campusPin get a pin -- no
  // placeholder guessing for stops whose exact location isn't verified.
  function campusMapHtml() {
    var pins = window.STOPS.filter(function (s) { return s.campusPin; }).map(function (s) {
      var label = String(s.shortTitle || s.title).replace(/"/g, '&quot;');
      return (
        '<button type="button" class="callout-marker campus-pin" style="left:' + s.campusPin.xPct + '%;top:' + s.campusPin.yPct + '%" aria-label="Go to ' + label + '" onclick="show(\'' + s.id + '\')">' +
          '<span class="dot" aria-hidden="true"></span>' +
          '<span class="callout-label" aria-hidden="true">' + label + '</span>' +
        '</button>'
      );
    }).join('');
    return (
      '<div class="media photo campus-map-frame">' +
        '<img class="shot" src="media/shared/img/campus-map.jpg" alt="Aerial orthoimagery of the MSFC / Redstone Arsenal campus and West Test Area.">' +
        pins +
      '</div>' +
      '<div class="credit">USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain</div>'
    );
  }

  function renderCampusMap() {
    var mount = document.getElementById('campus-map-mount');
    if (!mount) return;
    mount.innerHTML = campusMapHtml();
  }

  // Lab categories bento grid on home page
  function renderLabCards() {
    var mount = document.getElementById('lab-grid');
    if (!mount) return;

    // Define the 5 lab categories matching ET10, ET20, ET30, ET40, ET50
    var labs = [
      { id: 'propulsion', name: 'Propulsion', key: 'Propulsion', heroImage: 'media/test-stand-116/img/hero.jpg', onePager: 'OnePagers/ET10_PTL 3_1_21.pdf', etCode: 'ET10' },
      { id: 'dynamics', name: 'Structural Dynamics', key: 'Structural Dynamics', heroImage: 'media/flat-floor/img/hero.jpg', onePager: 'OnePagers/ET40 SDT _3_1_21.pdf', etCode: 'ET40' },
      { id: 'strength', name: 'Structural Strength', key: 'Structural Strength', heroImage: 'media/structural-test-stands/img/hero.jpg', onePager: 'OnePagers/ET30_SSTL _3_1_21.pdf', etCode: 'ET30' },
      { id: 'fluids', name: 'Experimental Fluids & Environmental', key: 'Experimental Fluids & Environmental', heroImage: 'media/thermal-vacuum/img/hero.jpg', onePager: 'OnePagers/ET20_FD_3_1_21.pdf', etCode: 'ET20' },
      { id: 'special', name: 'Special Test Equipment', key: 'Special Test Equipment', heroImage: 'media/shared/img/nasa-logo.png', onePager: 'OnePagers/ET50_STE_3_1_21.pdf', etCode: 'ET50' }
    ];

    // Group stops by lab
    var stopsByLab = {};
    labs.forEach(function (lab) {
      stopsByLab[lab.key] = window.STOPS.filter(function (s) {
        return s.lab === lab.key && s.available && !s.legacySite;
      });
    });

    // Build cards
    labs.forEach(function (lab) {
      var stops = stopsByLab[lab.key];
      var stopListHtml = '';

      if (stops.length > 0) {
        // Show up to 4 stops
        var displayStops = stops.slice(0, 4);
        stopListHtml = '<ul class="stop-list">' +
          displayStops.map(function (s) {
            return '<li><a href="#' + s.id + '" onclick="show(\'' + s.id + '\'); return false;">' + s.title + '</a></li>';
          }).join('') +
          '</ul>';
      } else {
        stopListHtml = '<ul class="stop-list"><li style="color:var(--muted);font-style:italic;">Coming soon</li></ul>';
      }

      var seeAllHtml = stops.length > 0
        ? '<a href="#map" class="see-all" onclick="filterByLab(\'' + lab.key + '\'); show(\'map\'); return false;">See all ' + lab.name.toLowerCase() + ' facilities</a>'
        : '';

      var onePagerHtml = lab.onePager
        ? '<a href="' + lab.onePager + '" target="_blank" rel="noopener" class="one-pager-link" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--nasa-blue);text-decoration:none;margin-top:8px;font-weight:600">' +
            '<span>📄</span>' +
            '<span>' + lab.etCode + ' One-Pager</span>' +
            '<span style="font-size:10px">↗</span>' +
          '</a>'
        : '';

      var cardHtml = '<div class="lab-card">' +
        '<div class="lab-card-hero" style="background-image: url(\'' + lab.heroImage + '\')"></div>' +
        '<div class="lab-card-content">' +
          '<h3>' + lab.name + '</h3>' +
          stopListHtml +
          seeAllHtml +
          onePagerHtml +
        '</div>' +
        '</div>';

      mount.appendChild(el(cardHtml));
    });
  }

  // Filter directory by lab category
  window.filterByLab = function (labKey) {
    var host = document.getElementById('directory-chips');
    if (host) host.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });
    var tourHost = document.getElementById('tour-chips');
    if (tourHost) tourHost.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });

    _restoreMasterOrder();

    document.querySelectorAll('#directory-list .stopcard').forEach(function (card) {
      var stopId = card.getAttribute('data-stop-id');
      var stop = window.STOPS.filter(function (s) { return s.id === stopId; })[0];
      var show = stop && stop.lab === labKey;
      card.style.display = show ? '' : 'none';
    });
  };

  // Clear all filters and show all stops
  window.clearAllFilters = function () {
    // Clear search input
    var searchInput = document.getElementById('stop-search');
    if (searchInput) searchInput.value = '';

    // Clear all active chips
    var host = document.getElementById('directory-chips');
    if (host) host.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });
    var tourHost = document.getElementById('tour-chips');
    if (tourHost) tourHost.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('active'); });

    // Restore master order and show all cards
    _restoreMasterOrder();
    document.querySelectorAll('#directory-list .stopcard').forEach(function (card) {
      card.style.display = '';
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    renderDirectory();
    renderStops();
    renderCampusMap();
    renderLabCards();
    if (typeof window.afterRender === 'function') window.afterRender();
  });
})();
