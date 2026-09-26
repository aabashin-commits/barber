# BOX cut: мастера, страницы мастеров, реальные фото — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Перевести сайт с заглушки «Barber Club» на BOX cut, добавить на главную блок из двух мастеров и сделать две страницы мастеров (`anton.html`, `nikita.html`) с реальными фото.

**Architecture:** Три статичных HTML в корне. Главная правится вручную через `Edit`. Страницы мастеров генерирует одноразовый скрипт-сборщик из одного шаблона: он берёт шапку, контакты и футер из `index.html`, а прайсы — из одного словаря `SERVICES`, тем же словарём проверяются цены на главной. Фото обрабатывает второй скрипт (PIL). Оба скрипта лежат в scratchpad, а не в проекте (спека: «Фото»).

**Tech Stack:** HTML, CSS (токены из `design/borodach.com/tokens.css`), vanilla JS (без нового кода), Python 3 + PIL только для сборки, Playwright MCP для проверки.

**Spec:** [docs/superpowers/specs/2026-09-25-box-cut-masters-design.md](../specs/2026-09-25-box-cut-masters-design.md)

Отличия от спеки (уточнения при разборе кода; в конце плана спека выравнивается):
- один общий `css/photos.css` вместо `works.css` + `interior.css` (одна и та же сетка фото);
- «Работы» у Антона — 8 фото: 6 работ + 2 кадра с клиентом; портрет — отдельно в шапке;
- цена «от» только там, где у мастеров цены различаются (стрижка модельная, детская, fade); если услугу делает один мастер или цены равны — точная цена.

## Global Constraints

- Язык сайта, документации и комментариев — **только русский**.
- **Только токены** из `design/borodach.com/tokens.css` (цвет, шрифт, отступ, радиус, анимация). `tokens.css` не редактировать, папку `design/` не трогать.
- Допустимые литералы: `1px` у линий, ширины в `@media`, `aspect-ratio`, `%`/`vw`, `0`, `100%`, `z-index`, размеры компонентов из CLAUDE.md (1020px, 1156px, 41px, 302×72 / 165×48).
- Зелёный `--color-primary` — только для нажимаемого и брендовых меток.
- Без фреймворков, сборщиков и CDN-библиотек. Единственное внешнее — Google Fonts.
- Слов «Borodach», «Бородач», «Club Group», «224 000» на сайте нет; слов «Barber Club» / `barberclub` после Task 2 тоже нет.
- JS: каждый файл — IIFE с `'use strict'`. Состояния — классами и `aria-*`, не inline-стилями.
- Без JS страницы читаются: якорное меню видно списком, кнопки записи — обычные ссылки.
- Не коммитить, не делать `git init`, не публиковать (в проекте нет git — шагов «commit» нет).
- Не выдумывать стаж, награды, отзывы и цифры. Тексты — по навыкам `zhivoy-tekst` и `prodayushchie-smysly`; всё временное — в `docs/content.md`.
- Не публиковать: скриншоты yclients, афишу с телефоном, коллаж с сертификатом, селфи в зеркале.
- Оригиналы в `фотки/` не менять и не удалять.
- Перед правкой файлов, удалением и перезаписью — объяснять пользователю, что и зачем (правило проекта №1).
- Рабочие файлы и скрипты — в scratchpad: `/private/tmp/claude-501/-Users-administrator-Barber/2dbc1f57-7f21-4c33-b753-303608ab20ad/scratchpad/` (далее `$S`).

## Review Focus

1. **Горизонтальный скролл на 360px** на новых страницах (сетки 4 колонки, портрет 3:4): ожидаем `scrollWidth <= innerWidth` на всех трёх страницах.
2. **Чёрные полосы** от скриншотов телефона остались на фото Антона/Никиты: ожидаем, что автообрезка их убрала и ни одно фото не обрезано «в тело».
3. **Цены расходятся** между главной, страницей Антона и Никиты: ожидаем, что `check_index()` и сборщик берут числа из одного словаря `SERVICES`.
4. **Якоря между страницами:** меню и бренд на страницах мастеров ведут на `index.html#…`, ссылка «Подробнее» — на страницу мастера, обратно через кросс-ссылку; ни одной ссылки `#services` без якоря на самой странице.
5. **Остатки старого бренда и чужого:** `Barber Club`, `barberclub`, `borodach`, `assets/hero.jpg`, `assets/gallery-` не встречаются в `index.html`, `anton.html`, `nikita.html`, `js/`, `css/`.

---

## File Structure

| Файл | Действие | Ответственность |
|---|---|---|
| `$S/build_assets.py` | создать | Копии фото в `assets/` (ресайз, автообрезка полос, белый логотип) |
| `$S/site_tools.py` | создать | Сборщик `anton.html`/`nikita.html`, `check_index()` для цен |
| `assets/brand/`, `assets/interior/`, `assets/anton/`, `assets/nikita/` | создать | Обработанные фото |
| `assets/hero.jpg`, `assets/gallery-1…3.jpg` | удалить (Task 2) | Демо-фото borodach.com заменены |
| `index.html` | изменить | Бренд, hero, галерея, услуги, мастера, контакты, футер |
| `js/config.js` | изменить | Название, телефон, часы, адрес |
| `css/layout.css`, `css/hero.css`, `css/footer.css` | изменить | Логотип вместо вордмарка; убрать `.brand__mark/.brand__tagline/.stripes` |
| `css/masters.css` | изменить | Две карточки с фото и ссылкой; модификатор `--single` |
| `css/contacts.css` | изменить | Фото фасада в карточке адреса |
| `css/master-page.css` | создать | Шапка страницы мастера, `.panel--flat` |
| `css/photos.css` | создать | Сетка фото (работы, интерьер) |
| `anton.html`, `nikita.html` | создать (генерируются) | Страницы мастеров |
| `docs/*.md`, `CLAUDE.md`, `_plans/barber-site.md` | изменить (Task 6) | Документация |

Порядок CSS на странице: Google Fonts → `tokens.css` → `base` → `layout` → блоки → `footer` последним.

---

### Task 1: Обработка фото

**Files:**
- Create: `$S/build_assets.py`
- Create: `assets/brand/logo.jpg`, `assets/brand/logo-white.png`, `assets/interior/*.jpg` (8), `assets/anton/*.jpg` (10), `assets/nikita/*.jpg` (3)

**Interfaces:**
- Produces (пути, на которые ссылаются все следующие задачи):
  - `assets/brand/logo-white.png` — 512×512, белый знак на прозрачном фоне
  - `assets/interior/`: `facade.jpg`, `hall-lights.jpg`, `chair-mirror.jpg`, `chair-front.jpg`, `chair-sink.jpg`, `hall-cape.jpg`, `hall-window.jpg`, `tools.jpg`
  - `assets/anton/`: `portrait.jpg`, `work-1.jpg … work-6.jpg`, `client-1.jpg`, `client-2.jpg`
  - `assets/nikita/`: `portrait.jpg`, `at-work.jpg`, `night.jpg`

