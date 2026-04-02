# CLAUDE.md — Serendip Go Travel Website

## Project Overview

**Serendip Go** is a static travel website for a Sri Lanka tourism company. It is a pure HTML/CSS/JavaScript project with no build tools, framework, or package manager. All styling is hand-written in a single CSS file; all interactivity lives in a single JS file.

---

## Repository Structure

```
Travel - Website/
├── index.html                  # Homepage
├── about.html                  # Company story, mission, team
├── destinations.html           # Destination cards with modals
├── packages.html               # Tour packages with filter system
├── plan-trip.html              # Interactive itinerary planner
├── contact.html                # Contact form
├── blog.html                   # Blog listing/hub page
├── blog-top10-places.html      # Blog article
├── blog-best-time-visit.html   # Blog article
├── blog-cuisine-guide.html     # Blog article
├── blog-yala-wildlife.html     # Blog article
├── testimonials.html           # Reviews page
├── faq.html                    # FAQ accordion page
├── privacy.html                # Privacy policy
├── terms.html                  # Terms & conditions
├── srilanka_tourism.html       # Redirect to index.html
├── styles.css                  # All site styles (~774 lines)
├── script.js                   # All site JS (~285 lines)
└── images/                     # All image assets
    ├── Logo.png, fav.png
    ├── sigiriya.jpg, kandy.jpg, ella.jpg, galle.jpg, yala-leopard.jpg
    ├── beach.jpg, romantic-beach.jpg, family-beach.jpg, adventure.jpg
    ├── temple.jpg, tea-plantation.jpg, about-landscape.jpg, sri-lanka-food.jpg
    └── team-nimal.jpg, team-amali.jpg, team-priya.jpg, team-rohan.jpg
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Plain HTML5 |
| Styles | Hand-written CSS (no framework) |
| Scripts | Vanilla JavaScript (no libraries) |
| Email | EmailJS SDK (CDN) |
| Fonts | Google Fonts (CDN) |
| Build | None — open files directly in browser |

There is no `package.json`, no `node_modules`, no bundler, and no transpilation step.

---

## Design System

### Color Palette (CSS variables in `:root`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--gold` | `#c9973a` | Primary CTA, accents, hover states |
| `--gold-light` | `#e8c070` | Lighter gold highlights |
| `--deep` | `#0d2b1f` | Dark green backgrounds, deep sections |
| `--teal` | `#1a5c4a` | Secondary accent |
| `--teal-light` | `#2d8c6e` | Hover tones |
| `--sand` | `#f5ede0` | Light background sections |
| `--sand-dark` | `#e8d9c4` | Slightly deeper sand |
| `--cream` | `#faf7f2` | Primary page background |
| `--text` | `#1a1a1a` | Body text |
| `--text-muted` | `#6b6150` | Secondary / caption text |
| `--coral` | `#d4603a` | Blog tags |

Always use these variables — never hardcode hex colors.

### Typography

| Role | Font | Weights |
|------|------|---------|
| Headings / luxury copy | `Cormorant Garamond` (serif) | 300, 400, 600 |
| Logo | `Dancing Script` (script) | 700 |
| Body / UI labels | `Josefin Sans` (sans) | 300, 400, 600 |

Use `clamp()` for fluid heading sizes, e.g. `font-size: clamp(2rem, 4vw, 3.5rem)`.

---

## CSS Conventions

### Class Naming
- All classes use **kebab-case**: `.tour-card`, `.btn-primary`, `.faq-q`
- Component-scoped prefixes: `.tour-*`, `.pkg-*`, `.testi-*`, `.blog-*`, `.hero-*`, `.nav-*`, `.form-*`, `.field-*`
- Grid containers end in `-grid`: `.tours-grid`, `.dest-grid`, `.blog-grid`
- State modifiers: `.active`, `.open`, `.show`, `.visible`, `.scrolled`, `.err`

### IDs
- Sections use lowercase/hyphens: `#navbar`, `#hero`, `#featured`, `#why-us`
- JS-targeted elements use camelCase: `#mobileMenu`, `#chatBubble`, `#itinerary-result`
- Form fields use camelCase: `#contactName`, `#contactEmail`
- Error elements pair with fields: `#contactNameErr`, `#contactEmailErr`

### Section Headers Pattern
Every content section uses this consistent structure:
```html
<div class="section-header">
  <span class="eyebrow">SHORT LABEL</span>
  <h2 class="section-title">Main Heading</h2>
  <p class="section-sub">Supporting subtitle text.</p>
</div>
```

### Responsive Breakpoints
```css
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px)  { /* Small tablets / large phones */ }
@media (max-width: 480px)  { /* Phones */ }
```

### Layout
- Horizontal padding: `padding-left: 8%; padding-right: 8%` (shrinks to 5% on mobile)
- Max-width containers: `max-width: 900px / 1200px; margin: 0 auto`
- Grids: `grid-template-columns: repeat(auto-fit, minmax(Xpx, 1fr))`

---

## JavaScript Conventions

All JS lives in `script.js`. No modules, no imports.

### Function Categories

