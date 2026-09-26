# Design System: borodach.com

## 1. Style Thesis

borodach.com reads as a spacious interface with #131313 canvas cues and #000000 text cues, FactorA for text at 18px/normal, and 4 observed surface levels. The strongest reusable move is the relationship between those tokens and 15 reusable component samples; keep the roles intact when adapting the style rather than copying the original page verbatim.

## 2. Source Evidence

Captured at: 2026-09-24T19:18:35.050Z

Inspected pages:

- https://borodach.com/: success

Viewports:

- desktop: 1920x1080
- laptop: 1440x900
- tablet: 768x1024
- mobile: 360x800

Screenshots:

- desktop: screenshots/borodach.com-desktop.png
- laptop: screenshots/borodach.com-laptop.png
- tablet: screenshots/borodach.com-tablet.png
- mobile: screenshots/borodach.com-mobile.png

## 3. Tokens

### Colors

| Name | Value | Token | Role | Confidence |
|------|-------|-------|------|------------|
| Green | `#5cae5d` | `--color-green` | Surface or background color | high |
| Canvas White | `#ffffff` | `--color-canvas-white` | Surface or background color | high |
| Near Black | `#131313` | `--color-near-black` | Surface or background color | high |
| Dark Gray | `#161616` | `--color-dark-gray` | Surface or background color | medium |
| Off White | `#f3f3f3` | `--color-off-white` | Surface or background color | medium |
| Light Gray | `#c4c4c4` | `--color-light-gray` | Surface or background color | low |
| Rich Black | `#000000` | `--color-rich-black` | Text, border, or accent color | high |
| Gray | `#7a7a7a` | `--color-gray` | Text, border, or accent color | high |
| Dark Gray | `#2d2a2a` | `--color-dark-gray` | Text, border, or accent color | high |
| Gray | `#808080` | `--color-gray` | Text, border, or accent color | high |
| Gray | `#767676` | `--color-gray` | Text, border, or accent color | medium |
| Dark Gray | `#3e3e3e` | `--color-dark-gray` | Text, border, or accent color | medium |

### Typography

| Role | Font | Size | Weight | Line Height | Letter Spacing | Confidence |
|------|------|------|--------|-------------|----------------|------------|
| text | FactorA | 18px | 400 | normal | normal | high |
| text | FactorA | 16px | 400 | normal | normal | high |
| link | FactorA | 16px | 400 | normal | normal | high |
| text | FactorA | 13px | 400 | 14.3px | -0.2px | high |
| body | FactorA | 16px | 400 | normal | normal | high |
| link | FactorA | 18px | 400 | normal | normal | high |
| link | FactorA | 12px | 400 | normal | normal | high |
| text | FactorA | 14px | 700 | normal | normal | high |
| text | FactorA | 12px | 400 | normal | normal | high |
| body | FactorA | 18px | 400 | normal | normal | high |
| text | FactorA | 11px | 400 | normal | normal | high |
| heading | FactorA | 15px | 700 | 16.65px | normal | high |

### Spacing

| Name | Value | Confidence |
|------|-------|------------|
| Padding 1 | `0px 10px` | medium |
| Padding 2 | `142px 0px 95px` | low |
| Padding 3 | `0px 10px 6px` | low |
| Padding 4 | `12px 20px` | low |
| Padding 5 | `1px 2px` | low |
| Padding 6 | `0px 0px 0px 13px` | low |

### Radii

| Name | Value | Confidence |
|------|-------|------------|
| Radius 1 | `10px` | medium |
| Radius 2 | `4px` | low |
| Radius 3 | `30px` | low |

### Shadows

| Name | Value | Confidence |
|------|-------|------------|
| Shadow 1 | `rgba(92, 170, 83, 0.7) 0px 23px 16px -19px` | low |
| Shadow 2 | `rgba(0, 0, 0, 0.25) 0px 0px 10px 0px` | low |

### Gradients

| Name | Value | Confidence |
|------|-------|------------|
| Gradient 1 | `linear-gradient(#5cae5d 0%, #428843 100%)` | medium |

## 4. Surfaces

| Level | Name | Value | Purpose | Confidence |
|-------|------|-------|---------|------------|
| 0 | Base Surface | `#131313` | Surface or background color | high |
| 1 | Surface 1 | `#ffffff` | Surface or background color | high |
| 2 | Surface 2 | `#161616` | Surface or background color | medium |
| 3 | Surface 3 | `#5cae5d` | Surface or background color | high |

## 5. Components

### Primary Button

