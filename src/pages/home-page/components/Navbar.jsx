import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home-page" },
    // { name: "Portfolio", path: "/portfolio-gallery" },
    { name: "About", path: "/about-me" },
    { name: "Skills", path: "/skills-expertise" },
    // { name: "Blog", path: "/blog-articles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background bg-opacity-90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/home-page"
            className="flex items-center space-x-2"
            aria-label="Go to homepage"
          >
            <div className="text-primary">
              <Icon name="Code" size={28} />
            </div>
            <span className="text-xl font-bold text-text-primary">
              Dev<span className="text-primary">Portfolio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1jMOxpJcxM25J56hzoRkpTPHeI_ZfHx_F/view?usp=sharing"
              className="btn-primary flex items-center space-x-2" target="_blank"
            >
              <Icon name="Download" size={16} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-text-primary p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#download-resume"
              className="btn-primary flex items-center justify-center space-x-2 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Icon name="Download" size={16} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;