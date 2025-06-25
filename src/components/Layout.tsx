import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppCTA from "./WhatsapCta";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <section className="fixed top-0 w-full z-50 bg-yellow-400 text-white py-2 px-4 flex justify-end text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <span>Call us at:</span>
          <Link to="tel:+254722558572" className="font-semibold underline">
            +254722558572
          </Link>
          <PhoneCall className="w-5 h-5" />
        </div>
      </section>

      {/* Navbar sits just under banner */}
      <Navbar />

      {/* Main content with padding to offset fixed header */}
      <main className="pt-[112px] flex-grow">{children}</main>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Layout;
