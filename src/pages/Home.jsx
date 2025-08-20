import { use, useState } from "react";

// import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import HeaderBar from "../components/HeaderBar";
import Header from "../components/Header";
import CartContext from "../store/shopping-cart-context";
import { UserProgressContextProvider } from "../store/UserProgressContext";

import {
  imageGallery,
  newArrivals,
  blindsImages,
  wallpaperImages,
} from "../util/productImages";

export default function HomePage() {
  //     const [shoppingCart, setShoppingCart] = useState({
  //     items: [],
  //   });

  //   function handleAddItemToCart(id, productCategory) {
  //     setShoppingCart((prevShoppingCart) => {
  //       const updatedItems = [...prevShoppingCart.items];

  //       const existingCartItemIndex = updatedItems.findIndex(
  //         (cartItem) => cartItem.id === id
  //       );

  //       const existingCartItem = updatedItems[existingCartItemIndex];

  //       if (existingCartItem) {
  //         const updatedItem = {
  //           ...existingCartItem,
  //           quantity: existingCartItem.quantity + 1,
  //         };
  //         updatedItems[existingCartItemIndex] = updatedItem;
  //       } else {
  //         const product = productCategory.find((product) => product.id === id);
  //         updatedItems.push({
  //           id: id,
  //           name: product.title,
  //           price: product.price,
  //           quantity: 1,
  //         });
  //       }

  //       return {
  //         items: updatedItems,
  //       };
  //     });
  //   }

  //   function handleUpdatedCartItemQuantity(productId, amount) {
  //     setShoppingCart((prevShoppingCart) => {
  //       const updatedItems = [...prevShoppingCart.items];
  //       const updatedItemIndex = updatedItems.findIndex(
  //         (item) => item.id === productId
  //       );

  //       const updatedItem = {
  //         ...updatedItems[updatedItemIndex],
  //       };

  //       updatedItem.quantity += amount;

  //       if (updatedItem.quantity <= 0) {
  //         updatedItems.splice(updatedItemIndex, 1);
  //       } else {
  //         updatedItems[updatedItemIndex] = updatedItem;
  //       }

  //       return {
  //         items: updatedItems,
  //       };
  //     });
  //   }

  //   function clearCart() {
  //     setShoppingCart({ items: [] });
  //   }

  //   const ctxValue = {
  //     items: shoppingCart.items,
  //     addItemToCart: handleAddItemToCart,
  //     clearCart: clearCart,
  //   };

  const cartCtx = use(CartContext);

  return (
    <>
      <Header />

      <Checkout />

      <Product
        heading="Popular"
        product={imageGallery}
        onAddToCart={cartCtx.addItemToCart}
      />
      <Product
        heading="New Arrivals"
        product={newArrivals}
        onAddToCart={cartCtx.addItemToCart}
      />
      <Product
        heading="Window Blinds"
        product={blindsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
      <Product
        heading="Wallpapers"
        product={wallpaperImages}
        onAddToCart={cartCtx.addItemToCart}
      />

      <Footer />
    </>
  );
}
