// WineBlock.js

// import React, { useState, useEffect } from "react";
import React from 'react';
import '../styles/homepage.scss';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import brands from '../pages/Home/brands';

import Slider from "react-slick";

// const WineBlock = ({ wines, activeCategory }) => {
//   const [startIndex, setStartIndex] = useState(0);

//   useEffect(() => {

//     // Reset the display start index when changing the category or it

//     setStartIndex(0);
//   }, [activeCategory, wines]);

//   const handlePrevClick = () => {
//     setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
//   };

//   const handleNextClick = () => {
//     setStartIndex((prevIndex) => Math.min(prevIndex + 3, wines.length - 3));
//   };

//   return (
//     <div className="wine-block">
//       <button className="carousel-button" onClick={handlePrevClick}>
//         &lt;
//       </button>
//       <div className="carousel-content">
//         {wines.slice(startIndex, startIndex + 3).map((wine, index) => (
//           <div key={index} className="wine-item">
//             <img className="wine-img" src={wine.imageUrl} alt={wine.name} />
//             <h3>{wine.name}</h3>
//             <p>{wine.description}</p>
//             {/* <h4>{wine.location}</h4>
//             <span style={{ fontWeight: "bold" }}>${wine.price} CAD</span> */}
//           </div>
//         ))}
//       </div>
//       <button className="carousel-button" onClick={handleNextClick}>
//         &gt;
//       </button>
//     </div>
//   );
// };

const WineBlock = ({ wines }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdArrowForwardIos />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdArrowBackIos />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    // className: 'center',
    // centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-carousel">
      <Slider {...settings} className="wine-block-1">
        {brands.map((brand) => (
          <div className="wine-item-1" key={brand.id}>
            <div>
              <img className="wine-img" src={brand.imageUrl} alt={brand.name} />
            </div>
            <div className="item-info">
              <h3>{brand.name}</h3>
              <h4>{brand.location}</h4>
              <span style={{ fontWeight: "bold" }}>${brand.price} CAD</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WineBlock;
