# Проверка

## Локальный сервер

```bash
cd /Users/administrator/Barber && python3 -m http.server 8080
# http://localhost:8080/index.html, anton.html, nikita.html
```

Запускать в фоне, после проверки остановить.

## Playwright (MCP) — чеклист

Ширины: **1920×1080 · 1440×900 · 768×1024 · 360×800**. Сверять со
`design/borodach.com/raw/screenshots/borodach.com-{desktop,laptop,tablet,mobile}.png`.

Каждую из трёх страниц (`index.html`, `anton.html`, `nikita.html`) проверять на всех четырёх
ширинах. Один `browser_evaluate` на ширину, возвращающий объект (на странице мастера добавить
`services` и `.photo-grid__item`: Антон 15 и 12 (8 работ + 4 интерьера), Никита 7 и 6 (2 + 4)). `document.images` — не массив, для `forEach`
нужен `[...document.images]`:

```js
() => ({
  hScroll: document.documentElement.scrollWidth > innerWidth,   // должно быть false
  h1: document.querySelectorAll('h1').length,                    // 1
  imgNoAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length, // 0
  fonts: [...new Set([...document.querySelectorAll('body *')].map(e => getComputedStyle(e).fontFamily.split(',')[0]))],
  fab: getComputedStyle(document.querySelector('.fab')).display,  // none на ≤768
  topbar: getComputedStyle(document.querySelector('.topbar')).display, // none на ≤650
})
```

Интерактив:
- [ ] Бургер (≤650): drawer выезжает, Esc / крестик / клик по пункту закрывают, фокус возвращается.
- [ ] Якорные ссылки прокручивают к секциям.
- [ ] Плавающая кнопка: видна >768, скрыта ≤768, ведёт на `#booking`, кольцо пульсирует.
- [ ] Кнопки Telegram / WhatsApp ведут на ссылки из `config.js`.
- [ ] Hover: CTA темнеет, ссылки topbar подчёркиваются.
- [ ] Tab показывает контур фокуса.
- [ ] `prefers-reduced-motion` (`browser_emulate_media`) — пульса и slide нет.
- [ ] JS отключён: страница читается, кнопки записи — рабочие ссылки.

## Grep на хардкод

```bash
cd /Users/administrator/Barber
# цвета в обход токенов — должно быть пусто
grep -nE '#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(' css/*.css
# px вне допустимых — смотреть глазами: 1px, @media, размеры компонентов из CLAUDE.md допустимы
grep -nE '[0-9]+px' css/*.css | grep -vE '\b1px\b|@media'
# шрифты в обход токенов
grep -nE 'font-family:\s*[^v]' css/*.css
# inline-стили и <style>
grep -nE 'style=|<style' index.html anton.html nikita.html
# запрещённые слова и остатки старого бренда — должно быть пусто
grep -rniE 'borodach|бородач|club group|224 000|barber ?club|assets/hero|assets/gallery-' index.html anton.html nikita.html js/ css/
# ссылки на несуществующие файлы — должно быть пусто
for f in index.html anton.html nikita.html; do grep -oE '(src|href)="(assets|css|js)/[^"]+"' $f | sed -E 's/^[a-z]+="//;s/"$//' | sort -u | while read p; do [ -f "$p" ] || echo "MISSING in $f: $p"; done; done
```
