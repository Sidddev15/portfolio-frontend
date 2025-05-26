import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // logging
    console.log("Submitted Data:", formData);
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-20 bg-[var(--light-bg)] text-[var(--light-txt)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl rounded-2xl p-10 w-full max-w-xl"
      >
        <h2 className="text-4xl font-bold pb-6 text-center">Get In Touch ✉️</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "subject"].map((field, i) => (
            <div key={i} className="relative group">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[var(--highlight)] transition-all"
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[var(--highlight)] peer-focus:font-medium transition-all"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <motion.span
                layoutId="input-focus"
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--highlight)] peer-focus:w-full transition-all"
              />
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[var(--highlight)] transition-all resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[var(--highlight)] peer-focus:font-medium transition-all"
            >
              Message
            </label>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.9 }}
            disabled={status === "sending"}
            className={`w-full py-3 rounded-full font-semibold text-white transition shadow-md ${
              status === "sent"
                ? "bg-green-500 cursor-default"
                : status === "sending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-yellow-500 hover:brightness-110"
            }`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send Message"}
          </motion.button>

          {status === "sent" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-green-600 mt-2 text-sm"
            >
              <FaCheckCircle /> Your message has been sent successfully!
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
