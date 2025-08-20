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
          <a href="/login">
            <img src="/src/logo INTRANET.png" alt="Intranet" className="intranet-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Proyectos;