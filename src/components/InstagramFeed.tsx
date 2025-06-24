import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Follow Me on Instagram
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Daily motivation, workout clips, real transformations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://www.instagram.com/p/CXYZabc1234/",
            "https://www.instagram.com/p/CABCdef5678/",
            "https://www.instagram.com/p/CGHIijk9101/",
          ].map((url, idx) => (
            <blockquote
              key={idx}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ background: "#fff", borderRadius: "12px" }}
            ></blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
