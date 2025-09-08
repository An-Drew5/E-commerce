import { useParams } from "react-router-dom";
import {
  imageGallery,
  blindsImages,
  wallpaperImages,
  curtainFabricsImages,
  newArrivals,
} from "../util/productImages";

const products = [
  ...imageGallery,
  ...blindsImages,
  ...wallpaperImages,
  ...curtainFabricsImages,
  ...newArrivals,
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  console.log("Product ID:", id);
  console.log("Product Details:", product);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <div className="product-detail-container">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <p className="product-description">{product.description}</p>
        </div>

        <div className="detail-page-features">
          <h3 className="features-heading">Product Features</h3>
          <ul className="features-list">
            <li>
              <span className="feature-label">Brand:</span> {product.brand}
            </li>
            <li>
              <span className="feature-label">Type:</span> {product.type}
            </li>
            <li>
              <span className="feature-label">Subtype:</span> {product.subtype}
            </li>
            <li>
              <span className="feature-label">Light Filtration:</span>{" "}
              {product.lightFiltration}
            </li>
            <li>
              <span className="feature-label">Other Features:</span>{" "}
              {product.otherFeatures}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
