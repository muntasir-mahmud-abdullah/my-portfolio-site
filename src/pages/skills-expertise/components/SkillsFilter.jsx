import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const SkillsFilter = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      <button
        onClick={() => setActiveFilter("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeFilter === "all" ?"bg-primary text-white" :"bg-surface text-text-secondary hover:bg-primary-light"
        }`}
      >
        All Skills
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === category.id
              ? "bg-primary text-white" :"bg-surface text-text-secondary hover:bg-primary-light"
          }`}
        >
          <Icon name={category.icon} size={16} />
          {category.title}
        </button>
      ))}
    </motion.div>
  );
};

export default SkillsFilter;