import React from "react";
import { useNavigate } from "react-router-dom";

const BrandsWineItem = ({ wine }) => {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("selectedItem", JSON.stringify(wine));
    navigate(`/shop/${wine.id}`);
    // console.log(wine);
  }

  return (
    <div className="wine-item" onClick={handleClick}>
      <div>
        <img className="wine-img" src={wine.imageUrl} alt={wine.name} />
      </div>

      <div className="item-info">
        <h2>{wine.name}</h2>
        <h3>{wine.location}</h3>
        <h3>{wine.price}</h3>
      </div>
    </div>
  );
};

export default BrandsWineItem;
