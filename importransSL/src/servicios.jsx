import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './servicios.css';

const Servicios = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
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
            <a href="/servicios" className="active">
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
                const elemento = document.getElementById('contacto');
                if (elemento) {
                  elemento.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
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

      {/* Sección de Servicios */}
      <div className="servicios-cards-section">
        <div className="servicios-cards-container">
          <div className="servicio-card">
            <div className="servicio-image">
              <img src="/src/transporte.png" alt="Transporte Radiactivo" className="servicio-img" />
            </div>
            <div className="servicio-content">
              <h3>Transporte</h3>
            </div>
            <div className="servicio-hover-info">
              <h4>Información Detallada</h4>
              <p>IMPORTRANS RADIACTIVOS, con certificaciones ISO y aval del Ministerio de Transporte, moviliza cerca del 70% del material radiactivo en Colombia, incluyendo radioisótopos categoría 1 a 5, Co-60, unidosis y explosivos. Ofrecemos transporte y manejo especializado a nivel nacional.</p>
            </div>
          </div>

          <div className="servicio-card">
            <div className="servicio-image">
              <img src="/src/asesoria.png" alt="Distribución" className="servicio-img" />
            </div>
            <div className="servicio-content">
              <h3>Distribución y Comercialización</h3>
            </div>
            <div className="servicio-hover-info">
              <h4>Información Detallada</h4>
              <p>IMPORTRANS RADIACTIVOS, con certificaciones ISO y aval del Ministerio de Transporte, moviliza cerca del 70% del material radiactivo en Colombia. Brinda controles de calidad, asesoría en radiaciones ionizantes y protección radiológica, cálculos de blindaje, vigilancia en radioprotección y trámites ante el ente regulador.</p>
            </div>
          </div>

          <div className="servicio-card">
            <div className="servicio-image">
              <img src="/src/ALMA.jpg" alt="Asesoría" className="servicio-img" />
            </div>
            <div className="servicio-content">
              <h3>Asesoría y Capacitación</h3>
            </div>
            <div className="servicio-hover-info">
              <h4>Información Detallada</h4>
              <p>Nuestras instalaciones, autorizadas por el ente regulador, permiten el almacenamiento temporal de fuentes radiactivas. Contamos con una sólida evaluación de seguridad y barreras robustas, garantizando el cumplimiento normativo y confianza en toda la cadena logística.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección con fondo azul en mitad izquierda */}
      <div id="contacto" className="blue-half-section">
        {/* Elementos decorativos */}
        <div className="decorative-circles">
          <div className="circle yellow-circle"></div>
          <div className="circle black-circle"></div>
        </div>
        
        <div className="blue-half-content">
          <h2>CONTACTO</h2>
          <div className="contact-icons">
            <div className="contact-icon-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <p>+57 3175105541</p>
            </div>
            
            <div className="contact-icon-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p>comercial@importransradiactivos.com</p>
            </div>
            
            <div className="contact-icon-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="contact-form-section">
          <div className="contact-form-row">
            <div className="form-field">
              <label>Nombre</label>
              <input type="text" placeholder="Ingresa tu nombre" />
            </div>
            <div className="form-field">
              <label>Empresa</label>
              <input type="text" placeholder="Nombre de tu empresa" />
            </div>
          </div>
          
          <div className="contact-form-row">
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />
            </div>
            <div className="form-field">
              <label>Teléfono</label>
              <input type="tel" placeholder="+57 300 000 0000" />
            </div>
          </div>
          
          <div className="contact-form-row">
            <div className="form-field full-width">
              <label>Descripción</label>
              <input type="text" placeholder="Describe tu consulta..." />
            </div>
          </div>
          
          {/* Botón de enviar dentro del formulario para móvil */}
          <div className="contact-form-button mobile-only">
            <button type="submit" className="enviar-btn">Enviar</button>
          </div>
        </div>
        
        {/* Botón de enviar fuera del formulario para escritorio */}
        <div className="contact-form-button desktop-only">
          <button type="submit" className="enviar-btn">Enviar</button>
        </div>
      </div>

      {/* Sección de política de datos */}
      <div className="politica-datos-section">
        <div className="politica-datos-content">
          <p>
            De conformidad con lo dispuesto en la ley 1581 de 2012, le informamos que los datos personales que usted nos ha entregado, como proveedor o prestador de bienes y servicios, harán parte de nuestra base de datos para ser usados con la siguiente finalidad: Recolectar, Transferir, Almacenar, Usar, Circular, Suprimir, Compartir, Actualizar y Transmitir, para efectos de cumplir con los objetivos establecidas por la ley de acuerdo con la naturaleza y actividad económica.
          </p>
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
            href="/servicios#contacto"
            onClick={(e) => {
              e.preventDefault();
              navigate('/servicios');
              setTimeout(() => {
                const elemento = document.getElementById('contacto');
                if (elemento) {
                  elemento.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }, 100);
            }}
          >
            Contacto
          </a>
          <a
    
            onClick={(e) => {
              e.preventDefault();
              navigate('/proyectos');
            }}
          >
            Proyectos
          </a>
          <a href="#pqr">PQR</a>
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

export default Servicios;