import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './rescateFUENTE.css';

const Desmantelamiento = () => {
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
                    <input type="text" name="nombre" placeholder="Nombre completo" value={contactData.nombre} onChange={handleContactInputChange} required />
                  </div>
                  <div className="pqr-form-row">
                    <input type="text" name="empresa" placeholder="Empresa" value={contactData.empresa} onChange={handleContactInputChange} required />
                  </div>
                  <div className="pqr-form-row">
                    <input type="email" name="correo" placeholder="Correo electrónico" value={contactData.correo} onChange={handleContactInputChange} required />
                  </div>
                  <div className="pqr-form-row">
                    <input type="tel" name="telefono" placeholder="Teléfono" value={contactData.telefono} onChange={handleContactInputChange} required />
                  </div>
                  <div className="pqr-form-row">
                    <textarea name="descripcion" placeholder="Descripción del servicio requerido" value={contactData.descripcion} onChange={handleContactInputChange} rows="4" required />
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
            <h2>DESMANTELAMIENTO CICLOTRÓN PET/CT</h2>
          </div>
          <div className="informe-date">
            <p>Fecha: {new Date().toLocaleDateString()}</p>
            <p>Código: PRY-CIC-002</p>
          </div>
        </div>

        <div className="informe-content">
          {/* Resumen Ejecutivo */}
          <section className="informe-section">
            <h3>RESUMEN EJECUTIVO</h3>
            <div className="section-content">
              <p>
                El proyecto de desmantelamiento del ciclotrón PET/CT consistió en la remoción segura y 
                sistemática de equipos de producción de radioisótopos, garantizando la descontaminación 
                completa de las instalaciones y el cumplimiento de todas las normativas de protección 
                radiológica y medioambientales.
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
                  <p>Ejecutar el desmantelamiento completo del ciclotrón cumpliendo con todos los protocolos de seguridad radiológica y normativas ambientales.</p>
                </div>
                <div className="objective-item">
                  <h4>📋 Objetivos Específicos</h4>
                  <ul>
                    <li>Caracterizar radiológicamente todas las áreas</li>
                    <li>Descontaminar equipos y superficies</li>
                    <li>Remover componentes activados</li>
                    <li>Gestionar residuos radiactivos</li>
                    <li>Liberar instalaciones para uso irrestricto</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Características del Ciclotrón */}
          <section className="informe-section">
            <h3>CARACTERÍSTICAS DEL CICLOTRÓN</h3>
            <div className="section-content">
              <div className="specs-grid">
                <div className="spec-item">
                  <strong>Tipo de equipo:</strong>
                  <span>Ciclotrón PET 18 MeV</span>
                </div>
                <div className="spec-item">
                  <strong>Energía máxima:</strong>
                  <span>18 MeV</span>
                </div>
                <div className="spec-item">
                  <strong>Partículas aceleradas:</strong>
                  <span>Protones y Deuterones</span>
                </div>
                <div className="spec-item">
                  <strong>Años de operación:</strong>
                  <span>15 años</span>
                </div>
                <div className="spec-item">
                  <strong>Radioisótopos producidos:</strong>
                  <span>F-18, C-11, N-13, O-15</span>
                </div>
                <div className="spec-item">
                  <strong>Peso del equipo:</strong>
                  <span>17 toneladas</span>
                </div>
              </div>
            </div>
          </section>

          {/* Fases del Desmantelamiento */}
          <section className="informe-section">
            <h3>FASES DEL DESMANTELAMIENTO</h3>
            <div className="section-content">
              <div className="methodology-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Caracterización Inicial</h4>
                    <p>Mapeo radiológico completo de instalaciones, identificación de zonas activadas y evaluación de niveles de contaminación.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Preparación y Planificación</h4>
                    <p>Desarrollo de procedimientos específicos, preparación de herramientas y establecimiento de protocolos de seguridad.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Descontaminación</h4>
                    <p>Limpieza química y mecánica de superficies, remoción de contaminación suelta y fija.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Desmontaje Mecánico</h4>
                    <p>Remoción sistemática de componentes activados, blindajes y estructuras auxiliares.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Gestión de Residuos</h4>
                    <p>Clasificación, embalaje y transporte de residuos radiactivos según normativa vigente.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">6</div>
                  <div className="timeline-content">
                    <h4>Liberación Final</h4>
                    <p>Verificación de niveles de liberación y documentación para uso irrestricto.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Componentes Principales */}
          <section className="informe-section">
            <h3>COMPONENTES PRINCIPALES DESMONTADOS</h3>
            <div className="section-content">
              <div className="equipment-grid">
                <div className="equipment-card">
                  <h4>🔬 Dee del Ciclotrón</h4>
                  <p>Electrodos principales activados por bombardeo neutrónico</p>
                </div>
                <div className="equipment-card">
                  <h4>🧲 Sistema Magnético</h4>
                  <p>Imanes superconductores y bobinas de confinamiento</p>
                </div>
                <div className="equipment-card">
                  <h4>⚡ Sistema de RF</h4>
                  <p>Generadores de radiofrecuencia y amplificadores</p>
                </div>
                <div className="equipment-card">
                  <h4>🛡️ Blindajes</h4>
                  <p>Blindajes de neutrones y gamma de hormigón y plomo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gestión de Residuos */}
          <section className="informe-section">
            <h3>GESTIÓN DE RESIDUOS RADIACTIVOS</h3>
            <div className="section-content">
              <table className="sources-table">
                <thead>
                  <tr>
                    <th>Tipo de Residuo</th>
                    <th>Actividad Principal</th>
                    <th>Volumen (m³)</th>
                    <th>Gestión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Componentes metálicos</td>
                    <td>Co-60, Mn-54</td>
                    <td>2.5</td>
                    <td>Almacenamiento temporal</td>
                  </tr>
                  <tr>
                    <td>Blindaje de concreto</td>
                    <td>Co-60, Eu-152</td>
                    <td>15.0</td>
                    <td>Disposición controlada</td>
                  </tr>
                  <tr>
                    <td>Filtros HEPA</td>
                    <td>Contaminación mixta</td>
                    <td>0.8</td>
                    <td>Incineración controlada</td>
                  </tr>
                  <tr>
                    <td>Líquidos residuales</td>
                    <td>Tritio, C-14</td>
                    <td>1.2</td>
                    <td>Tratamiento químico</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Resultados */}
          <section className="informe-section">
            <h3>RESULTADOS DEL PROYECTO</h3>
            <div className="section-content">
              <div className="results-grid">
                <div className="result-card success">
                  <h4>✅ Desmantelamiento Completo</h4>
                  <p>100% de equipos removidos exitosamente</p>
                </div>
                <div className="result-card success">
                  <h4>🏢 Instalaciones Liberadas</h4>
                  <p>Áreas aptas para uso irrestricto</p>
                </div>
                <div className="result-card success">
                  <h4>♻️ Residuos Gestionados</h4>
                  <p>Clasificación y disposición conforme</p>
                </div>
                <div className="result-card success">
                  <h4>📋 Documentación Completa</h4>
                  <p>Registros para autoridades reguladoras</p>
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
                  El proyecto de desmantelamiento del ciclotrón PET/CT se completó exitosamente, 
                  cumpliendo con todos los objetivos técnicos y regulatorios. Las instalaciones 
                  quedaron liberadas para uso irrestricto y todos los residuos radiactivos fueron 
                  gestionados según las mejores prácticas internacionales.
                </p>
                <div className="key-achievements">
                  <h4>Logros Principales:</h4>
                  <ul>
                    <li>Desmantelamiento sin incidentes radiológicos</li>
                    <li>Cumplimiento del 100% de normativas ARN</li>
                    <li>Liberación exitosa de 450 m² de instalaciones</li>
                    <li>Gestión responsable de 19.5 m³ de residuos</li>
                    <li>Certificación de seguridad radiológica</li>
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
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Inicio</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/servicios'); }}>Servicios</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }}>Contacto</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>Proyectos</a>
          <a href="#pqr" onClick={(e) => { e.preventDefault(); }}>PQR</a>
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
              <svg className="socialSvg facebookSvg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"/></svg>
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

export default Desmantelamiento;
