import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-gradient-to-t from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center md:text-left text-sm text-gray-600 dark:text-gray-300">
          Made with <FaHeart className="inline text-red-500 mx-1" /> by Tahirul islam &copy; {new Date().getFullYear()}
        </p>

       
      </motion.div>
    </footer>
  );
};

export default Footer;
