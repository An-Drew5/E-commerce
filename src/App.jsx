import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { CartContext } from './store/shopping-cart-context'
import { imageGallery, newArrivals, blindsImages, wallpaperImages } from "./util/productImages";

function App() {
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
        items: updatedItems
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
      }

      updatedItem.quantity += amount;

      if(updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      }
    });
  }

  console.log()
  return (
    <>
    
    <CartContext value={shoppingCart}>

      <Header cart={shoppingCart} onUpdateCartItemQuantity={handleUpdatedCartItemQuantity}/>

      <Product heading="Popular" product={imageGallery}/>
      <Product heading="New Arrivals" product={newArrivals}/>
      <Product heading="Window Blinds" product={blindsImages}/>
      <Product heading="Wallpapers" product={wallpaperImages}/>

    </CartContext>
    </>
  )
}

export default App
