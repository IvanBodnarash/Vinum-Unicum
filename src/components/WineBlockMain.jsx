import React, { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import WineBlock from "./WineBlock";

import { brandWines } from "../pages/Home/brands";

// const winesData = {
//   red: [
//     {
//       name: "Red Wine 1",
//       description: "Description 1",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Red Wine 2",
//       description: "Description 2",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Red Wine 3",
//       description: "Description 3",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Red Wine 4",
//       description: "Description 4",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Red Wine 5",
//       description: "Description 5",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Red Wine 6",
//       description: "Description 6",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     // ...more red wines
//   ],
//   white: [
//     {
//       name: "White Wine 1",
//       description: "Description 1",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 2",
//       description: "Description 2",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 3",
//       description: "Description 3",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 4",
//       description: "Description 4",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 5",
//       description: "Description 5",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 6",
//       description: "Description 6",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 7",
//       description: "Description 7",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "White Wine 8",
//       description: "Description 8",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     // ...more white wines
//   ],
//   sparkling: [
//     {
//       name: "Sparkling Wine 1",
//       description: "Description 1",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 2",
//       description: "Description 2",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 3",
//       description: "Description 3",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 4",
//       description: "Description 4",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 5",
//       description: "Description 5",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 6",
//       description: "Description 6",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 7",
//       description: "Description 7",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Sparkling Wine 8",
//       description: "Description 8",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     // ...more sparkling wines
//   ],
//   rose: [
//     {
//       name: "Rosé Wine 1",
//       description: "Description 1",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 2",
//       description: "Description 2",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 3",
//       description: "Description 3",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 4",
//       description: "Description 4",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 5",
//       description: "Description 5",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 6",
//       description: "Description 6",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     {
//       name: "Rosé Wine 7",
//       description: "Description 7",
//       imageUrl: "https://www.bit.ly/3vqceuc",
//     },
//     // ...more sparkling wines
//   ],
// };

// const WineBlockMain = () => {
//   const [activeCategory, setActiveCategory] = useState("red");

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//   };

//   return (
//     <div>
//       <CategoryMenu
//         categories={["red", "white", "sparkling", "rose"]}
//         activeCategory={activeCategory}
//         onCategoryChange={handleCategoryChange}
//       />
//       <WineBlock wines={winesData[activeCategory]} />
//     </div>
//   );
// };

const WineBlockMain = () => {
  const [activeCategory, setActiveCategory] = useState("red");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <CategoryMenu
        categories={["red", "white", "sparkling", "rose"]}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <WineBlock wines={brandWines[activeCategory]} />
    </div>
  );
};

export default WineBlockMain;