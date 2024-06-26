import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ShopItem from "./pages/shopItem/ShopItem";
import Discover from "./pages/Discover/Discover";
import AboutUs from "./pages/AboutUs/About Us";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <ParallaxProvider>
      <div className="main-wrapper">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/:id" element={<ShopItem />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </Layout>
      </div>
    </ParallaxProvider>
  );
}

export default App;
