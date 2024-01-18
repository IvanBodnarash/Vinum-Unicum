// CategoryMenu.js
import React from "react";
import "../styles/homepage.scss";

const displayNames = {
  red: "Red Wine",
  white: "White Wine",
  sparkling: "Sparkling Wine",
  rose: "Rosé Wine",
};

const CategoryMenu = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${
            category === activeCategory ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {displayNames[category]}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;