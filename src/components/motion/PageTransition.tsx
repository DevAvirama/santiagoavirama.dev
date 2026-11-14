"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DURATION, EASE_OUT_EXPO } from "@/components/motion/config";

/**
 * Transición sutil de entrada por cambio de ruta en App Router.
 * Usa `usePathname()` como `key` para animar también cambios entre
 * slugs hermanos (p. ej. `/proyectos/porcitech` ↔ `/proyectos/doc-scan`).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
