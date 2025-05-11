import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Mock form submission
    setIsSubmitted(true);
    setIsError(false);
    setEmail("");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-primary mb-6">
            <Icon name="Mail" size={36} />
          </div>
          <h2 className="heading-2 text-text-primary mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Stay updated with the latest articles, tutorials, and insights on
            frontend development. No spam, just valuable content.
          </p>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success bg-opacity-10 text-success p-4 rounded-lg mb-6"
            >
              <div className="flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="mr-2" />
                <p className="font-medium">
                  Thank you for subscribing! Check your email to confirm.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsError(false);
                    }}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-md border ${
                      isError ? "border-error" : "border-border"
                    } bg-background text-text-primary focus:ring-primary focus:ring-2 focus:outline-none`}
                    aria-label="Email address"
                  />
                  {isError && (
                    <p className="absolute text-error text-sm mt-1 left-0">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          )}
          
          <p className="text-text-tertiary text-sm mt-6">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;