import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const AboutSection = () => {
  const personalInfo = {
    biography: `I'm a passionate frontend developer with over 5 years of experience specializing in building exceptional digital experiences. My journey in web development began with a fascination for creating things that live on the internet. This curiosity led me to pursue a degree in Computer Science and eventually specialize in frontend technologies.

What drives me is the intersection of design and technology – finding ways to make complex interfaces feel simple and intuitive for users while maintaining technical excellence behind the scenes.`,
  };

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
          <h2 className="heading-2 text-text-primary mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none text-text-secondary mb-12"
          >
            <p className="mb-4">{personalInfo.biography}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary mb-4">
                <Icon name="Code2" size={32} />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">
                Frontend Development
              </h3>
              <p className="text-text-secondary">
                Building responsive, accessible, and performant web applications
                with modern technologies.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary mb-4">
                <Icon name="Palette" size={32} />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">UI/UX Design</h3>
              <p className="text-text-secondary">
                Creating intuitive user interfaces with a focus on usability and
                user experience.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary mb-4">
                <Icon name="Rocket" size={32} />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">
                Performance Optimization
              </h3>
              <p className="text-text-secondary">
                Optimizing web applications for speed, accessibility, and search
                engine visibility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/about-me"
              className="btn-outline inline-flex items-center gap-2"
            >
              Learn More About Me
              <Icon name="ArrowRight" size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;