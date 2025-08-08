import React from 'react';
import { useNavigate } from 'react-router-dom';
import './intranet.css';

const Intranet = () => {
  const navigate = useNavigate();

  return (
    <div className="intranet-page">
      <div className="intranet-header">
        <h1 className="intranet-title">INTRANET</h1>
        <button 
          className="logout-btn" 
          onClick={() => navigate('/')}
        >
          Cerrar Sesión
        </button>
      </div>
      
      <div className="intranet-content">
        <img src="/src/LOGO.png" alt="Logo" className="intranet-logo" />
        
        <div className="welcome-section">
          <h2 className="welcome-title">BIENVENIDO</h2>
        </div>
      </div>
    </div>
  );
};

export default Intranet;