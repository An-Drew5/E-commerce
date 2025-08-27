import { use, useEffect, useRef, useState } from "react";

import CartModal from "./CartModal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/shopping-cart-context";

export default function HeaderBar({ cart, onUpdateCartItemQuantity }) {
  const userProgressCtx = use(UserProgressContext);
  const cartCtx = use(CartContext);
  const modal = useRef();
  const searchRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const cartQuantity = cartCtx.items.length;

  const totalItemsInCart = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

   const toggleSearchHandler = () => {
    setShowSearch((prevState) => !prevState);
  }

   const searchEffect = useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
   }, [showSearch]);

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity && cartQuantity > 0) {
    console.log(totalItemsInCart);
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={handleGoToCheckout}>Checkout</button>
      </>
    );
  }
  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cartCtx.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <div className="header-bar">
        <p>QUICK CURTAINS AND DECO</p>
        <div className="header-bar-search">
          {showSearch && <input type="text" placeholder="Search..." />}
          <button onClick={toggleSearchHandler} className="search-icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </button>
        </div>
        <div className="header-bar-buttons">
          <p>
            <button onClick={handleOpenCartClick}>
              Cart ({totalItemsInCart})
            </button>
          </p>
          <p>
            <button>login</button>
          </p>
        </div>
      </div>
    </>
  );
}
