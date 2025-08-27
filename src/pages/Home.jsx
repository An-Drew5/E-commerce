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
