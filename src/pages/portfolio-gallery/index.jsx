import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";

import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import ProjectCard from "./components/ProjectCard";
import FilterBar from "./components/FilterBar";
import PageHeader from "./components/PageHeader";

const PortfolioGallery = () => {
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTechFilter, setActiveTechFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mock data for projects
    const projectsData = [
      {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A responsive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.",
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "web-application",
        technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
        featured: true,
        link: "/project-detail",
      },
      {
        id: 2,
        title: "Travel Booking App",
        description: "A modern travel booking application with interactive maps, personalized recommendations, and secure payment processing.",
        image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "web-application",
        technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
        featured: true,
        link: "/project-detail",
      },
      {
        id: 3,
        title: "Personal Finance Tracker",
        description: "A comprehensive financial management tool that helps users track expenses, set budgets, and visualize spending patterns.",
        image: "https://images.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042_1280.jpg",
        category: "web-application",
        technologies: ["Vue.js", "Firebase", "D3.js"],
        featured: false,
        link: "/project-detail",
      },
      {
        id: 4,
        title: "Recipe Sharing Platform",
        description: "A community-driven platform for food enthusiasts to discover, share, and save recipes with social features.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        category: "website",
        technologies: ["React", "Node.js", "MongoDB"],
        featured: false,
        link: "/project-detail",
      },
      {
        id: 5,
        title: "Weather Forecast App",
        description: "A sleek weather application providing accurate forecasts, radar maps, and personalized weather alerts.",
        image: "https://images.pixabay.com/photo/2018/05/31/11/54/clouds-3443167_1280.jpg",
        category: "web-application",
        technologies: ["React", "OpenWeather API", "Tailwind CSS"],
        featured: false,
        link: "/project-detail",
      },
      {
        id: 6,
        title: "Corporate Website Redesign",
        description: "A complete overhaul of a corporate website focusing on modern design, improved user experience, and performance optimization.",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "website",
        technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
        featured: false,
        link: "/project-detail",
      },
      {
        id: 7,
        title: "Task Management System",
        description: "A collaborative task management tool designed for teams with features like task assignment, progress tracking, and deadline notifications.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        category: "web-application",
        technologies: ["Angular", "Firebase", "Material UI"],
        featured: true,
        link: "/project-detail",
      },
      {
        id: 8,
        title: "Interactive Data Visualization",
        description: "A set of interactive data visualizations for a research institution to present complex datasets in an accessible format.",
        image: "https://images.pixabay.com/photo/2018/09/20/11/36/dashboard-3690666_1280.jpg",
        category: "ui-component",
        technologies: ["D3.js", "React", "TypeScript"],
        featured: false,
        link: "/project-detail",
      },
      {
        id: 9,
        title: "E-Learning Platform",
        description: "An educational platform offering online courses with features like video lectures, quizzes, and progress tracking.",
        image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "web-application",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        featured: false,
        link: "/project-detail",
      },
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    filterProjects(activeFilter, activeTechFilter);
  }, [activeFilter, activeTechFilter, projects]);

  const filterProjects = (category, tech) => {
    let filtered = [...projects];

    if (category !== "all") {
      filtered = filtered.filter(project => project.category === category);
    }

    if (tech !== "all") {
      filtered = filtered.filter(project => 
        project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  };

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
        <PageHeader />
        <FilterBar 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          activeTechFilter={activeTechFilter}
          setActiveTechFilter={setActiveTechFilter}
        />
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="mx-auto text-text-tertiary mb-4" />
                <h3 className="heading-3 text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-8">
                  No projects match your current filter criteria. Try adjusting your filters.
                </p>
                <button 
                  onClick={() => {
                    setActiveFilter("all");
                    setActiveTechFilter("all");
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioGallery;