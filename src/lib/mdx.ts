import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface CaseStudyRepoLink {
  label: string;
  url: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  summary: string;
  date: string;
  role: string;
  stack: string[];
  repos: CaseStudyRepoLink[];
}

export interface CaseStudyDocument {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

const PROJECTS_CONTENT_DIR = path.join(
  process.cwd(),
  "src",
  "content",
  "projects",
);

function parseStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item): item is string => typeof item === "string");
}

function parseRepoLinks(value: unknown): CaseStudyRepoLink[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const links: CaseStudyRepoLink[] = [];
  for (const item of value) {
    if (
      typeof item === "object" &&
      item !== null &&
      "label" in item &&
      "url" in item
    ) {
      const candidate = item as { label: unknown; url: unknown };
      if (
        typeof candidate.label === "string" &&
        typeof candidate.url === "string"
      ) {
        links.push({
          label: candidate.label,
          url: candidate.url,
        });
      }
    }
  }
  return links;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(PROJECTS_CONTENT_DIR, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getProjectBySlug(
  slug: string,
): Promise<CaseStudyDocument | null> {
  const safeSlug = path.basename(slug).replace(/\.mdx$/, "");
  if (!safeSlug) {
    return null;
  }

  const filePath = path.join(PROJECTS_CONTENT_DIR, `${safeSlug}.mdx`);

  try {
    const rawFile = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(rawFile);

    const record = data as Record<string, unknown>;

    const frontmatter: CaseStudyFrontmatter = {
      title: typeof record.title === "string" ? record.title : safeSlug,
      summary: typeof record.summary === "string" ? record.summary : "",
      date: typeof record.date === "string" ? record.date : "",
      role: typeof record.role === "string" ? record.role : "",
      stack: parseStringArray(record.stack),
      repos: parseRepoLinks(record.repos),
    };

    return {
      slug: safeSlug,
      frontmatter,
      content,
    };
  } catch {
    return null;
  }
}
