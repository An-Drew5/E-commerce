import { createContext, useState } from "react";

 const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateCartItems: () => {},
    clearCart: () => {}, 
});

export function CartContextProvider ({children}) {
    const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id, productCategory) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = productCategory.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdatedCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  function clearCart() {
    setShoppingCart({ items: [] });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItems: handleUpdatedCartItemQuantity,
    clearCart: clearCart,
  };

  return <CartContext value={ctxValue}>{children}</CartContext>
}

export default CartContext

// const CartContext = createContext({
//     item: [],
//     addItem,
//     removeItem,
//     clearCart
// })

//  function cartReducer(state, action) {
//     if(action.type === 'ADD_ITEM') {
//         const existingCartItemIndex = state.items.findIndex((item) => {
//             item.id === action.item.id
//         });

//         const updatedItems = [...state.items];

//         if(existingCartItemIndex > -1) {
//             const existingItem = state.items[existingCartItemIndex];
//             const updatedItem = {
//                 ...existingItem,
//                 quantity: existingItem.quantity + 1
//             }
//             updatedItems[existingCartItemIndex] = updatedItem
//         }
//         else{
//             updatedItems.push({...action.item, quantity: 1})
//         }

//         return {...state, items: updatedItems};
//     }

//     if(action.type === 'REMOVE_ITEM') {
//         const existingCartItemIndex = state.items.findIndex((item) => {
//             item.id === action.item.id
//         });

//         const updatedItems = [...state.items];
//         const existingCartItem = state.items[existingCartItemIndex]
        
//         if(existingCartItem === 1) {
//             updatedItems.splice(existingCartItemIndex, 1)
//         }
//         else{
//             const updatedItem = {
//                 ...existingCartItem,
//                 quantity: existingCartItem.quantity - 1
//             }
//             updatedItems[existingCartItemIndex] = updatedItem
//         }

//         return {...state, updatedItems}
//     }

//     if(action.type === 'CLEAR_CART') {
//         return {...state, items: []}
//     }

//     return state;
//  }

