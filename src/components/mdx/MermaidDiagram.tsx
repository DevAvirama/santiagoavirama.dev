"use client";

import * as React from "react";
import mermaid from "mermaid";
import { Reveal } from "@/components/motion/Reveal";

interface MermaidDiagramProps {
  chart: string;
}

let isMermaidInitialized = false;

function ensureMermaidInitialized(): void {
  if (!isMermaidInitialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
    });
    isMermaidInitialized = true;
  }
}

function sanitizeMermaidChart(input: unknown): string {
  if (typeof input !== "string") {
    return "";
  }
  return input
    .replace(/<[\u2013\u2014]+>/g, "<-->")
    .replace(/[\u2013\u2014]+>/g, "-->")
    .replace(/<[\u2013\u2014]+/g, "<--")
    .trim();
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const rawId = React.useId();
  const baseId = React.useMemo(
    () => rawId.replace(/[^a-zA-Z0-9]/g, "") || "diagram",
    [rawId],
  );
  const renderCountRef = React.useRef(0);

  const normalizedChart = React.useMemo(
    () => sanitizeMermaidChart(chart),
    [chart],
  );

  const [svgContent, setSvgContent] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(Boolean(normalizedChart));

  React.useEffect(() => {
    let isMounted = true;

    if (!normalizedChart) {
      return () => {
        isMounted = false;
      };
    }

    renderCountRef.current += 1;
    const uniqueRenderId = `mermaid-${baseId}-${renderCountRef.current}`;

    async function renderDiagram() {
      try {
        ensureMermaidInitialized();

        const { svg } = await mermaid.render(uniqueRenderId, normalizedChart);

        if (isMounted) {
          if (typeof svg === "string" && svg.trim().length > 0) {
            setSvgContent(svg);
            setErrorMessage(null);
          } else {
            setSvgContent(null);
            setErrorMessage(
              "El motor Mermaid devolvió un diagrama vacío para esta entrada.",
            );
          }
        }
      } catch (err) {
        if (isMounted) {
          const msg =
            err instanceof Error
              ? err.message
              : "Error al renderizar la sintaxis del diagrama Mermaid.";
          setSvgContent(null);
          setErrorMessage(msg);
        }
      } finally {
        if (typeof document !== "undefined") {
          const leftoverTemp = document.getElementById(`d${uniqueRenderId}`);
          if (leftoverTemp) {
            leftoverTemp.remove();
          }
        }
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [baseId, normalizedChart]);

  if (!normalizedChart || errorMessage || (!isLoading && !svgContent)) {
    return (
      <Reveal amount={0.1} y={12}>
        <figure className="glass-card my-8 overflow-hidden rounded-2xl p-4 transition-colors duration-200 hover:border-emerald-500/40 sm:p-6">
          <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 font-mono text-xs text-slate-400">
            <span className="text-amber-400">
              {"// Diagrama de Arquitectura del Sistema (Fallback de Código)"}
            </span>
            <span className="text-indigo-300">Mermaid.js</span>
          </div>
          {errorMessage && (
            <p className="mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 font-mono text-xs text-amber-300">
              {errorMessage}
            </p>
          )}
          <pre className="overflow-x-auto rounded-xl border border-slate-800/90 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-slate-200 [font-variant-ligatures:none]">
            <code>{normalizedChart}</code>
          </pre>
        </figure>
      </Reveal>
    );
  }

  return (
    <Reveal amount={0.1} y={12}>
      <figure className="glass-card my-8 overflow-hidden rounded-2xl p-4 transition-colors duration-200 hover:border-emerald-500/40 sm:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 font-mono text-xs text-slate-400">
          <span className="text-cyan-400">
            {"// Diagrama de Arquitectura del Sistema"}
          </span>
          <span className="text-indigo-300">Mermaid.js</span>
        </div>
        {isLoading ? (
          <div className="flex h-44 items-center justify-center font-mono text-xs text-slate-400">
            <span>Inicializando esquema interactivo...</span>
          </div>
        ) : (
          <div
            className="flex justify-center overflow-x-auto py-2 [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svgContent ?? "" }}
          />
        )}
      </figure>
    </Reveal>
  );
}
