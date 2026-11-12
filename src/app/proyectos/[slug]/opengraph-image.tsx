import { ImageResponse } from "next/og";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  const title = project?.frontmatter.title ?? "Caso de Estudio de Ingeniería";
  const role = project?.frontmatter.role ?? "Desarrollador Full Stack End-to-End";
  const summary =
    project?.frontmatter.summary ??
    "Caso de estudio técnico sobre diseño de software y arquitectura distribuida.";
  const stack = project?.frontmatter.stack.slice(0, 7) ?? [
    "Next.js",
    "TypeScript",
    "Python",
    "Docker",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.18) 0%, transparent 45%)",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Barra superior estilo terminal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              borderRadius: "9999px",
              padding: "10px 22px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "17px",
                fontWeight: 600,
                color: "#7dd3fc",
              }}
            >
              ~/proyectos/{slug}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#94a3b8",
            }}
          >
            <span>Caso de Estudio Técnico</span>
            <span>•</span>
            <span style={{ color: "#34d399" }}>Producción</span>
          </div>
        </div>

        {/* Bloque central: Título, Rol y Resumen */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "monospace",
              fontSize: "18px",
              color: "#818cf8",
              fontWeight: 600,
            }}
          >
            <span>Rol:</span>
            <span style={{ color: "#e0e7ff" }}>{role}</span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: "1050px",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "1020px",
            }}
          >
            {summary}
          </p>
        </div>

        {/* Barra inferior: Stack del proyecto y Firma de autor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(51, 65, 85, 0.7)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              maxWidth: "800px",
            }}
          >
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  color: "#e2e8f0",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
              fontFamily: "monospace",
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#f8fafc" }}>
              Santiago Avirama
            </span>
            <span style={{ fontSize: "14px", color: "#38bdf8" }}>
              santiagoavirama.dev
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
