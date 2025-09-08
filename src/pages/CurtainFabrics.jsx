import { use } from "react";
import CartContext from "../store/shopping-cart-context";

import Product from "../components/Product";
import { curtainFabricsImages } from "../util/productImages";
import image from "../assets/image-7.jpg";
import GeneralPageHeader from "../components/GeneralPageHeader";

export default function CurtainFabricsPage() {
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
        heading="Available Curtain Fabrics"
        product={curtainFabricsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
