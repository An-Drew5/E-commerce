import { blindsImages } from "../util/productImages"

export default function blinds(){
    return (
        <section className="product-gallery-section">
      <h2 className="product-gallery-heading">Blinds</h2>
      <div className="product-gallery-grid">
        {blindsImages.map((image) => (
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