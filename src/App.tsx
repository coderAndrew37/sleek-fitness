import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProgramsPage = lazy(() => import("./pages/Programs"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/Contact"));
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
      <Suspense fallback={<DumbbellLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/programs"
            element={
              <Layout>
                <ProgramsPage />
              </Layout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Layout>
                <TestimonialsPage />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <GalleryPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFoundPage />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
