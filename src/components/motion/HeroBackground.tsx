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

interface AmbientOrb {
  id: string;
  className: string;
  keyframes: string[];
  duration: number;
}

const AMBIENT_ORBS: AmbientOrb[] = [
  {
    id: "orb-emerald",
    className:
      "absolute -top-24 left-[12%] h-[26rem] w-[26rem] rounded-full bg-emerald-500/[0.04] blur-3xl",
    keyframes: [
      "translate3d(0px, 0px, 0px)",
      "translate3d(42px, 26px, 0px)",
      "translate3d(-24px, 40px, 0px)",
    ],
    duration: 20,
  },
  {
    id: "orb-cyan",
    className:
      "absolute right-[10%] -bottom-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.04] blur-3xl",
    keyframes: [
      "translate3d(0px, 0px, 0px)",
      "translate3d(-44px, -28px, 0px)",
      "translate3d(26px, -38px, 0px)",
    ],
    duration: 24,
  },
];

/**
 * Fondo arquitectónico acelerado por GPU exclusivo del Hero:
 * - Blueprint Dot-Grid con máscara radial
 * - Spotlight de 450px controlado con `useMotionValue` + `useMotionTemplate`
 * - 2 orbes ambientales lentos animados con `transform: translate3d(...)`
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
      {/* 1. Blueprint Dot-Grid (1px cada 24px, opacidad 0.07) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(248, 250, 252, 0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      {/* Spotlight interactivo sin re-renders; oculto en dispositivos táctiles */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 [@media(pointer:coarse)]:hidden"
        style={{
          background: spotlightBackground,
          opacity: spotlightOpacity,
        }}
      />

      {/* 2. Orbes ambientales lentos (solo transform: translate3d) */}
      {AMBIENT_ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className={orb.className}
          animate={
            shouldReduceMotion
              ? { transform: "translate3d(0px, 0px, 0px)" }
              : { transform: orb.keyframes }
          }
          transition={{
            duration: orb.duration,
            repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3. Trazas SVG ortogonales en los bordes laterales */}
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
