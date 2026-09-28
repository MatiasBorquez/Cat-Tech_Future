import React, { useState, useEffect } from 'react';
import './App.css';
import { gallery, galleryCategories, pcbImages } from './data/gallery';
import AppScreen from './components/AppScreen';

const svgProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

const Icons = {
  zap: (
    <svg {...svgProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  moon: (
    <svg {...svgProps}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
  ),
  sun: (
    <svg {...svgProps}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
  ),
  globe: (
    <svg {...svgProps}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
  ),
  cpu: (
    <svg {...svgProps}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
  ),
  code: (
    <svg {...svgProps}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  ),
  chart: (
    <svg {...svgProps}><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
  ),
  sliders: (
    <svg {...svgProps}><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
  ),
  sparkles: (
    <svg {...svgProps}><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" /></svg>
  ),
  lightbulb: (
    <svg {...svgProps}><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17h8v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" /></svg>
  ),
  compass: (
    <svg {...svgProps}><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
  ),
  users: (
    <svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  shield: (
    <svg {...svgProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  wrench: (
    <svg {...svgProps}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  ),
  cart: (
    <svg {...svgProps}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
  ),
  landmark: (
    <svg {...svgProps}><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></svg>
  ),
  mapPin: (
    <svg {...svgProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  leaf: (
    <svg {...svgProps}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
  ),
  droplet: (
    <svg {...svgProps}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
  ),
  mail: (
    <svg {...svgProps}><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
  ),
  message: (
    <svg {...svgProps}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  ),
  instagram: (
    <svg {...svgProps}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  ),
  check: (
    <svg {...svgProps}><polyline points="20 6 9 17 4 12" /></svg>
  ),
  arrowUp: (
    <svg {...svgProps}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
  ),
  close: (
    <svg {...svgProps}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  ),
  chevron: (
    <svg {...svgProps}><polyline points="6 9 12 15 18 9" /></svg>
  ),
  chevronLeft: (
    <svg {...svgProps}><polyline points="15 18 9 12 15 6" /></svg>
  ),
  chevronRight: (
    <svg {...svgProps}><polyline points="9 18 15 12 9 6" /></svg>
  ),
  home: (
    <svg {...svgProps}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
  ),
  store: (
    <svg {...svgProps}><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M5 12v9h14v-9" /><rect x="9" y="15" width="6" height="6" /></svg>
  ),
  factory: (
    <svg {...svgProps}><path d="M2 20V9l6 4V9l6 4V4h4l2 16z" /><line x1="2" y1="20" x2="22" y2="20" /></svg>
  ),
  sprout: (
    <svg {...svgProps}><path d="M7 20h10" /><path d="M12 20v-8" /><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z" /><path d="M12 10c0-3.5 2.5-6 7-6 0 4-2.5 6-7 6" /></svg>
  ),
  bell: (
    <svg {...svgProps}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
  ),
  smartphone: (
    <svg {...svgProps}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
  ),
  clock: (
    <svg {...svgProps}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  trendingDown: (
    <svg {...svgProps}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>
  ),
  image: (
    <svg {...svgProps}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
  ),
  maximize: (
    <svg {...svgProps}><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
  ),
  external: (
    <svg {...svgProps}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
};

const WA_NUMBER = "543834324087";
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const DEMO_URL = "https://app.cattechfuture.com";
const IMG = "/images/proyectos";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('es');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { items, index }
  const [pcbView, setPcbView] = useState(0);

  // Initialize theme and language
  useEffect(() => {
    const savedTheme = window.localStorage?.getItem('theme') || 'light';
    const savedLang = window.localStorage?.getItem('language') || 'es';

    setCurrentTheme(savedTheme);
    setCurrentLang(savedLang);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.lang = savedLang;
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
      setNavScrolled(window.pageYOffset > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal-on-scroll animations (re-run when the gallery filter changes the rendered tiles)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [galleryFilter]);

  const overlayOpen = showCropModal || lightbox !== null;

  // Prevent body scroll when a modal or the lightbox is open
  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [overlayOpen]);

  const galleryItems = galleryFilter === 'all'
    ? gallery
    : gallery.filter((item) => item.category === galleryFilter);
  const galleryPhotos = galleryItems.filter((item) => item.src);

  const stepLightbox = (dir) => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index + dir + lb.items.length) % lb.items.length });
  };

  // Keyboard controls for modal and lightbox
  useEffect(() => {
    if (!overlayOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setShowCropModal(false);
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        stepLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        stepLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [overlayOpen]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (window.localStorage) {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setCurrentLang(newLang);
    if (window.localStorage) {
      window.localStorage.setItem('language', newLang);
    }
    document.documentElement.lang = newLang;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getText = (esText, enText) => {
    return currentLang === 'es' ? esText : enText;
  };

  const openCropModal = () => {
    setShowCropModal(true);
  };

  const closeCropModal = () => {
    setShowCropModal(false);
  };

  const openLightbox = (items, item) => {
    setLightbox({ items, index: items.indexOf(item) });
  };

  const WA_URL = waLink(getText(
    "Hola, me interesa conocer más sobre sus servicios",
    "Hi, I'd like to know more about your services"
  ));

  const navItems = [
    { href: '#soluciones', label: ["Soluciones", "Solutions"] },
    { href: '#ahorro', label: ["Ahorro", "Savings"] },
    { href: '#services', label: ["Servicios", "Services"] },
    { href: '#proyectos', label: ["Proyectos", "Projects"] },
  ];

  const audiences = [
    {
      icon: Icons.home,
      title: ["Hogares", "Homes"],
      tagline: [
        "Domótica para tu casa: comodidad, seguridad y menos gastos.",
        "Home automation: comfort, security and lower bills.",
      ],
      items: [
        ["Riego automático de jardín y huerta", "Automatic garden and vegetable-patch irrigation"],
        ["Luces y enchufes desde el celular", "Lights and outlets from your phone"],
        ["Sensores de seguridad y alertas", "Security sensors and alerts"],
        ["Control de consumo, tanque y bomba", "Power usage, water tank and pump control"],
      ],
      wa: ["Hola, me interesa automatizar mi hogar", "Hi, I'm interested in automating my home"],
    },
    {
      icon: Icons.store,
      title: ["PyMEs y comercios", "Small businesses"],
      tagline: [
        "Sabé qué pasa en tu negocio aunque no estés.",
        "Know what's happening in your business even when you're away.",
      ],
      items: [
        ["Monitoreo de heladeras, cámaras de frío y equipos", "Fridge, cold room and equipment monitoring"],
        ["Alertas al celular ante fallas o cortes", "Phone alerts on failures or outages"],
        ["Automatización de tareas repetitivas", "Automation of repetitive tasks"],
        ["Tableros con tus datos para decidir mejor", "Dashboards with your data for better decisions"],
      ],
      wa: ["Hola, tengo una PyME y me interesa automatizar", "Hi, I run a small business and want to automate"],
    },
    {
      icon: Icons.factory,
      title: ["Industrias", "Industry"],
      tagline: [
        "Procesos más eficientes y medidos en tiempo real.",
        "More efficient processes, measured in real time.",
      ],
      items: [
        ["Automatización y control de procesos", "Process automation and control"],
        ["Telemetría de máquinas y sensores industriales", "Machine telemetry and industrial sensors"],
        ["Registro histórico y reportes de consumo", "History logs and consumption reports"],
        ["Mantenimiento predictivo con datos e IA", "Predictive maintenance with data and AI"],
      ],
      wa: ["Hola, me interesa automatizar un proceso industrial", "Hi, I'd like to automate an industrial process"],
    },
    {
      icon: Icons.sprout,
      title: ["Productores", "Growers"],
      tagline: [
        "Regá lo justo y cuidá tu cultivo desde cualquier lugar.",
        "Water just what's needed and watch your crop from anywhere.",
      ],
      items: [
        ["Riego según la humedad real del suelo", "Irrigation based on actual soil moisture"],
        ["Control de invernaderos y clima", "Greenhouse and climate control"],
        ["Monitoreo de suelo, temperatura y agua", "Soil, temperature and water monitoring"],
        ["Control de bombas a distancia", "Remote pump control"],
      ],
      wa: ["Hola, soy productor y me interesa automatizar el riego", "Hi, I'm a grower and want to automate irrigation"],
    },
  ];

  const benefits = [
    {
      icon: Icons.droplet,
      figure: ["hasta 30%*", "up to 30%*"],
      title: ["Menos agua", "Less water"],
      text: [
        "Se riega solo cuando el suelo lo necesita, no por reloj. Si llovió, el sistema lo detecta y no riega.",
        "Watering happens only when the soil needs it, not on a timer. If it rained, the system detects it and skips.",
      ],
    },
    {
      icon: Icons.zap,
      figure: ["hasta 40%*", "up to 40%*"],
      title: ["Menos energía", "Less energy"],
      text: [
        "Bombas, luces y equipos funcionan el tiempo justo. Se terminan los encendidos innecesarios.",
        "Pumps, lights and equipment run just as long as needed. No more unnecessary run time.",
      ],
    },
    {
      icon: Icons.clock,
      figure: ["Menos viajes", "Fewer trips"],
      title: ["Más tiempo libre", "More free time"],
      text: [
        "No hace falta ir hasta el lugar para prender, apagar o revisar. Lo hacés desde el celular.",
        "No need to travel on site to switch on, off or check. You do it from your phone.",
      ],
    },
    {
      icon: Icons.bell,
      figure: ["24/7", "24/7"],
      title: ["Control y tranquilidad", "Control and peace of mind"],
      text: [
        "Ves qué pasa en todo momento y recibís alertas si algo sale de lo normal, antes de que sea un problema.",
        "See what's happening at all times and get alerts when something is off, before it becomes a problem.",
      ],
    },
  ];

  const services = [
    {
      icon: Icons.home,
      title: ["Automatización y Domótica", "Automation & Smart Home"],
      text: [
        "Riego, iluminación, bombas, portones y equipos que funcionan solos y se controlan desde el celular. Para hogares, comercios y campos.",
        "Irrigation, lighting, pumps, gates and equipment that run on their own and are controlled from your phone. For homes, shops and farms.",
      ],
    },
    {
      icon: Icons.bell,
      title: ["Monitoreo Remoto y Alertas", "Remote Monitoring & Alerts"],
      text: [
        "Sensores de humedad, temperatura, nivel, consumo y más, con lecturas en tiempo real, historial y avisos al instante.",
        "Moisture, temperature, level, power and other sensors, with real-time readings, history and instant alerts.",
      ],
    },
    {
      icon: Icons.cpu,
      title: ["Hardware y Placas a Medida", "Custom Hardware & Boards"],
      text: [
        "Diseñamos y armamos nuestros propios controladores y placas electrónicas (ESP32, RS-485, relés industriales) pensados para durar en el campo.",
        "We design and build our own controllers and circuit boards (ESP32, RS-485, industrial relays) made to last in the field.",
      ],
    },
    {
      icon: Icons.smartphone,
      title: ["Software y Paneles de Control", "Software & Control Panels"],
      text: [
        "Aplicaciones web y paneles simples de usar para ver tus datos, configurar tu sistema y administrar usuarios.",
        "Easy-to-use web apps and panels to see your data, configure your system and manage users.",
      ],
    },
    {
      icon: Icons.sparkles,
      title: ["Datos e Inteligencia Artificial", "Data & Artificial Intelligence"],
      text: [
        "Convertimos las mediciones en decisiones: reportes de consumo, predicciones y recomendaciones automáticas.",
        "We turn measurements into decisions: consumption reports, predictions and automatic recommendations.",
      ],
    },
    {
      icon: Icons.lightbulb,
      title: ["Consultoría Técnica", "Technical Consulting"],
      text: [
        "Relevamos tu instalación, analizamos dónde se pierde agua, energía o tiempo y te proponemos la solución adecuada. Servicio arancelado.",
        "We survey your site, find where water, energy or time is being lost and propose the right solution. Paid service.",
      ],
    },
  ];

  const proposals = [
    {
      icon: Icons.droplet,
      title: ["Riego inteligente para espacios verdes", "Smart irrigation for green spaces"],
      text: [
        "Diseñamos el reemplazo de los timers de riego de una plaza por un controlador ESP32 con sensor de humedad industrial, control individual de 5 bombas y gestión remota desde el celular o la web.",
        "We designed the replacement of a plaza's irrigation timers with an ESP32 controller, an industrial moisture sensor, individual control of 5 pumps and remote management from phone or web.",
      ],
      points: [
        ["Ahorro estimado: 30% de agua y 40% de energía", "Estimated savings: 30% water and 40% energy"],
        ["Recupero estimado de la inversión: aprox. 1 año", "Estimated payback: approx. 1 year"],
        ["Convive con el trabajo del personal de mantenimiento", "Works alongside maintenance staff"],
      ],
      tags: ["ESP32", "RS-485", "Relés industriales", "Portal web"],
    },
    {
      icon: Icons.shield,
      title: ["Disuasión inteligente de aves para canchas", "Smart bird deterrence for sports fields"],
      text: [
        "Sistema autónomo para proteger el césped durante la siembra: cámaras que detectan aves, láser verde de barrido y sonidos de alarma, con bloqueos de seguridad cuando hay personas en la cancha.",
        "Autonomous system that protects turf during seeding: cameras that detect birds, a sweeping green laser and distress calls, with safety interlocks whenever people are on the field.",
      ],
      points: [
        ["Reemplaza un gasto mensual recurrente (cetrería) por una inversión única", "Replaces a recurring monthly cost (falconry) with a one-time investment"],
        ["Recupero estimado de la inversión: aprox. 9 meses frente al uso de aves rapaces", "Estimated payback: approx. 9 months compared with using birds of prey"],
        ["Modular: se le puede sumar monitoreo y riego automático", "Modular: can add monitoring and automatic irrigation"],
      ],
      tags: ["Visión por cámara", "ESP32", "Raspberry Pi", "Seguridad por hardware"],
    },
  ];

  const pcbSpecs = [
    {
      icon: Icons.cpu,
      title: ["Cerebro ESP32", "ESP32 at the core"],
      text: [
        "WiFi y Bluetooth integrados para mandar los datos a la plataforma.",
        "Built-in WiFi and Bluetooth to send data to the platform.",
      ],
    },
    {
      icon: Icons.zap,
      title: ["Alimentación de 12 V", "12 V power input"],
      text: [
        "Fuente conmutada propia en la placa: eficiente y sin módulos externos.",
        "On-board switching supply: efficient, no external modules.",
      ],
    },
    {
      icon: Icons.shield,
      title: ["Entradas protegidas", "Protected inputs"],
      text: [
        "Filtro y diodo zener en la entrada de sensores para soportar el uso en campo.",
        "Filtering and a zener diode on the sensor input to withstand field use.",
      ],
    },
    {
      icon: Icons.sliders,
      title: ["Borneras y expansión", "Terminals & expansion"],
      text: [
        "Borneras a tornillo y conectores para sumar relés, RS-485 y más sensores.",
        "Screw terminals and headers to add relays, RS-485 and more sensors.",
      ],
    },
  ];

  const techStack = [
    "ESP32", "C/C++", "KiCad", "Raspberry Pi", "RS-485", "Python", "Flask", "PostgreSQL",
    "TimescaleDB", "React", "Docker", "TensorFlow", "PyTorch", "Pandas", "LLMs",
  ];

  const faqs = [
    {
      q: ["¿La consulta tiene costo?", "Is the consultation free?"],
      a: [
        "El primer contacto por WhatsApp no tiene costo: nos contás brevemente qué necesitás y te orientamos. Si tu caso requiere un relevamiento o análisis técnico para diseñar la solución, coordinamos una consulta técnica, que es arancelada. Te informamos el valor por WhatsApp antes de agendarla.",
        "The first WhatsApp contact is free: you briefly tell us what you need and we point you in the right direction. If your case requires a site survey or technical analysis to design the solution, we schedule a technical consultation, which is a paid service. We'll tell you the fee over WhatsApp before booking it.",
      ],
    },
    {
      q: ["¿Trabajan con casas particulares?", "Do you work with private homes?"],
      a: [
        "Sí. Hacemos domótica para hogares: riego automático de jardín, control de luces y enchufes, sensores de seguridad con alertas, y monitoreo de consumo eléctrico, tanque de agua y bomba, todo desde el celular.",
        "Yes. We do home automation: automatic garden irrigation, lights and outlet control, security sensors with alerts, and monitoring of power usage, water tank and pump — all from your phone.",
      ],
    },
    {
      q: ["¿Cuánto puedo ahorrar?", "How much can I save?"],
      a: [
        "Depende de cada instalación. En nuestros análisis técnicos para sistemas de riego estimamos ahorros de hasta 30% de agua y 40% de energía frente al riego por temporizador, con un recupero de la inversión de aproximadamente un año. En la consulta técnica calculamos una estimación para tu caso.",
        "It depends on each installation. In our technical analyses for irrigation systems we estimate savings of up to 30% water and 40% energy compared with timer-based irrigation, with a payback of about one year. During the technical consultation we estimate it for your case.",
      ],
    },
    {
      q: ["¿Puedo ver un sistema funcionando?", "Can I see a system working?"],
      a: [
        "Sí. Nuestra plataforma de monitoreo está online en app.cattechfuture.com, con un usuario de prueba conectado a nuestra prueba piloto de riego: ves humedad del suelo, temperatura e historial en tiempo real.",
        "Yes. Our monitoring platform is online at app.cattechfuture.com, with a demo user connected to our irrigation pilot: you can see soil moisture, temperature and history in real time.",
      ],
    },
    {
      q: ["¿En qué zonas trabajan?", "Which areas do you cover?"],
      a: [
        "Nuestra base está en Catamarca y hacemos instalaciones en Tucumán, Santiago del Estero, La Rioja y Córdoba. Los proyectos de software y datos los hacemos de forma remota en todo el país.",
        "We're based in Catamarca and install in Tucumán, Santiago del Estero, La Rioja and Córdoba. Software and data projects are done remotely nationwide.",
      ],
    },
    {
      q: ["¿Qué pasa después de la instalación?", "What happens after installation?"],
      a: [
        "Te capacitamos para usar el sistema, incluye garantía y soporte remoto, y podés sumar planes de monitoreo y mantenimiento. Además, el sistema es modular: se puede ampliar sin rehacer la inversión.",
        "We train you to use the system, it includes a warranty and remote support, and you can add monitoring and maintenance plans. The system is modular, so it can grow without redoing the investment.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Theme and Language Controls */}
      <div className="controls">
        <button
          className="control-btn"
          onClick={toggleTheme}
          aria-label={getText("Cambiar tema", "Change theme")}
          title={getText("Cambiar tema", "Change theme")}
        >
          {currentTheme === 'light' ? Icons.moon : Icons.sun}
        </button>
        <button
          className="control-btn"
          onClick={toggleLanguage}
          aria-label={currentLang === 'es' ? 'Change to English' : 'Cambiar a Español'}
          title={currentLang === 'es' ? 'Change to English' : 'Cambiar a Español'}
        >
          {Icons.globe}
        </button>
      </div>

      {/* Navbar */}
      <header>
        <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`} aria-label={getText("Navegación principal", "Main navigation")}>
          <div className="container">
            <div className="nav-content">
              <a href="#" className="logo" onClick={scrollToTop}>
                <span className="logo-icon">{Icons.zap}</span>
                <span>Cat-Tech Future</span>
              </a>

              <button
                className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={getText("Abrir menú", "Open menu")}
                aria-expanded={mobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {getText(...item.label)}
                  </a>
                ))}
                <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
                  {getText("Contacto", "Contact")}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>
            <div className="hero-grid"></div>
          </div>
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content">
                <span className="hero-badge">
                  {Icons.zap}
                  {getText(
                    "Automatización y domótica desde Catamarca",
                    "Automation and smart home from Catamarca"
                  )}
                </span>
                <h1>
                  {getText("Automatizá, ahorrá y controlá todo ", "Automate, save and control everything ")}
                  <span className="gradient-text">
                    {getText("desde tu celular", "from your phone")}
                  </span>
                </h1>
                <p>
                  {getText(
                    "Diseñamos sistemas a medida para hogares, PyMEs, industrias y productores: riego inteligente, domótica, monitoreo y alertas en tiempo real. Menos desperdicio de agua y energía, y la tranquilidad de saber qué pasa en todo momento.",
                    "We design custom systems for homes, small businesses, industry and growers: smart irrigation, home automation, real-time monitoring and alerts. Less wasted water and energy, and the peace of mind of knowing what's happening at all times."
                  )}
                </p>
                <div className="hero-buttons">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {getText("Escribinos por WhatsApp", "Message us on WhatsApp")}
                  </a>
                  <a href="#ahorro" className="btn btn-outline">
                    {getText("Ver cómo ahorrás", "See how you save")}
                  </a>
                </div>
                <p className="hero-subcta">
                  {getText(
                    "Primer contacto por WhatsApp · Respondemos en menos de 24 h",
                    "First contact via WhatsApp · We reply within 24 h"
                  )}
                </p>
                <div className="hero-tags">
                  <span className="hero-tag">{Icons.home} {getText("Hogares", "Homes")}</span>
                  <span className="hero-tag">{Icons.store} {getText("PyMEs", "Small businesses")}</span>
                  <span className="hero-tag">{Icons.factory} {getText("Industrias", "Industry")}</span>
                  <span className="hero-tag">{Icons.sprout} {getText("Productores", "Growers")}</span>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <div className="hero-photo">
                  <img
                    src={`${IMG}/prueba-riego-macetas.jpg`}
                    alt=""
                    width="1200"
                    height="1600"
                  />
                </div>
                <div className="phone-frame">
                  <AppScreen t={getText} />
                </div>
                <div className="hero-float-card">
                  <span className="hero-float-icon">{Icons.droplet}</span>
                  <span>
                    <strong>{getText("Humedad del suelo", "Soil moisture")}</strong>
                    <small>64% · {getText("Óptimo", "Optimal")}</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </section>

        {/* Audiences Section */}
        <section id="soluciones" className="audiences">
          <div className="container">
            <span className="section-tag">{getText("Para Quién", "Who It's For")}</span>
            <h2>{getText("Soluciones para cada necesidad", "Solutions for every need")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Desde tu casa hasta tu fábrica o tu campo: automatizamos lo que hoy hacés a mano y te damos el control desde el celular.",
                "From your home to your plant or your farm: we automate what you do by hand today and put you in control from your phone."
              )}
            </p>
            <div className="audience-grid">
              {audiences.map((aud, i) => (
                <article className="audience-card reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="sector-icon">{aud.icon}</div>
                  <h3>{getText(...aud.title)}</h3>
                  <p className="audience-tagline">{getText(...aud.tagline)}</p>
                  <ul className="check-list">
                    {aud.items.map((item, j) => (
                      <li key={j}>
                        <span className="check-icon">{Icons.check}</span>
                        {getText(...item)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(getText(...aud.wa))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta"
                  >
                    {getText("Consultar por WhatsApp", "Ask on WhatsApp")} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Section */}
        <section id="ahorro" className="savings">
          <div className="container">
            <span className="section-tag">{getText("Ahorro y Control", "Savings & Control")}</span>
            <h2>{getText("Automatizar se paga solo", "Automation pays for itself")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "La mayoría de los sistemas funcionan \"a ciegas\": un reloj enciende el riego o la bomba aunque haya llovido, y para saber si algo falló hay que ir hasta el lugar. Automatizar con datos cambia eso.",
                "Most systems run \"blind\": a timer turns on irrigation or the pump even after rain, and you have to go on site to find out if something failed. Automating with data changes that."
              )}
            </p>

            <div className="savings-compare">
              <div className="compare-col compare-before reveal">
                <h3>{getText("Sin automatizar", "Without automation")}</h3>
                <ul>
                  <li><span className="compare-icon">{Icons.close}</span>{getText("Riego o bomba por horario fijo, llueva o no", "Irrigation or pump on a fixed schedule, rain or shine")}</li>
                  <li><span className="compare-icon">{Icons.close}</span>{getText("Hay que ir al lugar para cambiar algo", "You have to go on site to change anything")}</li>
                  <li><span className="compare-icon">{Icons.close}</span>{getText("Las fallas se descubren tarde", "Failures are discovered late")}</li>
                  <li><span className="compare-icon">{Icons.close}</span>{getText("Sin datos de cuánto se consume", "No data on how much is consumed")}</li>
                </ul>
              </div>
              <div className="compare-col compare-after reveal">
                <h3>{getText("Con Cat-Tech Future", "With Cat-Tech Future")}</h3>
                <ul>
                  <li><span className="compare-icon">{Icons.check}</span>{getText("Funciona solo cuando hace falta, según sensores", "Runs only when needed, based on sensors")}</li>
                  <li><span className="compare-icon">{Icons.check}</span>{getText("Control y configuración desde el celular", "Control and settings from your phone")}</li>
                  <li><span className="compare-icon">{Icons.check}</span>{getText("Alertas al instante si algo sale de lo normal", "Instant alerts when something is off")}</li>
                  <li><span className="compare-icon">{Icons.check}</span>{getText("Historial y reportes de consumo", "History and consumption reports")}</li>
                </ul>
              </div>
            </div>

            <div className="benefit-grid">
              {benefits.map((b, i) => (
                <div className="benefit-card reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="card-icon">{b.icon}</div>
                  <span className="benefit-figure">{getText(...b.figure)}</span>
                  <h3>{getText(...b.title)}</h3>
                  <p>{getText(...b.text)}</p>
                </div>
              ))}
            </div>
            <p className="savings-footnote">
              {getText(
                "* Estimaciones de nuestros análisis técnicos para sistemas de riego frente al riego por temporizador. El ahorro real depende de cada instalación; el recupero de la inversión estimado es de aproximadamente un año.",
                "* Estimates from our technical analyses of irrigation systems compared with timer-based irrigation. Actual savings depend on each installation; estimated payback is about one year."
              )}
            </p>

            <div className="control-block reveal">
              <div className="control-block-media">
                <div className="phone-frame phone-frame-static">
                  <AppScreen
                    t={getText}
                    label={getText(
                      "Pantalla de la plataforma de monitoreo con humedad del suelo y temperatura",
                      "Monitoring platform screen showing soil moisture and temperature"
                    )}
                  />
                </div>
              </div>
              <div className="control-block-text">
                <span className="proposal-badge">{Icons.smartphone} {getText("Control en todo momento", "Control at all times")}</span>
                <h3>{getText("Todo lo que pasa, en tu mano", "Everything that happens, in your hand")}</h3>
                <p>{getText(
                  "Nuestra plataforma muestra en tiempo real lo que miden tus sensores, guarda el historial y te avisa cuando algo necesita atención. Podés encender, apagar o ajustar tu sistema desde donde estés.",
                  "Our platform shows what your sensors measure in real time, keeps the history and alerts you when something needs attention. You can switch on, off or adjust your system from wherever you are."
                )}</p>
                <ul className="check-list">
                  <li><span className="check-icon">{Icons.check}</span>{getText("Lecturas en vivo: humedad, temperatura, consumo", "Live readings: moisture, temperature, consumption")}</li>
                  <li><span className="check-icon">{Icons.check}</span>{getText("Promedios, rangos y tendencias de las últimas 24 h", "24 h averages, ranges and trends")}</li>
                  <li><span className="check-icon">{Icons.check}</span>{getText("Varios sitios o invernaderos en una sola cuenta", "Several sites or greenhouses in one account")}</li>
                </ul>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {getText("Probar la demo", "Try the demo")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <span className="section-tag">{getText("Qué Hacemos", "What We Do")}</span>
            <h2>{getText("Nuestros Servicios", "Our Services")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Hacemos todo el sistema: el hardware, el software y el análisis de los datos. Un solo equipo responsable de que funcione.",
                "We build the whole system: hardware, software and data analysis. One team responsible for making it work."
              )}
            </p>
            <p className="services-budget-notice">
              <strong>{getText("Presupuesto a medida:", "Tailored quote:")}</strong>{" "}
              {getText(
                "Cada proyecto es distinto. Después de la consulta técnica te entregamos un presupuesto detallado según tu necesidad, sin costos ocultos.",
                "Every project is different. After the technical consultation we give you a detailed quote for your needs, with no hidden costs."
              )}
            </p>
            <div className="services-grid">
              {services.map((service, i) => (
                <article className="service-card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div className="card-icon">{service.icon}</div>
                  <h3>{getText(...service.title)}</h3>
                  <p>{getText(...service.text)}</p>
                  <a
                    href={waLink(getText(
                      `Hola, me interesa: ${service.title[0]}`,
                      `Hi, I'm interested in: ${service.title[1]}`
                    ))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta"
                  >
                    {getText("Consultar por WhatsApp", "Ask on WhatsApp")} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="portfolio">
          <div className="container">
            <span className="section-tag">{getText("Lo Que Construimos", "What We Build")}</span>
            <h2>{getText("Nuestro Trabajo", "Our Work")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Diseñamos, fabricamos y probamos nuestros propios sistemas. Esto es lo que ya tenemos funcionando.",
                "We design, build and test our own systems. This is what we already have running."
              )}
            </p>

            <div className="projects-grid">
              <article
                className="project-card clickable reveal"
                onClick={openCropModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCropModal(); } }}
              >
                <div className="project-photo">
                  <img
                    src={`${IMG}/plantin-prueba.jpg`}
                    alt={getText("Plantín de tomate de la prueba piloto", "Tomato seedling from the pilot")}
                    width="960"
                    height="1280"
                    loading="lazy"
                  />
                  <span className="project-photo-badge">{getText("Prueba piloto propia", "In-house pilot")}</span>
                </div>
                <div className="project-content">
                  <h3>{getText("Riego automático con sensores", "Sensor-driven automatic irrigation")}</h3>
                  <div className="card-line"></div>
                  <p>{getText(
                    "Montamos una prueba piloto con plantines de tomate, riego por goteo, sensor de humedad y nuestro controlador ESP32 en gabinete para exterior. El sistema decide cuándo regar y envía las lecturas a la plataforma.",
                    "We built a pilot with tomato seedlings, drip irrigation, a moisture sensor and our ESP32 controller in an outdoor enclosure. The system decides when to water and sends readings to the platform."
                  )}</p>
                  <div className="tech-tags">
                    <span className="tech-tag">ESP32</span>
                    <span className="tech-tag">C</span>
                    <span className="tech-tag">{getText("Sensor de humedad", "Moisture sensor")}</span>
                    <span className="tech-tag">{getText("Riego por goteo", "Drip irrigation")}</span>
                  </div>
                  <div className="click-hint">
                    {getText("Clic para ver más detalles →", "Click to see more details →")}
                  </div>
                </div>
              </article>

              <article className="project-card reveal">
                <div className="project-photo project-photo-top">
                  <img
                    src={`${IMG}/app-historial-graficos.jpg`}
                    alt={getText(
                      "Historial de mediciones con gráficos de caudal, humedad y temperatura",
                      "Measurement history with flow, humidity and temperature charts"
                    )}
                    width="746"
                    height="1390"
                    loading="lazy"
                  />
                  <span className="project-photo-badge">{getText("Online", "Live")}</span>
                </div>
                <div className="project-content">
                  <h3>{getText("Plataforma de monitoreo", "Monitoring platform")}</h3>
                  <div className="card-line"></div>
                  <p>{getText(
                    "Nuestra aplicación web muestra en tiempo real humedad del suelo, temperatura, promedios, rangos y tendencias de cada sitio. Está online y conectada a la prueba piloto: podés entrar con un usuario de prueba.",
                    "Our web app shows real-time soil moisture, temperature, averages, ranges and trends for each site. It's live and connected to the pilot: you can log in with a demo user."
                  )}</p>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">{getText("Tiempo real", "Real time")}</span>
                  </div>
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="project-link">
                    {getText("Ver demo en app.cattechfuture.com", "View demo at app.cattechfuture.com")} {Icons.external}
                  </a>
                </div>
              </article>
            </div>

            {/* Own hardware: controller board */}
            <div className="hardware-block reveal">
              <div className="hardware-viewer">
                <button
                  className="hardware-stage"
                  onClick={() => openLightbox(pcbImages, pcbImages[pcbView])}
                  aria-label={getText(
                    `Ampliar: ${pcbImages[pcbView].caption[0]}`,
                    `Enlarge: ${pcbImages[pcbView].caption[1]}`
                  )}
                >
                  <img
                    key={pcbImages[pcbView].src}
                    src={pcbImages[pcbView].src}
                    alt={getText(...pcbImages[pcbView].alt)}
                    loading="lazy"
                  />
                  <span className="hardware-zoom" aria-hidden="true">{Icons.maximize}</span>
                </button>
                <div className="hardware-thumbs" role="tablist" aria-label={getText("Vistas de la placa", "Board views")}>
                  {pcbImages.map((img, i) => (
                    <button
                      key={img.src}
                      role="tab"
                      aria-selected={pcbView === i}
                      className={`hardware-thumb ${pcbView === i ? 'active' : ''}`}
                      onClick={() => setPcbView(i)}
                    >
                      <img src={img.src} alt="" loading="lazy" />
                      <span>{getText(...img.label)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hardware-text">
                <span className="proposal-badge">{Icons.cpu} {getText("Hardware propio · v1.0", "In-house hardware · v1.0")}</span>
                <h3>{getText("Nuestro controlador, diseñado desde cero", "Our controller, designed from scratch")}</h3>
                <p>{getText(
                  "Pasamos del prototipo cableado de la prueba piloto a una placa de circuito impreso propia, diseñada en KiCad. Nació para el riego, pero la misma base sirve para controlar bombas, monitorear equipos o automatizar procesos en hogares, comercios e industrias.",
                  "We went from the pilot's hand-wired prototype to our own printed circuit board, designed in KiCad. It was born for irrigation, but the same base can control pumps, monitor equipment or automate processes in homes, shops and industry."
                )}</p>
                <ul className="hardware-specs">
                  {pcbSpecs.map((spec, i) => (
                    <li key={i}>
                      <span className="hardware-spec-icon">{spec.icon}</span>
                      <span>
                        <strong>{getText(...spec.title)}</strong>
                        {getText(...spec.text)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="tech-tags">
                  <span className="tech-tag">ESP32</span>
                  <span className="tech-tag">KiCad</span>
                  <span className="tech-tag">TPS563201</span>
                  <span className="tech-tag">12 V DC</span>
                </div>
                <a
                  href={waLink(getText(
                    "Hola, me interesa el desarrollo de hardware a medida",
                    "Hi, I'm interested in custom hardware development"
                  ))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-cta"
                >
                  {getText("Consultar por hardware a medida", "Ask about custom hardware")} →
                </a>
              </div>
            </div>

            {/* Gallery */}
            <div className="gallery">
              <h3 className="gallery-title">{getText("Galería", "Gallery")}</h3>
              <div className="gallery-filters" role="tablist" aria-label={getText("Filtrar galería", "Filter gallery")}>
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={galleryFilter === cat.id}
                    className={`gallery-filter ${galleryFilter === cat.id ? 'active' : ''}`}
                    onClick={() => setGalleryFilter(cat.id)}
                  >
                    {getText(...cat.label)}
                  </button>
                ))}
              </div>
              <div className="gallery-grid">
                {galleryItems.map((item) => (
                  item.src ? (
                    <button
                      key={item.src}
                      className="gallery-item reveal"
                      onClick={() => openLightbox(galleryPhotos, item)}
                      aria-label={getText(`Ampliar: ${item.caption[0]}`, `Enlarge: ${item.caption[1]}`)}
                    >
                      <img src={item.src} alt={getText(...item.alt)} loading="lazy" />
                      <span className="gallery-caption">{getText(...item.caption)}</span>
                    </button>
                  ) : (
                    <div key={`${item.category}-${item.caption[0]}`} className="gallery-item gallery-placeholder reveal">
                      <span className="gallery-placeholder-icon">{Icons.image}</span>
                      <span className="gallery-placeholder-label">{getText("Próximamente", "Coming soon")}</span>
                      <span className="gallery-caption">{getText(...item.caption)}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Designed solutions (technical proposals) */}
            <div className="proposals">
              <h3 className="gallery-title">{getText("Soluciones que diseñamos", "Solutions we've designed")}</h3>
              <p className="section-intro">
                {getText(
                  "Propuestas técnicas completas que desarrollamos para clientes: arquitectura, componentes, lógica de funcionamiento y análisis de costo-beneficio.",
                  "Complete technical proposals we developed for clients: architecture, components, operating logic and cost-benefit analysis."
                )}
              </p>
              <div className="projects-grid">
                {proposals.map((p, i) => (
                  <article className="proposal-card reveal" key={i}>
                    <span className="proposal-badge">{Icons.lightbulb} {getText("Propuesta técnica", "Technical proposal")}</span>
                    <div className="proposal-head">
                      <div className="card-icon">{p.icon}</div>
                      <h3>{getText(...p.title)}</h3>
                    </div>
                    <p>{getText(...p.text)}</p>
                    <ul className="check-list">
                      {p.points.map((pt, j) => (
                        <li key={j}>
                          <span className="check-icon">{Icons.check}</span>
                          {getText(...pt)}
                        </li>
                      ))}
                    </ul>
                    <div className="tech-tags">
                      {p.tags.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="trust-banner">
          <div className="container">
            <div className="trust-banner-grid">
              <div className="trust-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">
                  {getText("Monitoreo y control desde el celular", "Monitoring and control from your phone")}
                </span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">30–40%</span>
                <span className="stat-label">
                  {getText("Ahorro estimado de agua y energía en riego", "Estimated water and energy savings in irrigation")}
                </span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  {getText("Hardware y software hechos por nuestro equipo", "Hardware and software built by our team")}
                </span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">24 h</span>
                <span className="stat-label">
                  {getText("Tiempo de respuesta por WhatsApp", "WhatsApp response time")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="container">
            <span className="section-tag">{getText("Cómo Trabajamos", "How We Work")}</span>
            <h2>{getText("De la idea a tu sistema funcionando", "From idea to a working system")}</h2>
            <div className="section-line"></div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-number">01</div>
                <h3>{getText("Primer contacto", "First contact")}</h3>
                <p>{getText(
                  "Nos escribís por WhatsApp y nos contás brevemente qué necesitás. Te orientamos sin cargo.",
                  "You message us on WhatsApp and briefly tell us what you need. We point you in the right direction at no charge."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">02</div>
                <h3>{getText("Consulta técnica", "Technical consultation")}</h3>
                <p>{getText(
                  "Relevamos tu instalación y analizamos dónde se puede ahorrar y qué conviene automatizar. Es un servicio arancelado.",
                  "We survey your site and analyze where you can save and what's worth automating. This is a paid service."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">03</div>
                <h3>{getText("Diseño y presupuesto", "Design & quote")}</h3>
                <p>{getText(
                  "Te presentamos la solución, los componentes, el ahorro estimado y un presupuesto detallado.",
                  "We present the solution, components, estimated savings and a detailed quote."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">04</div>
                <h3>{getText("Instalación y capacitación", "Installation & training")}</h3>
                <p>{getText(
                  "Armamos, programamos e instalamos el sistema, y te enseñamos a usarlo desde el celular.",
                  "We build, program and install the system, and teach you to use it from your phone."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">05</div>
                <h3>{getText("Soporte continuo", "Ongoing support")}</h3>
                <p>{getText(
                  "Garantía, soporte remoto y planes de monitoreo y mantenimiento para que funcione siempre.",
                  "Warranty, remote support and monitoring and maintenance plans to keep it running."
                )}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <span className="section-tag">{getText("Quiénes Somos", "Who We Are")}</span>
            <h2>{getText("Sobre Cat-Tech Future", "About Cat-Tech Future")}</h2>
            <div className="section-line"></div>
            <div className="about-content">
              <p>{getText(
                "Somos un equipo de Catamarca que combina ingeniería electrónica, desarrollo de software y ciencia de datos. Diseñamos nuestras propias placas, programamos los equipos y desarrollamos las aplicaciones: por eso podemos ofrecer soluciones a medida y hacernos cargo de que funcionen. Trabajamos en Catamarca, Tucumán, Santiago del Estero, La Rioja y Córdoba, con el objetivo de acercar tecnología de nivel global al norte argentino y generar empleo tecnológico en la región.",
                "We're a team from Catamarca combining electronic engineering, software development and data science. We design our own boards, program the devices and build the applications — which is why we can offer tailored solutions and take responsibility for making them work. We operate in Catamarca, Tucumán, Santiago del Estero, La Rioja and Córdoba, aiming to bring world-class technology to northern Argentina and create tech jobs in the region."
              )}</p>
            </div>
            <div className="vision-grid">
              <div className="vision-card reveal">
                <div className="vision-card-icon">{Icons.mapPin}</div>
                <h4>{getText("Impacto Regional", "Regional Impact")}</h4>
                <p>{getText(
                  "Crear oportunidades de empleo tecnológico en el norte argentino y retener talento local en la región.",
                  "Create tech job opportunities in northern Argentina and retain local talent in the region."
                )}</p>
              </div>
              <div className="vision-card reveal">
                <div className="vision-card-icon">{Icons.leaf}</div>
                <h4>{getText("Sustentabilidad", "Sustainability")}</h4>
                <p>{getText(
                  "Nuestras soluciones buscan usar menos agua y energía, contribuyendo a los Objetivos de Desarrollo Sostenible (ODS 6, 11 y 13).",
                  "Our solutions aim to use less water and energy, contributing to the Sustainable Development Goals (SDGs 6, 11 and 13)."
                )}</p>
              </div>
              <div className="vision-card reveal">
                <div className="vision-card-icon">{Icons.globe}</div>
                <h4>{getText("Innovación sin Fronteras", "Innovation without Borders")}</h4>
                <p>{getText(
                  "La ubicación no limita la capacidad de innovar: desarrollamos soluciones de nivel global desde el corazón del norte argentino.",
                  "Location doesn't limit innovation: we build world-class solutions from the heart of northern Argentina."
                )}</p>
              </div>
            </div>
            <div className="tech-strip reveal">
              <span className="tech-strip-label">{getText("Tecnologías que usamos", "Technologies we use")}</span>
              <div className="tech-list">
                {techStack.map((t) => <span className="tech-item" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <div className="container">
            <span className="section-tag">FAQ</span>
            <h2>{getText("Preguntas Frecuentes", "Frequently Asked Questions")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Las dudas más comunes antes de automatizar con nosotros.",
                "The most common questions before automating with us."
              )}
            </p>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details className="faq-item reveal" key={i}>
                  <summary>
                    {getText(...faq.q)}
                    <span className="faq-chevron">{Icons.chevron}</span>
                  </summary>
                  <p>{getText(...faq.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <span className="section-tag">{getText("Contacto", "Contact")}</span>
            <h2>{getText("Hablemos de tu Proyecto", "Let's Talk About Your Project")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Contanos brevemente qué necesitás por WhatsApp. Si tu caso requiere un relevamiento o análisis, coordinamos una consulta técnica arancelada.",
                "Briefly tell us what you need on WhatsApp. If your case requires a survey or analysis, we'll schedule a paid technical consultation."
              )}
            </p>

            {/* Proceso de contacto */}
            <div className="contact-process">
              <div className="contact-process-step">
                {getText("Escribinos por WhatsApp", "Message us on WhatsApp")}
              </div>
              <span className="contact-process-arrow">→</span>
              <div className="contact-process-step">
                {getText("Consulta técnica", "Technical consultation")}
              </div>
              <span className="contact-process-arrow">→</span>
              <div className="contact-process-step">
                {getText("Tu solución a medida", "Your tailored solution")}
              </div>
            </div>

            {/* Puntos de confianza */}
            <div className="contact-trust">
              <div className="contact-trust-item">
                <span className="trust-icon">{Icons.check}</span>
                <p>{getText("Respuesta en menos de 24 horas hábiles", "Response within 24 business hours")}</p>
              </div>
              <div className="contact-trust-item">
                <span className="trust-icon">{Icons.check}</span>
                <p>{getText("Presupuesto detallado, sin costos ocultos", "Detailed quote, no hidden costs")}</p>
              </div>
              <div className="contact-trust-item">
                <span className="trust-icon">{Icons.check}</span>
                <p>{getText("Acompañamiento desde la idea hasta la instalación", "Support from idea to installation")}</p>
              </div>
            </div>

            <div className="contact-info reveal">
              <h3>{getText("Escribinos directamente", "Write to us directly")}</h3>

              {/* CTA principal WhatsApp */}
              <div className="contact-main-cta">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {Icons.message} {getText("Escribirnos por WhatsApp", "Message us on WhatsApp")}
                </a>
                <span className="contact-or">
                  {getText("o usá los canales de abajo", "or use the channels below")}
                </span>
              </div>

              <div className="info-item">
                <span className="info-icon">{Icons.mail}</span>
                <a href="mailto:cattechfuture@gmail.com">cattechfuture@gmail.com</a>
              </div>
              <div className="info-item">
                <span className="info-icon">{Icons.message}</span>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp: +54 383 432-4087
                </a>
              </div>
              <div className="info-item">
                <span className="info-icon">{Icons.mapPin}</span>
                <a href="https://maps.app.goo.gl/G4Ea8fKcDmG3rLG8A" target="_blank" rel="noopener noreferrer">
                  {getText(
                    "Catamarca — Atendemos Tucumán, Stgo. del Estero, La Rioja y Córdoba",
                    "Catamarca — We serve Tucumán, Santiago del Estero, La Rioja and Córdoba"
                  )}
                </a>
              </div>
              <div className="info-item">
                <span className="info-icon">{Icons.instagram}</span>
                <a href="https://www.instagram.com/cat.tech_future/profilecard/?igsh=eWRreGVxbGs3bmdl" target="_blank" rel="noopener noreferrer">
                  @cat.tech_future
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">{Icons.zap}</span>
              <span>Cat-Tech Future</span>
            </div>
            <div className="footer-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>{getText(...item.label)}</a>
              ))}
              <a href="#about">{getText("Nosotros", "About")}</a>
              <a href="#contact">{getText("Contacto", "Contact")}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Cat-Tech Future. {getText("Todos los derechos reservados.", "All rights reserved.")}</p>
            <p>Catamarca, Argentina</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        id="whatsapp-float"
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={getText("Contactar por WhatsApp", "Contact via WhatsApp")}
      >
        {Icons.message}
      </a>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button onClick={scrollToTop} id="scroll-top" aria-label={getText("Volver arriba", "Back to top")}>
          {Icons.arrowUp}
        </button>
      )}

      {/* Gallery Lightbox */}
      {lightbox && lightbox.items[lightbox.index] && (
        <div className="modal-overlay lightbox" onClick={() => setLightbox(null)}>
          <figure className="lightbox-figure" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setLightbox(null)} aria-label={getText("Cerrar", "Close")}>
              {Icons.close}
            </button>
            <img
              src={lightbox.items[lightbox.index].src}
              alt={getText(...lightbox.items[lightbox.index].alt)}
            />
            <figcaption>{getText(...lightbox.items[lightbox.index].caption)}</figcaption>
            {lightbox.items.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={() => stepLightbox(-1)}
                  aria-label={getText("Anterior", "Previous")}
                >
                  {Icons.chevronLeft}
                </button>
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={() => stepLightbox(1)}
                  aria-label={getText("Siguiente", "Next")}
                >
                  {Icons.chevronRight}
                </button>
              </>
            )}
          </figure>
        </div>
      )}

      {/* Crop System Modal */}
      {showCropModal && (
        <div className="modal-overlay" onClick={closeCropModal}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCropModal} aria-label={getText("Cerrar", "Close")}>
              {Icons.close}
            </button>

            <div className="modal-header">
              <div className="modal-icon">{Icons.leaf}</div>
              <h2>{getText("Sistema Inteligente para Cultivos", "Smart Crop System")}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>{getText("Descripción del Producto", "Product Description")}</h3>
                <p>{getText(
                  "Nuestro Sistema Inteligente para Cultivos combina un controlador IoT diseñado por nosotros, sensores de suelo y ambiente, y una plataforma web de monitoreo. Riega según la humedad real del suelo y te muestra en tiempo real qué pasa con tu cultivo, desde el celular.",
                  "Our Smart Crop System combines a controller we designed ourselves, soil and environment sensors, and a web monitoring platform. It irrigates based on actual soil moisture and shows you in real time what's happening with your crop, from your phone."
                )}</p>
              </div>

              <div className="modal-section">
                <h3>{getText("Estado Actual", "Current Status")}</h3>
                <p>{getText(
                  "Validamos el sistema en una prueba piloto propia con plantines de tomate, riego por goteo, sensor de humedad y nuestro controlador ESP32 en gabinete para exterior. Las lecturas se ven en tiempo real en app.cattechfuture.com. El próximo paso es incorporar sensores de calidad industrial (RS-485) y modelos de IA para optimizar el riego.",
                  "We validated the system in our own pilot with tomato seedlings, drip irrigation, a moisture sensor and our ESP32 controller in an outdoor enclosure. Readings are visible in real time at app.cattechfuture.com. The next step is adding industrial-grade sensors (RS-485) and AI models to optimize irrigation."
                )}</p>
              </div>

              <div className="modal-section">
                <h3>{getText("Desarrollo Futuro: Hidroponía", "Future Development: Hydroponics")}</h3>
                <p>{getText(
                  "Estamos desarrollando una versión especializada del sistema para cultivos hidropónicos. Esta adaptación incluirá control preciso de nutrientes, pH, conductividad eléctrica y oxigenación del agua, abriendo nuevas posibilidades para la agricultura urbana y cultivos de alta densidad.",
                  "We are developing a specialized version of the system for hydroponic crops. This adaptation will include precise control of nutrients, pH, electrical conductivity and water oxygenation, opening new possibilities for urban agriculture and high-density crops."
                )}</p>
              </div>

              <div className="modal-section highlight">
                <h3>{getText("Oferta para Primeros Adoptadores", "Early Adopter Offer")}</h3>
                <p>{getText(
                  "Si estás interesado en ser uno de nuestros primeros clientes, ofrecemos beneficios exclusivos:",
                  "If you are interested in being one of our first customers, we offer exclusive benefits:"
                )}</p>
                <ul className="benefits-list">
                  <li>{getText("Descuentos especiales en la adquisición del sistema", "Special discounts on system acquisition")}</li>
                  <li>{getText("Actualizaciones gratuitas de software y firmware", "Free software and firmware updates")}</li>
                  <li>{getText("Soporte técnico prioritario", "Priority technical support")}</li>
                  <li>{getText("Participación en el desarrollo de nuevas funcionalidades", "Participation in new feature development")}</li>
                </ul>
              </div>

              <div className="modal-actions">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  {getText("Ver Demo del Sistema", "View System Demo")}
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn-large"
                  style={{ justifyContent: 'center' }}
                >
                  {getText("Consultar por WhatsApp", "Ask on WhatsApp")}
                </a>
              </div>

              <div className="demo-info">
                <p className="demo-note">
                  {getText(
                    "* La demo incluye un usuario de prueba para que puedas explorar la plataforma: visualización de datos en tiempo real, historial de métricas y estado de cada sitio.",
                    "* The demo includes a test user so you can explore the platform: real-time data visualization, metrics history and the status of each site."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
