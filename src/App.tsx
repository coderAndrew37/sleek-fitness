// src/App.tsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsapCta";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProgramsPage = lazy(() => import("./pages/Programs"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const DumbbellLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="animate-bounce text-blue-600 text-4xl font-bold flex items-center space-x-2">
      <span className="inline-block w-6 h-6 bg-blue-600 rounded-full animate-pulse"></span>
      <span className="inline-block w-10 h-2 bg-blue-600 rounded-sm"></span>
      <span className="inline-block w-6 h-6 bg-blue-600 rounded-full animate-pulse"></span>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Banner with phone number */}
        <section className="fixed top-0 w-full z-60 bg-yellow-300 text-white text-right text-2xl py-2 mb-2 px-4">
          Call us at: <Link to="tel:+254722558572">+254722558572</Link>
        </section>

        <Navbar />

        <Suspense fallback={<DumbbellLoader />}>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Suspense>

        <Footer />
        <WhatsAppCTA />
      </div>
    </Router>
  );
};

export default App;
