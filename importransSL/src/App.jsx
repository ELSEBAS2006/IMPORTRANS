import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import ContactModal from './contacto';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from "react-icons/fa";
import { FaRobot } from "react-icons/fa"; // Para icono de bot

function App() {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutImageHidden, setIsAboutImageHidden] = useState(false);
  const [showPQRModal, setShowPQRModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [pqrData, setPqrData] = useState({
    opcion: '',
    nombres: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correo: '',
    telefono: '',
    objeto: ''
  });
  const [showChat, setShowChat] = useState(false); // El chat inicia oculto
  const [showWhatsappReminder, setShowWhatsappReminder] = useState(false); // Cambia a false por defecto
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte? Puedes preguntar por: horarios, servicios, ubicación, productos o escribe "contacto" para hablar por WhatsApp.' }
  ]);
  const aboutTextRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsappReminder(true), 2000); // Cambia 3000 a 2000
    return () => clearTimeout(timer);
  }, []);

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

  const whatsappLink = "https://wa.me/573209978052?text=Estoy%20interesado%20en%20recibir%20informacion";

  const faqAnswers = {
    'horario': 'Nuestro horario de atención es de lunes a viernes de 8am a 5pm.',
    'servicio': 'Ofrecemos transporte, importación y distribución de material radiactivo, dispositivos médicos y más.',
    'ubicacion': 'Estamos ubicados en Cota, Cundinamarca, en el Centro Empresarial Cien Oikos.Puedes Ver en el mapa en la seccion de ubicanos',
    'producto': 'Consulta todos nuestros productos en la sección Productos del menú principal.'
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { from: 'user', text: chatInput };
    setChatMessages((msgs) => [...msgs, userMsg]);

    // Si el usuario escribe "contacto", redirige a WhatsApp
    if (chatInput.toLowerCase().includes('contacto')) {
      setTimeout(() => {
        window.open('https://wa.me/573175105541?text=Hola,%20quiero%20más%20información', '_blank');
        setChatMessages((msgs) => [
          ...msgs,
          { from: 'bot', text: 'Te estoy redirigiendo a WhatsApp para que hables con nosotros.' }
        ]);
      }, 700);
      setChatInput('');
      return;
    }

    // Busca respuesta simple
    const key = Object.keys(faqAnswers).find(k => chatInput.toLowerCase().includes(k));
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: key ? faqAnswers[key] : 'Lo siento, no tengo una respuesta para esa pregunta. ¿Puedes intentar con otra o escribir "contacto" para hablar por WhatsApp?' }
      ]);
    }, 700);
    setChatInput('');
  };

  return (
    <div className="App">
      {/* Modal PQR */}
      {showPQRModal && (
        <div className="pqr-modal-overlay" onClick={() => setShowPQRModal(false)}>
          <div className="pqr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pqr-modal-header">
              <h3>{t('Formulario PQR')}</h3>
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
                  <option value="">{t('Seleccione una opción')}</option>
                  <option value="queja">{t('Queja')}</option>
                  <option value="reclamo">{t('Reclamo')}</option>
                  <option value="solicitud">{t('Solicitud')}</option>
                  <option value="denuncia">{t('Denuncia')}</option>
                  <option value="propuesta">{t('Propuesta')}</option>
                </select>
              </div>
              
              <div className="pqr-form-row">
                <input
                  type="text"
                  name="nombres"
                  placeholder={t("Nombres/Entidad")}
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
                  <option value="">{t("Tipo de documento")}</option>
                  <option value="cc">{t("Cédula de Ciudadanía")}</option>
                  <option value="ce">{t("Cédula de Extranjería")}</option>
                  <option value="nit">{t("NIT")}</option>
                  <option value="passport">{t("Pasaporte")}</option>
                </select>
                <input
                  type="text"
                  name="numeroDocumento"
                  placeholder={t("Número de documento")}
                  value={pqrData.numeroDocumento}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="pqr-form-row">
                <input
                  type="email"
                  name="correo"
                  placeholder={t("Correo electrónico")}
                  value={pqrData.correo}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder={t("Teléfono")}
                  value={pqrData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="pqr-form-row">
                <textarea
                  name="objeto"
                  placeholder={t("Objeto de su PQRSD")}
                  value={pqrData.objeto}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>
              
              <div className="pqr-form-buttons">
                <button type="button" onClick={() => setShowPQRModal(false)}>{t("Cancelar")}</button>
                <button type="submit">{t("Enviar PQR")}</button>
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
            <img src='/src/LIMPOR.png' alt="Logo" className="logo-img" />
          </a>
        </div>

        <div style={{ marginLeft: "auto", marginRight: "2rem", position: "relative" }}>
          <button
            className="lang-btn"
            aria-label={t("Seleccionar idioma")}
            onClick={() => setShowLangMenu((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.8rem",
              color: "#1565c0",
              marginLeft: "1.5rem"
            }}
          >
          
          </button>
          {showLangMenu && (
            <div
              style={{
                position: "absolute",
                top: "2.5rem",
                right: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                zIndex: 100,
                minWidth: "120px"
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer"
                }}
                onClick={() => { i18n.changeLanguage('es'); setShowLangMenu(false); }}
              >
                🇪🇸 Español
              </button>
              <button
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer"
                }}
                onClick={() => { i18n.changeLanguage('en'); setShowLangMenu(false); }}
              >
                🇬🇧 English
              </button>
            </div>
          )}
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a href="/" onClick={handleInicioClick}>
              {t('Inicio')}
            </a>
          </li>
          <li>
            <a href="/productos" onClick={(e) => { e.preventDefault(); navigate('/productos'); }}>
              {t('Productos')}
            </a>
          </li>
          <li>
            <a href="/servicios" onClick={(e) => { e.preventDefault(); navigate('/servicios'); }}>
              {t('Servicios')}
            </a>
          </li>
          <li>
            <a href="/proyectos" onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>
              {t('Proyectos')}
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
              {t('Contáctanos')}
            </a>
          </li>
          <li>
            <button 
              className="login-btn"
              onClick={() => navigate('/login')}
            >
              {t('log-in')}
            </button>
          </li>
        </ul>
      </nav>

      <main>
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
            <h2>{t('¿Quiénes Somos?')}</h2>
            <p>
              {t('Somos una empresa especializada en transporte terrestre, cargue y descargue de mercancías peligrosas a nivel nacional. También realizamos importación, distribución, comercialización y almacenamiento de material radiactivo, dispositivos médicos y kits radiofarmacéuticos. Ofrecemos asesoría y capacitación en protección radiológica, cumpliendo con los requisitos de seguridad, legalidad y calidad, con un servicio oportuno y responsable, enfocado en la protección del medio ambiente.')}
            </p>
          </div>
          <div className={`about-img ${isAboutImageHidden ? 'hidden' : ''}`}>
            <img src="/src/15 años.png" alt="15 años" />
          </div>
        </div>
        
        <div className="certificados-title">
          <img src="/src/certificados.png" alt={t("Certificados")} className="certificados-img" />
        </div>
        
        <div className="blue-bg">
          <div className="cards-container">
            <div className="card">
              <img src="/src/card1.png" alt={t("Carta 1")} className="card-img" />
              <div className="card-info">
                <h3>{t("CERTIFICACION 1")}</h3>
                <p>{t("ISO 9001:2015 es la versión vigente del estándar internacional para Sistemas de Gestión de la Calidad (SGC). Su objetivo principal es ayudar a las organizaciones –de cualquier tamaño o sector– a garantizar de forma consistente productos y servicios que cumplan requisitos del cliente y normativos, al tiempo que promueven la mejora continua")}</p>
              </div>
            </div>
            <div className="card">
              <img src="/src/card2.png" alt={t("Carta 2")} className="card-img" />
              <div className="card-info">
                <h3>{t("CERTIFICACION 2")}</h3>
                <p>{t("ISO 14001:2015 es un estándar internacional voluntario que establece los requisitos para un Sistema de Gestión Ambiental (SGA), ayudando a las organizaciones de cualquier tamaño a identificar, controlar y mejorar continuamente su desempeño ambiental mediante el ciclo PDCA, un enfoque basado en riesgos y con integración estratégica de liderazgo y ciclo de vida")}</p>
              </div>
            </div>
            <div className="card">
              <img src="/src/card 3.png" alt={t("Carta 3")} className="card-img" />
              <div className="card-info">
                <h3>{t("CERTIFICACION 3")}</h3>
                <p>{t("ISO 45001:2018 es la norma internacional para Sistemas de Gestión de Salud y Seguridad en el Trabajo (SST), publicada el 12 de marzo de 2018, reemplazando a OHSAS 18001")}</p>
              </div>
            </div>
            <div className="card">
              <img src="/src/card 4.png" alt={t("Carta 4")} className="card-img" />
              <div className="card-info">
                <h3>{t("CERTIFICACION 4")}</h3>
                <p>{t("ISO 39001:2012 define un sistema sistemático (liderazgo, planificación, operación, evaluación y mejora continua) para que organizaciones reduzcan eficazmente los accidentes graves en sus actividades viales.")}</p>
              </div>
            </div>
          </div>
          <div className="cards-label-row">
            <span>{t("ISO 9001 VERSIÓN 2015")}</span>
            <span>{t("ISO 14001 VERSIÓN 2015")}</span>
            <span>{t("ISO 45001 VERSIÓN 2018")}</span>
            <span>{t("ISO 39001 VERSIÓN 2012")}</span>
          </div>
        </div>
        
        <div style={{ height: "2.5rem" }} />
        
        <div className="ubicanos-title">
          <img src="/src/ubicanos.png" alt={t("Ubícanos")} className="ubicanos-img" />
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
      </main>

      {/* Footer */}
      <footer className="footer-blue">
        <div className="footer-contact">
          <h4>{t("Contáctanos")}</h4>
          <p>📞 {t("celular")}: +57 3175105541</p>
          <p>📞 {t("Teléfono")}: (601) 898 5388</p>
          <p>📧 {t("Email")}: comercial@importransradiactivos.com</p>
        </div>  
        <div className="footer-links">
          <a href="#" onClick={handleInicioClick}>{t("Inicio")}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/servicios'); }}>{t("Servicios")}</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }}>{t("Contacto")}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>{t("Proyectos")}</a>
          <a href="#pqr" onClick={(e) => { e.preventDefault(); setShowPQRModal(true); }}>{t('PQR')}</a>
        </div>
        
        <div className="footer-logo-social">
          <a href="/login">
            <img src="/src/logo INTRANET.png" alt="Intranet" className="intranet-logo" />
          </a>
        </div>
      </footer>

      {/* Recordatorio flotante WhatsApp */}
      {!showChat && showWhatsappReminder && (
        <div
          className="whatsapp-reminder-animated fade-in"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            background: "#25D366",
            color: "#fff",
            borderRadius: "40px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            padding: "0.7rem 1.3rem 0.7rem 1rem",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.08rem",
            textDecoration: "none",
            gap: "0.7rem",
            transition: "background 0.2s"
          }}
        >
          <button
            onClick={() => setShowChat(true)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              cursor: "pointer"
            }}
            aria-label="Abrir chat"
          >
            <FaWhatsapp size={28} style={{ flexShrink: 0 }} />
            {t("¿Tienes dudas? Escríbenos por WhatsApp")}
          </button>
          <button
            onClick={() => setShowWhatsappReminder(false)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.3rem",
              marginLeft: "0.7rem",
              cursor: "pointer"
            }}
            aria-label={t("Cerrar")}
          >
            ×
          </button>
        </div>
      )}

      {showChat && (
        <div
          className="chatbox-faq"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            width: "320px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{
            background: "#25D366",
            color: "#fff",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            padding: "0.8rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaRobot /> Chat Importrans
            </span>
            <button
              onClick={() => setShowChat(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer"
              }}
              aria-label="Cerrar chat"
            >×</button>
          </div>
          <div style={{
            flex: 1,
            padding: "1rem",
            overflowY: "auto",
            maxHeight: "260px"
          }}>
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "0.7rem",
                  textAlign: msg.from === 'user' ? 'right' : 'left'
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: msg.from === 'user' ? "#e0f7fa" : "#f1f1f1",
                    color: "#222",
                    borderRadius: "12px",
                    padding: "0.5rem 0.9rem",
                    maxWidth: "85%",
                    fontSize: "1rem"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSendChat}
            style={{
              display: "flex",
              borderTop: "1px solid #eee",
              padding: "0.5rem"
            }}
          >
            <input
              type="text"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
                padding: "0.5rem"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                marginLeft: "0.5rem",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

