import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('es');
  const [showScrollTop, setShowScrollTop] = useState(false);
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="min-h-screen">
      {/* Theme and Language Controls */}
      <div className="controls">
        <button 
          className="control-btn" 
          onClick={toggleTheme}
          title={getText("Cambiar tema", "Change theme")}
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
        <button 
          className="control-btn" 
          onClick={toggleLanguage}
          title={currentLang === 'es' ? 'Change to English' : 'Cambiar a Español'}
        >
          🌐
        </button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span>Cat-Tech Future</span>
            </div>
            
            <button 
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                {getText("Contacto", "Contact")}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              {getText(
                "Tecnología Global para Desafíos Locales",
                "Global Technology for Local Challenges"
              )}
            </h1>
            <p>
              {getText(
                "Llevamos la modernización tecnológica al norte argentino. Desarrollo de Hardware IoT, Software Personalizado y Análisis de Datos para transformar tu negocio.",
                "We bring technological modernization to northern Argentina. IoT Hardware Development, Custom Software and Data Analysis to transform your business."
              )}
            </p>
            <p className="hero-subcta">
              {getText(
                "✓ Consulta gratuita sin compromiso — Respondemos en menos de 24 horas",
                "✓ Free consultation with no commitment — We respond within 24 hours"
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
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>{getText("Sobre Cat-Tech Future", "About Cat-Tech Future")}</h2>
          <div className="section-line"></div>
          <div className="about-content">
            <p>{getText(
              "Somos una empresa de desarrollo tecnológico especializada en crear soluciones integrales de hardware y software. Nacidos en Catamarca, prestamos servicios a empresas e instituciones en toda la región: Tucumán, Santiago del Estero, La Rioja y Córdoba. Nuestro equipo combina experiencia en ingeniería electrónica, desarrollo de software y ciencia de datos para transformar desafíos complejos en soluciones innovadoras y sustentables.",
              "We are a technology development company specialized in creating comprehensive hardware and software solutions. Based in Catamarca, we serve businesses and institutions across the region: Tucumán, Santiago del Estero, La Rioja and Córdoba. Our team combines experience in electronic engineering, software development and data science to transform complex challenges into innovative and sustainable solutions."
            )}</p>
            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">🎯</div>
                <h3>{getText("Nuestro Enfoque", "Our Approach")}</h3>
                <p>{getText(
                  "Desarrollamos soluciones end-to-end que integran hardware IoT, software personalizado y análisis de datos para impulsar la transformación digital de tu negocio con un fuerte compromiso ambiental.",
                  "We develop end-to-end solutions that integrate IoT hardware, custom software and data analysis to drive your business digital transformation with a strong environmental commitment."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">👥</div>
                <h3>{getText("Equipo Experto", "Expert Team")}</h3>
                <p>{getText(
                  "Ingenieros especializados en desarrollo de hardware IoT, arquitectura de software, ciencia de datos e inteligencia artificial trabajando en conjunto para crear el futuro tecnológico del norte argentino.",
                  "Engineers specialized in IoT hardware development, software architecture, data science and artificial intelligence working together to create the technological future of northern Argentina."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">🚀</div>
                <h3>{getText("Innovación Continua", "Continuous Innovation")}</h3>
                <p>{getText(
                  "Utilizamos las últimas tecnologías en automatización, control, machine learning e integración de LLMs para crear soluciones de vanguardia que impulsen el desarrollo regional.",
                  "We use the latest technologies in automation, control, machine learning and LLM integration to create cutting-edge solutions that drive regional development."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">🤝</div>
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
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>{getText("Desarrollo de Hardware IoT", "IoT Hardware Development")}</h3>
              <p>{getText(
                "Diseño y fabricación de dispositivos IoT personalizados para automatización y control. Sensores, actuadores y sistemas embebidos con conectividad en tiempo real.",
                "Design and manufacturing of custom IoT devices for automation and control. Sensors, actuators and embedded systems with real-time connectivity."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>{getText("Desarrollo de Software", "Software Development")}</h3>
              <p>{getText(
                "Aplicaciones web escalables, APIs RESTful, dashboards interactivos y diseño de bases de datos robustas. Soluciones personalizadas para tu negocio.",
                "Scalable web applications, RESTful APIs, interactive dashboards and robust database design. Custom solutions for your business."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>{getText("Análisis y Ciencia de Datos", "Data Analysis & Science")}</h3>
              <p>{getText(
                "Análisis predictivo, modelos de Machine Learning, pipelines ETL, visualización avanzada y consultoría en ciencia de datos para decisiones estratégicas.",
                "Predictive analysis, Machine Learning models, ETL pipelines, advanced visualization and data science consulting for strategic decisions."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>{getText("Automatización y Control", "Automation & Control")}</h3>
              <p>{getText(
                "Sistemas de control industrial, automatización de procesos, monitoreo remoto y control en tiempo real para optimizar operaciones.",
                "Industrial control systems, process automation, remote monitoring and real-time control to optimize operations."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>{getText("Inteligencia Artificial", "Artificial Intelligence")}</h3>
              <p>{getText(
                "Implementación de modelos de IA con TensorFlow y PyTorch, integración de LLMs y soluciones de aprendizaje automático personalizadas.",
                "Implementation of AI models with TensorFlow and PyTorch, LLM integration and custom machine learning solutions."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>{getText("Consultoría Tecnológica", "Technology Consulting")}</h3>
              <p>{getText(
                "Asesoramiento en transformación digital, arquitectura de soluciones, selección de tecnologías y estrategia de implementación.",
                "Advisory in digital transformation, solution architecture, technology selection and implementation strategy."
              )}</p>
              <a href="#contact" className="service-cta">{getText("Consultar sin compromiso", "Ask without commitment")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="technologies">
        <div className="container">
          <h2>{getText("Stack Tecnológico", "Technology Stack")}</h2>
          <div className="section-line"></div>
          <p className="section-intro">
            {getText(
              "Utilizamos tecnologías modernas y robustas para crear soluciones escalables y de alto rendimiento.",
              "We use modern and robust technologies to create scalable and high-performance solutions."
            )}
          </p>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>
                <span className="tech-icon">⚡</span>
                {getText("Hardware & Embebidos", "Hardware & Embedded")}
              </h3>
              <div className="tech-list">
                <span className="tech-item">C/C++</span>
                <span className="tech-item">Raspberry Pi</span>
                <span className="tech-item">ESP32/ESP8266</span>
                <span className="tech-item">Sensores IoT</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <span className="tech-icon">💻</span>
                {getText("Desarrollo Backend", "Backend Development")}
              </h3>
              <div className="tech-list">
                <span className="tech-item">Python</span>
                <span className="tech-item">Flask</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">TimescaleDB</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <span className="tech-icon">🎨</span>
                {getText("Desarrollo Frontend", "Frontend Development")}
              </h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">HTML/CSS</span>
                <span className="tech-item">Dashboards</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <span className="tech-icon">🤖</span>
                {getText("IA & Machine Learning", "AI & Machine Learning")}
              </h3>
              <div className="tech-list">
                <span className="tech-item">TensorFlow</span>
                <span className="tech-item">PyTorch</span>
                <span className="tech-item">LLM Integration</span>
                <span className="tech-item">Scikit-learn</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <span className="tech-icon">📊</span>
                {getText("Análisis de Datos", "Data Analysis")}
              </h3>
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

            <div className="tech-category">
              <h3>
                <span className="tech-icon">🔧</span>
                {getText("DevOps & Tools", "DevOps & Tools")}
              </h3>
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
          <h2>{getText("Portfolio", "Portfolio")}</h2>
          <div className="section-line"></div>
          <p className="section-intro">
            {getText(
              "Casos de éxito que demuestran nuestras capacidades en desarrollo de soluciones tecnológicas integrales y sustentables.",
              "Success cases that demonstrate our capabilities in developing comprehensive and sustainable technological solutions."
            )}
          </p>
          
          <div className="projects-grid">
            <div className="project-card clickable" onClick={openCropModal}>
              <div className="project-image">🌱</div>
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
            </div>

            <div className="project-card">
              <div className="project-image">💧</div>
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
            </div>
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
          <h2>{getText("Sectores que Atendemos", "Sectors We Serve")}</h2>
          <div className="section-line"></div>
          <div className="sectors-grid">
            <div className="sector-card">
              <div className="sector-icon">🏭</div>
              <h3>{getText("Industria", "Industry")}</h3>
              <p>{getText(
                "Automatización de procesos, control de calidad, monitoreo de producción y análisis predictivo para manufactura y producción industrial.",
                "Process automation, quality control, production monitoring and predictive analysis for manufacturing and industrial production."
              )}</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">🏪</div>
              <h3>{getText("Retail & PyMEs", "Retail & SMEs")}</h3>
              <p>{getText(
                "Sistemas de gestión, análisis de ventas, dashboards ejecutivos, automatización de inventarios y soluciones de e-commerce para pequeñas y medianas empresas.",
                "Management systems, sales analysis, executive dashboards, inventory automation and e-commerce solutions for small and medium enterprises."
              )}</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">🏛️</div>
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
          <h2>{getText("Nuestro Proceso de Trabajo", "Our Work Process")}</h2>
          <div className="section-line"></div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>{getText("Análisis y Consultoría", "Analysis & Consulting")}</h3>
              <p>{getText(
                "Entendemos tus necesidades y desafíos. Realizamos un análisis profundo para diseñar la solución óptima.",
                "We understand your needs and challenges. We perform a deep analysis to design the optimal solution."
              )}</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>{getText("Diseño y Arquitectura", "Design & Architecture")}</h3>
              <p>{getText(
                "Diseñamos la arquitectura completa de hardware y software, seleccionando las mejores tecnologías para tu proyecto.",
                "We design the complete hardware and software architecture, selecting the best technologies for your project."
              )}</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>{getText("Desarrollo e Implementación", "Development & Implementation")}</h3>
              <p>{getText(
                "Desarrollamos la solución con metodologías ágiles, manteniendo comunicación constante y entregas incrementales.",
                "We develop the solution with agile methodologies, maintaining constant communication and incremental deliveries."
              )}</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>{getText("Despliegue y Capacitación", "Deployment & Training")}</h3>
              <p>{getText(
                "Implementamos la solución en producción y capacitamos a tu equipo para su operación y mantenimiento.",
                "We implement the solution in production and train your team for its operation and maintenance."
              )}</p>
            </div>
            <div className="process-step">
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
          <h2>{getText("Nuestra Visión", "Our Vision")}</h2>
          <div className="section-line"></div>
          <div className="vision-content">
            <div className="vision-main">
              <div className="vision-icon">🌟</div>
              <h3>{getText("Modernización Tecnológica del Norte Argentino", "Technological Modernization of Northern Argentina")}</h3>
              <p>{getText(
                "Nuestra misión es transformar el norte argentino en un polo de innovación tecnológica. Creemos que la tecnología global debe estar al alcance de todos, sin importar la ubicación geográfica. El norte argentino se destaca por su gran potencial pero sufre de baja adopción tecnológica y escasas oportunidades de empleo en el sector tech, lo que obliga a muchos ingenieros y profesionales a abandonar la región para poder trabajar en su especialidad.",
                "Our mission is to transform northern Argentina into a technological innovation hub. We believe that global technology should be accessible to everyone, regardless of geographic location. Northern Argentina stands out for its great potential but suffers from low technology adoption and scarce employment opportunities in the tech sector, forcing many engineers and professionals to leave the region to work in their specialty."
              )}</p>
              <p>{getText(
                "Queremos cambiar esta realidad. Desarrollamos tecnología global para desafíos locales, demostrando que desde Catamarca podemos crear soluciones de clase mundial. Nuestro objetivo es generar empleo tecnológico local, retener talento en la región y demostrar que la innovación no tiene fronteras geográficas.",
                "We want to change this reality. We develop global technology for locals challenges, demonstrating that from Catamarca we can create world-class solutions. Our goal is to generate local tech employment, retain talent in the region and demonstrate that innovation has no geographic boundaries."
              )}</p>
            </div>
            
            <div className="vision-grid">
              <div className="vision-card">
                <div className="vision-card-icon">🌍</div>
                <h4>{getText("Impacto Regional", "Regional Impact")}</h4>
                <p>{getText(
                  "Crear oportunidades de empleo tecnológico en Catamarca y expandir soluciones hacia Tucumán, Santiago del Estero, La Rioja y Córdoba, reteniendo talento local en la región.",
                  "Create technological employment opportunities in Catamarca and expand solutions to Tucumán, Santiago del Estero, La Rioja and Córdoba, retaining local talent in the region."
                )}</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">♻️</div>
                <h4>{getText("Sustentabilidad", "Sustainability")}</h4>
                <p>{getText(
                  "Todas nuestras soluciones están diseñadas con un fuerte compromiso ambiental, contribuyendo activamente al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS).",
                  "All our solutions are designed with a strong environmental commitment, actively contributing to the fulfillment of the Sustainable Development Goals (SDGs)."
                )}</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">🚀</div>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
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
              <span className="step-icon">💬</span>
              {getText("Contanos tu proyecto", "Tell us your project")}
            </div>
            <span className="contact-process-arrow">→</span>
            <div className="contact-process-step">
              <span className="step-icon">🎁</span>
              {getText("Consulta gratuita", "Free consultation")}
            </div>
            <span className="contact-process-arrow">→</span>
            <div className="contact-process-step">
              <span className="step-icon">🚀</span>
              {getText("Diseñamos tu solución", "We design your solution")}
            </div>
          </div>

          {/* Puntos de confianza */}
          <div className="contact-trust">
            <div className="contact-trust-item">
              <span className="trust-icon">⚡</span>
              <p>{getText("Respuesta en menos de 24 horas hábiles", "Response within 24 business hours")}</p>
            </div>
            <div className="contact-trust-item">
              <span className="trust-icon">🎯</span>
              <p>{getText("Presupuesto personalizado, sin costos ocultos", "Custom quote, no hidden costs")}</p>
            </div>
            <div className="contact-trust-item">
              <span className="trust-icon">🤝</span>
              <p>{getText("Acompañamiento desde la idea hasta la implementación", "Support from idea to implementation")}</p>
            </div>
          </div>

          <div className="contact-info">
            <h3>{getText("Escribinos directamente", "Write to us directly")}</h3>

            {/* CTA principal WhatsApp */}
            <div className="contact-main-cta">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                💬 {getText("Escribirnos por WhatsApp", "Message us on WhatsApp")}
              </a>
              <span className="contact-or">
                {getText("o usá los canales de abajo", "or use the channels below")}
              </span>
            </div>

            <div className="info-item">
              <span className="info-icon">📧</span>
              <a href="mailto:cattechfuture@gmail.com">cattechfuture@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-icon">💬</span>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp: +54 383 432-4087
              </a>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <a href="https://maps.app.goo.gl/G4Ea8fKcDmG3rLG8A" target="_blank" rel="noopener noreferrer">
                {getText(
                  "Catamarca — Atendemos Tucumán, Stgo. del Estero, La Rioja y Córdoba",
                  "Catamarca — We serve Tucumán, Santiago del Estero, La Rioja and Córdoba"
                )}
              </a>
            </div>
            <div className="info-item">
              <span className="info-icon">📸</span>
              <a href="https://www.instagram.com/cat.tech_future/profilecard/?igsh=eWRreGVxbGs3bmdl" target="_blank" rel="noopener noreferrer">
                @cat.tech_future
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
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
        💬
      </a>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button onClick={scrollToTop} id="scroll-top">
          ↑
        </button>
      )}

      {/* Crop System Modal */}
      {showCropModal && (
        <div className="modal-overlay" onClick={closeCropModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCropModal}>
              ✕
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">🌱</div>
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
                <h3>✨ {getText("Oferta para Primeros Adoptadores", "Early Adopter Offer")}</h3>
                <p>{getText(
                  "Si estás interesado en ser uno de nuestros primeros clientes, ofrecemos beneficios exclusivos:",
                  "If you are interested in being one of our first customers, we offer exclusive benefits:"
                )}</p>
                <ul className="benefits-list">
                  <li>🎯 {getText("Descuentos especiales en la adquisición del sistema", "Special discounts on system acquisition")}</li>
                  <li>🔄 {getText("Actualizaciones gratuitas de software y firmware", "Free software and firmware updates")}</li>
                  <li>🧪 {getText("Período de prueba del servicio y producto sin costo", "Free service and product trial period")}</li>
                  <li>🤝 {getText("Soporte técnico prioritario", "Priority technical support")}</li>
                  <li>📊 {getText("Participación en el desarrollo de nuevas funcionalidades", "Participation in new feature development")}</li>
                </ul>
              </div>

              <div className="modal-actions">
                <a 
                  href="https://app.cattechfuture.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  {getText("🌐 Ver Demo del Sistema", "🌐 View System Demo")}
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn-large"
                  style={{ justifyContent: 'center' }}
                >
                  {getText("💬 Consultar por WhatsApp", "💬 Ask on WhatsApp")}
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