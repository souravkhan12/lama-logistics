# Design tokens (quick reference)

Source of truth: `src/styles/globals.css` (`@theme inline` and `@layer components`).

## Layout classes

| Class | Use when |
|--------|----------|
| `layout-container` | Default page column: `max-width` + horizontal padding from `--space-container-padding`. |
| `layout-container-edge` | Same `max-width`, **no** horizontal padding — e.g. edge-to-edge panels inside the column; add `px-(--space-container-padding)` on inner content if needed. |

Example:

```html
<div class="layout-container">…navbar, services copy…</div>

<div class="layout-container-edge relative h-[520px] …">
  <!-- full-width strip inside max width; pad children yourself -->
</div>
```

## Spacing CSS variables

| Variable | Value | Tailwind (arbitrary) |
|----------|--------|----------------------|
| `--space-container-padding` | 20px | `px-(--space-container-padding)` |
| `--space-container-max-width` | 1440px | `max-w-(--space-container-max-width)` |
| `--space-section-padding` | 80px | `py-(--space-section-padding)` |
| `--space-navbar-height` | 104px | `h-(--space-navbar-height)` |
| `--space-hero-height` | 646px | `h-(--space-hero-height)` |
| `--space-gap-sm` | 16px | `gap-(--space-gap-sm)` |
| `--space-gap-md` | 24px | `gap-(--space-gap-md)` |
| `--space-gap-lg` | 32px | `gap-(--space-gap-lg)` |
| `--space-btn-x` / `--space-btn-y` | 32px / 16px | Buttons (see `button.tsx`) |

## Typography

Use the generated utilities: `text-h0`, `text-h1`, `text-h2`, `text-h3`, `text-b1`, `text-b2`, `text-b3`, `text-caption`. Sizes and line heights live in `globals.css`.

## Colors

`text-(--color-fg)`, `text-(--color-muted)`, `bg-(--color-bg)`, `text-primary`, `border-(--color-border)`, etc., as defined in `@theme`.
