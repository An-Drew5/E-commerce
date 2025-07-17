//import { imageGallery, newArrivals } from "../util/productImages";

function Product({heading, images}) {
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
    <>
    <section>
        <h2 className="product-description-heading">Product Description</h2>
        <p className="product-description-text">
            Discover our exquisite range of ready-made curtains that blend style and functionality. 
            Perfect for any room, these curtains are designed to enhance your home decor with elegance.
        </p>
        <p className="product-description-text">
            Our collection features a variety of colors and patterns, ensuring you find the perfect match for your space.
            Each curtain is crafted with high-quality materials, providing durability and a chic look.
        </p>
    </section>

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
                    </div>
                ))
            }
        </div>
    </section>

    {/* <section className="product-gallery-section">
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
    
    <section className="product-gallery-section">
        <h2 className="product-gallery-heading">New Arrivals</h2>
        <div className="product-gallery-grid">
            {
                newArrivals.map((image) => (
                    <div className="product-gallery-card" key={image.id}>
                        <img
                            src={image.src}
                            alt={`New Arrival ${image.id}`}
                            className="product-gallery-img"
                        />
                        <p className="new-arrival-description">{image.description}</p>
                    </div>
                ))
            }
        </div>
    </section> */}
   </> 
  );
}
export default Product;
