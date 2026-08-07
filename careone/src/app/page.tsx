import { HeroSection } from "@/components/HeroSection";
import { ThreePaths } from "@/components/ThreePaths";
import { PersonaCards } from "@/components/PersonaCards";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ThreePaths />
      <PersonaCards />
      <FeaturesGrid />
      <CTA />
    </div>
  );
}
