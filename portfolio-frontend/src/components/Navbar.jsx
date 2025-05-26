import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
  { label: "Tech Stack", to: "/techstack" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[var(--light-bg)] shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-2"
          style={{ width: "103.5px", height: "28px" }}
        >
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition hover:text-[var(--highlight)] ${
                  isActive
                    ? "text-[var(--highlight)] font-semibold"
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-[var(--highlight)] rounded"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[var(--highlight)] focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--light-bg)] px-6 pt-4 pb-6 border-t border-gray-200 shadow-inner"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium px-3 py-2 rounded transition hover:bg-[var(--highlight)] hover:text-white ${
                      isActive
                        ? "text-[var(--highlight)] font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
