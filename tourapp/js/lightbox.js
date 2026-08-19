/*
  One reusable <dialog> for every zoomable photo (hero, detail image,
  gallery). Reads the caption/credit text that render.js already put next
  to each photo rather than duplicating it into new data attributes.
*/
(function () {
  function captionAndCredit(btn, img) {
    var figure = btn.closest('figure.gallery-item');
    if (figure) {
      var capText = figure.querySelector('.cap-text');
      var capCredit = figure.querySelector('.cap-credit');
      return {
        caption: capText ? capText.textContent : (img.alt || ''),
        creditHtml: capCredit ? capCredit.innerHTML : ''
      };
    }
    var media = btn.closest('.media');
    var next = media && media.nextElementSibling;
    var creditHtml = (next && next.classList.contains('credit')) ? next.innerHTML : '';
    return { caption: img.alt || '', creditHtml: creditHtml };
  }

  function openLightbox(btn) {
    var dlg = document.getElementById('lightbox');
    var img = btn.querySelector('img');
    if (!dlg || !img) return;
    var meta = captionAndCredit(btn, img);
    var lbImg = dlg.querySelector('img');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    dlg.querySelector('.lb-caption').textContent = meta.caption;
    dlg.querySelector('.lb-credit').innerHTML = meta.creditHtml;
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('button.zoomable');
    if (trigger) { openLightbox(trigger); return; }

    var closeBtn = e.target.closest('.lb-close');
    if (closeBtn) { closeBtn.closest('dialog').close(); return; }

    var dlg = e.target.closest('dialog#lightbox');
    if (dlg && e.target === dlg) dlg.close();
  });
})();
