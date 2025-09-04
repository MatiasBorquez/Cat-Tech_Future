import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('es');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'es';
    
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
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setCurrentLang(newLang);
    localStorage.setItem('language', newLang);
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
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                {getText("Proyectos", "Projects")}
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                {getText("Servicios", "Services")}
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
                "Cat-Tech Future: Transformando el Presente, Construyendo el Futuro",
                "Cat-Tech Future: Transforming the Present, Building the Future"
              )}
            </h1>
            <p>
              {getText(
                "Innovación en IoT, Análisis de Datos, IA, Automatización y Robótica para el Desarrollo Sostenible",
                "Innovation in IoT, Data Analysis, AI, Automation and Robotics for Sustainable Development"
              )}
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                {getText("Contáctanos", "Contact Us")}
              </a>
              <a href="#projects" className="btn btn-outline">
                {getText("Conoce Nuestros Proyectos", "Discover Our Projects")}
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
              "Somos un equipo apasionado de ingenieros y especialistas en tecnología, comprometidos con impulsar el progreso de nuestra sociedad a través de la innovación.",
              "We are a passionate team of engineers and technology specialists, committed to driving progress in our society through innovation."
            )}</p>
            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">💡</div>
                <h3>{getText("Nuestra Visión", "Our Vision")}</h3>
                <p>{getText(
                  "Contribuir al desarrollo tecnológico de nuestra región y del país, generando un impacto positivo en la economía, el medio ambiente y la calidad de vida de las personas.",
                  "Contribute to the technological development of our region and country, generating a positive impact on the economy, environment and people's quality of life."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">👥</div>
                <h3>{getText("Nuestro Equipo", "Our Team")}</h3>
                <p>{getText(
                  "Contamos con profesionales especializados en diversas áreas de la tecnología, unidos por la pasión de crear soluciones innovadoras que respondan a necesidades reales.",
                  "We have professionals specialized in various areas of technology, united by the passion to create innovative solutions that respond to real needs."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">⚙️</div>
                <h3>{getText("Tecnologías", "Technologies")}</h3>
                <p>{getText(
                  "Nuestras áreas de especialización abarcan el IoT, Análisis de Datos, Inteligencia Artificial, Automatización, Control y Robótica.",
                  "Our areas of specialization include IoT, Data Analysis, Artificial Intelligence, Automation, Control and Robotics."
                )}</p>
              </div>
              <div className="about-card">
                <div className="card-icon">📈</div>
                <h3>{getText("Impacto", "Impact")}</h3>
                <p>{getText(
                  "Buscamos que nuestras soluciones tengan un impacto real y medible, contribuyendo a la eficiencia y sostenibilidad.",
                  "We seek for our solutions to have a real and measurable impact, contributing to efficiency and sustainability."
                )}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>{getText("Proyectos Destacados", "Featured Projects")}</h2>
          <div className="section-line"></div>
          <p className="section-intro">
            {getText(
              "En Cat-Tech Future, desarrollamos soluciones tecnológicas innovadoras para diversos sectores.",
              "At Cat-Tech Future, we develop innovative technological solutions for various sectors."
            )}
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">🌱</div>
              <div className="project-content">
                <h3>{getText("Sistema Inteligente para cultivos", "Smart Greenhouse System")}</h3>
                <div className="card-line"></div>
                <p>{getText(
                  "Nuestro sistema de automatización y control de cultivos utiliza inteligencia artificial y sensores IoT para optimizar la producción agrícola.",
                  "Our greenhouse automation and control system uses artificial intelligence and IoT sensors to optimize agricultural production."
                )}</p>
                <a href="#contact" className="btn-link">
                  {getText("Más información →", "More information →")}
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">💧</div>
              <div className="project-content">
                <h3>{getText("Sistema de Riego Inteligente", "Smart Irrigation System")}</h3>
                <div className="card-line"></div>
                <p>{getText(
                  "Sistema de riego automatizado que utiliza sensores y control inteligente para suministrar la cantidad óptima de agua a los parques y jardines.",
                  "Automated irrigation system that uses sensors and intelligent control to supply the optimal amount of water to parks and gardens."
                )}</p>
                <a href="#contact" className="btn-link">
                  {getText("Más información →", "More information →")}
                </a>
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
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📡</div>
              <h3>{getText("Desarrollo de Proyectos de IoT", "IoT Project Development")}</h3>
              <p>{getText(
                "Diseño e implementación de soluciones de Internet de las Cosas para la conectividad y el control.",
                "Design and implementation of Internet of Things solutions for connectivity and control."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>{getText("Análisis de Datos y Big Data", "Data Analysis and Big Data")}</h3>
              <p>{getText(
                "Recopilación y análisis de grandes volúmenes de datos para decisiones estratégicas.",
                "Collection and analysis of large volumes of data for strategic decisions."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>{getText("Inteligencia Artificial", "Artificial Intelligence")}</h3>
              <p>{getText(
                "Desarrollo de modelos de IA y aprendizaje automático para automatización y optimización.",
                "Development of AI and machine learning models for automation and optimization."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>{getText("Automatización Industrial", "Industrial Automation")}</h3>
              <p>{getText(
                "Diseño e implementación de sistemas de automatización y control para la industria.",
                "Design and implementation of automation and control systems for industry."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>{getText("Robótica", "Robotics")}</h3>
              <p>{getText(
                "Diseño y desarrollo de soluciones robóticas para diversas aplicaciones.",
                "Design and development of robotic solutions for various applications."
              )}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>{getText("Consultoría Tecnológica", "Technology Consulting")}</h3>
              <p>{getText(
                "Asesoramiento en proyectos de innovación y transformación digital.",
                "Advisory services for innovation projects and digital transformation."
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
              <a href="#projects">{getText("Proyectos", "Projects")}</a>
              <a href="#services">{getText("Servicios", "Services")}</a>
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