# Файловая структура

```
Barber/
├── CLAUDE.md                 правила проекта (~200 строк)
├── index.html                главная страница
├── anton.html                страница мастера Антона (генерируется скриптом, см. content.md)
├── nikita.html               страница мастера Никиты (генерируется скриптом)
├── _plans/
│   └── barber-site.md        handoff: задача, чеклист, критерии готовности
├── docs/                     документация проекта
│   ├── structure.md          этот файл
│   ├── design-system.md      токены и компоненты
│   ├── conventions.md        конвенции кода
│   ├── pages.md              блоки страницы
│   ├── content.md            реестр заглушек
│   ├── decisions.md          закрытые решения
│   ├── testing.md            проверка
│   └── superpowers/          спека и план работ по BOX cut и мастерам
│       ├── specs/
│       └── plans/
├── css/                      один блок = один файл
│   ├── base.css              сброс, body, типографика, .visually-hidden, фокус
│   ├── layout.css            контейнеры, кнопка .btn, метка .tag, логотип .brand
│   ├── hero.css              главный экран
│   ├── panel.css             белая панель-обёртка (и .panel--flat без промо-наезда)
│   ├── gallery.css           метка #BOXcutLive и фото-плитки
│   ├── services.css          услуги и цены
│   ├── masters.css           карточки-ссылки на страницы мастеров
│   ├── master-page.css       страница мастера: шапка с портретом, роль, имя, лид, запись
│   ├── photos.css            сетка фото 3:4: работы и интерьер
│   ├── contacts.css          тёмный блок: адрес, часы, запись (три карточки)
│   ├── fab.css               плавающая кнопка записи
│   ├── drawer.css            бургер и мобильное меню
│   └── footer.css            футер (подключается последним)
├── js/                       IIFE-файлы, каждый тихо выходит без своих элементов
│   ├── main.js               window.barber: хелперы
│   ├── config.js             контакты, часы, ссылки (единое место замены)
│   ├── drawer.js             открытие и закрытие меню
│   ├── links.js              подстановка ссылок записи из config.js по data-link
│   ├── gallery.js            пауза ленты по наведению, лайтбокс на <dialog>
│   └── hero-slider.js        колода фото hero: переключение data-state стрелками ‹ ›
├── assets/                   свои фото, ≈3 МБ
│   ├── brand/                logo.jpg (оригинал), logo-white.png (белый на прозрачном, 512×512)
│   ├── interior/             8 фото зала: facade, hall-lights, chair-*, hall-*, tools
│   ├── anton/                portrait, work-1…6, client-1…2
│   └── nikita/               portrait, at-work, night
└── design/borodach.com/      дизайн-система оригинала, только чтение
    ├── tokens.css            токены (подключается на странице)
    ├── DESIGN.md             первоисточник, 16 КБ
    └── raw/                  скриншоты и сырые данные, читать частями
```

Порядок подключения CSS на странице: Google Fonts → `tokens.css` → `base` → `layout` → блоки
сверху вниз → `footer` последним. Страницы мастеров подключают подмножество: `base`, `layout`,
`master-page`, `panel`, `photos`, `services`, `masters`, `contacts`, `fab`, `drawer`, `footer`.

- `css/theme.css` — тема BOX: переопределение токенов (цвета, шрифты, радиусы), идёт сразу после `tokens.css`.
- `css/skin.css` — форма блоков поверх CSS страниц (рамки, тени, нумерация, прайс), идёт перед `footer.css`.
