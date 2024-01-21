import React from "react";
import "../../styles/homepage.scss";
import "../../styles/main-style.scss"

import WineShop from "../../components/productCarousel/WineShop";
import brandWinesData from "./brands";

export default function Home() {
  return (
      <div className="">
        <div className="home-page-wrapper">
          <div className="page-banner">
            <span>Our Collection</span>
            <p>Only premium brands</p>
          </div>
        </div>
        <div className="wine-container-test">
          <WineShop brandWinesData={brandWinesData} />
        </div>
    </div>
  )
}