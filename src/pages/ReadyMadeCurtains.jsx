import { Link } from "react-router-dom";
import { blindsImages } from "../util/productImages";

import CartContext from "../store/shopping-cart-context";

import Product from "../components/Product";
import { use } from "react";

export default function ReadyMadeCurtainsPage() {
  const cartCtx = use(CartContext)
  return (
    <>
      <h1>Welcome to Ready-madeCurtains page</h1>

      <Product
        heading="Available Ready-Made Curtains"
        product={blindsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
