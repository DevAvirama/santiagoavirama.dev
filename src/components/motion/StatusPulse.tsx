"use client";

import { motion, useReducedMotion } from "framer-motion";

interface StatusPulseProps {
  /** Clase de color de fondo, p. ej. `bg-emerald-400`. */
  colorClassName?: string;
  /** Clase de tamaño, p. ej. `size-2`. */
  sizeClassName?: string;
  /** Sombra luminosa del punto central. */
  glowClassName?: string;
  className?: string;
}

/**
 * Indicador de estado activo con un pulso discreto (scale + opacity de un
 * anillo exterior). Estático con `prefers-reduced-motion`.
 */
export function StatusPulse({
  colorClassName = "bg-emerald-400",
  sizeClassName = "size-2",
  glowClassName = "shadow-[0_0_8px_rgba(52,211,153,0.9)]",
  className,
}: StatusPulseProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 ${sizeClassName} ${className ?? ""}`}
    >
      {!shouldReduceMotion && (
        <motion.span
          className={`absolute inset-0 rounded-full ${colorClassName}`}
          initial={{ scale: 1, opacity: 0.55 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.4,
          }}
        />
      )}
      <span
        className={`relative inline-flex rounded-full ${sizeClassName} ${colorClassName} ${glowClassName}`}
      />
    </span>
  );
}