| Category | Functions |
|----------|-----------|
| Navigation | `toggleMobile()`, `revealElements()` |
| Scroll | Progress bar update, navbar `.scrolled` class toggle, `revealElements()` |
| Packages | `filterPkg(category, button)` — uses `data-cat` attribute |
| Trip Planner | `toggleInterest(chip)`, `generateItinerary()` |
| FAQ | `toggleFaq(element)` |
| Live Chat | `toggleChat()`, `sendChat()` |
| Forms | `submitContact()`, `setFieldError()`, `clearFieldError()` |
| Validation | `sanitize()`, `stripTags()`, `isValidEmail()`, `isValidPhone()`, `isValidName()`, `isValidNationality()` |

### Form Validation Pattern
Always follow this existing pattern for any new form fields:
1. Input element has a matching error element with `id="<fieldId>Err"` and class `field-error`
2. Use `setFieldError(inputId, errId, message)` to show errors (adds `.err` to input)
3. Use `clearFieldError(inputId, errId)` to clear them
4. Sanitize all user input with `sanitize()` before use; strip tags with `stripTags()`
5. Disable submit button and show "Sending..." during async submission

### EmailJS Configuration
```javascript
// Top of script.js
EMAILJS_PUBLIC_KEY = 'pcqLKvzFwoYDwDa8i'
EMAILJS_SERVICE_ID = 'service_to5ypwc'
EMAILJS_CONTACT_TMPL  = 'template_3987oxg'
EMAILJS_PLANNER_TMPL  = 'template_wha3i6l'
```

---

## Page Anatomy

Every page shares this structure:

```html
<!-- Fixed navbar with progress bar -->
<nav id="navbar">…</nav>
<div id="progress"></div>

<!-- Page-specific hero -->
<section class="page-hero">…</section>

<!-- Main content sections -->
<section>…</section>

<!-- Consistent footer -->
<footer>…</footer>

<!-- Live chat widget -->
<div id="chatBubble">…</div>

<!-- script.js at end of body -->
<script src="script.js"></script>
```

### Navigation Active State
The nav auto-highlights the current page by matching `window.location.pathname` against each `<a>` href. No manual `class="active"` needed — `script.js` handles it on load.

### Hero Sections
- Page-level heroes (non-home) use class `.page-hero`
- Background is a gradient or inline `background-image` with `background-size: cover`
- Animated floating orbs use `animation: float 8s ease-in-out infinite`
- Scroll indicator at bottom uses `animation: scrollLine`

---

## Common Components

### Buttons
```html
<a href="…" class="btn-primary">Book Now</a>
<a href="…" class="btn-outline">Learn More</a>
```

### Tour / Package Card
Cards use `.tour-card` or `.pkg-card` with an image wrapper, overlay, tag, title, and footer with price + CTA.

### Testimonial Card
```html
<div class="testi-card">
  <div class="testi-quote">"</div>
  <div class="testi-stars">★★★★★</div>
  <p class="testi-text">…</p>
  <div class="testi-author">
    <img class="testi-avatar" …>
    <div><div class="testi-name">…</div><div class="testi-country">…</div></div>
  </div>
</div>
```

### FAQ Accordion
```html
<div class="faq-item">
  <div class="faq-q" onclick="toggleFaq(this)">Question? <span>+</span></div>
  <div class="faq-a">Answer text.</div>
</div>
```

### Destination / Package Modals
Trigger: `onclick="openDestModal('id')"` or `onclick="openPkgModal('id')"`
Overlay: `.dest-modal-overlay` wraps `.dest-modal`; close with `onclick="closeDestModal()"`

---

## Adding New Pages

1. Copy the nav and footer HTML verbatim from any existing page.
2. Link `styles.css` and `script.js`.
3. Include the EmailJS SDK script only if the page has a form.
4. Add the live chat widget div.
5. Register the new page link in the nav and footer of every other page.
6. No build step needed — the file is immediately live.

## Adding New Blog Articles

Follow the structure of `blog-yala-wildlife.html` or any other `blog-*.html`:
- Featured image at top
- Article body with `<h2>` section headers
- CTA / related section at the bottom
- Link the article from `blog.html` grid

---

## Security

- `sanitize()` escapes HTML entities for all user input before rendering.
- `stripTags()` removes HTML entirely when embedding in plain-text contexts.
- Never render raw user input as `innerHTML` without calling `sanitize()` first.
- EmailJS keys are public-facing by design (client-side SDK); treat them as such.

---

## Assets

- All images live in `images/`
- Use `background-image: url('images/filename.jpg')` for section backgrounds
- Team photos: apply `filter: grayscale(20%)` in CSS
- Logo: `images/Logo.png`; Favicon: `images/fav.png`
- The logo file is large (3.8 MB) — avoid duplicating it; always reference the original

---

## External Services

| Service | Purpose | Integration |
|---------|---------|-------------|
| Google Fonts | Typography | `<link>` in `<head>` |
| EmailJS | Contact / planner form submission | `<script>` CDN tag + `script.js` config |

---

## What Not To Do

- Do not introduce a build tool, bundler, or framework — this is intentionally a static site.
- Do not add a `package.json` or `node_modules` unless the project scope explicitly changes.
- Do not create separate CSS files per page — all styles belong in `styles.css`.
- Do not create separate JS files per page — all scripts belong in `script.js`.
- Do not hardcode hex colors — use the CSS variables defined in `:root`.
- Do not add `class="active"` manually to nav links — `script.js` sets this automatically.
- Do not render unsanitized user input as HTML.
