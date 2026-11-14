"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TerminalCursorProps {
  className?: string;
}

/**
 * Cursor de terminal parpadeante (solo `opacity`, en pasos discretos).
 * Se detiene con `prefers-reduced-motion`.
 */
export function TerminalCursor({ className }: TerminalCursorProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseClassName = `ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-cyan-300/90 ${className ?? ""}`;

  if (shouldReduceMotion) {
    return <span aria-hidden="true" className={baseClassName} />;
  }

  return (
    <motion.span
      aria-hidden="true"
      className={baseClassName}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1.1,
        times: [0, 0.5, 0.5, 1],
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );
}
