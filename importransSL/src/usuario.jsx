import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './usuario.css';

const Usuario = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const getStoredUserInfo = () => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      nombre: 'Introduce Cook',
      email: 'usuario@importransradiactivos.com',
      telefono: '+57 317 510 5541',
      fechaIngreso: '2024-01-15',
      departamento: 'Front Office',
      fotoPerfil: null
    };
  };

  const [userInfo, setUserInfo] = useState(getStoredUserInfo());
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...userInfo });

  React.useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Solo actualiza los campos editables
    setUserInfo({
      ...userInfo,
      nombre: editForm.nombre,
      telefono: editForm.telefono,
      fotoPerfil: editForm.fotoPerfil
    });
    setIsEditing(false);

    window.dispatchEvent(new Event('storage'));

    const successMessage = document.createElement('div');
    successMessage.className = 'success-toast';
    successMessage.innerHTML = '✓ Perfil actualizado correctamente';
    document.body.appendChild(successMessage);

    setTimeout(() => {
      if (document.body.contains(successMessage)) {
        document.body.removeChild(successMessage);
      }
    }, 3000);
  };

  const handleCancel = () => {
    setEditForm({ ...userInfo });
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newUserInfo = {
          ...userInfo,
          fotoPerfil: event.target.result
        };
        setUserInfo(newUserInfo);
        setEditForm(newUserInfo);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    const newUserInfo = {
      ...userInfo,
      fotoPerfil: null
    };
    setUserInfo(newUserInfo);
    setEditForm(newUserInfo);
  };

  const handleResetData = () => {
    const defaultData = {
      nombre: 'Introduce Cook',
      email: 'usuario@importransradiactivos.com',
      telefono: '+57 317 510 5541',
      fechaIngreso: '2024-01-15',
      departamento: 'Front Office',
      fotoPerfil: null
    };

    if (window.confirm('¿Restablecer todos los datos?')) {
      setUserInfo(defaultData);
      setEditForm(defaultData);
      localStorage.removeItem('userInfo');
    }
  };

  return (
    <div className="usuario-page">
      {/* Header principal */}
      <div className="modern-header">
        <div className="header-content">
          <button
            className="back-button"
            onClick={() => navigate('/intranet')}
          >
            <span>←</span>
            <span>Volver a Intranet</span>
          </button>

          <div className="header-title">
            <h1>PERFIL DE USUARIO</h1>
            <p>Administra tu información personal</p>
          </div>
        </div>
      </div>

      {/* Container principal */}
      <div className="main-container">
        {/* Tarjeta principal */}
        <div className="profile-card">
          {/* Header de la tarjeta */}
          <div className="card-header">
            <div>
              <span style={{ color: '#1e293b', fontSize: '22px', fontWeight: '700' }}>
                Información Personal
              </span>
            </div>
            <button
              className={`edit-toggle ${isEditing ? 'editing' : ''}`}
              onClick={() => isEditing ? handleCancel() : setIsEditing(true)}
            >
              {isEditing ? 'Cancelar' : 'Editar Perfil'}
            </button>
          </div>

          {/* Sección de avatar */}
          <div className="avatar-section">
            <div className="avatar-container">
              {userInfo.fotoPerfil ? (
                <img
                  src={userInfo.fotoPerfil}
                  alt="Foto de perfil"
                  className="profile-image"
                />
              ) : (
                <div className="default-avatar">
                  <span>👤</span>
                </div>
              )}
            </div>

            {/* Botones de foto debajo del círculo */}
            <div className="photo-actions">
              <button
                className="change-photo-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                📷 Cambiar Foto
              </button>
              {userInfo.fotoPerfil && (
                <button
                  className="remove-photo-btn"
                  onClick={handleRemoveImage}
                >
                  🗑️ Eliminar Foto
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />

            <div className="user-basic-info">
              <h2>{userInfo.nombre}</h2>
              <p className="user-role">Empleado</p>
              <span className="user-department">{userInfo.departamento}</span>
            </div>
          </div>

          {/* Formulario de información */}
          <div className="form-container">
            <div className="form-grid">
              <div className="input-group">
                <label>Nombre</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="nombre"
                    value={editForm.nombre}
                    onChange={handleInputChange}
                    className="modern-input"
                    placeholder="Introduce Cook"
                  />
                ) : (
                  <div className="info-display">{userInfo.nombre}</div>
                )}
              </div>

              <div className="input-group">
                <label>Correo Electrónico</label>
                {/* No editable */}
                <div className="info-display">{userInfo.email}</div>
              </div>

              <div className="input-group">
                <label>Teléfono</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="telefono"
                    value={editForm.telefono}
                    onChange={handleInputChange}
                    className="modern-input"
                    placeholder="+57 317 510 5541"
                  />
                ) : (
                  <div className="info-display">{userInfo.telefono}</div>
                )}
              </div>

              <div className="input-group">
                <label>Fecha de Ingreso</label>
                {/* No editable */}
                <div className="info-display">
                  {new Date(userInfo.fechaIngreso).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <div className="input-group">
                <label>Departamento</label>
                {/* No editable */}
                <div className="info-display">{userInfo.departamento}</div>
              </div>
            </div>

            {/* Botón de guardar */}
            {isEditing && (
              <div className="save-section">
                <button
                  className="save-button"
                  onClick={handleSave}
                >
                  💾 Guardar Cambios
                </button>
              </div>
            )}
          </div>

          {/* Acciones */}
          <div className="actions-section">
            <button
              className="action-button danger"
              onClick={() => navigate('/')}
            >
              🚪 Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;