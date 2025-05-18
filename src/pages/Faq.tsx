import { FaqHero } from "../components/FaqHero";
import { FAQSection } from "../components/FaqSection";
import { faqData } from "../data/faqs";
import { JoinMentorshipBanner } from "../components/JoinMentorship";

const Faq = () => (
  <>
    <FaqHero />
    <FAQSection faqs={faqData} />
    <JoinMentorshipBanner />
  </>
);

export default Faq;
