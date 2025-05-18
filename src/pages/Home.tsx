// src/pages/Home.tsx
import { CtaBanner } from "../components/CTA";
import { HeroSection } from "../components/HeroSection";
import { RegistrationSection } from "../components/RegistrationSection";
import { PlatformSummarySection } from "../components/SummarySection";
import { platformSummary } from "../data/summary";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PlatformSummarySection data={platformSummary} />
      <RegistrationSection />
      <CtaBanner />
    </>
  );
};

export default Home;
