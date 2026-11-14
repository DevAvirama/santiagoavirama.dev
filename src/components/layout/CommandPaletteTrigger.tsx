"use client";

import { CommandIcon } from "lucide-react";

/**
 * Isla cliente mínima: abre la paleta de comandos global (CommandMenu).
 */
export function CommandPaletteTrigger() {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("open-command-menu"));
      }}
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/35 px-3.5 font-mono text-xs text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
    >
      <CommandIcon className="size-3.5 text-cyan-400" />
      <span>Paleta rápida</span>
      <kbd className="rounded border border-slate-800 bg-slate-950 px-1.5 py-0.5 text-[10px] text-slate-300">
        ⌘K
      </kbd>
    </button>
  );
}
