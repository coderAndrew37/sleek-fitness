import {
  DumbbellIcon,
  VideoIcon,
  CalendarClock,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: DumbbellIcon,
      title: "Customized Plans",
      text: "Every plan is tailored to your fitness level, schedule, and equipment – no gym required.",
    },
    {
      icon: VideoIcon,
      title: "Follow Along Videos",
      text: "Every workout includes step-by-step video demos to ensure proper form and confidence.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Scheduling",
      text: "Workouts are structured weekly and delivered via your personal dashboard. Train anytime, anywhere.",
    },
    {
      icon: MessageSquare,
      title: "Ongoing Support",
      text: "Got questions? Ask via private chat or weekly check-ins. You’re never on your own.",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get expert guidance and personalized workouts you can follow from the
          comfort of your home — with full accountability.
        </p>
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            variants={variants}
          >
            <div className="flex justify-center mb-4 text-blue-600">
              <step.icon className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          to="/join"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
