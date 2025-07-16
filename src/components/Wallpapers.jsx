import { wallpaperImages } from "../util/productImages"

export default function wallpapers(){
    return (
        <section className="product-gallery-section">
      <h2 className="product-gallery-heading">Wallpapers</h2>
      <div className="product-gallery-grid">
        {wallpaperImages.map((image) => (
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
    )
}