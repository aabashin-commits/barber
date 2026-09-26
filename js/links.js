/* Подставляет ссылки из config.js в элементы с data-link="telegram|whatsapp|phone" */
(function () {
  'use strict';

  var config = window.barber && window.barber.config;
  if (!config) return;

  document.querySelectorAll('[data-link]').forEach(function (el) {
    var href = config.links[el.getAttribute('data-link')];
    if (href) el.setAttribute('href', href);
  });
})();
