import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Productos from './productos.jsx'
import Servicios from './servicios.jsx'
import Proyectos from './proyectos.jsx'
import Login from './login.jsx'
import Intranet from './intranet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/intranet" element={<Intranet />} />
      </Routes>
    </Router>
  </StrictMode>,
)
