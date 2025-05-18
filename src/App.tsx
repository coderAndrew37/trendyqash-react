import { HeroNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { PlatformSummarySection } from "./components/SummarySection";
import { MethodsSection } from "./components/EarningMethods";
import { RegistrationSection } from "./components/RegistrationSection";
import { platformSummary } from "./data/summary";
import { earningMethods } from "./data/earningMethods";
import { FAQSection } from "./components/FaqSection";
import { faqData } from "./data/faqs";
import { CtaBanner } from "./components/CTA";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { testimonialsData } from "./data/testimonials"; // Make sure this import matches your data file
import FloatingWhatsAppButton from "./components/WhatsapButton";

const App = () => {
  return (
    <>
      <HeroNavbar />
      <HeroSection />
      <PlatformSummarySection data={platformSummary} />
      <MethodsSection data={earningMethods} />
      <RegistrationSection />
      <CtaBanner />
      <TestimonialsSection data={testimonialsData} />
      <FAQSection faqs={faqData} />
      <CtaBanner />
      <FloatingWhatsAppButton />

      <Footer />
    </>
  );
};

export default App;
