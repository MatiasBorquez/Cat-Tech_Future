import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('es');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                "Soluciones Tecnológicas Integrales para tu Negocio",
                "Comprehensive Technology Solutions for Your Business"
              )}
            </h1>
            <p>
              {getText(
                "Desarrollo de Hardware IoT, Software Personalizado y Análisis de Datos. Transformamos desafíos complejos en soluciones innovadoras.",
                "IoT Hardware Development, Custom Software and Data Analysis. We transform complex challenges into innovative solutions."
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
              "Somos una empresa de desarrollo tecnológico especializada en crear soluciones integrales de hardware y software. Nuestro equipo combina experiencia en ingeniería electrónica, desarrollo de software y ciencia de datos para transformar desafíos complejos en soluciones innovadoras.",
              "We are a technology development company specialized in creating comprehensive hardware and software solutions. Our team combines experience in electronic engineering, software development and data science to transform complex challenges into innovative solutions."
            )}</p>
            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">🎯</div>
                <h3>{getText("Nuestro Enfoque", "Our Approach")}</h3>
                <p>{getText(
                  "Desarrollamos soluciones end-to-end que integran hardware IoT, software personalizado y análisis de datos para impulsar la transformación digital de tu negocio.",
                  "We develop end-to-end solutions that integrate IoT hardware, custom software and data analysis to drive your business digital transformation."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">👥</div>
                <h3>{getText("Equipo Experto", "Expert Team")}</h3>
                <p>{getText(
                  "Especialistas en desarrollo de hardware IoT, arquitectura de software, ciencia de datos e inteligencia artificial trabajando en conjunto.",
                  "specialized in IoT hardware development, software architecture, data science and artificial intelligence working together."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">🚀</div>
                <h3>{getText("Innovación Continua", "Continuous Innovation")}</h3>
                <p>{getText(
                  "Utilizamos las últimas tecnologías en automatización, control, machine learning e integración de LLMs para crear soluciones de vanguardia.",
                  "We use the latest technologies in automation, control, machine learning and LLM integration to create cutting-edge solutions."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">🤝</div>
                <h3>{getText("Compromiso", "Commitment")}</h3>
                <p>{getText(
                  "Nos comprometemos con la calidad, eficiencia y escalabilidad de cada proyecto, desde el diseño hasta la implementación y soporte continuo.",
                  "We are committed to the quality, efficiency and scalability of each project, from design to implementation and continuous support."
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
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>{getText("Desarrollo de Hardware IoT", "IoT Hardware Development")}</h3>
              <p>{getText(
                "Diseño y fabricación de dispositivos IoT personalizados para automatización y control. Sensores, actuadores y sistemas embebidos con conectividad en tiempo real.",
                "Design and manufacturing of custom IoT devices for automation and control. Sensors, actuators and embedded systems with real-time connectivity."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>{getText("Desarrollo de Software", "Software Development")}</h3>
              <p>{getText(
                "Aplicaciones web escalables, APIs RESTful, dashboards interactivos y diseño de bases de datos robustas. Soluciones personalizadas para tu negocio.",
                "Scalable web applications, RESTful APIs, interactive dashboards and robust database design. Custom solutions for your business."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>{getText("Análisis y Ciencia de Datos", "Data Analysis & Science")}</h3>
              <p>{getText(
                "Análisis predictivo, modelos de Machine Learning, pipelines ETL, visualización avanzada y consultoría en ciencia de datos para decisiones estratégicas.",
                "Predictive analysis, Machine Learning models, ETL pipelines, advanced visualization and data science consulting for strategic decisions."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>{getText("Automatización y Control", "Automation & Control")}</h3>
              <p>{getText(
                "Sistemas de control industrial, automatización de procesos, monitoreo remoto y control en tiempo real para optimizar operaciones.",
                "Industrial control systems, process automation, remote monitoring and real-time control to optimize operations."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>{getText("Inteligencia Artificial", "Artificial Intelligence")}</h3>
              <p>{getText(
                "Implementación de modelos de IA con TensorFlow y PyTorch, integración de LLMs y soluciones de aprendizaje automático personalizadas.",
                "Implementation of AI models with TensorFlow and PyTorch, LLM integration and custom machine learning solutions."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>{getText("Consultoría Tecnológica", "Technology Consulting")}</h3>
              <p>{getText(
                "Asesoramiento en transformación digital, arquitectura de soluciones, selección de tecnologías y estrategia de implementación.",
                "Advisory in digital transformation, solution architecture, technology selection and implementation strategy."
              )}</p>
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
              "Casos de éxito que demuestran nuestras capacidades en desarrollo de soluciones tecnológicas integrales.",
              "Success cases that demonstrate our capabilities in developing comprehensive technological solutions."
            )}
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">🌱</div>
              <div className="project-content">
                <h3>{getText("Sistema Inteligente para Cultivos", "Smart Greenhouse System")}</h3>
                <div className="card-line"></div>
                <p>{getText(
                  "Solución completa que integra hardware IoT, software de monitoreo y análisis predictivo para optimizar la producción agrícola mediante control automatizado de clima y riego.",
                  "Complete solution that integrates IoT hardware, monitoring software and predictive analysis to optimize agricultural production through automated climate and irrigation control."
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
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">💧</div>
              <div className="project-content">
                <h3>{getText("Sistema de Riego Inteligente", "Smart Irrigation System")}</h3>
                <div className="card-line"></div>
                <p>{getText(
                  "Sistema automatizado con sensores IoT y dashboard en tiempo real para gestión eficiente del agua en espacios públicos, reduciendo consumo hasta un 40%.",
                  "Automated system with IoT sensors and real-time dashboard for efficient water management in public spaces, reducing consumption by up to 40%."
                )}</p>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>{getText("Contáctanos", "Contact Us")}</h2>
          <div className="section-line"></div>
          <p className="section-intro">
            {getText(
              "Estamos listos para colaborar en tu próximo proyecto.",
              "We are ready to collaborate on your next project."
            )}
          </p>
          
          <div className="contact-info">
            <h3>{getText("Información de Contacto", "Contact Information")}</h3>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <a href="mailto:cattechfuture@gmail.com">cattechfuture@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <a href="tel:+543834324087">+543834324087</a>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <a href="https://maps.app.goo.gl/G4Ea8fKcDmG3rLG8A" target="_blank" rel="noopener noreferrer">
                Catamarca, Argentina
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

      {/* Scroll to top button */}
      {showScrollTop && (
        <button onClick={scrollToTop} id="scroll-top">
          ↑
        </button>
      )}
    </div>
  );
};

export default App;