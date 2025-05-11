import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6 rounded-lg shadow-sm border border-border"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
          <p className="text-sm text-text-tertiary">{testimonial.position}</p>
        </div>
      </div>
      <div className="mb-4 text-primary">
        <Icon name="Quote" size={24} />
      </div>
      <p className="text-text-secondary italic">{testimonial.content}</p>
    </motion.div>
  );
};

export default TestimonialCard;