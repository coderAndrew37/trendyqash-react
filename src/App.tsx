import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Methods from "./pages/Methods";
import Faq from "./pages/Faq";
import FloatingWhatsAppButton from "./components/WhatsapButton";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { testimonialsData } from "./data/testimonials";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <HeroNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <TestimonialsSection data={testimonialsData} />
      <FloatingWhatsAppButton />
      <Footer />
    </Router>
  );
};

export default App;
