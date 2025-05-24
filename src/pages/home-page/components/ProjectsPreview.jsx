import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: "Learnify Online Tutor Platform",
      description:
        "Learnify is a modern full-stack MERN (MongoDB, Express, React, Node.js) application that connects language learners with qualified tutors worldwide. It simplifies the process of finding, reviewing, and booking tutors in a user-friendly interface, featuring real-time authentication, secure bookings, and dynamic content management.",
      image:
        "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js","MongoDB"],
      link: "https://learnify-5acd7.web.app",
      github: "https://github.com/muntasir-mahmud-abdullah/learnify-client"
    },
    {
      id: 2,
      title: "Employee Management System",
      description:
        "Employee Management is a full-stack web application designed to help organizations track employee workflows, manage payroll, and oversee HR processes. It features role-based dashboards for Employees, HR executives, and Admins, secure authentication and responsive UI built with React, Tailwind CSS, and DaisyUI.",
      image:
        "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Flowbite", "TailwindCSS", "DaisyUI","MongoDB","Node.Js"],
      link: "https://employee-management-4bde3.web.app",
      github: "https://github.com/muntasir-mahmud-abdullah/employee-management-client",
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
                <a
                  href={project.link} target="_blank" 
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  View Project
                  <Icon name="ExternalLink" size={16} />
                </a>
                <a
                  href={project.github} target="_blank" 
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Source Code
                  <Icon name="ExternalCode" size={16} />
                </a>
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
          {/* <Link
            to="/portfolio-gallery"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <Icon name="ArrowRight" size={18} />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;