// import { use, useRef } from "react";

// import CartModal from "./CartModal";
// import UserProgressContext from "../store/UserProgressContext";
// import { CartContext } from "../store/shopping-cart-context";

function Header() {
//   const userProgressCtx = use(UserProgressContext);
//   const cartCtx = use(CartContext)
//   const modal = useRef();
//   const cartQuantity = cart.items.length;

//   const totalItemsInCart = cartCtx.items.reduce((totalNumberOfItems, item) => {
//     return totalNumberOfItems + item.quantity
//   }, 0)

//   function handleOpenCartClick() {
//     modal.current.open();
//   }

//   function handleCloseCart () {
//     userProgressCtx.hideCart()
//   }

//   function handleGoToCheckout(){
//     userProgressCtx.showCheckout()
//   }

//   let modalActions = <button>Close</button>;

//   if (cartQuantity && cartQuantity > 0) {
//     console.log(totalItemsInCart)
//     modalActions = (
//       <>
//         <button>Close</button>
//         <button onClick={handleGoToCheckout}>Checkout</button>
//       </>
//     );
//   }

  return (
    <>
      {/* <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      /> */}
      <header>
        {/* <div className="header-layer_1">
          <p>QUICK CURTAINS AND DECO</p>
          <div className="header-buttons">
            <p>
              <button onClick={handleOpenCartClick}>Cart ({totalItemsInCart})</button>
            </p>
            <p>
              <button>login</button>
            </p>
          </div>
        </div> */}
        <div className="header">
          {/* <nav>
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
          </nav> */}
          <div className="header-img">
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
        </div>
      </header>
    </>
  );
}

export default Header;
