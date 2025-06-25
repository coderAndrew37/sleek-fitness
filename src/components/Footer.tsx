import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">FitOnline</h3>
          <p className="mt-4 text-gray-400">
            Helping busy professionals achieve their fitness goals from anywhere
            in the world.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Get In Touch</h4>
          <p className="mt-4 text-gray-300">Email: hello@fitonline.com</p>
          <p className="text-gray-300">Instagram: @fitonlinecoach</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitOnline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
