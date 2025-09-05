import { blindsImages } from "../util/productImages";

import CartContext from "../store/shopping-cart-context";

import Product from "../components/Product";
import { use } from "react";

import GeneralPageHeader from "../components/GeneralPageHeader";
import image from "../assets/image-12.jpg"

export default function ReadyMadeCurtainsPage() {
  const cartCtx = use(CartContext)
  return (
    <>
      
      <GeneralPageHeader>
              <div className="header-description">
                  <p>Discover our exquisite range of ready-made curtains that blend
                      style and functionality. Perfect for any room, these curtains
                      are designed to enhance your home decor with elegance.</p>
              </div>
      
              <div className="general-header-img">
                  <img src={image} alt="" />
              </div>
            </GeneralPageHeader>
      

      <Product
        heading="Available Ready-Made Curtains"
        product={blindsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
