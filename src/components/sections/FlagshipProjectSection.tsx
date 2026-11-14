import Link from "next/link";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
  CpuIcon,
  EyeIcon,
  GlobeIcon,
  LayersIcon,
  ServerIcon,
  SmartphoneIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { flagshipProject } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { TechBadge } from "@/components/motion/TechBadge";

function getModuleIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("nextjs") || lower.includes("web")) {
    return GlobeIcon;
  }
  if (lower.includes("api")) {
    return ServerIcon;
  }
  if (lower.includes("vision")) {
    return EyeIcon;
  }
  return SmartphoneIcon;
}

export function FlagshipProjectSection() {
  const modules = flagshipProject.modules ?? [];

  return (
    <section
      id="porcitech"
      aria-labelledby="porcitech-heading"
      className="scroll-mt-20 border-b border-slate-800/70 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            01 // Caso de Estudio Insignia (Flagship)
          </span>
          <h2
            id="porcitech-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Ingeniería Distribuida Aplicada al Sector Agroindustrial
          </h2>
        </Reveal>

        <Reveal
          duration={0.55}
          className="glass-card relative overflow-hidden rounded-3xl p-6 transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 sm:p-8 lg:p-10"
        >
          {/* Resplandor ambiental en la esquina superior derecha */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-transparent blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-6 lg:flex-row lg:items-start">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge className="border border-emerald-500/35 bg-emerald-500/15 font-mono text-emerald-300 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                  {flagshipProject.status}
                </Badge>
                <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-xs text-indigo-300">
                  Rol: {flagshipProject.role}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {flagshipProject.title}
              </h3>
            </div>

            {flagshipProject.caseStudySlug && (
              <Link
                href={`/proyectos/${flagshipProject.caseStudySlug}`}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)] transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <BookOpenIcon className="size-4" />
                <span>Leer Caso de Estudio Técnico</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            )}
          </div>

          <div className="relative mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {flagshipProject.summary}
              </p>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                  <CpuIcon className="size-3.5 text-cyan-400" />
                  <span>Hitos de Arquitectura e Ingeniería</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
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
                  <TechBadge key={tech}>
                    <Badge
                      variant="outline"
                      className="border-slate-700/80 bg-slate-950/70 font-mono text-[11px] text-cyan-200"
                    >
                      {tech}
                    </Badge>
                  </TechBadge>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <h4 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-indigo-300 uppercase">
                <LayersIcon className="size-3.5 text-indigo-400" />
                <span>Módulos Desacoplados del Ecosistema (4 Repositorios)</span>
              </h4>

              <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {modules.map((mod) => {
                  const ModIcon = getModuleIcon(mod.label);
                  return (
                    <StaggerItem key={mod.label}>
                      <HoverCard
                        glow="emerald"
                        className="glass-card group flex flex-col justify-between rounded-2xl p-4 hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex size-7 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_12px_-2px_rgba(34,211,238,0.3)]">
                                <ModIcon className="size-3.5" />
                              </span>
                              <span className="font-mono text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                                {mod.label}
                              </span>
                            </div>
                            <a
                              href={mod.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Abrir repositorio de ${mod.label} en GitHub`}
                              className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950/80 px-2 py-0.5 font-mono text-xs text-cyan-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                            >
                              <span>Repo</span>
                              <ArrowUpRightIcon className="size-3" />
                            </a>
                          </div>
                          <p className="text-xs leading-relaxed text-slate-300">
                            {mod.description}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-1 border-t border-slate-800/70 pt-3">
                          {mod.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-slate-800 bg-slate-950/90 px-1.5 py-0.5 font-mono text-[10px] text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </HoverCard>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
