import React from "react";

import Icon from "../../../components/AppIcon";

const FilterBar = ({ 
  activeFilter, 
  setActiveFilter, 
  activeTechFilter, 
  setActiveTechFilter 
}) => {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web-application", label: "Web Applications" },
    { id: "website", label: "Websites" },
    { id: "ui-component", label: "UI Components" },
  ];

  const technologies = [
    { id: "all", label: "All Technologies" },
    { id: "react", label: "React" },
    { id: "vue", label: "Vue.js" },
    { id: "angular", label: "Angular" },
    { id: "node", label: "Node.js" },
    { id: "tailwind", label: "Tailwind CSS" },
  ];

  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Category filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center text-text-primary">
              <Icon name="Folder" size={20} className="mr-2" />
              <span className="font-medium">Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-primary text-white" :"bg-surface text-text-secondary hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technology filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center text-text-primary">
              <Icon name="Code2" size={20} className="mr-2" />
              <span className="font-medium">Technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTechFilter(tech.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTechFilter === tech.id
                      ? "bg-primary text-white" :"bg-surface text-text-secondary hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;