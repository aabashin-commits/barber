---
name: Borodach
source: https://borodach.com/
extracted: 2026-09-24
colors:
  primary: '#5cae5d'
  on-primary: '#ffffff'
  primary-container: '#428843'
  on-primary-container: '#ffffff'
  secondary: '#7a7a7a'
  on-secondary: '#ffffff'
  secondary-container: '#2d2a2a'
  on-secondary-container: '#ffffff'
  tertiary: '#428843'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f3d20'
  on-tertiary-container: '#b7e2b8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  background: '#131313'
  on-background: '#ffffff'
  surface: '#131313'
  on-surface: '#ffffff'
  surface-variant: '#2d2a2a'
  on-surface-variant: '#7a7a7a'
  surface-tint: '#5cae5d'
  surface-dim: '#131313'
  surface-bright: '#3e3e3e'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#131313'
  surface-container: '#161616'
  surface-container-high: '#2d2a2a'
  surface-container-highest: '#3e3e3e'
  outline: '#7a7a7a'
  outline-variant: '#2d2a2a'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#000000'
  inverse-primary: '#5cae5d'
  primary-fixed: '#5cae5d'
  primary-fixed-dim: '#428843'
  on-primary-fixed: '#ffffff'
  on-primary-fixed-variant: '#f3f3f3'
typography:
  headline-xl:
    fontFamily: 'Helvetica'
    fontSize: 45px
    fontWeight: '700'
    lineHeight: '1.11'
    letterSpacing: 0em
  headline-lg:
    fontFamily: 'Helvetica'
    fontSize: 35px
    fontWeight: '700'
    lineHeight: '1.11'
    letterSpacing: 0em
  headline-md:
    fontFamily: 'FactorA'
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 'normal'
    letterSpacing: 0em
  body-lg:
    fontFamily: 'FactorA'
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 'normal'
    letterSpacing: 0em
  body-md:
    fontFamily: 'FactorA'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 'normal'
    letterSpacing: 0em
  label-md:
    fontFamily: 'FactorA'
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 'normal'
    letterSpacing: 0em
  label-sm:
    fontFamily: 'FactorA'
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 'normal'
    letterSpacing: 0em
spacing:
  base: 10px
  xs: 5px
  sm: 10px
  md: 20px
  lg: 40px
  xl: 90px
  layout-margin: 10px
  card-gap: 1px
motion:
  duration-fast: 0.25s
  duration-base: 0.3s
  easing-standard: ease
rounded:
  sm: 4px
  DEFAULT: 10px
  md: 10px
  lg: 30px
  xl: 30px
  full: 9999px
---

## Brand & Style

Borodach is a federal barbershop chain (a Club Group brand, est. 2015) and the page is a dark, photography-led brand poster with one loud accent: signal green `#5cae5d`. The mood is masculine and sporty: near-black `#131313` canvas, full-bleed portrait photography with green paint-stroke overlays, bold uppercase headlines, and a football-badge-style round "ЗАПИСАТЬСЯ" button. The single job of the page is to get a booking: the primary CTA, the app banner and the fixed round button all lead to it.

Design rule to keep: dark base, white text, green only for things you can act on or that carry the brand (CTA, labels, app buttons). Copy is in Russian, UPPERCASE for headings and buttons, sentence case for everything else.

## Colors

Rendered values, not CSS variables (the site declares 0 custom properties on `:root`). Body background is `#131313` (confidence high).

- **Primary `#5cae5d`** is the fill of the main CTA "ЗАПИСАТЬСЯ ОНЛАЙН" (`.borodach-btn.bg-green`), the app-store buttons, the `#BORODACHLIVE` label and the fixed round booking button. Text on it is always `#ffffff`. Contrast of white on this green is only about 2.7:1, so keep it for large or bold uppercase labels. Brand gradient: `linear-gradient(#5cae5d 0%, #428843 100%)` (`primary` to `primary-container`), used on the app promo cards.
- **Neutrals on the dark base:** `#131313` page, `#161616` top utility bar and mobile cards, `#2d2a2a` borders and dark chips, `#3e3e3e` text on light controls, `#7a7a7a` muted text and borders.
- **Muted text is white at 50% opacity** in the footer (quick links, legal links, company details, class `text-half`). On `#131313` it reads as about `#898989`. The top bar uses the flat `#7a7a7a` instead.
- **Inverse surface `#ffffff`** is the rounded white content panel that slides over the hero (the most-used color by area, score 2318) and the white mobile drawer; text on it is `#000000`, controls on it are `#f3f3f3` with `#3e3e3e` text.

**Derived roles (no direct evidence, do not treat as brand values):** `error*` (the site has no error UI; MD3 dark baseline placeholders), `tertiary` (= gradient end `#428843`), `tertiary-container`, `on-tertiary-container`, `surface-container-lowest` (`#0e0e0e`, darker than base), `surface-bright` (= `#3e3e3e`), `surface-dim`, `surface-container-low` (= base), `secondary` roles (site has no second accent; `#7a7a7a` and `#2d2a2a` are used as the supporting neutral), `on-primary-fixed-variant`, `primary-fixed-dim`. Third-party plugin colors such as `#049cdb` (table pagination hover) are ignored.

## Typography

Two families, both from rendered CSS (confidence high for the names, medium for which glyphs actually render):

- **FactorA** (custom, Regular 400 and Bold 700 loaded via `@font-face`; proprietary, substitute Montserrat in previews). Used for body, UI, menus and footer.
- **Helvetica, sans-serif** on display headings: hero `h1` and `#BORODACHLIVE` `h3` at 45px/700, line-height 49.95px (ratio 1.11), section title at 35px/700 (38.85px). All uppercase, white, tracking normal. Line-height ratio 1.11 is a site-wide rule for bold display sizes (16px→17.76px, 12px→13.32px, 10px→11.1px).
- Helvetica was identified by measurement (canvas `measureText` vs the rendered Range width), confidence high; on systems without Helvetica the stack falls back to Arial/sans-serif, so widths can differ slightly.
- Display sizes shrink with media queries: `h1` 45px → 25px at ≤840px (22px at ≤355px); `.f-35` 35px → 30px (≤930px) → 16px (≤650px) → 14px (≤430px) → 13px (≤378px); the `#BORODACHLIVE` label 45px → 16px at 360px.
- Sizes are set with utility classes named after the pixel value (`f-45`, `f-16`, `f-12`, `f-10`). Scale on the page: 45 / 35 / 18 / 16 / 14 / 12 / 11 / 10 px.
- Body `p` and links 18px/400 (hero subtitle "нашими услугами пользуются более 224 000 мужчин"), most frequent size 16px/400. Buttons 14px/700 uppercase. Top-bar links 12px/400; social text links 10px/700 uppercase.

## Layout & Spacing

- Content container is 1020px wide (x 450–1470 at 1920), text column starts at x 455. The top utility bar has its own wider 1156px container (x 382–1538) with 5px side padding.
- Spacing is a 5/10/20px scale set by utility classes (`pb-10`, `pb-20`, `mt-90`, padding `0 5px`). Large vertical gaps between sections: 41, 51, 142, 147px; the footer container starts 90px below the previous section.
- The layout is fixed-width and centered: at 1920 and 1440 the composition is identical (1010px content, 1156px top bar), only the side margins grow. Below 841px it becomes fluid with 20px side margins (768) and 10px (360).
- The white content panel (`.wrapper.bg-white`, starts at y 678) is inset 14px from each side of the viewport (x 14, width 1892 at 1920) and overlaps the bottom 90px of the app banner (y 571–768); the banner in turn overlaps the hero (ends y 621) by 50px. This gives the "sheet over photo" layering.
- Photo tiles in the `#BORODACHLIVE` grid sit edge to edge, about 1px apart (observed on the screenshot, confidence medium).
- Density: spacious.

## Elevation & Depth

Almost flat. Depth comes from layering (white 30px-radius panel over the dark hero, app banner overlapping the photo) and from photography, not from shadows. Measured shadows:

- Fixed round booking button: `0 20px 30px rgba(0,0,0,0.2)`.
- App-store buttons: green glow `0 23px 16px -19px rgba(92,170,83,0.7)`.
- Occasional soft `0 0 10px rgba(0,0,0,0.25)` and `0 3px 20px rgba(0,0,0,0.1)` on cards.

The CTA button itself has no shadow.

## Shapes

Radius vocabulary: 4px (small download buttons), 5px (footer app promo card `.iphone-mini`), 10px (primary CTA, app banner, and the white content panel at 360px), 30px (white content panel at 768px and wider) and 100% (fixed round booking button, 135×135). Top-bar, inputs, secondary "SEARCH" button and menus are square (0px). Photo tiles are square-cornered.

## Components

**Header (two tiers, no `<header>` tag; `section#header`, 768px tall including hero).**
- Tier 1, utility bar `.menu-up.bg-dark`: full width, 41px high, background `#161616`, inner container 1156px, flex `space-between`, vertically centered. Left: 8 text links (Выберите город, Франшиза, Вакансии в команду, Академия Барберов, Магазин косметики, Прайс, Услуги, Контакты), 12px/400, `#7a7a7a`, 17px between links, no uppercase. Right: social text links (YOUT, VK; FB/Email/INST exist in the DOM but are hidden) 10px/700 uppercase, `#7a7a7a`. Links have `transition: all` and underline on hover.
- Tier 2, brand row over the hero photo (`.headerbg`, 580px, starts at y 41): logo `borodach.svg` 86×50 at x 387, next to the tagline "федеральная сеть барбершопов" (12px/400 white, two lines). The bar has no background of its own; the hero photo runs full bleed behind it.
- Hero content: `h1` 45px/700 uppercase, subtitle 18px, then the primary CTA.
- Up to 768px the header keeps the desktop structure (utility bar visible, logo 86×50 at x 25). At ≤650px the utility bar is hidden (`.menu-up { display: none }`), the hero starts at y 0 and the header is logo (58×34 at x 10, y 17) on the left and a burger on the right (`.burger-menu`, 30×20 at x 302, bars 4px high in light gray `#c4c4c4`, not white). The menu opens as a fixed `.mobile-nav.slide-from-right` drawer with a white background, 340px wide, and 100% wide at ≤400px (360 at the 360 viewport); it starts with a SEARCH field, then the same links.

**Primary CTA "ЗАПИСАТЬСЯ ОНЛАЙН"** (`div.borodach-btn.bg-green`): 302×72, background `#5cae5d`, radius 10px, FactorA 14px/700 uppercase white, centered, no padding (flex-centered), no shadow. Measured hover: color does not change (`#5cae5d` before and after). One per viewport. The size holds at 1920, 1440 and 768; at 360px it is 165×48 with 10px label text and the same 10px radius.

**Fixed booking button** (`a.ms_booking.boro_butt`): 135×135 circle, bottom-right, 40px from the edges, fixed, shadow `0 20px 30px rgba(0,0,0,0.2)`, striped green badge with the "ЗАПИСАТЬСЯ" wordmark. A pulsing ring (`.boro_butt::before`, 105% size, `animation: 2s cubic-bezier(0.37, 0, 0.8, 0.77) infinite`) surrounds it. Shown only above 768px; `display: none` at ≤768px, so tablet and mobile have no floating button. Offsets are the same (40px right, 40px bottom) at 1920 and 1440.

**App banner:** dark card, 1010×197 at y 571 (1920 and 1440), radius 10px, background is an image (no solid fill), with green paint strokes, "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ BORODACH" title, an iPhone mockup on the right, and two green "Скачать" buttons (App Store / Google Play, 4px radius, green glow). On mobile it becomes a 317×125 green card with radius 10px and two outlined store buttons.

**Photo cards (`#BORODACHLIVE`):** full-bleed photo with a dark gradient, title 18px white top-left, green label tag `#BORODACHLIVE` (h3 45px/700 white on `#5cae5d`, 411×63 at x 755, y 816, rotated −1°) overlapping the top edge; at 360px the label is 16px, 157×28. Tiles are separated by 1px (measured: 456–747, 748–1167).

