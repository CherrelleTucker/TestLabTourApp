# MSFC Test Lab Tour App — Design Guidelines

**Purpose:** Ensure all new features maintain visual and interaction cohesion with the original app build. Every component should feel like it belongs to the same NASA test-instrument interface, not a patchwork of unrelated styles.

---

## Core Design Philosophy

The app reads as a **mission-control console interface** — not a social app, not a storefront. Think instrument panels, telemetry readouts, and test hardware overlays. The visual language deliberately echoes NASA's test environment: precision, data clarity, and engineered surfaces.

**Key principles:**
- **Function over decoration** — every visual element serves a purpose
- **Data face for data** — numeric readouts and status indicators use monospace with amber glow
- **Story over inventory** — guide attention, don't dump a catalog
- **The screen serves the room** — point to the real hardware, never compete with it

---

## 1. Color Palette

All colors are defined in `css/variables.css` as **oklch()** values (perceptually uniform color space). **Never hardcode hex colors** — always reference CSS custom properties.

### Brand Colors

| Token | Light Mode | Use |
|-------|-----------|-----|
| `--nasa-blue` | oklch(47.6% 0.210 264.7) | Primary brand color, links, accents |
| `--nasa-blue-fill` | Same as --nasa-blue | Solid fills (buttons, header background) |
| `--nasa-blue-dark` | oklch(38.0% 0.180 264.7) | Hover states, gradients |
| `--nasa-red` | oklch(60.1% 0.204 33.0) | CTA buttons, structural accents (hairlines, borders) |
| `--good` | oklch(53.0% 0.153 163.2) | Success states, correct answers |
| `--amber` | oklch(75.0% 0.139 69.5) | **Telemetry highlight** — key numeric readouts only |

**When to use NASA Red:**
- Primary action buttons ("Start the tour", "Submit Request")
- The 2px hairline border under the appbar (structural signature)
- Console corner brackets on modals
- Step number badges (numbered lists)
- Section header left-border accent (3-4px)

**When to use Amber:**
- Key fact numbers (specs, dimensions, dates) with a subtle text-shadow glow
- **Not for fills or backgrounds** — amber is a data highlight, not a panel color

### Surface & Text Colors

| Token | Light Mode | Use |
|-------|-----------|-----|
| `--ink` | oklch(25.0% 0.013 266.7) | Primary text |
| `--ink-soft` | oklch(50.0% 0.020 266.6) | Secondary/muted text, labels |
| `--bg` | oklch(95.0% 0.005 266.4) | Page background |
| `--card` | oklch(100% 0.000 0) | White cards, elevated surfaces |
| `--panel-2` | oklch(97.0% 0.005 266.4) | Subtle elevated surface |
| `--line` | oklch(85.0% 0.010 266.3) | Borders, dividers |
| `--on-accent` | oklch(100% 0.000 0) | White text on colored buttons/headers |

### Semantic Backgrounds (Chips, Callouts, States)

| Token | Use |
|-------|-----|
| `--chip-blue-bg` / `--chip-grey-bg` | Chip/badge backgrounds (active vs. neutral) |
| `--soon-bg` / `--soon-ink` | "Coming soon" badges (light red-orange) |
| `--correct-bg` / `--correct-ink` | Correct quiz answers (light green) |
| `--wrong-bg` | Wrong quiz answers (light pink) |
| `--warn-bg` | Warning callouts |
| `--code-bg` | Inline code snippets |

### Dark Theme

The app supports dark mode via `[data-theme="dark"]` on `<html>`. All design tokens automatically switch. **Do not write separate dark-mode styles** — the system handles it via the same variable names.

Dark mode characteristics:
- Brighter beacon blue for text (NASA blue gets lighter for readability)
- Near-black void background
- Console-panel surfaces (darker cards)
- Increased starfield opacity

---

## 2. Typography

### Font Stack

**Body text:**
```css
font-family: var(--font);
/* "Public Sans", "Source Sans Pro", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif */
```

**Data/numeric readouts:**
```css
font-family: var(--font-mono);
/* ui-monospace, "Cascadia Mono", "SF Mono", Consolas, "Roboto Mono", monospace */
```

### Type Scale (Fluid)

Use `clamp()` for responsive sizing without breakpoints:

