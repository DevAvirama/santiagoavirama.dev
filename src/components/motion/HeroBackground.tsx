"use client";

import { motion, useReducedMotion } from "framer-motion";

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

const HERO_ORBS: AmbientOrb[] = [
  {
    id: "hero-orb-emerald",
    className:
      "absolute -top-28 left-[18%] h-[24rem] w-[24rem] rounded-full bg-emerald-500/[0.04] blur-3xl",
    keyframes: [
      "translate3d(0px, 0px, 0px)",
      "translate3d(36px, 22px, 0px)",
      "translate3d(-20px, 32px, 0px)",
    ],
    duration: 20,
  },
  {
    id: "hero-orb-cyan",
    className:
      "absolute -top-16 right-[14%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/[0.04] blur-3xl",
    keyframes: [
      "translate3d(0px, 0px, 0px)",
      "translate3d(-38px, 26px, 0px)",
      "translate3d(22px, -24px, 0px)",
    ],
    duration: 24,
  },
];

/**
 * Acentos visuales exclusivos del Hero (sin tapar ni duplicar la cuadrícula
 * ni el spotlight global de `GlobalBackdrop`):
 * - Orbes superiores lentos (`translate3d`)
 * - Trazas SVG ortogonales laterales con pulsos de paquetes de datos
 */
export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Orbes ambientales superiores exclusivos del Hero */}
      {HERO_ORBS.map((orb) => (
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
