import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Globe, BadgeCheck } from 'lucide-react';

const About = () => {
  const certifications = [
    {
      title: "ARDENT (Full Stack Web Development Using PHP AND MYSQL)",
      issuer: "ARDENT Computech",
      year: "2023",
      link: "https://drive.google.com/file/d/1Yj-5Q3G6X9LH00OJChreEPSWFW6gFAsr/view"
    },
    {
      title: "NPTEL (Privacy and Security in Online Social Media)",
      issuer: "NPTEL",
      year: "2025",
      link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS79S64480012104479068"
    }
  ];

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
        {/* Bio Section */}
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
              </span>{' '}based in{' '}
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                Kolkata, India
              </span>. I'm currently focused on mastering the{' '}
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                MERN Stack
              </span>{' '}to build robust, scalable, and interactive web applications.
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

        {/* Education Section */}
        <motion.div
          className="w-full space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[{
            icon: <GraduationCap className="text-blue-600 w-6 h-6" />, title: 'MCA (Master of Computer Applications)',
            details: [['Batch', '2023-2025'], ['College', 'Durgapur Institute of Advanced Technology and Management'], ['University', 'MAKAUT (West Bengal)'], ['CGPA', '8.2 (approx. 75%)']]
          }, {
            icon: <School className="text-blue-600 w-6 h-6" />, title: 'BCA (Bachelor of Computer Applications)',
            details: [['Batch', '2020-2023'], ['College', 'Cyber Research and Training Institute'], ['University', 'University of Burdwan'], ['CGPA', '8.5 (approx. 79%)']]
          }, {
            icon: <Globe className="text-blue-600 w-6 h-6" />, title: 'Higher Secondary (H.S)',
            details: [['Year', '2020'], ['School', 'Memari V.M Institute (Unit-2)'], ['Board', 'WBCHSE'], ['Percentage', '92%']]
          }].map((edu, i) => (
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
                  <p key={idx}><strong>{label}:</strong> {value}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications Section */}
      <motion.div
        className="max-w-7xl mx-auto mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400 flex items-center justify-center gap-2">
          <BadgeCheck className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-300 dark:border-gray-600"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-300 dark:bg-blue-900 rounded-full blur-2xl opacity-40"></div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-white">{cert.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Issued by:</strong> {cert.issuer} <br />
                  <strong>Year:</strong> {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                >
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
