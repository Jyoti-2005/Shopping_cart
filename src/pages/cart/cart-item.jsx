import React, { useContext } from 'react'
import "./cart.css"
import { mycontext } from "../../context/Shopcontext";

const CartItem = ({ data }) => {
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(mycontext);
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> -</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
