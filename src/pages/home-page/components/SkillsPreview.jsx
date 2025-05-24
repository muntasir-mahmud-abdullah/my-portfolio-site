import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const SkillsPreview = () => {
  const skills = [
    { name: "HTML5", icon: "FileHtml", level: 95 },
    { name: "CSS3", icon: "FileCss", level: 90 },
    { name: "JavaScript", icon: "FileJs", level: 92 },
    { name: "React", icon: "FileCode", level: 88 },
    // { name: "TypeScript", icon: "FileType", level: 80 },
    { name: "Tailwind CSS", icon: "FileText", level: 85 },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-text-primary mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            Here are some of the technologies and tools I work with on a daily
            basis. I'm constantly learning and adding new skills to my toolkit.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-surface rounded-lg p-6 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">
                    <Icon name={skill.icon} size={24} />
                  </div>
                  <h3 className="heading-4 text-text-primary">{skill.name}</h3>
                </div>
                <div className="w-full bg-background rounded-full h-2.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="bg-primary h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-text-secondary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/skills-expertise"
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Skills
              <Icon name="ArrowRight" size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;