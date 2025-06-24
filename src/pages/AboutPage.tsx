import AboutCoach from "../components/AboutCoach";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/testimonials";
import AboutHeroImage from "../assets/about-hero.jpg";

const AboutPage = () => {
  return (
    <>
      <main>
        <PageHero
          title="About Your Coach"
          subtitle="Meet Your Trainer"
          description="Hi! I’m here to help you unlock your best self. Learn more about who I am, what I stand for, and how I can support your fitness transformation journey."
          primaryButton={{ text: "Start Your Journey", link: "#contact" }}
          secondaryButton={{ text: "Contact Me", link: "#contact" }}
          image={AboutHeroImage}
        />
        <AboutCoach />
        <Testimonials
          testimonials={testimonials}
          title="Hear From Our Satisfied Clients"
          subtitle={
            "Don't just take my word for it. I've helped hundreds of people just like you achieve their fitness goals. Here's what some of them have to say:"
          }
        />
        <ContactForm />
      </main>
    </>
  );
};

export default AboutPage;
