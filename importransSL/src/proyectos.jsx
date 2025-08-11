import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './proyectos.css';

const Proyectos = () => {
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
  const [contactData, setContactData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    descripcion: ''
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Datos Contacto:', contactData);
    setShowContactModal(false);
    alert('Su mensaje ha sido enviado exitosamente');
  };

  const handleInputChange = (e) => {
    setPqrData({
      ...pqrData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactInputChange = (e) => {
    setContactData({
      ...contactData,
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

      {/* Modal Contacto */}
      {showContactModal && (
        <div className="pqr-modal-overlay contact-modal" onClick={() => setShowContactModal(false)}>
          <div className="pqr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pqr-modal-header">
              <h3>Contáctanos</h3>
              <button className="close-btn" onClick={() => setShowContactModal(false)}>×</button>
            </div>
            
            <div className="contact-modal-content">
              {/* Lado izquierdo - Información de contacto */}
              <div className="contact-info-side">
                <h4>Contáctanos</h4>
                
                <div className="contact-info-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Celular:</strong> +57 3175105541
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Teléfono:</strong> (601) 898 5388
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email:</strong> comercial@importransradiactivos.com
                  </div>
                </div>
              </div>
              
              {/* Lado derecho - Formulario */}
              <div className="contact-form-side">
                <form onSubmit={handleContactSubmit} className="pqr-form">
                  <div className="pqr-form-row">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo"
                      value={contactData.nombre}
                      onChange={handleContactInputChange}
                      required
                    />
                  </div>
                  
                  <div className="pqr-form-row">
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={contactData.empresa}
                      onChange={handleContactInputChange}
                      required
                    />
                  </div>
                  
                  <div className="pqr-form-row">
                    <input
                      type="email"
                      name="correo"
                      placeholder="Correo electrónico"
                      value={contactData.correo}
                      onChange={handleContactInputChange}
                      required
                    />
                  </div>
                  
                  <div className="pqr-form-row">
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      value={contactData.telefono}
                      onChange={handleContactInputChange}
                      required
                    />
                  </div>
                  
                  <div className="pqr-form-row">
                    <textarea
                      name="descripcion"
                      placeholder="Descripción del servicio requerido"
                      value={contactData.descripcion}
                      onChange={handleContactInputChange}
                      rows="4"
                      required
                    />
                  </div>
                  
                  <div className="pqr-form-buttons">
                    <button type="button" onClick={() => setShowContactModal(false)}>Cancelar</button>
                    <button type="submit">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <a 
              href="/productos"
              onClick={(e) => {
                e.preventDefault();
                navigate('/productos');
              }}
            >
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
            <a href="/proyectos" className="active">
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                setShowContactModal(true);
              }}
            >
              Contactanos
            </a>
          </li>
          <li>
            <button 
              className="login-btn"
              onClick={() => navigate('/login')}
            >
              log-in
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenido de proyectos */}
      <div className="proyectos-hero">
        <h1 className="proyectos-title">NUESTROS PROYECTOS</h1>
        <div className="proyectos-carousel">
          <div className="carousel-track">
            <img src="/src/proyecto1.jpg" alt="Proyecto 1" className="carousel-image" />
            <img src="/src/proyecto2.jpg" alt="Proyecto 2" className="carousel-image" />
            <img src="/src/proyecto3.jpg" alt="Proyecto 3" className="carousel-image" />
            <img src="/src/proyecto4.jpg" alt="Proyecto 4" className="carousel-image" />
            <img src="/src/proyecto5.jpg" alt="Proyecto 5" className="carousel-image" />
            <img src="/src/proyecto6.jpg" alt="Proyecto 6" className="carousel-image" />
            <img src="/src/proyecto7.jpg" alt="Proyecto 7" className="carousel-image" />
            {/* Duplicar para loop infinito */}
            <img src="/src/proyecto1.jpg" alt="Proyecto 1" className="carousel-image" />
            <img src="/src/proyecto2.jpg" alt="Proyecto 2" className="carousel-image" />
            <img src="/src/proyecto3.jpg" alt="Proyecto 3" className="carousel-image" />
            <img src="/src/proyecto4.png" alt="Proyecto 4" className="carousel-image" />
            <img src="/src/proyecto5.png" alt="Proyecto 5" className="carousel-image" />
            <img src="/src/proyecto6.png" alt="Proyecto 6" className="carousel-image" />
            <img src="/src/proyecto7.png" alt="Proyecto 7" className="carousel-image" />
          </div>
        </div>
        
        {/* Cartas de proyectos */}
        <div className="proyectos-cards">
          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 1" />
            </div>
            <h3>Rescate de Fuente Radiactiva Ra-226 – ESE HUS</h3>
            <p>Transporte especializado de materiales radiactivos para sector médico</p>
            <button 
              className="card-btn"
              onClick={() => navigate('/rescateFUENTE')}
            >
              Leer Más
            </button>
          </div>

          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 2" />
            </div>
            <h3>Desmantelamiento Ciclotron</h3>
            <p>Distribución nacional de dispositivos médicos certificados</p>
            <button 
              className="card-btn"
              onClick={() => navigate('/desmantelamiento')}
            >
              Leer Más
            </button>
          </div>

          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 3" />
            </div>
            <h3>Bunker Ionos</h3>
            <p>Capacitación en protección radiológica para personal especializado</p>
            <button className="card-btn">Leer Más</button>
          </div>

          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 4" />
            </div>
            <h3>Transporte De Cobalto</h3>
            <p>Almacenamiento seguro de kits radiofarmacéuticos</p>
            <button className="card-btn">Leer Más</button>
          </div>

          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 5" />
            </div>
            <h3>Proyecto Epsilon</h3>
            <p>Asesoría integral en normatividad de seguridad radiológica</p>
            <button className="card-btn">Leer Más</button>
          </div>

          <div className="proyecto-card">
            <div className="card-logo">
              <img src="/src/15 años.png" alt="Logo Proyecto 6" />
            </div>
            <h3>Proyecto Zeta</h3>
            <p>Importación especializada de material radiactivo certificado</p>
            <button className="card-btn">Leer Más</button>
          </div>
        </div>
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

export default Proyectos;