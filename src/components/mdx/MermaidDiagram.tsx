"use client";

import * as React from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const rawId = React.useId();
  const diagramId = React.useMemo(
    () => `mermaid-svg-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`,
    [rawId],
  );
  const [svgContent, setSvgContent] = React.useState<string | null>(null);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    async function renderDiagram() {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "strict",
          fontFamily: "var(--font-jetbrains-mono), monospace",
        });

        const { svg } = await mermaid.render(diagramId, chart.trim());
        if (isMounted) {
          setSvgContent(svg);
          setHasError(false);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    void renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart, diagramId]);

  if (hasError) {
    return (
      <div className="glass-card my-6 rounded-2xl p-4">
        <p className="mb-2 font-mono text-xs text-amber-400">
          Diagrama de arquitectura (Mermaid):
        </p>
        <pre className="overflow-x-auto font-mono text-xs text-slate-300">
          <code>{chart}</code>
        </pre>
      </div>
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
      {svgContent ? (
        <div
          className="flex justify-center overflow-x-auto py-2 [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <div className="flex h-48 items-center justify-center font-mono text-xs text-slate-400">
          Renderizando diagrama de arquitectura...
        </div>
      )}
    </figure>
  );
}
