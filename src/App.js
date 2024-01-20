import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import ShopItem from "./pages/shopItem/ShopItem";
import "./App.scss";

function App() {
  return (
    <div className="main-wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
