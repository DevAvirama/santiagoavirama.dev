"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

interface HeroPointerContextValue {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  spotlightOpacity: MotionValue<number>;
}

const HeroPointerContext = React.createContext<HeroPointerContextValue | null>(
  null,
);

interface HeroPointerContainerProps {
  children: React.ReactNode;
  className?: string;
  "aria-labelledby"?: string;
}

/**
 * Contenedor del Hero (`<section>`) que captura `onPointerMove` directamente
 * sobre `MotionValue`s para actualizar el spotlight sin re-renders en React.
 * Recibe `children` desde el Server Component `HeroSection` preservando el SSR.
 */
export function HeroPointerContainer({
  children,
  className,
  "aria-labelledby": ariaLabelledBy,
}: HeroPointerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-999);
  const pointerY = useMotionValue(-999);
  const spotlightOpacity = useMotionValue(0);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handlePointerLeave = () => {
    spotlightOpacity.set(0);
  };

  const contextValue = React.useMemo(
    () => ({ pointerX, pointerY, spotlightOpacity }),
    [pointerX, pointerY, spotlightOpacity],
  );

  return (
    <HeroPointerContext.Provider value={contextValue}>
      <section
        aria-labelledby={ariaLabelledBy}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={className}
      >
        {children}
      </section>
    </HeroPointerContext.Provider>
  );
}

interface TraceRoute {
  id: string;
  d: string;
  dashArray: string;
  dashOffsetFrom: number;
  dashOffsetTo: number;
  duration: number;
  delay: number;
  pulseColor: string;
}

const TRACE_ROUTES: TraceRoute[] = [
  {
    id: "edge-left-upper",
    d: "M 0 110 H 92 V 210 H 188",
    dashArray: "36 280",
    dashOffsetFrom: 316,
    dashOffsetTo: -36,
    duration: 9,
    delay: 0,
    pulseColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    id: "edge-left-lower",
    d: "M 0 470 H 72 V 370 H 164 V 310",
    dashArray: "28 290",
    dashOffsetFrom: 318,
    dashOffsetTo: -28,
    duration: 11,
    delay: 2.5,
    pulseColor: "rgba(34, 211, 238, 0.3)",
  },
  {
    id: "edge-right-mid",
    d: "M 1200 170 H 1100 V 290 H 1015 V 390 H 1200",
    dashArray: "40 380",
    dashOffsetFrom: 420,
    dashOffsetTo: -40,
    duration: 12,
    delay: 1.2,
    pulseColor: "rgba(16, 185, 129, 0.32)",
  },
];

/**
 * Capa arquitectónica exclusiva del Hero (sobre `GlobalBackdrop`):
 * - Spotlight interactivo de 450px controlado con `useMotionValue` +
 *   `useMotionTemplate` (sin re-renders ni duplicación del grid/orbes globales)
 * - Trazas SVG ortogonales laterales con pulso de flujo de datos
 */
export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();
  const context = React.useContext(HeroPointerContext);

  const fallbackX = useMotionValue(-999);
  const fallbackY = useMotionValue(-999);
  const fallbackOpacity = useMotionValue(0);

  const pointerX = context?.pointerX ?? fallbackX;
  const pointerY = context?.pointerY ?? fallbackY;
  const spotlightOpacity = context?.spotlightOpacity ?? fallbackOpacity;

  const spotlightBackground = useMotionTemplate`radial-gradient(450px circle at ${pointerX}px ${pointerY}px, rgba(16, 185, 129, 0.08), transparent 80%)`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Spotlight interactivo exclusivo del Hero; oculto en dispositivos táctiles */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          background: spotlightBackground,
          opacity: spotlightOpacity,
        }}
      />

      {/* Trazas SVG ortogonales en los bordes laterales */}
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-slate-100"
      >
        {TRACE_ROUTES.map((route) => (
          <g key={route.id}>
            <path
              d={route.d}
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
            <motion.path
              d={route.d}
              stroke={route.pulseColor}
              strokeWidth={1.25}
              strokeLinecap="round"
              strokeDasharray={route.dashArray}
              initial={{ strokeDashoffset: route.dashOffsetFrom }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { strokeDashoffset: route.dashOffsetTo }
              }
              transition={{
                duration: route.duration,
                delay: route.delay,
                repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
