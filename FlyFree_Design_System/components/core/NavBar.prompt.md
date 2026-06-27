Top navigation bar — logo left, links center, CTA right. Futura Heavy throughout.

```jsx
const links = [
  { label: 'Patines', href: '#patines' },
  { label: 'Scooters', href: '#scooters' },
  { label: 'Cascos', href: '#cascos' },
  { label: 'Accesorios', href: '#accesorios' },
];

// Standard dark nav
<NavBar logoSrc="/assets/logo.webp" links={links} ctaLabel="Mi Cuenta" />

// Transparent (for hero overlays)
<NavBar logoSrc="/assets/logo.webp" links={links} variant="transparent" />

// Frosted glass overlay
<NavBar logoSrc="/assets/logo.webp" links={links} variant="overlay" sticky />
```

**Variants:** `dark` (solid black, default) · `transparent` (no bg — hero use) · `overlay` (frosted glass on scroll) · `light` (off-white bg)

Height is fixed at 68px. Logo max-height 32px. CTA is always yellow.
