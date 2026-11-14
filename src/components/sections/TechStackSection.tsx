import {
  CpuIcon,
  DatabaseIcon,
  GlobeIcon,
  LayersIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { stackLayers } from "@/data/stack";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { TechBadge } from "@/components/motion/TechBadge";

function getLayerVisuals(id: string) {
  if (id.includes("frontend") || id.includes("client")) {
    return {
      icon: GlobeIcon,
      aura: "border-cyan-500/35 bg-cyan-500/15 text-cyan-400 shadow-[0_0_20px_-4px_rgba(34,211,238,0.45)]",
      pillHover: "hover:border-cyan-400/50 hover:text-cyan-200",
      glow: "cyan" as const,
    };
  }
  if (id.includes("backend") || id.includes("api")) {
    return {
      icon: ServerIcon,
      aura: "border-indigo-500/35 bg-indigo-500/15 text-indigo-400 shadow-[0_0_20px_-4px_rgba(129,140,248,0.45)]",
      pillHover: "hover:border-indigo-400/50 hover:text-indigo-200",
      glow: "indigo" as const,
    };
  }
  if (id.includes("data") || id.includes("db")) {
    return {
      icon: DatabaseIcon,
      aura: "border-cyan-500/35 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_-4px_rgba(34,211,238,0.4)]",
      pillHover: "hover:border-cyan-400/50 hover:text-cyan-200",
      glow: "cyan" as const,
    };
  }
  if (id.includes("ai") || id.includes("vision") || id.includes("cv")) {
    return {
      icon: CpuIcon,
      aura: "border-indigo-500/35 bg-indigo-500/15 text-indigo-300 shadow-[0_0_20px_-4px_rgba(129,140,248,0.4)]",
      pillHover: "hover:border-indigo-400/50 hover:text-indigo-200",
      glow: "indigo" as const,
    };
  }
  if (id.includes("sec") || id.includes("devops") || id.includes("infra")) {
    return {
      icon: ShieldCheckIcon,
      aura: "border-emerald-500/35 bg-emerald-500/15 text-emerald-400 shadow-[0_0_20px_-4px_rgba(16,185,129,0.45)]",
      pillHover: "hover:border-emerald-400/50 hover:text-emerald-200",
      glow: "emerald" as const,
    };
  }
  return {
    icon: LayersIcon,
    aura: "border-cyan-500/35 bg-cyan-500/15 text-cyan-400 shadow-[0_0_20px_-4px_rgba(34,211,238,0.4)]",
    pillHover: "hover:border-cyan-400/50 hover:text-cyan-200",
    glow: "cyan" as const,
  };
}

export function TechStackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-20 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            05 // Capacidades Técnicas por Capa (Bento Grid)
          </span>
          <h2
            id="stack-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Stack Tecnológico y Ecosistema de Ingeniería
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            Herramientas y tecnologías organizadas por responsabilidad
            arquitectónica, aplicadas en proyectos reales.
          </p>
        </Reveal>

        {/* Cascada LAYER_01 → LAYER_05 */}
        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {stackLayers.map((layer, index) => {
            const visuals = getLayerVisuals(layer.id);
            const LayerIcon = visuals.icon;
            const bentoSpan =
              index < 2 ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <StaggerItem key={layer.id} className={bentoSpan}>
                <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl p-6">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex size-10 items-center justify-center rounded-xl border ${visuals.aura}`}
                      >
                        <LayerIcon className="size-4.5" />
                      </span>
                      <span className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                        LAYER_0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {layer.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-300">
                      {layer.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                    {layer.items.map((item) => (
                      <TechBadge
                        key={item}
                        className={`rounded-lg border border-slate-700/80 bg-slate-950/85 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition-colors ${visuals.pillHover}`}
                      >
                        {item}
                      </TechBadge>
                    ))}
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
