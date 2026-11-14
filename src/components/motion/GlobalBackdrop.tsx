"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const RAIL_MARKS = ["14%", "34%", "54%", "74%", "90%"] as const;

/**
 * Fondo arquitectónico global montado en `RootLayout`:
 * - Textura continua sutil de puntos (1px cada 28px, opacidad 0.045)
 * - Rieles laterales (`max-w-7xl`) con marcas de intersección en desktop (`xl+`)
 * - Dos gradientes radiales laterales ligados al scroll vía `translate3d`
 */
export function GlobalBackdrop() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const leftOrbY = useTransform(scrollYProgress, [0, 1], [-36, 128]);
  const rightOrbY = useTransform(scrollYProgress, [0, 1], [48, -116]);

  const leftOrbTransform = useMotionTemplate`translate3d(0px, ${leftOrbY}px, 0px)`;
  const rightOrbTransform = useMotionTemplate`translate3d(0px, ${rightOrbY}px, 0px)`;

  const staticTransform = "translate3d(0px, 0px, 0px)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Textura base continua de puntos (1px cada 28px, opacidad 0.045) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(248, 250, 252, 0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. Rieles arquitectónicos laterales (Desktop xl+) */}
      <div className="relative mx-auto hidden h-full max-w-7xl border-x border-white/[0.04] xl:block">
        {RAIL_MARKS.map((top) => (
          <div key={top} style={{ top }} className="absolute inset-x-0">
            {/* Marca izquierda */}
            <span className="absolute -left-1 flex -translate-y-1/2 items-center">
              <span className="h-px w-2 bg-emerald-500/15" />
              <span className="-ml-1 font-mono text-[11px] leading-none text-emerald-500/20">
                +
              </span>
            </span>

            {/* Marca derecha */}
            <span className="absolute -right-1 flex -translate-y-1/2 items-center">
              <span className="-mr-1 font-mono text-[11px] leading-none text-emerald-500/20">
                +
              </span>
              <span className="h-px w-2 bg-emerald-500/15" />
            </span>
          </div>
        ))}
      </div>

      {/* 3. Resplandores ambientales laterales ligados al scroll (GPU-only) */}
      <motion.div
        className="absolute top-[16%] -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/[0.03] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : leftOrbTransform,
        }}
      />
      <motion.div
        className="absolute top-[46%] -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.03] blur-3xl"
        style={{
          transform: shouldReduceMotion ? staticTransform : rightOrbTransform,
        }}
      />
    </div>
  );
}
