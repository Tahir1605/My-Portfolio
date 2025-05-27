import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import WeatherAppImg from '../public/images/Weather-App.png';
import ImageSearchImg from '../public/images/Image-Search.png';
import QuizAppImg from '../public/images/Quiz-App.png';


const projectData = [
  {
    name: "Weather App",
    startDate: "2025-01-05",
    endDate: "2025-01-16",
    description:
      "A weather app built with React.js that uses a Weather API to display real-time weather data. Features include an attractive UI with toggleable dark and light themes for better usability.",
    githubLink: "https://github.com/Tahir1605/weather-app.git", // Replace with actual GitHub link
    projectLink: "https://tahir1605.github.io/weather-app/", // Replace with actual live project link
    image: "WeatherAppImg", 
  },
  {
    name: "Image Search App",
    startDate: "2025-01-20",
    endDate: "2025-01-25",
    description:
      "An image search app built with React.js using the Unsplash API, featuring an attractive, responsive UI with seamless dark and light theme toggling for an enhanced user experience.",
    githubLink: "https://github.com/Tahir1605/image-search.git",
    projectLink: "https://tahir1605.github.io/image-search/",
    image: "ImageSearchImg", 
  },
  {
    name: "Quiz App",
    startDate: "2025-01-28",
    endDate: "2025-01-31",
    description:
      "A quiz app developed with React.js that fetches questions from an API, featuring an engaging and user-friendly interface with real-time scoring and smooth navigation for an interactive learning experience.",
    githubLink: "https://github.com/Tahir1605/Quize-app.git",
    projectLink: "https://tahir1605.github.io/Quize-app/",
    image: "QuizAppImg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-950"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-blue-700 dark:text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {project.startDate} → {project.endDate}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md transition duration-300"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-green-600 text-white hover:bg-green-700 hover:shadow-md transition duration-300"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
