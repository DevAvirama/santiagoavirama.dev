import type { ProjectItem } from "@/types/portfolio";

export const flagshipProject: ProjectItem = {
  id: "porcitech",
  title: "Ecosistema PorciTech — Plataforma Integral de Gestión Porcina",
  tier: "flagship",
  role: "Scrum Master y Desarrollador Full Stack End-to-End",
  status: "En Producción Experimental • Ecosistema Distribuido",
  summary:
    "Plataforma distribuida para la administración técnica, sanitaria y zootécnica de granjas porcícolas, integrando paneles analíticos web, operación móvil offline-first en campo, API transaccional y visión artificial para estimación biométrica de peso sin contacto.",
  highlights: [
    "Orquestación de un ecosistema multi-repositorio de 4 módulos desacoplados.",
    "Estimación biométrica de peso animal sin estrés mediante YOLOv8, calibración con marcadores ArUco y regresión XGBoost sobre flujos RTSP.",
    "API Core versionada (/api/v1/) con control de acceso basado en roles (RBAC de 3 niveles) y series temporales en PostgreSQL/TimescaleDB.",
    "Módulo móvil offline-first en Flutter con lectura de códigos QR para trazabilidad individual en galpones sin conectividad.",
  ],
  stack: [
    "Next.js",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "TimescaleDB",
    "YOLOv8",
    "OpenCV",
    "XGBoost",
    "Flutter",
    "Dart",
    "Docker",
  ],
  repoUrl: "https://github.com/DevAvirama/porcitech-nextjs",
  caseStudySlug: "porcitech",
  modules: [
    {
      label: "Frontend Web",
      repoUrl: "https://github.com/DevAvirama/porcitech-nextjs",
      tech: ["Next.js", "Tailwind CSS", "React", "Feature-Driven Architecture"],
      description:
        "Panel administrativo web organizado por features con analítica operativa, control sanitario, reproductivo y portal público de trazabilidad QR.",
    },
    {
      label: "API Core",
      repoUrl: "https://github.com/DevAvirama/api_porcitech",
      tech: ["Python", "FastAPI", "PostgreSQL", "TimescaleDB", "RTSP/Dahua"],
      description:
        "Backend transaccional con API versionada (/api/v1/), autenticación JWT con RBAC de 3 roles, persistencia híbrida relacional/series de tiempo e integración de cámaras RTSP/Dahua.",
    },
    {
      label: "Visión Artificial",
      repoUrl: "https://github.com/DevAvirama/Vision_Artificial",
      tech: ["Python", "YOLOv8", "OpenCV", "ArUco", "XGBoost", "Docker"],
      description:
        "Pipeline de inferencia visual con segmentación YOLOv8, calibración métrica mediante marcadores ArUco y modelo XGBoost ejecutado en un worker RTSP contenerizado.",
    },
    {
      label: "App Móvil",
      repoUrl: "https://github.com/DevAvirama/porcitech_mobile",
      tech: ["Flutter", "Dart", "Offline-First", "QR Scanner"],
      description:
        "Aplicación móvil con arquitectura offline-first, cola de sincronización local y escaneo QR para captura de pesajes y eventos sanitarios en campo.",
    },
  ],
};

