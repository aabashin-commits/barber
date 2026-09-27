/* Лайтбокс для ленты #BOXcutLive: клик по фото открывает крупный просмотр,
   стрелки листают по всем фото, дубликаты ленты (для бесшовной прокрутки) пропускаются */
(function () {
  'use strict';

  var dialog = document.querySelector('[data-gallery-lightbox]');
  var openers = document.querySelectorAll('[data-gallery-open]');
  if (!dialog || !openers.length) return;

  var image = dialog.querySelector('[data-gallery-image]');
  var closeBtn = dialog.querySelector('[data-gallery-close]');
  var prevBtn = dialog.querySelector('[data-gallery-prev]');
  var nextBtn = dialog.querySelector('[data-gallery-next]');

  var photos = [];
  openers.forEach(function (btn) {
    if (btn.hasAttribute('tabindex')) return;
    var img = btn.querySelector('img');
    photos[Number(btn.getAttribute('data-index'))] = { src: img.src, alt: img.alt };
  });

  var current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length;
    image.src = photos[current].src;
    image.alt = photos[current].alt;
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      show(Number(btn.getAttribute('data-index')));
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', function () { dialog.close(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });

  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
})();
