// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Programs", to: "/programs" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-10 left-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Large screen: Logo + Nav + CTA */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Left: Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 whitespace-nowrap"
          >
            Fit<span className="text-blue-600">Online</span>
          </Link>

          {/* Center: Nav links */}
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-medium text-gray-700 hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA */}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition whitespace-nowrap"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile: Logo + Menu button */}
        <div className="lg:hidden w-full flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Fit<span className="text-blue-600">Online</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-10 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white z-80 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Fit<span className="text-blue-600">Online</span>
          </Link>
          <button onClick={() => setOpen(false)}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block text-gray-700 font-medium text-lg hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-md font-medium text-center"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
