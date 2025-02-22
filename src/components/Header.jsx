import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo-white.png";
import "./Header.scss";
import Search from "./Search";

export default function Header() {
  const { state: searchState, dispatch } = useSearch();
  const { state: cartState } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [inputValue, setInputValue] = useState(searchState.query);

  const cartItems = cartState.cart;
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantityCart, 0);
  // console.log(cartCount);
  const favoriteItems = cartState.favorites;
  const favoritesCount = favoriteItems.reduce(
    (acc, item) => acc + item.quantityFavorites,
    0
  );

  useEffect(() => {
    if (location.pathname === "/shop") {
      setIsSearchVisible(false);
      setInputValue("");
    }
  }, [location]);

  const toggleSearch = () => {
    if (location.pathname !== "/shop") {
      setIsSearchVisible((prev) => !prev);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch({ type: "SET_QUERY", payload: value });
  };

  const handleSearchSubmit = () => {
    if (inputValue.trim()) {
      dispatch({ type: "SET_QUERY", payload: inputValue });
      navigate("/shop");
      setIsSearchVisible(false);
    }
  };

  const handleSearchCancel = () => {
    dispatch({ type: "RESET_QUERY" });
    setInputValue("");
    setIsSearchVisible(false);
  };

  const handleSearchReset = () => {
    dispatch({ type: "RESET_QUERY" });
    setInputValue("");
  };

  return (
    <header>
      <div className="header-wrapper">
        {/* use a tag for logo */}
        <NavLink to="/">
          <span className="header-logo">
            <img src={logo} alt="logo" className="logo-header"></img>
            {/* VINUM UNICUM */}
          </span>
        </NavLink>

        <nav className="header-nav">
          <div className="header-nav-items">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Our Collection
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Discover
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Contact
            </NavLink>
            <span className="nav-item" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: "22px" }} />
            </span>
            <Search
              isSearchVisible={isSearchVisible}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchCancel={handleSearchCancel}
              handleSearchReset={handleSearchReset}
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
            <div className="icon-badge">
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
              <span className="nav-item">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ fontSize: "22px" }}
                />
              </span>
            </div>
            <NavLink to="/favorites" className="nav-item icon-badge">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "22px" }} />
              {favoritesCount > 0 && (
                <span className="badge">{favoritesCount}</span>
              )}
            </NavLink>
            <div className="nav-item">
              <div className="nav-item-sign-in">
                <span>Sign In</span>
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
