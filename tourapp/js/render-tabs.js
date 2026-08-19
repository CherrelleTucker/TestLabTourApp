/*
  Tab-based stop rendering — replaces the beat progression (Arrive/Orient/
  Narrate/Branch/Advance) with four tabs: About, Explore, Specs, Visit.

  This file replaces the beat-building functions in render.js while keeping
  the directory and data-driven architecture intact.
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

  function explainerText(stop) {
    var full = stop.narration.text;
    var hook = stop.hook || '';
    return (hook && full.indexOf(hook) === 0) ? full.slice(hook.length).trim() : full;
  }

  function keyfactsHtml(facts) {
    return facts.map(function (f) {
      return (
        '<li>' +
          '<div class="num">' + f.num + '</div>' +
          '<div class="label">' + f.label + '</div>' +
          '<div class="detail muted">' + f.detail + '</div>' +
        '</li>'
      );
    }).join('');
  }

  function galleryHtml(stop) {
    if (!stop.gallery || !stop.gallery.length) return '';
    var media = stop.media;
    return (
      '<div class="gallery">' +
        '<h3>' + (stop.galleryTitle || 'Gallery') + '</h3>' +
        '<div class="gallery-grid">' +
          stop.gallery.map(function (img) {
            return (
              '<div class="gallery-item">' +
                '<button class="zoomable" type="button">' +
                  '<img class="shot" src="' + media + '/' + img.src + '" alt="' + img.alt + '">' +
                  '<span class="zoom-hint" aria-hidden="true">⤢ Enlarge</span>' +
                '</button>' +
                '<div class="credit">' + img.credit + '</div>' +
                (img.caption ? '<p class="caption muted">' + img.caption + '</p>' : '') +
              '</div>'
            );
          }).join('') +
        '</div>' +
      '</div>'
    );
  }

  function videoSectionHtml(stop) {
    if (!stop.video) return '';
    var media = stop.media;
    return (
      '<div class="media video-frame">' +
        '<h3>' + stop.video.sectionTitle + '</h3>' +
        '<video class="video-el" controls preload="metadata" poster="' + media + '/' + stop.video.poster + '">' +
          '<source src="' + media + '/' + stop.video.src + '" type="video/mp4">' +
          'Your browser does not support the video tag.' +
        '</video>' +
        '<p class="video-title">' + stop.video.title + '</p>' +
        '<div class="credit">' + stop.video.credit + '</div>' +
      '</div>'
    );
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

  function onePagerLinksHtml(stop) {
    var onePagers = stop.onePagers || [];
    if (!onePagers.length) return '';
    return (
      '<div style="margin-top:var(--space-lg)">' +
        '<h3 style="font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:var(--nasa-blue);margin:0 0 var(--space-sm)">Resources</h3>' +
        onePagers.map(function (pdf) {
          return (
            '<a class="res dl" href="' + pdf.path + '" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:11px;background:var(--card);border:1px solid var(--line);border-radius:9px;padding:11px 13px;margin-bottom:8px;text-decoration:none;color:var(--ink);font-size:14px;font-weight:600">' +
              '<span class="ri" style="font-size:18px;flex:0 0 auto;width:24px;text-align:center">📄</span>' +
              '<span>' + pdf.title + '<span class="rd" style="font-weight:400;color:var(--muted);font-size:12px;display:block;margin-top:1px">' + pdf.description + '</span></span>' +
              '<span style="margin-left:auto;color:#c2c7cf">⤓</span>' +
            '</a>'
          );
        }).join('') +
      '</div>'
    );
  }

  function quizOptionsHtml(quiz) {
    return quiz.options.map(function (opt, i) {
      return (
        '<button type="button" class="opt" data-correct="' + opt.correct + '" onclick="answer(this, ' + opt.correct + ')">' +
          opt.text +
        '</button>'
      );
    }).join('');
  }

  // ============ TAB CONTENT BUILDERS ============
  // About | Science | History | People & Projects | Specs

  function aboutTabHtml(stop) {
    var media = stop.media;
    var wowFact = stop.keyfacts[stop.wowStat];
    var secMatch = stop.narration.durationLabel.match(/(\d+)\s*sec/);
    var totalSeconds = secMatch ? parseInt(secMatch[1], 10) : null;
    var remainingText = totalSeconds ? ('0:' + (totalSeconds < 10 ? '0' : '') + totalSeconds) : '--:--';

    return (
      '<div class="tab-panel active" data-tab="about" role="tabpanel">' +
        '<div class="pad">' +

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

          '<div class="hero-section">' +
            '<div class="media photo hero-photo">' +
              '<img class="shot" src="' + media + '/' + stop.hero.src + '" alt="' + stop.hero.alt + '" style="view-transition-name:vt-hero-' + stop.id + '">' +
            '</div>' +
            '<div class="credit">' + stop.hero.credit + '</div>' +
          '</div>' +

          '<div class="factbox">' + stop.factbox + '</div>' +

          '<h2>Why it matters</h2>' +
          '<div class="why-matters">' +
            '<div class="why-section">' +
              '<h3><span aria-hidden="true">👤</span> To you</h3>' +
              '<p>' + (stop.whyItMattersToYou || 'Every satellite, rover, and spacecraft that needs to dock, rendezvous, or operate autonomously has to prove its control systems work before launch. Ground truth can\'t come from simulation alone — it has to come from hardware that actually moved the way it will in orbit.') + '</p>' +
            '</div>' +
            '<div class="why-section">' +
              '<h3><span aria-hidden="true">🌍</span> To NASA and the world</h3>' +
              '<p>' + (stop.whyItMattersToWorld || stop.whyItMatters) + '</p>' +
            '</div>' +
          '</div>' +

          '<div class="reveal-card" style="margin-top:var(--space-lg)">' +
            '<ul class="keyfacts">' + keyfactsHtml([wowFact]) + '</ul>' +
          '</div>' +

          '<div class="interact">' +
            '<h3>👀 Quick quiz</h3>' +
            '<div class="quiz">' +
              '<p class="q">' + stop.quiz.question + '</p>' +
              quizOptionsHtml(stop.quiz) +
              '<p class="quiz-result" hidden data-correct-msg="' + stop.quiz.correctFeedback.replace(/"/g, '&quot;') + '" data-wrong-msg="' + stop.quiz.wrongFeedback.replace(/"/g, '&quot;') + '"></p>' +
            '</div>' +
          '</div>' +

        '</div>' +
      '</div>'
    );
  }

  function scienceTabHtml(stop) {
    var media = stop.media;
    return (
      '<div class="tab-panel" data-tab="science" role="tabpanel" hidden>' +
        '<div class="pad">' +
          '<h2>How it works</h2>' +
          '<details' + (stop.deepDive.open ? ' open' : '') + '>' +
            '<summary>' + stop.deepDive.summary + '</summary>' +
            '<div class="inner muted">' + stop.deepDive.html + '</div>' +
          '</details>' +

          '<div class="media photo" style="margin-top:var(--space-lg)">' +
            '<button class="zoomable" type="button">' +
              '<img class="shot" src="' + media + '/' + stop.detailImage.src + '" alt="' + stop.detailImage.alt + '">' +
              '<span class="zoom-hint" aria-hidden="true">⤢ Enlarge</span>' +
            '</button>' +
          '</div>' +
          '<div class="credit">' + stop.detailImage.credit + '</div>' +

          videoSectionHtml(stop) +

        '</div>' +
      '</div>'
    );
  }

  function historyTabHtml(stop) {
    return (
      '<div class="tab-panel" data-tab="history" role="tabpanel" hidden>' +
        '<div class="pad">' +
          '<h2>History</h2>' +
          '<p class="muted">Historical content for this facility will be added here.</p>' +

          galleryHtml(stop) +

        '</div>' +
      '</div>'
    );
  }

  function peopleProjectsTabHtml(stop) {
    return (
      '<div class="tab-panel" data-tab="people-projects" role="tabpanel" hidden>' +
        '<div class="pad">' +
          '<h2>People &amp; Projects</h2>' +

          askYourHostHtml(stop) +

          '<div class="cta-card" style="margin-top:var(--space-lg)">' +
            '<h3>' + stop.cta.heading + '</h3>' +
            '<p>' + stop.cta.body + '</p>' +
            '<a class="btn red small" style="margin-top:8px; display:inline-block; text-decoration:none" ' +
              'href="mailto:msfc-testlab-tours@mail.nasa.gov?subject=Test%20Lab%20inquiry%20-%20' +
              encodeURIComponent(stop.shortTitle) + '">' +
              '📧 Work with the Test Lab' +
            '</a>' +
            '<p style="font-size:11.5px;opacity:0.82;margin-top:9px">Monitored <b>role mailbox</b> (placeholder) — not an individual.</p>' +
          '</div>' +

          onePagerLinksHtml(stop) +

        '</div>' +
      '</div>'
    );
  }

  function specsTabHtml(stop) {
    var specsFacts = stop.keyfacts.filter(function (f, i) { return i !== stop.wowStat; });
    return (
      '<div class="tab-panel" data-tab="specs" role="tabpanel" hidden>' +
        '<div class="pad">' +
          '<h2>' + stop.keyfactsTitle + '</h2>' +
          '<ul class="keyfacts">' + keyfactsHtml(specsFacts) + '</ul>' +

          '<h2>Look for it</h2>' +
          '<p class="look">' + stop.lookFor + '</p>' +

          (stop.hazards && stop.hazards.length ?
            '<div class="hazard-chips" style="margin-top:var(--space-lg)">' +
              stop.hazards.map(function (h) { return '<span class="chip hazard">⚠ ' + h + '</span>'; }).join('') +
            '</div>'
          : '') +

          '<h2 style="margin-top:var(--space-xl)">Next stop</h2>' +
          (stop.wayfindNext.nextStopId
            ? '<button type="button" class="btn" onclick="show(\'' + stop.wayfindNext.nextStopId + '\')">' + stop.wayfindNext.label + ' →</button>'
            : '<button type="button" class="btn" onclick="show(\'welcome\')">Tour complete ✓</button>') +

        '</div>' +
      '</div>'
    );
  }

  // ============ MAIN STOP SECTION BUILDER ============

  function stopSectionHtml(stop) {
    return (
      '<section id="' + stop.id + '" class="view" aria-label="Tour stop: ' + stop.shortTitle + '" data-stop-section>' +
        '<div class="stop-head">' +
          '<button class="crumbs" onclick="show(\'map\')">← All stops</button>' +
        '</div>' +
        '<div class="stop-header">' +
          '<div class="pad">' +
            '<div class="chips" style="margin-bottom:8px">' + chipHtml(stop.chips) + '</div>' +
            '<h1>' + stop.title + '</h1>' +
            '<p class="muted" style="margin-bottom:0">' + stop.location + ' · ' + stop.tourTime + '</p>' +
          '</div>' +
        '</div>' +
        '<nav class="stop-tabs" role="tablist">' +
          '<button class="tab-btn active" data-tab="about" role="tab" aria-selected="true">About</button>' +
          '<button class="tab-btn" data-tab="science" role="tab" aria-selected="false">Science</button>' +
          '<button class="tab-btn" data-tab="history" role="tab" aria-selected="false">History</button>' +
          '<button class="tab-btn" data-tab="people-projects" role="tab" aria-selected="false">People &amp; Projects</button>' +
          '<button class="tab-btn" data-tab="specs" role="tab" aria-selected="false">Specs</button>' +
        '</nav>' +
        '<div class="tab-content">' +
          aboutTabHtml(stop) +
          scienceTabHtml(stop) +
          historyTabHtml(stop) +
          peopleProjectsTabHtml(stop) +
          specsTabHtml(stop) +
        '</div>' +
      '</section>'
    );
  }

  // Export the stop section builder so render.js can use it
  window.buildStopSection = stopSectionHtml;
})();
