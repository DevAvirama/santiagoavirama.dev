"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "cn";

interface SpotlightCardProps {
  children: React.ReactNode;
  as?: "div" | "article";
  className?: string;
  /** Activa micro-elevación `-translate-y-0.5` en hover (default `true`). */
  liftOnHover?: boolean;
}

/**
 * Tarjeta interactiva con spotlight reactivo al cursor (0 re-renders):
 * - Halo radial de 320px (`rgba(16, 185, 129, 0.12)`) controlado con
 *   `useMotionValue` + `useMotionTemplate`
 * - Borde `border-white/10 hover:border-emerald-500/40`
 * - Fondo translúcido `bg-zinc-950/70 backdrop-blur-sm` para dejar pasar
 *   sutilmente la textura de puntos de `GlobalBackdrop`
 */
export function SpotlightCard({
  children,
  as = "div",
  className,
  liftOnHover = true,
}: SpotlightCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const spotlightOpacity = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.12), transparent 80%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handlePointerLeave = () => {
    spotlightOpacity.set(0);
  };

  const sharedClassName = cn(
    "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.22),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
    liftOnHover && "hover:-translate-y-0.5",
    className,
  );

  const overlay = (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
      style={{
        background: spotlightBackground,
        opacity: spotlightOpacity,
      }}
    />
  );

  if (as === "article") {
    return (
      <article
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={sharedClassName}
      >
        {overlay}
        {children}
      </article>
    );
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={sharedClassName}
    >
      {overlay}
      {children}
    </div>
  );
}
