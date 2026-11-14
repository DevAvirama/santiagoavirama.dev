"use client";

import type { Variants } from "framer-motion";
import { REVEAL_VIEWPORT } from "@/components/motion/config";
import {
  MotionElement,
  type MotionTag,
} from "@/components/motion/MotionElement";

interface StaggerGroupProps {
  children: React.ReactNode;
  as?: MotionTag;
  className?: string;
  /** Separación entre hijos en segundos (default `0.06`). */
  stagger?: number;
  /** Retardo antes del primer hijo en segundos. */
  delayChildren?: number;
  trigger?: "inView" | "mount";
}

/**
 * Orquesta la entrada en cascada de sus `StaggerItem` descendientes.
 */
export function StaggerGroup({
  children,
  as = "div",
  className,
  stagger = 0.06,
  delayChildren = 0,
  trigger = "inView",
}: StaggerGroupProps) {
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
