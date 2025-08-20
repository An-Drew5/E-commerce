import { use } from "react";
import { Outlet } from "react-router-dom";

import CartContext from "../store/shopping-cart-context";
// import { UserProgressContextProvider } from "../store/UserProgressContext";

import HeaderBar from "../components/HeaderBar";
import Checkout from "../components/Checkout";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    const cartCtx = use(CartContext)

  return (
    <>
      
          <HeaderBar cart={CartContext.items} onUpdateCartItemQuantity={cartCtx.updateCartItems} />
          <Checkout />

      <MainNavigation />
      <Outlet />
    </>
  );
}
