import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const Pagination = ({ articlesPerPage, totalArticles, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-12" aria-label="Pagination">
      <ul className="flex items-center space-x-2">
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === 1
                ? "text-text-tertiary bg-surface cursor-not-allowed" :"text-text-primary bg-background border border-border hover:bg-primary-light hover:text-primary"
            }`}
            aria-label="Previous page"
          >
            <Icon name="ChevronLeft" size={18} />
          </motion.button>
        </li>
        
        {pageNumbers.map((number) => (
          <li key={number}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(number)}
              className={`flex items-center justify-center w-10 h-10 rounded-md ${
                currentPage === number
                  ? "bg-primary text-white" :"text-text-primary bg-background border border-border hover:bg-primary-light hover:text-primary"
              }`}
              aria-label={`Page ${number}`}
              aria-current={currentPage === number ? "page" : undefined}
            >
              {number}
            </motion.button>
          </li>
        ))}
        
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => 
              currentPage < Math.ceil(totalArticles / articlesPerPage) && 
              paginate(currentPage + 1)
            }
            disabled={currentPage === Math.ceil(totalArticles / articlesPerPage)}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === Math.ceil(totalArticles / articlesPerPage)
                ? "text-text-tertiary bg-surface cursor-not-allowed" :"text-text-primary bg-background border border-border hover:bg-primary-light hover:text-primary"
            }`}
            aria-label="Next page"
          >
            <Icon name="ChevronRight" size={18} />
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;