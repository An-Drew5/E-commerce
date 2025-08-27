//import { imageGallery, newArrivals } from "../util/productImages";
import { Link } from "react-router-dom";

import Shop from "./Shop";

function Product({ heading, product, onAddToCart }) {
  // This component renders a product gallery using images from the imageGallery array

  return (
    <section id="product">
      <h2>{heading}</h2>

      <ul id="shop">
        {product.map((productItem) => (
          <li key={productItem.id}>
              <Shop
                {...productItem}
                onAddToCart={() => onAddToCart(productItem.id, product)}
              />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Product;
