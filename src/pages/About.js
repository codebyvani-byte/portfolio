import React from "react";

export default function About() {
  const skills = [
    "React Native",
    "React js",
    "Next js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "GIT",
    "Github",
    "Responsive Design",
    "Tailwind CSS",
    "Figma",
    "Firebase",
    "Appstore Connect",
    "Play Store",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
      <h2 className="text-2xl font-semibold font-serif cursor-pointer mb-8">
        About Me
      </h2>

      <div>
        <div className="mb-12">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
            I'm a Frontend Focused and Experienced Software Engineer building and managing the
            Front-end of Websites, Web Applications and Mobile Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like sharing content related to the stuff that I
            have learned over the years through my YouTube channel so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my
            Linkedin Profile. I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience, then don't hesitate to contact me.
          </p>
        </div>

        <div>
          <h3 className="text-base font-serif font-semibold mb-4 mt-4 text-gray-600 dark:text-gray-100">
            My Skills
          </h3>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
