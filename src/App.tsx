// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HeroNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import FloatingWhatsAppButton from "./components/WhatsapButton";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { testimonialsData } from "./data/testimonials";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy-load pages
const Home = lazy(() => import("./pages/Home"));
const Methods = lazy(() => import("./pages/Methods"));
const Faq = lazy(() => import("./pages/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <HeroNavbar />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <TestimonialsSection data={testimonialsData} />
      <FloatingWhatsAppButton />
      <Footer />
    </Router>
  );
};

export default App;
