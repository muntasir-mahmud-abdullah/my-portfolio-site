import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-text-tertiary mb-3">
          <span className="text-sm">{article.date}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">{article.readTime}</span>
        </div>
        <div className="mb-3">
          <span className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
            {article.category}
          </span>
        </div>
        <h3 className="heading-4 text-text-primary mb-3">
          {article.title}
        </h3>
        <p className="text-text-secondary mb-6 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-sm text-text-secondary">
              {article.author.name}
            </span>
          </div>
          <Link
            to={`/article-detail?id=${article.id}`}
            className="btn-ghost inline-flex items-center gap-2"
          >
            Read More
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;