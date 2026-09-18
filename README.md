# MedLeaf Coffee Shop

A multi-page website built for the WEB5020 Portfolio of Evidence (IIE 2026). MedLeaf is a fictional coffee shop based in Roodepoort, Gauteng.

## Pages

| Page | File |
|---|---|
| Homepage | `index.html` |
| About | `about.html` |
| Menu | `menu.html` |
| Gallery | `gallery.html` |
| Contact | `contact.html` |

## Technologies

- HTML5
- CSS3 (external stylesheet — `style.css`)
- Google Fonts (Fraunces, Work Sans)
- Original SVG illustrations (logo + gallery graphics — hand-built, no external images used)

## Project Structure

```
WEB5020-main/
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── contact.html
├── style.css
├── images/
│   ├── logo.svg
│   └── gallery/
│       ├── interior-01.svg
│       ├── interior-02.svg
│       ├── latte-art.svg
│       ├── pastries.svg
│       ├── cold-brew.svg
│       ├── open-mic.svg
│       └── art-showcase.svg
└── README.md
```

## Changelog

### Part 2 — Designing the Visuals

- **Fixed:** `gallery.html` previously contained duplicated homepage content (the same markup as `index.html`) instead of its own content. Replaced with dedicated gallery content (café interior, drinks & food, community moments), grouped using `<figure>`/`<figcaption>` inside a `.gallery-grid` container.
- **Fixed:** navigation links and filenames used inconsistent casing (`About.html`, `Menu.html`, `Gallery.html` vs. lowercase links such as `about.html`). Renamed all files to lowercase and aligned every `<nav>` link across all five pages so links resolve correctly on case-sensitive hosts (e.g. GitHub Pages).
- **Fixed:** `index.html` linked to a non-existent `homepage.html`. Corrected to `index.html`.
- **Fixed:** removed `<br>` tags that were being used to add spacing between sections across `index.html`, `about.html`, `gallery.html`, and `contact.html` — this mixed presentation into the markup; spacing is now handled entirely by `style.css`.
- **Fixed:** typo in the footer copyright line (`Reserved.ST10503069.` missing a space) on all five pages.
- **Fixed:** `contact.html` — wrapped the address, phone, and email in a semantic `<address>` element, and made the phone number and email clickable (`tel:` / `mailto:` links) instead of plain text.
- **Fixed:** removed a leftover `<hr>` in `gallery.html` from when it contained the duplicated homepage content.
- Added original hand-built SVG illustrations for the logo and all seven gallery images (interior, drinks, food, community events), matching the juniper/sage colour palette. No external or copyrighted images used, so no image citation is required.
- Added external stylesheet `style.css` and linked it in the `<head>` of all five pages.
- Added `<meta name="viewport">` to `about.html`, `menu.html`, `gallery.html`, and `contact.html` so responsive styles apply correctly (previously only present on `index.html` and `gallery.html`).
- Restructured `menu.html`: wrapped each menu category in a `<section class="menu-category">`, grouped inside `<div class="menu-grid">`, and split each list item into `<span>` name/price pairs so CSS Grid and price styling could be applied.
- Wrapped the homepage introduction in a `<div class="hero">` and added `class="feature-list"` to the "What We Offer" list for targeted styling.
- Replaced inline `style="width:70px; height:85px;"` on the logo `<img>` across all pages with a `.logo` class, moving presentation out of the HTML and into CSS.
- Built `style.css`:
  - CSS reset + design tokens (`:root` custom properties for colour, type, spacing).
  - Typography scale using Fraunces (headings) and Work Sans (body), with `rem`/`em`/`clamp()` for responsive sizing.
  - Flexbox layout for the header/nav; CSS Grid for the menu categories and gallery.
  - Visual styling: colour, background, borders, box-shadow, and `:hover` / `:focus-visible` / `:active` states on nav links, body links, feature list items, and gallery figures.
  - Responsive breakpoints at `37.5em` (~600px, tablet) and `56.25em` (~900px, desktop) using a mobile-first approach with relative units throughout.

### Part 1 — Building the Structure *(prior submission)*

- Initial five-page site structure created (`index.html`, `About.html`, `Menu.html`, `Gallery.html`, `contact.html`).
- Semantic `<header>`, `<nav>`, `<main>`, `<footer>` structure established.

## Screenshot Evidence

*(To be added: screenshots of the site at desktop, tablet, and mobile widths, taken using browser developer tools' device toolbar, for each of the five pages.)*

| Breakpoint | Screenshot |
|---|---|
| Desktop (≥900px) | *pending* |
| Tablet (~600–899px) | *pending* |
| Mobile (<600px) | *pending* |

## References

Reference list to be completed in full Harvard style (IIE adapted) as sources are used. Starting points used for Part 2:

- Mozilla Developer Network (MDN Web Docs) (2026) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 16 September 2026).
- Google Fonts (2026) *Fraunces* and *Work Sans* [font families]. Available at: https://fonts.google.com (Accessed: 16 September 2026).

*(Add any tutorials, Stack Overflow answers, or other resources actually consulted, with paraphrased notes on what was adapted from each — per the module's referencing requirement.)*
