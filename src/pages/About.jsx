const About = () => {
  return (
    <div className="h-full md:h-screen p-6 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-gray-800">About DoNote</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        DoNote is your ultimate companion for staying organized and inspired.
        Built with simplicity in mind, DoNote empowers you to capture tasks, jot
        down ideas, and add optional notes to keep every detail in one place.
        Whether you're managing daily to-dos or planning big projects, our sleek
        and intuitive app makes productivity effortless.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-700">Why DoNote?</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">Seamless Task Management:</span> Add,
            complete, and organize tasks with ease.
          </li>
          <li>
            <span className="font-medium">Optional Notes:</span> Attach details
            or context to any task to stay on top of your ideas.
          </li>
          <li>
            <span className="font-medium">Elegant Design:</span> Enjoy a clean,
            modern interface that’s a joy to use on any device.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white rounded-lg py-3 px-6 hover:bg-indigo-700 transition font-medium"
        >
          Get Started with DoNote
        </a>
      </div>
    </div>
  );
};

export default About;
