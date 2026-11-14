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

interface RevealProps {
  children: React.ReactNode;
  as?: MotionTag;
  className?: string;
  id?: string;
  /** Retardo de entrada en segundos. */
  delay?: number;
  /** Duración de la entrada (0.35s – 0.55s). */
  duration?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  /**
   * `false` mantiene el contenido 100% opaco desde el SSR (solo anima
   * `transform`). Útil para bloques candidatos a LCP en el Hero.
   */
  fade?: boolean;
  /** `mount` para contenido above-the-fold; `inView` para scroll. */
  trigger?: "inView" | "mount";
}

/**
 * Aparición vertical sutil (opacity + translateY).
 * El contenido hijo se renderiza en el servidor: solo el wrapper es cliente.
 */
export function Reveal({
  children,
  as = "div",
  className,
  id,
  delay = 0,
  duration = DURATION.base,
  y = REVEAL_OFFSET_Y,
  fade = true,
  trigger = "inView",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: fade ? 0 : 1, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };

  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: REVEAL_VIEWPORT };

  return (
    <MotionElement
      as={as}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      {...triggerProps}
    >
      {children}
    </MotionElement>
  );
}
