import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-2 text-text-primary mb-6">
            Interested in Working Together?
          </h2>
          <p className="body-large text-text-secondary mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something
            amazing together!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Mail" size={18} />
              Get in Touch
            </Link>
            <a
              href="https://drive.google.com/file/d/1jMOxpJcxM25J56hzoRkpTPHeI_ZfHx_F/view?usp=sharing"
              className="btn-outline inline-flex items-center gap-2"
              id="download-resume" target="_blank"
              // onClick={(e) => {
              //   e.preventDefault();
              //   // Mock download functionality
              //   // alert("Resume download started!");
              // }}
            >
              <Icon name="Download" size={18} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;