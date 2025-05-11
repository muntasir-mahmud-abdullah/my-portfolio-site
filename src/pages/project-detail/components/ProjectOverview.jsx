import React from "react";
import { motion } from "framer-motion";

const ProjectOverview = () => {
  const overviewData = {
    description: `This e-commerce dashboard project was developed for RetailTech Solutions, a company that provides technology solutions for online retailers. The client needed a comprehensive admin dashboard that would allow them to manage their e-commerce operations efficiently, including inventory management, order processing, customer data analysis, and sales reporting.

The dashboard was designed to be intuitive, responsive, and feature-rich, providing real-time analytics and actionable insights to help the client make data-driven decisions. The project involved close collaboration with the client's team to ensure that the dashboard met their specific requirements and integrated seamlessly with their existing systems.`,
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-2 text-text-primary mb-6">Project Overview</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <div className="prose prose-lg max-w-none text-text-secondary">
            <p>{overviewData.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;