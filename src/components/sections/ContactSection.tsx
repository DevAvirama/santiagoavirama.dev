"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  CheckIcon,
  Code2Icon,
  CopyIcon,
  MailIcon,
  TerminalIcon,
} from "lucide-react";

const CONTACT_EMAIL = "santyaviramagnf@gmail.com";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: no-op
    }
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="scroll-mt-20 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12"
        >
          {/* Malla de gradiente suave cian/índigo de fondo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                06 // Contacto Directo & Colaboración
              </span>
              <h2
                id="contacto-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                ¿Buscas un Ingeniero Full Stack para tu equipo o un proyecto a
                medida?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Estoy disponible para integrarme a equipos de ingeniería de
                software, así como para diseñar y desarrollar soluciones web,
                APIs y sistemas a medida con altos estándares de calidad y
                seguridad.
              </p>

              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-slate-300">
                <span className="inline-flex size-6 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <TerminalIcon className="size-3.5" />
                </span>
                <span>Popayán, Cauca, Colombia • Trabajo Remoto / Híbrido</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 lg:col-span-5">
              <div className="flex flex-col gap-2.5 rounded-2xl border border-slate-800/90 bg-slate-950/85 p-5 shadow-inner">
                <span className="font-mono text-[11px] text-slate-400">
                  Correo electrónico directo:
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-mono text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      void handleCopyEmail();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-1.5 font-mono text-xs text-slate-200 transition-all hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-300">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="size-3.5 text-cyan-400" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 text-sm font-semibold text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.45)] transition-all hover:brightness-110"
                >
                  <MailIcon className="size-4" />
                  <span>Enviar Correo</span>
                </a>

                <a
                  href="https://github.com/DevAvirama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 text-sm font-medium text-slate-100 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Code2Icon className="size-4 text-cyan-400" />
                  <span>GitHub (@DevAvirama)</span>
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