| Token | Size | Use |
|-------|------|-----|
| `--text-sm` | 0.8125rem (13px) | Small labels, chips, captions |
| `--text-body` | 1rem (16px) | Body text, buttons |
| `--text-lg` | clamp(1.0625rem → 1.25rem) | Large body, hero subheads |
| `--text-h2` | clamp(1.25rem → 1.5rem) | Section headings |
| `--text-h1` | clamp(1.5rem → 2rem) | Page titles |
| `--text-display` | clamp(1.75rem → 2.75rem) | Hero headlines only |

**Sizing guidelines:**
- Body copy defaults to `--text-body` (1rem/16px)
- Section headers use `--text-h2` or `--text-h1`
- Numeric key facts use `20px` (fixed) + `font-family: var(--font-mono)` + `font-weight: 800`

### Font Weights

- **400** (normal): Body text
- **600**: Medium emphasis (back buttons, chip text)
- **700**: Headings, button text, strong emphasis
- **800**: Key numeric readouts (telemetry style)

### When to Use Monospace

- Key fact numbers (dimensions, dates, capacities)
- Time readouts (audio player, phase spine)
- Index/sequence numbers (stop cards `::before` counters)
- Mock banner disclaimer text (status-line feel)
- **Not for:** Body paragraphs, button labels, navigation

---

## 3. Spacing Scale (Fluid)

All spacing uses CSS custom properties. **Avoid bare `px` values** for margins/padding.

| Token | Size | Use |
|-------|------|-----|
| `--space-3xs` | 0.25rem (4px) | Minimal gaps |
| `--space-2xs` | 0.5rem (8px) | Tight internal padding |
| `--space-xs` | 0.75rem (12px) | Small gaps |
| `--space-sm` | 1rem (16px) | Standard gap |
| `--space-md` | clamp(1rem → 1.5rem) | Medium responsive gap |
| `--space-lg` | clamp(1.25rem → 2rem) | Large section spacing |
| `--space-xl` | clamp(1.75rem → 3rem) | Extra-large section breaks |
| `--space-gutter` | clamp(1.1rem → 1.75rem) | Page-edge padding (replaces 18px/20px) |

**Pattern:**
- Page padding: `padding: var(--space-lg) var(--space-gutter)`
- Section breaks: `margin: var(--space-xl) 0`
- Card internal padding: `padding: var(--space-xs) var(--space-sm)`
- Tight lists: `gap: var(--space-3xs)`

---

## 4. Border Radius & Shadows

### Radius

| Token | Size | Use |
|-------|------|-----|
| `--radius` | 10px | Cards, buttons, panels (primary) |
| `--radius-sm` | 6px | Chips, small controls |

Buttons use `border-radius: 10px` (not `var(--radius)`) — this is a known exception.

### Shadows

```css
--shadow: 0 1px 3px rgba(0,0,0,.12), 0 6px 20px rgba(0,0,0,.06);
```

Applied to:
- Cards (`.stopcard`, `.media`, `.interact`)
- Appbar (`header.appbar`)
- Modals

**Dark mode automatically switches to:**
```css
--shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 8px 20px rgba(0,0,0,.45);
```

---

## 5. Signature Visual Elements

### A. Console Corner Brackets (Red Hairlines)

The **targeting-reticle frame** on key elements — reads as an instrument overlay, not decoration.

**Use on:**
- Hero photos (`.media.photo.hero-photo::before`)
- Modal containers (`.quickstart-content::before`)

**Pattern:**
```css
.element::before {
  content: "";
  position: absolute;
  inset: 10px; /* or 12px for modals */
  pointer-events: none;
  z-index: 1;
  background-repeat: no-repeat;
  background-image:
    linear-gradient(var(--on-accent) 0 0), linear-gradient(var(--on-accent) 0 0),
    linear-gradient(var(--on-accent) 0 0), linear-gradient(var(--on-accent) 0 0),
    linear-gradient(var(--on-accent) 0 0), linear-gradient(var(--on-accent) 0 0),
    linear-gradient(var(--on-accent) 0 0), linear-gradient(var(--on-accent) 0 0);
  background-size:
    18px 2px, 2px 18px, 18px 2px, 2px 18px,
    18px 2px, 2px 18px, 18px 2px, 2px 18px;
  background-position:
    top left, top left, top right, top right,
    bottom left, bottom left, bottom right, bottom right;
  opacity: 0.8;
}
```

For modals, use `rgba(252,61,33,0.7)` (NASA red) instead of `var(--on-accent)`.

### B. Lit Tab Indicator (Blue Bar)

Active tab bar button gets a 2px bar **above** the icon (not below):

```css
nav.tabbar button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--nasa-blue);
  transform: translateX(-50%);
  transition: width .18s ease;
}
nav.tabbar button.active::before {
  width: 22px;
}
```

### C. Amber Glow on Key Numbers

Numeric readouts (key facts, specs) use amber with a subtle text-shadow glow:

```css
.keyfacts .num {
  font-size: 20px;
  font-weight: 800;
  color: var(--amber);
  font-family: var(--font-mono);
  text-shadow: 0 0 14px color-mix(in oklch, var(--amber) 55%, transparent);
}
```

### D. Starfield Background

Subtle decorative element — more visible in dark mode:

```css
.starfield {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: /* 10 radial-gradient dots */;
  background-size: 340px 340px;
  opacity: .08; /* .4 in dark mode */
}
```

Applied to `.shell` wrapper. New full-screen views should include this.

### E. Film Grain Overlay

Very subtle texture:

```css
.grain {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: .02; /* .05 in dark mode */
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg..."); /* fractal noise */
}
```

### F. Red Hairline Under Appbar

The header has a 2px bottom border in NASA red — this is a **structural signature**:

```css
header.appbar {
  border-bottom: 2px solid color-mix(in oklch, var(--nasa-red) 70%, transparent);
}
```

---

## 6. Component Patterns

### Buttons

**Primary (NASA Blue):**
```css
.btn {
  background: var(--nasa-blue-fill);
  color: var(--on-accent);
  border: none;
  border-radius: 10px;
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-body);
  font-weight: 700;
  min-height: 48px;
}
.btn:hover {
  background: var(--nasa-blue-dark);
}
```

**CTA (NASA Red):**
```css
.btn.red {
  background: var(--nasa-red);
}
.btn.red:hover {
  filter: brightness(.93);
}
```

**Secondary (Outline):**
```css
.btn.secondary {
  background: var(--card);
  color: var(--nasa-blue);
  border: 2px solid var(--nasa-blue);
}
```

**Sizing:**
- Default: `min-height: 48px` (touch-friendly)
- Small variant: `.btn.small` → `min-height: 44px`, `padding: var(--space-2xs) var(--space-sm)`

### Cards

**Stop Cards (Directory):**
```css
.stopcard {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.stopcard:hover {
  border-color: var(--nasa-blue);
}
```

Features:
- Numbered index badge (auto-counter) in top-left
- Thumbnail height: 120px (portrait) or 140px wide (landscape via container query)
- Body padding: `14px 16px`

### Chips & Badges

**Chips (filter buttons):**
```css
button.chip {
  font-size: 11px;
  background: var(--chip-blue-bg);
  color: var(--nasa-blue);
  border: 1.5px solid transparent;
  border-radius: 20px;
  padding: 6px 12px;
  min-height: 36px;
}
button.chip.active {
  background: var(--nasa-blue-fill);
  color: var(--on-accent);
}
```

**Read-only tags:**
```html
<span class="chip">Structural Dynamics</span>
<span class="chip grey">Legacy</span>
```

**Coming Soon badge:**
```css
.badge-soon {
  background: var(--soon-bg);
  color: var(--soon-ink);
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
}
```

### Modals (Quickstart Pattern)

**Structure:**
```html
<div class="quickstart-modal">
  <div class="quickstart-content">
    <button class="quickstart-close">×</button>
    <div class="quickstart-header">
      <div class="quickstart-icon">🎯</div>
      <h1 class="quickstart-title">Title</h1>
      <p class="quickstart-subtitle">Subtitle</p>
    </div>
    <div class="quickstart-body">
      <!-- Content sections -->
    </div>
  </div>
</div>
```

**Header gradient:**
```css
.quickstart-header {
  background:
    radial-gradient(1200px 300px at 20% -10%, rgba(252,61,33,.25), transparent 60%),
    radial-gradient(900px 400px at 90% 10%, rgba(31,90,200,.35), transparent 60%),
    linear-gradient(160deg, oklch(48% 0.21 264.7) 0%, oklch(42% 0.20 264.7) 100%);
  color: var(--on-accent);
  border-bottom: 2px solid var(--nasa-red);
}
```

