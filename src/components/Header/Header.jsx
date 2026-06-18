import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useShop } from "../../context/ShopContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo-white.png";
import "./Header.scss";
import Search from "../Search";
import Cart from "../ShoppingCart/Cart";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function Header() {
  const { state: searchState, dispatch } = useSearch();
  const { state: cartState } = useShop();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [inputValue, setInputValue] = useState(searchState.query);
  const [showCart, setShowCart] = useState(false);

  const cartItems = cartState.cart;
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantityCart, 0);

  const favoriteItems = cartState.favorites;
  const favoritesCount = favoriteItems.length;

  useEffect(() => {
    handleCloseCart();
    if (location.pathname === "/shop") {
      setIsSearchVisible(false);
      setInputValue("");
    }
  }, [location]);

  const toggleSearch = () => {
    handleCloseCart();
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

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleCloseCartRef = useOutsideClick(() => {
    handleCloseCart();
  });

  return (
    <header ref={handleCloseCartRef}>
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
            <div className="cart-badge">
              <div
                className="icon-badge"
                onClick={() => setShowCart((prev) => !prev)}
              >
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
                <span className="nav-item">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ fontSize: "22px" }}
                  />
                </span>
              </div>
              <TransitionGroup>
                {showCart && (
                  <CSSTransition
                    in={showCart}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                    appear
                  >
                    <Cart onClose={handleCloseCart} />
                  </CSSTransition>
                )}
              </TransitionGroup>
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
