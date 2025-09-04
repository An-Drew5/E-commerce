import image from '../assets/image-8.jpg'

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-subtitle">
              <p>bring home a chic look with beautiful ready made curtains</p>
              <h2 className="product-description-heading">
                Product Description
              </h2>
              <p className="product-description-text">
                Discover our exquisite range of ready-made curtains that blend
                style and functionality. Perfect for any room, these curtains
                are designed to enhance your home decor with elegance.
              </p>
              <p className="product-description-text">
                Our collection features a variety of colors and patterns,
                ensuring you find the perfect match for your space. Each curtain
                is crafted with high-quality materials, providing durability and
                a chic look.
              </p>
            </div>

          <div className="header-img">
            <img src={image} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