- [ ] **Step 1: Написать скрипт**

Пояснить пользователю: скрипт только читает `фотки/` и пишет новые файлы в `assets/brand|interior|anton|nikita/` (папки создаются, существующее не затрагивается).

```python
# $S/build_assets.py
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path('/Users/administrator/Barber/фотки')
DST = Path('/Users/administrator/Barber/assets')
P = '2026-09-25 '
MAXW = 1600

# (папка-источник, время в имени файла, куда, автообрезка чёрных полос)
JOBS = [
    ('.', '20.59.33', 'interior/facade.jpg', False),
    ('.', '20.59.41', 'interior/hall-lights.jpg', False),
    ('.', '20.59.17', 'interior/chair-mirror.jpg', False),
    ('.', '20.59.24', 'interior/chair-front.jpg', False),
    ('.', '20.59.28', 'interior/chair-sink.jpg', False),
    ('.', '20.59.46', 'interior/hall-cape.jpg', False),
    ('.', '20.59.51', 'interior/hall-window.jpg', False),
    ('.', '20.59.37', 'interior/tools.jpg', False),
    ('Антон', '20.58.52', 'anton/portrait.jpg', False),
    ('Антон', '21.00.13', 'anton/work-1.jpg', False),
    ('Антон', '21.00.26', 'anton/work-2.jpg', False),
    ('Антон', '21.00.31', 'anton/work-3.jpg', False),
    ('Антон', '20.59.00', 'anton/work-4.jpg', False),
    ('Антон', '21.00.34', 'anton/work-5.jpg', True),
    ('Антон', '21.00.38', 'anton/work-6.jpg', True),
    ('Антон', '21.00.23', 'anton/client-1.jpg', True),
    ('Антон', '20.59.56', 'anton/client-2.jpg', False),
    ('Никита', '21.00.44', 'nikita/portrait.jpg', False),
    ('Никита', '21.00.50', 'nikita/at-work.jpg', True),
    ('Никита', '21.00.56', 'nikita/night.jpg', False),
]


def autocrop(im, thr=20):
    """Срезает чисто чёрные полосы по краям (скриншоты телефона)."""
    g = im.convert('L')
    w, h = g.size
    px = g.load()
    row_dark = lambda y: max(px[x, y] for x in range(0, w, 4)) < thr
    col_dark = lambda x: max(px[x, y] for y in range(0, h, 4)) < thr
    top, bot, left, right = 0, h - 1, 0, w - 1
    while top < bot and row_dark(top):
        top += 1
    while bot > top and row_dark(bot):
        bot -= 1
    while left < right and col_dark(left):
        left += 1
    while right > left and col_dark(right):
        right -= 1
    return im.crop((left, top, right + 1, bot + 1))


def save(src, dst, crop):
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    if crop:
        im = autocrop(im)
    if im.width > MAXW:
        im = im.resize((MAXW, round(im.height * MAXW / im.width)), Image.LANCZOS)
    out = DST / dst
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, 'JPEG', quality=82, optimize=True, progressive=True)
    print(dst, im.size, out.stat().st_size // 1024, 'KB')


def logo():
    src = SRC / (P + '20.56.05.jpg')
    (DST / 'brand').mkdir(parents=True, exist_ok=True)
    Image.open(src).convert('RGB').save(DST / 'brand/logo.jpg', 'JPEG', quality=90)
    g = Image.open(src).convert('L')
    bg = g.getpixel((5, 5))
    alpha = g.point(lambda v: max(0, min(255, int((bg - v) * 255 / (bg - 40)))))
    box = alpha.point(lambda v: 255 if v > 40 else 0).getbbox()
    pad = 12
    box = (max(0, box[0] - pad), max(0, box[1] - pad), min(g.width, box[2] + pad), min(g.height, box[3] + pad))
    out = Image.new('RGBA', g.size, (255, 255, 255, 255))
    out.putalpha(alpha)
    out = out.crop(box).resize((512, 512), Image.LANCZOS)
    out.save(DST / 'brand/logo-white.png', optimize=True)
    print('brand/logo-white.png', out.size)


if __name__ == '__main__':
    for folder, t, dst, crop in JOBS:
        save(SRC / folder / (P + t + '.jpg'), dst, crop)
    logo()
```

- [ ] **Step 2: Запустить и убедиться в размерах**

Run: `python3 $S/build_assets.py`
Expected: 21 строка (20 фото + логотип), нет исключений; ни одного `width` > 1600; суммарно `du -sh assets` меньше 6 МБ (демо-файлы ещё лежат).

- [ ] **Step 3: Проверить глазами результат**

Собрать контактный лист новых файлов (тот же приём, что в `$S/sheet2.py`, папки `assets/anton`, `assets/nikita`, `assets/interior`) и открыть его через Read.
Expected:
- на `work-5`, `work-6`, `client-1`, `at-work` нет чёрных полос;
- `night.jpg` (ночной портрет) не обрезан;
- `logo-white.png` открыть через Read: белый знак «BOX cut / МУЖСКИЕ СТРИЖКИ», без светлой «дымки» вокруг рамки. Если фон не прозрачный — поднять порог `bg - 40` до `bg - 20` и запустить заново.

---

### Task 2: Бренд BOX cut на главной

**Files:**
- Modify: `index.html` (head, hero, галерея, контакты, футер, ссылки)
- Modify: `js/config.js`
- Modify: `css/layout.css`, `css/hero.css`, `css/footer.css`, `css/contacts.css`
- Delete: `assets/hero.jpg`, `assets/gallery-1.jpg`, `assets/gallery-2.jpg`, `assets/gallery-3.jpg`

**Interfaces:**
- Consumes: `assets/brand/logo-white.png`, `assets/interior/{chair-front,chair-mirror,hall-lights,tools,facade}.jpg` (Task 1).
- Produces: класс `.brand__logo` (используется сборщиком в Task 5); данные в `config.js`; шапка/футер/контакты в `index.html`, которые Task 5 копирует.

- [ ] **Step 1: Правки `js/config.js`**

Заменить объект целиком (`Edit` по строкам `name`, `phone`, `phoneHref`, `address`, `hours`, `links`):

```js
  window.barber.config = {
    name: 'BOX cut',
    phone: '8 910 162-58-95',
    phoneHref: 'tel:+79101625895',
    address: 'ул. Примерная, 1',
    hours: 'Вт–Вс с 11:00 до 20:00, понедельник выходной',
    links: {
      telegram: 'https://t.me/boxcut_placeholder',
      whatsapp: 'https://wa.me/70000000000',
      phone: 'tel:+79101625895'
    }
  };
```

Первая строка файла — комментарий «Значения — заглушки» — оставить: адрес, Telegram, WhatsApp остаются заглушками.

- [ ] **Step 2: `index.html` — head и ссылки**

