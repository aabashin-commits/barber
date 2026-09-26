# Дизайн-система

Первоисточник — `design/borodach.com/DESIGN.md` и `tokens.css`. Здесь — выжимка, чтобы не
читать 16 КБ заново.

## Цвета (роли)

| Роль | Токен | Значение | Где |
|---|---|---|---|
| Фон страницы | `--color-background` | #131313 | body, hero, футер |
| Верхняя полоса, карточки | `--color-surface-container` | #161616 | topbar, промо-карточка |
| Границы, тёмные чипы | `--color-surface-container-high` | #2d2a2a | линии, плитки-заглушки |
| Акцент | `--color-primary` | #5cae5d | CTA, метка, мессенджеры, FAB |
| Акцент, конец градиента | `--color-primary-container` | #428843 | градиент, hover |
| Текст на тёмном | `--color-on-background` | #ffffff | заголовки, основной текст |
| Приглушённый текст | `--color-on-surface-variant` | #7a7a7a | ссылки topbar |
| Белая панель | `--color-inverse-surface` | #ffffff | панель, drawer |
| Текст на белом | `--color-inverse-on-surface` | #000000 | тексты в панели |
| Светлые контролы на белом | `--color-on-primary-fixed-variant` | #f3f3f3 | плитки цен, карточки мастеров |

## Типографика

| Роль | Токен | Размер | Где |
|---|---|---|---|
| Заголовок XL | `--font-headline-xl-*` | 45px/700 | h1 hero, «МОБИЛЬНОЕ…» заменено на заголовок промо |
| Заголовок LG | `--font-headline-lg-*` | 35px/700 | заголовки секций |
| Заголовок MD | `--font-headline-md-*` | 18px/700 | названия услуг, мастеров |
| Основной | `--font-body-lg-*`, `--font-body-md-*` | 18 / 16px | подзаголовок, абзацы |
| Кнопки | `--font-label-md-*` | 14px/700 | CTA, uppercase |
| Мелкий | `--font-label-sm-*` | 12px/400 | topbar, подписи |

Заголовки и кнопки — UPPERCASE через `text-transform`. На ≤840px h1 уменьшается: 45→25px,
`h2` 35→30 (≤930) → 16 (≤650) — через `clamp()`, а не набором медиазапросов.

## Компоненты (кратко)

- **CTA «ЗАПИСАТЬСЯ ОНЛАЙН»:** 302×72, фон `--color-primary`, радиус `--radius-md`, текст
  `--font-label-md`, uppercase, по центру. Hover цвета не меняет — только `--color-primary-container`
  через `--duration-fast` (осознанное усиление отзывчивости, см. decisions.md).
- **Плавающая кнопка:** круг 135px, `--radius-full`, справа-снизу `--spacing-lg`, пульсирующее кольцо
  (`::before`, 2s infinite). Скрыта на ≤768px.
- **Промо-карточка:** фон `--color-surface-container`, радиус `--radius-md`, наезжает на hero (50px)
  и на панель (90px = `--spacing-xl`); справа зелёные диагональные полосы.
- **Белая панель:** `--color-inverse-surface`, `--radius-xl`, отступ от краёв `--spacing-sm`.
- **Метка `#BARBERCLUBLIVE`:** зелёный фон, белый текст `--font-headline-xl-*`, поворот `-1deg`.
- **Плитки галереи:** без скругления, зазор `--spacing-card-gap` (1px).
- **Футер-карточка:** градиент `primary → primary-container`, радиус `--radius-sm`.
- **Drawer:** белый, справа, 340px (100% на ≤400px), пункты 16px.

## Допустимые литералы

См. таблицу в CLAUDE.md, раздел «Токены». Новые литералы — только с записью в decisions.md.
