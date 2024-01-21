import React, { useState } from "react";
import WineCarousel from "./BrandsWineCarousel";
import CategoryMenu from "./CategoryMenu";
import brandWinesData from "../../pages/Home/brands";

const BrandsWineShop = ({ brandWinesData }) => {
    const [selectedCategory, setSelectedCategory] = useState("red");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const categories = Object.keys(brandWinesData);

    return (
        <div>
            <CategoryMenu
                categories={categories}
                activeCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            {/* <h2>{selectedCategory.toUpperCase()} Wines</h2> */}
            <WineCarousel wines={brandWinesData[selectedCategory]} />
        </div>
    )
}

export default BrandsWineShop;