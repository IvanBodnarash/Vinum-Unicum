import React from "react";
// import WineBlockMain from "../components/WineBlockMain";

// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// import Slider from "react-slick";

import WineShop from "../components/productCarousel/WineShop";
// import winesData from "./Home/brands";

// export default function Home() {
//   const data = [
//     {
//       name: "Red Wine 1",
//       description: "Description 1",
//       imageUrl: "https://www.bit.ly/3Sl1rdM",
//     },
//     {
//       name: "Red Wine 2",
//       description: "Description 2",
//       imageUrl: "https://www.bit.ly/3S3kcRy",
//     },
//     {
//       name: "Red Wine 3",
//       description: "Description 3",
//       imageUrl: "https://www.bit.ly/48AR7nw",
//     },
//     {
//       name: "Red Wine 4",
//       description: "Description 4",
//       imageUrl: "https://www.bit.ly/3Sl1rdM",
//     },
//     {
//       name: "Red Wine 5",
//       description: "Description 5",
//       imageUrl: "https://www.bit.ly/48AR7nw",
//     },
//     {
//       name: "Red Wine 6",
//       description: "Description 6",
//       imageUrl: "https://www.bit.ly/3Sl1rdM",
//     },
//     // ...more red wines
//   ];

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <MdArrowForwardIos />
//       </div>
//     );
//   };
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <MdArrowBackIos />
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // className: 'center',
//     // centerMode: true,
//     centerPadding: "60px",
//     focusOnSelect: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="">
//       <div className="home-page-wrapper">
//         <div className="page-banner">
//           <span>Our Collection</span>
//           <p>Only premium brands</p>
//         </div>
//       </div>
//       <WineBlockMain />
//       <div>
//         <div className="slider-carousel">
//           <Slider {...settings} className="wine-block-1">
//             {data.map((d) => (
//               <div className="wine-item-1">
//                 <div>
//                   <img className="wine-img" src={d.imageUrl} alt={d.name} />
//                 </div>

//                 <div className="item-info">
//                   <h3>{d.name}</h3>
//                   <p>{d.description}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <MdArrowForwardIos />
//       </div>
//     );
//   };
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <MdArrowBackIos />
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // className: 'center',
//     // centerMode: true,
//     centerPadding: "60px",
//     focusOnSelect: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="">
//       <Header />
//       <div className="home-page-wrapper">
//         <div className="page-banner">
//           <span>Our Collection</span>
//           <p>Only premium brands</p>
//         </div>
//       </div>
//       <WineBlockMain />
//       <div>
//         <div className="slider-carousel">
//           <Slider {...settings} className="wine-block-1">
//             {data.map((d, index) => (
//               <div key={index} className="wine-item-1">
//                 <div>
//                   <img className="wine-img" src={d.imageUrl} alt={d.name} />
//                 </div>

//                 <div className="item-info">
//                   <h3>{d.name}</h3>
//                   <p>{d.description}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="">
//       <Header />
//       <div className="home-page-wrapper">
//         <div className="page-banner">
//           <span>Our Collection</span>
//           <p>Only premium brands</p>
//         </div>
//       </div>
//       <WineBlockMain />
//     </div>
//   );
// }


// import WineShop from "../components/WineShopTest";
// import winesData from "./Home/brands";

// export default function Home() {


//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <MdArrowForwardIos />
//       </div>
//     );
//   };
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <MdArrowBackIos />
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // className: 'center',
//     // centerMode: true,
//     centerPadding: "60px",
//     focusOnSelect: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="">
//       <div className="home-page-wrapper">
//         <div className="page-banner">
//           <span>Our Collection</span>
//           <p>Only premium brands</p>
//         </div>
//       </div>
//       <WineBlockMain />
//       <div>
//         <div className="slider-carousel">
//           <Slider {...settings} className="wine-block-1">
//             {data.map((d) => (
//               <div className="wine-item-1">
//                 <div>
//                   <img className="wine-img" src={d.imageUrl} alt={d.name} />
//                 </div>

//                 <div className="item-info">
//                   <h3>{d.name}</h3>
//                   <p>{d.description}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <h1>Wine Shop</h1>
      {/* <WineShop brandWinesData={brandWinesData} /> */}
    </div>
  )
}