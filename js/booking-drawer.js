/* Шторка онлайн-записи: открытие формы YCLIENTS во всех кнопках data-booking-open */
(function () {
  'use strict';

  var drawer = document.querySelector('[data-booking-drawer]');
  var backdrop = document.querySelector('[data-booking-backdrop]');
  var closer = document.querySelector('[data-booking-close]');
  var frame = document.querySelector('[data-booking-frame]');
  var openers = document.querySelectorAll('[data-booking-open]');
  if (!drawer || !openers.length) return;

  function setOpen(open) {
    drawer.classList.toggle('booking-drawer--open', open);
    if (backdrop) backdrop.classList.toggle('booking-drawer-backdrop--open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    if (open) {
      if (frame && !frame.src) frame.src = frame.getAttribute('data-src');
      if (closer) setTimeout(function () { closer.focus(); }, 50);
    }
  }

  openers.forEach(function (opener) {
    opener.addEventListener('click', function (event) {
      event.preventDefault();
      setOpen(true);
    });
  });

  if (closer) closer.addEventListener('click', function () { setOpen(false); });
  if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawer.classList.contains('booking-drawer--open')) setOpen(false);
  });
})();
