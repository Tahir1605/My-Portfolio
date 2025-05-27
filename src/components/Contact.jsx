import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-16 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-950"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              autoComplete="password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              autoComplete="off"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="self-center mt-4 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-12 flex justify-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://github.com/Tahir1605" // Replace later
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-800 dark:text-white hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tahirul-islam-94030332a/" // Replace later
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-800 dark:text-white hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
