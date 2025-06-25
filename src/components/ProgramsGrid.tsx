import ProgramCard from "./ProgramCard";
import leanfitImage from "../assets/leanfit.jpg";
import strongherImage from "../assets/strongher.jpg";
import quickfitImage from "../assets/quickfit.jpg";

interface Program {
  title: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
  cta: {
    label: string;
    href: string;
  };
  popular?: boolean;
}

// Corrected typing with parentheses
const basePrograms: (Omit<Program, "cta"> & { cta: { label: string } })[] = [
  {
    title: "LeanFit 8-Week Program",
    description:
      "Burn fat, build lean muscle, and develop sustainable habits from home.",
    price: "5,999",
    duration: "8 weeks",
    image: leanfitImage,
    cta: { label: "Join Now" },
    popular: true,
  },
  {
    title: "StrongHer Strength Training",
    description:
      "For women ready to lift heavy, gain strength, and sculpt definition.",
    price: "7,999",
    duration: "12 weeks",
    image: strongherImage,
    cta: { label: "Start Today" },
  },
  {
    title: "QuickFit Challenge",
    description:
      "30-day bodyweight challenge to build consistency and momentum.",
    price: "2,999",
    duration: "30 days",
    image: quickfitImage,
    cta: { label: "Get Started" },
  },
];

// Add hrefs using program title
const programs: Program[] = basePrograms.map((program) => ({
  ...program,
  cta: {
    label: program.cta.label,
    href: `https://wa.me/254722558572?text=Hi%20Lucy,%20I'm%20interested%20in%20the%20${encodeURIComponent(
      program.title
    )}%20program.`,
  },
}));

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
