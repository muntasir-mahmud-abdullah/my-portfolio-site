import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const CodeSnippet = () => {
  const codeSnippetData = {
    title: "Custom Hook for Data Fetching",
    description: "One of the key components I developed for this project was a custom React hook for data fetching. This hook simplified API calls throughout the application, handled loading and error states, and implemented caching to improve performance.",
    code: `import { useState, useEffect } from 'react';

// Custom hook for data fetching with caching
export const useDataFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cache = true, dependencies = [] } = options;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchData = async () => {
      setLoading(true);
      
      try {
        // Check cache first if enabled
        if (cache) {
          const cachedData = sessionStorage.getItem(url);
          if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }
        
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(\`API error: \${response.status}\`);
        }
        
        const result = await response.json();
        
        // Store in cache if enabled
        if (cache) {
          sessionStorage.setItem(url, JSON.stringify(result));
        }
        
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Cleanup function
    return () => controller.abort();
  }, [url, cache, ...dependencies]);
  
  return { data, loading, error };
};`
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-2 text-text-primary mb-6">Code Implementation</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <div className="mb-8">
            <h3 className="heading-3 text-text-primary mb-4">{codeSnippetData.title}</h3>
            <p className="text-text-secondary mb-6">{codeSnippetData.description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface rounded-lg overflow-hidden border border-border shadow-sm"
          >
            <div className="flex items-center justify-between bg-background p-4 border-b border-border">
              <div className="flex items-center">
                <Icon name="FileCode" size={20} className="text-primary mr-2" />
                <span className="font-medium">useDataFetch.js</span>
              </div>
              <button 
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Copy code"
                onClick={() => {
                  navigator.clipboard.writeText(codeSnippetData.code);
                  alert("Code copied to clipboard!");
                }}
              >
                <Icon name="Copy" size={18} />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto bg-surface">
              <code className="code text-text-primary">{codeSnippetData.code}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSnippet;