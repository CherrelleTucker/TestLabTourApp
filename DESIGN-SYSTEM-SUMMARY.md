# Design System Summary — MSFC Test Lab Tour App

**Mission-Control Console Interface for NASA Test Laboratory Tours**

---

## Quick Start for Developers

**Before building any new feature:**

1. **Read:** `DESIGN-GUIDELINES.md` (comprehensive reference)
2. **Copy:** Existing component patterns from `css/components.css`
3. **Reference:** `TOUR-GUIDE-MODAL-DESIGN-REVIEW.md` (example of correct implementation)
4. **Test:** Light mode, dark mode, 320px → 900px, reduced motion

**Golden rule:** If it looks like it came from a different app, it's wrong.

---

## Core Design Identity

This app reads as a **NASA mission-control console interface** — not a mobile app template, not a corporate website. Every visual element echoes test instrumentation:

- **Precision data** (monospace + amber glow for numbers)
- **Telemetry readouts** (instrument-panel aesthetics)
- **Engineered surfaces** (console panels, targeting reticles)
- **NASA branding** (blue primary, red accents — never arbitrary colors)

**Tone:** Technical but approachable. Data-forward, not marketing fluff.

---

## Five Signature Visual Elements

### 1. Console Corner Brackets (Red Hairlines)

**Where:** Modals, hero photos  
**What:** 8 red gradient lines forming targeting-reticle corners

```css
.element::before {
  background-image: /* 8 linear-gradient lines */;
  background-size: 18px 2px, 2px 18px (repeated);
  background-position: corners;
}
```

**Reads as:** Instrument overlay on hardware — intentional, not decorative.

### 2. Amber Glow on Key Numbers

**Where:** Key facts, specs, dimensions  
**What:** Monospace + amber color + text-shadow glow

```css
.num {
  font-family: var(--font-mono);
  color: var(--amber);
  text-shadow: 0 0 14px color-mix(in oklch, var(--amber) 55%, transparent);
}
```

**Reads as:** Telemetry readout — lit instrument panel display.

### 3. NASA Red Structural Accents

**Where:** Appbar bottom border (2px), section headers (3px left border), modal header borders  
**What:** Thin red hairlines that structure the layout (not fills)

```css
header.appbar {
  border-bottom: 2px solid color-mix(in oklch, var(--nasa-red) 70%, transparent);
}
```

**Reads as:** Console panel seams, not decoration.

### 4. Lit Blue Indicator (Active States)

**Where:** Tab bar active button (top bar), progress indicators  
**What:** 2px blue bar that grows when active

```css
nav.tabbar button.active::before {
  width: 22px;
  height: 2px;
  background: var(--nasa-blue);
}
```

**Reads as:** Powered-on status light.

### 5. Starfield + Grain Overlays

**Where:** Global background (`.starfield`, `.grain`)  
**What:** Subtle texture, more visible in dark mode

```css
.starfield {
  opacity: .08; /* light mode */
  opacity: .4;  /* dark mode */
}
```

**Reads as:** Deep-space mission backdrop.

---

## Color Rules (5 Colors to Remember)

| Color | Token | Use |
|-------|-------|-----|
| **NASA Blue** | `var(--nasa-blue)` | Primary actions, links, accents |
| **NASA Red** | `var(--nasa-red)` | CTA buttons, structural hairlines |
| **Amber** | `var(--amber)` | Numeric readouts ONLY (never fills/backgrounds) |
| **Ink** | `var(--ink)` / `var(--ink-soft)` | Text (primary / muted) |
| **Card** | `var(--card)` | White elevated surfaces |

**All other colors are semantic derivatives** (chips, badges, state colors) — never invent new accent colors.

**Dark mode:** Automatic via `[data-theme="dark"]` — all tokens switch.

---

## Typography Rules

| Context | Font | Size | Weight |
|---------|------|------|--------|
| Body text | `var(--font)` | 1rem (16px) | 400 |
| Headings | `var(--font)` | `var(--text-h1/h2)` | 700 |
| Buttons | `var(--font)` | `var(--text-body)` | 700 |
| **Numeric data** | `var(--font-mono)` | 20px | 800 |
| Labels/chips | `var(--font)` | 11-13px | 600-700 + uppercase |

**When to use monospace:**
- Key facts (dimensions, dates, capacities)
- Time readouts (audio player)
- Index numbers (stop cards)
- **Not for:** Body paragraphs, buttons, navigation

---

## Spacing Rules

**Always use tokens, never bare `px` values:**

