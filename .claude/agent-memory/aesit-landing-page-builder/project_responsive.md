---
name: project-responsive-overhaul
description: Responsive overhaul completed for AESIT landing — media queries added to globals.css, Navbar logo classes added
metadata:
  type: project
---

Responsive overhaul completado en agosto 2026. Todos los cambios en dos archivos únicamente.

**Why:** La landing usaba valores fijos (logo 66px, padding 5rem, minmax(280px)) que rompían en mobile <480px y tablet <767px.

**How to apply:** No crear archivos nuevos. Todas las correcciones responsive van al final de `globals.css` en bloques @media ordenados de mayor a menor breakpoint (767, 480, 360). Para el Navbar, agregar clases CSS a los `<Image>` en lugar de cambiar lógica JS.

## Cambios aplicados

### `app/globals.css`
- `.activities-grid`: `minmax(280px, 1fr)` → `minmax(min(280px, 100%), 1fr)`
- `.socios-grid`: `minmax(260px, 1fr)` → `minmax(min(260px, 100%), 1fr)`
- Bloque `@media (max-width: 767px)`: navbar 2 cols, altura 56px, drawer top 56px, hero padding-top 56px, hero__content 2.5rem/2rem, mv-card 1.75rem, carousel 160px/110px, socios/contacto-hero 6rem/3rem
- Bloque `@media (max-width: 480px)`: logo 40px/28px, hero buttons full-width column, activities 1 col, mv-card 1.5rem, carousel 130px/80px, footer bottom column, CTA actions full-width
- Bloque `@media (max-width: 360px)`: ocultar nombre logo, container 0.875rem, section padding reducido

### `components/Navbar.tsx`
- Agregadas clases `navbar__logo-img--icon` y `navbar__logo-img--name` a los dos `<Image>` del logo (sin cambiar lógica)
- Los estilos inline se sobreescriben con `!important` en las media queries del CSS