- Role: Primary Button component.
- Text sample: `МАГАЗИН BORODACH.PRO`.
- Color: background `#5cae5d`, text `#ffffff`.
- Typography: FactorA, 14px, weight 700.
- Spacing: padding `0px`, observed bounds 302x72px.
- Radius: `10px`.
- Border and shadow: shadow `rgba(92, 170, 83, 0.7) 0px 23px 16px -19px`.
- Observed as `button` at `section.index-html > div.wrapper.bg-white > a > div.borodach-btn.position-absolute` across desktop, laptop, tablet, mobile; count 2.
- Confidence: medium.

### Primary Button

- Role: Primary Button component.
- Text sample: `Скачать`.
- Color: background `#5cae5d`, text `#ffffff`.
- Typography: FactorA, 14px, weight 700.
- Spacing: padding `0px 10px`, observed bounds 156.265625x35px.
- Radius: `4px`.
- Border and shadow: shadow `rgba(0, 0, 0, 0.25) 0px 0px 10px 0px`.
- Observed as `button` at `div.wrapper.header > div.plashka > div.plashka-buttons.f-14 > div.appstore-button.bg-green` across desktop, laptop, tablet; count 2.
- Confidence: medium.

### Surface Card

- Role: Surface Card component.
- Text sample: `Search Выберите город Франшиза Вакансии в команду Академия Барберов Магазин косм`.
- Color: background `#ffffff`, text `#ffffff`.
- Typography: FactorA, 18px, weight 400.
- Spacing: padding `0px`, observed bounds 340x1080px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `card` at `html.browser-Chrome.platform-Mac > body.home.page-template > div.mobile-nav.slide-from-right` across desktop, laptop, tablet, mobile; count 2.
- Confidence: medium.

### Primary Button

- Role: Primary Button component.
- Text sample: `<div><img src="https://mc.yandex.ru/watch/50238430" style="position:absolute; le`.
- Color: background `#131313`, text `#ffffff`.
- Typography: FactorA, 18px, weight 400.
- Spacing: padding `0px`, observed bounds 1920x3942.625px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `html.browser-Chrome.platform-Mac > body.home.page-template` across desktop, laptop, tablet, mobile; count 1.
- Confidence: low.

### Primary Button

- Role: Primary Button component.
- Text sample: `Записаться онлайн`.
- Color: background `#5cae5d`, text `#ffffff`.
- Typography: FactorA, 14px, weight 700.
- Spacing: padding `0px`, observed bounds 302x72px.
- Radius: `10px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `div.headerbg > div.container.mt-78 > a.ms_booking > div.borodach-btn.bg-green` across desktop, laptop, tablet, mobile; count 1.
- Confidence: low.

### Surface Card

- Role: Surface Card component.
- Text sample: `#borodachlive BORODACH: место, где уход — это удовольствие 02 июня 2025 Идеальна`.
- Color: background `#ffffff`, text `#000000`.
- Typography: FactorA, 18px, weight 400.
- Spacing: padding `142px 0px 95px`, observed bounds 1892x916.953125px.
- Radius: `30px`.
- Border and shadow: shadow `none`.
- Observed as `card` at `body.home.page-template > div.main-container.index-index > section.index-html > div.wrapper.bg-white` across desktop, laptop, tablet, mobile; count 1.
- Confidence: low.

### Surface Card

- Role: Surface Card component.
- Text sample: `#borodachlive`.
- Color: background `#5cae5d`, text `#ffffff`.
- Typography: Helvetica, sans-serif, 45px, weight 700.
- Spacing: padding `0px 10px 6px`, observed bounds 410.9609375x63.1009521484375px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `card` at `div.container > div.news-inner.position-relative > div.text-center > h3.text-center.f-45` across desktop, laptop; count 1.
- Confidence: low.

### Surface Card

- Role: Surface Card component.
- Text sample: `федеральная сеть барбершопов`.
- Color: background `#161616`, text `#ffffff`.
- Typography: FactorA, 13px, weight 400.
- Spacing: padding `0px 10px`, observed bounds 360x68px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `card` at `section > div.wrapper.header > div.headerbg > div.container-2` across mobile; count 1.
- Confidence: low.

### Surface Card

- Role: Surface Card component.
- Text sample: `МобильноеприложениеBORODACH Скачать Скачать`.
- Color: background `#5cae5d`, text `#ffffff`.
- Typography: FactorA, 13px, weight 400.
- Spacing: padding `0px`, observed bounds 316.796875x125px.
- Radius: `10px`.
- Border and shadow: shadow `none`.
- Observed as `card` at `div.main-container.index-index > section > div.wrapper.header > div.plashka` across mobile; count 1.
- Confidence: low.

### Primary Button

- Role: Primary Button component.
- Text sample: `Search`.
- Color: background `#f3f3f3`, text `#3e3e3e`.
- Typography: FactorA, 13px, weight 600.
- Spacing: padding `12px 20px`, observed bounds 98.796875x42px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `div.mobile-nav.slide-from-right > div.woodmart-search-form > form.searchform.woodmart-ajax-search > button.searchsubmit` across desktop, laptop; count 2.
- Confidence: medium.

