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
      telefono: '+57 317 510 5541',
      email: 'usuario@importransradiactivos.com',
      fechaIngreso: '2019-09-29',
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

  const handleSave = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      nombre: editForm.nombre,
      telefono: editForm.telefono,
      fotoPerfil: editForm.fotoPerfil
    });
    setIsEditing(false);

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

  return (
    <div className="profile-bg">
      <div className="profile-container">
        {/* Left Card */}
        <div className="profile-left">
          <div className="profile-user-name">{userInfo.nombre}</div>
          <div className="profile-avatar-box">
            <img
              src={userInfo.fotoPerfil || '/src/assets/PERFIL.png'}
              alt="Foto de perfil"
              className="profile-avatar-img"
            />
            <button
              className="profile-upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              nueva foto
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <button
              className="profile-intranet-btn"
              onClick={() => navigate('/intranet')}
              style={{ marginTop: "1rem" }}
            >
              Volver a la Intranet
            </button>
          </div>
        </div>
        {/* Right Card */}
        <div className="profile-right">
          <div className="profile-edit-title">Editar Perfil</div>
          <div className="profile-tabs">
            <div className="profile-tab active">Información de Usuario</div>
          </div>
          <form className="profile-form" onSubmit={handleSave}>
            <div className="profile-form-row">
              <div className="profile-form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={editForm.nombre}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="profile-form-group">
                <label>Teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  value={editForm.telefono}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>
            <div className="profile-form-row">
              <div className="profile-form-group">
                <label>Correo</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  disabled
                />
              </div>
              <div className="profile-form-group">
                <label>Fecha de Ingreso</label>
                <input
                  type="text"
                  name="fechaIngreso"
                  value={new Date(editForm.fechaIngreso).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                  disabled
                />
              </div>
            </div>
            <div className="profile-form-row">
              <div className="profile-form-group">
                <label>Departamento</label>
                <input
                  type="text"
                  name="departamento"
                  value={editForm.departamento}
                  disabled
                />
              </div>
              <div className="profile-form-group"></div>
            </div>
            <div className="profile-form-actions">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    className="profile-update-btn"
                    onClick={handleSave}
                  >
                    Confirmar
                  </button>
                  <button
                    type="button"
                    className="profile-cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="profile-update-btn"
                  onClick={() => {
                    setIsEditing(true);
                    setEditForm({ ...userInfo });
                  }}
                >
                  Editar Perfil
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Usuario;