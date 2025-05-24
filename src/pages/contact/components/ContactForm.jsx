import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Project type options
  const projectTypes = [
    "Website Development",
    "Web Application",
    "UI/UX Design",
    "Code Review",
    "Consultation",
    "Other",
  ];

  // Budget range options
  const budgetRanges = [
    "Less than $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ];

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem("contactFormData");
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setFormData((prevData) => ({
          ...prevData,
          name: parsedData.name || "",
          email: parsedData.email || "",
        }));
      } catch (error) {
        console.error("Error parsing saved form data:", error);
      }
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Save name and email to localStorage for returning visitors
      localStorage.setItem(
        "contactFormData",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      );

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            ...formData,
            projectType: "",
            budget: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg shadow-sm border border-border p-6 md:p-8"
    >
      <h2 className="heading-3 text-text-primary mb-6">Send a Message</h2>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success bg-opacity-10 border border-success border-opacity-20 rounded-lg p-6 text-center"
        >
          <div className="text-success mb-4">
            <Icon name="CheckCircle" size={48} />
          </div>
          <h3 className="heading-4 text-text-primary mb-2">Message Sent!</h3>
          <p className="text-text-secondary">
            Thank you for reaching out. I'll get back to you within 24-48 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-text-primary font-medium mb-2"
              >
                Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                  errors.name
                    ? "border-error" :"border-border focus:border-primary"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-text-primary font-medium mb-2"
              >
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-error" :"border-border focus:border-primary"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Project type field */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-text-primary font-medium mb-2"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget field
            <div>
              <label
                htmlFor="budget"
                className="block text-text-primary font-medium mb-2"
              >
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select budget range
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div> */}
          </div>

          {/* Message field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-text-primary font-medium mb-2"
            >
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.message
                  ? "border-error" :"border-border focus:border-primary"
              }`}
              placeholder="Tell me about your project, goals, and timeline..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-error">{errors.message}</p>
            )}
            <p className="mt-2 text-sm text-text-tertiary">
              Please provide enough details for me to understand your needs
              (minimum 20 characters).
            </p>
          </div>

          {/* Privacy notice */}
          <div className="mb-6">
            <p className="text-sm text-text-tertiary">
              By submitting this form, you agree to my{" "}
              <a href="#privacy" className="text-primary hover:underline">
                privacy policy
              </a>
              . I'll only use your information to respond to your inquiry and
              won't share it with third parties.
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader" size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;