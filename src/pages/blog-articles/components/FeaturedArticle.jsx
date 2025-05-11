import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mr-2">
              Featured
            </span>
            <span className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
              {article.category}
            </span>
          </div>
          <h2 className="heading-2 text-text-primary mb-4">
            {article.title}
          </h2>
          <p className="text-text-secondary mb-6">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-text-primary font-medium">
                  {article.author.name}
                </p>
                <div className="flex items-center text-text-tertiary text-sm">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`/article-detail?id=${article.id}`}
            className="btn-primary inline-flex items-center gap-2 self-start"
          >
            Read Article
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;