import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/testimonials";

const TestimonialsPage = () => {
  return (
    <Testimonials
      testimonials={testimonials}
      subtitle={
        "Don't just take my word for it. I've helped hundreds of people just like you achieve their fitness goals. Here's what some of them have to say:"
      }
    />
  );
};

export default TestimonialsPage;
