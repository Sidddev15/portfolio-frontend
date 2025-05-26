import React, { useState } from "react";
import { experienceList } from "../data/experience";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-20 bg-[var(--light-bg)] text-[var(--light-txt)]">
      <h2 className="text-4xl font-bold pb-12 text-center">My Experience 👨‍💻</h2>

      <div className="relative border-l-4 border-[var(--highlight)]">
        {experienceList.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[15px] top-3 w-6 h-6 bg-[var(--highlight)] rounded-full border-4 border-white shadow-lg z-10"></div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <FaBriefcase className="text-[var(--highlight)]" />
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium pt-2">
                    {exp.company}
                  </p>
                  <p className="text-xs text-[var(--muted-text)] mb-4">
                    {exp.duration}
                  </p>
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-[var(--highlight)] hover:scale-110 transition"
                >
                  {expandedIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>

              {/* Collapsible Section */}
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-800 mb-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pl-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[var(--highlight)] text-white text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
