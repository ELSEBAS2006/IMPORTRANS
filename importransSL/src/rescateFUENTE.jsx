import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './rescateFUENTE.css';

const RescateFUENTE = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    descripcion: ''
  });
  const navigate = useNavigate();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Datos Contacto:', contactData);
    setShowContactModal(false);
    alert('Su mensaje ha sido enviado exitosamente');
  };

  const handleContactInputChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Modal Contacto */}
      {showContactModal && (
        <div className="pqr-modal-overlay contact-modal" onClick={() => setShowContactModal(false)}>
          <div className="pqr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pqr-modal-header">
              <h3>Contáctanos</h3>
              <button className="close-btn" onClick={() => setShowContactModal(false)}>×</button>
            </div>
            
            <div className="contact-modal-content">
              <div className="contact-info-side">
                <h4>Contáctanos</h4>
                <div className="contact-info-item">
                  <span className="icon">📞</span>
                  <div><strong>Celular:</strong> +57 3175105541</div>
                </div>
                <div className="contact-info-item">
                  <span className="icon">📞</span>
                  <div><strong>Teléfono:</strong> (601) 898 5388</div>
                </div>
                <div className="contact-info-item">
                  <span className="icon">📧</span>
                  <div><strong>Email:</strong> comercial@importransradiactivos.com</div>
                </div>
              </div>
              
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

      {/* Header */}
      <nav className="navbar">
        <div className="logo">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src='/src/LIMPOR.png' alt="Logo" className="logo-img" />
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

      {/* Informe del Proyecto */}
      <div className="informe-container">
        <div className="informe-header">
          <div className="informe-logo">
            <img src="/src/LOGO.png" alt="Logo" />
          </div>
          <div className="informe-title">
            <h1>INFORME DE PROYECTO</h1>
            <h2>RESCATE DE FUENTE RADIACTIVA Ra-226 – ESE HUS</h2>
          </div>
          <div className="informe-date">
            <p>Fecha: {new Date().toLocaleDateString()}</p>
            <p>Código: PRY-Ra226-001</p>
          </div>
        </div>

        <div className="informe-content">
          {/* Resumen Ejecutivo */}
          <section className="informe-section">
            <h3>RESUMEN EJECUTIVO</h3>
            <div className="section-content">
              <p>
                El proyecto de rescate de fuente radiactiva Ra-226 en el Hospital Universitario de Santander (ESE HUS) 
                consistió en la recuperación, embalaje y transporte seguro de una fuente de Radio-226 en desuso, 
                garantizando la protección radiológica del personal y del medio ambiente según las normativas 
                nacionales e internacionales vigentes.
              </p>
            </div>
          </section>

          {/* Objetivos del Proyecto */}
          <section className="informe-section">
            <h3>OBJETIVOS DEL PROYECTO</h3>
            <div className="section-content">
              <div className="objectives-grid">
                <div className="objective-item">
                  <h4>🎯 Objetivo General</h4>
                  <p>Realizar el rescate seguro de la fuente radiactiva Ra-226 del ESE HUS, cumpliendo con todos los protocolos de seguridad radiológica.</p>
                </div>
                <div className="objective-item">
                  <h4>📋 Objetivos Específicos</h4>
                  <ul>
                    <li>Evaluar las condiciones de la fuente radiactiva</li>
                    <li>Implementar medidas de protección radiológica</li>
                    <li>Ejecutar el proceso de rescate y embalaje</li>
                    <li>Transportar la fuente a instalación autorizada</li>
                    <li>Documentar todo el proceso</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Características de la Fuente */}
          <section className="informe-section">
            <h3>CARACTERÍSTICAS DE LA FUENTE Ra-226</h3>
            <div className="section-content">
              <div className="specs-grid">
                <div className="spec-item">
                  <strong>Radionúclido:</strong>
                  <span>Radio-226</span>
                </div>
                <div className="spec-item">
                  <strong>Actividad inicial:</strong>
                  <span>37 GBq (1 Ci)</span>
                </div>
                <div className="spec-item">
                  <strong>Periodo de semidesintegración:</strong>
                  <span>1.600 años</span>
                </div>
                <div className="spec-item">
                  <strong>Tipo de emisión:</strong>
                  <span>Alfa, Beta, Gamma</span>
                </div>
                <div className="spec-item">
                  <strong>Energía gamma principal:</strong>
                  <span>186 keV</span>
                </div>
                <div className="spec-item">
                  <strong>Estado físico:</strong>
                  <span>Sólido encapsulado</span>
                </div>
              </div>
            </div>
          </section>

          {/* Metodología */}
          <section className="informe-section">
            <h3>METODOLOGÍA DE RESCATE</h3>
            <div className="section-content">
              <div className="methodology-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Evaluación Inicial</h4>
                    <p>Inspección visual y radiométrica de la fuente, evaluación del estado del blindaje y medición de tasas de dosis.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Preparación del Área</h4>
                    <p>Delimitación de zona controlada, instalación de blindajes adicionales y preparación de equipos de rescate.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Rescate y Embalaje</h4>
                    <p>Extracción controlada de la fuente, verificación de integridad y embalaje en contenedor Tipo A.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Transporte Seguro</h4>
                    <p>Traslado a instalación autorizada con vehículo especializado y escolta de seguridad radiológica.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medidas de Seguridad */}
          <section className="informe-section">
            <h3>MEDIDAS DE SEGURIDAD IMPLEMENTADAS</h3>
            <div className="section-content">
              <div className="safety-measures">
                <div className="safety-category">
                  <h4>🛡️ Protección Personal</h4>
                  <ul>
                    <li>Dosímetros personales electrónicos</li>
                    <li>Equipos de protección individual</li>
                    <li>Detectores de radiación portátiles</li>
                    <li>Ropa de protección especializada</li>
                  </ul>
                </div>
                <div className="safety-category">
                  <h4>🏗️ Protección Estructural</h4>
                  <ul>
                    <li>Blindajes de plomo móviles</li>
                    <li>Herramientas de manipulación remota</li>
                    <li>Contenedores blindados Tipo A</li>
                    <li>Señalización de zona radiactiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section className="informe-section">
            <h3>RESULTADOS DEL PROYECTO</h3>
            <div className="section-content">
              <div className="results-grid">
                <div className="result-card success">
                  <h4>✅ Rescate Exitoso</h4>
                  <p>Fuente recuperada sin incidentes de seguridad</p>
                </div>
                <div className="result-card success">
                  <h4>📊 Dosis Controladas</h4>
                  <p>Exposición del personal 1 mSv</p>
                </div>
                <div className="result-card success">
                  <h4>🚛 Transporte Seguro</h4>
                  <p>Traslado sin contaminación</p>
                </div>
                <div className="result-card success">
                  <h4>📋 Documentación Completa</h4>
                  <p>Trazabilidad total del proceso</p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Involucrado */}
          <section className="informe-section">
            <h3>EQUIPO TÉCNICO</h3>
            <div className="section-content">
              <div className="team-grid">
                <div className="team-member">
                  <h4>Director de Proyecto</h4>
                  <p>Ing. Nuclear con especialización en protección radiológica</p>
                </div>
                <div className="team-member">
                  <h4>Especialistas en Rescate</h4>
                  <p>Técnicos certificados en manejo de fuentes radiactivas</p>
                </div>
                <div className="team-member">
                  <h4>Oficial de Seguridad</h4>
                  <p>Responsable de protección radiológica y monitoreo</p>
                </div>
                <div className="team-member">
                  <h4>Coordinador Logístico</h4>
                  <p>Gestión de transporte y documentación</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusiones */}
          <section className="informe-section">
            <h3>CONCLUSIONES</h3>
            <div className="section-content">
              <div className="conclusions">
                <p>
                  El proyecto de rescate de la fuente radiactiva Ra-226 del ESE HUS se ejecutó exitosamente, 
                  cumpliendo con todos los objetivos planteados y manteniendo los más altos estándares de 
                  seguridad radiológica. La coordinación entre IMPORTRANS RADIACTIVOS LTDA y el personal 
                  del hospital garantizó un proceso eficiente y seguro.
                </p>
                <div className="key-achievements">
                  <h4>Logros Principales:</h4>
                  <ul>
                    <li>Cero incidentes de seguridad radiológica</li>
                    <li>Cumplimiento del 100% de protocolos ARN</li>
                    <li>Documentación completa para trazabilidad</li>
                    <li>Satisfacción total del cliente</li>
                    <li>Contribución a la seguridad hospitalaria</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer del Informe */}
        <div className="informe-footer">
          <div className="footer-info">
            <p><strong>IMPORTRANS RADIACTIVOS LTDA</strong></p>
            <p>Documento confidencial - Proyecto ejecutado bajo autorización ARN</p>
            <p>Versión 1.0 - {new Date().getFullYear()}</p>
          </div>
          <button className="back-btn" onClick={() => navigate('/proyectos')}>
            ← Volver a Proyectos
          </button>
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
            // Aquí podrías agregar lógica para PQR si es necesario
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

export default RescateFUENTE;