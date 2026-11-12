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

const workingPillars = [
  {
    title: "Orden Arquitectónico y Mantenibilidad",
    description:
      "Aplico Arquitectura Hexagonal, separación limpia de dominios y tipado estricto para que el software sea predecible, auditable y fácil de escalar en equipo.",
    icon: WorkflowIcon,
  },
  {
    title: "Liderazgo Técnico y Scrum Master",
    description:
      "Experiencia coordinando equipos multidisciplinarios (como en el ecosistema PorciTech), traduciendo requerimientos complejos en entregables iterativos claros.",
    icon: UsersIcon,
  },
  {
    title: "Empatía Comercial y Trato con el Cliente",
    description:
      "Formación certificada por IBM y Unicomfacauca en comunicación interpersonal y gestión del servicio, asegurando entendimiento real del negocio antes de escribir código.",
    icon: HandshakeIcon,
  },
  {
    title: "Mentalidad Security-by-Design",
    description:
      "Respaldado como Auditor Interno ISO/IEC 27001:2022 y en Ciberseguridad por Google: validación de entradas, mínimo privilegio en contenedores y protección de datos desde el diseño.",
    icon: ShieldCheckIcon,
  },
];

export function AboutAndCredentialsSection() {
  return (
    <section
      id="perfil"
      aria-labelledby="perfil-heading"
      className="scroll-mt-20 border-b border-zinc-800/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            04 // Filosofía de Trabajo & Credenciales Verificables
          </span>
          <h2
            id="perfil-heading"
            className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl"
          >
            Cómo Trabajo y Respaldo Académico
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Ingeniería rigurosa combinada con comunicación clara, liderazgo
            colaborativo y estándares internacionales de seguridad de la
            información.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-emerald-400">
                  <Icon className="size-4" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-100">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                <GraduationCapIcon className="size-4 text-emerald-400" />
                <span>Formación Tecnológica Oficial</span>
              </h3>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs text-emerald-400">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="mt-1 text-base font-bold text-zinc-100">
                      {edu.degree}
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {edu.institution}
                    </p>
                    <ul className="mt-3 space-y-1.5 border-t border-zinc-800/80 pt-3 text-xs text-zinc-300">
                      {edu.focus.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                <BookMarkedIcon className="size-4 text-cyan-400" />
                <span>Formación Complementaria & Habilidades Blandas</span>
              </h3>

              <div className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800 bg-zinc-900/60">
                {complementaryLearning.map((course) => (
                  <div
                    key={`${course.name}-${course.issuer}`}
                    className="flex items-center justify-between gap-4 p-4"
                  >
                    <div>
                      <p className="text-xs font-semibold text-zinc-200">
                        {course.name}
                      </p>
                      <p className="font-mono text-[11px] text-zinc-400">
                        {course.issuer} • {course.date}
                      </p>
                    </div>
                    {course.credentialUrl && (
                      <a
                        href={course.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-cyan-400 hover:underline"
                      >
                        <span>Verificar</span>
                        <ExternalLinkIcon className="size-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <h3 className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              <AwardIcon className="size-4 text-emerald-400" />
              <span>Certificaciones Internacionales & Gobernanza TI</span>
            </h3>

            <div className="space-y-4">
              {certificationsList.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {cert.status === "verified" ? (
                          <Badge className="border border-emerald-500/30 bg-emerald-500/15 font-mono text-[11px] text-emerald-300">
                            <CheckCircle2Icon className="mr-1 size-3" />
                            Verificada
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-amber-500/30 bg-amber-500/10 font-mono text-[11px] text-amber-300"
                          >
                            <ClockIcon className="mr-1 size-3" />
                            En preparación
                          </Badge>
                        )}
                        <span className="font-mono text-xs text-zinc-400">
                          {cert.category}
                        </span>
                      </div>

                      <h4 className="pt-1 text-base font-bold text-zinc-100 sm:text-lg">
                        {cert.name}
                      </h4>
                      <p className="font-mono text-xs text-zinc-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 font-mono text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20"
                      >
                        <span>Verificar credencial</span>
                        <ExternalLinkIcon className="size-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
