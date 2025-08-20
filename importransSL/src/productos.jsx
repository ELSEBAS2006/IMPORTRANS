import React, { useEffect, useRef, useState } from 'react';
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
  const [showReminder, setShowReminder] = useState(false);
  const [reminderFadeOut, setReminderFadeOut] = useState(false); // NUEVO
  const navigate = useNavigate();
  const destacadoRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (destacadoRef.current) {
        const rect = destacadoRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          destacadoRef.current.classList.add('visible');
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Muestra el recordatorio después de 2 segundos
    const timer = setTimeout(() => setShowReminder(true), 2000);
    return () => clearTimeout(timer);
  }, []);

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
            <button 
              className="login-btn"
              onClick={() => navigate('/login')}
            >
              log-in
            </button>
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
          <a href="/login">
            <img src="/src/logo INTRANET.png" alt="Intranet" className="intranet-logo" />
          </a>
        </div>
      </footer>

      {/* Recordatorio dispensador */}
      {showReminder && (
        <div
          className={`dispensador-reminder${reminderFadeOut ? " fade-out" : ""}`}
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 9999,
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            padding: "1.5rem 2rem 1.2rem 2rem",
            maxWidth: "340px",
            minWidth: "220px",
            textAlign: "center",
            transition: "all 0.4s",
            borderLeft: "5px solid #0e004bff"
          }}
        >
          <button
            onClick={() => setShowReminder(false)}
            style={{
              position: "absolute",
              top: "8px",
              right: "14px",
              background: "none",
              border: "none",
              fontSize: "1.3rem",
              color: "#888",
              cursor: "pointer"
            }}
            aria-label="Cerrar"
          >×</button>
          <img
            src="/src/dispensador.png"
            alt="Dispensador de dosis automático"
            style={{
              width: "90px",
              marginBottom: "0.7rem",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <div style={{ fontWeight: "bold", color: "#01115aff", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            DISPENSADOR DE DOSIS AUTOMÁTICO
          </div>
          <div style={{ fontSize: "0.97rem", color: "#222" }}>
            ¡Nuevo! Consulta nuestro dispensador de dosis automático Amercare para radiofármacos.
          </div>
          <button
            onClick={() => {
              setReminderFadeOut(true);
              setTimeout(() => {
                setShowReminder(false);
                navigate('/dispensador');
              }, 500); // Duración igual a la animación CSS
            }}
            style={{
              marginTop: "1rem",
              background: "#000000ff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.2rem",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Ver producto
          </button>
        </div>
      )}
    </div>
  );
};

export default Productos;