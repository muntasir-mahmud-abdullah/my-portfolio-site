import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("[id^='hooks-patterns'], [id^='component-composition'], [id^='state-management'], [id^='performance-optimization'], [id^='testing-strategies']");
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const tocItems = [
    { id: "hooks-patterns", title: "Advanced Hooks Patterns" },
    { id: "component-composition", title: "Component Composition Patterns" },
    { id: "state-management", title: "Modern State Management Approaches" },
    { id: "performance-optimization", title: "Performance Optimization Techniques" },
    { id: "testing-strategies", title: "Modern Testing Strategies" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-surface rounded-lg p-6 border border-border mb-8"
    >
      <h3 className="heading-4 text-text-primary mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex items-center text-sm ${
                activeSection === item.id
                  ? "text-primary font-medium" :"text-text-secondary hover:text-primary"
              } transition-colors duration-300`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id).scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              {activeSection === item.id && (
                <Icon name="ArrowRight" size={14} className="mr-2" />
              )}
              <span className={activeSection === item.id ? "ml-0" : "ml-5"}>
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TableOfContents;