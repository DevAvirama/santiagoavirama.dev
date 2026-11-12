import type { GitHubRepoApiResponse, LabRepository } from "@/types/github";

const GITHUB_REPOS_ENDPOINT =
  "https://api.github.com/users/DevAvirama/repos?sort=updated&per_page=30";

export async function getLabRepositories(): Promise<LabRepository[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const token = process.env.GITHUB_TOKEN;
    if (token && token.trim().length > 0) {
      headers.Authorization = `Bearer ${token.trim()}`;
    }

    const response = await fetch(GITHUB_REPOS_ENDPOINT, {
      headers,
      next: { revalidate: 21600 },
    });

    if (!response.ok) {
      return [];
    }

    const data: unknown = await response.json();
    if (!Array.isArray(data)) {
      return [];
    }

    const repos = data as GitHubRepoApiResponse[];

    return repos
      .filter((repo) => {
        const topics = Array.isArray(repo.topics) ? repo.topics : [];
        return (
          !repo.fork &&
          !repo.private &&
          !repo.archived &&
          topics.includes("portfolio-lab")
        );
      })
      .map((repo): LabRepository => {
        const cleanedHomepage =
          typeof repo.homepage === "string" && repo.homepage.trim().length > 0
            ? repo.homepage.trim()
            : null;

        return {
          id: repo.id,
          name: repo.name,
          description:
            repo.description ??
            "Experimento técnico y prototipo de ingeniería en evolución.",
          repoUrl: repo.html_url,
          liveUrl: cleanedHomepage,
          language: repo.language,
          topics: Array.isArray(repo.topics) ? repo.topics : [],
          updatedAt: repo.updated_at,
        };
      });
  } catch {
    return [];
  }
}
