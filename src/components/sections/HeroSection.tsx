import Link from "next/link";
import {
  ArrowRightIcon,
  Code2Icon,
  MailIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react";
import { CodeShowcaseCard } from "@/components/sections/CodeShowcaseCard";
import { CommandPaletteTrigger } from "@/components/layout/CommandPaletteTrigger";
import { HeroBackground } from "@/components/motion/HeroBackground";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { StatusPulse } from "@/components/motion/StatusPulse";

/**
 * Server Component: todo el texto se emite en el HTML del SSR.
 * Las animaciones viven en wrappers cliente ligeros (motion/*).
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/*
            Columna izquierda (7 cols): entrada escalonada al montar.
            Los bloques de texto grandes (candidatos a LCP) solo animan
            transform (fade={false}) para quedar 100% visibles desde el SSR.
          */}
          <StaggerGroup
            trigger="mount"
            stagger={0.06}
            delayChildren={0.05}
            className="space-y-6 lg:col-span-7"
          >
            <StaggerItem
              y={10}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3.5 py-1.5 font-mono text-xs text-cyan-200 shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)] backdrop-blur-md"
            >
              <StatusPulse />
              <span>
                ~/santiagoavirama.dev • Disponible para ingeniería y proyectos a
                medida
              </span>
            </StaggerItem>

            <StaggerItem fade={false} className="space-y-3">
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
            </StaggerItem>

            <StaggerItem
              as="p"
              fade={false}
              className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Diseño y construyo sistemas distribuidos completos: desde
              interfaces web accesibles y aplicaciones móviles offline-first
              hasta APIs transaccionales, pipelines de visión artificial y
              despliegues endurecidos en contenedores.
            </StaggerItem>

            {/* Botonera principal + disparador Ctrl+K */}
            <StaggerItem className="flex flex-wrap items-center gap-3 pt-2">
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

              <CommandPaletteTrigger />
            </StaggerItem>

            <StaggerItem className="grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-300 sm:grid-cols-3">
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
            </StaggerItem>
          </StaggerGroup>

          {/* Columna derecha (5 cols) */}
          <div className="lg:col-span-5">
            <CodeShowcaseCard />
          </div>
        </div>
      </div>
    </section>
  );
}
