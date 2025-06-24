// src/components/ObjectionsBlock.tsx

const objections = [
  {
    title: "“I don’t have equipment at home”",
    response:
      "Perfect — my programs are designed for bodyweight and minimal equipment. You’ll get strong with what you already have.",
  },
  {
    title: "“I’ve failed before”",
    response:
      "You’re not alone. This time, you get structure, accountability, and a coach who actually cares.",
  },
  {
    title: "“I don’t have time”",
    response:
      "Sessions are short, efficient, and built to fit into real-life schedules. Even just 20 minutes a day gets results.",
  },
  {
    title: "“I’m not in shape to start”",
    response:
      "There’s no ‘perfect shape’ to begin. We start at your level and build from there — safely and sustainably.",
  },
];

const ObjectionsBlock = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Still Have Doubts?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Let’s address some of the most common reasons people hesitate — and
          why they don’t have to stop you.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 text-left">
          {objections.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-blue-700 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsBlock;
