import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  Code2Icon,
  TerminalIcon,
  UserCheckIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { TechBadge } from "@/components/motion/TechBadge";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";

interface ProjectCaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Caso de Estudio no encontrado",
    };
  }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.summary,
      type: "article",
      url: `https://santiagoavirama.dev/proyectos/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  const caseStudyStructuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: frontmatter.title,
    description: frontmatter.summary,
    url: `https://santiagoavirama.dev/proyectos/${slug}`,
    ...(frontmatter.date ? { datePublished: frontmatter.date } : {}),
    author: {
      "@type": "Person",
      name: "Santiago Avirama",
      url: "https://santiagoavirama.dev",
      sameAs: ["https://github.com/DevAvirama"],
    },
    publisher: {
      "@type": "Person",
      name: "Santiago Avirama",
      url: "https://santiagoavirama.dev",
    },
    keywords: frontmatter.stack.join(", "),
    about: frontmatter.stack.map((tech) => ({
      "@type": "Thing",
      name: tech,
    })),
  };

  return (
    <article className="py-12 sm:py-16">
      <JsonLd data={caseStudyStructuredData} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup trigger="mount" stagger={0.06}>
          <StaggerItem className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800/90 bg-slate-900/60 px-3.5 py-2 font-mono text-xs text-slate-200 backdrop-blur-md transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-300"
            >
              <ArrowLeftIcon className="size-3.5 text-cyan-400" />
              <span>Volver al portafolio (~/santiagoavirama.dev)</span>
            </Link>
          </StaggerItem>

          <header className="glass-card relative mb-10 overflow-hidden rounded-3xl p-6 transition-colors duration-200 hover:border-emerald-500/40 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-transparent blur-3xl"
            />

            <StaggerItem className="relative mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/35 bg-cyan-500/15 px-2.5 py-1 text-cyan-300">
                <TerminalIcon className="size-3.5" />
                <span>Caso de Estudio de Ingeniería</span>
              </span>

              {frontmatter.date && (
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CalendarIcon className="size-3.5 text-indigo-400" />
                  <span>{frontmatter.date}</span>
                </span>
              )}

              {frontmatter.role && (
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <UserCheckIcon className="size-3.5 text-emerald-400" />
                  <span>{frontmatter.role}</span>
                </span>
              )}
            </StaggerItem>

            <StaggerItem fade={false}>
              <h1 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                <span className="text-gradient-tech">{frontmatter.title}</span>
              </h1>
            </StaggerItem>

            {frontmatter.summary && (
              <StaggerItem as="p" fade={false} className="relative mt-4 text-base leading-relaxed text-slate-300">
                {frontmatter.summary}
              </StaggerItem>
            )}

            {frontmatter.stack.length > 0 && (
              <StaggerItem className="relative mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-5">
                {frontmatter.stack.map((tech) => (
                  <TechBadge key={tech}>
                    <Badge
                      variant="outline"
                      className="border-slate-700/80 bg-slate-950/80 font-mono text-[11px] text-cyan-200 transition-colors duration-200 hover:border-emerald-500/40"
                    >
                      {tech}
                    </Badge>
                  </TechBadge>
                ))}
              </StaggerItem>
            )}

            {frontmatter.repos.length > 0 && (
              <StaggerItem className="relative mt-5 flex flex-wrap gap-2.5 border-t border-slate-800/80 pt-5">
                {frontmatter.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/85 px-3 py-1.5 font-mono text-xs font-medium text-cyan-400 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    <Code2Icon className="size-3.5" />
                    <span>{repo.label}</span>
                    <ArrowUpRightIcon className="size-3.5" />
                  </a>
                ))}
              </StaggerItem>
            )}
          </header>
        </StaggerGroup>

        <div className="max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        <Reveal amount={0.1}>
          <footer className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 transition-colors duration-200 hover:text-emerald-300 hover:underline"
            >
              <ArrowLeftIcon className="size-3.5" />
              <span>Regresar a ~/santiagoavirama.dev</span>
            </Link>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_20px_-5px_rgba(34,211,238,0.45)] transition-all hover:brightness-110"
            >
              <span>Conversar sobre este proyecto</span>
              <ArrowUpRightIcon className="size-3.5" />
            </Link>
          </footer>
        </Reveal>
      </div>
    </article>
  );
}
