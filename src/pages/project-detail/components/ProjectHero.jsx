import React from "react";
import { motion } from "framer-motion";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ProjectHero = () => {
  const projectData = {
    title: "E-Commerce Dashboard",
    client: "RetailTech Solutions",
    timeline: "Jan 2023 - Apr 2023",
    role: "Lead Frontend Developer",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  return (
    <section className="pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/portfolio-gallery"
            className="inline-flex items-center text-text-secondary hover:text-primary transition-colors duration-300"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Back to Portfolio
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="display text-text-primary mb-6">{projectData.title}</h1>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-text-tertiary mb-1">Client</p>
                <p className="text-text-primary font-medium">{projectData.client}</p>
              </div>
              <div>
                <p className="text-text-tertiary mb-1">Timeline</p>
                <p className="text-text-primary font-medium">{projectData.timeline}</p>
              </div>
              <div>
                <p className="text-text-tertiary mb-1">Role</p>
                <p className="text-text-primary font-medium">{projectData.role}</p>
              </div>
              <div>
                <p className="text-text-tertiary mb-1">Live Demo</p>
                <a 
                  href="https://example.com/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-medium inline-flex items-center"
                >
                  View Demo
                  <Icon name="ExternalLink" size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-text-tertiary mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <Image
              src={projectData.image}
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;