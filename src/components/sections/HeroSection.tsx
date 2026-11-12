"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  Code2Icon,
  MailIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-zinc-950 to-zinc-950"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              ~/santiagoavirama.dev • Disponible para equipos de ingeniería y
              proyectos a medida
            </span>
          </div>

          <div className="space-y-3">
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl"
            >
              Santiago Avirama
            </h1>
            <p className="text-lg font-medium text-emerald-400 sm:text-xl">
              Desarrollador Full Stack End-to-End | Arquitecturas Web, IA y
              Seguridad desde el Diseño
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Diseño y construyo sistemas distribuidos completos: desde interfaces
            web accesibles y aplicaciones móviles offline-first hasta APIs
            transaccionales, pipelines de visión artificial y despliegues
            endurecidos en contenedores.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#porcitech"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
            >
              <span>Explorar PorciTech</span>
              <ArrowRightIcon className="size-4" />
            </Link>

            <a
              href="https://github.com/DevAvirama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-500/40 hover:bg-zinc-900 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
            >
              <Code2Icon className="size-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <Link
              href="#contacto"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
            >
              <MailIcon className="size-4 text-zinc-400" />
              <span>Contacto</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t border-zinc-800/80 pt-6 text-xs text-zinc-400 sm:grid-cols-3">
            <div className="flex items-center gap-2 font-mono">
              <TerminalIcon className="size-4 shrink-0 text-emerald-400" />
              <span>Arquitectura Hexagonal & Clean Code</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <ShieldCheckIcon className="size-4 shrink-0 text-cyan-400" />
              <span>Auditor Interno ISO/IEC 27001:2022</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <Code2Icon className="size-4 shrink-0 text-emerald-400" />
              <span>Next.js • FastAPI • YOLOv8 • Flutter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
