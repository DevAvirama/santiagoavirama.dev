import {
  ArrowUpRightIcon,
  CalendarIcon,
  Code2Icon,
  FlaskConicalIcon,
  GlobeIcon,
  TerminalIcon,
} from "lucide-react";
import type { LabRepository } from "@/types/github";

interface LabSectionProps {
  repositories: LabRepository[];
}

function formatUpdatedDate(isoDate: string): string {
  try {
    return new Intl.DateTimeFormat("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(isoDate));
  } catch {
    return isoDate.slice(0, 10);
  }
}

export function LabSection({ repositories }: LabSectionProps) {
  return (
    <section
      id="lab"
      aria-labelledby="lab-heading"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              03 // ~/lab • Experimentos Dinámicos (GitHub API ISR)
            </span>
            <h2
              id="lab-heading"
              className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
            >
              Laboratorio de Prototipos y Experimentación
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400">
              Repositorios sincronizados automáticamente desde GitHub mediante
              el topic{" "}
              <code className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-emerald-300">
                portfolio-lab
              </code>
              .
            </p>
          </div>

          <a
            href="https://github.com/DevAvirama?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
          >
            <span>Ver todos los repositorios</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-inner">
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-zinc-300">
                santiago@archlinux:~/lab$ gh repo list --topic portfolio-lab
              </span>
            </div>
            <span className="hidden text-emerald-400 sm:inline">
              {repositories.length} repo(s) activos
            </span>
          </div>

          {repositories.length > 0 ? (
            <div className="divide-y divide-zinc-800/80">
              {repositories.map((repo) => (
                <div
                  key={repo.id}
                  className="flex flex-col justify-between gap-4 p-5 transition-colors hover:bg-zinc-900/40 sm:flex-row sm:items-center sm:px-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <FlaskConicalIcon className="size-4 text-emerald-400" />
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-base font-semibold text-zinc-100 transition-colors hover:text-cyan-400"
                      >
                        {repo.name}
                      </a>
                      {repo.language && (
                        <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="max-w-2xl text-sm text-zinc-400">
                      {repo.description}
                    </p>

                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {repo.topics.map((topic) => (
                          <span
                            key={topic}
                            className="font-mono text-[11px] text-zinc-500"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-4 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 text-zinc-500">
                      <CalendarIcon className="size-3.5" />
                      <span>{formatUpdatedDate(repo.updatedAt)}</span>
                    </span>

                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                      >
                        <GlobeIcon className="size-3.5" />
                        <span>Demo</span>
                      </a>
                    )}

                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-cyan-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                    >
                      <Code2Icon className="size-3.5" />
                      <span>Código</span>
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
              <TerminalIcon className="size-6 text-zinc-500" />
              <p className="max-w-md text-sm text-zinc-400">
                Sincronización de laboratorio en espera o sin conexión temporal
                a la API de GitHub. Puedes explorar todos los experimentos
                directamente en mi perfil.
              </p>
              <a
                href="https://github.com/DevAvirama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 font-mono text-xs text-cyan-400 transition-colors hover:border-cyan-500/40"
              >
                <span>Ir a github.com/DevAvirama</span>
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
