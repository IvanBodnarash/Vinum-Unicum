import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PiShoppingCartSimpleLight,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import "./ShopItem.scss";

const ShopItem = () => {
  const [hover, setHover] = useState(false);
  const wine = JSON.parse(localStorage.getItem("selectedItem"));

  return (
    <div className="main">
      <header className="header">
        <div className="breadcrumb">
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>/</span>
          <span>
            <NavLink to={"/shop"}>Shop</NavLink>
          </span>
          <span>/</span>
          <span>{wine.name}</span>
        </div>
      </header>
      <section className="wine-info">
        <aside>
          <img
            src={wine.imageUrl}
            alt="wine-selection"
          />
        </aside>
        <article>
          <h1>{wine.name}</h1>
          <h4>{wine.location}</h4>
          <p className="desc">{`${wine.description} Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          In hendrerit gravida rutrum quisque non.`}</p>

          <div className="btnContainer">
            <h2 className="price">${wine.price} CAD</h2>
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
              Add to Cart
            </button>
          </div>
          <p className="notice">
            <span style={{ color: "red" }}>*</span> All prices include alcohol
            taxes & bottle deposit. Prices displayed are determined by selected
            shipping destination.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ShopItem;
