
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

export default function CartModal({ cartItems, onUpdateCartItemQuantity, title, actions }) {
  const dialog = useRef();

  // Optional: you can expose the open function internally
  const openModal = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  // You can call openModal from within the component or export it conditionally
  // depending on your intended usage

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart
        items={cartItems}
        onUpdateItemQuantity={onUpdateCartItemQuantity}
      />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
