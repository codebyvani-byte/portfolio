import profilePic from "../assets/images/vani.jpg";

export default function Profile() {
  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-serif cursor-pointer font-semibold mb-3 text-gray-900 dark:text-white">
              Hey, I'm Vani
            </h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Welcome to my digital nook. I’m an experienced Software Engineer passionate about building thoughtful, elegant, and
              user-focused experiences.
            </p>
          </div>

          <div className="w-40 h-40 md:w-44 md:h-44 overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={profilePic}
              alt="Vani"
              draggable={false}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </section>

        <div className="border-b border-gray-300 dark:border-gray-700 mt-12 mb-10" />

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Recent Work
          </h2>

          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 cursor-pointer transition-colors">
                  Vijaya International Convention Center Website
                </h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                  A responsive React + Tailwind portfolio website showcasing faculties, events, and business
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-gray-300 dark:border-gray-700 mt-12 mb-10" />

        <section>
          <h2 className="text-2xl font-semibold mb-6 mt-8 text-gray-900 dark:text-white">
            Popular Videos
          </h2>

          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 cursor-pointer transition-colors">
                  Top VS Code Extensions Every React & React Native Developers MUST Know!
                </h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                  Ultimate list of VS Code extensions that save hours,makes code cleaner and level up development workflow instantly.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 cursor-pointer transition-colors">
                  React Native + Expo Project Setup — Quick 4 Minute Guide!
                </h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                  quick guide gets you up and running with Expo — no headaches, no wasted time. </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                1,236 views
              </span>
            </div>
          </div>
        </section>
        <div className="border-b border-gray-300 dark:border-gray-700 mt-20" />
      </div>
    </div>
  );
}
