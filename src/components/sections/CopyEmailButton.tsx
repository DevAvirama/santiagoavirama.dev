"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, CopyIcon } from "lucide-react";
import { hoverTransition } from "@/components/motion/config";

interface CopyEmailButtonProps {
  email: string;
}

/**
 * Isla cliente: copia el correo al portapapeles con feedback animado.
 */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Fallback: no-op
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        void handleCopyEmail();
      }}
      aria-live="polite"
      className="inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 px-3 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : "idle"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={hoverTransition}
          className="inline-flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <CheckIcon className="size-3.5 text-emerald-400" />
              <span className="text-emerald-300">¡Copiado!</span>
            </>
          ) : (
            <>
              <CopyIcon className="size-3.5 text-cyan-400" />
              <span>Copiar correo</span>
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
