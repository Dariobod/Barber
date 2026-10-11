# Barber Studio

Concepto responsive en HTML, CSS y JavaScript. Inspiración de estructura: https://enzos-barber-shop.webflow.io/. Diseño y textos propios. Sin framework ni dependencias npm.

## Desarrollo

Requiere Node.js 20 o superior. No necesita npm install.

```sh
npm run dev
npm run check
npm run build
```

El servidor está en http://127.0.0.1:4173. La salida de build está en dist/. Para trabajar en C:\codex\Barber, clonar allí el repositorio y ejecutar estos comandos.

## Publicación

### Cloudflare Pages

Conectar el repositorio `Dariobod/Barber` desde Workers & Pages → Create application → Pages → Import an existing Git repository. Seleccionar solo este repositorio al autorizar la integración de GitHub.

Configuración del proyecto:

- Rama de producción: `main`.
- Framework preset: `None`.
- Directorio raíz: raíz del repositorio (dejar vacío).
- Comando de build: `npm run check && npm run build`.
- Directorio de salida: `dist`.
- Variable de entorno: `NODE_VERSION=22` para producción y previews.

La conexión Git de Cloudflare Pages despliega automáticamente los pushes a `main` y puede generar previews de otras ramas y pull requests. Un commit local requiere un push a GitHub para iniciar el despliegue. No hacen falta tokens de Cloudflare en el código ni secretos de despliegue en GitHub Actions.

Proyecto de Cloudflare Pages: `barber-pips`, en la cuenta de la barbería. URL de producción: https://barber-pips.pages.dev/. La integración Git está configurada con `Dariobod/Barber` y producción desde `main`.

### Verificaciones en GitHub

El workflow `.github/workflows/check.yml` verifica y genera el sitio en pushes a `main` y pull requests. Cloudflare Pages realiza la publicación mediante su integración Git y también ejecuta los checks antes del build. El antiguo workflow de GitHub Pages se reemplazó por estas verificaciones para centralizar la publicación en Cloudflare.

## Archivos y alcance

- index.html: contenido y secciones.
- styles.css: diseño y responsive.
- script.js: menú y simulación de reserva.
- assets/: fotografías locales.
- scripts/: servidor, verificación y build.

Marca provisional, servicios y duraciones ilustrativos. Las fotografías no representan un local real de Barber Studio. El formulario no envía ni guarda datos, no consulta disponibilidad y no crea reservas. Dirección, contacto y tarifas pendientes de definir.

Próximos pasos: marca y datos reales, fotografías propias, integración de agenda o WhatsApp y publicación definitiva.

## Recursos

Fotografías de concepto de Unsplash:
- https://images.unsplash.com/photo-1503951914875-452162b0f3f1
- https://images.unsplash.com/photo-1621605815971-fbc98d665033

DM Sans y Playfair Display mediante Google Fonts, con fuentes del sistema como alternativa sin conexión.
