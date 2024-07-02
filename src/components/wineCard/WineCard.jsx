import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import {
  PiShoppingCartSimpleLight,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";

import "../../styles/shop.scss";

const WineCard = ({ wine }) => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);
  const selectItem = (wine) => {
    localStorage.setItem("selectedItem", JSON.stringify(wine));
    navigate(`./${wine.id}`);
  };

  return (
    <div className="sample-card" onClick={() => selectItem(wine)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
      >
        {!saved ? (
          <GoHeart size={24} className="heart" />
        ) : (
          <GoHeartFill size={24} className="heart" />
        )}
      </div>

      <img className="wine-img" src={wine.imageLink} alt="wine-example" />

      <div className="info">
        <h3>{wine.name}</h3>
        <h4>{wine.location}</h4>
        <span style={{ fontWeight: "bold" }}>${wine.price} CAD</span>
      </div>

      <div className="add-container">
        <input type="number" min="1" defaultValue="1" />
        <button
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {!hover ? (
            <PiShoppingCartSimpleLight />
          ) : (
            <PiShoppingCartSimpleFill />
          )}
          Add
        </button>
      </div>
    </div>
  );
};

export default WineCard;
