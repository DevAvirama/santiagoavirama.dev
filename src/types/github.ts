export interface GitHubRepoApiResponse {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  fork: boolean;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  updated_at: string;
  pushed_at: string;
  archived: boolean;
}

export interface LabRepository {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string | null;
  language: string | null;
  topics: string[];
  updatedAt: string;
}
