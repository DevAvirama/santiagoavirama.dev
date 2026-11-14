"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import {
  CpuIcon,
  ShieldCheckIcon,
  TerminalIcon,
  WorkflowIcon,
} from "lucide-react";
import {
  DURATION,
  EASE_OUT_EXPO,
  hoverTransition,
} from "@/components/motion/config";
import { StatusPulse } from "@/components/motion/StatusPulse";
import { TerminalCursor } from "@/components/motion/TerminalCursor";

type TabId = "stack.ts" | "security.ts" | "architecture.ts";

interface TabDefinition {
  id: TabId;
  label: string;
  badge: string;
}

const TABS: TabDefinition[] = [
  { id: "stack.ts", label: "stack.ts", badge: "Full Stack + IA" },
  { id: "security.ts", label: "security.ts", badge: "ISO 27001" },
  { id: "architecture.ts", label: "architecture.ts", badge: "Hexagonal" },
];

const haloVariants: Variants = {
  rest: { opacity: 0.7, transition: hoverTransition },
  hover: { opacity: 1, transition: hoverTransition },
};

const windowVariants: Variants = {
  rest: { y: 0, transition: hoverTransition },
  hover: { y: -3, transition: hoverTransition },
};

const codeGlowVariants: Variants = {
  rest: { opacity: 0, transition: hoverTransition },
  hover: { opacity: 1, transition: hoverTransition },
};

const panelTransition = { duration: DURATION.fast, ease: EASE_OUT_EXPO };

function toDomId(tab: TabId): string {
  return tab.replace(".", "-");
}

export function CodeShowcaseCard() {
  const [activeTab, setActiveTab] = React.useState<TabId>("stack.ts");

  const panelProps = (tab: TabId) => {
    const isActive = activeTab === tab;
    return {
      id: `panel-${toDomId(tab)}`,
      role: "tabpanel",
      "aria-labelledby": `tab-${toDomId(tab)}`,
      "aria-hidden": !isActive,
      inert: !isActive,
      initial: false,
      animate: isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 },
      transition: panelTransition,
      className: `space-y-1.5 [grid-area:1/1] ${isActive ? "" : "pointer-events-none"}`,
    } as const;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE_OUT_EXPO }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="relative"
      >
        {/* Halo luminoso trasero (solo anima opacity) */}
        <motion.div
          aria-hidden="true"
          variants={haloVariants}
          className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-emerald-500/15 blur-2xl"
        />

        <motion.div
          variants={windowVariants}
          className="glass-card relative overflow-hidden border border-slate-700/70 bg-slate-900/75 shadow-2xl shadow-slate-950/90"
        >
          {/* Reflejo superior */}
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          />

          {/* Barra superior de ventana IDE */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-rose-500/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs font-medium text-slate-300">
                santiago.config.ts
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
              <StatusPulse
                sizeClassName="size-1.5"
                glowClassName="shadow-[0_0_6px_rgba(52,211,153,0.8)]"
              />
              strict: true
            </span>
          </div>

          {/* Pestañas interactivas */}
          <div
            role="tablist"
            aria-label="Configuración de ingeniería de Santiago Avirama"
            className="flex border-b border-slate-800/80 bg-slate-950/50 px-2 pt-1.5 font-mono text-xs"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${toDomId(tab.id)}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${toDomId(tab.id)}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 rounded-t-lg px-3 py-2 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none ${
                    isActive
                      ? "bg-slate-900/90 text-cyan-300"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="code-tab-underline"
                      transition={panelTransition}
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cuerpo de código con resaltado de sintaxis */}
          <div className="relative p-5 font-mono text-xs leading-relaxed sm:text-[13px]">
            {/* Resaltado sutil del bloque de código en hover (solo opacity) */}
            <motion.span
              aria-hidden="true"
              variants={codeGlowVariants}
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/[0.04] via-transparent to-indigo-400/[0.05]"
            />
            {/* Todas las pestañas se renderizan en el SSR (indexables) y se
                apilan en la misma celda de grid para un crossfade sin saltos. */}
            <div className="relative grid">
                <motion.div {...panelProps("stack.ts")}>
                  <div className="text-slate-500">
                    {"// Ecosistema Full Stack End-to-End & Visión Artificial"}
                  </div>
                  <div>
                    <span className="text-indigo-400">export const</span>{" "}
                    <span className="text-cyan-300">engineerProfile</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">name:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Santiago Avirama&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">role:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Full Stack End-to-End &amp; Scrum Master&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">frontend:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-200">&quot;Next.js&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;TypeScript&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;Flutter&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">backend:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-200">&quot;FastAPI&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;Django 5.2&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;Node.js&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">visionAI:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-indigo-300">&quot;YOLOv8&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-indigo-300">&quot;OpenCV/ArUco&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-indigo-300">&quot;XGBoost&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{"}"}</span>{" "}
                    <span className="text-indigo-400">as const</span>
                    <span className="text-slate-400">;</span>
                    {activeTab === "stack.ts" && <TerminalCursor />}
                  </div>
                </motion.div>

                <motion.div {...panelProps("security.ts")}>
                  <div className="text-slate-500">
                    {"// Gobernanza TI, Ciberseguridad & Hardening"}
                  </div>
                  <div>
                    <span className="text-indigo-400">export const</span>{" "}
                    <span className="text-cyan-300">securityPosture</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">isoStandard:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Auditor Interno ISO/IEC 27001:2022&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">certifier:</span>{" "}
                    <span className="text-cyan-200">
                      &quot;TÜV NORD + Google Cybersecurity&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">accessControl:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;JWT Stateless + RBAC Multi-Rol&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">containers:</span>{" "}
                    <span className="text-indigo-300">
                      &quot;Multi-Stage Docker (Non-Root UID)&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">headers:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-200">&quot;DENY&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;nosniff&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;Strict-Origin&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{"}"}</span>{" "}
                    <span className="text-indigo-400">as const</span>
                    <span className="text-slate-400">;</span>
                    {activeTab === "security.ts" && <TerminalCursor />}
                  </div>
                </motion.div>

                <motion.div {...panelProps("architecture.ts")}>
                  <div className="text-slate-500">
                    {"// Patrones Distribuídos, Datos & Offline-First"}
                  </div>
                  <div>
                    <span className="text-indigo-400">export const</span>{" "}
                    <span className="text-cyan-300">systemDesign</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">patterns:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-emerald-300">
                      &quot;Hexagonal (Ports &amp; Adapters)&quot;
                    </span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">&quot;Clean Arch&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">databases:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-200">&quot;PostgreSQL&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;TimescaleDB&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">fieldSync:</span>{" "}
                    <span className="text-indigo-300">
                      &quot;Offline-First Queue + UUID Idempotency&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">qualityGates:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-200">&quot;Pytest&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;Ruff&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-200">&quot;GitHub Actions&quot;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{"}"}</span>{" "}
                    <span className="text-indigo-400">as const</span>
                    <span className="text-slate-400">;</span>
                    {activeTab === "architecture.ts" && <TerminalCursor />}
                  </div>
                </motion.div>
            </div>
          </div>

          {/* Barra de estado inferior */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 bg-slate-950/80 px-4 py-2.5 font-mono text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-cyan-400">
                <TerminalIcon className="size-3" />
                <span>main*</span>
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <ShieldCheckIcon className="size-3" />
                <span>0 errors</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="inline-flex items-center gap-1">
                <WorkflowIcon className="size-3 text-indigo-400" />
                <span>TS 5.9 Strict</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <CpuIcon className="size-3 text-cyan-400" />
                <span>Linux x86_64</span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