### Input

- Role: Input component.
- Text sample: No text sample captured.
- Color: background `#ffffff`, text `#000000`.
- Typography: Arial, 13px, weight 400.
- Spacing: padding `1px 2px`, observed bounds 153x21px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `input` at `div.mobile-nav.slide-from-right > div.woodmart-search-form > form.searchform.woodmart-ajax-search > input.s` across desktop, laptop; count 2.
- Confidence: medium.

### Text Button

- Role: Text Button component.
- Text sample: `Скачать Скачать`.
- Color: background `transparent`, text `#ffffff`.
- Typography: FactorA, 14px, weight 700.
- Spacing: padding `0px`, observed bounds 339.265625x35px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `section > div.wrapper.header > div.plashka > div.plashka-buttons.f-14` across desktop, laptop, tablet; count 1.
- Confidence: low.

### Text Button

- Role: Text Button component.
- Text sample: No text sample captured.
- Color: background `transparent`, text `#ffffff`.
- Typography: FactorA, 11px, weight 400.
- Spacing: padding `0px`, observed bounds 248x26px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `div.footer-center.f-16 > div.position-relative.iphone-mini > div.iphone-mini-container > div.iphone-mini-buttons.flexer` across desktop, laptop, tablet, mobile; count 1.
- Confidence: low.

### Text Button

- Role: Text Button component.
- Text sample: No text sample captured.
- Color: background `transparent`, text `#ffffff`.
- Typography: FactorA, 13px, weight 400.
- Spacing: padding `0px 0px 0px 13px`, observed bounds 316.796875x26px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `section > div.wrapper.header > div.plashka > div.plashka-buttons-mob.flexer` across mobile; count 1.
- Confidence: low.

### Icon Button

- Role: Icon Button component.
- Text sample: No text sample captured.
- Color: background `transparent`, text `#ffffff`.
- Typography: FactorA, 13px, weight 400.
- Spacing: padding `0px`, observed bounds 30x20px.
- Radius: `0px`.
- Border and shadow: shadow `none`.
- Observed as `button` at `div.container-2 > div.undermenu.pt-20 > div.burger-menu > label.menu-btn` across mobile; count 1.
- Confidence: low.

## 6. Layout System

Density: spacious

Container widths: `1020px`, `419px`, `340px`, `291px`.

Section rhythm: `142px`, `41px`, `147px`, `51px`.

Use the captured density as the baseline. Preserve relative spacing before inventing new scale steps.

## 7. Imagery & Media

Strategy: photography-led

- 84 images (16 large/photographic), 57 icons/SVGs, 0 videos, 32 background images.

## 8. Responsive Behavior

- desktop captured at 1920x1080.
- laptop captured at 1440x900.
- tablet captured at 768x1024.
- mobile captured at 360x800.

## 9. Do's and Don'ts

### Do
- Preserve the spacious density and token roles before changing visual weight.
- Use the extracted tokens by semantic role, not just by matching raw values.
- Keep low-confidence tokens behind manual review until screenshots confirm them.

### Don't
- Do not copy proprietary assets, logos, or licensed typefaces.
- Do not treat sparse evidence as a complete brand system.
- Do not reuse component values outside their observed role without checking the source screenshot.

## 10. Agent Prompt Guide

Use the color, typography, surface, and component tables above as the source of truth. Build one component at a time and reference token names instead of raw values where possible.

### CSS Token Starter

