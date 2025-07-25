export default function Shop({ id, image, title, price, description, onAddToCart }){
    return (
        <article className="shop">
            <img src={image} alt="" />
            <div className="shop-content">
                <div>
                    <h3>{title}</h3>
                    <p className="shop-price">GHC{price}</p>
                    <p>{description}</p>
                </div>
                <p className="shop-actions">
                    <button onClick={ () => onAddToCart(id)}>Add To Cart</button>
                </p>
            </div>
        </article>
    )
}