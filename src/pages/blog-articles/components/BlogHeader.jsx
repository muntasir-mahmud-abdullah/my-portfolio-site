import React from "react";
import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <section className="pt-32 pb-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="display text-text-primary mb-6">
            Blog & <span className="text-primary">Articles</span>
          </h1>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Thoughts, insights, and perspectives on frontend development, design,
            and the latest web technologies. Dive into my articles to learn
            something new.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeader;