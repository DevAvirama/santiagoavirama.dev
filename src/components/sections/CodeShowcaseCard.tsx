"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CpuIcon,
  ShieldCheckIcon,
  TerminalIcon,
  WorkflowIcon,
} from "lucide-react";

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

export function CodeShowcaseCard() {
  const [activeTab, setActiveTab] = React.useState<TabId>("stack.ts");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      {/* Halo luminoso trasero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-emerald-500/15 opacity-80 blur-2xl"
      />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
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
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-t-lg px-3 py-2 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:outline-none ${
                  isActive
                    ? "bg-slate-900/90 text-cyan-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Cuerpo de código con resaltado de sintaxis */}
        <div className="p-5 font-mono text-xs leading-relaxed sm:text-[13px]">
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "stack.ts" && (
              <motion.div
                key="stack.ts"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-1.5"
              >
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
                </div>
              </motion.div>
            )}

            {activeTab === "security.ts" && (
              <motion.div
                key="security.ts"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-1.5"
              >
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
                </div>
              </motion.div>
            )}

            {activeTab === "architecture.ts" && (
              <motion.div
                key="architecture.ts"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-1.5"
              >
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
  );
}