```css
:root {
  --color-green: #5cae5d;
  --color-canvas-white: #ffffff;
  --color-near-black: #131313;
  --color-dark-gray: #161616;
  --color-off-white: #f3f3f3;
  --color-light-gray: #c4c4c4;
  --color-rich-black: #000000;
  --color-gray: #7a7a7a;
  --color-dark-gray-1: #2d2a2a;
  --color-gray-1: #808080;
  --color-gray-2: #767676;
  --color-dark-gray-2: #3e3e3e;
  --surface-base-surface: #131313;
  --surface-1: #ffffff;
  --surface-2: #161616;
  --surface-3: #5cae5d;
  --font-text: FactorA;
  --font-size-text: 18px;
  --font-weight-text: 400;
  --line-height-text: normal;
  --letter-spacing-text: normal;
  --font-text-1: FactorA;
  --font-size-text-1: 16px;
  --font-weight-text-1: 400;
  --line-height-text-1: normal;
  --letter-spacing-text-1: normal;
  --font-link: FactorA;
  --font-size-link: 16px;
  --font-weight-link: 400;
  --line-height-link: normal;
  --letter-spacing-link: normal;
  --font-text-2: FactorA;
  --font-size-text-2: 13px;
  --font-weight-text-2: 400;
  --line-height-text-2: 14.3px;
  --letter-spacing-text-2: -0.2px;
  --font-body: FactorA;
  --font-size-body: 16px;
  --font-weight-body: 400;
  --line-height-body: normal;
  --letter-spacing-body: normal;
  --font-link-1: FactorA;
  --font-size-link-1: 18px;
  --font-weight-link-1: 400;
  --line-height-link-1: normal;
  --letter-spacing-link-1: normal;
  --font-link-2: FactorA;
  --font-size-link-2: 12px;
  --font-weight-link-2: 400;
  --line-height-link-2: normal;
  --letter-spacing-link-2: normal;
  --font-text-3: FactorA;
  --font-size-text-3: 14px;
  --font-weight-text-3: 700;
  --line-height-text-3: normal;
  --letter-spacing-text-3: normal;
  --font-text-4: FactorA;
  --font-size-text-4: 12px;
  --font-weight-text-4: 400;
  --line-height-text-4: normal;
  --letter-spacing-text-4: normal;
  --font-body-1: FactorA;
  --font-size-body-1: 18px;
  --font-weight-body-1: 400;
  --line-height-body-1: normal;
  --letter-spacing-body-1: normal;
  --font-text-5: FactorA;
  --font-size-text-5: 11px;
  --font-weight-text-5: 400;
  --line-height-text-5: normal;
  --letter-spacing-text-5: normal;
  --font-heading: FactorA;
  --font-size-heading: 15px;
  --font-weight-heading: 700;
  --line-height-heading: 16.65px;
  --letter-spacing-heading: normal;
  --space-padding-1: 0px 10px;
  --space-padding-2: 142px 0px 95px;
  --space-padding-3: 0px 10px 6px;
  --space-padding-4: 12px 20px;
  --space-padding-5: 1px 2px;
  --space-padding-6: 0px 0px 0px 13px;
  --radius-1: 10px;
  --radius-2: 4px;
  --radius-3: 30px;
  --shadow-1: rgba(92, 170, 83, 0.7) 0px 23px 16px -19px;
  --shadow-2: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
  --gradient-1: linear-gradient(#5cae5d 0%, #428843 100%);
}
```

## Interaction States

- **focus** on `button.lg-icon, button.lg-next.lg-icon:focus, button.lg-prev.lg-icon:focus`: `background-color: unset`, `background: unset`
- **focus** on `a.ays_gallery_caption_link:focus, a.ays_gallery_caption_link:hover`: `color: #ffffff`, `text-decoration: underline`
- **hover** on `a.ays_gpg_category_filter:hover`: `color: #ffffff`, `background-color: #6d6d6d`
- **focus** on `input.inp_search_img:focus`: `border: 1px solid`, `border-color: currentcolor`
- **hover** on `.tablepress .row-hover tr:hover td`: `background-color: #f3f3f3`
- **hover** on `.paginate_button:hover`: `text-decoration: none`
- **hover** on `.paginate_button:hover::after, .paginate_button:hover::before`: `color: #049cdb`
- **hover** on `.tablepress .sorting:hover, .tablepress .sorting_asc, .tablepress .sorting_desc`: `background-color: #049cdb`
- **active** on `a:active, a:hover`: `outline: 0px`
- **hover** on `a:hover`: `text-decoration: underline`
- **hover** on `.mfp-preloader a:hover`: `color: #ffffff`
- **focus** on `.mfp-close:focus, .mfp-close:hover`: `opacity: 1`
- **hover** on `.popup-added_to_cart .mfp-close:hover, button.mfp-close:focus, button.mfp-close:hover`: `color: #ffffff`, `background-color: rgba(0, 0, 0, 0.5)`, `box-shadow: none`, `opacity: 1`
- **hover** on `#wpadminbar:hover`: `opacity: 1`
- **hover** on `header .woodmart-social-icon a:not(:hover)`: `color: #c3c3c3`, `border-color: #464646`
- **hover** on `.btn:hover`: `color: #ffffff`, `background-color: #477247`, `background: #477247`
- **hover** on `footer .woodmart-social-icons a:not(:hover)`: `border-color: #333333`
- **hover** on `footer .woodmart-social-icons a:not(:hover) i`: `color: #999999`
- **hover** on `.ch_city_btns .btner:hover`: `color: #ffffff`, `background-color: #333333`, `background: #333333`
- **hover** on `.full_lister:hover`: `color: #ffffff`, `background-color: #477247`

## Motion

Transition/animation durations: `0.4s`, `0.3s`, `0.25s`.

Easing curves: none observed.

## 11. Known Gaps

- info: Only one page was inspected, so site-wide coverage is limited.
