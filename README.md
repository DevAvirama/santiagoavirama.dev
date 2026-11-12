# 🚀 santiagoavirama.dev

Portafolio personal y casos de estudio de ingeniería de software de **Santiago Avirama**.

Diseñado con una arquitectura moderna, modular y escalable orientada al alto rendimiento, seguridad perimetral y soporte completo para despliegues contenerizados.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología / Herramienta |
| :--- | :--- |
| **Framework Core** | [Next.js](https://nextjs.org/) (App Router, Turbopack) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) con modo estricto (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) |
| **Estilos & UI** | [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Tema Neutral) |
| **Animaciones & Iconos** | [Framer Motion](https://motion.dev/) + [Lucide Icons](https://lucide.dev/) |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) |
| **Contenerización** | Docker (Multi-stage build compatible con `output: "standalone"`) |
| **Integración Continua** | GitHub Actions (`tsc`, `eslint`, `build`) |

---

## 🏛️ Estructura del Proyecto

```text
santiagoavirama.dev/
├── .github/
│   └── workflows/
│       └── ci.yml             # Pipeline automatizado de CI (Typecheck, Lint y Build)
├── public/                    # Recursos estáticos
├── src/
│   ├── app/                   # Next.js App Router (Páginas, Layouts y estilos globales)
│   ├── components/
│   │   └── ui/                # Primitivos base de UI (shadcn/ui)
│   └── lib/                   # Utilidades generales (cn, etc.)
├── .dockerignore
├── Dockerfile                 # Construcción optimizada multi-etapa para Docker
├── components.json            # Configuración del registro de shadcn/ui
├── next.config.ts             # Configuración de Next.js, standalone y cabeceras de seguridad
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json              # Configuración tipográfica estricta
```

---

## 🚀 Puesta en Marcha Local

### 1. Requisitos Previos

* **Node.js:** `>= 20.x`
* **pnpm:** `>= 9.x`

### 2. Instalación de Dependencias

```bash
pnpm install
```

### 3. Servidor de Desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 4. Verificaciones de Calidad

```bash
# Verificación estricta de tipos
pnpm exec tsc --noEmit

# Análisis estático de código
pnpm lint

# Compilación de producción
pnpm build
```

---

## 🐳 Despliegue con Docker

El proyecto está configurado con `output: "standalone"` en `next.config.ts`, permitiendo generar imágenes de producción ligeras y seguras ejecutándose bajo un usuario sin privilegios (`nextjs` UID 1001).

### Construir la imagen:
```bash
docker build -t santiagoavirama-dev .
```

### Ejecutar el contenedor:
```bash
docker run -p 3000:3000 santiagoavirama-dev
```

---

## 🔒 Cabeceras de Seguridad

El servidor inyecta automáticamente las siguientes cabeceras HTTP de protección:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()`

---

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
