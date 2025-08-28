import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './intranet.css';

const Intranet = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  
  // Estados para notificaciones
  const getStoredNotifications = () => {
    const stored = localStorage.getItem('notifications');
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  };

  const [notifications, setNotifications] = useState(getStoredNotifications());
  const [notificationForm, setNotificationForm] = useState({
    departamento: '',
    descripcion: ''
  });

  // Guardar notificaciones en localStorage
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Función para obtener eventos guardados del localStorage
  const getStoredEvents = () => {
    const stored = localStorage.getItem('calendarEvents');
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  };

  const [events, setEvents] = useState(getStoredEvents());
  const [eventForm, setEventForm] = useState({
    date: '',
    description: ''
  });
  const [editingEvent, setEditingEvent] = useState(null);

  // Función para guardar eventos en localStorage cada vez que events cambie
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  // Términos de búsqueda disponibles
  const searchOptions = [
    { term: 'notificaciones', section: 'notifications' },
    { term: 'plataformas', section: 'services' },
    { term: 'calendario', section: 'calendar' },
    { term: 'servicios', section: 'services' },
    { term: 'requisicion', section: 'services' },
    { term: 'control comercial', section: 'services' },
    { term: 'mesa de servicios', section: 'services' },
    { term: 'videos', section: 'services' }
  ];

  // Funciones para notificaciones
  const handleNotificationClick = () => {
    setNotificationForm({ departamento: '', descripcion: '' });
    setShowNotificationModal(true);
  };

  const closeNotificationModal = () => {
    setShowNotificationModal(false);
    setNotificationForm({ departamento: '', descripcion: '' });
  };

  const handleNotificationFormChange = (e) => {
    setNotificationForm({
      ...notificationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveNotification = (e) => {
    e.preventDefault();
    if (notificationForm.departamento && notificationForm.descripcion) {
      const newNotification = {
        id: Date.now(),
        departamento: notificationForm.departamento,
        descripcion: notificationForm.descripcion,
        fecha: new Date().toLocaleString()
      };
      
      const updatedNotifications = [newNotification, ...notifications];
      setNotifications(updatedNotifications);
      
      closeNotificationModal();
      alert('✅ Notificación creada exitosamente');
      
      // Navegar a la sección de notificaciones
      setTimeout(() => {
        const notificationsElement = document.getElementById('notifications');
        if (notificationsElement) {
          notificationsElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  // Función para eliminar notificación
  const handleDeleteNotification = (notificationId) => {
    const confirm = window.confirm('¿Estás seguro de que quieres eliminar esta notificación?');
    if (confirm) {
      const updatedNotifications = notifications.filter(notification => notification.id !== notificationId);
      setNotifications(updatedNotifications);
      alert('🗑️ Notificación eliminada exitosamente');
    }
  };

  // Función para manejar cambios en el buscador
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = searchOptions.filter(option =>
        option.term.toLowerCase().includes(value)
      );
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  };

  // Función para realizar la búsqueda
  const handleSearch = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setSearchTerm('');
      setSearchSuggestions([]);
    }
  };

  // Función para manejar Enter en el buscador
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchSuggestions.length > 0) {
      handleSearch(searchSuggestions[0].section);
    }
  };

  // Función para abrir modal de evento
  const handleCalendarClick = () => {
    setEditingEvent(null);
    setEventForm({ date: '', description: '' });
    setShowEventModal(true);
  };

  // Función para cerrar modal
  const closeEventModal = () => {
    setShowEventModal(false);
    setEventForm({ date: '', description: '' });
    setEditingEvent(null);
  };

  // Función para manejar cambios en el formulario de evento
  const handleEventFormChange = (e) => {
    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value
    });
  };

  // Función para guardar evento (crear o editar)
  const handleSaveEvent = (e) => {
    e.preventDefault();
    if (eventForm.date && eventForm.description) {
      if (editingEvent) {
        // Editar evento existente
        const updatedEvents = events.map(event => 
          event.id === editingEvent.id 
            ? { ...event, date: eventForm.date, description: eventForm.description }
            : event
        );
        setEvents(updatedEvents);
        
        // Actualizar eventos del día seleccionado si el modal de detalles está abierto
        if (showEventDetailsModal) {
          const updatedEvent = { ...editingEvent, date: eventForm.date, description: eventForm.description };
          setSelectedDayEvents(selectedDayEvents.map(event => 
            event.id === editingEvent.id ? updatedEvent : event
          ));
        }
        
        alert('✅ Evento actualizado y guardado exitosamente');
      } else {
        // Crear nuevo evento
        const newEvent = {
          id: Date.now(),
          date: eventForm.date,
          description: eventForm.description
        };
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        
        alert('✅ Evento creado y guardado exitosamente');
      }
      
      closeEventModal();
      
      // Navegar al calendario
      setTimeout(() => {
        const calendarElement = document.getElementById('calendar');
        if (calendarElement) {
          calendarElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  // Función para obtener eventos de un día específico
  const getEventsForDay = (year, month, day) => {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateString);
  };

  // Función para manejar clic en día del calendario
  const handleDayClick = (year, month, day) => {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = getEventsForDay(year, month, day);
    if (dayEvents.length > 0) {
      setSelectedDayEvents(dayEvents);
      setShowEventDetailsModal(true);
    } else {
      // Si no hay eventos, abrir modal para agregar evento con la fecha seleccionada
      setEditingEvent(null);
      setEventForm({ date: dateString, description: '' });
      setShowEventModal(true);
    }
  };

  // Función para cerrar modal de detalles
  const closeEventDetailsModal = () => {
    setShowEventDetailsModal(false);
    setSelectedDayEvents([]);
  };

  // Función para eliminar evento
  const handleDeleteEvent = (eventId) => {
    const confirm = window.confirm('¿Estás seguro de que quieres eliminar este evento?');
    if (confirm) {
      const updatedEvents = events.filter(event => event.id !== eventId);
      setEvents(updatedEvents);
      
      const remainingEvents = selectedDayEvents.filter(event => event.id !== eventId);
      if (remainingEvents.length === 0) {
        closeEventDetailsModal();
      } else {
        setSelectedDayEvents(remainingEvents);
      }
      
      alert('🗑️ Evento eliminado exitosamente');
    }
  };

  // Función para editar evento
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setEventForm({
      date: event.date,
      description: event.description
    });
    // Cerrar el modal de detalles de eventos
    setShowEventDetailsModal(false);
    setSelectedDayEvents([]);
    // Abrir el modal de edición
    setShowEventModal(true);
  };

  // Función para limpiar todos los eventos (opcional)
  const handleClearAllEvents = () => {
    const confirm = window.confirm('¿Estás seguro de que quieres eliminar TODOS los eventos del calendario? Esta acción no se puede deshacer.');
    if (confirm) {
      setEvents([]);
      localStorage.removeItem('calendarEvents');
      setShowEventDetailsModal(false);
      setSelectedDayEvents([]);
      alert('🗑️ Todos los eventos han sido eliminados');
    }
  };

  // Función para generar el calendario
  const generateCalendar = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const months = [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
      'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ];

    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    return months.map((month, monthIndex) => {
      const daysInMonth = getDaysInMonth(currentYear, monthIndex);
      const firstDay = getFirstDayOfMonth(currentYear, monthIndex);
      const days = [];

      // Días vacíos al inicio
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="day"></div>);
      }

      // Días del mes
      for (let day = 1; day <= daysInMonth; day++) {
        const isToday = currentYear === today.getFullYear() && 
                       monthIndex === currentMonth && 
                       day === currentDay;
        
        const dayEvents = getEventsForDay(currentYear, monthIndex, day);
        const hasEvents = dayEvents.length > 0;
        
        days.push(
          <div 
            key={day} 
            className={`day ${isToday ? 'current-day' : ''} clickable ${hasEvents ? 'has-events' : ''}`}
            title={hasEvents ? `${dayEvents.length} evento(s) - Clic para ver o agregar` : 'Clic para agregar evento'}
            onClick={() => handleDayClick(currentYear, monthIndex, day)}
          >
            {day}
            {hasEvents && (
              <div className="event-indicator">
                {dayEvents.length > 1 ? dayEvents.length : '•'}
              </div>
            )}
          </div>
        );
      }

      return (
        <div key={monthIndex} className={`month-card ${monthIndex === currentMonth ? 'current-month' : ''}`}>
          <h4 className={`month-title ${monthIndex === currentMonth ? 'current-month-title' : ''}`}>{month}</h4>
          <div className="days-grid">
            {daysOfWeek.map((dayName, index) => (
              <div key={index} className="day-header">{dayName}</div>
            ))}
            {days}
          </div>
        </div>
      );
    });
  };

  // Obtener imagen de perfil del usuario
  const getUserProfileImage = () => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      const userInfo = JSON.parse(stored);
      return userInfo.fotoPerfil;
    }
    return null;
  };

  const [profileImage, setProfileImage] = useState(getUserProfileImage());

  // Efecto para actualizar imagen de perfil al cambiar en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setProfileImage(getUserProfileImage());
    };

    window.addEventListener('storage', handleStorageChange);
    
    // También revisar cada vez que el componente se monta
    const interval = setInterval(() => {
      const newImage = getUserProfileImage();
      if (newImage !== profileImage) {
        setProfileImage(newImage);
      }
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [profileImage]);

  // Agregar esta función antes del return del componente
  const getUserName = () => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      const userInfo = JSON.parse(stored);
      return userInfo.nombre || 'Usuario';
    }
    return 'Usuario';
  };

  // Agregar este estado junto con los otros estados existentes
  const [userName, setUserName] = useState(getUserName());

  // Agregar este useEffect junto con los otros useEffect existentes
  useEffect(() => {
    const interval = setInterval(() => {
      const newUserName = getUserName();
      if (newUserName !== userName) {
        setUserName(newUserName);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [userName]);

  // --- MENÚ MÓVIL DESPLEGABLE ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleMobileMenuNavigate = (path) => {
    setMobileMenuOpen(false);
    if (path === "#notifications") {
      document.getElementById('notifications')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === "#calendar") {
      document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };
  // --- FIN MENÚ MÓVIL ---

  useEffect(() => {
    // Si NO hay token, redirige a login
    if (!localStorage.getItem('auth')) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Agrega esta función antes del return del componente
  const getUserDepartment = () => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      const userInfo = JSON.parse(stored);
      return userInfo.departamento || '';
    }
    return '';
  };

  // Cuando abras el modal de notificación, pon el departamento automáticamente
  useEffect(() => {
    if (showNotificationModal) {
      setNotificationForm(form => ({
        ...form,
        departamento: getUserDepartment()
      }));
    }
    // eslint-disable-next-line
  }, [showNotificationModal]);

  return (
    <div className="intranet-page">
      {/* Menú móvil */}
      <div className="mobile-nav" style={{display: 'none'}}>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="menu-icon">&#9776;</span>
        </button>
        <div className={`menu-items${mobileMenuOpen ? " open" : ""}`}>
          <button className="menu-link" onClick={() => { setMobileMenuOpen(false); navigate("/"); }}>
            <b>INTRANET</b>
          </button>
          <button
            className="menu-link"
            onClick={() => {
              setMobileMenuOpen(false);
              setShowNotificationModal(true); // Abre el formulario de notificaciones
            }}
          >
            <span role="img" aria-label="campana">🔔</span> Notificaciones
          </button>
          <button
            className="menu-link"
            onClick={() => {
              setMobileMenuOpen(false);
              setShowEventModal(true); // Abre el formulario de calendario
            }}
          >
            <span role="img" aria-label="calendario">📅</span> Calendario
          </button>
          <button
            className="menu-link"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              color: "#fff",
              cursor: "pointer"
            }}
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/usuario");
            }}
          >
            <img
              src={profileImage || "/src/assets/PERFIL.png"}
              alt="Perfil"
              className="menu-avatar"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "0.5rem"
              }}
            />
            {userName || "Perfil"}
          </button>
          {/* Agrega aquí el botón de LOG-OUT para móvil */}
          <button
            className="menu-link"
            style={{
              background: "#c62828",
              color: "#fff",
              border: "none",
              borderRadius: "7px",
              padding: "0.7rem 1.2rem",
              margin: "1rem 0 0 0",
              fontWeight: "bold",
              fontSize: "1rem",
              width: "100%",
              textAlign: "center"
            }}
            onClick={() => {
              localStorage.removeItem('auth');
              navigate('/login', { replace: true });
            }}
          >
            🚪 LOG-OUT
          </button>
          {/* Fin botón LOG-OUT */}
          <div className="menu-search" style={{ position: "relative" }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchSuggestions.length > 0) {
                  handleSearch(searchSuggestions[0].section);
                  setMobileMenuOpen(false);
                }
              }}
              autoComplete="off"
            >
              <input
                type="text"
                placeholder="Buscar..."
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1rem",
                  background: "#111",
                  color: "#fff",
                }}
                value={searchTerm}
                onChange={(e) => {
                  handleSearchChange(e);
                }}
                onFocus={() => {
                  if (searchTerm.length > 0 && searchSuggestions.length > 0) setMobileMenuOpen(true);
                }}
              />
              {searchSuggestions.length > 0 && (
                <div
                  className="search-suggestions"
                  style={{
                    position: "absolute",
                    top: "110%",
                    left: 0,
                    right: 0,
                    background: "#222",
                    borderRadius: "8px",
                    zIndex: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  {searchSuggestions.map((suggestion, idx) => (
                    <div
                      key={idx}
                      className="search-suggestion-item"
                      style={{
                        padding: "0.7rem 1rem",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleSearch(suggestion.section);
                        setMobileMenuOpen(false);
                      }}
                    >
                      🔍 {suggestion.term}
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* --- FIN MENÚ MÓVIL --- */}

      {/* Modal de Notificación */}
      {showNotificationModal && (
        <div className="event-modal-overlay" onClick={closeNotificationModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-header">
              <h3>🔔 Crear Nueva Notificación</h3>
              <button className="close-btn" onClick={closeNotificationModal}>×</button>
            </div>
            
            <form onSubmit={handleSaveNotification} className="event-form">
              <div className="form-group">
                <label htmlFor="departamento">🏢 Departamento:</label>
                <input
                  id="departamento"
                  name="departamento"
                  value={notificationForm.departamento}
                  readOnly
                  style={{ background: "#f1f5f9", color: "#64748b", fontWeight: "bold" }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="descripcion">📝 Descripción:</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={notificationForm.descripcion}
                  onChange={handleNotificationFormChange}
                  placeholder="Describe el mensaje de la notificación..."
                  rows="4"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="button" onClick={closeNotificationModal} className="cancel-btn">
                  Cancelar
                </button>
                <button type="submit" className="save-btn">
                  💾 Crear Notificación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Evento (Crear/Editar) */}
      {showEventModal && (
        <div className="event-modal-overlay" onClick={closeEventModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-header">
              <h3>📅 {editingEvent ? 'Editar Evento' : 'Agregar Evento al Calendario'}</h3>
              <button className="close-btn" onClick={closeEventModal}>×</button>
            </div>
            
            <form onSubmit={handleSaveEvent} className="event-form">
              <div className="form-group">
                <label htmlFor="date">📅 Fecha:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={eventForm.date}
                  onChange={handleEventFormChange}
                  required
                  readOnly={!!eventForm.date && !editingEvent} // Solo lectura si viene del calendario y no está editando
                  style={!!eventForm.date && !editingEvent ? { background: "#f1f5f9", color: "#64748b" } : {}}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">📝 Descripción:</label>
                <textarea
                  id="description"
                  name="description"
                  value={eventForm.description}
                  onChange={handleEventFormChange}
                  placeholder="Describe tu evento..."
                  rows="4"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="button" onClick={closeEventModal} className="cancel-btn">
                  Cancelar
                </button>
                <button type="submit" className="save-btn">
                  {editingEvent ? '✏️ Actualizar Evento' : '💾 Guardar Evento'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Detalles de Eventos */}
      {showEventDetailsModal && (
        <div className="event-modal-overlay" onClick={closeEventDetailsModal}>
          <div className="event-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-header">
              <h3>📅 Eventos del Día</h3>
              <button className="close-btn" onClick={closeEventDetailsModal}>×</button>
            </div>
            
            <div className="event-details-content">
              {selectedDayEvents.map((event) => (
                <div key={event.id} className="event-detail-item">
                  <div className="event-detail-info">
                    <div className="event-detail-date">
                      📅 {new Date(event.date + 'T00:00:00').toLocaleDateString('es-ES', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="event-detail-description">
                      📝 {event.description}
                    </div>
                  </div>
                  <div className="event-actions">
                    <button 
                      className="edit-event-btn"
                      onClick={() => handleEditEvent(event)}
                      title="Editar evento"
                    >
                      ✏️
                    </button>
                    <button 
                      className="delete-event-btn"
                      onClick={() => handleDeleteEvent(event.id)}
                      title="Eliminar evento"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header superior negro */}
      <div className="intranet-top-header">
        <h1 className="intranet-title">INTRANET</h1>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="🔍 Buscar: notificaciones, plataformas, calendario..." 
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchSuggestions.length > 0 && (
              <div className="search-suggestions">
                {searchSuggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className="search-suggestion-item"
                    onClick={() => handleSearch(suggestion.section)}
                  >
                    🔍 {suggestion.term}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
        <div className="header-icons">
          <span 
            className="icon notification-icon" 
            onClick={handleNotificationClick}
            title="Crear notificación"
          >
            🔔
          </span>
          <span 
            className="icon calendar-icon" 
            onClick={handleCalendarClick}
            title="Agregar evento al calendario"
          >
            📅
          </span>
          <span 
            className="icon user-icon" 
            onClick={() => navigate('/usuario')}
            title="Perfil de usuario"
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Foto de perfil" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #fff'
                }}
              />
            ) : (
              <img 
                src="/src/assets/PERFIL.png" 
                alt="Perfil" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #fff'
                }}
              />
            )}
          </span>
          {/* LOG-OUT BUTTON ARRIBA */}
          <button 
            className="logout-btn-new" 
            style={{
              marginLeft: "1.2rem",
              background: "#c62828",
              color: "#fff",
              border: "none",
              borderRadius: "7px",
              padding: "0.5rem 1.1rem",
              fontWeight: "bold",
              fontSize: "0.95rem",
              cursor: "pointer"
            }}
            onClick={() => {
              localStorage.removeItem('auth');
              navigate('/login', { replace: true });
            }}
          >
            LOG-OUT
          </button>
        </div>
      </div>

      {/* Espacio extra para bajar el banner de bienvenida */}
      <div style={{ height: "3.5rem" }} />

      {/* Banner de bienvenida más abajo */}
      <div className="welcome-banner">
        <h2 className="welcome-text">BIENVENIDO {userName}</h2>
      </div>

      {/* Notificaciones */}
      <div className="notifications-container" id="notifications">
        <div className="notifications-content">
          <h3 className="notifications-title">NOTIFICACIONES</h3>
          
          {notifications.length === 0 ? (
            <div className="no-notifications">
              <p>📥 No hay notificaciones disponibles</p>
              <p>Usa el icono 🔔 en la parte superior para crear una nueva notificación</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <div className="notification-text">
                  <p><strong>DE: {notification.departamento}</strong></p>
                  <p>{notification.descripcion}</p>
                  <div className="notification-meta">
                    <span className="notification-date">📅 {notification.fecha}</span>
                    <button 
                      className="delete-notification-btn"
                      onClick={() => handleDeleteNotification(notification.id)}
                      title="Eliminar notificación"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sección de Servicios/Plataformas */}
      <div className="services-container" id="services">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src="/src/requisicion.png" alt="Requisición" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 REQUISICION</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src="/src/control.jpeg" alt="Control Comercial" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 CONTROL COMERCIAL</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src="/src/MESA.png" alt="Mesa de Servicios" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 MESA DE SERVICIOS</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src="/src/registros.png" alt="Registro Académico" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 REGISTRO PLATAFORMAS</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src="/src/videos.png" alt="Videos" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 VIDEOS</span>
              </div>
            </div>
          </div>

          {/* Nueva tarjeta Documentos */}
          <div className="service-card">
            <div className="service-icon">
              <img src="/src/documentos.png" alt="Documentos" />
            </div>
            <div className="service-content">
              <div className="service-info">
                <span className="service-badge">🏠 DOCUMENTOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div className="calendar-container" id="calendar">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3 className="calendar-title">CALENDARIO</h3>
            <div className="calendar-year">{new Date().getFullYear()}</div>
          </div>
          
          {/* Lista de eventos ORDENADA por fecha más próxima */}
          {events.length > 0 && (
            <div className="events-list">
              <h4>📋 Eventos Programados ({events.length}):</h4>
              {[...events]
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((event) => (
                  <div key={event.id} className="event-item">
                    <span className="event-date">📅 {new Date(event.date + 'T00:00:00').toLocaleDateString('es-ES')}</span>
                    <span className="event-desc">📝 {event.description}</span>
                  </div>
                ))}
            </div>
          )}
          
          <div className="calendar-grid">
            {generateCalendar()}
          </div>

          {/* Botón limpiar todo abajo */}
          {events.length > 0 && (
            <div className="calendar-footer">
              <button 
                className="clear-events-btn"
                onClick={handleClearAllEvents}
                title="Eliminar todos los eventos"
              >
                🗑️ Limpiar Todos los Eventos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intranet;
