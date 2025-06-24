import { Dialog } from "@headlessui/react";
import { useState } from "react";

const galleryImages = [
  { src: "/images/gallery/img-1.jpg", tag: "Progress" },
  { src: "/images/gallery/img-2.jpg", tag: "Workout" },
  { src: "/images/gallery/img-3.jpg", tag: "Client" },
  { src: "/images/gallery/img-4.jpg", tag: "Progress" },
  { src: "/images/gallery/img-5.jpg", tag: "Client" },
  { src: "/images/gallery/img-6.jpg", tag: "Workout" },
  { src: "/images/gallery/img-7.jpg", tag: "Progress" },
  { src: "/images/gallery/img-8.jpg", tag: "Client" },
  { src: "/images/gallery/img-9.jpg", tag: "Workout" },
  { src: "/images/gallery/img-10.jpg", tag: "Meetup" },
];

const uniqueTags = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.tag))),
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState("All");

  const filteredImages =
    activeTag === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.tag === activeTag);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real moments from our clients — workouts, transformations, and
            results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              loading="lazy"
              alt={`Gallery ${i + 1}`}
              className="rounded-lg cursor-pointer object-cover w-full h-48 hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(img.src)}
            />
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-3xl mx-auto">
              <img
                src={selectedImage ?? ""}
                alt="Enlarged preview"
                className="rounded-lg w-full max-h-[80vh] object-contain"
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
