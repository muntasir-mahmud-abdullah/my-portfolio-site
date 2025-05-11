import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-text-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center p-6">
            <p className="text-white mb-4 max-w-xs mx-auto">
              {project.description}
            </p>
            <Link
              to={project.link}
              className="btn-primary inline-flex items-center gap-2"
            >
              View Details
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="heading-3 text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            to={project.link}
            className="btn-ghost inline-flex items-center gap-2 text-sm"
          >
            View Project
            <Icon name="ExternalLink" size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;