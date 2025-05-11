import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Modern React Patterns for 2023",
      excerpt:
        "Explore the latest React patterns and best practices that will help you write cleaner, more maintainable code.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "May 15, 2023",
      readTime: "8 min read",
      link: "/blog-articles",
    },
    {
      id: 2,
      title: "Optimizing Web Performance",
      excerpt:
        "Learn how to improve your website\'s performance with these practical tips and techniques.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
      date: "April 22, 2023",
      readTime: "6 min read",
      link: "/blog-articles",
    },
    {
      id: 3,
      title: "The Future of CSS: What\'s Coming in 2023",
      excerpt:
        "Discover the exciting new CSS features that are coming to browsers in 2023 and how they\'ll change web development.",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "March 10, 2023",
      readTime: "5 min read",
      link: "/blog-articles",
    },
  ];

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
          <h2 className="heading-2 text-text-primary mb-6">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="body-large text-text-secondary">
            I write about web development, design, and technology. Check out my
            latest articles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-surface rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-text-tertiary mb-3">
                  <span className="text-sm">{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <h3 className="heading-4 text-text-primary mb-3">
                  {post.title}
                </h3>
                <p className="text-text-secondary mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={post.link}
                  className="btn-ghost inline-flex items-center gap-2 self-start mt-auto"
                >
                  Read Article
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/blog-articles"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Articles
            <Icon name="ArrowRight" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;