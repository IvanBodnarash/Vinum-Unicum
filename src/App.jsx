import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import RootLayout from "./components/Layouts/RootLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ShopItem from "./components/ShopItem/ShopItem";
import Discover from "./pages/Discover/Discover";
import AboutUs from "./pages/AboutUs/About Us";
import Contact from "./pages/Contact/Contact";
import { SearchProvider } from "./context/SearchContext";
import { ShopProvider } from "./context/ShopContext";
import Favorites from "./pages/Favorites/Favorites";
import Checkout from "./pages/Checkout/Checkout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/muiConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        children: [
          { index: true, element: <Shop /> },
          { path: ":productId", element: <ShopItem /> },
        ],
      },
      { path: "discover", element: <Discover /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "favorites", element: <Favorites /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ShopProvider>
        <SearchProvider>
          <ParallaxProvider>
            <div className="main-wrapper">
              <RouterProvider router={router} />
            </div>
          </ParallaxProvider>
        </SearchProvider>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default App;
