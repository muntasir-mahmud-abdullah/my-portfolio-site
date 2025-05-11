import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const SkillCategory = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-background rounded-lg border border-border overflow-hidden shadow-sm"
    >
      <div 
        className="p-6 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="text-primary p-3 bg-primary-light rounded-lg">
            <Icon name={category.icon} size={24} />
          </div>
          <h3 className="heading-3 text-text-primary">{category.title}</h3>
        </div>
        <button 
          className="text-text-secondary hover:text-primary transition-colors"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={24} />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 border-t border-border">
          <p className="text-text-secondary mb-6">{category.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.skills.map((skill, idx) => (
              <div key={skill.name} className="bg-surface p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">
                    <Icon name={skill.icon} size={20} />
                  </div>
                  <h4 className="font-medium text-text-primary">{skill.name}</h4>
                </div>
                <div className="w-full bg-background rounded-full h-2.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * idx }}
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;