**Body:**
- White card background: `background: var(--card)`
- Section headings: uppercase, NASA blue, left red border (3px)

### Hero Sections

**Pattern:**
```css
.hero {
  background:
    radial-gradient(1200px 400px at 20% -10%, rgba(252,61,33,.35), transparent 60%),
    radial-gradient(900px 500px at 90% 10%, rgba(31,90,200,.55), transparent 60%),
    linear-gradient(160deg, var(--hero-navy-1) 0%, var(--nasa-blue-fill) 60%, var(--hero-navy-2) 100%);
  color: var(--on-accent);
  padding: var(--space-xl) var(--space-gutter) var(--space-lg);
}
```

With photo overlay:
```css
.hero.bg-floor {
  background: linear-gradient(160deg, rgba(6,26,63,.84), rgba(11,61,145,.80)), var(--hero-bg-url);
  background-size: cover;
  background-position: center;
}
```

**Typography:**
- Eyebrow: 12px, uppercase, letter-spacing 2px, opacity .85
- H1: `font-size: var(--text-display)`
- Body: `font-size: var(--text-lg)`, max-width 46ch

### Numbered Lists (Steps)

**Pattern:**
```css
.quickstart-steps {
  list-style: none;
  counter-reset: step-counter;
}
.quickstart-steps li {
  counter-increment: step-counter;
  padding-left: 48px;
  margin-bottom: var(--space-lg);
}
.quickstart-steps li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 2px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--nasa-red) 0%, oklch(55% 0.18 33.0) 100%);
  color: var(--on-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 2px 8px rgba(252,61,33,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
}
```

---

## 7. Animation & Motion

### Timing

- Fast interactions: `.15s ease` or `.2s ease`
- Page transitions: `.25s ease` (fade-in on `.view.active`)
- Modal entry: `.3s ease-out` (fade) + `.4s ease-out` (slide up)

### Reduced Motion

Always wrap non-essential animations:
```css
@media (prefers-reduced-motion: reduce) {
  .element { transition: none; }
}
```

### Scroll-Driven Reveals

Key facts, gallery items, and interact cards fade+rise into view:
```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .keyfacts li {
      animation: reveal-up .5s linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
    }
  }
}
```

**Do not apply to above-fold content** (headers, hero sections).

---

## 8. Accessibility Requirements

### Minimum Touch Targets

- Buttons: `min-height: 48px` (primary), `44px` (small/secondary)
- Chips: `min-height: 36px`
- Modal close button: `width: 40px; height: 40px`

### Color Contrast

All text meets **WCAG 2.1 AA**:
- Body text on white: 4.5:1+
- Large text (18px+ or 14px+ bold): 3:1+
- UI controls (buttons, borders): 3:1+

**Do not use low-opacity text on colored backgrounds** without contrast testing.

### Focus Indicators

Native browser focus rings are visible. For custom controls:
```css
.element:focus-visible {
  outline: 2px solid var(--nasa-blue);
  outline-offset: 2px;
}
```

### Semantic HTML

- Use `<button>` for interactive elements (not `<div onclick>`)
- Provide `aria-label` for icon-only buttons
- Use `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`
- Lightbox uses native `<dialog>` (built-in focus trapping)

---

## 9. Layout Patterns

### The Shell

```css
.shell {
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--bg);
  background-image: radial-gradient(1100px 700px at 50% -8%, color-mix(in oklch, var(--nasa-blue-fill) 8%, transparent), transparent 60%);
}
```

All views render inside `.shell`. The 900px max-width keeps content readable on iPad/laptop.

### Page Padding

```css
.pad {
  padding: var(--space-lg) var(--space-gutter);
}
```

### Container Queries

Cards and galleries use `@container` queries (not `@media`):
```css
.shell {
  container-type: inline-size;
}
@container (min-width: 480px) {
  .stopcard { flex-direction: row; }
}
```

**Why:** The actual available width varies (phone → 900px), so responsive breakpoints should measure the container, not the viewport.

---

## 10. Iconography & Emojis

**Icons:**
- The app uses **emoji** for most icons (🎯, 📱, 📚, ⭐, etc.)
- Navigation glyphs use custom unicode symbols (`⌂` = home, `≣` = menu, `✉` = contact)
- Use `font-size: 19px` for nav glyphs, larger (56px) for modal header icons

