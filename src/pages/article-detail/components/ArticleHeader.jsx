import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ArticleHeader = () => {
  const articleData = {
    title: "Modern React Patterns for 2023",
    publishDate: "May 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Frontend Developer"
    },
    categories: ["React", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="mb-6">
        {articleData.categories.map((category, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 bg-primary-light text-primary text-sm rounded-full mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>

      <h1 className="display text-text-primary mb-6">{articleData.title}</h1>

      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={articleData.author.avatar}
            alt={articleData.author.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-text-primary">
            {articleData.author.name}
          </p>
          <p className="text-sm text-text-tertiary">{articleData.author.role}</p>
        </div>
        <div className="ml-auto flex items-center text-text-tertiary">
          <Icon name="Calendar" size={16} className="mr-2" />
          <span className="text-sm mr-4">{articleData.publishDate}</span>
          <Icon name="Clock" size={16} className="mr-2" />
          <span className="text-sm">{articleData.readTime}</span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden mb-8 h-96">
        <Image
          src={articleData.image}
          alt={articleData.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between border-y border-border py-4 mb-8">
        <div className="flex items-center space-x-2">
          <button
            className="inline-flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Save article"
          >
            <Icon name="Bookmark" size={18} />
            <span>Save</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-text-tertiary">Share:</span>
          <a
            href="#"
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Share on Twitter"
          >
            <Icon name="Twitter" size={18} />
          </a>
          <a
            href="#"
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Share on Facebook"
          >
            <Icon name="Facebook" size={18} />
          </a>
          <a
            href="#"
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Share on LinkedIn"
          >
            <Icon name="Linkedin" size={18} />
          </a>
          <button
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Copy link"
          >
            <Icon name="Link" size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleHeader;