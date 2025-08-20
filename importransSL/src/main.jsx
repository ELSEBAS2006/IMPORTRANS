import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Productos from './productos.jsx'
import Servicios from './servicios.jsx'
import Proyectos from './proyectos.jsx'
import Login from './login.jsx'
import Intranet from './intranet.jsx'
import Usuario from './usuario.jsx'
import RescateFUENTE from './rescateFUENTE.jsx'
import Desmantelamiento from './desmantelamiento.jsx'
import Dispensador from './dispensador.jsx' // <-- Agrega este import
import './index.css'
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/servicios", 
    element: <Servicios />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/intranet",
    element: <Intranet />,
  },
  {
    path: "/usuario",
    element: <Usuario />,
  },
  {
    path: "/rescateFUENTE",
    element: <RescateFUENTE />,
  },
  {
    path: "/desmantelamiento",
    element: <Desmantelamiento />,
  },
  {
    path: "/dispensador", // <-- Agrega esta ruta
    element: <Dispensador />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
