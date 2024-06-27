import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WineCarousel from "./BrandsWineCarousel";
import CategoryMenu from "./CategoryMenu";
// import brandWinesData from "../../pages/Home/brands";

const BrandsWineShop = ({ brandWinesData }) => {
  const [selectedCategory, setSelectedCategory] = useState("red");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = Object.keys(brandWinesData);

  return (
    <div className="wine-brands-component">
      <CategoryMenu
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="wine-carousel-wrapper">
        <TransitionGroup>
          <CSSTransition key={selectedCategory} timeout={1000} classNames="fade">
            {/* <h2>{selectedCategory.toUpperCase()} Wines</h2> */}
            <WineCarousel
              className=""
              wines={brandWinesData[selectedCategory]}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default BrandsWineShop;