export const featuredProjects: ProjectItem[] = [
  {
    id: "doc-scan-monorepo",
    title: "doc-scan-monorepo — Extracción Inteligente de Documentos",
    tier: "featured",
    role: "Arquitecto de Software y Desarrollador Backend/Full Stack",
    status: "Completado • Arquitectura Hexagonal & Microservicios",
    summary:
      "Monorepo políglota para el escaneo, validación de calidad óptica y extracción estructurada de facturas y recibos mediante visión por computador e IA generativa.",
    highlights: [
      "Diseño de core_api en Python bajo Arquitectura Hexagonal (Puertos y Adaptadores) con persistencia asíncrona en PostgreSQL (SQLAlchemy Async / asyncpg).",
      "Microservicio cv_service autónomo con preprocesamiento OpenCV (detección de borrosidad por varianza del Laplaciano) e inferencia estructurada con Gemini API.",
      "Calidad asegurada con pruebas automatizadas en Pytest, linting con Ruff, hooks de pre-commit, contenedores Docker multi-etapa sin privilegios y CI en GitHub Actions.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "OpenCV",
      "Gemini API",
      "SQLAlchemy Async",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Pytest",
      "Ruff",
      "Docker Compose",
      "GitHub Actions",
    ],
    repoUrl: "https://github.com/DevAvirama/doc-scan-monorepo",
    caseStudySlug: "doc-scan",
  },
  {
    id: "ssisena-inclusion",
    title: "SSISENA — Módulo de Inclusión y Gestión PIAR",
    tier: "featured",
    role: "Desarrollador Backend & Frontend Accesible",
    status: "Proyecto Institucional • Prototipo funcional",
    summary:
      "Plataforma modular en Django 5.2 (homeApp + inclusionApp) para el CTPI SENA Regional Cauca enfocada en la caracterización de aprendices con discapacidad y gestión de Planes Individuales de Ajustes Razonables (PIAR).",
    highlights: [
      "Arquitectura modular en Django 5.2 separando el núcleo de acceso (homeApp) y el dominio de seguimiento e inclusión educativa (inclusionApp).",
      "Endpoints JSON asíncronos para filtrado dinámico multicriterio, consulta de expedientes de aprendices y trazabilidad de actas PIAR.",
      "Interfaz construida con HTML5 100% semántico, atributos ARIA y soporte estricto de accesibilidad web (a11y) y navegación completa por teclado.",
    ],
    stack: [
      "Python",
      "Django 5.2",
      "HTML5 Semántico",
      "Tailwind CSS",
      "JavaScript",
      "WAI-ARIA (a11y)",
    ],
  },
  {
    id: "api-restful-express",
    title: "api_restful_express — API RESTful de Alquiler de Vehículos",
    tier: "featured",
    role: "Desarrollador Backend",
    status: "Desplegado en Producción • Render & Neon",
    summary:
      "API RESTful transaccional en Node.js y Express bajo patrón MVC para la gestión de inventario vehicular, reservas y control de disponibilidad con persistencia en PostgreSQL.",
    highlights: [
      "Arquitectura MVC con modelos y migraciones versionadas mediante Sequelize ORM sobre PostgreSQL serverless (Neon.tech).",
      "Autenticación sin estado (stateless) mediante JSON Web Tokens (JWT) y hashing criptográfico de contraseñas con Bcrypt.",
      "Control reactivo de disponibilidad vehicular y despliegue continuo (CI/CD) en Render Web Services.",
    ],
    stack: [
      "Node.js",
      "Express",
      "Sequelize ORM",
      "PostgreSQL (Neon)",
      "JWT",
      "Bcrypt",
      "Render",
    ],
    repoUrl: "https://github.com/DevAvirama/api_restful_express",
    liveUrl: "https://api-restful-express.onrender.com",
  },
  {
    id: "danny-webpage",
    title: "DannyWebPage — Landing Page de Servicios Jurídicos",
    tier: "client",
    role: "Desarrollador Frontend",
    status: "Entregado a Cliente Real",
    summary:
      "Landing page profesional entregada a cliente real del sector jurídico (Derecho Laboral y Seguridad Social), diseñada con enfoque en conversión, claridad comercial y rendimiento.",
    highlights: [
      "Construcción sin dependencias pesadas en HTML5 semántico, CSS3 moderno (Custom Properties, Grid, Flexbox) y JavaScript puro.",
      "Identidad visual sobria y responsiva optimizada para tiempos de carga inmediatos en dispositivos móviles y escritorio.",
      "Estructuración clara de áreas de práctica legal, trayectoria comprobada y canales de contacto directo.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    repoUrl: "https://github.com/DevAvirama/DannyWebPage",
  },
];
