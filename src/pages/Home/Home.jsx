import React from "react";
import { Parallax } from "react-scroll-parallax";

import "../../styles/homepage.scss";
import "../../styles/main-style.scss";

import WineShop from "../../components/productCarousel/WineShop";
import brandWinesData from "./brands";

export default function Home() {
  return (
    <div className="home-page-layout">
      <Parallax speed={-25}>
        <div className="home-page-wrapper">
          <Parallax speed={-5}>
            <div className="page-banner">
              <a href="#wine-carousel">Our Collection</a>
              <p>Only premium brands</p>
            </div>
          </Parallax>
        </div>
      </Parallax>
      <Parallax speed={0}>
        <div className="wine-container" id="wine-carousel">
          <WineShop
            className="brands-component"
            brandWinesData={brandWinesData}
          />
        </div>
      </Parallax>
    </div>
  );
}
