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

El workflow de GitHub Pages verifica, genera y publica cada push a main. Seleccionar GitHub Actions en Settings → Pages antes del primer despliegue. La activación del hosting debe verificarse por separado.

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
