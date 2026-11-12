"use client";

import * as React from "react";
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
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                06 // Contacto Directo & Colaboración
              </span>
              <h2
                id="contacto-heading"
                className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
              >
                ¿Buscas un Ingeniero Full Stack para tu equipo o un proyecto a
                medida?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Estoy disponible para integrarme a equipos de ingeniería de
                software, así como para diseñar y desarrollar soluciones web,
                APIs y sistemas a medida con altos estándares de calidad y
                seguridad.
              </p>

              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-zinc-400">
                <TerminalIcon className="size-3.5 text-emerald-400" />
                <span>Popayán, Cauca, Colombia • Trabajo Remoto / Híbrido</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <span className="font-mono text-[11px] text-zinc-400">
                  Correo electrónico directo:
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-mono text-sm font-semibold text-emerald-400 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      void handleCopyEmail();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-200 transition-colors hover:border-emerald-500/40 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-300">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="size-3.5 text-zinc-400" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                >
                  <MailIcon className="size-4" />
                  <span>Enviar Correo</span>
                </a>

                <a
                  href="https://github.com/DevAvirama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <Code2Icon className="size-4 text-cyan-400" />
                  <span>GitHub (@DevAvirama)</span>
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
