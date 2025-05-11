import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Icon from "../../components/AppIcon";
import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import BlogHeader from "./components/BlogHeader";
import ArticleCard from "./components/ArticleCard";
import FeaturedArticle from "./components/FeaturedArticle";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import NewsletterSignup from "./components/NewsletterSignup";

const BlogArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const articlesPerPage = 6;

  useEffect(() => {
    // Fetch articles data (mock)
    setArticles(blogArticles);
    setFilteredArticles(blogArticles);
    
    // Extract unique categories
    const uniqueCategories = ["All", ...new Set(blogArticles.map(article => article.category))];
    setCategories(uniqueCategories);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Filter articles based on category and search query
    let result = [...blogArticles];
    
    if (activeCategory !== "All") {
      result = result.filter(article => article.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        article => 
          article.title.toLowerCase().includes(query) || 
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredArticles(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeCategory, searchQuery]);

  // Get current articles for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // Featured article is the most recent one
  const featuredArticle = blogArticles[0];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-background">
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
      
      <main>
        <BlogHeader />
        
        <section className="py-12 md:py-16 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Article */}
            <FeaturedArticle article={featuredArticle} />
            
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 mt-16">
              <CategoryFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
              <SearchBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
              />
            </div>
            
            {/* Articles Grid */}
            {currentArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-primary mb-4">
                  <Icon name="Search" size={48} />
                </div>
                <h3 className="heading-3 text-text-primary mb-2">No articles found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="btn-outline"
                >
                  Reset Filters
                </button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredArticles.length > articlesPerPage && (
              <Pagination 
                articlesPerPage={articlesPerPage}
                totalArticles={filteredArticles.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            )}
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

// Mock data for blog articles
const blogArticles = [
  {
    id: 1,
    title: "Building Accessible React Applications: A Comprehensive Guide",
    excerpt: "Learn how to create React applications that are accessible to everyone, including people with disabilities. This guide covers ARIA attributes, keyboard navigation, and more.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Accessibility",
    date: "June 15, 2023",
    readTime: "12 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["React", "Accessibility", "Frontend"],
    featured: true
  },
  {
    id: 2,
    title: "Modern React Patterns for 2023",
    excerpt: "Explore the latest React patterns and best practices that will help you write cleaner, more maintainable code in your projects.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "React",
    date: "May 22, 2023",
    readTime: "8 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["React", "JavaScript", "Best Practices"],
    featured: false
  },
  {
    id: 3,
    title: "Optimizing Web Performance: Strategies for Frontend Developers",
    excerpt: "Learn how to improve your website\'s performance with these practical tips and techniques that every frontend developer should know.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    category: "Performance",
    date: "April 18, 2023",
    readTime: "10 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Performance", "Optimization", "Web Vitals"],
    featured: false
  },
  {
    id: 4,
    title: "The Future of CSS: What\'s Coming in 2023",
    excerpt: "Discover the exciting new CSS features that are coming to browsers in 2023 and how they\'ll change web development for the better.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "CSS",
    date: "March 10, 2023",
    readTime: "7 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["CSS", "Frontend", "Web Standards"],
    featured: false
  },
  {
    id: 5,
    title: "Building a Design System with React and Tailwind CSS",
    excerpt: "Learn how to create a comprehensive design system for your projects using React components and Tailwind CSS for consistent, maintainable UI.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    category: "Design Systems",
    date: "February 25, 2023",
    readTime: "15 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Design Systems", "React", "Tailwind CSS"],
    featured: false
  },
  {
    id: 6,
    title: "State Management in React: Context API vs. Redux vs. Zustand",
    excerpt: "A comprehensive comparison of different state management solutions in React to help you choose the right one for your project.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "React",
    date: "January 30, 2023",
    readTime: "11 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["React", "State Management", "Redux", "Context API"],
    featured: false
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout: Advanced Techniques",
    excerpt: "Take your CSS Grid skills to the next level with these advanced techniques and patterns for creating complex, responsive layouts.",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "CSS",
    date: "December 12, 2022",
    readTime: "9 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["CSS", "Grid Layout", "Responsive Design"],
    featured: false
  },
  {
    id: 8,
    title: "TypeScript for React Developers: A Practical Guide",
    excerpt: "Learn how to leverage TypeScript in your React applications to catch errors early, improve developer experience, and enhance code quality.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "TypeScript",
    date: "November 5, 2022",
    readTime: "13 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["TypeScript", "React", "JavaScript"],
    featured: false
  },
  {
    id: 9,
    title: "Creating Animations with Framer Motion in React",
    excerpt: "A step-by-step guide to implementing beautiful, physics-based animations in your React applications using Framer Motion.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Animation",
    date: "October 18, 2022",
    readTime: "8 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Animation", "React", "Framer Motion"],
    featured: false
  },
  {
    id: 10,
    title: "Implementing Dark Mode in React Applications",
    excerpt: "Learn how to add a dark mode toggle to your React application using CSS variables, context API, and local storage for user preferences.",
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "UI/UX",
    date: "September 30, 2022",
    readTime: "10 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    tags: ["Dark Mode", "React", "CSS Variables", "UI/UX"],
    featured: false
  }
];

export default BlogArticles;