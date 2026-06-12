import React, { useState, useEffect } from 'react';
import './App.css';

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
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('es');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);

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

  // Reveal-on-scroll animations
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
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
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showCropModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showCropModal]);

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

  const WA_URL = "https://wa.me/543834324087?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios";

  const services = [
    {
      icon: Icons.cpu,
      title: ["Desarrollo de Hardware IoT", "IoT Hardware Development"],
      text: [
        "Diseño y fabricación de dispositivos IoT personalizados para automatización y control. Sensores, actuadores y sistemas embebidos con conectividad en tiempo real.",
        "Design and manufacturing of custom IoT devices for automation and control. Sensors, actuators and embedded systems with real-time connectivity.",
      ],
    },
    {
      icon: Icons.code,
      title: ["Desarrollo de Software", "Software Development"],
      text: [
        "Aplicaciones web escalables, APIs RESTful, dashboards interactivos y diseño de bases de datos robustas. Soluciones personalizadas para tu negocio.",
        "Scalable web applications, RESTful APIs, interactive dashboards and robust database design. Custom solutions for your business.",
      ],
    },
    {
      icon: Icons.chart,
      title: ["Análisis y Ciencia de Datos", "Data Analysis & Science"],
      text: [
        "Análisis predictivo, modelos de Machine Learning, pipelines ETL, visualización avanzada y consultoría en ciencia de datos para decisiones estratégicas.",
        "Predictive analysis, Machine Learning models, ETL pipelines, advanced visualization and data science consulting for strategic decisions.",
      ],
    },
    {
      icon: Icons.sliders,
      title: ["Automatización y Control", "Automation & Control"],
      text: [
        "Sistemas de control industrial, automatización de procesos, monitoreo remoto y control en tiempo real para optimizar operaciones.",
        "Industrial control systems, process automation, remote monitoring and real-time control to optimize operations.",
      ],
    },
    {
      icon: Icons.sparkles,
      title: ["Inteligencia Artificial", "Artificial Intelligence"],
      text: [
        "Implementación de modelos de IA con TensorFlow y PyTorch, integración de LLMs y soluciones de aprendizaje automático personalizadas.",
        "Implementation of AI models with TensorFlow and PyTorch, LLM integration and custom machine learning solutions.",
      ],
    },
    {
      icon: Icons.lightbulb,
      title: ["Consultoría Tecnológica", "Technology Consulting"],
      text: [
        "Asesoramiento en transformación digital, arquitectura de soluciones, selección de tecnologías y estrategia de implementación.",
        "Advisory in digital transformation, solution architecture, technology selection and implementation strategy.",
      ],
    },
  ];

  const faqs = [
    {
      q: ["¿Cuánto cuesta desarrollar un proyecto con ustedes?", "How much does it cost to develop a project with you?"],
      a: [
        "Cada proyecto es único, por eso no manejamos precios fijos. Analizamos tu necesidad en una consulta gratuita sin compromiso y te entregamos un presupuesto personalizado, sin costos ocultos.",
        "Every project is unique, so we don't have fixed prices. We analyze your needs in a free, no-commitment consultation and deliver a personalized quote with no hidden costs.",
      ],
    },
    {
      q: ["¿Trabajan solo en Catamarca?", "Do you only work in Catamarca?"],
      a: [
        "No. Nuestra base está en Catamarca, pero prestamos servicios en Tucumán, Santiago del Estero, La Rioja y Córdoba. También trabajamos de forma remota para proyectos de software y datos en cualquier parte de Argentina.",
        "No. We are based in Catamarca, but we serve Tucumán, Santiago del Estero, La Rioja and Córdoba. We also work remotely on software and data projects anywhere in Argentina.",
      ],
    },
    {
      q: ["¿Qué tipo de proyectos desarrollan?", "What kind of projects do you develop?"],
      a: [
        "Desarrollamos soluciones de hardware IoT (sensores, automatización, control), software a medida (aplicaciones web, APIs, dashboards), análisis y ciencia de datos, e inteligencia artificial aplicada a industria, agro, comercio y gobierno.",
        "We develop IoT hardware solutions (sensors, automation, control), custom software (web applications, APIs, dashboards), data analysis and data science, and artificial intelligence applied to industry, agriculture, retail and government.",
      ],
    },
    {
      q: ["¿Cuánto tarda un proyecto en estar listo?", "How long does a project take?"],
      a: [
        "Depende del alcance, pero trabajamos con metodologías ágiles y entregas incrementales: un MVP funcional puede estar listo en pocas semanas. Desde el primer día vas viendo avances concretos.",
        "It depends on the scope, but we work with agile methodologies and incremental deliveries: a functional MVP can be ready in a few weeks. You see concrete progress from day one.",
      ],
    },
    {
      q: ["¿Ofrecen soporte después de la entrega?", "Do you offer support after delivery?"],
      a: [
        "Sí. Brindamos soporte técnico continuo, actualizaciones y mejoras, además de capacitación para que tu equipo pueda operar la solución con autonomía.",
        "Yes. We provide ongoing technical support, updates and improvements, plus training so your team can operate the solution independently.",
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
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                  {getText("Sobre Nosotros", "About Us")}
                </a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                  {getText("Servicios", "Services")}
                </a>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                  {getText("Portfolio", "Portfolio")}
                </a>
                <a href="#technologies" onClick={() => setMobileMenuOpen(false)}>
                  {getText("Tecnologías", "Technologies")}
                </a>
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
            <div className="hero-content">
              <span className="hero-badge">
                {Icons.zap}
                {getText(
                  "Tecnología desde Catamarca para el norte argentino",
                  "Technology from Catamarca for northern Argentina"
                )}
              </span>
              <h1>
                {getText("Tecnología Global para ", "Global Technology for ")}
                <span className="gradient-text">
                  {getText("Desafíos Locales", "Local Challenges")}
                </span>
              </h1>
              <p>
                {getText(
                  "Llevamos la modernización tecnológica al norte argentino. Desarrollo de Hardware IoT, Software Personalizado y Análisis de Datos para transformar tu negocio.",
                  "We bring technological modernization to northern Argentina. IoT Hardware Development, Custom Software and Data Analysis to transform your business."
                )}
              </p>
              <p className="hero-subcta">
                {getText(
                  "Consulta gratuita sin compromiso — Respondemos en menos de 24 horas",
                  "Free consultation with no commitment — We respond within 24 hours"
                )}
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  {getText("Contáctanos", "Contact Us")}
                </a>
                <a href="#services" className="btn btn-outline">
                  {getText("Conoce Nuestros Servicios", "Discover Our Services")}
                </a>
              </div>
              <div className="hero-tags">
                <span className="hero-tag">{Icons.cpu} {getText("Hardware IoT", "IoT Hardware")}</span>
                <span className="hero-tag">{Icons.code} {getText("Software a Medida", "Custom Software")}</span>
                <span className="hero-tag">{Icons.sparkles} {getText("Datos & IA", "Data & AI")}</span>
              </div>
            </div>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <div className="mouse">
              <div className="wheel"></div>
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
                "Somos una empresa de desarrollo tecnológico especializada en crear soluciones integrales de hardware y software. Nacidos en Catamarca, prestamos servicios a empresas e instituciones en toda la región: Tucumán, Santiago del Estero, La Rioja y Córdoba. Nuestro equipo combina experiencia en ingeniería electrónica, desarrollo de software y ciencia de datos para transformar desafíos complejos en soluciones innovadoras y sustentables.",
                "We are a technology development company specialized in creating comprehensive hardware and software solutions. Based in Catamarca, we serve businesses and institutions across the region: Tucumán, Santiago del Estero, La Rioja and Córdoba. Our team combines experience in electronic engineering, software development and data science to transform complex challenges into innovative and sustainable solutions."
              )}</p>
              <div className="about-grid">
                <div className="about-card reveal">
                  <div className="card-icon">{Icons.compass}</div>
                  <h3>{getText("Nuestro Enfoque", "Our Approach")}</h3>
                  <p>{getText(
                    "Desarrollamos soluciones end-to-end que integran hardware IoT, software personalizado y análisis de datos para impulsar la transformación digital de tu negocio con un fuerte compromiso ambiental.",
                    "We develop end-to-end solutions that integrate IoT hardware, custom software and data analysis to drive your business digital transformation with a strong environmental commitment."
                  )}</p>
                </div>
                <div className="about-card reveal">
                  <div className="card-icon">{Icons.users}</div>
                  <h3>{getText("Equipo Experto", "Expert Team")}</h3>
                  <p>{getText(
                    "Equipo especializados en desarrollo de hardware IoT, arquitectura de software, ciencia de datos e inteligencia artificial trabajando en conjunto para crear el futuro tecnológico del norte argentino.",
                    "Engineers specialized in IoT hardware development, software architecture, data science and artificial intelligence working together to create the technological future of northern Argentina."
                  )}</p>
                </div>
                <div className="about-card reveal">
                  <div className="card-icon">{Icons.sparkles}</div>
                  <h3>{getText("Innovación Continua", "Continuous Innovation")}</h3>
                  <p>{getText(
                    "Utilizamos las últimas tecnologías en automatización, control, machine learning e integración de LLMs para crear soluciones de vanguardia que impulsen el desarrollo regional.",
                    "We use the latest technologies in automation, control, machine learning and LLM integration to create cutting-edge solutions that drive regional development."
                  )}</p>
                </div>
                <div className="about-card reveal">
                  <div className="card-icon">{Icons.shield}</div>
                  <h3>{getText("Compromiso", "Commitment")}</h3>
                  <p>{getText(
                    "Nos comprometemos con la calidad, eficiencia, escalabilidad y sustentabilidad de cada proyecto, creando empleo tecnológico local para retener talento en la región.",
                    "We are committed to the quality, efficiency, scalability and sustainability of each project, creating local tech jobs to retain talent in the region."
                  )}</p>
                </div>
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
                "Ofrecemos soluciones tecnológicas integrales que combinan hardware, software y análisis de datos para impulsar tu negocio.",
                "We offer comprehensive technology solutions that combine hardware, software and data analysis to boost your business."
              )}
            </p>
            <p className="services-budget-notice">
              <strong>{getText("Sin precios fijos:", "No fixed prices:")}</strong>{" "}
              {getText(
                "Cada proyecto es único. Diseñamos la solución a medida de tu necesidad y te damos un presupuesto personalizado — sin compromiso.",
                "Every project is unique. We design the solution tailored to your needs and provide a personalized quote — no commitment required."
              )}
            </p>
            <div className="services-grid">
              {services.map((service, i) => (
                <article className="service-card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div className="card-icon">{service.icon}</div>
                  <h3>{getText(...service.title)}</h3>
                  <p>{getText(...service.text)}</p>
                  <a href="#contact" className="service-cta">
                    {getText("Consultar sin compromiso", "Ask without commitment")} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="technologies">
          <div className="container">
            <span className="section-tag">{getText("Nuestras Herramientas", "Our Tools")}</span>
            <h2>{getText("Stack Tecnológico", "Technology Stack")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Utilizamos tecnologías modernas y robustas para crear soluciones escalables y de alto rendimiento.",
                "We use modern and robust technologies to create scalable and high-performance solutions."
              )}
            </p>

            <div className="tech-grid">
              <div className="tech-category reveal">
                <h3>{getText("Hardware & Embebidos", "Hardware & Embedded")}</h3>
                <div className="tech-list">
                  <span className="tech-item">C/C++</span>
                  <span className="tech-item">Raspberry Pi</span>
                  <span className="tech-item">ESP32/ESP8266</span>
                  <span className="tech-item">Sensores IoT</span>
                </div>
              </div>

              <div className="tech-category reveal">
                <h3>{getText("Desarrollo Backend", "Backend Development")}</h3>
                <div className="tech-list">
                  <span className="tech-item">Python</span>
                  <span className="tech-item">Flask</span>
                  <span className="tech-item">PostgreSQL</span>
                  <span className="tech-item">TimescaleDB</span>
                </div>
              </div>

              <div className="tech-category reveal">
                <h3>{getText("Desarrollo Frontend", "Frontend Development")}</h3>
                <div className="tech-list">
                  <span className="tech-item">React</span>
                  <span className="tech-item">JavaScript</span>
                  <span className="tech-item">HTML/CSS</span>
                  <span className="tech-item">Dashboards</span>
                </div>
              </div>

              <div className="tech-category reveal">
                <h3>{getText("IA & Machine Learning", "AI & Machine Learning")}</h3>
                <div className="tech-list">
                  <span className="tech-item">TensorFlow</span>
                  <span className="tech-item">PyTorch</span>
                  <span className="tech-item">LLM Integration</span>
                  <span className="tech-item">Scikit-learn</span>
                </div>
              </div>

              <div className="tech-category reveal">
                <h3>{getText("Análisis de Datos", "Data Analysis")}</h3>
                <div className="tech-list">
                  <span className="tech-item">Pandas</span>
                  <span className="tech-item">NumPy</span>
                  <span className="tech-item">Plotly</span>
                  <span className="tech-item">Matplotlib</span>
                  <span className="tech-item">Seaborn</span>
                  <span className="tech-item">Jupyter</span>
                  <span className="tech-item">ETL Pipelines</span>
                </div>
              </div>

              <div className="tech-category reveal">
                <h3>{getText("DevOps & Tools", "DevOps & Tools")}</h3>
                <div className="tech-list">
                  <span className="tech-item">Docker</span>
                  <span className="tech-item">Git</span>
                  <span className="tech-item">REST APIs</span>
                  <span className="tech-item">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <span className="section-tag">{getText("Casos de Éxito", "Success Stories")}</span>
            <h2>{getText("Portfolio", "Portfolio")}</h2>
            <div className="section-line"></div>
            <p className="section-intro">
              {getText(
                "Casos de éxito que demuestran nuestras capacidades en desarrollo de soluciones tecnológicas integrales y sustentables.",
                "Success cases that demonstrate our capabilities in developing comprehensive and sustainable technological solutions."
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
                <div className="project-image">{Icons.leaf}</div>
                <div className="project-content">
                  <h3>{getText("Sistema Inteligente para Cultivos", "Smart Crop System")}</h3>
                  <div className="card-line"></div>
                  <p>{getText(
                    "Solución completa que integra hardware IoT con sensores de calidad industrial, software de monitoreo en tiempo real y análisis predictivo mediante IA para optimizar la producción agrícola. Actualmente en fase de pruebas con el MVP mejorado.",
                    "Complete solution that integrates IoT hardware with industrial-quality sensors, real-time monitoring software and predictive analysis through AI to optimize agricultural production. Currently in testing phase with improved MVP."
                  )}</p>
                  <div className="tech-tags">
                    <span className="tech-tag">ESP32</span>
                    <span className="tech-tag">C</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Sensores RS485</span>
                    <span className="tech-tag">ML</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                  <div className="click-hint">
                    {getText("Clic para ver más detalles →", "Click to see more details →")}
                  </div>
                </div>
              </article>

              <article className="project-card reveal">
                <div className="project-image">{Icons.droplet}</div>
                <div className="project-content">
                  <h3>{getText("Sistema de Riego Inteligente", "Smart Irrigation System")}</h3>
                  <div className="card-line"></div>
                  <p>{getText(
                    "Sistema automatizado con sensores IoT y dashboard en tiempo real para gestión eficiente del agua en espacios públicos, reduciendo consumo hasta un 40%. Contribuye al cumplimiento de los ODS.",
                    "Automated system with IoT sensors and real-time dashboard for efficient water management in public spaces, reducing consumption by up to 40%. Contributes to SDG compliance."
                  )}</p>
                  <div className="ods-badges">
                    <div className="ods-badge">
                      <span className="ods-number">6</span>
                      <span className="ods-text">{getText("Agua limpia y saneamiento", "Clean water and sanitation")}</span>
                    </div>
                    <div className="ods-badge">
                      <span className="ods-number">11</span>
                      <span className="ods-text">{getText("Ciudades sostenibles", "Sustainable cities")}</span>
                    </div>
                    <div className="ods-badge">
                      <span className="ods-number">13</span>
                      <span className="ods-text">{getText("Acción por el clima", "Climate action")}</span>
                    </div>
                  </div>
                  <div className="tech-tags">
                    <span className="tech-tag">ESP32</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">C</span>
                    <span className="tech-tag">Sensores RS485</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="trust-banner">
          <div className="container">
            <div className="trust-banner-grid">
              <div className="trust-stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">
                  {getText("Proyectos IoT con hardware industrial", "IoT projects with industrial hardware")}
                </span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">40%</span>
                <span className="stat-label">
                  {getText("Reducción de consumo de agua en riego inteligente", "Water consumption reduction in smart irrigation")}
                </span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  {getText("Soluciones a medida del cliente", "100% custom client solutions")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section id="sectors" className="sectors">
          <div className="container">
            <span className="section-tag">{getText("A Quiénes Ayudamos", "Who We Help")}</span>
            <h2>{getText("Sectores que Atendemos", "Sectors We Serve")}</h2>
            <div className="section-line"></div>
            <div className="sectors-grid">
              <div className="sector-card reveal">
                <div className="sector-icon">{Icons.wrench}</div>
                <h3>{getText("Industria", "Industry")}</h3>
                <p>{getText(
                  "Automatización de procesos, control de calidad, monitoreo de producción y análisis predictivo para manufactura y producción industrial.",
                  "Process automation, quality control, production monitoring and predictive analysis for manufacturing and industrial production."
                )}</p>
              </div>
              <div className="sector-card reveal">
                <div className="sector-icon">{Icons.cart}</div>
                <h3>{getText("Retail & PyMEs", "Retail & SMEs")}</h3>
                <p>{getText(
                  "Sistemas de gestión, análisis de ventas, dashboards ejecutivos, automatización de inventarios y soluciones de e-commerce para pequeñas y medianas empresas.",
                  "Management systems, sales analysis, executive dashboards, inventory automation and e-commerce solutions for small and medium enterprises."
                )}</p>
              </div>
              <div className="sector-card reveal">
                <div className="sector-icon">{Icons.landmark}</div>
                <h3>{getText("Gobierno", "Government")}</h3>
                <p>{getText(
                  "Sistemas de monitoreo urbano, gestión de recursos públicos, análisis de datos para toma de decisiones y soluciones IoT para ciudades inteligentes.",
                  "Urban monitoring systems, public resource management, data analysis for decision making and IoT solutions for smart cities."
                )}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="container">
            <span className="section-tag">{getText("Cómo Trabajamos", "How We Work")}</span>
            <h2>{getText("Nuestro Proceso de Trabajo", "Our Work Process")}</h2>
            <div className="section-line"></div>
            <div className="process-grid">
              <div className="process-step reveal">
                <div className="step-number">01</div>
                <h3>{getText("Análisis y Consultoría", "Analysis & Consulting")}</h3>
                <p>{getText(
                  "Entendemos tus necesidades y desafíos. Realizamos un análisis profundo para diseñar la solución óptima.",
                  "We understand your needs and challenges. We perform a deep analysis to design the optimal solution."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">02</div>
                <h3>{getText("Diseño y Arquitectura", "Design & Architecture")}</h3>
                <p>{getText(
                  "Diseñamos la arquitectura completa de hardware y software, seleccionando las mejores tecnologías para tu proyecto.",
                  "We design the complete hardware and software architecture, selecting the best technologies for your project."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">03</div>
                <h3>{getText("Desarrollo e Implementación", "Development & Implementation")}</h3>
                <p>{getText(
                  "Desarrollamos la solución con metodologías ágiles, manteniendo comunicación constante y entregas incrementales.",
                  "We develop the solution with agile methodologies, maintaining constant communication and incremental deliveries."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">04</div>
                <h3>{getText("Despliegue y Capacitación", "Deployment & Training")}</h3>
                <p>{getText(
                  "Implementamos la solución en producción y capacitamos a tu equipo para su operación y mantenimiento.",
                  "We implement the solution in production and train your team for its operation and maintenance."
                )}</p>
              </div>
              <div className="process-step reveal">
                <div className="step-number">05</div>
                <h3>{getText("Soporte Continuo", "Continuous Support")}</h3>
                <p>{getText(
                  "Brindamos soporte técnico, actualizaciones y mejoras continuas para asegurar el éxito a largo plazo.",
                  "We provide technical support, updates and continuous improvements to ensure long-term success."
                )}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="vision">
          <div className="container">
            <span className="section-tag">{getText("Hacia Dónde Vamos", "Where We're Going")}</span>
            <h2>{getText("Nuestra Visión", "Our Vision")}</h2>
            <div className="section-line"></div>
            <div className="vision-content">
              <div className="vision-main reveal">
                <h3>{getText("Modernización Tecnológica del Norte Argentino", "Technological Modernization of Northern Argentina")}</h3>
                <p>{getText(
                  "Nuestra misión es transformar el norte argentino en un polo de innovación tecnológica. Creemos que la tecnología global debe estar al alcance de todos, sin importar la ubicación geográfica. El norte argentino se destaca por su gran potencial pero sufre de baja adopción tecnológica y escasas oportunidades de empleo en el sector tech, lo que obliga a muchos ingenieros y profesionales a abandonar la región para poder trabajar en su especialidad.",
                  "Our mission is to transform northern Argentina into a technological innovation hub. We believe that global technology should be accessible to everyone, regardless of geographic location. Northern Argentina stands out for its great potential but suffers from low technology adoption and scarce employment opportunities in the tech sector, forcing many engineers and professionals to leave the region to work in their specialty."
                )}</p>
                <p>{getText(
                  "Queremos cambiar esta realidad. Desarrollamos tecnología global para desafíos locales, demostrando que desde Catamarca podemos crear soluciones de clase mundial. Nuestro objetivo es generar empleo tecnológico local, retener talento en la región y demostrar que la innovación no tiene fronteras geográficas.",
                  "We want to change this reality. We develop global technology for local challenges, demonstrating that from Catamarca we can create world-class solutions. Our goal is to generate local tech employment, retain talent in the region and demonstrate that innovation has no geographic boundaries."
                )}</p>
              </div>

              <div className="vision-grid">
                <div className="vision-card reveal">
                  <div className="vision-card-icon">{Icons.mapPin}</div>
                  <h4>{getText("Impacto Regional", "Regional Impact")}</h4>
                  <p>{getText(
                    "Crear oportunidades de empleo tecnológico en Catamarca y expandir soluciones hacia Tucumán, Santiago del Estero, La Rioja y Córdoba, reteniendo talento local en la región.",
                    "Create technological employment opportunities in Catamarca and expand solutions to Tucumán, Santiago del Estero, La Rioja and Córdoba, retaining local talent in the region."
                  )}</p>
                </div>

                <div className="vision-card reveal">
                  <div className="vision-card-icon">{Icons.leaf}</div>
                  <h4>{getText("Sustentabilidad", "Sustainability")}</h4>
                  <p>{getText(
                    "Todas nuestras soluciones están diseñadas con un fuerte compromiso ambiental, contribuyendo activamente al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS).",
                    "All our solutions are designed with a strong environmental commitment, actively contributing to the fulfillment of the Sustainable Development Goals (SDGs)."
                  )}</p>
                </div>

                <div className="vision-card reveal">
                  <div className="vision-card-icon">{Icons.globe}</div>
                  <h4>{getText("Innovación sin Fronteras", "Innovation without Borders")}</h4>
                  <p>{getText(
                    "Demostramos que la ubicación geográfica no limita la capacidad de innovar. Desarrollamos soluciones de nivel global desde el corazón del norte argentino.",
                    "We demonstrate that geographic location does not limit the ability to innovate. We develop global-level solutions from the heart of northern Argentina."
                  )}</p>
                </div>
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
                "Las dudas más comunes antes de empezar un proyecto tecnológico con nosotros.",
                "The most common questions before starting a technology project with us."
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
                "Sin burocracia, sin compromiso. Contanos tu idea y te respondemos en menos de 24 horas.",
                "No bureaucracy, no commitment. Tell us your idea and we'll respond within 24 hours."
              )}
            </p>

            {/* Proceso de contacto */}
            <div className="contact-process">
              <div className="contact-process-step">
                {getText("Contanos tu proyecto", "Tell us your project")}
              </div>
              <span className="contact-process-arrow">→</span>
              <div className="contact-process-step">
                {getText("Consulta gratuita", "Free consultation")}
              </div>
              <span className="contact-process-arrow">→</span>
              <div className="contact-process-step">
                {getText("Diseñamos tu solución", "We design your solution")}
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
                <p>{getText("Presupuesto personalizado, sin costos ocultos", "Custom quote, no hidden costs")}</p>
              </div>
              <div className="contact-trust-item">
                <span className="trust-icon">{Icons.check}</span>
                <p>{getText("Acompañamiento desde la idea hasta la implementación", "Support from idea to implementation")}</p>
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
              <a href="#about">{getText("Sobre Nosotros", "About Us")}</a>
              <a href="#services">{getText("Servicios", "Services")}</a>
              <a href="#technologies">{getText("Tecnologías", "Technologies")}</a>
              <a href="#portfolio">{getText("Portfolio", "Portfolio")}</a>
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
                  "Nuestro Sistema Inteligente para Cultivos es una solución integral que combina hardware IoT de calidad industrial con software avanzado de monitoreo y análisis predictivo mediante inteligencia artificial. El sistema permite optimizar la producción agrícola mediante el control automatizado de las condiciones ambientales críticas para el desarrollo de los cultivos.",
                  "Our Smart Crop System is a comprehensive solution that combines industrial-quality IoT hardware with advanced monitoring software and predictive analysis through artificial intelligence. The system allows optimizing agricultural production through automated control of critical environmental conditions for crop development."
                )}</p>
              </div>

              <div className="modal-section">
                <h3>{getText("Estado Actual del MVP", "Current MVP Status")}</h3>
                <p>{getText(
                  "Hemos mejorado significativamente nuestro MVP incorporando sensores de calidad industrial para garantizar la precisión y confiabilidad de los datos recopilados. Las pruebas del sistema mejorado están programadas para comenzar próximamente, junto con el diseño de modelos de optimización mediante IA que permitirán decisiones más inteligentes y automatizadas.",
                  "We have significantly improved our MVP by incorporating industrial-quality sensors to ensure the accuracy and reliability of collected data. Testing of the improved system is scheduled to begin soon, along with the design of optimization models through AI that will enable smarter and more automated decisions."
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
                  <li>{getText("Período de prueba del servicio y producto sin costo", "Free service and product trial period")}</li>
                  <li>{getText("Soporte técnico prioritario", "Priority technical support")}</li>
                  <li>{getText("Participación en el desarrollo de nuevas funcionalidades", "Participation in new feature development")}</li>
                </ul>
              </div>

              <div className="modal-actions">
                <a
                  href="https://app.cattechfuture.com"
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
                    "* La demo incluye un usuario de prueba para que puedas explorar todas las funcionalidades del sistema: visualización de datos en tiempo real, historial de métricas y recomendaciones inteligentes basadas en IA.",
                    "* The demo includes a test user so you can explore all system functionalities: real-time data visualization, metrics history and AI-based intelligent recommendations."
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
