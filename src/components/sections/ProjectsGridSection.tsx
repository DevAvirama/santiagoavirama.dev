import Link from "next/link";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckIcon,
  Code2Icon,
  CpuIcon,
  GlobeIcon,
  LockIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";
import { TechBadge } from "@/components/motion/TechBadge";

function getProjectCategoryIcon(id: string) {
  if (id.includes("doc-scan")) return CpuIcon;
  if (id.includes("inclusion")) return ShieldCheckIcon;
  if (id.includes("api")) return ServerIcon;
  return GlobeIcon;
}

export function ProjectsGridSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="scroll-mt-20 border-b border-slate-800/70 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            02 // Arquitecturas & Soluciones Entregadas
          </span>
          <h2
            id="proyectos-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Proyectos Destacados y Casos Reales
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            Selección curada de microservicios, plataformas institucionales
            accesibles, APIs en producción y entregas a clientes reales.
          </p>
        </Reveal>

        {/* Cada tarjeta observa su propio viewport: en móvil (1 columna) ninguna
            depende de que el grid completo alcance el umbral de visibilidad. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const CategoryIcon = getProjectCategoryIcon(project.id);
            return (
              <Reveal key={project.id} delay={(index % 2) * 0.08}>
                <HoverCard
                  as="article"
                  glow="emerald"
                  className="glass-card flex flex-col justify-between rounded-2xl p-6 hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex size-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                          <CategoryIcon className="size-4" />
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            project.tier === "client"
                              ? "border-indigo-500/35 bg-indigo-500/15 font-mono text-indigo-300"
                              : "border-emerald-500/35 bg-emerald-500/15 font-mono text-emerald-300"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>

                    <ul className="space-y-2 border-t border-slate-800/80 pt-4 text-xs leading-relaxed text-slate-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 space-y-4 border-t border-slate-800/80 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, idx) => (
                        <TechBadge
                          key={tech}
                          className={`rounded-md border px-2 py-0.5 font-mono text-[11px] ${
                            idx % 3 === 0
                              ? "border-cyan-500/25 bg-cyan-500/10 text-cyan-200"
                              : idx % 3 === 1
                                ? "border-indigo-500/25 bg-indigo-500/10 text-indigo-200"
                                : "border-slate-700/80 bg-slate-950/80 text-slate-300"
                          }`}
                        >
                          {tech}
                        </TechBadge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {project.caseStudySlug && (
                        <Link
                          href={`/proyectos/${project.caseStudySlug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 px-3 py-1.5 font-mono text-xs font-semibold text-cyan-300 ring-1 ring-cyan-500/35 transition-all hover:bg-cyan-500/25 hover:text-white"
                        >
                          <BookOpenIcon className="size-3.5" />
                          <span>Caso de Estudio MDX</span>
                        </Link>
                      )}

                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
                        >
                          <Code2Icon className="size-3.5" />
                          <span>Repositorio GitHub</span>
                          <ArrowUpRightIcon className="size-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                          <LockIcon className="size-3 text-slate-500" />
                          <span>Repositorio Institucional CTPI SENA</span>
                        </span>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
                        >
                          <GlobeIcon className="size-3.5" />
                          <span>Servicio en Producción</span>
                          <ArrowUpRightIcon className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
