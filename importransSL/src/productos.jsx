import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './productos.css';
import ContactModal from './contacto';

const Productos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src='/src/LOGO.png' alt="Logo" className="logo-img" />
          </a>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a href="/productos" className="active">
              Productos
            </a>
          </li>
          <li>
            <a 
              href="/servicios" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/servicios');
              }}
            >
              Servicios
            </a>
          </li>
          <li>
            <a 
              href="/proyectos"
              onClick={(e) => {
                e.preventDefault();
                navigate('/proyectos');
              }}
            >
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

      {/* Contenedor principal con imagen, texto y imagen cango */}
      <div className="productos-main-container">
        {/* Sección izquierda con imagen y texto */}
        <div className="productos-left-section">
          {/* Imagen de productos */}
          <div className="productos-image-container">
            <img src="/src/productos.png" alt="Productos" className="productos-img" />
          </div>

          {/* Texto descriptivo */}
          <div className="productos-text-container">
            <p>
              <strong>IMPORTRANS RADIACTIVOS LTDA</strong> cuenta con proveedores internacionales especializados en material radiactivo y nacionales expertos en la producción de radiofármacos terapéuticos y diagnósticos. Posee experiencia en la comercialización de estos materiales en todo el territorio nacional, cumpliendo con las autorizaciones de los entes reguladores. Ofrece material radiactivo que cumple con los procesos de calidad exigidos, respondiendo a la demanda actual del mercado.
            </p>
          </div>
        </div>

        {/* Imagen cango a la derecha */}
        <div className="cango-image-container">
          <img src="/src/cango.png" alt="Cango" className="cango-img" />
        </div>
      </div>

      {/* Imagen de radioISOTOPOS centrada */}
      <div className="radioisotopos-container">
        <img src="/src/radioISOTOPOS.png" alt="Radioisótopos" className="radioisotopos-img" />
      </div>

      {/* Sección de cartas de productos */}
      <div className="productos-cards-section">
        <div className="productos-cards-container">
          <div className="producto-card">
            <div className="producto-card-header">
              <h3>LU-177</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del lutecio que emite radiación beta y gamma, usado en terapias dirigidas.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>P – 132</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del fósforo, emisor beta, con aplicaciones experimentales médicas.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>67 – Galio</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del galio, emisor gamma, usado en gammagrafías para detectar infecciones o tumores.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>Generador de Ge – 68/Ga – 68</h3>
            </div>
            <div className="producto-card-body">
              <p>Genera Galio‑68, usado en escáneres PET.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>In – 111</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del indio, emisor gamma, útil para marcar células en estudios de imagen.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>Y-90</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del itrio que emite beta, usado en tratamientos localizados</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>Generador de Mo – 99</h3>
            </div>
            <div className="producto-card-body">
              <p>Produce Tecnecio‑99m, esencial para imágenes médicas.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>Generador W – 188 / Re – 188</h3>
            </div>
            <div className="producto-card-body">
              <p>Genera Renio‑188, utilizado en terapias con radiación.</p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-card-header">
              <h3>I – 131</h3>
            </div>
            <div className="producto-card-body">
              <p>Isótopo del yodo, emite beta y gamma, aplicado en tratamientos tiroideos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen de radiofármacos centrada */}
      <div className="radiofarmacos-container">
        <img src="/src/radiofarmacos.png" alt="Radiofármacos" className="radiofarmacos-img" />
      </div>

      {/* Sección de servicios radiofármacos con fondo azul */}
      <div className="radiofarmacos-services-section">
        <div className="radiofarmacos-services-container">
          <div className="radiofarmaco-card">
            <div className="radiofarmaco-icon">
              <img src="/src/RADIO.jpg" alt="Diagnóstico" className="radiofarmaco-logo" />
            </div>
            <div className="radiofarmaco-content">
              <h3>68Ga – Dotatoc</h3>
              <p>Radiofármaco con Galio‑68 dirigido a receptores de somatostatina, usado en PET para tumores neuroendocrinos.</p>
            </div>
          </div>

          <div className="radiofarmaco-card">
            <div className="radiofarmaco-icon">
              <img src="/src/RADIO.jpg" alt="Terapia" className="radiofarmaco-logo" />
            </div>
            <div className="radiofarmaco-content">
              <h3>68Ga – PSMA</h3>
              <p>Galio‑68 unido a PSMA, utilizado en PET para detectar cáncer de próstata.</p>
            </div>
          </div>

          <div className="radiofarmaco-card">
            <div className="radiofarmaco-icon">
              <img src="/src/RADIO.jpg" alt="Calidad" className="radiofarmaco-logo" />
            </div>
            <div className="radiofarmaco-content">
              <h3>177Lu – Dotatoc</h3>
              <p>Lutecio‑177 unido a Dotatoc, permite terapia dirigida en tumores neuroendocrinos.</p>
            </div>
          </div>

          <div className="radiofarmaco-card">
            <div className="radiofarmaco-icon">
              <img src="/src/RADIO.jpg" alt="Distribución" className="radiofarmaco-logo" />
            </div>
            <div className="radiofarmaco-content">
              <h3>177Lu – PSMA</h3>
              <p>RLutecio‑177 unido a PSMA, usado para tratar cáncer de próstata metastásico.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen de footer centrada */}
      <div className="footer-image-container">
        <img src="/src/footer.png" alt="Footer" className="footer-img" />
      </div>

      {/* Sección de servicios con fondo azul */}
      <div className="servicios-section">
        {/* Contenido de servicios existente */}
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Inicio
          </a>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/servicios');
            }}
          >
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/proyectos');
            }}
          >
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
};

export default Productos;