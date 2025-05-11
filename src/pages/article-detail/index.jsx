import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";

import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import ArticleHeader from "./components/ArticleHeader";
import ArticleContent from "./components/ArticleContent";
import TableOfContents from "./components/TableOfContents";
import RelatedArticles from "./components/RelatedArticles";
import CommentSection from "./components/CommentSection";

const ArticleDetail = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Floating back to top button */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      )}

      {/* Main content */}
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main article content */}
            <div className="lg:w-2/3">
              <div className="mb-6">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Back to Articles
                </button>
              </div>
              
              <ArticleHeader />
              <ArticleContent />
              <CommentSection />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <TableOfContents />
                <RelatedArticles />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;