import { LayersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { stackLayers } from "@/data/stack";

export function TechStackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            05 // Capacidades Técnicas por Capa
          </span>
          <h2
            id="stack-heading"
            className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
          >
            Stack Tecnológico y Ecosistema de Ingeniería
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Herramientas y tecnologías organizadas por responsabilidad
            arquitectónica, aplicadas en proyectos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stackLayers.map((layer, index) => (
            <div
              key={layer.id}
              className={`flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 ${
                index === stackLayers.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-emerald-400">
                    <LayersIcon className="size-4" />
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    LAYER_0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100">
                  {layer.title}
                </h3>

                <p className="text-xs leading-relaxed text-zinc-400">
                  {layer.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-4">
                {layer.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-zinc-800 bg-zinc-950/90 font-mono text-[11px] text-zinc-200"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
