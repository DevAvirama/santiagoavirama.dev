"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface RailCoordinate {
  id: string;
  label: string;
  top: string;
  side: "left" | "right";
}

const RAIL_COORDINATES: RailCoordinate[] = [
  { id: "coord-01", label: "01 // ARCHITECTURE", top: "16%", side: "left" },
  { id: "coord-02", label: "02 // STACK", top: "40%", side: "right" },
  { id: "coord-03", label: "03 // CREDENTIALS", top: "64%", side: "left" },
  { id: "coord-04", label: "04 // LAB", top: "84%", side: "right" },
];

const RAIL_TICKS = ["12%", "28%", "46%", "62%", "78%", "92%"] as const;

/**
 * Fondo arquitectónico interactivo global (`RootLayout`):
 * 1. Cuadrícula de puntos nítida (`rgba(255,255,255,0.14)` 1px cada 24px).
 * 2. Spotlight esférico interactivo en toda la página (`window` `pointermove`
 *    con `useMotionValue` + `useSpring` + `useMotionTemplate`, 0 re-renders):
 *    - Resplandor esférico ambiental de 550px (esmeralda + cian)
 *    - Segunda malla de puntos esmeralda (`rgba(16,185,129,0.35)`) revelada
 *      mediante máscara radial ligada al cursor.
 * 3. Rieles arquitectónicos en los flancos (`hidden xl:block`) con nodos SVG,
 *    coordenadas técnicas y barra vertical de progreso de scroll (`scaleY`).
 */
export function GlobalBackdrop() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const pointerX = useMotionValue(-999);
  const pointerY = useMotionValue(-999);
  const pointerOpacity = useMotionValue(0);

  const springX = useSpring(pointerX, {
    damping: 30,
    stiffness: 260,
    mass: 0.4,
  });
  const springY = useSpring(pointerY, {
    damping: 30,
    stiffness: 260,
    mass: 0.4,
  });

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      pointerOpacity.set(1);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerOpacity, pointerX, pointerY, shouldReduceMotion]);

  const sphericalSpotlight = useMotionTemplate`radial-gradient(550px circle at ${springX}px ${springY}px, rgba(16, 185, 129, 0.085), rgba(6, 182, 212, 0.03) 45%, transparent 80%)`;
  const dotSpotlightMask = useMotionTemplate`radial-gradient(280px circle at ${springX}px ${springY}px, #000 0%, transparent 100%)`;

  const leftOrbY = useTransform(scrollYProgress, [0, 1], [-40, 140]);
  const rightOrbY = useTransform(scrollYProgress, [0, 1], [60, -130]);

  const leftOrbTransform = useMotionTemplate`translate3d(0px, ${leftOrbY}px, 0px)`;
  const rightOrbTransform = useMotionTemplate`translate3d(0px, ${rightOrbY}px, 0px)`;
  const staticTransform = "translate3d(0px, 0px, 0px)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Cuadrícula de puntos base visible y nítida (24px) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2a. Resplandor esférico ambiental ligado al cursor en todo el viewport */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          background: sphericalSpotlight,
          opacity: pointerOpacity,
        }}
      />

      {/* 2b. Segunda capa de puntos esmeralda iluminada por máscara radial */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16, 185, 129, 0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: dotSpotlightMask,
          WebkitMaskImage: dotSpotlightMask,
          opacity: pointerOpacity,
        }}
      />

      {/* Orbes ambientales laterales desplazados suavemente con el scroll */}
      <motion.div
        className="absolute top-[14%] -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/[0.035] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : leftOrbTransform,
        }}
      />
      <motion.div
        className="absolute top-[48%] -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.035] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : rightOrbTransform,
        }}
      />

      {/* 3. Estructuras arquitectónicas en los flancos vacíos (Desktop xl+) */}
      <div className="relative mx-auto hidden h-full max-w-7xl border-x border-white/[0.06] xl:block">
        {/* Indicador vertical de progreso de scroll en el riel izquierdo */}
        <motion.div
          className="absolute top-0 bottom-0 -left-px w-[1.5px] origin-top bg-gradient-to-b from-emerald-400/75 via-emerald-500/50 to-cyan-400/60 shadow-[0_0_10px_rgba(16,185,129,0.55)]"
          style={{
            scaleY: shouldReduceMotion ? 1 : scrollYProgress,
          }}
        />

        {/* Marcas de intersección (+) y ticks horizontales */}
        {RAIL_TICKS.map((top) => (
          <div key={top} style={{ top }} className="absolute inset-x-0">
            <span className="absolute -left-1 flex -translate-y-1/2 items-center">
              <span className="h-px w-2 bg-emerald-500/20" />
              <span className="-ml-1 font-mono text-[10px] leading-none text-emerald-400/30">
                +
              </span>
            </span>
            <span className="absolute -right-1 flex -translate-y-1/2 items-center">
              <span className="-mr-1 font-mono text-[10px] leading-none text-emerald-400/30">
                +
              </span>
              <span className="h-px w-2 bg-emerald-500/20" />
            </span>
          </div>
        ))}

        {/* Coordenadas técnicas y nodos de conexión SVG en ambos rieles */}
        {RAIL_COORDINATES.map((coord) => {
          const isLeft = coord.side === "left";
          return (
            <div
              key={coord.id}
              style={{ top: coord.top }}
              className={`absolute flex -translate-y-1/2 items-center gap-2 ${
                isLeft ? "-left-3 -translate-x-full flex-row-reverse" : "-right-3 translate-x-full"
              }`}
            >
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                className="text-emerald-400/30"
              >
                <path
                  d={isLeft ? "M 22 6 H 8 L 4 2" : "M 0 6 H 14 L 18 2"}
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx={isLeft ? 3 : 19}
                  cy="2"
                  r="1.75"
                  fill="currentColor"
                />
              </svg>
              <span className="font-mono text-[10px] tracking-[0.18em] whitespace-nowrap text-slate-400/35">
                {coord.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
