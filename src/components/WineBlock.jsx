// WineBlock.js

import React, { useState, useEffect } from "react";
import '../styles/homepage.scss';

const WineBlock = ({ wines, activeCategory }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {

    // Reset the display start index when changing the category or it

    setStartIndex(0);
  }, [activeCategory, wines]);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, wines.length - 3));
  };

  return (
    <div className="wine-block">
      <button className="carousel-button" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="carousel-content">
        {wines.slice(startIndex, startIndex + 3).map((wine, index) => (
          <div key={index} className="wine-item">
            <img className="wine-img" src={wine.imageUrl} alt={wine.name} />
            <h3>{wine.name}</h3>
            <p>{wine.description}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default WineBlock;
