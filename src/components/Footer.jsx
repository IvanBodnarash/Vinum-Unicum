import React from "react";

import logo from '../img/logo-white.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <span className="header-logo">
        <img src={logo} alt="logo" className="logo-header"></img>
        {/* VINUM UNICUM */}
      </span>
      <div>Vinum Unicum &copy;</div>
      <div>{currentYear}</div>
    </footer>
  );
}