`Edit` (по одному):
- `<title>Barber Club — барбершоп: стрижки, борода, бритьё по записи</title>` → `<title>BOX cut — мужские стрижки: модельные, fade, борода, тонировка</title>`
- содержимое `<meta name="description" …>` → `BOX cut — мужские стрижки: модельные, fade, борода, тонировка. Два мастера, запись онлайн в Telegram или WhatsApp. Вт–Вс с 11:00 до 20:00.`
- `replace_all`: `https://t.me/barberclub_placeholder` → `https://t.me/boxcut_placeholder`
- `replace_all`: `tel:+70000000000` → `tel:+79101625895`
- `+7 000 000 00 00` → `8 910 162-58-95`

- [ ] **Step 3: `index.html` — бренд в hero и футере**

Пояснить: заменяем текстовый вордмарк картинкой-логотипом в двух местах.

В hero заменить блок (`Edit`, строки внутри `.hero__head`):

```html
        <a class="brand" href="#top" aria-label="BOX cut — на главную">
          <img class="brand__logo" src="assets/brand/logo-white.png" width="512" height="512" alt="BOX cut — мужские стрижки">
        </a>
```

В футере — тот же блок с `href="#top"` и без `aria-label` не нужен: оставить `aria-label="BOX cut — на главную"`.

- [ ] **Step 4: `index.html` — hero-текст и фото**

```html
      <img class="hero__img" src="assets/interior/chair-front.jpg" width="960" height="1280" alt="Синее барберское кресло под светильниками в форме сот" fetchpriority="high">
```
```html
        <h1 class="hero__title">BOX cut<br>мужские стрижки</h1>
        <p class="hero__subtitle">Стрижки, борода и тонировка по записи. Работаем со вторника по воскресенье, с 11:00 до 20:00.</p>
```

Размеры `width`/`height` сверить с выводом Task 1 для `chair-front.jpg` и подставить фактические.

- [ ] **Step 5: `index.html` — галерея**

Метка: `<span class="tag">#BarberClubLive</span>` → `<span class="tag">#BOXcutLive</span>`.

Три плитки заменить целиком:

```html
          <article class="gallery__tile">
            <img class="gallery__img" src="assets/interior/chair-mirror.jpg" width="960" height="1280" alt="Рабочее место мастера: синее барберское кресло и зеркало" loading="lazy">
            <h3 class="gallery__title">Рабочее место мастера</h3>
          </article>
          <article class="gallery__tile">
            <img class="gallery__img" src="assets/interior/hall-lights.jpg" width="960" height="1280" alt="Зал барбершопа: светильники-соты, синее кресло и диван" loading="lazy">
            <h3 class="gallery__title">Светлый зал без теней</h3>
          </article>
          <article class="gallery__tile">
            <img class="gallery__img" src="assets/interior/tools.jpg" width="960" height="1280" alt="Машинки, ножницы и расчёски на столе мастера" loading="lazy">
            <h3 class="gallery__title">Инструмент под рукой</h3>
          </article>
```

- [ ] **Step 6: `index.html` — контакты**

Заменить карточку адреса и часов (внутри `.contacts__grid`, первые две `article`):

```html
        <article class="contact-card">
          <span class="tag tag--small">Адрес</span>
          <img class="contact-card__photo" src="assets/interior/facade.jpg" width="960" height="1280" alt="Вход в BOX cut: вывеска «Мужские стрижки» над стеклянной дверью" loading="lazy">
          <p class="contact-card__main">ул. Примерная, 1</p>
          <div class="contact-card__actions">
            <a class="btn btn--small btn--outline" href="#contacts">Построить маршрут</a>
          </div>
        </article>
        <article class="contact-card">
          <span class="tag tag--small">Часы работы</span>
          <p class="contact-card__main">Вт–Вс<br>с 11:00 до 20:00</p>
          <p class="contact-card__note">Понедельник — выходной. В нерабочее время запись возможна по телефону.</p>
        </article>
```

Промо-текст `promo__text` оставить. Футер: `footer__legal-entity` оставить (заглушка реквизитов).

- [ ] **Step 7: CSS**

`css/layout.css`: заголовок-комментарий → `/* Общие блоки: контейнер, кнопка .btn, зелёная метка .tag, логотип .brand */`; удалить правила `.brand__mark`, `.brand__tagline` (в т.ч. внутри `@media (max-width: 650px)`), блок `.stripes::after` и комментарий над ним. Добавить после `.brand {…}`:

```css
.brand__logo {
  width: auto;
  height: calc(var(--spacing-xl) * 0.8);
}
```
В `@media (max-width: 650px)` (там, где был `.brand__mark`):
```css
  .brand__logo {
    height: calc(var(--spacing-xl) * 0.55);
  }
```

`css/hero.css`: удалить в `@media (max-width: 650px)` правило `.brand__tagline { display: none; }`. Первая строка-комментарий: убрать «справа фото-заглушка с зелёными полосами» → «справа фото интерьера».

`css/footer.css`: правило `.footer .brand__mark {…}` заменить на:
```css
.footer .brand__logo {
  height: calc(var(--spacing-xl) * 0.7);
}
```

`css/contacts.css`: после `.contact-card .tag {…}` добавить:

```css
.contact-card__photo {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-sm);
  object-fit: cover;
}
```

- [ ] **Step 8: Удалить демо-фото**

Пояснить пользователю: демо-файлы borodach.com больше не нужны, ссылок на них в `index.html` не осталось (проверка ниже); удаление необратимо, но фото чужие и лежат на borodach.com.

Run: `cd /Users/administrator/Barber && grep -c "assets/hero.jpg\|assets/gallery-" index.html` → Expected: `0`
Затем: `rm assets/hero.jpg assets/gallery-1.jpg assets/gallery-2.jpg assets/gallery-3.jpg`

- [ ] **Step 9: Проверка**

Run: `cd /Users/administrator/Barber && grep -rniE 'barber ?club|barberclub|borodach|бородач' index.html js css | grep -v '^css.*design'` → Expected: пусто.
Run: `python3 -m http.server 8080` в фоне; Playwright на `http://localhost:8080/index.html`, 1920×1080 и 360×800; выполнить `browser_evaluate`:

```js
() => ({
  hScroll: document.documentElement.scrollWidth > innerWidth,
  h1: document.querySelectorAll('h1').length,
  broken: (document.images.forEach(i => i.loading = 'eager'), [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src)),
  logo: !!document.querySelector('.brand__logo') && document.querySelector('.brand__logo').naturalWidth
})
```
Expected: `hScroll false`, `h1 1`, `broken []`, `logo 512`. Скриншот viewport 1920: логотип виден в шапке, hero с креслом читается, текст не перекрыт.

---

### Task 3: Реальные услуги на главной

**Files:**
- Modify: `index.html` (блок `#services`)
- Create: `$S/site_tools.py` (часть `SERVICES`, `check_index`)

**Interfaces:**
- Produces: в `site_tools.py` — `SERVICES: list[tuple[str, int, int|None]]` (название, цена Антона, цена Никиты или `None`), `rub(n) -> str` («1 500 ₽»), `main_price(a, n) -> str`, `check_index() -> None` (assert по `index.html`). Task 5 дописывает в этот же файл сборщик.

- [ ] **Step 1: Создать `$S/site_tools.py` с данными и проверкой**

```python
# $S/site_tools.py
import html
import re
import sys
from pathlib import Path
from PIL import Image

ROOT = Path('/Users/administrator/Barber')
PHONE_TXT, PHONE_HREF = '8 910 162-58-95', 'tel:+79101625895'

# (название, цена Антона, цена Никиты или None — Никита услугу не делает / цена не видна)
# ⚠️ Названия комбо на скриншотах yclients обрезаны; «+ моделирование бороды» — догадка (docs/content.md)
SERVICES = [
    ('Модельная мужская стрижка', 1500, 1200),
    ('Удлинённая мужская стрижка', 1700, None),
    ('Детская стрижка (6–12 лет)', 1200, 1000),
    ('Стрижка машинкой (fade)', 1200, 1000),
    ('Стрижка машинкой (2 насадки)', 600, None),
    ('Моделирование бороды', 1000, 1000),
    ('Коррекция бороды (щетины)', 600, None),
    ('Окантовка триммером', 300, None),
    ('Укладка', 400, None),
    ('Удаление волос воском', 200, 200),
    ('Тонировка бороды (щетины)', 1000, 1000),
    ('Тонировка волос', 1000, 1000),
    ('Модельная стрижка + моделирование бороды', 2400, None),
    ('Удлинённая стрижка + моделирование бороды', 2600, None),
    ('Стрижка машинкой (fade) + моделирование бороды', 2200, None),
]


def rub(n):
    return f'{n:,}'.replace(',', ' ') + ' ₽'


def main_price(a, n):
    if a and n and a != n:
        return 'от ' + rub(min(a, n))
    return rub(a or n)


def row(name, price):
    return f'<li class="service"><h3 class="service__name">{name}</h3><span class="service__price">{price}</span></li>'


def check_index():
    text = (ROOT / 'index.html').read_text(encoding='utf-8')
    for name, a, n in SERVICES:
        want = row(name, main_price(a, n))
        assert want in text, f'index.html: нет строки {want}'
    print('index.html: цены совпадают с SERVICES (%d строк)' % len(SERVICES))


if __name__ == '__main__':
    if sys.argv[1:] == ['check']:
        check_index()
```

- [ ] **Step 2: Запустить проверку — она должна упасть**

Run: `python3 $S/site_tools.py check`
Expected: `AssertionError: index.html: нет строки <li class="service">…Модельная мужская стрижка…` (на главной ещё старые 6 услуг).

- [ ] **Step 3: Заменить список услуг**

В `index.html` заменить всё содержимое `<ul class="services__list"> … </ul>` (шесть старых `<li class="service">`) на 15 строк ровно в этом формате (по одной строке на услугу):

```html
        <ul class="services__list">
          <li class="service"><h3 class="service__name">Модельная мужская стрижка</h3><span class="service__price">от 1 200 ₽</span></li>
          <li class="service"><h3 class="service__name">Удлинённая мужская стрижка</h3><span class="service__price">1 700 ₽</span></li>
          <li class="service"><h3 class="service__name">Детская стрижка (6–12 лет)</h3><span class="service__price">от 1 000 ₽</span></li>
          <li class="service"><h3 class="service__name">Стрижка машинкой (fade)</h3><span class="service__price">от 1 000 ₽</span></li>
          <li class="service"><h3 class="service__name">Стрижка машинкой (2 насадки)</h3><span class="service__price">600 ₽</span></li>
          <li class="service"><h3 class="service__name">Моделирование бороды</h3><span class="service__price">1 000 ₽</span></li>
          <li class="service"><h3 class="service__name">Коррекция бороды (щетины)</h3><span class="service__price">600 ₽</span></li>
          <li class="service"><h3 class="service__name">Окантовка триммером</h3><span class="service__price">300 ₽</span></li>
          <li class="service"><h3 class="service__name">Укладка</h3><span class="service__price">400 ₽</span></li>
          <li class="service"><h3 class="service__name">Удаление волос воском</h3><span class="service__price">200 ₽</span></li>
          <li class="service"><h3 class="service__name">Тонировка бороды (щетины)</h3><span class="service__price">1 000 ₽</span></li>
          <li class="service"><h3 class="service__name">Тонировка волос</h3><span class="service__price">1 000 ₽</span></li>
          <li class="service"><h3 class="service__name">Модельная стрижка + моделирование бороды</h3><span class="service__price">2 400 ₽</span></li>
          <li class="service"><h3 class="service__name">Удлинённая стрижка + моделирование бороды</h3><span class="service__price">2 600 ₽</span></li>
          <li class="service"><h3 class="service__name">Стрижка машинкой (fade) + моделирование бороды</h3><span class="service__price">2 200 ₽</span></li>
        </ul>
        <p class="services__note">Цены у мастеров могут отличаться: точный прайс — на странице Антона и Никиты.</p>
```

- [ ] **Step 4: Стиль примечания**

В `css/services.css` после `.service__price {…}` добавить:

```css
.services__note {
  margin-top: var(--spacing-md);
  color: color-mix(in srgb, var(--color-inverse-on-surface) 60%, transparent);
  font-size: var(--font-label-md-size);
  text-align: center;
}
```

Класс `.service__name` без обёртки `<div>`: проверить, что название и цена в строке выровнены (flex `space-between` в `.service`).

- [ ] **Step 5: Проверка**

Run: `python3 $S/site_tools.py check` → Expected: `index.html: цены совпадают с SERVICES (15 строк)`.
Playwright 1440 и 360: `hScroll false`; названия не вылезают из строки (длинные комбо переносятся, цена не сжимается — у `.service__price` уже `flex: none; white-space: nowrap`).

---

### Task 4: Блок «Мастера» на главной

**Files:**
- Modify: `index.html` (секция `#masters`)
- Modify: `css/masters.css` (перезаписать целиком — файл 59 строк, меняется больше половины)

**Interfaces:**
- Consumes: `assets/anton/portrait.jpg`, `assets/nikita/portrait.jpg` (Task 1).
- Produces: разметка карточки `.master-card > a.master-card__link > (.master-card__photo > img.master-card__img) + .master-card__body(h3.master-card__name, p.master-card__role, span.master-card__more)`; модификатор `.masters__list--single`. Сборщик (Task 5) генерирует ровно такую же карточку.

- [ ] **Step 1: Разметка**

Заменить содержимое `<ul class="masters__list"> … </ul>` (три заглушки):

