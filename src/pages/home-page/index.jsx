import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsPreview from "./components/SkillsPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import BlogPreview from "./components/BlogPreview";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating back to top button */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      )}

      {/* Main content */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsPreview />
        <ProjectsPreview />
        {/* <BlogPreview /> */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;