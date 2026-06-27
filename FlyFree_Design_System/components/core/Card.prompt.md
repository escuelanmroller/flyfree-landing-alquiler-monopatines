Content container with three visual variants. Product cards show image + name + price. Feature cards show icon + title + description. Category cards are full-bleed image banners.

```jsx
// Product card
<Card
  variant="product"
  title="RS600"
  subtitle="Patines inline de alto rendimiento"
  tag="Inline Skates"
  priceFormatted="$3,290 MXN"
  badge={<Badge variant="yellow">Nuevo</Badge>}
/>

// Feature card
<Card
  variant="feature"
  title="Envío Gratis"
  description="En compras mayores a $1,500 MXN a todo México."
  icon={<svg>…</svg>}
/>

// Category card
<Card
  variant="category"
  title="Inline Skates"
  subtitle="15 modelos disponibles"
  tag="Categoría"
  image="/assets/store.jpg"
/>
```

**Hover behavior:** Product + category cards lift (`translateY(-3px)`) and scale image slightly. Category cards reveal a "Ver →" chip on hover.