```css
/* ✅ Correct */
padding: var(--space-lg) var(--space-gutter);
margin: var(--space-xl) 0;
gap: var(--space-sm);

/* ❌ Wrong */
padding: 20px 22px;
margin: 48px 0;
gap: 16px;
```

**Common patterns:**
- Page padding: `padding: var(--space-lg) var(--space-gutter)`
- Section breaks: `margin: var(--space-xl) 0`
- Card internal: `padding: var(--space-xs) var(--space-sm)`

---

## Writing & Punctuation Rules

**Never use em dashes (—).** Use these instead:

| Instead of em dash | Use this | Example |
|-------------------|----------|---------|
| Connecting clauses | Semicolon (;) | "The modal displays help; anyone can lead a tour." |
| Introducing explanation | Colon (:) | "The app serves two goals: educate and advertise." |
| Separating ideas | Period (.) | "The chamber is 65 feet tall. It simulates lunar gravity." |
| Ranges or compounds | Regular dash (-) | "The 1960s-era test stand is still operational." |
| Parenthetical info | Parentheses () | "The test chamber (65 feet tall) simulates gravity." |

**Why:** Em dashes create ambiguity in technical documentation. Semicolons, colons, and periods provide clearer structural meaning.

---

## Button Patterns (Copy These Exactly)

### Primary (NASA Blue)
```css
.btn {
  background: var(--nasa-blue-fill);
  color: var(--on-accent);
  border: none;
  border-radius: 10px;
  padding: var(--space-xs) var(--space-sm);
  font-weight: 700;
  min-height: 48px;
}
```

### CTA (NASA Red)
```css
.btn.red {
  background: var(--nasa-red);
}
```

### Secondary (Outline)
```css
.btn.secondary {
  background: var(--card);
  color: var(--nasa-blue);
  border: 2px solid var(--nasa-blue);
}
```

**Touch targets:** 48px primary, 44px secondary minimum.

---

## Modal Pattern (Copy This Structure)

```html
<div class="quickstart-modal">
  <div class="quickstart-content">
    <button class="quickstart-close" aria-label="Close">×</button>
    
    <div class="quickstart-header">
      <div class="quickstart-icon">🎯</div>
      <h1 class="quickstart-title">Title</h1>
      <p class="quickstart-subtitle">Subtitle</p>
    </div>
    
    <div class="quickstart-body">
      <!-- White card content -->
    </div>
  </div>
</div>
```

**CSS:**
- Header: NASA blue gradient + radial overlays + 2px red bottom border
- Body: White card (`var(--card)`)
- Corner brackets: Red hairlines via `::before` pseudo-element
- Close button: 44px circle, rotates 90deg on hover (disable in reduced motion)

**See:** `TOUR-GUIDE-MODAL-DESIGN-REVIEW.md` for full implementation.

---

## Card Patterns

### Stop Cards (Directory)
```css
.stopcard {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.stopcard:hover {
  border-color: var(--nasa-blue);
}
```

**Features:**
- Auto-numbered badge (CSS counter) in top-left
- Thumbnail: 120px height (portrait) or 140px width (landscape)
- Hover: blue border

### Feature Cards (Modal Content)
```css
.feature-card {
  background: linear-gradient(135deg, oklch(94% 0.008 264.7), oklch(98% 0.003 264.7));
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  position: relative;
}
.feature-card::before {
  /* Left blue accent bar */
  width: 3px;
  background: var(--nasa-blue);
  opacity: 0.3; /* 1 on hover */
}
```

---

## Numbered Lists (Steps)

```css
.steps {
  list-style: none;
  counter-reset: step-counter;
}
.steps li {
  counter-increment: step-counter;
  padding-left: 48px;
}
.steps li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--nasa-red) 0%, oklch(55% 0.18 33.0) 100%);
  border-radius: 50%;
  /* ... (see design guidelines for full styles) */
}
```

**Reads as:** Console button indicators (red gradient + inset highlight).

---

## Accessibility Checklist

### Required for Every Feature

- [ ] All touch targets ≥44px (48px for primary buttons)
- [ ] All colors meet WCAG 2.1 AA contrast (4.5:1 body, 3:1 large text)
- [ ] All interactive elements use `<button>` or `<a>` (not `<div onclick>`)
- [ ] Icon-only buttons have `aria-label`
- [ ] Animations respect `prefers-reduced-motion: reduce`
- [ ] Works at 320px (narrow phone) and 900px (iPad)
- [ ] Dark mode renders correctly

### Focus Indicators

Browser default focus rings are visible. For custom controls:

```css
.element:focus-visible {
  outline: 2px solid var(--nasa-blue);
  outline-offset: 2px;
}
```

---

## Animation Rules