**Footer** (`section#footer`, 1920×466, padding-bottom 100px, transparent over body `#131313`, so dark; no dividers or borders between columns):
- Container 1020px, starts 90px below the previous block. Three columns inside a flex `space-between` wrapper (1010×348).
- Left column (333px, vertical flex): logo 86×50 with tagline (12px white), then "соцсети:" (12px/400, 10px below) and text links YOUT · VK · TIK (12px/700 uppercase white, 10px right padding), then company details at the bottom: ООО «КЛАБОРГ ГРУПП», ИНН/КПП, ОГРН, address in 10px/400 at 50% opacity.
- Middle: app promo card `.iphone-mini`, 261×70, gradient `linear-gradient(#5cae5d, #428843)`, radius 5px, with a phone mockup, "Запишитесь через приложение:" 11px and Apple store / Google Play buttons (93×31 and 95×31 at 360px).
- Right column (283px, x 1182): heading "БЫСТРЫЕ ССЫЛКИ" (`.druk`, FactorA 16px/700 uppercase white, 20px below), then 8 links (same as the top menu) at 16px/400, white at 50% opacity, 24px vertical pitch. Below: Club Group logo (80×50), a 1px vertical divider and four legal links (политика конфиденциальности, политика обработки персональных данных, согласие на получение рекламной информации, публичная оферта) at 11px/400, white at 50% opacity.
- No newsletter form, no copyright line; the legal entity block replaces it.
- At ≤840px `.footer-wrapper` becomes a block and all columns stack; padding-bottom drops from 100px to 40px at ≤768px; container side margin is 20px at 768 and 10px at 360. At ≤650px the app card is 100% wide × 100px tall with a 130×117 phone image and 14px text; quick links are 15px (16px at 768 and above), socials 12px/700, legal links 11px/400, all at 50% white.

**Inputs:** the only visible field is the SEARCH box in the mobile drawer: white, square, 12px 20px padding, button `#f3f3f3` with `#3e3e3e` 13px/600 text, letter-spacing 0.3px.

## Motion

Only `transition: all` on links, buttons and menu items. Measured durations: 0.25s, 0.3s, 0.4s. Easing is the browser default `ease` (no custom cubic-bezier found). The mobile drawer slides in from the right (`slide-from-right`). No scroll animations or parallax were detected in the collected evidence.

## Interaction States

- Links: `a:hover { text-decoration: underline }`; focus outline removed (`a:active, a:hover { outline: 0 }`), so keyboard focus is weak.
- Primary CTA: no color, shadow or transform change on hover (measured).
- Third-party widgets (gallery, table, pagination, lightbox) carry their own hover styles (`#6d6d6d`, `#049cdb`, `rgba(0,0,0,0.5)`); they are not part of the brand system.

## Responsive

Measured at 1920, 1440, 768 and 360px. 1440 is identical to 1920 (fixed centered containers). The site's own breakpoints are max-width 930 / 840 / 768 / 650 / 460 / 430 / 400 / 378 / 355px; behavior between the measured widths follows those rules and was not checked pixel by pixel.
- 768px: no burger; the utility bar and desktop header structure remain, `h1` is 25px, side margin 20px, the fixed booking button is hidden, the white panel keeps radius 30px and a 14px inset.
- 360px: the utility bar is hidden, header is logo 58×34 plus a `#c4c4c4` burger, the drawer is full width (100%); hero photo crops to the barber's head and hands, hero text sits at x 10, the CTA is 165×48 with 10px label and radius 10px; the app banner becomes a green card 317×125, radius 10px; the white panel has radius 10px and a 5px inset; photo tiles stack into one large tile plus two half-width tiles; the footer stacks into one column. Text stays left-aligned.

## Imagery

Photography-led: about 84 images (16 large photographic), 57 icons/SVGs, no video, 32 CSS background images. Style: moody, low-key, warm-dark portraits and shop interiors with a green tint; green brush-stroke overlays and diagonal stripes on hero and app banner; logo is an external SVG (`borodach.svg`, "BARBERSHOP BORODACH EST 2015" with crossed razors), not inline. Footer adds the Club Group logo and store badges as SVG.
