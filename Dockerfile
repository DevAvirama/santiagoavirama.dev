# ==========================================
# Etapa 1: Dependencias (deps)
# ==========================================
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Habilitar pnpm mediante corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

# ==========================================
# Etapa 2: Compilación (builder)
# ==========================================
FROM node:22-alpine AS builder
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desactivar telemetría de Next.js en compilación
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# ==========================================
# Etapa 3: Entorno de ejecución (runner)
# ==========================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Crear usuario y grupo sin privilegios de root (nextjs:nodejs UID 1001)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar archivos públicos si existen
COPY --from=builder /app/public ./public

# Crear estructura de .next con permisos para usuario sin privilegios
RUN mkdir .next && chown nextjs:nodejs .next

# Copiar bundle standalone generado por Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
