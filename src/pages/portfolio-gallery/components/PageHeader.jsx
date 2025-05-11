import React from "react";
import { motion } from "framer-motion";

const PageHeader = () => {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="display text-text-primary mb-6">Portfolio Gallery</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in frontend development, 
            UI/UX design, and web application architecture. Each project represents 
            a unique challenge and solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;