import { useRef } from "react";
import CartModal from "./CartModal";

function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity && cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header>
        <div className="header-layer_1">
          <p>QUICK CURTAINS AND DECO</p>
          <p>
            <button onClick={handleOpenCartClick}>Cart</button>
          </p>
        </div>
        <div className="header">
          <nav>
            <ul className="header-nav">
              <li>
                <a href="#home" className="header-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="header-link">
                  Curtain Fabrics
                </a>
              </li>
              <li>
                <a href="#test" className="header-link">
                  Style Expert
                </a>
              </li>
              <li>
                <a href="ready-made-curtains" className="header-link">
                  Ready Made Curtains
                </a>
              </li>
              <li>
                <a href="furniture" className="header-link">
                  Deco
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-subtitle">
            <p>bring home a chic look with beautiful ready made curtains</p>
          </div>
          <div>
            <h2 className="product-description-heading">Product Description</h2>
            <p className="product-description-text">
              Discover our exquisite range of ready-made curtains that blend
              style and functionality. Perfect for any room, these curtains are
              designed to enhance your home decor with elegance.
            </p>
            <p className="product-description-text">
              Our collection features a variety of colors and patterns, ensuring
              you find the perfect match for your space. Each curtain is crafted
              with high-quality materials, providing durability and a chic look.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