```html
        <ul class="masters__list">
          <li class="master-card">
            <a class="master-card__link" href="anton.html">
              <div class="master-card__photo"><img class="master-card__img" src="assets/anton/portrait.jpg" width="1032" height="1280" alt="Антон, владелец и барбер BOX cut" loading="lazy"></div>
              <div class="master-card__body">
                <h3 class="master-card__name">Антон</h3>
                <p class="master-card__role">Владелец, барбер</p>
                <span class="master-card__more">Подробнее</span>
              </div>
            </a>
          </li>
          <li class="master-card">
            <a class="master-card__link" href="nikita.html">
              <div class="master-card__photo"><img class="master-card__img" src="assets/nikita/portrait.jpg" width="960" height="1280" alt="Никита, барбер и партнёр BOX cut" loading="lazy"></div>
              <div class="master-card__body">
                <h3 class="master-card__name">Никита</h3>
                <p class="master-card__role">Барбер, партнёр</p>
                <span class="master-card__more">Подробнее</span>
              </div>
            </a>
          </li>
        </ul>
```

`width`/`height` сверить с выводом Task 1.

- [ ] **Step 2: Меню и футер**

В `index.html` пункты «Мастера» остаются на `#masters` — так и надо, блок есть на главной. Ничего не менять.

- [ ] **Step 3: Переписать `css/masters.css`**

Пояснить: переписываем файл целиком — исчезают заглушка с полосами и горизонтальный ряд для трёх карточек, появляется сетка из двух.

```css
/* Мастера: две карточки-ссылки на страницы мастеров */

.masters__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-md);
  max-width: calc(var(--spacing-xl) * 7);
  margin-inline: auto;
}

/* Одна карточка (блок «второй мастер» на страницах мастеров) */
.masters__list--single {
  grid-template-columns: minmax(0, 1fr);
  max-width: calc(var(--spacing-xl) * 3.5);
}

.master-card {
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-on-primary-fixed-variant);
}

.master-card__link {
  display: block;
  height: 100%;
}

.master-card__photo {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--color-surface-container);
}

.master-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-base) var(--easing-standard);
}

.master-card__body {
  padding: var(--spacing-md);
}

.master-card__name {
  font-family: var(--font-headline-md-family);
  font-size: var(--font-headline-md-size);
  font-weight: var(--font-headline-md-weight);
}

.master-card__role {
  margin-top: var(--spacing-xs);
  color: color-mix(in srgb, var(--color-inverse-on-surface) 60%, transparent);
  font-size: var(--font-label-md-size);
}

.master-card__more {
  display: inline-block;
  margin-top: var(--spacing-sm);
  font-size: var(--font-label-md-size);
  font-weight: var(--font-label-md-weight);
  text-decoration: underline;
  text-underline-offset: var(--spacing-xs);
}

@media (hover: hover) {
  .master-card__link:hover .master-card__img {
    transform: scale(1.03);
  }
}

@media (max-width: 650px) {
  .masters__list {
    gap: var(--spacing-sm);
  }

  .master-card__body {
    padding: var(--spacing-sm);
  }

  .master-card__name {
    font-size: var(--font-body-md-size);
  }
}
```

- [ ] **Step 4: Проверка**

Run: `grep -rn "stripes" /Users/administrator/Barber/index.html /Users/administrator/Barber/css` → Expected: пусто.
Playwright 1440 и 360, скролл к `#masters`: две карточки в ряд, фото не искажены (`object-fit: cover`), `hScroll false`. Скриншот viewport на 1440.
Клик по карточке ведёт на `anton.html` (страница появится в Task 5; сейчас ожидается 404 — это нормально).

---

### Task 5: CSS страниц мастеров и страница Антона

**Files:**
- Create: `css/master-page.css`, `css/photos.css`
- Modify: `$S/site_tools.py` (добавить сборщик)
- Create (генерируется): `anton.html`

**Interfaces:**
- Consumes: `SERVICES`, `rub`, `row`, `PHONE_TXT/HREF` (Task 3); карточка `.master-card` и `.masters__list--single` (Task 4); шапка/контакты/футер/fab/drawer из `index.html` (Task 2); все фото Task 1.
- Produces: `build(key: str) -> None` (пишет `<key>.html` в корень проекта), словарь `MASTERS`; CLI `python3 site_tools.py build`. Task 6 добавляет в `MASTERS` запись `nikita`.

- [ ] **Step 1: `css/master-page.css`**

```css
/* Страница мастера: строка бренда, шапка с портретом, роль, имя, лид и запись */

.page-head__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-md);
}

.mhero {
  display: grid;
  grid-template-columns: 1fr minmax(0, calc(var(--spacing-xl) * 3.6));
  align-items: center;
  gap: var(--spacing-lg);
  padding-block: var(--spacing-lg) var(--spacing-xl);
}

.mhero__role {
  color: var(--color-on-surface-variant);
  font-family: var(--font-label-md-family);
  font-size: var(--font-label-md-size);
  font-weight: var(--font-label-md-weight);
  text-transform: uppercase;
}

.mhero__name {
  margin-top: var(--spacing-sm);
  font-family: var(--font-headline-xl-family);
  font-size: calc(var(--font-headline-xl-size) * 1.6);
  font-weight: var(--font-headline-xl-weight);
  line-height: var(--font-headline-xl-line-height);
  letter-spacing: var(--font-headline-xl-letter-spacing);
  text-transform: uppercase;
}

.mhero__lead {
  max-width: calc(var(--spacing-xl) * 4.5);
  margin-top: var(--spacing-md);
  font-family: var(--font-body-lg-family);
  font-size: var(--font-body-lg-size);
  line-height: 1.3;
}

.mhero__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.mhero__phone {
  font-family: var(--font-headline-md-family);
  font-size: var(--font-headline-md-size);
  font-weight: var(--font-headline-md-weight);
}

.mhero__photo {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-surface-container);
}

.mhero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Белая панель без наезжающей промо-карточки: верхний отступ меньше */
.panel--flat {
  padding-top: var(--spacing-xl);
}

@media (hover: hover) {
  .mhero__phone:hover {
    text-decoration: underline;
  }
}

@media (max-width: 840px) {
  .mhero {
    grid-template-columns: 1fr;
  }

  .mhero__photo {
    order: -1;
    width: min(100%, calc(var(--spacing-xl) * 3.6));
  }

  .mhero__name {
    font-size: calc(var(--font-headline-xl-size) * 1.2);
  }
}

@media (max-width: 650px) {
  .mhero {
    gap: var(--spacing-md);
    padding-block: var(--spacing-md) var(--spacing-lg);
  }

  .mhero__name {
    font-size: var(--font-headline-xl-size);
  }

  .mhero__lead {
    font-size: var(--font-body-md-size);
  }

  .mhero__cta {
    margin-top: var(--spacing-md);
  }

  .panel--flat {
    padding-top: var(--spacing-lg);
  }
}
```

- [ ] **Step 2: `css/photos.css`**

