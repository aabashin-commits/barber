/* Слайдер фото в hero: колода карточек, переключение стрелками ‹ › */
(function () {
  'use strict';

  var root = document.querySelector('[data-hero-slider]');
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll('[data-hero-slide]'));
  var prevBtn = root.querySelector('[data-hero-prev]');
  var nextBtn = root.querySelector('[data-hero-next]');
  if (!slides.length || !prevBtn || !nextBtn) return;

  var count = slides.length;
  var active = 0;

  function render() {
    slides.forEach(function (img, i) {
      var diff = (i - active + count) % count;
      if (diff > count / 2) diff -= count;

      var state;
      if (diff === 0) state = 'active';
      else if (diff === 1) state = 'next';
      else if (diff === -1) state = 'prev';
      else if (diff > 0) state = 'far-next';
      else state = 'far-prev';

      img.dataset.state = state;
    });
  }

  prevBtn.addEventListener('click', function () {
    active = (active - 1 + count) % count;
    render();
  });

  nextBtn.addEventListener('click', function () {
    active = (active + 1) % count;
    render();
  });

  render();
})();
