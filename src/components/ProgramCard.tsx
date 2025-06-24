import { Link } from "react-router-dom";

type ProgramProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  image?: string;
};

const ProgramCard = ({
  title,
  description,
  price,
  duration,
  popular,
  cta,
  image,
}: ProgramProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {popular && (
          <p className="text-xs font-semibold text-yellow-500 mb-2">
            Popular Program
          </p>
        )}
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
          <span>⏱ {duration}</span>
          <span className="font-semibold text-gray-800">KES {price}</span>
        </div>

        {cta && (
          <Link
            to={cta.href}
            className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
