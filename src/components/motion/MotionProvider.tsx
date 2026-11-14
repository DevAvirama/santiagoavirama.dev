"use client";

import { MotionConfig } from "framer-motion";
import { baseTransition } from "@/components/motion/config";

/**
 * Proveedor global de movimiento.
 * `reducedMotion="user"` desactiva las animaciones de transform cuando el
 * sistema operativo declara `prefers-reduced-motion: reduce`.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={baseTransition}>
      {children}
    </MotionConfig>
  );
}
