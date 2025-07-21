export default function Shop({ image, title, price, description,}){
    return (
        <article className="shop">
            <img src={image} alt="" />
            <div className="shop-content">
                <div>
                    <h3>{title}</h3>
                    <p className="shop-price">{price}</p>
                    <p>{description}</p>
                </div>
                <p className="shop-actions">
                    <button>Add To Cart</button>
                </p>
            </div>
        </article>
    )
}