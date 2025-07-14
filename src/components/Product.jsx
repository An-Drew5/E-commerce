import { imageGallery } from "../util/productImages";

function Product() {
  // This component renders a product gallery using images from the imageGallery array

  // return (
  //     <div>
  //         <h2>Product Gallery</h2>
  //         {imageGallery.map((image) => (
  //             <img key={image.id} src={image.src} alt={`Product ${image.id}`} />
  //         ))}
  //     </div>
  // );

  return (
    <section className="product-gallery-section">
      <h2 className="product-gallery-heading">Product Gallery</h2>
      <div className="product-gallery-grid">
        {imageGallery.map((image) => (
          <div className="product-gallery-card" key={image.id}>
            <img
              src={image.src}
              alt={`Product ${image.id}`}
              className="product-gallery-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Product;
