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

  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
          >
            <ArrowLeftIcon className="size-3.5" />
            <span>Volver al portafolio (~/santiagoavirama.dev)</span>
          </Link>
        </div>

        <header className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
              <TerminalIcon className="size-3.5" />
              <span>Caso de Estudio de Ingeniería</span>
            </span>

            {frontmatter.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="size-3.5 text-zinc-500" />
                <span>{frontmatter.date}</span>
              </span>
            )}

            {frontmatter.role && (
              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                <UserCheckIcon className="size-3.5" />
                <span>{frontmatter.role}</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl">
            {frontmatter.title}
          </h1>

          {frontmatter.summary && (
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              {frontmatter.summary}
            </p>
          )}

          {frontmatter.stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-5">
              {frontmatter.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-zinc-800 bg-zinc-950 font-mono text-[11px] text-zinc-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {frontmatter.repos.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2.5 border-t border-zinc-800/80 pt-5">
              {frontmatter.repos.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs font-medium text-cyan-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <Code2Icon className="size-3.5" />
                  <span>{repo.label}</span>
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        <footer className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 hover:underline"
          >
            <ArrowLeftIcon className="size-3.5" />
            <span>Regresar a ~/santiagoavirama.dev</span>
          </Link>

          <Link
            href="/#contacto"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <span>Conversar sobre este proyecto</span>
            <ArrowUpRightIcon className="size-3.5" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
