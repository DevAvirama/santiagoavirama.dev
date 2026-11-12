import Link from "next/link";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckIcon,
  Code2Icon,
  GlobeIcon,
  LockIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";

export function ProjectsGridSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            02 // Arquitecturas & Soluciones Entregadas
          </span>
          <h2
            id="proyectos-heading"
            className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
          >
            Proyectos Destacados y Casos Reales
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Selección curada de microservicios, plataformas institucionales
            accesibles, APIs en producción y entregas a clientes reales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge
                    variant="outline"
                    className={
                      project.tier === "client"
                        ? "border-cyan-500/30 bg-cyan-500/10 font-mono text-cyan-300"
                        : "border-emerald-500/30 bg-emerald-500/10 font-mono text-emerald-300"
                    }
                  >
                    {project.status}
                  </Badge>
                  <span className="font-mono text-xs text-zinc-400">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 sm:text-xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-300">
                  {project.summary}
                </p>

                <ul className="space-y-2 border-t border-zinc-800/80 pt-4 text-xs leading-relaxed text-zinc-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4 border-t border-zinc-800/80 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {project.caseStudySlug && (
                    <Link
                      href={`/proyectos/${project.caseStudySlug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30 transition-colors hover:bg-emerald-500/25"
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
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      <LockIcon className="size-3 text-zinc-500" />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
