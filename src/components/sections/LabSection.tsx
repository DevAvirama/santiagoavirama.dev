import {
  ArrowUpRightIcon,
  CalendarIcon,
  Code2Icon,
  FlaskConicalIcon,
  GlobeIcon,
  TerminalIcon,
} from "lucide-react";
import type { LabRepository } from "@/types/github";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { StatusPulse } from "@/components/motion/StatusPulse";
import { TerminalCursor } from "@/components/motion/TerminalCursor";

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
      className="scroll-mt-20 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              03 // ~/lab • Experimentos Dinámicos (GitHub API ISR)
            </span>
            <h2
              id="lab-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Laboratorio de Prototipos y Experimentación
            </h2>
            <p className="max-w-2xl text-sm text-slate-400">
              Repositorios sincronizados automáticamente desde GitHub mediante
              el topic{" "}
              <code className="rounded border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-xs text-cyan-300">
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
        </Reveal>

        <Reveal
          duration={0.55}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-rose-500/70" />
              <span className="size-2.5 rounded-full bg-amber-400/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-slate-300">
                <span className="text-cyan-400">santiago@archlinux</span>:
                <span className="text-indigo-400">~/lab</span>$ gh repo list
                --topic portfolio-lab
                <TerminalCursor className="hidden sm:inline-block" />
              </span>
            </div>
            <span className="hidden items-center gap-1.5 text-emerald-400 sm:inline-flex">
              <StatusPulse />
              {repositories.length} repo(s) activos
            </span>
          </div>

          {repositories.length > 0 ? (
            <StaggerGroup className="space-y-3 p-4 sm:p-5">
              {repositories.map((repo) => (
                <StaggerItem key={repo.id} y={8}>
                  <SpotlightCard className="flex flex-col justify-between gap-4 rounded-xl p-4 sm:flex-row sm:items-center sm:px-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex size-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        <FlaskConicalIcon className="size-3.5" />
                      </span>
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-base font-semibold text-white transition-colors hover:text-cyan-400"
                      >
                        {repo.name}
                      </a>
                      {repo.language && (
                        <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="max-w-2xl text-sm text-slate-300">
                      {repo.description}
                    </p>

                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {repo.topics.map((topic) => (
                          <span
                            key={topic}
                            className="font-mono text-[11px] text-indigo-400/90"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-4 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <CalendarIcon className="size-3.5 text-indigo-400" />
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
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-cyan-400 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      <Code2Icon className="size-3.5" />
                      <span>Código</span>
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
              <TerminalIcon className="size-6 text-cyan-400" />
              <p className="max-w-md text-sm text-slate-300">
                Sincronización de laboratorio en espera o sin conexión temporal
                a la API de GitHub. Puedes explorar todos los experimentos
                directamente en mi perfil.
              </p>
              <a
                href="https://github.com/DevAvirama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-mono text-xs text-cyan-400 transition-colors hover:border-cyan-500/40"
              >
                <span>Ir a github.com/DevAvirama</span>
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
