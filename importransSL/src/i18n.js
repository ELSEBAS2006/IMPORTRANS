import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        // Navbar y generales
        "Bienvenido": "Bienvenido",
        "Inicio": "Inicio",
        "Productos": "Productos",
        "Servicios": "Servicios",
        "Proyectos": "Proyectos",
        "Contáctanos": "Contáctanos",
        "Cerrar sesión": "Cerrar sesión",
        "log-in": "log-in",
        "Seleccionar idioma": "Seleccionar idioma",
        "Español": "Español",
        "Inglés": "Inglés",

        // Sección ¿Quiénes Somos?
        "¿Quiénes Somos?": "¿Quiénes Somos?",
        "Somos una empresa especializada en transporte terrestre, cargue y descargue de mercancías peligrosas a nivel nacional. También realizamos importación, distribución, comercialización y almacenamiento de material radiactivo, dispositivos médicos y kits radiofarmacéuticos. Ofrecemos asesoría y capacitación en protección radiológica, cumpliendo con los requisitos de seguridad, legalidad y calidad, con un servicio oportuno y responsable, enfocado en la protección del medio ambiente.": 
          "Somos una empresa especializada en transporte terrestre, cargue y descargue de mercancías peligrosas a nivel nacional. También realizamos importación, distribución, comercialización y almacenamiento de material radiactivo, dispositivos médicos y kits radiofarmacéuticos. Ofrecemos asesoría y capacitación en protección radiológica, cumpliendo con los requisitos de seguridad, legalidad y calidad, con un servicio oportuno y responsable, enfocado en la protección del medio ambiente.",

        // Certificados
        "Certificados": "Certificados",
        "CERTIFICACION 1": "CERTIFICACIÓN 1",
        "CERTIFICACION 2": "CERTIFICACIÓN 2",
        "CERTIFICACION 3": "CERTIFICACIÓN 3",
        "CERTIFICACION 4": "CERTIFICACIÓN 4",
        "ISO 9001 VERSIÓN 2015": "ISO 9001 VERSIÓN 2015",
        "ISO 14001 VERSIÓN 2015": "ISO 14001 VERSIÓN 2015",
        "ISO 45001 VERSIÓN 2018": "ISO 45001 VERSIÓN 2018",
        "ISO 39001 VERSIÓN 2012": "ISO 39001 VERSIÓN 2012",
        "ISO 9001:2015 es la versión vigente del estándar internacional para Sistemas de Gestión de la Calidad (SGC). Su objetivo principal es ayudar a las organizaciones –de cualquier tamaño o sector– a garantizar de forma consistente productos y servicios que cumplan requisitos del cliente y normativos, al tiempo que promueven la mejora continua":
          "ISO 9001:2015 es la versión vigente del estándar internacional para Sistemas de Gestión de la Calidad (SGC). Su objetivo principal es ayudar a las organizaciones –de cualquier tamaño o sector– a garantizar de forma consistente productos y servicios que cumplan requisitos del cliente y normativos, al tiempo que promueven la mejora continua",
        "ISO 14001:2015 es un estándar internacional voluntario que establece los requisitos para un Sistema de Gestión Ambiental (SGA), ayudando a las organizaciones de cualquier tamaño a identificar, controlar y mejorar continuamente su desempeño ambiental mediante el ciclo PDCA, un enfoque basado en riesgos y con integración estratégica de liderazgo y ciclo de vida":
          "ISO 14001:2015 es un estándar internacional voluntario que establece los requisitos para un Sistema de Gestión Ambiental (SGA), ayudando a las organizaciones de cualquier tamaño a identificar, controlar y mejorar continuamente su desempeño ambiental mediante el ciclo PDCA, un enfoque basado en riesgos y con integración estratégica de liderazgo y ciclo de vida",
        "ISO 45001:2018 es la norma internacional para Sistemas de Gestión de Salud y Seguridad en el Trabajo (SST), publicada el 12 de marzo de 2018, reemplazando a OHSAS 18001":
          "ISO 45001:2018 es la norma internacional para Sistemas de Gestión de Salud y Seguridad en el Trabajo (SST), publicada el 12 de marzo de 2018, reemplazando a OHSAS 18001",
        "ISO 39001:2012 define un sistema sistemático (liderazgo, planificación, operación, evaluación y mejora continua) para que organizaciones reduzcan eficazmente los accidentes graves en sus actividades viales.":
          "ISO 39001:2012 define un sistema sistemático (liderazgo, planificación, operación, evaluación y mejora continua) para que organizaciones reduzcan eficazmente los accidentes graves en sus actividades viales.",

        // Footer
        "celular": "celular",
        "Teléfono": "Teléfono",
        "Email": "Email",
        "Contacto": "Contacto",
        "PQR": "PQR",

        // Formulario PQR
        "Formulario PQR": "Formulario PQR",
        "Seleccione una opción": "Seleccione una opción",
        "Queja": "Queja",
        "Reclamo": "Reclamo",
        "Solicitud": "Solicitud",
        "Denuncia": "Denuncia",
        "Propuesta": "Propuesta",
        "Nombres/Entidad": "Nombres/Entidad",
        "Tipo de documento": "Tipo de documento",
        "Cédula de Ciudadanía": "Cédula de Ciudadanía",
        "Cédula de Extranjería": "Cédula de Extranjería",
        "NIT": "NIT",
        "Pasaporte": "Pasaporte",
        "Número de documento": "Número de documento",
        "Correo electrónico": "Correo electrónico",
        "Teléfono": "Teléfono",
        "Objeto de su PQRSD": "Objeto de su PQRSD",
        "Cancelar": "Cancelar",
        "Enviar PQR": "Enviar PQR",

        // Otros
        "Ubícanos": "Ubícanos",
        "Ubicación Importrans": "Ubicación Importrans",
        "Traducir a inglés": "Traducir a inglés",
        "Traducir a español": "Traducir a español",
      }
    },
    en: {
      translation: {
        // Navbar & general
        "Bienvenido": "Welcome",
        "Inicio": "Home",
        "Productos": "Products",
        "Servicios": "Services",
        "Proyectos": "Projects",
        "Contáctanos": "Contact us",
        "Cerrar sesión": "Log out",
        "log-in": "Log in",
        "Seleccionar idioma": "Select language",
        "Español": "Spanish",
        "Inglés": "English",

        // Sección ¿Quiénes Somos?
        "¿Quiénes Somos?": "Who are we?",
        "Somos una empresa especializada en transporte terrestre, cargue y descargue de mercancías peligrosas a nivel nacional. También realizamos importación, distribución, comercialización y almacenamiento de material radiactivo, dispositivos médicos y kits radiofarmacéuticos. Ofrecemos asesoría y capacitación en protección radiológica, cumpliendo con los requisitos de seguridad, legalidad y calidad, con un servicio oportuno y responsable, enfocado en la protección del medio ambiente.":
          "We are a company specialized in land transport, loading and unloading of hazardous goods nationwide. We also import, distribute, market, and store radioactive material, medical devices, and radiopharmaceutical kits. We offer advice and training in radiological protection, complying with safety, legal, and quality requirements, with timely and responsible service focused on environmental protection.",

        // Certificados
        "Certificados": "Certificates",
        "CERTIFICACION 1": "CERTIFICATION 1",
        "CERTIFICACION 2": "CERTIFICATION 2",
        "CERTIFICACION 3": "CERTIFICATION 3",
        "CERTIFICACION 4": "CERTIFICATION 4",
        "ISO 9001 VERSIÓN 2015": "ISO 9001 VERSION 2015",
        "ISO 14001 VERSIÓN 2015": "ISO 14001 VERSION 2015",
        "ISO 45001 VERSIÓN 2018": "ISO 45001 VERSION 2018",
        "ISO 39001 VERSIÓN 2012": "ISO 39001 VERSION 2012",
        "ISO 9001:2015 es la versión vigente del estándar internacional para Sistemas de Gestión de la Calidad (SGC). Su objetivo principal es ayudar a las organizaciones –de cualquier tamaño o sector– a garantizar de forma consistente productos y servicios que cumplan requisitos del cliente y normativos, al tiempo que promueven la mejora continua":
          "ISO 9001:2015 is the current version of the international standard for Quality Management Systems (QMS). Its main objective is to help organizations –of any size or sector– consistently deliver products and services that meet customer and regulatory requirements, while promoting continuous improvement.",
        "ISO 14001:2015 es un estándar internacional voluntario que establece los requisitos para un Sistema de Gestión Ambiental (SGA), ayudando a las organizaciones de cualquier tamaño a identificar, controlar y mejorar continuamente su desempeño ambiental mediante el ciclo PDCA, un enfoque basado en riesgos y con integración estratégica de liderazgo y ciclo de vida":
          "ISO 14001:2015 is a voluntary international standard that sets requirements for an Environmental Management System (EMS), helping organizations of any size identify, control, and continuously improve their environmental performance through the PDCA cycle, a risk-based approach, and strategic integration of leadership and life cycle.",
        "ISO 45001:2018 es la norma internacional para Sistemas de Gestión de Salud y Seguridad en el Trabajo (SST), publicada el 12 de marzo de 2018, reemplazando a OHSAS 18001":
          "ISO 45001:2018 is the international standard for Occupational Health and Safety Management Systems (OHSMS), published on March 12, 2018, replacing OHSAS 18001.",
        "ISO 39001:2012 define un sistema sistemático (liderazgo, planificación, operación, evaluación y mejora continua) para que organizaciones reduzcan eficazmente los accidentes graves en sus actividades viales.":
          "ISO 39001:2012 defines a systematic system (leadership, planning, operation, evaluation, and continuous improvement) for organizations to effectively reduce serious accidents in their road activities.",

        // Footer
        "celular": "cellphone",
        "Teléfono": "Phone",
        "Email": "Email",
        "Contacto": "Contact",
        "PQR": "PQR",

        // Formulario PQR
        "Formulario PQR": "PQR Form",
        "Seleccione una opción": "Select an option",
        "Queja": "Complaint",
        "Reclamo": "Claim",
        "Solicitud": "Request",
        "Denuncia": "Report",
        "Propuesta": "Proposal",
        "Nombres/Entidad": "Names/Entity",
        "Tipo de documento": "Document type",
        "Cédula de Ciudadanía": "Citizenship ID",
        "Cédula de Extranjería": "Foreigner ID",
        "NIT": "NIT",
        "Pasaporte": "Passport",
        "Número de documento": "Document number",
        "Correo electrónico": "Email",
        "Teléfono": "Phone",
        "Objeto de su PQRSD": "Subject of your PQRSD",
        "Cancelar": "Cancel",
        "Enviar PQR": "Send PQR",

        // Otros
        "Ubícanos": "Find us",
        "Ubicación Importrans": "Importrans Location",
        "Traducir a inglés": "Translate to English",
        "Traducir a español": "Translate to Spanish",
      }
    }
  },
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;