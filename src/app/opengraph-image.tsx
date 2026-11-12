import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Santiago Avirama — Desarrollador Full Stack End-to-End | Arquitecturas Web, IA y Seguridad desde el Diseño";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const stack = [
    "Next.js App Router",
    "TypeScript",
    "Python / FastAPI",
    "YOLOv8 & OpenCV",
    "PostgreSQL",
    "Docker Multi-Stage",
    "ISO/IEC 27001",
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
            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.16) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.16) 0%, transparent 45%)",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Barra superior de terminal */}
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
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "9999px",
              padding: "10px 20px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#34d399",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "18px",
                fontWeight: 600,
                color: "#7dd3fc",
              }}
            >
              ~/santiagoavirama.dev
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#94a3b8",
            }}
          >
            <span>Popayán, Colombia</span>
            <span>•</span>
            <span style={{ color: "#38bdf8" }}>@DevAvirama</span>
          </div>
        </div>

        {/* Sección central con tipografía y titular */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Santiago Avirama
          </h1>

          <p
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#38bdf8",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Desarrollador Full Stack End-to-End
          </p>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "960px",
            }}
          >
            Arquitecturas Web, Sistemas Distribuidos, Visión Artificial y
            Seguridad desde el Diseño.
          </p>
        </div>

        {/* Barra inferior con pills de stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderTop: "1px solid rgba(51, 65, 85, 0.7)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(71, 85, 105, 0.7)",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  fontSize: "15px",
                  fontFamily: "monospace",
                  color: "#e2e8f0",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
