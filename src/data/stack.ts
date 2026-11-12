import type { StackLayer } from "@/types/portfolio";

export const stackLayers: StackLayer[] = [
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    description:
      "Interfaces reactivas orientadas a la experiencia de usuario, accesibilidad web (a11y) y operación móvil offline-first en campo.",
    items: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript (Strict)",
      "Tailwind CSS",
      "shadcn/ui",
      "Flutter & Dart",
      "HTML5 Semántico & WAI-ARIA",
      "Framer Motion",
    ],
  },
  {
    id: "backend-architecture",
    title: "Backend & Arquitectura",
    description:
      "APIs transaccionales, microservicios desacoplados y diseño guiado por el dominio con contratos tipados.",
    items: [
      "Python",
      "FastAPI",
      "Django 5.2",
      "Node.js & Express",
      "Arquitectura Hexagonal (Ports & Adapters)",
      "Clean Architecture",
      "RESTful APIs",
      "JWT & RBAC",
      "Pydantic v2",
    ],
  },
  {
    id: "data-persistence",
    title: "Datos & Persistencia",
    description:
      "Modelado relacional, integridad transaccional, consultas asíncronas y almacenamiento de series temporales.",
    items: [
      "PostgreSQL",
      "TimescaleDB",
      "SQLAlchemy 2.0 (Async)",
      "Sequelize ORM",
      "SQLite (Offline Sync)",
      "Supabase & Neon Serverless",
      "Migraciones Versionadas",
    ],
  },
  {
    id: "ai-computer-vision",
    title: "IA & Visión Artificial",
    description:
      "Pipelines de procesamiento de imágenes, inferencia biométrica sin contacto y extracción documental estructurada.",
    items: [
      "YOLOv8 (Segmentación & Detección)",
      "OpenCV",
      "Marcadores Fiduciarios ArUco",
      "XGBoost (Regresión Biométrica)",
      "Google Gemini Vision API (Structured Outputs)",
      "Procesamiento de Flujos RTSP",
      "NumPy",
    ],
  },
  {
    id: "devops-linux-security",
    title: "DevOps, Linux & Ciberseguridad",
    description:
      "Entornos reproducibles, contenedores endurecidos sin privilegios, automatización CI/CD y auditoría bajo estándares internacionales.",
    items: [
      "Linux (Arch / Debian / Bash)",
      "Docker & Docker Compose (Multi-stage)",
      "GitHub Actions (CI/CD)",
      "Git & Monorepos",
      "uv & pnpm",
      "Pytest & Ruff",
      "ISO/IEC 27001:2022",
      "Hardening HTTP & Contenedores",
    ],
  },
];
