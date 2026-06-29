# Estado del proyecto — Alquiler Monopatines

**Última actualización:** 2026-06-29

## URLs

| Recurso | URL |
|---------|-----|
| Staging (usar para tests) | `https://flyfree-landing-alquiler-monopatine.vercel.app` |
| Dominio final (DNS pendiente) | `alquilerdemonopatin.com` |
| GitHub | `github.com/escuelanmroller/flyfree-landing-alquiler-monopatines` |
| Vercel proyecto | `escuelanmroller-8883` → `flyfree-landing-alquiler-monopatines` |

## ✅ Fase 1 — Completado

- [x] Formulario de reserva embebido (reemplazó popup Calendly)
- [x] Disponibilidad dinámica desde Calendly API (`/api/availability.js`)
- [x] Lead en Kommo → `FF | Leads → Alquiler Monopatin` (pipeline 8722923 / status 68948151)
- [x] Contacto vinculado con email y teléfono (`/leads/complex`)
- [x] Nota con detalles completos de la reserva
- [x] Pantalla de confirmación post-submit con resumen
- [x] Botón WhatsApp pre-llenado con datos → cliente envía → llega como mensaje real

## ⚠️ Bug a resolver

Logs muestran `Lead creado: undefined | Contacto creado: undefined` aunque el endpoint devuelve 200.
Verificar si los leads aparecen en Kommo. Si no aparecen, revisar la estructura de respuesta de `/leads/complex`.

## 📋 Fases pendientes

### A — WhatsApp Business automation en Kommo (sin código)
1. Kommo → Configuración → WhatsApp → Plantillas → Nueva plantilla
   - Categoría: Utilidad
   - Cuerpo: `Hola {{1}}, recibimos tu reserva de monopatín para el {{2}} a las {{3}}. En breve te confirmamos. — Fly Free Urban`
2. Esperar aprobación Meta (~24h)
3. Kommo → Automatizaciones → trigger: lead entra en "Alquiler Monopatin" → enviar template

### B — Make.com → Google Sheets
- Webhook de Kommo → Make.com → pestaña "Alquiler Monopatines" en Google Sheets
- Cada reserva = una fila con todos los campos

### C — Replicar para Rollers/Patines
- Mismo formulario en `/Users/gumercindoweb/Flyfree urban/` (proyecto patines)
- Columna "Alquiler Rollers" en Kommo
- Reutiliza código de kommo-booking.js

### D — DNS alquilerdemonopatin.com
- Dominio ya registrado en Vercel como alias del proyecto
- Apuntar registros DNS en registrador → Vercel
- Hacer ÚLTIMO, después de validar todo en staging

## Notas técnicas críticas

- Node: `22.x` en package.json (24.x no soportado en Vercel)
- `vercel.json`: `framework: null`, `outputDirectory: "."`
- Kommo API v4: body siempre como array `[{...}]`
- Token: env var `KOMMO_API_TOKEN` en Vercel (nunca en código)
- Subdominio Kommo: `1425` (env var `KOMMO_SUBDOMAIN`)
