import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const Timeline = () => {
  const careerTimeline = [
    {
      id: 1,
      period: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "TechVision Inc.",
      description: "Leading the frontend development team in building scalable and responsive web applications. Implementing modern frontend architecture and best practices. Mentoring junior developers and conducting code reviews.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      period: "2020 - 2022",
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with designers to implement pixel-perfect UI. Improved application performance and accessibility.",
      technologies: ["React", "Redux", "JavaScript", "SCSS"]
    },
    {
      id: 3,
      period: "2018 - 2020",
      role: "UI Developer",
      company: "WebCraft Studios",
      description: "Created responsive and interactive user interfaces for various web projects. Worked closely with UX designers to implement design systems. Participated in agile development processes.",
      technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
    },
    {
      id: 4,
      period: "2017 - 2018",
      role: "Web Development Intern",
      company: "InnoTech Solutions",
      description: "Assisted in developing and maintaining company websites. Learned modern web development practices and tools. Participated in team meetings and contributed to project planning.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-text-primary mb-6">Professional Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            My career path and professional growth over the years.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary-light"></div>

          {careerTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

              {/* Content */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm rounded-full mb-3">
                    {item.period}
                  </span>
                  <h3 className="heading-3 text-text-primary mb-1">{item.role}</h3>
                  <h4 className="heading-4 text-primary mb-4">{item.company}</h4>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-text-primary mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="btn-ghost inline-flex items-center gap-2 text-sm"
                  >
                    {expandedItem === item.id ? "Show Less" : "Show More"}
                    <Icon 
                      name={expandedItem === item.id ? "ChevronUp" : "ChevronDown"} 
                      size={16} 
                    />
                  </button>
                  
                  {expandedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <h5 className="font-medium text-text-primary mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-text-secondary space-y-2">
                        <li>Improved application performance by 40% through code optimization</li>
                        <li>Led the implementation of a new design system across multiple projects</li>
                        <li>Mentored 3 junior developers who went on to become mid-level developers</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;