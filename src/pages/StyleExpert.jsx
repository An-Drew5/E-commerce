import { use } from "react";
import GeneralPageHeader from "../components/GeneralPageHeader";
import image from "../assets/image-9.jpg"
import image1 from ""
import CartContext from "../store/shopping-cart-context";
import Product from "../components/Product";
import { curtainFabricsImages } from "../util/productImages";
export default function StyleExpertPage() {
  const cartCtx = use(CartContext)
  return (
    <>
      <h1>This is style Page</h1>

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

      <div>
        {/* <Product
                heading="Available Curtain Fabrics"
                product={curtainFabricsImages}
                onAddToCart={cartCtx.addItemToCart}
              /> */}
        <h2>Talk to our style experts and get a breath-taking hand-crafted Curtain Designs</h2>
      </div>
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}
