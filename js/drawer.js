/* Мобильное меню: открытие, закрытие по крестику, фону, Esc и клику по ссылке */
(function () {
  'use strict';

  var drawer = document.querySelector('[data-drawer]');
  var opener = document.querySelector('[data-drawer-open]');
  var closer = document.querySelector('[data-drawer-close]');
  var backdrop = document.querySelector('[data-drawer-backdrop]');
  if (!drawer || !opener) return;

  function setOpen(open) {
    drawer.classList.toggle('drawer--open', open);
    if (backdrop) backdrop.classList.toggle('drawer-backdrop--open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    opener.setAttribute('aria-expanded', String(open));
    if (open) {
      // панель ещё скрыта первый кадр перехода — фокус переносим чуть позже
      if (closer) setTimeout(function () { closer.focus(); }, 50);
    } else {
      opener.focus();
    }
  }

  opener.addEventListener('click', function () { setOpen(true); });
  if (closer) closer.addEventListener('click', function () { setOpen(false); });
  if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });

  drawer.addEventListener('click', function (event) {
    if (event.target.closest('a[href^="#"]')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawer.classList.contains('drawer--open')) setOpen(false);
  });
})();
