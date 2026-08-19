/*
  Per-stop quiz interaction. Feedback text now comes from each stop's own
  quiz.correctFeedback / quiz.wrongFeedback (data/stops.js) via data-
  attributes rendered onto .quiz-result — fixes a bug in the original
  hand-written HTML where all three stops shared the Flat-Floor-specific
  explanation text regardless of which quiz was answered.
*/
function answer(btn, correct) {
  var box = btn.closest('.quiz');
  box.querySelectorAll('.opt').forEach(function (b) { b.disabled = true; });
  var res = box.querySelector('.quiz-result');
  var rootStyle = getComputedStyle(document.documentElement);
  if (correct) {
    btn.classList.add('correct');
    res.textContent = res.getAttribute('data-correct-msg') || '\u2713 Correct.';
    res.style.color = rootStyle.getPropertyValue('--correct-ink').trim();
  } else {
    btn.classList.add('wrong');
    var c = box.querySelector('[data-correct]');
    if (c) c.classList.add('correct');
    res.textContent = res.getAttribute('data-wrong-msg') || 'Not quite.';
    res.style.color = rootStyle.getPropertyValue('--soon-ink').trim();
  }
  res.hidden = false;
}
