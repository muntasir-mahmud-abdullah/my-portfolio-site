import React from "react";
import Icon from "../../../components/AppIcon";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full md:w-64">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon name="Search" size={18} className="text-text-tertiary" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search articles..."
        className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-text-primary focus:ring-primary focus:ring-2 focus:outline-none"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          aria-label="Clear search"
        >
          <Icon name="X" size={16} className="text-text-tertiary hover:text-text-primary" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;