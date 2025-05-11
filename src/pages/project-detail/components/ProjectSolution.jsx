import React from "react";
import { motion } from "framer-motion";
import Image from "../../../components/AppImage";

const ProjectSolution = () => {
  const solutionData = {
    description: `To address these challenges, I developed a comprehensive solution that leveraged modern frontend technologies and best practices. The approach focused on creating a modular, scalable architecture that could handle the client's current needs while allowing for future expansion.`,
    keyFeatures: [
      "Implemented a React-based frontend with Redux for state management to ensure predictable data flow",
      "Utilized Tailwind CSS for responsive design, ensuring a consistent experience across all devices",
      "Integrated Chart.js for data visualization, creating interactive charts and graphs for better insights",
      "Developed a custom API layer to efficiently communicate with the backend services",
      "Implemented lazy loading and code splitting to optimize performance and reduce initial load times",
      "Created a comprehensive testing suite using Jest and React Testing Library to ensure reliability"
    ],
    image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-text-primary mb-6">The Solution</h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
            
            <div className="prose prose-lg max-w-none text-text-secondary mb-8">
              <p>{solutionData.description}</p>
            </div>

            <h3 className="heading-4 text-text-primary mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {solutionData.keyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-text-secondary">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <Image
              src={solutionData.image}
              alt="Dashboard Solution"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSolution;