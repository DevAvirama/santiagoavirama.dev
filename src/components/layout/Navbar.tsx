import Link from "next/link";
import { CommandMenu } from "@/components/layout/CommandMenu";

const navItems = [
  { label: "PorciTech", href: "/#porcitech" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "~/lab", href: "/#lab", isMono: true },
  { label: "Perfil", href: "/#perfil" },
  { label: "Stack", href: "/#stack" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Inicio — santiagoavirama.dev"
          className="group inline-flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-slate-100 transition-colors hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
        >
          <span className="inline-flex h-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-900/80 px-2 font-mono text-xs font-bold text-cyan-400 shadow-[0_0_15px_-3px_rgba(34,211,238,0.25)] transition-all group-hover:border-cyan-400/60 group-hover:bg-cyan-500/10">
            {"<SA />"}
          </span>
          <span className="hidden sm:inline-block">
            <span className="text-cyan-400">~/</span>santiagoavirama
            <span className="text-indigo-400">.dev</span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/50 px-2 py-1 backdrop-blur-md md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none ${
                item.isMono
                  ? "font-mono text-emerald-400/95 hover:bg-emerald-500/10 hover:text-emerald-300"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandMenu />
        </div>
      </div>
    </header>
  );
}
