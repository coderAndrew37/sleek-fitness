import HeroImage from "../assets/hero-image.jpg";
import AboutCoach from "../components/AboutCoach";
import ContactForm from "../components/ContactForm";
import Hero from "../components/PageHero";
import PainPointCTA from "../components/PainPointCta";
import ProgramsGrid from "../components/ProgramsGrid";
import ClientResults from "../components/Results";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/testimonials";
import { faqData } from "../data/Faqs";
import FAQ from "../components/Faq";
import HowItWorks from "../components/HowItWorks";
import { Link } from "react-router-dom";
import SuccessMetrics from "../components/SuccessMetrics";
import LeadMagnet from "../components/Leadmagnet";
import ObjectionsBlock from "../components/ObjectiosBlock";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero
          title="Helping You Transform Your Fitness Journey"
          description="Unlock your potential with personalized coaching, expert guidance, and a supportive community. Whether you're starting out or looking to level up, I'm here to help you achieve your fitness goals."
          primaryButton={{
            text: "Get Started",
            link: "#contact",
          }}
          image={HeroImage}
        />
        <SuccessMetrics />
        <AboutCoach />
        <ClientResults />
        {/* <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                You don't need a fancy gym membership or expensive equipment to
                get started. Use what you have at home: water bottles, stairs,
                chairs, or even your own body weight. The possibilities are
                endless. And with my guidance, you'll be able to do it all from
                the comfort of your own home.
              </p>
              <Link
                to="/join"
                className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                Get Started Today
              </Link>
            </div>

            <div className="w-full max-w-md mx-auto">
              <img
                src={NoExcusesImage}
                alt="No Excuses"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section> */}

        <ProgramsGrid />
        <LeadMagnet />
        <HowItWorks />
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why Choose Online Coaching?
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 mb-8">
              Online coaching offers flexibility, convenience, and personalized
              support. Train on your schedule, access expert guidance, and join
              a community of like-minded individuals.
            </p>
            <Link
              to="/programs"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Explore Programs
            </Link>
          </div>
        </section>
        <Testimonials
          testimonials={testimonials}
          title="Hear From Our Satisfied Clients"
          subtitle={
            "Don't just take my word for it. I've helped hundreds of people just like you achieve their fitness goals. Here's what some of them have to say:"
          }
        />
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-700 text-center">
              Got questions? I've got answers. Here are some of the most common
              questions I get asked. If you don't see your question here, don't
              worry - just reach out and I'll be happy to help.
            </p>
            <FAQ items={faqData} />
          </div>
        </section>

        <PainPointCTA
          heading="Are you struggling to stay consistent?"
          subheading="Our coaching program is designed to help you stay on track and achieve your goals."
          linkText="Learn More"
          linkTo="/programs"
        />
        <ObjectionsBlock />
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 mb-8">
              Join our community of motivated individuals and start your journey
              today. Whether you're a beginner or looking to take your fitness
              to the next level, we're here to support you every step of the
              way.
            </p>
            <Link
              to="/programs"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Explore Programs
            </Link>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  );
};

export default HomePage;
