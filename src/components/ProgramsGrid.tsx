import ProgramCard from "./ProgramCard";
import leanfitImage from "../assets/leanfit.jpg";
import strongherImage from "../assets/strongher.jpg";
import quickfitImage from "../assets/quickfit.jpg";

const programs = [
  {
    title: "LeanFit 8-Week Program",
    description:
      "Burn fat, build lean muscle, and develop sustainable habits from home.",
    price: "5,999",
    duration: "8 weeks",
    image: leanfitImage,
    cta: { label: "Join Now", href: "/join/leanfit" },
    popular: true,
  },
  {
    title: "StrongHer Strength Training",
    description:
      "For women ready to lift heavy, gain strength, and sculpt definition.",
    price: "7,999",
    duration: "12 weeks",
    image: strongherImage,
    cta: { label: "Start Today", href: "/join/strongher" },
  },
  {
    title: "QuickFit Challenge",
    description:
      "30-day bodyweight challenge to build consistency and momentum.",
    price: "2,999",
    duration: "30 days",
    image: quickfitImage,
    cta: { label: "Get Started", href: "/join/quickfit" },
  },
];

const ProgramsGrid = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right plan that fits your lifestyle and goals.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
