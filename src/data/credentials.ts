import type {
  CertificationItem,
  ComplementaryCourse,
  EducationItem,
} from "@/types/portfolio";

export const educationList: EducationItem[] = [
  {
    id: "adso-sena",
    degree: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
    institution: "SENA — Centro de Teleinformática y Producción Industrial (CTPI) Regional Cauca",
    period: "En cierre de etapa lectiva",
    focus: [
      "Arquitectura y diseño de software escalable",
      "Desarrollo Full Stack (Python, FastAPI, Django, Next.js, Node.js)",
      "Bases de datos relacionales, modelado transaccional y despliegues en contenedores",
      "Liderazgo técnico bajo metodologías ágiles (Scrum)",
    ],
  },
  {
    id: "tecnico-sistemas-sena",
    degree: "Técnico en Sistemas",
    institution: "SENA — Centro de Teleinformática y Producción Industrial (CTPI) Regional Cauca",
    period: "Enero 2024",
    focus: [
      "Mantenimiento preventivo y correctivo de infraestructura de cómputo",
      "Redes estructuradas, direccionamiento IP y soporte de sistemas operativos",
      "Administración básica de entornos Linux y Windows",
    ],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: "iso-27001-auditor",
    name: "Auditor Interno ISO/IEC 27001:2022",
    issuer: "TÜV NORD / ES-CIBER",
    date: "Diciembre 2023",
    category: "Ciberseguridad y Gobernanza",
    status: "verified",
    skills: [
      "SGSI (Sistemas de Gestión de Seguridad de la Información)",
      "Gestión de riesgos y controles de seguridad",
      "Auditoría de cumplimiento normativo ISO/IEC 27001:2022",
    ],
    credentialUrl:
      "https://virtuallab.altertechnology.com/csv/c1e68d81-956f-4a8b-8d6a-981bb56e32e2",
  },
  {
    id: "google-cybersecurity",
    name: "Certificado Profesional de Ciberseguridad de Google",
    issuer: "Google / Coursera",
    date: "Febrero 2024",
    category: "Ciberseguridad y Redes",
    status: "verified",
    skills: [
      "Hardening de sistemas Linux y línea de comandos",
      "Seguridad de redes, SIEM y análisis de vulnerabilidades",
      "Automatización de tareas de seguridad con Python y SQL",
      "Respuesta ante incidentes y gestión de amenazas",
    ],
    credentialUrl: "https://coursera.org/verify/professional-cert/JW7QZY7V4AH4",
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "En preparación",
    category: "DevOps e Ingeniería Colaborativa",
    status: "in-progress",
    skills: [
      "Control de versiones avanzado con Git y flujos de ramas",
      "Automatización de flujos con GitHub Actions",
      "Seguridad de repositorios, gobernanza y trabajo colaborativo",
    ],
  },
];

export const complementaryLearning: ComplementaryCourse[] = [
  {
    name: "Redes Informáticas de Internet",
    issuer: "Platzi",
    date: "Mayo–Junio 2026",
  },
  {
    name: "Fundamentos de Ingeniería de Software",
    issuer: "Platzi",
    date: "Mayo–Junio 2026",
  },
  {
    name: "Introducción a la Terminal y Línea de Comandos",
    issuer: "Platzi",
    date: "Mayo–Junio 2026",
  },
  {
    name: "Developing Interpersonal Skills",
    issuer: "IBM / Coursera",
    date: "Julio 2024",
    credentialUrl: "https://coursera.org/verify/XYFMCK9EU5J6",
  },
  {
    name: "Diplomado en Gestión Integral del Servicio al Cliente",
    issuer: "Corporación Universitaria Comfacauca (Unicomfacauca)",
    date: "Julio 2023",
  },
];
