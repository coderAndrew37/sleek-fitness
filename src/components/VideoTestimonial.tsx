type VideoTestimonial = {
  name: string;
  role: string;
  videoUrl: string;
  quote: string;
};

const videos: VideoTestimonial[] = [
  {
    name: "Sarah J.",
    role: "Online Fitness Client",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    quote:
      "I’ve never felt this confident — training from home has never been easier.",
  },
  {
    name: "Mark T.",
    role: "Busy Dad, Coaching Client",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    quote: "In 30 days, I had more energy than I’ve had in 5 years.",
  },
  {
    name: "Lina W.",
    role: "Remote Coaching Client",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    quote:
      "This wasn’t just workouts — it was mindset, consistency, and support.",
  },
];

const VideoTestimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Real People. Real Results.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from people just like you who transformed their health from home.
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={video.videoUrl}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-left">
                <p className="italic text-gray-700 mb-2">“{video.quote}”</p>
                <p className="font-semibold text-gray-900">{video.name}</p>
                <p className="text-blue-600 text-sm">{video.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
