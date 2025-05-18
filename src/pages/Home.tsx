import { CtaBanner } from "../components/CTA";
import { HeroSection } from "../components/HeroSection";
import { RegistrationSection } from "../components/RegistrationSection";
import { PlatformSummarySection } from "../components/SummarySection";
import { platformSummary } from "../data/summary";
import { StatsSection } from "@/components/StatSection";
import { LeaderboardSection } from "@/components/LeaderBoardSection";
import { JoinMentorshipBanner } from "@/components/JoinMentorship";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PlatformSummarySection data={platformSummary} />
      <StatsSection />
      <CtaBanner />
      <LeaderboardSection />
      <RegistrationSection />
      <JoinMentorshipBanner />
      <StatsSection />
      <CtaBanner />
    </>
  );
};

export default Home;
