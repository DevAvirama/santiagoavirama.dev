import { getLabRepositories } from "@/lib/github";
import { HeroSection } from "@/components/sections/HeroSection";
import { FlagshipProjectSection } from "@/components/sections/FlagshipProjectSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { LabSection } from "@/components/sections/LabSection";
import { AboutAndCredentialsSection } from "@/components/sections/AboutAndCredentialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <span className="absolute size-1.5 rotate-45 border border-emerald-400/50 bg-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.55)]" />
    </div>
  );
}

export default async function HomePage() {
  const labRepos = await getLabRepositories();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <SectionDivider />
      <FlagshipProjectSection />
      <SectionDivider />
      <ProjectsGridSection />
      <SectionDivider />
      <LabSection repositories={labRepos} />
      <SectionDivider />
      <AboutAndCredentialsSection />
      <SectionDivider />
      <TechStackSection />
      <SectionDivider />
      <ContactSection />
    </div>
  );
}
