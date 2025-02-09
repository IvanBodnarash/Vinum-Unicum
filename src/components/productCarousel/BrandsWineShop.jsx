import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WineCarousel from "./BrandsWineCarousel";
import CategoryMenu from "./CategoryMenu";

import mockwines from "../../data/data";

const BrandsWineShop = ({ wines }) => {
  const [selectedCategory, setSelectedCategory] = useState("red");
  const [displayedWines, setDisplayedWines] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredWines = mockwines.filter(
      (item) => item.isExclusive === true && item.type === "red"
    );
    setDisplayedWines(filteredWines);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredWines = mockwines.filter(
      (item) => item.isExclusive === true && item.type === category
    );
    setDisplayedWines(filteredWines);
  };

  const categories = ["red", "white", "sparkling", "rose"];

  return (
    <div className="wine-brands-component">
      <CategoryMenu
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="wine-carousel-wrapper">
        <TransitionGroup>
          <CSSTransition
            key={selectedCategory}
            timeout={1000}
            classNames="fade"
          >
            <WineCarousel className="" wines={displayedWines}/>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default BrandsWineShop;
