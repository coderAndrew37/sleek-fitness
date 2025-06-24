// src/components/PainPointCTA.tsx
import { Link } from "react-router-dom";

interface PainPointCTAProps {
  heading: string;
  subheading: string;
  linkText: string;
  linkTo: string;
}

const PainPointCTA = ({
  heading,
  subheading,
  linkText,
  linkTo,
}: PainPointCTAProps) => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-red-100 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-gray-700">{subheading}</p>
        <Link
          to={linkTo}
          className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-opacity"
        >
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default PainPointCTA;
