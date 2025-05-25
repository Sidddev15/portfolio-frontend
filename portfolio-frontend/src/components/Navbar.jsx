import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust path to your logo file

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Section: Brand + Logo */}
        <div
          className="flex items-center space-x-2"
          style={{ width: "103.5px", height: "28px" }}
        >
          <img src={logo} alt="Logo" className="w-100 h-auto object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 ${
                location.pathname === item.path
                  ? "font-semibold text-orange-500"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
