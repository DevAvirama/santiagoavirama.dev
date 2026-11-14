import {
  AwardIcon,
  BookMarkedIcon,
  CheckCircle2Icon,
  ClockIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  certificationsList,
  complementaryLearning,
  educationList,
} from "@/data/credentials";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";
import { TechBadge } from "@/components/motion/TechBadge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerContainer";

const workingPillars = [
  {
    title: "Orden Arquitectónico y Mantenibilidad",
    description:
      "Aplico Arquitectura Hexagonal, separación limpia de dominios y tipado estricto para que el software sea predecible, auditable y fácil de escalar en equipo.",
    icon: WorkflowIcon,
    accentBar: "from-cyan-400 to-blue-500",
    iconColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Liderazgo Técnico y Scrum Master",
    description:
      "Experiencia coordinando equipos multidisciplinarios (como en el ecosistema PorciTech), traduciendo requerimientos complejos en entregables iterativos claros.",
    icon: UsersIcon,
    accentBar: "from-indigo-400 to-violet-500",
    iconColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "Empatía Comercial y Trato con el Cliente",
    description:
      "Formación certificada por IBM y Unicomfacauca en comunicación interpersonal y gestión del servicio, asegurando entendimiento real del negocio antes de escribir código.",
    icon: HandshakeIcon,
    accentBar: "from-cyan-400 to-indigo-400",
    iconColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "Mentalidad Security-by-Design",
    description:
      "Respaldado como Auditor Interno ISO/IEC 27001:2022 y en Ciberseguridad por Google: validación de entradas, mínimo privilegio en contenedores y protección de datos desde el diseño.",
    icon: ShieldCheckIcon,
    accentBar: "from-emerald-400 to-cyan-400",
    iconColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  },
];

export function AboutAndCredentialsSection() {
  return (
    <section
      id="perfil"
      aria-labelledby="perfil-heading"
      className="scroll-mt-20 border-b border-slate-800/70 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            04 // Filosofía de Trabajo & Credenciales Verificables
          </span>
          <h2
            id="perfil-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Cómo Trabajo y Respaldo Académico
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            Ingeniería rigurosa combinada con comunicación clara, liderazgo
            colaborativo y estándares internacionales de seguridad de la
            información.
          </p>
        </Reveal>

        <StaggerContainer className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <HoverCard className="glass-card glass-card-hover relative overflow-hidden rounded-2xl p-5 pl-6">
                  {/* Barra de acento lateral luminosa */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-4 bottom-4 left-0 w-1 rounded-r-full bg-gradient-to-b ${pillar.accentBar} shadow-[0_0_12px_rgba(34,211,238,0.5)]`}
                  />
                  <div
                    className={`mb-3 inline-flex size-9 items-center justify-center rounded-xl border ${pillar.iconColor}`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                <GraduationCapIcon className="size-4 text-cyan-400" />
                <span>Formación Tecnológica Oficial</span>
              </h3>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <Reveal key={edu.id}>
                    <HoverCard className="glass-card glass-card-hover relative overflow-hidden rounded-2xl p-5 pl-6">
                      <span
                        aria-hidden="true"
                        className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full bg-gradient-to-b from-cyan-400 to-indigo-500"
                      />
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs text-cyan-400">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="mt-1 text-base font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {edu.institution}
                      </p>
                      <ul className="mt-3 space-y-1.5 border-t border-slate-800/80 pt-3 text-xs text-slate-300">
                        {edu.focus.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </HoverCard>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-indigo-300 uppercase">
                <BookMarkedIcon className="size-4 text-indigo-400" />
                <span>Formación Complementaria & Habilidades Blandas</span>
              </h3>

              <Reveal className="glass-card divide-y divide-slate-800/70 rounded-2xl">
                {complementaryLearning.map((course) => (
                  <div
                    key={`${course.name}-${course.issuer}`}
                    className="flex items-center justify-between gap-4 p-4 transition-colors hover:bg-slate-900/40"
                  >
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {course.name}
                      </p>
                      <p className="font-mono text-[11px] text-slate-400">
                        {course.issuer} • {course.date}
                      </p>
                    </div>
                    {course.credentialUrl && (
                      <a
                        href={course.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-cyan-400 hover:text-cyan-300 hover:underline"
                      >
                        <span>Verificar</span>
                        <ExternalLinkIcon className="size-3" />
                      </a>
                    )}
                  </div>
                ))}
              </Reveal>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-emerald-300 uppercase">
              <AwardIcon className="size-4 text-emerald-400" />
              <span>Certificaciones Internacionales & Gobernanza TI</span>
            </h3>

            <div className="space-y-4">
              {certificationsList.map((cert) => (
                <Reveal key={cert.id}>
                  <HoverCard
                    glow={cert.status === "verified" ? "emerald" : "indigo"}
                    className="glass-card glass-card-hover relative overflow-hidden rounded-2xl p-6 pl-7"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-5 bottom-5 left-0 w-1 rounded-r-full ${
                        cert.status === "verified"
                          ? "bg-gradient-to-b from-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                          : "bg-gradient-to-b from-amber-400 to-indigo-400"
                      }`}
                    />

                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {cert.status === "verified" ? (
                            <Badge className="border border-emerald-500/35 bg-emerald-500/15 font-mono text-[11px] text-emerald-300 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                              <CheckCircle2Icon className="mr-1 size-3" />
                              Verificada
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-amber-500/35 bg-amber-500/15 font-mono text-[11px] text-amber-300"
                            >
                              <ClockIcon className="mr-1 size-3" />
                              En preparación
                            </Badge>
                          )}
                          <span className="font-mono text-xs text-cyan-300/90">
                            {cert.category}
                          </span>
                        </div>

                        <h4 className="pt-1 text-base font-bold text-white sm:text-lg">
                          {cert.name}
                        </h4>
                        <p className="font-mono text-xs text-slate-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-cyan-500/35 bg-cyan-500/10 px-3 font-mono text-xs font-medium text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                        >
                          <span>Verificar credencial</span>
                          <ExternalLinkIcon className="size-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                      {cert.skills.map((skill) => (
                        <TechBadge
                          key={skill}
                          className="rounded-md border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] text-slate-200"
                        >
                          {skill}
                        </TechBadge>
                      ))}
                    </div>
                  </HoverCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
