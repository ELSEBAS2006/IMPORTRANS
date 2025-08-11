import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    setError(''); // Limpiar error al escribir
  };

  const validateEmail = (email) => {
    return email.endsWith('@importransradiactivos.com');
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar formato de email
    if (!validateEmail(loginData.email)) {
      setError('El correo debe terminar en @importransradiactivos.com');
      return;
    }
    
    // Validar formato de contraseña
    if (!validatePassword(loginData.password)) {
      setError('La contraseña debe tener mínimo 8 caracteres con mayúscula, minúscula, número y carácter especial');
      return;
    }
    
    // Validar credenciales específicas
    if (loginData.email === 'admin@importransradiactivos.com' && loginData.password === 'Admin123!') {
      console.log('Login exitoso');
      navigate('/intranet'); // Redirigir a intranet
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/src/LOGO.png" alt="Logo" className="login-logo" />
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="usuario"
              value={loginData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#000" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="2" fill="none"/>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="#000" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#000" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="2" fill="none"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <button type="submit" className="login-btn">
            Ingresar
          </button>
        </form>
        
        <button className="back-btn" onClick={() => navigate('/')}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Login;