```css
/* Сетка фото 3:4 (работы, интерьер): четыре колонки, на ≤840px — две */

.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-sm);
}

/* Две фото по центру (у мастера мало работ) */
.photo-grid--2 {
  grid-template-columns: repeat(2, minmax(0, calc(var(--spacing-xl) * 2.8)));
  justify-content: center;
}

.photo-grid__item {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-surface-container);
}

.photo-grid__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 840px) {
  .photo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

- [ ] **Step 3: Дописать сборщик в `$S/site_tools.py`**

Вставить перед `if __name__ == '__main__':` и заменить блок запуска:

```python
def img(src, alt, cls, lazy=True):
    w, h = Image.open(ROOT / src).size
    loading = ' loading="lazy"' if lazy else ''
    return f'<img class="{cls}" src="{src}" width="{w}" height="{h}" alt="{html.escape(alt, quote=True)}"{loading}>'


INTERIOR = [
    ('assets/interior/facade.jpg', 'Вход в BOX cut: вывеска «Мужские стрижки» над стеклянной дверью'),
    ('assets/interior/hall-lights.jpg', 'Зал барбершопа: светильники-соты, синее кресло и диван'),
    ('assets/interior/chair-sink.jpg', 'Кресло у стойки с мойкой и полкой с косметикой'),
    ('assets/interior/hall-window.jpg', 'Кресло и стойка у панорамного окна'),
]

# Тексты — временные, заменить своими (docs/content.md). Только факты из прайса и фото.
MASTERS = {
    'anton': dict(
        name='Антон', dative='Антону', role='Владелец, барбер', idx=1,
        title='Антон — владелец и барбер BOX cut',
        desc='Антон, владелец BOX cut: модельные и удлинённые стрижки, fade, борода, тонировка. Прайс, работы, запись онлайн.',
        lead='Владелец BOX cut. Сам стрижёт: модельные и удлинённые стрижки, fade, борода и тонировка. Полный прайс и работы — ниже.',
        portrait=('assets/anton/portrait.jpg', 'Антон, владелец и барбер BOX cut'),
        works_title='Работы',
        works=[
            ('assets/anton/work-1.jpg', 'Короткие виски, волосы зачёсаны назад, ухоженная борода'),
            ('assets/anton/work-2.jpg', 'Стрижка с чёлкой набок и короткими висками'),
            ('assets/anton/work-3.jpg', 'Классическая стрижка с зачёсом назад'),
            ('assets/anton/work-4.jpg', 'Стрижка с длиннее сверху и коротким низом, борода'),
            ('assets/anton/work-5.jpg', 'Кудрявые волосы средней длины, аккуратные виски'),
            ('assets/anton/work-6.jpg', 'Молодёжная стрижка с чёлкой'),
            ('assets/anton/client-1.jpg', 'Антон снимает результат стрижки вместе с клиентом'),
            ('assets/anton/client-2.jpg', 'Антон с клиентом в зале барбершопа'),
        ],
        other='nikita',
    ),
}


def card(key):
    m = MASTERS[key]
    src, alt = m['portrait']
    return (
        '<li class="master-card">'
        f'<a class="master-card__link" href="{key}.html">'
        f'<div class="master-card__photo">{img(src, alt, "master-card__img")}</div>'
        '<div class="master-card__body">'
        f'<h3 class="master-card__name">{m["name"]}</h3>'
        f'<p class="master-card__role">{m["role"]}</p>'
        '<span class="master-card__more">Подробнее</span>'
        '</div></a></li>'
    )


def photo_grid(items, cls='photo-grid'):
    lis = ''.join(
        f'<li class="photo-grid__item">{img(s, a, "photo-grid__img")}</li>' for s, a in items
    )
    return f'<ul class="{cls}">{lis}</ul>'


def between(text, start, end):
    i = text.index(start)
    j = text.index(end, i + len(start)) if end else len(text)
    return text[i:j]


def build(key):
    m = MASTERS[key]
    other = MASTERS[m['other']]
    index = (ROOT / 'index.html').read_text(encoding='utf-8')

    def local(chunk):  # ссылки шапки, меню и футера — на главную
        chunk = chunk.replace('href="#top"', 'href="index.html"')
        return re.sub(r'href="#(services|masters|contacts)"', r'href="index.html#\1"', chunk)

    topbar = local(between(index, '<!-- Верхняя полоса -->', '<!-- Главный экран -->'))
    contacts = between(index, '<!-- Контакты -->', '  </main>')
    tail = local(between(index, '<footer class="footer">', '</body>'))

    prices = ''.join(
        row(name, rub(a if key == 'anton' else n))
        for name, a, n in SERVICES
        if (a if key == 'anton' else n)
    )
    works = ''
    if m['works']:
        cls = 'photo-grid' if len(m['works']) > 2 else 'photo-grid photo-grid--2'
        works = (
            '<section class="panel__section container" id="works" aria-labelledby="works-title">'
            f'<h2 class="panel__title" id="works-title">{m["works_title"]}</h2>'
            f'{photo_grid(m["works"], cls)}</section>\n      '
        )
    src, alt = m['portrait']
    page = f'''<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{m["title"]}</title>
  <meta name="description" content="{m["desc"]}">
  <meta name="theme-color" content="#131313">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arimo:wght@700&family=Montserrat:wght@400;700&display=swap">
  <link rel="stylesheet" href="design/borodach.com/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/topbar.css">
  <link rel="stylesheet" href="css/master-page.css">
  <link rel="stylesheet" href="css/panel.css">
  <link rel="stylesheet" href="css/photos.css">
  <link rel="stylesheet" href="css/services.css">
  <link rel="stylesheet" href="css/masters.css">
  <link rel="stylesheet" href="css/contacts.css">
  <link rel="stylesheet" href="css/fab.css">
  <link rel="stylesheet" href="css/drawer.css">
  <link rel="stylesheet" href="css/footer.css">

  <script src="js/main.js" defer></script>
  <script src="js/config.js" defer></script>
  <script src="js/links.js" defer></script>
  <script src="js/drawer.js" defer></script>
</head>
<body>

  {topbar}<!-- Шапка мастера -->
  <header class="page-head" id="top">
    <div class="container page-head__bar">
      <a class="brand" href="index.html" aria-label="BOX cut — на главную">
        <img class="brand__logo" src="assets/brand/logo-white.png" width="512" height="512" alt="BOX cut — мужские стрижки">
      </a>
      <button class="burger" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="drawer" data-drawer-open>
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
      </button>
    </div>
    <div class="container mhero">
      <div class="mhero__text">
        <p class="mhero__role">{m["role"]}</p>
        <h1 class="mhero__name">{m["name"]}</h1>
        <p class="mhero__lead">{m["lead"]}</p>
        <div class="mhero__cta" id="booking">
          <a class="btn" href="https://t.me/boxcut_placeholder" data-link="telegram" target="_blank" rel="noopener">Записаться к {m["dative"]}</a>
          <a class="mhero__phone" href="{PHONE_HREF}" data-link="phone">{PHONE_TXT}</a>
        </div>
      </div>
      <div class="mhero__photo">{img(src, alt, "mhero__img", lazy=False)}</div>
    </div>
  </header>

  <main>
    <div class="panel panel--flat">
      <section class="panel__section services container" id="prices" aria-labelledby="prices-title">
        <h2 class="panel__title" id="prices-title">Прайс: {m["name"]}</h2>
        <ul class="services__list">{prices}</ul>
      </section>

      {works}<section class="panel__section container" id="interior" aria-labelledby="interior-title">
        <h2 class="panel__title" id="interior-title">Где мы работаем</h2>
        {photo_grid(INTERIOR)}
      </section>

      <section class="panel__section masters container" aria-labelledby="other-title">
        <h2 class="panel__title" id="other-title">Второй мастер</h2>
        <ul class="masters__list masters__list--single">{card(m["other"])}</ul>
      </section>
    </div>

    {contacts}  </main>

  {tail}</body>
</html>
'''
    (ROOT / f'{key}.html').write_text(page, encoding='utf-8')
    print(f'{key}.html записан ({len(page) // 1024} KB)')