**Timing:**
- Fast interactions: `.15s` or `.2s ease`
- Page transitions: `.25s ease`
- Modal entry: `.3s ease-out` (fade) + `.4s ease-out` (slide)

**Always guard:**
```css
@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
  .element:hover {
    transform: none; /* Disable translateY, rotate, etc. */
  }
}
```

---

## Common Mistakes to Avoid

### ❌ Don't

1. Hardcode hex colors (`#0b3d91`) — use `var(--nasa-blue)`
2. Use bare `px` for spacing — use `var(--space-*)`
3. Use NASA red for text or large fills — red is an accent
4. Use amber for backgrounds — amber is a numeric highlight
5. Write separate dark-mode styles — tokens handle it
6. Use `<div onclick>` — use `<button>`
7. Skip `min-height: 44px` on touch targets
8. Ignore `prefers-reduced-motion`
9. Use generic sans-serif — use `var(--font)`
10. Invent new accent colors — stick to the 5-color palette

### ✅ Do

1. Reference design tokens (`var(--nasa-blue)`, `var(--space-lg)`)
2. Use monospace for numeric readouts
3. Add red hairlines or corner brackets for "instrument panel" feel
4. Test in light + dark mode
5. Verify touch target sizes (48px+ primary, 44px+ secondary)
6. Use semantic HTML (`<button>`, `<nav>`, `<section>`)
7. Check color contrast (WCAG 2.1 AA)
8. Copy existing component patterns exactly

---

## File Reference

| File | Purpose |
|------|---------|
| `DESIGN-GUIDELINES.md` | **Start here** — comprehensive design system documentation |
| `TOUR-GUIDE-MODAL-DESIGN-REVIEW.md` | Example of correct implementation with checklist |
| `DESIGN-SYSTEM-SUMMARY.md` | This file — quick reference |
| `css/variables.css` | **Design tokens** (colors, spacing, typography) |
| `css/base.css` | Layout shell, appbar, tabbar, global styles |
| `css/components.css` | **Component library** (buttons, cards, chips, hero) |
| `css/quickstart-modal.css` | **Reference modal** (copy this pattern) |

---

## Testing Checklist (Before Shipping)

### Visual Cohesion
- [ ] Colors use CSS custom properties
- [ ] Spacing uses `--space-*` tokens
- [ ] Typography uses `var(--font)` or `var(--font-mono)`
- [ ] Buttons have `min-height: 48px` (or 44px)
- [ ] Cards use `box-shadow: var(--shadow)`

### Signature Elements
- [ ] Modal headers have red corner brackets (if applicable)
- [ ] Key numeric readouts use amber glow (if applicable)
- [ ] Active states use lit blue indicator (tabs/buttons)

### Functionality
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly (`[data-theme="dark"]`)
- [ ] Works at 320px and 900px
- [ ] All interactive elements are keyboard-operable
- [ ] Touch targets are 44px+ in both dimensions
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Animations respect `prefers-reduced-motion`

---

## Questions?

**Where to look:**
- **Design tokens:** `css/variables.css`
- **Button patterns:** `css/components.css` lines 1-12
- **Card patterns:** `css/components.css` lines 166-193
- **Modal pattern:** `css/quickstart-modal.css` (complete example)
- **Hero sections:** `css/components.css` lines 22-42

**Copy these exactly:**
- Tour Guide Quick Start modal (`#quickstart-modal`)
- Stop cards (`.stopcard`)
- Feature cards (`.feature-card`)
- Buttons (`.btn`, `.btn.red`, `.btn.secondary`)

**When in doubt:** Match existing components pixel-perfect.

---

## Summary: The 5-Color, 5-Element Design System

**5 Colors:**
1. NASA Blue (primary)
2. NASA Red (CTA + accents)
3. Amber (numeric highlights)
4. Ink (text)
5. Card (white surfaces)

**5 Signature Elements:**
1. Console corner brackets (red hairlines)
2. Amber glow on numbers (telemetry readouts)
3. Red structural accents (2-3px hairlines)
4. Lit blue indicator (active states)
5. Starfield + grain (background texture)

**Design goal:** Every new feature should feel like it was built by the same team, for the same mission-control console interface. Consistency is the goal — not just visual polish, but a cohesive experience that reads as one engineered system.

---

**Built for:** NASA Marshall Space Flight Center Test Laboratory  
**Purpose:** Self-guided tour app for visitors and tour guides  
**Interface Style:** Mission-control console / test instrument panel  
**Design Philosophy:** Function over decoration, data-forward, NASA-branded

**Version:** 1.0  
**Last Updated:** 2026-08-28
