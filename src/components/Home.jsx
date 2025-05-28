import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slideVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, x: 60, transition: { duration: 0.4 } },
};

const roles = ['FullStack Web Developer', 'UI Designer', 'Frontend Engineer', 'MERN Stack Developer'];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] flex items-center bg-blue-50 dark:bg-gray-950 dark:text-white text-black overflow-hidden"
    >
      {/* Background Blob */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-600 rounded-full filter blur-3xl opacity-20 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      {/* Main Content Container */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 px-4 sm:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-16 2xl:py-14 z-10 max-w-7xl mx-auto">

        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            custom={1}
          >
            Hi, I'm{' '}
            <span className="relative text-blue-600 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              <span className="underline decoration-2 underline-offset-4">Tahirul Islam</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60 rounded-full animate-pulse"></span>
            </span>
          </motion.h1>

          <div className="h-7 sm:h-8 md:h-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                className="absolute text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 w-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                {roles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            custom={3}
          >
            Passionate about building beautiful, functional, and fully responsive websites with great user experience.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            custom={4}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Animated Blob */}
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-xl opacity-30 animate-pulse"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>

          {/* Floating Icons */}
          <div className="absolute flex flex-col items-center gap-6 text-white">
            <motion.div
              className="bg-blue-600 p-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="devicon-react-original text-3xl"></i>
            </motion.div>
            <motion.div
              className="bg-cyan-600 p-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <i className="devicon-nodejs-plain text-3xl"></i>
            </motion.div>
            <motion.div
              className="bg-blue-700 p-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <i className="devicon-javascript-plain text-3xl"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
