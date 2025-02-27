import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import RootLayout from "./components/Layouts/RootLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ShopItem from "./pages/ShopItem/ShopItem";
import Discover from "./pages/Discover/Discover";
import AboutUs from "./pages/AboutUs/About Us";
import Contact from "./pages/Contact/Contact";
import ShopRootLayout from "./components/Layouts/ShopRootLayout";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import Favorites from "./pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <ShopRootLayout />,
        children: [
          { index: true, element: <Shop /> },
          { path: ":productId", element: <ShopItem /> },
        ],
      },
      { path: "discover", element: <Discover /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <ParallaxProvider>
          <div className="main-wrapper">
            <RouterProvider router={router} />
          </div>
        </ParallaxProvider>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
