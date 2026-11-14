"use client";

import { motion, type Variants } from "framer-motion";
import { hoverTransition } from "@/components/motion/config";
import {
  MotionElement,
  type MotionTag,
} from "@/components/motion/MotionElement";

const cardVariants: Variants = {
  rest: { y: 0, transition: hoverTransition },
  hover: { y: -4, transition: hoverTransition },
};

const glowVariants: Variants = {
  rest: { opacity: 0, transition: hoverTransition },
  hover: { opacity: 1, transition: hoverTransition },
};

interface HoverCardProps {
  children: React.ReactNode;
  as?: MotionTag;
  className?: string;
  /** Tonalidad del borde iluminado. */
  glow?: "cyan" | "indigo" | "emerald";
}

const GLOW_STYLES: Record<NonNullable<HoverCardProps["glow"]>, string> = {
  cyan: "inset-ring-cyan-400/35 shadow-[inset_0_0_28px_-10px_rgba(34,211,238,0.45)]",
  indigo:
    "inset-ring-indigo-400/35 shadow-[inset_0_0_28px_-10px_rgba(129,140,248,0.45)]",
  emerald:
    "inset-ring-emerald-400/35 shadow-[inset_0_0_28px_-10px_rgba(52,211,153,0.45)]",
};

/**
 * Elevación sutil (translateY) + borde iluminado por opacidad en hover.
 * El halo es una capa estática cuya única propiedad animada es `opacity`.
 */
export function HoverCard({
  children,
  as = "div",
  className,
  glow = "cyan",
}: HoverCardProps) {
  return (
    <MotionElement
      as={as}
      className={`relative h-full ${className ?? ""}`}
      variants={cardVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.span
        aria-hidden="true"
        variants={glowVariants}
        className={`pointer-events-none absolute inset-0 z-0 rounded-[inherit] inset-ring-1 ${GLOW_STYLES[glow]}`}
      />
      {children}
    </MotionElement>
  );
}
