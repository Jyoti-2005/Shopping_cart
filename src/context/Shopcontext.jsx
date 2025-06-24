import React, { useState, createContext } from 'react'
import { PRODUCT } from '../products'
import Product from '../pages/shop/product';


export const mycontext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const Shopcontext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((Product) => Product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

  console.log(cartItems)

  return (
    <mycontext.Provider value={contextValue}> {props.children}</mycontext.Provider>
  )
}

export default Shopcontext

