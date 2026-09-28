// Galería "Lo que construimos".
//
// Cómo agregar una imagen:
//   1. Copiá la foto a public/images/proyectos/ (jpg o webp, idealmente < 300 KB).
//   2. Buscá un hueco con `src: null` de la categoría correspondiente y poné la ruta,
//      por ejemplo: src: '/images/proyectos/pcb-layout.jpg'
//      (o agregá un objeto nuevo al array).
//   3. Completá caption y alt en español e inglés: ['texto ES', 'text EN'].
//
// Las entradas con `src: null` se muestran como espacio reservado ("Próximamente").
//
// Categorías: 'app' (plataforma app.cattechfuture.com), 'pcb' (diseño de placas), 'field' (pruebas).

export const galleryCategories = [
  { id: 'all', label: ['Todo', 'All'] },
  { id: 'app', label: ['Plataforma de monitoreo', 'Monitoring platform'] },
  { id: 'pcb', label: ['Diseño de placas', 'Board design'] },
  { id: 'field', label: ['Pruebas', 'Testing'] },
];

// Placa del controlador (KiCad). Se usa en la sección "Hardware propio" y en la galería.
export const pcbImages = [
  {
    src: '/images/proyectos/pcb-render-3d.jpeg',
    label: ['Vista 3D', '3D view'],
    caption: [
      'Vista 3D de la placa del controlador (versión 1.0)',
      '3D view of the controller board (version 1.0)',
    ],
    alt: [
      'Render 3D de la placa verde del controlador con el ESP32, regulador y borneras',
      '3D render of the green controller board with the ESP32, regulator and screw terminals',
    ],
  },
  {
    src: '/images/proyectos/pcb-esquematico.jpeg',
    label: ['Esquemático', 'Schematic'],
    caption: [
      'Esquemático del controlador: ESP32, fuente conmutada de 12 V y entradas protegidas',
      'Controller schematic: ESP32, 12 V switching supply and protected inputs',
    ],
    alt: [
      'Esquemático electrónico del controlador dibujado en KiCad',
      'Electronic schematic of the controller drawn in KiCad',
    ],
  },
  {
    src: '/images/proyectos/pcb-layout.jpeg',
    label: ['Diseño PCB', 'PCB layout'],
    caption: [
      'Diseño (layout) de la placa: pistas, planos de masa y ubicación de componentes',
      'Board layout: traces, ground planes and component placement',
    ],
    alt: [
      'Layout de la placa de circuito impreso con pistas en ambas caras',
      'Printed circuit board layout with traces on both sides',
    ],
  },
];

export const gallery = [
  {
    src: '/images/proyectos/app-historial-graficos.jpg',
    category: 'app',
    caption: [
      'Historial de mediciones y gráficos: caudal, humedad y temperatura del último mes',
      'Measurement history and charts: flow, humidity and temperature over the last month',
    ],
    alt: [
      'Captura de la plataforma con gráficos de línea de caudalímetro, humedad y temperatura',
      'Screenshot of the platform with line charts for flow meter, humidity and temperature',
    ],
  },
  {
    src: null,
    category: 'app',
    caption: ['Alertas y configuración del riego', 'Alerts and irrigation settings'],
    alt: ['', ''],
  },
  {
    src: '/images/proyectos/prueba-riego-macetas.jpg',
    category: 'field',
    caption: [
      'Prueba piloto interna: riego por goteo automático en macetas con sensor de humedad',
      'Internal pilot: automatic drip irrigation in pots with a moisture sensor',
    ],
    alt: [
      'Macetas con plantines de tomate, mangueras de goteo y gabinete del controlador',
      'Pots with tomato seedlings, drip lines and the controller enclosure',
    ],
  },
  {
    src: '/images/proyectos/controlador-esp32-gabinete.jpg',
    category: 'field',
    caption: [
      'Controlador ESP32 armado dentro de su gabinete para exterior',
      'ESP32 controller assembled inside its outdoor enclosure',
    ],
    alt: [
      'Placa ESP32 con cables conectados dentro de un gabinete estanco',
      'ESP32 board with wires connected inside a sealed enclosure',
    ],
  },
  {
    src: '/images/proyectos/plantin-prueba.jpg',
    category: 'field',
    caption: [
      'Plantines creciendo con el riego automatizado',
      'Seedlings growing with automated irrigation',
    ],
    alt: ['Plantín de tomate en primer plano', 'Close-up of a tomato seedling'],
  },
  ...pcbImages.map((img) => ({ ...img, category: 'pcb' })),
];
