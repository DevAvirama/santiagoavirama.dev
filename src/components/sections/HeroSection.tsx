"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  Code2Icon,
  CommandIcon,
  MailIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react";
import { CodeShowcaseCard } from "@/components/sections/CodeShowcaseCard";

export function HeroSection() {
  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-menu"));
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-800/70 py-16 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Columna izquierda (7 cols) - 100% visible desde SSR para LCP óptimo */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3.5 py-1.5 font-mono text-xs text-cyan-200 shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
              <span>
                ~/santiagoavirama.dev • Disponible para ingeniería y proyectos a
                medida
              </span>
            </div>

            <div className="space-y-3">
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span className="text-gradient-tech">Santiago Avirama</span>
              </h1>
              <p className="text-lg font-semibold leading-snug text-slate-100 sm:text-xl">
                Desarrollador Full Stack End-to-End{" "}
                <span className="text-cyan-400">|</span>{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Arquitecturas Web, IA y Seguridad desde el Diseño
                </span>
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Diseño y construyo sistemas distribuidos completos: desde
              interfaces web accesibles y aplicaciones móviles offline-first
              hasta APIs transaccionales, pipelines de visión artificial y
              despliegues endurecidos en contenedores.
            </p>

            {/* Botonera principal + disparador Ctrl+K */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#porcitech"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_-5px_rgba(56,189,248,0.55)] transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <SparklesIcon className="size-4" />
                <span>Explorar PorciTech</span>
                <ArrowRightIcon className="size-4" />
              </Link>

              <a
                href="https://github.com/DevAvirama"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
              >
                <Code2Icon className="size-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <Link
                href="#contacto"
                className="glass-card glass-card-hover inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
              >
                <MailIcon className="size-4 text-indigo-400" />
                <span>Contacto</span>
              </Link>

              <button
                type="button"
                onClick={triggerCommandPalette}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/35 px-3.5 font-mono text-xs text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
              >
                <CommandIcon className="size-3.5 text-cyan-400" />
                <span>Paleta rápida</span>
                <kbd className="rounded border border-slate-800 bg-slate-950 px-1.5 py-0.5 text-[10px] text-slate-300">
                  ⌘K
                </kbd>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-2 font-mono">
                <TerminalIcon className="size-4 shrink-0 text-emerald-400" />
                <span>Arquitectura Hexagonal &amp; Clean Code</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <ShieldCheckIcon className="size-4 shrink-0 text-cyan-400" />
                <span>Auditor Interno ISO/IEC 27001:2022</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Code2Icon className="size-4 shrink-0 text-indigo-400" />
                <span>Next.js • FastAPI • YOLOv8 • Flutter</span>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha (5 cols) */}
          <div className="lg:col-span-5">
            <CodeShowcaseCard />
          </div>
        </div>
      </div>
    </section>
  );
}
