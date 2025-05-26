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
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-16 bg-[var(--light-bg)] text-[var(--light-txt)]">
      <h2 className="text-3xl sm:text-4xl font-bold pb-10 sm:pb-12 text-center">
        My Experience 👨‍💻
      </h2>

      <div className="relative border-l-2 sm:border-l-4 border-[var(--highlight)] ml-3 sm:ml-6">
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
            <div className="absolute -left-[13px] sm:-left-[15px] top-3 w-5 sm:w-6 h-5 sm:h-6 bg-[var(--highlight)] rounded-full border-4 border-white shadow-lg z-10"></div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 flex-wrap">
                    <FaBriefcase className="text-[var(--highlight)]" />
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium pt-1 sm:pt-2">
                    {exp.company}
                  </p>
                  <p className="text-xs text-[var(--muted-text)] mb-3 sm:mb-4">
                    {exp.duration}
                  </p>
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-[var(--highlight)] hover:scale-110 transition self-start sm:self-auto"
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
                  <ul className="list-disc list-inside mt-3 text-sm text-gray-800 mb-3">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pl-1">
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
