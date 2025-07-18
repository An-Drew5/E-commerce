//import { imageGallery, newArrivals } from "../util/productImages";

function Product({heading, images}) {
  // This component renders a product gallery using images from the imageGallery array

  return (
    <>

    <section className="product-gallery-section">
        <h2 className="product-gallery-heading">{heading}</h2>
        <div className="product-gallery-grid">
            {
                images.map((image) => (
                    <div className="product-gallery-card" key={image.id}>
                        <img
                            src={image.src}
                            alt={`New Arrival ${image.id}`}
                            className="product-gallery-img"
                        />
                        <p className="new-arrival-description">{image.description}</p>
                        <button className="product-button">Add to Cart</button>
                    </div>
                ))
            }
        </div>
    </section>
   </> 
  );
}
export default Product;
