export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
    >
      {/* Cuadrícula técnica sutil con máscara radial */}
      <div className="bg-tech-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,#000_55%,transparent_100%)]" />

      {/* Orbes ambientales difuminados (Cian e Índigo) */}
      <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-28 right-1/5 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[32rem] rounded-full bg-cyan-500/6 blur-3xl" />

      {/* Nodos / partículas discretas de ingeniería */}
      <div className="absolute top-32 left-[14%] size-1.5 rounded-full bg-cyan-400/40 shadow-[0_0_12px_2px_rgba(56,189,248,0.45)]" />
      <div className="absolute top-64 right-[18%] size-1.5 rounded-full bg-indigo-400/40 shadow-[0_0_12px_2px_rgba(129,140,248,0.45)]" />
      <div className="absolute top-[52%] left-[8%] size-1 rounded-full bg-emerald-400/35 shadow-[0_0_10px_2px_rgba(52,211,153,0.35)]" />
      <div className="absolute bottom-36 right-[12%] size-1.5 rounded-full bg-cyan-400/35 shadow-[0_0_12px_2px_rgba(56,189,248,0.35)]" />
    </div>
  );
}
