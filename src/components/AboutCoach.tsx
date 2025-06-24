import AboutImage from "../assets/about-coach.jpg";
const AboutCoach = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="h-[400px]">
          <img
            src={AboutImage}
            alt="Your Coach"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Meet Your Coach
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm <strong>Coach Lucy</strong>, a certified personal trainer and
            nutritionist with 7+ years of experience helping women get strong,
            confident, and energized. My mission is to make fitness simple, fun,
            and sustainable — even with the busiest schedule.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✓ NASM Certified Personal Trainer</li>
            <li>✓ Women's Fitness Specialist</li>
            <li>✓ 500+ Client Transformations</li>
            <li>✓ Online & Remote Coaching since 2020</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;
