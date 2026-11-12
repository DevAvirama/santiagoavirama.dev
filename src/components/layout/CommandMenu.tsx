"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  BookOpenIcon,
  CheckIcon,
  Code2Icon,
  CopyIcon,
  ExternalLinkIcon,
  FlaskConicalIcon,
  FolderGit2Icon,
  LayersIcon,
  MailIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const CONTACT_EMAIL = "santyaviramagnf@gmail.com";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    const handleCustomOpen = () => {
      setOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-menu", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-menu", handleCustomOpen);
    };
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const handleCopyEmail = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 900);
    } catch {
      setOpen(false);
    }
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir paleta de comandos (Ctrl+K o Comando+K)"
        className="group inline-flex h-9 items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 text-xs text-zinc-400 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:outline-none"
      >
        <SearchIcon className="size-3.5 text-emerald-400 transition-transform group-hover:scale-105" />
        <span className="hidden font-mono sm:inline-block">Comandos...</span>
        <kbd className="pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border border-zinc-800 bg-zinc-950 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={(nextOpen) => setOpen(nextOpen)}
        title="Paleta de Comandos — santiagoavirama.dev"
        description="Navega rápidamente por secciones, casos de estudio y acciones de contacto."
        className="max-w-lg border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl shadow-black/80"
      >
        <Command className="bg-zinc-950 text-zinc-100">
          <CommandInput placeholder="Escribe un comando o busca una sección..." />
          <CommandList className="max-h-80">
            <CommandEmpty className="py-6 font-mono text-xs text-zinc-500">
              No se encontraron resultados para tu búsqueda.
            </CommandEmpty>

            <CommandGroup heading="Casos de Estudio (Arquitectura & MDX)">
              <CommandItem
                value="caso de estudio porcitech ecosistema vision artificial"
                onSelect={() => runCommand(() => router.push("/proyectos/porcitech"))}
              >
                <BookOpenIcon className="size-4 text-emerald-400" />
                <span>Caso de Estudio: Ecosistema PorciTech</span>
                <CommandShortcut>MDX</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="caso de estudio doc-scan-monorepo arquitectura hexagonal"
                onSelect={() => runCommand(() => router.push("/proyectos/doc-scan"))}
              >
                <BookOpenIcon className="size-4 text-cyan-400" />
                <span>Caso de Estudio: doc-scan-monorepo</span>
                <CommandShortcut>MDX</CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator className="bg-zinc-800/80" />

            <CommandGroup heading="Secciones del Portafolio">
              <CommandItem
                value="ir a porcitech proyecto insignia flagship"
                onSelect={() => runCommand(() => router.push("/#porcitech"))}
              >
                <SparklesIcon className="size-4 text-emerald-400" />
                <span>Ir a #porcitech (Proyecto Insignia)</span>
                <CommandShortcut>#porcitech</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="ir a proyectos destacados arquitectura"
                onSelect={() => runCommand(() => router.push("/#proyectos"))}
              >
                <FolderGit2Icon className="size-4 text-zinc-400" />
                <span>Ir a #proyectos (Proyectos Destacados)</span>
                <CommandShortcut>#proyectos</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="ir a lab laboratorio experimentos github"
                onSelect={() => runCommand(() => router.push("/#lab"))}
              >
                <FlaskConicalIcon className="size-4 text-emerald-400" />
                <span>Ir a ~/lab (Experimentos & Repos)</span>
                <CommandShortcut>#lab</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="ir a perfil credenciales certificaciones educacion"
                onSelect={() => runCommand(() => router.push("/#perfil"))}
              >
                <ShieldCheckIcon className="size-4 text-cyan-400" />
                <span>Ir a #perfil (Cómo Trabajo & Credenciales)</span>
                <CommandShortcut>#perfil</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="ir a stack tecnologico capas herramientas"
                onSelect={() => runCommand(() => router.push("/#stack"))}
              >
                <LayersIcon className="size-4 text-zinc-400" />
                <span>Ir a #stack (Capas Tecnológicas)</span>
                <CommandShortcut>#stack</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="ir a contacto correo mensaje"
                onSelect={() => runCommand(() => router.push("/#contacto"))}
              >
                <MailIcon className="size-4 text-emerald-400" />
                <span>Ir a #contacto (Contacto Directo)</span>
                <CommandShortcut>#contacto</CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator className="bg-zinc-800/80" />

            <CommandGroup heading="Enlaces y Acciones Rápidas">
              <CommandItem
                value="copiar correo email portapapeles contacto"
                onSelect={() => {
                  void handleCopyEmail();
                }}
              >
                {copied ? (
                  <CheckIcon className="size-4 text-emerald-400" />
                ) : (
                  <CopyIcon className="size-4 text-emerald-400" />
                )}
                <span>
                  {copied
                    ? "¡Correo copiado al portapapeles!"
                    : `Copiar correo (${CONTACT_EMAIL})`}
                </span>
                <CommandShortcut>Copy</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="abrir github devavirama repositorios"
                onSelect={() =>
                  runCommand(() => {
                    window.open(
                      "https://github.com/DevAvirama",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  })
                }
              >
                <Code2Icon className="size-4 text-cyan-400" />
                <span>Abrir GitHub (@DevAvirama)</span>
                <ExternalLinkIcon className="ml-auto size-3.5 text-zinc-500" />
              </CommandItem>
              <CommandItem
                value="inicio home raiz portafolio"
                onSelect={() => runCommand(() => router.push("/"))}
              >
                <TerminalIcon className="size-4 text-zinc-400" />
                <span>Volver al inicio (~/santiagoavirama.dev)</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
