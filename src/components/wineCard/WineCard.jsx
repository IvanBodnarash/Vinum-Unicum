import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { BiWorld } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { LuGrape } from "react-icons/lu";

import "../../pages/Shop/Shop.scss";
import { useCart } from "../../context/CartContext";
import CounterInput from "./CounterInput";

const WineCard = ({ wine }) => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [quantityCart, setQuantityCart] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const selectItem = (wine) => {
    localStorage.setItem("selectedItem", JSON.stringify(wine));
    navigate(`./${wine.id}`);
  };

  const { dispatch } = useCart();

  // const handleQuantityChange = (e) => {
  //   const value = Number(e.target.value);
  //   setQuantityCart(value);
  // };

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...wine, quantityCart },
    });
    setQuantityCart(1);
  };

  const addToFavoritesHandler = () => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: { ...wine, isFavorite },
    });
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: { ...wine, isFavorite },
    });
    setIsFavorite(false);
  };

  return (
    <div className="wine-card">
      <div
        className="favorites"
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
      >
        {!saved ? (
          <GoHeart
            size={24}
            className="heart"
            onClick={addToFavoritesHandler}
          />
        ) : (
          <GoHeartFill
            size={24}
            className="heart"
            onClick={removeFromFavorites}
          />
        )}
      </div>
      <div className="sample-card" onClick={() => selectItem(wine)}>
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
        <CounterInput
          min={1}
          max={99}
          value={quantityCart}
          onChange={(newValue) => setQuantityCart(newValue)}
        />
        <FontAwesomeIcon
          className="cart-icon"
          icon={faCartPlus}
          onClick={addToCartHandler}
          size="xl"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default WineCard;
