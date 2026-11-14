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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={hoverTransition}
    >
      {children}
    </motion.span>
  );
}
