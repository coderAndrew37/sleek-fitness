const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFoundPage;
