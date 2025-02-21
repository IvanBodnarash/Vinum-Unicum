import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import {
  PiShoppingCartSimpleLight,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { LuGrape } from "react-icons/lu";

import "../../pages/Shop/Shop.scss";
import { useCart } from "../../context/CartContext";

const WineCard = ({ wine }) => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const selectItem = (wine) => {
    localStorage.setItem("selectedItem", JSON.stringify(wine));
    navigate(`./${wine.id}`);
    console.log(wine);
  };

  const { state, dispatch } = useCart();

  // const isFavorite = state.favorite.some((fav) => fav.id === wine.id);
  // const isInCart = state.cart.some((item) => item.id === wine.id);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(value);
  };

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...wine, quantity },
    });
  };

  return (
    <div className="wine-card">
      <div className="sample-card" onClick={() => selectItem(wine)}>
        <div
          className="favorites"
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

        <img className="wine-img" src={wine.imageUrl} alt="wine-example" />

        <div className="info">
          <h3>{wine.name}</h3>
          <div className="info-container">
            <h4>
              <BiWorld size={20} className="icon" />
              {wine.country}
            </h4>
            <h4>
              <GiSandsOfTime size={20} className="icon" />
              {wine.year}
            </h4>
            <h4>
              <LuGrape size={20} className="icon" />
              {wine.grapeVariety}
            </h4>
          </div>
          <span style={{ fontWeight: "bold" }}>${wine.price} USD</span>
        </div>
      </div>
      <div className="add-container">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={addToCartHandler}
        >
          {!hover ? (
            <PiShoppingCartSimpleLight />
          ) : (
            <PiShoppingCartSimpleFill />
          )}
        </button>
      </div>
    </div>
  );
};

export default WineCard;
