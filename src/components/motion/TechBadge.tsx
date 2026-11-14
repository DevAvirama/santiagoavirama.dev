"use client";

import { motion } from "framer-motion";
import { hoverTransition } from "@/components/motion/config";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Badge tecnológico con micro-interacción sutil (translateY + scale).
 */
export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={hoverTransition}
    >
      {children}
    </motion.span>
  );
}
