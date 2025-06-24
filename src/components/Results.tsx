type Result = {
  name: string;
  imageBefore: string;
  imageAfter: string;
  quote?: string;
};

import EmilyBefore from "../assets/images/clients/emily-before.jpg";
import EmilyAfter from "../assets/images/clients/emily-after.jpg";

const results: Result[] = [
  {
    name: "Emily",
    imageBefore: EmilyBefore,
    imageAfter: EmilyAfter,
    quote: "I feel stronger, healthier, and more confident than ever!",
  },
  {
    name: "Jade",
    imageBefore: "/images/clients/jade-before.jpg",
    imageAfter: "/images/clients/jade-after.jpg",
    quote: "This program changed how I see myself — inside and out.",
  },
];

const ClientResults = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real Client Transformations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Results from women just like you. Consistency, support, and the
            right plan work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {results.map(({ name, imageBefore, imageAfter, quote }) => (
            <div key={name} className="bg-white rounded-xl shadow p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img
                  src={imageBefore}
                  alt={`${name} before`}
                  className="rounded-md object-cover"
                />
                <img
                  src={imageAfter}
                  alt={`${name} after`}
                  className="rounded-md object-cover"
                />
              </div>
              <p className="text-gray-700 italic text-sm text-center">
                "{quote}"
              </p>
              <p className="text-center mt-2 text-sm font-semibold text-gray-800">
                – {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
