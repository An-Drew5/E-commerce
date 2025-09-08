import { use, useState } from "react";

import Product from "../components/Product";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import CartContext from "../store/shopping-cart-context";

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

      <Footer />
    </>
  );
}
