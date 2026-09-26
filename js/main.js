/* Общий скрипт: отмечает, что JS работает, и создаёт window.barber */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  window.barber = window.barber || {};
})();
