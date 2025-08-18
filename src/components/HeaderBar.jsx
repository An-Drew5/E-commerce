import { use, useRef } from "react";

import CartModal from "./CartModal";
import UserProgressContext from "../store/UserProgressContext";
import { CartContext } from "../store/shopping-cart-context";


export default function HeaderBar({ cart, onUpdateCartItemQuantity }) {
      const userProgressCtx = use(UserProgressContext);
  const cartCtx = use(CartContext)
  const modal = useRef();
  const cartQuantity = cart.items.length;

  const totalItemsInCart = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity
  }, 0)

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleCloseCart () {
    userProgressCtx.hideCart()
  }

  function handleGoToCheckout(){
    userProgressCtx.showCheckout()
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity && cartQuantity > 0) {
    console.log(totalItemsInCart)
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={handleGoToCheckout}>Checkout</button>
      </>
    );
  }
    return <>
    <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <div className="header-layer_1">
          <p>QUICK CURTAINS AND DECO</p>
          <div className="header-buttons">
            <p>
              <button onClick={handleOpenCartClick}>Cart ({totalItemsInCart})</button>
            </p>
            <p>
              <button>login</button>
            </p>
          </div>
        </div>
    </>
}