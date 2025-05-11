import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const PersonalValues = () => {
  const values = [
    {
      id: 1,
      title: "User-Centered Design",
      description: "I believe that great products start with understanding user needs. I always prioritize creating experiences that are intuitive, accessible, and delightful for the end user.",
      icon: "Users"
    },
    {
      id: 2,
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly, and I\'m committed to growing with it. I dedicate time to learning new technologies, techniques, and best practices to stay at the forefront of frontend development.",
      icon: "BookOpen"
    },
    {
      id: 3,
      title: "Attention to Detail",
      description: "I believe that the small details make a big difference. From pixel-perfect implementations to thoughtful micro-interactions, I pay close attention to the nuances that elevate good products to great ones.",
      icon: "Zoom"
    },
    {
      id: 4,
      title: "Collaborative Approach",
      description: "The best digital products are created by diverse teams working together. I value open communication, constructive feedback, and the power of combining different perspectives and expertise.",
      icon: "Users2"
    }
  ];

  const workingPhilosophy = `My approach to development is guided by a few core principles:

1. **Simplicity Over Complexity**: I strive to find the simplest solution that meets the requirements. Complex solutions are harder to maintain, understand, and extend.

2. **Performance Matters**: Users expect fast, responsive experiences. I optimize for performance from the start, not as an afterthought.

3. **Accessibility First**: The web should be usable by everyone. I build with accessibility in mind from day one.

4. **Maintainable Code**: I write code that's clean, well-documented, and follows best practices, making it easier for future developers (including my future self) to understand and modify.

5. **Continuous Improvement**: Every project is an opportunity to learn and improve. I regularly reflect on my work and seek ways to enhance my skills and processes.`;

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
          <h2 className="heading-2 text-text-primary mb-6">Values & Philosophy</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            The principles and values that guide my work and approach to development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="text-primary mb-4">
                  <Icon name={value.icon} size={32} />
                </div>
                <h3 className="heading-4 text-text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background p-8 rounded-lg shadow-sm border border-border"
          >
            <h3 className="heading-3 text-text-primary mb-6">My Working Philosophy</h3>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p>{workingPhilosophy}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalValues;