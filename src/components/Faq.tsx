import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
};

const FAQ = ({ title, subtitle, items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {subtitle && (
              <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
                {subtitle}
              </h4>
            )}
            {title && (
              <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
            )}
          </div>
        )}

        <div className="space-y-6">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-semibold text-gray-800 group"
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 group-hover:text-blue-600 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 text-gray-600 text-base ${
                    isOpen ? "max-h-[300px] pb-6" : "max-h-0"
                  }`}
                >
                  {isOpen && <div>{faq.answer}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