**When to use emoji:**
- Section headers in modals
- Feature cards
- Tips/callouts
- **Not for:** Primary navigation, buttons (use text labels)

**NASA badge logo:**
The appbar includes a white badge with the Test Lab logo:
```html
<button class="badge">
  <img src="media/shared/img/Test-Lab-logo.png" alt="Test Lab">
</button>
```

---

## 11. Content Guidelines

### Tone

- **Technical but approachable**: not academic, not marketing fluff
- Sentence case for body text, uppercase for labels/chips/eyebrows
- Active voice: "This chamber simulates lunar South Pole lighting" (not "Lunar lighting is simulated by...")

### Punctuation Rules

**Never use em dashes (—).** Use these instead:

- **Semicolon (;)** for connecting related independent clauses
- **Colon (:)** for introducing lists or explanations
- **Period (.)** to start a new sentence
- **Regular dash (-)** for ranges or compound modifiers

```
❌ Wrong: "The modal displays help content — anyone can lead a tour."
✅ Correct: "The modal displays help content; anyone can lead a tour."
✅ Correct: "The modal displays help content: anyone can lead a tour."
✅ Correct: "The modal displays help content. Anyone can lead a tour."

❌ Wrong: "This app was built for Test Lab representatives — tour guides, engineers, and coordinators."
✅ Correct: "This app was built for Test Lab representatives: tour guides, engineers, and coordinators."

❌ Wrong: "The test chamber — 65 feet tall — simulates lunar gravity."
✅ Correct: "The test chamber (65 feet tall) simulates lunar gravity."
```

**Why:** Em dashes create ambiguity in technical documentation. Semicolons, colons, and periods provide clearer structural meaning.

### Text Lengths

- Hero headlines: 8-12 words max
- Button labels: 2-4 words ("Start the tour", "Browse Tour Stops")
- Chip text: 1-3 words ("Structural Dynamics", "Coming Soon")
- Modal subtitles: 10-15 words

### Writing for Numeric Readouts

Use monospace + amber for key facts:
```html
<li>
  <span class="num">1963</span>
  <span class="lbl">Year Commissioned</span>
</li>
```

**Format numbers for scannability:**
- Dates: `1963` (year only) or `June 1963`
- Dimensions: `65 ft × 40 ft`
- Force: `20,000 lbf` (use commas)
- Temperature: `-250°F` or `300°C`

---

## 12. File Organization

### CSS Structure

```
css/
  variables.css      ← Design tokens (colors, spacing, type scale)
  base.css           ← Reset, shell, appbar, tabbar, global layout
  components.css     ← Buttons, cards, chips, hero, media, audio
  lab-cards.css      ← Bento grid layout for lab category cards
  tabs.css           ← Tab navigation within stop detail views
  search.css         ← Search box and filter chips
  brief.css          ← Project brief styles (internal documentation)
  quickstart-modal.css    ← Tour Guide Quick Start modal
  request-info-modal.css  ← Request Information modal
```

**Load order in HTML:**
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
<!-- Feature-specific stylesheets after base -->
```

### Media Assets

```
media/
  shared/
    img/
      Test-Lab-logo.png
      TouAppIconSquare.jpg
  {stop-id}/
    img/
      hero.jpg        ← Primary photo
      hero-alt.jpg    ← Alternate view
      detail-*.jpg    ← Gallery photos
    audio/
      narration.mp3
      narration.hash.json
    video/
      overview.mp4
