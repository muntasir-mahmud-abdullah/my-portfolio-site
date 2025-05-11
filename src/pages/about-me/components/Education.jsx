import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2013 - 2017",
      description: "Focused on software engineering and web technologies. Graduated with honors.",
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "User Interface Design",
        "Database Systems"
      ]
    },
    {
      id: 2,
      degree: "Frontend Development Certification",
      institution: "Frontend Masters",
      period: "2018",
      description: "Intensive program covering advanced frontend development concepts and practices.",
      courses: [
        "Advanced JavaScript",
        "React Fundamentals",
        "State Management",
        "Performance Optimization"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2021",
      credentialId: "AWS-DEV-12345"
    },
    {
      id: 2,
      name: "Professional Frontend Developer",
      issuer: "Meta",
      date: "2020",
      credentialId: "MFD-98765"
    },
    {
      id: 3,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2019",
      credentialId: "FCC-JADS-54321"
    }
  ];

  const [activeTab, setActiveTab] = useState("education");
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-text-primary mb-6">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-surface rounded-lg">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "education" ?"bg-primary text-white" :"text-text-secondary hover:text-primary"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "certifications"
                    ? "bg-primary text-white" :"text-text-secondary hover:text-primary"
                }`}
              >
                Certifications
              </button>
            </div>
          </div>

          {/* Education Content */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {educationData.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface p-6 rounded-lg border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="heading-3 text-text-primary">{item.degree}</h3>
                      <h4 className="heading-4 text-primary">{item.institution}</h4>
                    </div>
                    <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="btn-ghost inline-flex items-center gap-2 text-sm"
                  >
                    {expandedItem === item.id ? "Hide Courses" : "View Courses"}
                    <Icon 
                      name={expandedItem === item.id ? "ChevronUp" : "ChevronDown"} 
                      size={16} 
                    />
                  </button>
                  
                  {expandedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <h5 className="font-medium text-text-primary mb-2">Relevant Courses:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.courses.map((course, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={16} className="text-success" />
                            <span className="text-text-secondary">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* Certifications Content */}
          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-surface p-6 rounded-lg border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light p-3 rounded-full">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-4 text-text-primary">{cert.name}</h3>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-text-tertiary text-sm mt-1">Issued {cert.date}</p>
                      <p className="text-text-tertiary text-sm">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;