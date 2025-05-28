import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Globe } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 md:px-16 py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-blue-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 text-black dark:text-white overflow-hidden"
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 text-blue-700 dark:text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - Bio */}
        <motion.div
          className="w-full space-y-8 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-4 bg-white/70 dark:bg-gray-800/50 p-6 rounded-xl shadow-md">
            <p className="text-gray-800 dark:text-gray-200 text-justify">
              Hey! I'm a{' '}
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                Full Stack Software Developer
              </span>{' '}
              based in{' '}
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                Kolkata, India
              </span>. I'm currently focused on mastering the{' '}
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                MERN Stack
              </span>{' '}
              to build robust, scalable, and interactive web applications.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-justify">
              Outside of coding, I love spending time on the cricket field! 🏏 I believe in combining logic and creativity to craft seamless digital experiences.
            </p>
          </div>

          <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 pl-4 border-l-4 border-blue-500 dark:border-blue-400">
            <li className="pl-4">🔭 <strong>Passionate</strong> about Full Stack Development</li>
            <li className="pl-4">📚 <strong>Currently learning</strong> the MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li className="pl-4">⚡ <strong>Fun fact:</strong> I enjoy playing Cricket during my free time!</li>
          </ul>
        </motion.div>

        {/* Right - Education */}
        <motion.div
          className="w-full space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <GraduationCap className="text-blue-600 w-6 h-6" />,
              title: 'MCA (Master of Computer Applications)',
              details: [
                ['Batch', '2023-2025'],
                ['College', 'Durgapur Institute of Advanced Technology and Management'],
                ['University', 'MAKAUT (West Bengal)'],
                ['CGPA', '8.2 (approx. 75%)']
              ]
            },
            {
              icon: <School className="text-blue-600 w-6 h-6" />,
              title: 'BCA (Bachelor of Computer Applications)',
              details: [
                ['Batch', '2020-2023'],
                ['College', 'Cyber Research and Training Institute'],
                ['University', 'University of Burdwan'],
                ['CGPA', '8.5 (approx. 79%)']
              ]
            },
            {
              icon: <Globe className="text-blue-600 w-6 h-6" />,
              title: 'Higher Secondary (H.S)',
              details: [
                ['Year', '2020'],
                ['School', 'Memari V.M Institute (Unit-2)'],
                ['Board', 'WBCHSE'],
                ['Percentage', '92%']
              ]
            }
          ].map((edu, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-l-8 border-blue-600 dark:border-blue-400 p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {edu.icon}
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{edu.title}</h3>
              </div>
              <div className="text-sm text-gray-800 dark:text-gray-300 leading-6">
                {edu.details.map(([label, value], idx) => (
                  <p key={idx}>
                    <strong>{label}:</strong> {value}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