```

---

## 13. Testing Checklist for New Features

Before marking a feature complete, verify:

### Visual Cohesion
- [ ] Colors use CSS custom properties (no hardcoded hex)
- [ ] Spacing uses `--space-*` tokens (no bare `px` for margins/padding)
- [ ] Typography uses `var(--font)` or `var(--font-mono)` appropriately
- [ ] Buttons have `min-height: 48px` (or 44px for small)
- [ ] Cards use `box-shadow: var(--shadow)`

### Signature Elements
- [ ] Modal headers have the red corner-bracket overlay (if applicable)
- [ ] Key numeric readouts use amber glow (if applicable)
- [ ] Active states use the lit blue indicator pattern (tabs, buttons)

### Dark Mode
- [ ] Feature renders correctly with `[data-theme="dark"]`
- [ ] No hardcoded light-mode-only colors
- [ ] Shadows and borders remain visible

### Accessibility
- [ ] All interactive elements are `<button>` or `<a>` (not `<div onclick>`)
- [ ] Icon-only buttons have `aria-label`
- [ ] Focus indicators are visible (`:focus-visible`)
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Touch targets are 44px+ in both dimensions

### Responsiveness
- [ ] Feature works at 320px (narrow phone) and 900px (iPad)
- [ ] Text remains readable (no tiny fonts, no overflow)
- [ ] Buttons stack on mobile if needed

### Motion
- [ ] Animations respect `prefers-reduced-motion: reduce`
- [ ] Transitions are `.2s ease` or faster (not sluggish)

---

## 14. Common Mistakes to Avoid

### ❌ Don't

- Hardcode hex colors (`#0b3d91`) — use `var(--nasa-blue)`
- Use bare `px` values for spacing — use `var(--space-*)`
- Use generic sans-serif — use `var(--font)`
- Use NASA red for text or large fills — red is an accent, not a primary color
- Use amber for backgrounds — amber is a highlight glow, not a surface
- Write separate dark-mode styles — the token system handles it
- Use `<div onclick>` — use `<button>` for a11y
- Skip `min-height: 44px` on touch targets
- Ignore `prefers-reduced-motion`

### ✅ Do

- Reference design tokens (`var(--nasa-blue)`, `var(--space-lg)`)
- Use monospace for numeric readouts
- Add the red hairline or corner brackets for "instrument panel" feel
- Test in light + dark mode
- Verify touch target sizes (48px+ primary, 44px+ secondary)
- Use semantic HTML (`<button>`, `<nav>`, `<section>`)
- Check color contrast (WCAG 2.1 AA)

---

## 15. Quick Reference: CSS Custom Properties

```css
/* Colors */
--nasa-blue, --nasa-blue-fill, --nasa-blue-dark
--nasa-red
--good, --amber
--ink, --ink-soft
--bg, --card, --panel-2
--line
--on-accent

/* Typography */
--font, --font-mono
--text-sm, --text-body, --text-lg, --text-h2, --text-h1, --text-display

/* Spacing */
--space-3xs, --space-2xs, --space-xs, --space-sm
--space-md, --space-lg, --space-xl
--space-gutter

/* Shape */
--radius (10px), --radius-sm (6px)
--shadow

/* Semantic Backgrounds */
--chip-blue-bg, --chip-grey-bg
--soon-bg, --soon-ink
--correct-bg, --correct-ink, --wrong-bg
--warn-bg, --code-bg
```

---

## 16. Where to Look for Examples

**Buttons:** `css/components.css` lines 1-12, `index.html` lines 219-220  
**Modals:** `css/quickstart-modal.css`, `tour-guide-quickstart.html`  
**Cards:** `css/components.css` lines 166-193, `css/lab-cards.css`  
**Hero sections:** `css/components.css` lines 22-42, `index.html` lines 214-222  
**Numbered lists:** `css/quickstart-modal.css` lines 215-252  
**Chips:** `css/components.css` lines 195-214  
**Key facts (amber glow):** `css/components.css` lines 221-229

---

## Summary

Every new feature should feel like it was built by the same team, for the same mission-control console interface. The app's visual language is **data-forward, precision-engineered, and NASA-branded** — not a generic mobile app template. When in doubt, reference existing components in `css/components.css` and match their patterns exactly.

**Core signature elements:**
1. NASA blue + red as primary brand (not arbitrary colors)
2. Amber glow on numeric readouts (monospace, text-shadow)
3. Red corner brackets on modals and hero photos (targeting reticle)
4. Lit blue indicator bars on active states (tabs, progress)
5. Starfield + grain overlays (subtle, more visible in dark mode)
6. Fluid spacing + type scales (no hardcoded breakpoints)
7. oklch() color space (perceptually uniform, dark mode automatic)

**When building a new feature:**
1. Start with `css/variables.css` tokens — never hardcode colors/spacing
2. Copy an existing component pattern (button, card, modal) and adapt
3. Test in light + dark mode
4. Verify touch targets (48px+) and color contrast (WCAG AA)
5. Add `prefers-reduced-motion` guards for animations

This is a **design system**, not a loose style guide. Consistency is the goal — not just visual polish, but a cohesive user experience that reads as one engineered interface.
