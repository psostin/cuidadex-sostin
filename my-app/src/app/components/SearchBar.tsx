import React from "react";
import {SearchBarProps} from "../types/SearchBarProps"

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, handleSearch, placeholder }) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
  
    return (
      <div className="relative mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 transition-colors"
        >
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;