```

Блок запуска в конце файла:

```python
if __name__ == '__main__':
    cmd = sys.argv[1:]
    if cmd == ['check']:
        check_index()
    elif cmd == ['build']:
        for k in MASTERS:
            build(k)
        check_index()
    else:
        sys.exit('usage: site_tools.py check|build')
```

Пояснить пользователю перед запуском: `build` создаёт `anton.html` в корне проекта и ничего существующего не перезаписывает (файла ещё нет; при повторных запусках перезаписывается только сгенерированный).

Ссылку `href="{key}.html"` в карточке внутри страницы мастера ведёт на второго мастера — `card(m["other"])` использует ключ другого, так и задумано.

- [ ] **Step 4: Собрать и проверить**

Run: `python3 $S/site_tools.py build`
Expected: `anton.html записан (… KB)` и строка `index.html: цены совпадают…`.
Run: `grep -c 'class="service"' /Users/administrator/Barber/anton.html` → Expected: `15`.
Run: `grep -o 'href="index.html[^"]*"' /Users/administrator/Barber/anton.html | sort | uniq -c` → Expected: есть `index.html`, `index.html#contacts`, `index.html#masters`, `index.html#services`; нет `href="#services"` / `#masters`.

- [ ] **Step 5: Playwright**

`http://localhost:8080/anton.html` на 1920 / 1440 / 768 / 360. `browser_evaluate`:

```js
() => ({
  hScroll: document.documentElement.scrollWidth > innerWidth,
  h1: document.querySelectorAll('h1').length,
  imgNoAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
  broken: (document.images.forEach(i => i.loading = 'eager'), [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src)),
  fonts: [...new Set([...document.querySelectorAll('body *')].map(e => getComputedStyle(e).fontFamily.split(',')[0]))],
  services: document.querySelectorAll('.service').length,
  works: document.querySelectorAll('#works .photo-grid__item').length
})
```
Expected: `hScroll false`, `h1 1`, `imgNoAlt 0`, `broken []`, `services 15`, `works 8`. Скриншоты viewport: 1440 (шапка с портретом), 360 (портрет над текстом). Клик по «Подробнее» в блоке «Второй мастер» ведёт на `nikita.html` (404 до Task 6).
Проверить: бренд и пункты меню ведут на главную; кнопка «Записаться к Антону» — рабочая ссылка `t.me/boxcut_placeholder`.

- [ ] **Step 6: Тексты**

Прочитать `lead` и alt-тексты в `MASTERS['anton']`, сверить с навыками `zhivoy-tekst` и `prodayushchie-smysly` (без штампов, без выдуманных фактов) и с фото; при правке поменять в `site_tools.py` и запустить `build` заново.

---

### Task 6: Страница Никиты, документация, финальная проверка

**Files:**
- Modify: `$S/site_tools.py` (добавить `nikita`, обновить `anton.other` не нужно)
- Create (генерируется): `nikita.html`
- Modify: `docs/decisions.md`, `docs/content.md`, `docs/structure.md`, `docs/pages.md`, `docs/testing.md`, `CLAUDE.md`, `_plans/barber-site.md`, `docs/superpowers/specs/2026-09-25-box-cut-masters-design.md`

**Interfaces:**
- Consumes: `MASTERS`, `build` (Task 5).
- Produces: `nikita.html`; обновлённая документация.

- [ ] **Step 1: Добавить Никиту в `MASTERS`**

В словарь `MASTERS` добавить после записи `anton` (в конец, перед закрывающей `}`):

```python
    'nikita': dict(
        name='Никита', dative='Никите', role='Барбер, партнёр', idx=2,
        title='Никита — барбер и партнёр BOX cut',
        desc='Никита, барбер и партнёр BOX cut: модельные стрижки, fade, детские стрижки, борода, тонировка. Прайс, запись онлайн.',
        lead='Партнёр и барбер BOX cut. Делает модельные и детские стрижки, fade, моделирует и тонирует бороду. Прайс — ниже.',
        portrait=('assets/nikita/portrait.jpg', 'Никита, барбер и партнёр BOX cut'),
        works_title='В работе',
        works=[
            ('assets/nikita/at-work.jpg', 'Никита стрижёт клиента ножницами у входа в барбершоп'),
            ('assets/nikita/night.jpg', 'Никита на фоне ночного города'),
        ],
        other='anton',
    ),
```

`idx` в шаблоне не используется — можно не указывать; оставить, если уже есть у Антона, иначе убрать из обеих записей для единообразия.

- [ ] **Step 2: Прайс Никиты — предупреждение**

Прайс Никиты берётся из столбца `n` (7 услуг: модельная 1 200, детская 1 000, fade 1 000, моделирование бороды 1 000, воск 200, тонировка бороды 1 000, тонировка волос 1 000). Комбо у него не показываем (данных нет).

- [ ] **Step 3: Собрать и проверить**

Run: `python3 $S/site_tools.py build` → Expected: `anton.html записан`, `nikita.html записан`, `цены совпадают`.
Run: `grep -c 'class="service"' /Users/administrator/Barber/nikita.html` → Expected: `7`.
Run: `grep -c 'photo-grid__item' /Users/administrator/Barber/nikita.html` → Expected: `6` (2 работы + 4 интерьера).
Playwright на `nikita.html` — тот же `browser_evaluate` из Task 5 с `services: 7`, `works: 2`; 1440 и 360: две фото по центру, `hScroll false`. Клик «Подробнее» на странице Никиты ведёт на `anton.html`, на Антоне — на Никиту.

- [ ] **Step 4: Общая проверка (все три страницы)**

```bash
cd /Users/administrator/Barber
# цвета в обход токенов — пусто
grep -nE '#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(' css/*.css
# px вне допустимых — смотреть глазами (1px, @media, компоненты из CLAUDE.md допустимы)
grep -nE '[0-9]+px' css/*.css | grep -vE '\b1px\b|@media'
# шрифты в обход токенов — пусто
grep -nE 'font-family:\s*[^v]' css/*.css
# inline-стили — пусто
grep -nE 'style=|<style' index.html anton.html nikita.html
# запрещённое и остатки — пусто
grep -rniE 'borodach|бородач|club group|224 000|barber ?club|barberclub|assets/hero|assets/gallery-' index.html anton.html nikita.html js css
# ссылки из html на несуществующие файлы
for f in index.html anton.html nikita.html; do grep -oE '(src|href)="(assets|css|js)/[^"]+"' $f | sed -E 's/^[a-z]+="//;s/"$//' | sort -u | while read p; do [ -f "$p" ] || echo "MISSING in $f: $p"; done; done
```
Expected: все команды кроме второй (разбор глазами) пусты; `MISSING` нет. Playwright: `prefers-reduced-motion` и отключённый JS на `anton.html` — страница читается, пункты меню в topbar видны. Проверить `Tab`: контур фокуса виден на карточке мастера.

- [ ] **Step 5: Документация**

Пояснить пользователю: правим только `docs`, `CLAUDE.md`, `_plans` и спеку; смысл — зафиксировать решения и заглушки.

`docs/decisions.md` — в таблицу «Решения пользователя» добавить:

```
| 7 | Объём (изм. 25.09.2026) | Три страницы: `index.html`, `anton.html`, `nikita.html` | Прямая просьба: детальные страницы мастеров. Заменяет решение №1 |
| 8 | Бренд (изм. 25.09.2026) | BOX cut: логотип, часы Вт–Вс 11–20, телефон 8-910-162-58-95 | Пользователь дал логотип и афишу. Заменяет решение №2; выбран «полный перевод» |
| 9 | Цены | Главная: «от» там, где у мастеров цены различаются; личные прайсы — на страницах мастеров | В yclients цены личные (Антон 1 500, Никита 1 200 за модельную) |
| 10 | Роли | Антон — «Владелец, барбер», Никита — «Барбер, партнёр» | Со слов пользователя: хозяин-работник и коллега-партнёр |
```

В «Решения агента» добавить строки: `Демо-фото borodach.com удалены, сайт на своих фото (снимает решение №29)` · `Страницы мастеров собираются скриптом из общего шаблона и словаря цен, скрипт вне проекта` · `Логотип — белая версия на прозрачном фоне, сделана из оригинального JPG` · `Общий css/photos.css для работ и интерьера`. Строки №1, №2 и №29 пометить `(заменено, см. №7, №8)` / `(заменено: фото свои)`.

`docs/content.md` — заменить таблицу заглушек: Название → BOX cut (реально); Телефон/часы → реальные (с афиши); **заглушки:** адрес `ул. Примерная, 1` (город не указан), Telegram / WhatsApp / VK, реквизиты, юридические ссылки, «Построить маршрут»; **временные тексты:** описания мастеров (`lead` в сборщике/на страницах), подписи плиток галереи; **данные под проверку:** названия комбо «+ моделирование бороды» (на скриншотах обрезаны), 16-я услуга Антона и 8-я Никиты не видны, комбо Никиты неизвестны, у Никиты тонировка выключена для онлайн-записи — показана как оказываемая; **нужно получить:** город и адрес, мессенджеры, реальные тексты про мастеров, **фото работ Никиты**, согласие клиентов на публикацию лиц. Убрать строки про демо-фото borodach.com и «фото мастеров — заглушки».

`docs/structure.md` — добавить `anton.html`, `nikita.html`, `css/master-page.css`, `css/photos.css`, `assets/brand|interior|anton|nikita/`, `docs/superpowers/{specs,plans}/`; убрать `assets/hero.jpg…`; исправить «единственная страница» → «главная»; `gallery.css` — метка `#BOXcutLive`.

`docs/pages.md` — блок «4в Мастера»: две карточки-ссылки; hero — фото интерьера; добавить раздел «Страницы мастеров» (шапка с портретом, прайс, работы, интерьер, второй мастер, контакты); контакты — новые часы.

`docs/testing.md` — в чеклист: три страницы вместо одной (`index.html`, `anton.html`, `nikita.html`), в grep-блок добавить `anton.html nikita.html` и проверку `MISSING`.

`CLAUDE.md` — заголовок и вступление → BOX cut; таблица «Карта сайта»: `#masters` — «две карточки со ссылками на страницы», добавить строки `anton.html`, `nikita.html`; правило №5 — убрать исключение про демо-фото; секция «⚠️ Что временное» — вместо демо-фото: «фото мастеров и работ — реальные, лица клиентов: получить согласие»; адрес, мессенджеры, тексты про мастеров — заглушки; «Одностраничный сайт» → «Сайт из трёх страниц (главная и две страницы мастеров)»; стек-блок: `master-page.css`, `photos.css`.

`_plans/barber-site.md` — добавить чеклист «BOX cut и мастера»: Task 1–6 из этого плана, отмеченные `[x]`.

Спека `docs/superpowers/specs/2026-09-25-box-cut-masters-design.md`: заменить `master-page.css / works.css / interior.css` → `master-page.css / photos.css`; «7 фото работ» → «6 работ и 2 кадра с клиентом»; в таблице цен добавить пометку о правиле «от».

- [ ] **Step 6: Финальная проверка и остановка сервера**

Playwright: три страницы × 4 ширины (1920 / 1440 / 768 / 360), `browser_evaluate` из Task 5; всего 12 результатов, везде `hScroll false`, `broken []`. Ключевые скриншоты (viewport): главная 1440 (hero + мастера), `anton.html` 1440, `nikita.html` 360.
Остановить `python3 -m http.server`. Итог пользователю: 3–5 строк — что готово, список заглушек и открытых вопросов из `docs/content.md`.

---

## Self-Review

**Покрытие спеки.** Бренд, часы, телефон — Task 2. Услуги и цены — Task 3. Блок мастеров — Task 4. Страницы мастеров, фото, `photos.css`, мобильная раскладка — Task 5–6. Обработка фото и логотип — Task 1. Проверка (4 ширины, grep, 404, alt) — Task 2/5/6. Документация и решения — Task 6. Открытые вопросы — `docs/content.md`. Вне объёма ничего не добавлено.

**Плейсхолдеры.** Нет: тексты, код и команды приведены. Единственная ручная сверка — фактические `width`/`height` картинок в Task 2/4 из вывода Task 1 (в Task 5 сборщик берёт размеры сам).

**Согласованность имён.** `SERVICES`, `rub`, `row`, `main_price`, `check_index`, `img`, `card`, `photo_grid`, `build`, `MASTERS` — определены до использования. Классы: `.brand__logo` (Task 2 → 5), `.master-card__link/__img/__more`, `.masters__list--single` (Task 4 → 5), `.photo-grid`, `.photo-grid--2`, `.photo-grid__item/__img` (Task 5), `.page-head__bar`, `.mhero*`, `.panel--flat` (Task 5). Размеры фото в `index.html` (Task 4) и сборщике совпадают, потому что берутся из одних файлов.
