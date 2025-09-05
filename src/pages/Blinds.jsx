import { use } from "react";

import CartContext from "../store/shopping-cart-context";

import { blindsImages } from "../util/productImages";
import Product from "../components/Product";

import image from "../assets/image-10.jpg";

export default function BlindsPage() {
  const cartCtx = use(CartContext);
  return (
    <>
      <div className="header">
        <div className="header-img">
          <img src={image} alt="" />
        </div>
        
        <div className="header-subtitle">
          <h1>bring home a chic look with beautiful ready made curtains</h1>
        </div>

      </div>
      <Product
        heading="Available Curtain Blinds"
        product={blindsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
