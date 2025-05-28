import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtu3n1w",
        "template_0cbe92d",
        e.target,
        "s3gDbSsghjxWtsPcO"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been successfully sent.",
            background: "#f0f4ff",
            color: "#333",
            iconColor: "#3085d6",
            showConfirmButton: false,
            timer: 2500,
            backdrop: `rgba(0,0,123,0.4)`,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-16 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-950"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form className="flex flex-col gap-6" onSubmit={sendEmail} autoComplete="off">
          {[{
            label: "Name", name: "name", type: "text", placeholder: "Your full name",
          }, {
            label: "Email", name: "email", type: "email", placeholder: "you@example.com",
          }].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                autoComplete={field.name === "name" ? "new-name" : "off"}
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
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

      <motion.div
        className="mt-10 flex justify-center gap-8 text-blue-700 dark:text-blue-400 text-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="https://github.com/Tahir1605" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tahirul-islam-94030332a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
