import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";
import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import SkillCategory from "./components/SkillCategory";
import SkillChart from "./components/SkillChart";
import TestimonialCard from "./components/TestimonialCard";
import CertificationCard from "./components/CertificationCard";
import SkillsFilter from "./components/SkillsFilter";

const SkillsExpertise = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "Code2",
      skills: [
        { name: "HTML5", level: 95, icon: "FileHtml" },
        { name: "CSS3/SASS", level: 90, icon: "FileCss" },
        { name: "JavaScript (ES6+)", level: 92, icon: "FileJs" },
        { name: "TypeScript", level: 85, icon: "FileType" },
        { name: "React.js", level: 90, icon: "FileCode" },
        { name: "Vue.js", level: 80, icon: "FileCode" },
      ],
      description: "Building responsive, accessible, and performant web applications with modern JavaScript frameworks and libraries."
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: "Palette",
      skills: [
        { name: "Figma", level: 88, icon: "Figma" },
        { name: "Adobe XD", level: 82, icon: "PenTool" },
        { name: "Sketch", level: 75, icon: "PenTool" },
        { name: "Wireframing", level: 90, icon: "LayoutGrid" },
        { name: "Prototyping", level: 85, icon: "Layers" },
        { name: "User Research", level: 80, icon: "Search" },
      ],
      description: "Creating intuitive user interfaces with a focus on usability, accessibility, and visual design principles."
    },
    {
      id: "performance",
      title: "Performance Optimization",
      icon: "Rocket",
      skills: [
        { name: "Webpack", level: 85, icon: "Package" },
        { name: "Lighthouse", level: 90, icon: "Gauge" },
        { name: "Web Vitals", level: 88, icon: "Activity" },
        { name: "Lazy Loading", level: 92, icon: "Download" },
        { name: "Code Splitting", level: 85, icon: "SplitSquare" },
        { name: "Caching Strategies", level: 80, icon: "Database" },
      ],
      description: "Optimizing web applications for speed, accessibility, and search engine visibility using modern techniques and tools."
    },
    {
      id: "tools",
      title: "Development Tools",
      icon: "Wrench",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "Github" },
        { name: "VS Code", level: 90, icon: "Code" },
        { name: "npm/yarn", level: 92, icon: "Package" },
        { name: "Jest", level: 85, icon: "TestTube" },
        { name: "Cypress", level: 80, icon: "TestTube" },
        { name: "Docker", level: 75, icon: "Container" },
      ],
      description: "Utilizing modern development tools and workflows to improve productivity, code quality, and collaboration."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Advanced React and Redux",
      issuer: "Udemy",
      date: "December 2022",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "August 2022",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Web Performance Optimization",
      issuer: "Frontend Masters",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
      link: "#"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      content: "Alex\'s frontend development skills are exceptional. The React application he built for us was not only visually stunning but also performed flawlessly across all devices. His attention to detail and commitment to accessibility standards set him apart.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO at StartupX",
      content: "Working with Alex on our UI redesign was a game-changer. His understanding of both design principles and technical implementation allowed us to create an interface that not only looks great but also delivers on performance metrics.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  const filteredCategories = activeFilter === "all" 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeFilter);

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
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="heading-1 text-text-primary mb-6">
                Skills & <span className="text-primary">Expertise</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="body-large text-text-secondary mb-8">
                A comprehensive overview of my technical capabilities, tools, and methodologies
                that I've mastered throughout my professional journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="heading-2 text-text-primary mb-6">Technical Proficiency</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="body-large text-text-secondary">
                My expertise spans across various technologies and methodologies in web development,
                with a focus on creating exceptional user experiences.
              </p>
            </motion.div>

            {/* Skills Filter */}
            <SkillsFilter 
              categories={skillCategories} 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
            />

            {/* Skills Categories */}
            <div className="grid grid-cols-1 gap-8 mb-16">
              {filteredCategories.map((category, index) => (
                <SkillCategory 
                  key={category.id} 
                  category={category} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Chart Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="heading-2 text-text-primary mb-6">Skills Visualization</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="body-large text-text-secondary">
                A visual representation of my technical skills and proficiency levels.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <SkillChart categories={skillCategories} />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="heading-2 text-text-primary mb-6">Certifications & Education</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="body-large text-text-secondary">
                Continuous learning is a core part of my professional philosophy. Here are some of my recent certifications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} certification={cert} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="heading-2 text-text-primary mb-6">Skill Endorsements</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="body-large text-text-secondary">
                What clients and colleagues say about my technical expertise and work quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary bg-opacity-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="heading-2 text-text-primary mb-6">
                Let's Work Together
              </h2>
              <p className="body-large text-text-secondary mb-10 max-w-2xl mx-auto">
                Interested in leveraging my skills for your next project? I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Icon name="Mail" size={18} />
                  Contact Me
                </a>
                <a
                  href="#download-resume"
                  className="btn-outline inline-flex items-center gap-2"
                  id="download-resume"
                  onClick={(e) => {
                    e.preventDefault();
                    // Mock download functionality
                    alert("Resume download started!");
                  }}
                >
                  <Icon name="Download" size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsExpertise;