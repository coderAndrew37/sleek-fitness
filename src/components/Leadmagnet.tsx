import { useState } from "react";
import MagnetImage from "../assets/lead-magnet.jpg"; // Replace with your image

const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert("✅ You'll receive your free guide shortly!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Free Guide: Burn Fat & Build Strength from Home
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Get a free 5-day workout & nutrition plan — no equipment needed.
            Designed for women who want results without the gym.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Get the Free Guide
            </button>
          </form>
        </div>

        <div>
          <img
            src={MagnetImage}
            alt="Free Lead Magnet"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
