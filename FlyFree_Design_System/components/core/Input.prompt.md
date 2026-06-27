Text input — dark fill (#181818), 2px border (yellow on focus), uppercase label above, error message below.

```jsx
// Basic
<Input placeholder="Buscar productos..." label="Buscar" fullWidth />

// With icons
<Input
  label="Correo electrónico"
  type="email"
  placeholder="tu@email.com"
  leftIcon={<MailIcon size={16} />}
  fullWidth
/>

// Error state
<Input
  label="Contraseña"
  type="password"
  value={pass}
  onChange={e => setPass(e.target.value)}
  error="La contraseña debe tener al menos 8 caracteres."
  fullWidth
/>
```

**Focus:** Border shifts to `--color-brand-yellow` (#F5C800). Label also turns yellow.
**Error:** Border turns red (#EF4444), error message appears below.
