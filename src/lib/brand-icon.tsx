/**
 * Elemento visual compartido para los iconos dinámicos generados con `next/og`.
 * Solo usa propiedades compatibles con Satori (`display: "flex"`, inline styles).
 */
export function BrandIconMarkup({ dimension }: { dimension: 32 | 180 }) {
  const isApple = dimension === 180;
  const radius = isApple ? 36 : 6;
  const borderWidth = isApple ? 3 : 1;
  const fontSize = isApple ? 78 : 16;
  const letterSpacing = isApple ? "-0.04em" : "-0.05em";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.16) 0%, transparent 72%)",
        borderRadius: radius,
        border: `${borderWidth}px solid rgba(16, 185, 129, 0.35)`,
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontWeight: 800,
        fontSize,
        letterSpacing,
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#f8fafc" }}>S</span>
      <span style={{ color: "#10b981" }}>A</span>
    </div>
  );
}
