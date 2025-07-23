import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ContactModal from './contacto';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutImageHidden, setIsAboutImageHidden] = useState(false);
  const [showPQRModal, setShowPQRModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [pqrData, setPqrData] = useState({
    opcion: '',
    nombres: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correo: '',
    telefono: '',
    objeto: ''
  });
  const aboutTextRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleQuienesSomosClick = (e) => {
    e.preventDefault();
    setIsAboutImageHidden(true);
    setIsMenuOpen(false);
    
    const section = document.getElementById('quienes-somos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductosClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/productos');             
  };

  const handleInicioClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handlePQRSubmit = (e) => {
    e.preventDefault();
    console.log('Datos PQR:', pqrData);
    setShowPQRModal(false);
    alert('Su PQR ha sido enviado exitosamente');
  };

  const handleInputChange = (e) => {
    setPqrData({
      ...pqrData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      {/* Modal PQR */}
      {showPQRModal && (
        <div className="pqr-modal-overlay" onClick={() => setShowPQRModal(false)}>
          <div className="pqr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pqr-modal-header">
              <h3>Formulario PQR</h3>
              <button className="close-btn" onClick={() => setShowPQRModal(false)}>×</button>
            </div>
            <form onSubmit={handlePQRSubmit} className="pqr-form">
              <div className="pqr-form-row">
                <select
                  name="opcion"
                  value={pqrData.opcion}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="queja">Queja</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="solicitud">Solicitud</option>
                  <option value="denuncia">Denuncia</option>
                  <option value="propuesta">Propuesta</option>
                </select>
              </div>
              
              <div className="pqr-form-row">
                <input
                  type="text"
                  name="nombres"
                  placeholder="Nombres/Entidad"
                  value={pqrData.nombres}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="pqr-form-row">
                <select
                  name="tipoDocumento"
                  value={pqrData.tipoDocumento}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Tipo de documento</option>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ce">Cédula de Extranjería</option>
                  <option value="nit">NIT</option>
                  <option value="passport">Pasaporte</option>
                </select>
                <input
                  type="text"
                  name="numeroDocumento"
                  placeholder="Número de documento"
                  value={pqrData.numeroDocumento}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="pqr-form-row">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo electrónico"
                  value={pqrData.correo}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={pqrData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="pqr-form-row">
                <textarea
                  name="objeto"
                  placeholder="Objeto de su PQRSD"
                  value={pqrData.objeto}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>
              
              <div className="pqr-form-buttons">
                <button type="button" onClick={() => setShowPQRModal(false)}>Cancelar</button>
                <button type="submit">Enviar PQR</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Contacto */}
      <ContactModal 
        showContactModal={showContactModal} 
        setShowContactModal={setShowContactModal} 
      />

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="/" onClick={handleInicioClick}>
            <img src='/src/LOGO.png' alt="Logo" className="logo-img" />
          </a>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a href="/" onClick={handleInicioClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/productos" onClick={(e) => { e.preventDefault(); navigate('/productos'); }}>
              Productos
            </a>
          </li>
          <li>
            <a href="/servicios" onClick={(e) => { e.preventDefault(); navigate('/servicios'); }}>
              Servicios
            </a>
          </li>
          <li>
            <a href="/proyectos" onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                setShowContactModal(true);
                setIsMenuOpen(false);
              }}
            >
              Contactanos
            </a>
          </li>
          <li>
            <button className="login-btn">log-in</button>
          </li>
        </ul>
      </nav>

      <div className="hero-bg">
        <video 
          src="/src/VIDEO.mp4" 
          className="video-img"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      <div className="about-section" id="quienes-somos">
        <div className="about-text">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos una empresa especializada en transporte terrestre, cargue y descargue de mercancías peligrosas a nivel nacional. También realizamos importación, distribución, comercialización y almacenamiento de material radiactivo, dispositivos médicos y kits radiofarmacéuticos. Ofrecemos asesoría y capacitación en protección radiológica, cumpliendo con los requisitos de seguridad, legalidad y calidad, con un servicio oportuno y responsable, enfocado en la protección del medio ambiente.
          </p>
        </div>
        <div className={`about-img ${isAboutImageHidden ? 'hidden' : ''}`}>
          <img src="/src/15 años.png" alt="15 años" />
        </div>
      </div>
      
      <div className="certificados-title">
        <img src="/src/certificados.png" alt="Certificados" className="certificados-img" />
      </div>
      
      <div className="blue-bg">
        <div className="cards-container">
          <div className="card">
            <img src="/src/card1.png" alt="Carta 1" className="card-img" />
            <div className="card-info">
              <h3>CERTIFICACION 1</h3>
              <p>ISO 9001:2015 es la versión vigente del estándar internacional para Sistemas de Gestión de la Calidad (SGC). Su objetivo principal es ayudar a las organizaciones –de cualquier tamaño o sector– a garantizar de forma consistente productos y servicios que cumplan requisitos del cliente y normativos, al tiempo que promueven la mejora continua</p>
            </div>
          </div>
          <div className="card">
            <img src="/src/card2.png" alt="Carta 2" className="card-img" />
            <div className="card-info">
              <h3>CERTIFICACION 2</h3>
              <p>ISO 14001:2015 es un estándar internacional voluntario que establece los requisitos para un Sistema de Gestión Ambiental (SGA), ayudando a las organizaciones de cualquier tamaño a identificar, controlar y mejorar continuamente su desempeño ambiental mediante el ciclo PDCA, un enfoque basado en riesgos y con integración estratégica de liderazgo y ciclo de vida</p>
            </div>
          </div>
          <div className="card">
            <img src="/src/card 3.png" alt="Carta 3" className="card-img" />
            <div className="card-info">
              <h3>CERTIFICACION 3</h3>
              <p>ISO 45001:2018 es la norma internacional para Sistemas de Gestión de Salud y Seguridad en el Trabajo (SST), publicada el 12 de marzo de 2018, reemplazando a OHSAS 18001</p>
            </div>
          </div>
          <div className="card">
            <img src="/src/card 4.png" alt="Carta 4" className="card-img" />
            <div className="card-info">
              <h3>CERTIFICACION 4</h3>
              <p>ISO 39001:2012 define un sistema sistemático (liderazgo, planificación, operación, evaluación y mejora continua) para que organizaciones reduzcan eficazmente los accidentes graves en sus actividades viales.</p>
            </div>
          </div>
        </div>
        <div className="cards-label-row">
          <span>ISO 9001 VERSIÓN 2015</span>
          <span>ISO 14001 VERSIÓN 2015</span>
          <span>ISO 45001 VERSIÓN 2018</span>
          <span>ISO 39001 VERSIÓN 2012</span>
        </div>
      </div>
      
      <div style={{ height: "2.5rem" }} />
      
      <div className="ubicanos-title">
        <img src="/src/ubicanos.png" alt="Ubícanos" className="ubicanos-img" />
      </div>
      
      <div className="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.081826698265!2d-74.13919222636007!3d4.755801241180198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f838e2fad5bdd%3A0x204b6f273d7bd74e!2sImportrans%20Radiactivos!5e0!3m2!1ses!2sco!4v1752688204825!5m2!1ses!2sco"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Importrans"
        ></iframe>
      </div>
      
      {/* Footer */}
      <footer className="footer-blue">
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p>📞 celular: +57 3175105541</p>
          <p>📞 Teléfono: (601) 898 5388</p>
          <p>📧 Email: comercial@importransradiactivos.com</p>
        </div>  
        
        <div className="footer-links">
          <a href="#" onClick={handleInicioClick}>
            Inicio
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/servicios'); }}>
            Servicios
          </a>
          <a 
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              setShowContactModal(true);
            }}
          >
            Contacto
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>
            Proyectos
          </a>
          <a href="#pqr" onClick={(e) => {
            e.preventDefault();
            setShowPQRModal(true);
          }}>PQR</a>
        </div>
        
        <div className="footer-logo-social">
          <a href="https://intranet.tuempresa.com" target="_blank" rel="noopener noreferrer">
            <img src="/src/logo INTRANET.png" alt="Intranet" className="intranet-logo" />
          </a>
          <div className="footer-social-icons-custom">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="socialContainer containerThree" aria-label="LinkedIn">
              <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="socialContainer containerTwo" aria-label="Facebook">
              <svg className="socialSvg facebookSvg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"/>
              </svg>
            </a>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="socialContainer containerFour" aria-label="WhatsApp">
              <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


