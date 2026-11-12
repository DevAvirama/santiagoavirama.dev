import { getLabRepositories } from "@/lib/github";
import { HeroSection } from "@/components/sections/HeroSection";
import { FlagshipProjectSection } from "@/components/sections/FlagshipProjectSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { LabSection } from "@/components/sections/LabSection";
import { AboutAndCredentialsSection } from "@/components/sections/AboutAndCredentialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function HomePage() {
  const labRepos = await getLabRepositories();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FlagshipProjectSection />
      <ProjectsGridSection />
      <LabSection repositories={labRepos} />
      <AboutAndCredentialsSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
}
