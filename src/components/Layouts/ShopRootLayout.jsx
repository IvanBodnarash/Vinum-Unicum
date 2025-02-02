import { ThemeProvider } from "@emotion/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { theme } from "../../utils/muiConfig";
import { Outlet } from "react-router-dom";

export default function ShopRootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Outlet />
      </ParallaxProvider>
    </ThemeProvider>
  );
}
