"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  as?: "div" | "article";
  className?: string;
  /** Activa micro-elevación `-translate-y-0.5` en hover (default `true`). */
  liftOnHover?: boolean;
}

/**
 * Tarjeta interactiva con spotlight reactivo al cursor (0 re-renders):
 * - Contenedor `w-full h-full` con la paleta original azul pizarra oscuro
 *   (`bg-slate-900/55` / `#0d131f`, `border-slate-800/80`)
 * - Halo radial suave de 260px (`rgba(16, 185, 129, 0.055)`) controlado con
 *   `useMotionValue` + `useMotionTemplate`
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

  const spotlightBackground = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.055), transparent 80%)`;

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
    "relative h-full w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/55 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-[border-color,background-color,box-shadow,transform] duration-300 hover:border-emerald-500/35 hover:shadow-[0_0_28px_-8px_rgba(16,185,129,0.16),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
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
