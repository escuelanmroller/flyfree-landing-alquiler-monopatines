Primary action element — Futura Heavy, uppercase, 0px border-radius. Use for all CTAs.

```jsx
<Button variant="primary" size="lg">Comprar Ahora</Button>
<Button variant="secondary" size="md">Ver Catálogo</Button>
<Button variant="ghost" size="md">Más Info →</Button>
<Button variant="electric" size="lg">Oferta Flash</Button>
<Button variant="primary" size="md" leftIcon={<span>›</span>} fullWidth>Agregar al Carrito</Button>
```

**Variants:** `primary` (yellow fill) · `secondary` (yellow outline → fills on hover) · `ghost` (transparent, yellow text on hover) · `dark` (dark fill, white text) · `electric` (neon lime, high urgency)

**Sizes:** `sm` 10px · `md` 12px (default) · `lg` 13px · `xl` 15px

**Behavior:** Primary/electric lift on hover (`translateY(-1px)`) + glow shadow. Secondary fills on hover. All snap back on press.
