"use client";

import type { Variants } from "framer-motion";
import {
  DURATION,
  EASE_OUT_EXPO,
  REVEAL_OFFSET_Y,
  REVEAL_VIEWPORT,
} from "@/components/motion/config";
import {
  MotionElement,
  type MotionTag,
} from "@/components/motion/MotionElement";

interface StaggerContainerProps {
  children: React.ReactNode;
  as?: MotionTag;
  className?: string;
  /** Separación entre hijos en segundos. */
  stagger?: number;
  /** Retardo antes del primer hijo en segundos. */
  delayChildren?: number;
  trigger?: "inView" | "mount";
}

/**
 * Orquesta la entrada en cascada de sus `StaggerItem` descendientes.
 */
export function StaggerContainer({
  children,
  as = "div",
  className,
  stagger = 0.08,
  delayChildren = 0,
  trigger = "inView",
}: StaggerContainerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: REVEAL_VIEWPORT };

  return (
    <MotionElement
      as={as}
      className={className}
      variants={variants}
      initial="hidden"
      {...triggerProps}
    >
      {children}
    </MotionElement>
  );
}

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
 * Hijo de `StaggerContainer`. Hereda el estado `hidden` → `visible`.
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
