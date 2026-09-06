# +2 — Web estática

HTML5, Bootstrap 5.3.3 servido localmente, CSS y JavaScript vanilla. Sin compilación. Abre index.html o sube el contenido de esta carpeta a un hosting estático.

## Personalizar
- js/config.js: configuración del canal de contacto. No contiene secciones personales.
- css/styles.css: colores, tipografía, diseño y responsive.
- js/main.js: catálogo de planes, preguntas frecuentes y campos del formulario.
- index.html: textos, precios, contacto y enlaces a redes (pendientes de secciones reales).
- legal/: borradores claramente identificados. Completar y revisar antes de aceptar clientes.

## Formulario
Por defecto contact.mode = 'draft': valida y prepara texto copiable. No envía datos, no simula éxito y no acepta pagos ni reservas.

WhatsApp: configura mode: 'whatsapp' y whatsapp: '34NUMERO', solo dígitos. Abre el mensaje preparado para que el visitante lo revise y lo envíe.

Formspree: configura mode: 'formspree' y formspreeEndpoint con el endpoint HTTPS real https://formspree.io/f/IDENTIFICADOR. Actualiza previamente privacidad. Incluye consentimiento, estados de envío y error. Comprueba el servicio con un envío real antes de abrir al público.

EmailJS o backend propio: sustituye la rama de envío en main.js usando el proveedor elegido. No pongas claves privadas en el frontend. El backend debe validar, limitar solicitudes y controlar spam. Los canales externos no se han probado porque no hay credenciales ni destinatario configurados.

## Decisiones antes de abrir
Completar contacto comercial, redes, datos legales y política de privacidad. Definir tarifa por hora para el dúo, duración mínima, jornadas largas, transporte, gastos, cancelaciones, anticipos, medios de pago y edad mínima. El servicio se limita exclusivamente a Madrid. No se ha inventado un precio definitivo: el modelo actual es presupuesto personalizado.

## Comprobaciones
Referencias locales y anclas verificadas; sintaxis JavaScript verificada. La revisión visual en navegador, interacción real, consola y ausencia de overflow a distintos anchos quedan pendientes: el entorno de Sites no permite previsualizar en navegador este proyecto estático. Revisar a 360, 390, 768 y 1440 píxeles, además de navegación con Tab y Enter, menú móvil, filtros, FAQ, selector, errores y copia del formulario. Probar cada canal al conectarlo.

Bootstrap conserva su licencia en css/bootstrap.min.css. Favicon tipográfico original; no se incluyen personajes ni fotografías de terceros.

## SEO local
Título y descripción orientados al acompañamiento social en Madrid, canonical, Open Graph, Twitter y datos estructurados Organization, WebSite y Service sin direcciones, reseñas ni precios inventados. Planes y FAQ disponibles en el HTML inicial. robots.txt y sitemap.xml incluyen la portada; borradores legales siguen con noindex.

La URL de referencia actual es https://mas-dos-planes.xx-kirito-xx011.chatgpt.site/. Al usar un dominio propio, sustituirla en canonical, og:url, JSON-LD, robots.txt y sitemap.xml. La vista privada de Sites requiere acceso y no sirve como web pública indexable: el SEO está preparado para el lanzamiento público, sin modificar permisos.
