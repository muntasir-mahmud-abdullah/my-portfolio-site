import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ProjectChallenge = () => {
  const challengeData = {
    description: `The primary challenge was to create a dashboard that could handle large volumes of data while maintaining performance and providing a seamless user experience. The client's existing system was outdated and struggled with data processing, leading to delays in decision-making and operational inefficiencies.

Key challenges included:`,
    challenges: [
      {
        title: "Data Integration",
        description: "Integrating data from multiple sources including inventory management systems, payment processors, and shipping providers.",
        icon: "Database"
      },
      {
        title: "Real-time Analytics",
        description: "Implementing real-time analytics that could process and visualize large datasets without performance degradation.",
        icon: "BarChart"
      },
      {
        title: "Responsive Design",
        description: "Creating a responsive interface that worked seamlessly across desktop and mobile devices for on-the-go management.",
        icon: "Smartphone"
      },
      {
        title: "User Permissions",
        description: "Developing a robust permission system that allowed different team members to access only the data relevant to their roles.",
        icon: "Shield"
      }
    ]
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-2 text-text-primary mb-6">The Challenge</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <div className="prose prose-lg max-w-none text-text-secondary mb-12">
            <p>{challengeData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challengeData.challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-surface p-6 rounded-lg border border-border"
              >
                <div className="text-primary mb-4">
                  <Icon name={challenge.icon} size={28} />
                </div>
                <h3 className="heading-4 text-text-primary mb-2">{challenge.title}</h3>
                <p className="text-text-secondary">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectChallenge;