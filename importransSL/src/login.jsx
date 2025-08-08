import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
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
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={loginData.password}
              onChange={handleInputChange}
              required
            />
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