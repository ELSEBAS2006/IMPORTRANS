import React, { useState } from 'react';
import './contacto.css';

const ContactModal = ({ showContactModal, setShowContactModal }) => {
  const [contactData, setContactData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    descripcion: ''
  });
  const [showPolicies, setShowPolicies] = useState(false);

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

  if (!showContactModal) return null;

  return (
    <div className="pqr-modal-overlay contact-modal" onClick={() => setShowContactModal(false)}>
      <div className="pqr-modal" onClick={(e) => e.stopPropagation()}>
        {/* ESTE HEADER SIEMPRE DEBE ESTAR VISIBLE */}
        <div className="pqr-modal-header">
          <h3>Contáctanos</h3>
          <button className="close-btn" onClick={() => setShowContactModal(false)}>×</button>
        </div>
        
        <div className="contact-modal-content">
          {/* Lado izquierdo - Información de contacto */}
          <div className="contact-info-side">
            <img src="/src/LOGO.png" alt="Logo" className="contact-side-logo" />
            
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

            {/* Botón de Políticas */}
            <div className="contact-form-link">
              <button 
                className="show-form-btn"
                onClick={() => setShowPolicies(!showPolicies)}
              >
                Políticas
              </button>
            </div>
          </div>
          
          <div className="contact-form-side">
            {showPolicies ? (
              <div className="policies-content">
                <h4>Políticas de Privacidad</h4>
                <p>
                  De conformidad con lo dispuesto en la ley 1581 de 2012, le informamos que los datos personales que usted nos ha entregado, como proveedor o prestador de bienes y servicios, harán parte de nuestra base de datos para ser usados con la siguiente finalidad: Recolectar, Transferir, Almacenar, Usar, Circular, Suprimir, Compartir, Actualizar y Transmitir, para efectos de cumplir con los objetivos establecidas por la ley de acuerdo con la naturaleza y actividad económica.
                </p>
                <button 
                  className="back-to-form-btn"
                  onClick={() => setShowPolicies(false)}
                >
                  Volver al Formulario
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;