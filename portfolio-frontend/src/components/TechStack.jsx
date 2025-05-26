import React, { useState } from "react";
import { techStack } from "../data/techStack.js";
import * as Ri from "react-icons/ri";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Gr from "react-icons/gr";
import * as Bi from "react-icons/bi";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const allIcons = { ...Fa, ...Si, ...Gr, ...Ri, ...Bi };

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Testing",
  "Soft Skills",
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStack = techStack
    .filter(
      (tech) => activeCategory === "All" || tech.category === activeCategory
    )
    .filter((tech) =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Aggregate category scores for radar chart
  const radarData = categories
    .filter((cat) => cat !== "All")
    .map((cat) => {
      const skills = techStack.filter((t) => t.category === cat);
      const avg = skills.reduce((sum, t) => sum + t.level, 0) / skills.length;
      return { subject: cat, A: avg };
    });

  return (
    <div className="min-h-screen px-6 md:px-16 py-20 bg-[var(--light-bg)] text-[var(--light-txt)]">
      <h2 className="text-4xl font-bold pb-8 text-center">Tech Stack 🎨</h2>

      {/* 🔍 Search & Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
              activeCategory === cat
                ? "bg-[var(--highlight)] text-white"
                : "bg-white text-[var(--highlight)] border-[var(--highlight)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for a tech..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full max-w-sm border rounded-full text-sm focus:outline-none shadow-sm"
        />
      </div>

      {/* 📊 Radar Chart */}
      <div className="w-full h-64 mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Skill Level"
              dataKey="A"
              stroke="#FFA726"
              fill="#FFA726"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* 🧱 Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredStack.map((tech, index) => {
          const Icon = allIcons[tech.icon];
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center border-l-4 border-[var(--highlight)]"
            >
              {Icon && (
                <Icon className="text-3xl mb-2 text-[var(--highlight)]" />
              )}
              <p className="text-sm font-semibold">{tech.name}</p>
              <p className="text-xs text-[var(--muted-text)]">
                {tech.category}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-[var(--highlight)] h-2 rounded-full"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1 text-gray-600">
                {tech.level}% Proficient
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
