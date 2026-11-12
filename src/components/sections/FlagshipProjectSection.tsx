import Link from "next/link";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
  CpuIcon,
  LayersIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { flagshipProject } from "@/data/projects";

export function FlagshipProjectSection() {
  const modules = flagshipProject.modules ?? [];

  return (
    <section
      id="porcitech"
      aria-labelledby="porcitech-heading"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            01 // Caso de Estudio Insignia (Flagship)
          </span>
          <h2
            id="porcitech-heading"
            className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
          >
            Ingeniería Distribuida Aplicada al Sector Agroindustrial
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl shadow-black/40 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 pb-6 lg:flex-row lg:items-start">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border border-emerald-500/30 bg-emerald-500/15 font-mono text-emerald-300">
                  {flagshipProject.status}
                </Badge>
                <span className="font-mono text-xs text-zinc-400">
                  Rol: {flagshipProject.role}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl">
                {flagshipProject.title}
              </h3>
            </div>

            {flagshipProject.caseStudySlug && (
              <Link
                href={`/proyectos/${flagshipProject.caseStudySlug}`}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
              >
                <BookOpenIcon className="size-4" />
                <span>Leer Caso de Estudio Técnico</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {flagshipProject.summary}
              </p>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                  <CpuIcon className="size-3.5 text-emerald-400" />
                  <span>Hitos de Arquitectura e Ingeniería</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-300">
                  {flagshipProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {flagshipProject.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-zinc-800 bg-zinc-950/80 font-mono text-[11px] text-zinc-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <h4 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                <LayersIcon className="size-3.5 text-cyan-400" />
                <span>Módulos Desacoplados del Ecosistema (4 Repositorios)</span>
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {modules.map((mod) => (
                  <div
                    key={mod.label}
                    className="group flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-4 transition-colors hover:border-cyan-500/40"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-sm font-semibold text-zinc-100 group-hover:text-cyan-300">
                          {mod.label}
                        </span>
                        <a
                          href={mod.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir repositorio de ${mod.label} en GitHub`}
                          className="inline-flex items-center gap-1 font-mono text-xs text-cyan-400 hover:underline"
                        >
                          <span>Repo</span>
                          <ArrowUpRightIcon className="size-3.5" />
                        </a>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        {mod.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {mod.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
