import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './servicios.css';
import ContactModal from './contacto';

const Servicios = () => {
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
                setShowContactModal(true);
                setIsMenuOpen(false);
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
              <h3>Almacenamiento</h3>
            </div>
            <div className="servicio-hover-info">
              <h4>Información Detallada</h4>
              <p>Nuestras instalaciones, autorizadas por el ente regulador, permiten el almacenamiento temporal de fuentes radiactivas. Contamos con una sólida evaluación de seguridad y barreras robustas, garantizando el cumplimiento normativo y confianza en toda la cadena logística.</p>
            </div>
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
          <a href="/login">
            <img src="/src/logo INTRANET.png" alt="Intranet" className="intranet-logo" />
          </a>

        </div>
      </footer>
    </div>
  );
};

export default Servicios;