import { use } from "react";
import CartContext from "../store/shopping-cart-context";

import Product from "../components/Product";
import { curtainFabricsImages } from "../util/productImages";
import image from '../assets/image-7.jpg'

export default function CurtainFabricsPage() {
  const cartCtx = use(CartContext);

  return (
    <>
      <div className="header">
                <div className="header-subtitle">
                    <p>bring home a chic look with beautiful ready made curtains</p>
                    <h2 className="product-description-heading">
                      Product Description
                    </h2>
                    <p className="product-description-text">
                      Discover our exquisite range of ready-made curtains that blend
                      style and functionality. Perfect for any room, these curtains
                      are designed to enhance your home decor with elegance.
                    </p>
                    <p className="product-description-text">
                      Our collection features a variety of colors and patterns,
                      ensuring you find the perfect match for your space. Each curtain
                      is crafted with high-quality materials, providing durability and
                      a chic look.
                    </p>
                </div>
      
                <div className="fabrics-img">
                  <img src={image} alt="" />
                </div>
              </div>

      <Product
        heading="Available Curtain Fabrics"
        product={curtainFabricsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
