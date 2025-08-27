import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { CartContextProvider } from "./store/shopping-cart-context";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import RootLayout from "./pages/RootNav";
import HomePage from "./pages/Home";
import CurtainFabricsPage from "./pages/CurtainFabrics";
import ReadyMadeCurtainsPage from "./pages/ReadyMadeCurtains";
import StyleExpertPage from "./pages/StyleExpert";
import BlindsPage from "./pages/Blinds";
import WallpapersPage from "./components/Wallpapers";
import ProductDetailPage from "./pages/ProductDetail";
// import HeaderBar from "./components/HeaderBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "curtain-fabrics", element: <CurtainFabricsPage /> },
      { path: "style-expert", element: <StyleExpertPage /> },
      { path: "ready-made-curtains", element: <ReadyMadeCurtainsPage /> },
      { path: "window-blinds", element: <BlindsPage /> },
      { path: "wallpapers", element: <WallpapersPage />},
      { path: "details/:id", element: <ProductDetailPage />}
    ],
  },
]);

function App() {
  
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <RouterProvider router={router} />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
