import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Have questions or want to learn more about how I can help you
              achieve your fitness goals? Fill out the form below and I'll get
              back to you as soon as possible.
            </p>
          </div>
        </section>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <p className="text-gray-600 mb-4">
            Whether you have questions about my coaching services, want to
            discuss your fitness goals, or just want to say hi, I'm here to
            help. Fill out the form below and I'll respond as soon as I can.
          </p>
          <p className="text-gray-600 mb-8">
            You can also reach me directly at{" "}
            <a
              href="mailto:OvD0L@example.com"
              className="text-blue-600 hover:underline"
            >
              OvD0L@example.com
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.instagram.com/fitonlinecoach"
              className="text-blue-600 hover:underline"
            >
              Instagram
            </a>
            .
          </p>
        </div>
        <ContactForm />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <p className="text-gray-600">
            I look forward to hearing from you and helping you on your fitness
            journey!
          </p>
        </div>
      </main>
    </>
  );
};

export default Contact;
