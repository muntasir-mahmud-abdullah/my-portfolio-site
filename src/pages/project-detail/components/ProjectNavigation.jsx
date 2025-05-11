import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectNavigation = () => {
  const navigationData = {
    previous: {
      id: 1,
      title: "Travel Booking App",
      image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/project-detail"
    },
    next: {
      id: 3,
      title: "Fitness Tracking Platform",
      image: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/project-detail"
    }
  };

  return (
    <section className="py-16 bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-3 text-text-primary mb-8 text-center">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link to={navigationData.previous.link} className="block">
                <div className="flex flex-col h-full bg-background rounded-lg overflow-hidden shadow-sm border border-border transition-transform duration-300 group-hover:shadow-md">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={navigationData.previous.image}
                      alt={navigationData.previous.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex items-center">
                    <div className="text-primary mr-4">
                      <Icon name="ArrowLeft" size={20} />
                    </div>
                    <div>
                      <p className="text-text-tertiary text-sm mb-1">Previous Project</p>
                      <h3 className="heading-4 text-text-primary group-hover:text-primary transition-colors">
                        {navigationData.previous.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Next Project */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link to={navigationData.next.link} className="block">
                <div className="flex flex-col h-full bg-background rounded-lg overflow-hidden shadow-sm border border-border transition-transform duration-300 group-hover:shadow-md">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={navigationData.next.image}
                      alt={navigationData.next.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-text-tertiary text-sm mb-1">Next Project</p>
                      <h3 className="heading-4 text-text-primary group-hover:text-primary transition-colors">
                        {navigationData.next.title}
                      </h3>
                    </div>
                    <div className="text-primary ml-4">
                      <Icon name="ArrowRight" size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/portfolio-gallery"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Projects
              <Icon name="Grid" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectNavigation;