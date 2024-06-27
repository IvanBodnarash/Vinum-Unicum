import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";

import "../../styles/homepage.scss";
import "../../styles/main-style.scss";
import "../../styles/animations.scss";

import BrandsWineShop from "../../components/productCarousel/BrandsWineShop";
import brandWinesData from "./brands";

export default function Home() {

  return (
    <div className="home-page-layout">
      <Parallax speed={-25}>
        <div className="home-page-wrapper">
          <Parallax speed={-5}>
            <div className="page-banner">
              <Link to="wine-carousel" spy={true} smooth={true} duration={500}>
                <a href="wine-carousel">Our Collection</a>
                <span>Only premium brands</span>
              </Link>
            </div>
          </Parallax>
        </div>
      </Parallax>
      <Parallax speed={0}>
        <div className="wine-container" id="wine-carousel">
          <BrandsWineShop
            className="brands-component"
            brandWinesData={brandWinesData}
          />
        </div>
      </Parallax>
    </div>
  );
}
