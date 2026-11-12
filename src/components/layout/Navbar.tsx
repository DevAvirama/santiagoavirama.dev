import Link from "next/link";
import { TerminalIcon } from "lucide-react";
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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Inicio — santiagoavirama.dev"
          className="group inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
        >
          <span className="inline-flex size-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-emerald-400 transition-colors group-hover:border-emerald-500/40">
            <TerminalIcon className="size-3.5" />
          </span>
          <span>
            <span className="text-emerald-400">~/</span>santiagoavirama.dev
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none ${
                item.isMono ? "font-mono text-emerald-400/90 hover:text-emerald-300" : ""
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
