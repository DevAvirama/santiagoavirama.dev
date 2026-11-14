import type { Transition } from "framer-motion";

/**
 * Tokens de movimiento compartidos.
 * Solo se animan propiedades aceleradas por GPU (opacity / transform).
 */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.45,
  slow: 0.55,
} as const;

/** Viewport común para todas las apariciones por scroll. */
export const REVEAL_VIEWPORT = { once: true, amount: 0.15 } as const;

/** Desplazamiento vertical sutil para las apariciones. */
export const REVEAL_OFFSET_Y = 16;

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT_EXPO,
};

export const hoverTransition: Transition = {
  duration: DURATION.fast,
  ease: EASE_OUT_EXPO,
};
