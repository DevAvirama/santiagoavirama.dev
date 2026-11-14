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
 * 1. Cuadrícula de puntos base (`rgba(255,255,255,0.11)` 1px cada 26px).
 * 2. Spotlight esférico discreto en toda la página (`window` `pointermove`
 *    con `useMotionValue` + `useSpring` + `useMotionTemplate`, 0 re-renders):
 *    - Resplandor esférico de 380px (`rgba(16,185,129,0.045)` -> `transparent 75%`)
 *    - Segunda malla de puntos esmeralda (`rgba(16,185,129,0.18)`) revelada
 *      mediante máscara radial ligada al cursor.
 * 3. Rieles arquitectónicos decorativos en el fondo fijo (`hidden xl:block`)
 *    sin limitar ni encerrar los contenedores de contenido.
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

  const sphericalSpotlight = useMotionTemplate`radial-gradient(380px circle at ${springX}px ${springY}px, rgba(16, 185, 129, 0.045), transparent 75%)`;
  const dotSpotlightMask = useMotionTemplate`radial-gradient(240px circle at ${springX}px ${springY}px, #000 0%, transparent 100%)`;

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
      {/* 1. Cuadrícula de puntos base en todo el fondo (26px, opacidad 0.11) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.11) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* 2a. Resplandor esférico sutil ligado al cursor (380px, 0.045 -> transparent 75%) */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          background: sphericalSpotlight,
          opacity: pointerOpacity,
        }}
      />

      {/* 2b. Segunda capa de puntos esmeralda discreta (opacidad 0.18) */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16, 185, 129, 0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: dotSpotlightMask,
          WebkitMaskImage: dotSpotlightMask,
          opacity: pointerOpacity,
        }}
      />

      {/* Orbes ambientales laterales desplazados suavemente con el scroll */}
      <motion.div
        className="absolute top-[14%] -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/[0.03] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : leftOrbTransform,
        }}
      />
      <motion.div
        className="absolute top-[48%] -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.03] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : rightOrbTransform,
        }}
      />

      {/* 3. Rieles arquitectónicos decorativos en el fondo fijo (Desktop xl+) */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 border-x border-slate-800/45 xl:block">
        {/* Indicador vertical de progreso de scroll en el riel izquierdo */}
        <motion.div
          className="absolute top-0 bottom-0 -left-px w-[1.5px] origin-top bg-gradient-to-b from-emerald-400/60 via-emerald-500/40 to-cyan-400/50 shadow-[0_0_8px_rgba(16,185,129,0.45)]"
          style={{
            scaleY: shouldReduceMotion ? 1 : scrollYProgress,
          }}
        />

        {/* Marcas de intersección (+) y ticks horizontales */}
        {RAIL_TICKS.map((top) => (
          <div key={top} style={{ top }} className="absolute inset-x-0">
            <span className="absolute -left-1 flex -translate-y-1/2 items-center">
              <span className="h-px w-2 bg-emerald-500/15" />
              <span className="-ml-1 font-mono text-[10px] leading-none text-emerald-400/25">
                +
              </span>
            </span>
            <span className="absolute -right-1 flex -translate-y-1/2 items-center">
              <span className="-mr-1 font-mono text-[10px] leading-none text-emerald-400/25">
                +
              </span>
              <span className="h-px w-2 bg-emerald-500/15" />
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
                isLeft
                  ? "-left-3 -translate-x-full flex-row-reverse"
                  : "-right-3 translate-x-full"
              }`}
            >
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                className="text-emerald-400/25"
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
              <span className="font-mono text-[10px] tracking-[0.18em] whitespace-nowrap text-slate-400/30">
                {coord.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
