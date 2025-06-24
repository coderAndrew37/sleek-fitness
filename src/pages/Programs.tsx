import PageHero from "../components/PageHero";
import ProgramsGrid from "../components/ProgramsGrid";
import PainPointCTA from "../components/PainPointCta";
import ContactForm from "../components/ContactForm";
import ProgramHeroImage from "../assets/programs-hero.jpg";

const ProgramsPage = () => {
  return (
    <>
      <main>
        <PageHero
          title="Online Fitness Programs"
          subtitle="Transform Your Body, Anywhere"
          description="Choose the perfect program tailored to your goals — whether you're starting out, building strength, or leveling up your performance."
          primaryButton={{ text: "Join Now", link: "#contact" }}
          image={ProgramHeroImage}
        />

        <ProgramsGrid />

        <PainPointCTA
          heading="Struggling to See Results?"
          subheading="Stop feeling frustrated and demotivated. Our programs are designed to help you achieve your fitness goals, no matter where you are in the world."
          linkText="Get Started"
          linkTo="#contact"
        />

        <ContactForm />
      </main>
    </>
  );
};

export default ProgramsPage;
