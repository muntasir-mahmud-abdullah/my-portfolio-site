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
            Based in Chattogram, Bangladesh, but working with clients worldwide. Feel free
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
            title="Chattogram"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.355909917355!2d91.75894711009465!3d22.377936379545883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd984b74bb78b%3A0x68349a3d1a88250a!2sLatifpur%20School%20Rd%2C%20Salimpur%204317!5e0!3m2!1sen!2sbd!4v1748100284856!5m2!1sen!2sbd"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;