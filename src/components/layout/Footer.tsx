import Link from "next/link";
import { Code2Icon, ExternalLinkIcon, TerminalIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-xs text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-200">
            <TerminalIcon className="size-4 text-emerald-400" />
            <span>~/santiagoavirama.dev</span>
          </div>
          <p className="max-w-md text-zinc-400">
            Desarrollador Full Stack End-to-End. Arquitecturas web, sistemas
            distribuidos, visión artificial y seguridad desde el diseño.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/proyectos/porcitech"
            className="text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Caso PorciTech
          </Link>
          <Link
            href="/proyectos/doc-scan"
            className="text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Caso DocScan
          </Link>
          <a
            href="https://github.com/DevAvirama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <span>GitHub</span>
            <ExternalLinkIcon className="size-3" />
          </a>
          <a
            href="https://github.com/DevAvirama/santiagoavirama.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-zinc-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
          >
            <Code2Icon className="size-3.5 text-cyan-400" />
            <span>Código fuente</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-900 pt-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-zinc-500 font-mono">
        <span>© {currentYear} Santiago Avirama (@DevAvirama). Licencia MIT.</span>
        <span>Construido con Next.js App Router, TypeScript estricto & Tailwind CSS v4.</span>
      </div>
    </footer>
  );
}
