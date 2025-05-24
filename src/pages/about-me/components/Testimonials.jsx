import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Muntasir is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into functional interfaces is impressive. He\'s also great at communicating technical concepts to non-technical team members.",
      relationship: "Project Collaboration"
    },
    {
      id: 2,
      name: "David Chen",
      role: "UX Designer at DesignHub",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote: "Working with Muntasir was a pleasure. He has a keen eye for design and understands the importance of user experience. He took my designs and not only implemented them perfectly but also suggested improvements that enhanced the overall user experience.",
      relationship: "Design Implementation"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO at StartupX",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Muntasir joined our team during a critical phase of our product development, and his impact was immediate. His technical expertise, problem-solving skills, and collaborative approach were exactly what we needed. He\'s not just a developer; he\'s a true problem solver.",
      relationship: "Team Leadership"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
          <h2 className="heading-2 text-text-primary mb-6">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-surface p-8 md:p-12 rounded-lg border border-border">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <Icon name="Quote" size={48} className="text-primary opacity-20" />
            </div>
            
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="heading-3 text-text-primary">{testimonials[currentIndex].name}</h3>
                  <p className="text-primary">{testimonials[currentIndex].role}</p>
                  <p className="text-text-tertiary text-sm mt-1">
                    <Icon name="Link" size={14} className="inline mr-1" />
                    {testimonials[currentIndex].relationship}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-lg text-text-secondary italic mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary" : "bg-border"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-background border border-border hover:bg-surface transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-background border border-border hover:bg-surface transition-colors"
                    aria-label="Next testimonial"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;