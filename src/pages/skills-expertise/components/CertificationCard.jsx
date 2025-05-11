import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col"
    >
      <div className="h-40 overflow-hidden">
        <Image
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="heading-4 text-text-primary mb-2">{certification.title}</h3>
        <p className="text-text-secondary mb-1">{certification.issuer}</p>
        <p className="text-text-tertiary text-sm mb-4">{certification.date}</p>
        <a
          href={certification.link}
          className="btn-ghost inline-flex items-center gap-2 self-start mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
          <Icon name="ExternalLink" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificationCard;