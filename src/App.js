import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="main-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
