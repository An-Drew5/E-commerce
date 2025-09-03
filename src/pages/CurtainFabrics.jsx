import { use } from "react";
import CartContext from "../store/shopping-cart-context";

import Product from "../components/Product";
import { curtainFabricsImages } from "../util/productImages";

export default function CurtainFabricsPage() {
  const cartCtx = use(CartContext);

  return (
    <>
      <h1>Curtain Fabrics Page</h1>

      <Product
        heading="Available Curtain Fabrics"
        product={curtainFabricsImages}
        onAddToCart={cartCtx.addItemToCart}
      />
    </>
  );
}
