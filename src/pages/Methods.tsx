// src/pages/Methods.tsx
import { MethodsSection } from "../components/EarningMethods";
import { earningMethods } from "../data/earningMethods";
import { JoinMentorshipBanner } from "@/components/JoinMentorship";
import { MethodsHero } from "../components/MethodsHero";
import { CtaBanner } from "@/components/CTA";
import { LeaderboardSection } from "@/components/LeaderBoardSection";

const Methods = () => {
  return (
    <>
      <MethodsHero />
      <MethodsSection data={earningMethods} />
      <CtaBanner />
      <LeaderboardSection />
      <JoinMentorshipBanner />
    </>
  );
};

export default Methods;
