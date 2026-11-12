"use client";

import * as React from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

let isMermaidInitialized = false;

function ensureMermaidInitialized(): void {
  if (!isMermaidInitialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
    });
    isMermaidInitialized = true;
  }
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const rawId = React.useId();
  const baseId = React.useMemo(
    () => rawId.replace(/[^a-zA-Z0-9]/g, "") || "diagram",
    [rawId],
  );
  const renderCountRef = React.useRef(0);

  const normalizedChart = typeof chart === "string" ? chart.trim() : "";

  const [svgContent, setSvgContent] = React.useState<string | null>(null);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(Boolean(normalizedChart));

  React.useEffect(() => {
    let isMounted = true;

    if (!normalizedChart) {
      return () => {
        isMounted = false;
      };
    }

    renderCountRef.current += 1;
    const uniqueRenderId = `mermaid-${baseId}-${renderCountRef.current}-${Date.now()}`;

    async function renderDiagram() {
      try {
        ensureMermaidInitialized();

        const { svg } = await mermaid.render(uniqueRenderId, normalizedChart);

        if (isMounted) {
          if (typeof svg === "string" && svg.trim().length > 0) {
            setSvgContent(svg);
            setHasError(false);
          } else {
            setSvgContent(null);
            setHasError(true);
          }
        }
      } catch {
        if (isMounted) {
          setSvgContent(null);
          setHasError(true);
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

  if (!normalizedChart || hasError || (!isLoading && !svgContent)) {
    return (
      <figure className="glass-card my-8 overflow-hidden rounded-2xl p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 font-mono text-xs text-slate-400">
          <span className="text-cyan-400">
            {"// Diagrama de Arquitectura del Sistema (Vista Código)"}
          </span>
          <span className="text-indigo-300">Mermaid.js</span>
        </div>
        <pre className="overflow-x-auto rounded-xl border border-slate-800/90 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-slate-200">
          <code>{normalizedChart}</code>
        </pre>
      </figure>
    );
  }

  return (
    <figure className="glass-card my-8 overflow-hidden rounded-2xl p-4 sm:p-6">
      <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 font-mono text-xs text-slate-400">
        <span className="text-cyan-400">
          {"// Diagrama de Arquitectura del Sistema"}
        </span>
        <span className="text-indigo-300">Mermaid.js</span>
      </div>
      {isLoading ? (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <span>Inicializando esquema interactivo...</span>
          </div>
          <pre className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 font-mono text-xs leading-relaxed text-slate-300">
            <code>{normalizedChart}</code>
          </pre>
        </div>
      ) : (
        <div
          className="flex justify-center overflow-x-auto py-2 [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svgContent ?? "" }}
        />
      )}
    </figure>
  );
}
