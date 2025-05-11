import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const RelatedArticles = () => {
  const relatedArticles = [
    {
      id: 1,
      title: "Optimizing Web Performance",
      excerpt: "Learn how to improve your website\'s performance with these practical tips and techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
      date: "April 22, 2023",
      readTime: "6 min read",
      link: "/blog-articles"
    },
    {
      id: 2,
      title: "The Future of CSS: What\'s Coming in 2023",
      excerpt: "Discover the exciting new CSS features that are coming to browsers in 2023.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "March 10, 2023",
      readTime: "5 min read",
      link: "/blog-articles"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-surface rounded-lg p-6 border border-border"
    >
      <h3 className="heading-4 text-text-primary mb-6">Related Articles</h3>
      <div className="space-y-6">
        {relatedArticles.map((article) => (
          <div key={article.id} className="flex space-x-4">
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1 line-clamp-2">
                <Link
                  to={article.link}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {article.title}
                </Link>
              </h4>
              <div className="flex items-center text-text-tertiary text-xs mb-1">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <Link
          to="/blog-articles"
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-300"
        >
          View All Articles
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default RelatedArticles;