interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string | null;
  slug: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jenna M.",
    role: "Busy Mom & Client",
    content:
      "I’ve lost 20 lbs and gained so much energy! The app, accountability, and meal plans were exactly what I needed.",
    slug: "jenna-success-story",
    image: "/images/testimonials/jenna.jpg",
  },
  {
    id: 2,
    name: "Dave R.",
    role: "Remote Worker & Client",
    content:
      "Never thought online training could be this personal. Weekly check-ins kept me on track and motivated!",
    slug: "dave-transformation",
    image: "/images/testimonials/dave.jpg",
  },
];
