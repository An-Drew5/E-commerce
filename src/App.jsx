import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

import { CartContext } from "./store/shopping-cart-context";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import {
  imageGallery,
  newArrivals,
  blindsImages,
  wallpaperImages,
} from "./util/productImages";

import RootLayout from "./pages/RootNav";
import HomePage from "./pages/Home";
import CurtainFabricsPage from "./pages/CurtainFabrics";
import ReadyMadeCurtainsPage from "./pages/ReadyMadeCurtains";
import StyleExpertPage from "./pages/StyleExpert";
import HeaderBar from "./components/HeaderBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "curtain-fabrics", element: <CurtainFabricsPage /> },
      { path: "style-expert", element: <StyleExpertPage /> },
      { path: "ready-made-curtains", element: <ReadyMadeCurtainsPage /> },
    ],
  },
]);

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id, productCategory) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = productCategory.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdatedCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  function clearCart() {
    setShoppingCart({ items: [] });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    clearCart: clearCart,
  };
  return (
    <>
      <CartContext value={ctxValue}>
        <UserProgressContextProvider>
          <HeaderBar cart={shoppingCart}
            onUpdateCartItemQuantity={handleUpdatedCartItemQuantity}/>

          <RouterProvider router={router}/>

          <Header
            cart={shoppingCart}
            onUpdateCartItemQuantity={handleUpdatedCartItemQuantity}
          />
          
          <Checkout />
          <Product
            heading="Popular"
            product={imageGallery}
            onAddToCart={handleAddItemToCart}
          />
          <Product
            heading="New Arrivals"
            product={newArrivals}
            onAddToCart={handleAddItemToCart}
          />
          <Product
            heading="Window Blinds"
            product={blindsImages}
            onAddToCart={handleAddItemToCart}
          />
          <Product
            heading="Wallpapers"
            product={wallpaperImages}
            onAddToCart={handleAddItemToCart}
          />

          <Footer />
        </UserProgressContextProvider>
      </CartContext>
    </>
  );
}

export default App;
