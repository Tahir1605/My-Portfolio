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
      className="relative min-h-screen bg-blue-50 dark:bg-gray-950 dark:text-white text-black overflow-hidden flex items-center"
    >
      {/* Background Blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-screen-2xl px-4 sm:px-4 md:px-8 py-4 sm:py-8 md:py-8 lg:py-12 xl:py-16 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
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

          <div className="h-8 md:h-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                className="absolute w-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300"
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
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto md:mx-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            custom={2}
          >
            I specialize in creating modern, responsive, and user-centric websites with great performance and clean UI.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            custom={3}
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Right Section with Animated Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Glowing Light Background */}
          <motion.div
            className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl opacity-30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Profile Image with Floating Effect */}
          <motion.div
            className="relative z-10 rounded-full overflow-hidden border-[6px] border-white shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="tahir.jpg" // Replace with your image path
              alt="Tahirul Islam"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
