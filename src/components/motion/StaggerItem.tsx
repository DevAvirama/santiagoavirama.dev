"use client";

import type { Variants } from "framer-motion";
import {
  DURATION,
  EASE_OUT_EXPO,
  REVEAL_OFFSET_Y,
} from "@/components/motion/config";
import {
  MotionElement,
  type MotionTag,
} from "@/components/motion/MotionElement";

interface StaggerItemProps {
  children: React.ReactNode;
  as?: MotionTag;
  className?: string;
  y?: number;
  /** `false` conserva opacidad 1 desde SSR (solo transform). */
  fade?: boolean;
  duration?: number;
}

/**
 * Hijo de `StaggerGroup`. Hereda el estado `hidden` → `visible`.
 */
export function StaggerItem({
  children,
  as = "div",
  className,
  y = REVEAL_OFFSET_Y,
  fade = true,
  duration = DURATION.base,
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: fade ? 0 : 1, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <MotionElement as={as} className={className} variants={variants}>
      {children}
    </MotionElement>
  );
}
