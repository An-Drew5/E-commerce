import { use } from "react";

import CartContext from "../store/shopping-cart-context";

import { blindsImages } from "../util/productImages";
import Product from "../components/Product";

export default function BlindsPage() {
  const cartCtx = use(CartContext);
  return (
    <>
      <Product
        heading="Available Curtain Blinds"
        product={blindsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
