import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A responsive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.",
      image:
        "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      link: "/portfolio-gallery",
    },
    {
      id: 2,
      title: "Travel Booking App",
      description:
        "A modern travel booking application with interactive maps, personalized recommendations, and secure payment processing.",
      image:
        "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
      link: "/portfolio-gallery",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-text-primary mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            Here are some of my recent projects. Each project is unique and
            solves a specific problem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  View Project
                  <Icon name="ExternalLink" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/portfolio-gallery"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <Icon name="ArrowRight" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;