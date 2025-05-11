import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";
import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";

const ContactPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating back to top button */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      )}

      {/* Main content */}
      <Navbar />
      <main>
        <ContactHeader />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

const ContactHeader = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="heading-1 text-text-primary mb-6">Get in Touch</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Fill out the form below or use one of the
            alternative contact methods.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;