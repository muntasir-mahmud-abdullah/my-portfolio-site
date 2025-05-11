import React from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="heading-2 text-text-primary mb-6">My Location</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            Based in San Francisco, but working with clients worldwide. Feel free
            to reach out regardless of your location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-96 rounded-lg overflow-hidden shadow-md border border-border"
        >
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="San Francisco"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;