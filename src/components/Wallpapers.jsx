import { use } from "react";

import CartContext from "../store/shopping-cart-context";

import Product from "./Product";
import { wallpaperImages } from "../util/productImages";

import GeneralPageHeader from "./GeneralPageHeader";
import image from '../assets/image-5.jpg'

export default function WallpapersPage() {
  const cartCtx = use(CartContext);

  return (
    <>
    <GeneralPageHeader>
            <div className="header-description">
              <p>
                Discover our exquisite range of ready-made curtains that blend style
                and functionality. Perfect for any room, these curtains are designed
                to enhance your home decor with elegance.
              </p>
            </div>
    
            <div className="general-header-img">
              <img src={image} alt="" />
            </div>
          </GeneralPageHeader>

      <Product
        heading="Available Wallpapers"
        product={wallpaperImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
