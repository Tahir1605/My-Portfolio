import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPhp,
  FaGithub,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-950"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-blue-700 dark:text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-center text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
