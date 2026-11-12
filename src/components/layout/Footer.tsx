import Link from "next/link";
import { Code2Icon, ExternalLinkIcon, TerminalIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80 py-12 text-xs text-slate-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
            <span className="inline-flex size-6 items-center justify-center rounded-md border border-cyan-500/30 bg-slate-900 text-cyan-400">
              <TerminalIcon className="size-3.5" />
            </span>
            <span>
              <span className="text-cyan-400">~/</span>santiagoavirama
              <span className="text-indigo-400">.dev</span>
            </span>
          </div>
          <p className="max-w-md text-slate-400">
            Desarrollador Full Stack End-to-End. Arquitecturas web, sistemas
            distribuidos, visión artificial y seguridad desde el diseño.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/proyectos/porcitech"
            className="text-slate-300 transition-colors hover:text-cyan-400"
          >
            Caso PorciTech
          </Link>
          <Link
            href="/proyectos/doc-scan"
            className="text-slate-300 transition-colors hover:text-cyan-400"
          >
            Caso DocScan
          </Link>
          <a
            href="https://github.com/DevAvirama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-cyan-400"
          >
            <span>GitHub</span>
            <ExternalLinkIcon className="size-3" />
          </a>
          <a
            href="https://github.com/DevAvirama/santiagoavirama.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-slate-200 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
          >
            <Code2Icon className="size-3.5 text-cyan-400" />
            <span>Código fuente</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start justify-between gap-2 border-t border-slate-900 pt-6 px-4 font-mono text-[11px] text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <span>© {currentYear} Santiago Avirama (@DevAvirama). Licencia MIT.</span>
        <span>
          Construido con Next.js App Router, TypeScript estricto & Tailwind CSS v4.
        </span>
      </div>
    </footer>
  );
}
