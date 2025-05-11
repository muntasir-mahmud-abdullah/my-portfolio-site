import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";
import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import ProjectHero from "./components/ProjectHero";
import ProjectOverview from "./components/ProjectOverview";
import ProjectChallenge from "./components/ProjectChallenge";
import ProjectSolution from "./components/ProjectSolution";
import ProjectOutcomes from "./components/ProjectOutcomes";
import ProjectGallery from "./components/ProjectGallery";
import ProjectNavigation from "./components/ProjectNavigation";
import CodeSnippet from "./components/CodeSnippet";

const ProjectDetail = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
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
        <ProjectHero />
        <ProjectOverview />
        <ProjectChallenge />
        <ProjectSolution />
        <CodeSnippet />
        <ProjectGallery />
        <ProjectOutcomes />
        <ProjectNavigation />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;