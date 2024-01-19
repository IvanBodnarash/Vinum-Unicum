import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import "./App.scss";

function App() {
  return (
    <div className="main-wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<h1>ITEM</h1>} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
