import { useState, useEffect } from "react";

const metrics = [
  { label: "Clients Transformed", value: "500+" },
  { label: "Average Fat Loss", value: "8kg" },
  { label: "Client Satisfaction", value: "97%" },
  { label: "Weekly Workouts Delivered", value: "200+" },
];

const SuccessMetrics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = Math.min(
          prevCount + 1,
          Number(metrics[0].value.slice(0, -1))
        );
        return newCount;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Trusted by Results
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl font-extrabold text-blue-600">
                {idx === 0 ? count : metric.value}
              </div>
              <p className="mt-2 text-gray-700 font-medium text-sm uppercase tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
