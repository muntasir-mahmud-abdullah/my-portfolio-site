import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ProjectOutcomes = () => {
  const outcomesData = {
    description: `The implementation of the e-commerce dashboard resulted in significant improvements for the client's business operations. The new system provided better visibility into key metrics, streamlined workflows, and enabled data-driven decision making.`,
    results: [
      {
        title: "40% Reduction in Order Processing Time",
        description: "The streamlined interface and automated workflows reduced the time required to process orders, improving operational efficiency.",
        icon: "Clock"
      },
      {
        title: "25% Increase in Inventory Turnover",
        description: "Better inventory insights and predictive analytics helped optimize stock levels and reduce excess inventory.",
        icon: "TrendingUp"
      },
      {
        title: "98% User Satisfaction Rating",
        description: "Feedback from the client\'s team indicated high satisfaction with the intuitive interface and comprehensive features.",
        icon: "ThumbsUp"
      },
      {
        title: "15% Increase in Revenue",
        description: "Improved decision-making capabilities and operational efficiencies contributed to overall revenue growth.",
        icon: "DollarSign"
      }
    ],
    testimonial: {
      quote: "The dashboard has transformed how we manage our e-commerce operations. The intuitive interface and powerful analytics have given us unprecedented visibility into our business, helping us make better decisions and grow our revenue.",
      author: "Sarah Johnson",
      position: "COO, RetailTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-2 text-text-primary mb-6">Outcomes & Results</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <div className="prose prose-lg max-w-none text-text-secondary mb-12">
            <p>{outcomesData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {outcomesData.results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-surface p-6 rounded-lg border border-border"
              >
                <div className="text-primary mb-4">
                  <Icon name={result.icon} size={28} />
                </div>
                <h3 className="heading-4 text-text-primary mb-2">{result.title}</h3>
                <p className="text-text-secondary">{result.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary bg-opacity-5 p-8 rounded-lg border border-primary border-opacity-20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={outcomesData.testimonial.avatar}
                  alt={outcomesData.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-primary mb-2">
                  <Icon name="Quote" size={24} />
                </div>
                <p className="text-text-primary text-lg italic mb-4">
                  "{outcomesData.testimonial.quote}"
                </p>
                <p className="font-medium text-text-primary">
                  {outcomesData.testimonial.author}
                </p>
                <p className="text-text-secondary">
                  {outcomesData.testimonial.position}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOutcomes;