export type ProjectTier = "flagship" | "featured" | "client" | "lab";

export interface ProjectModule {
  label: string;
  repoUrl: string;
  tech: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tier: ProjectTier;
  role: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  caseStudySlug?: string;
  modules?: ProjectModule[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  focus: string[];
}

export type CertificationStatus = "verified" | "in-progress";

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  status: CertificationStatus;
  skills: string[];
  credentialUrl?: string;
}

export interface ComplementaryCourse {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface StackLayer {
  id: string;
  title: string;
  description: string;
  items: string[];
}
