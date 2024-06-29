import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../img/logo-white.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-section">
          <span className="header-logo">
            <img src={logo} alt="logo" className="logo-header"></img>
            {/* VINUM UNICUM */}
          </span>
        </div>

        <div className="footer-section">
          <div className="footer-nav">
            <div className="footer-nav-items">
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
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-about-us">
            <h3>About Us</h3>
            <p>
              Vinum Unicum is dedicated to bringing you the finest wines from
              around the world.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: contact@vinumunicum.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Wine Street, Vine City, VC 12345</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-social">
            <h3>Follow Us</h3>
            <p>
              Follow us on social media to stay up-to-date with the latest news,
              promotions, and announcements.
            </p>
          </div>
        </div>

      </div>

      <div className="footer-copyright">
        <div>Vinum Unicum &copy;</div>
        <div>{currentYear}</div>
      </div>
    </footer>
  );
}
