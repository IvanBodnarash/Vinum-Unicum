import React from "react";
import Slider from "react-slick";
import WineItem from "./WineItem";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const BrandsWineCarousel = ({ wines }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdArrowForwardIos />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdArrowBackIos />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    // className: 'center',
    // centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="">
      <div>
        <div className="slider-carousel">
          {wines.length > 0 ? (
            <Slider {...settings} className="wine-block">
              {wines.map((wine, index) => (
                <WineItem key={index} wine={wine} />
              ))}
            </Slider>
          ) : (
            <p>No wines for display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsWineCarousel;
