import React, { useContext } from 'react';
import { PRODUCT } from '../../products';
import { mycontext } from "../../context/Shopcontext";
import CartItem from "./cart-item";
import "./cart.css"
import {useNavigate} from 'react-router-dom'


function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(mycontext);
  const totalAmount =getTotalCartAmount();

   const navigate =useNavigate()

  return (
    <div className='cart'>
      
      <div className='cartItemsContainer'>
        {PRODUCT.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} data={item} />;
          }
          return null;
        })}
         {totalAmount > 0 ?
        <div className='checkout'>
          <div>
        <h1 style={{position:'absolute',top:'60px'}}>Your Cart Items</h1>
      </div>
          <p>Suntotal:${totalAmount}</p>
          <button onClick={() =>navigate('/')}>Continue Shopping</button>
          <button>Checkout</button> 
        </div>
          :
         <h1 style={{textAlign:'center'}}>Your Cart is Empty</h1>
     }
      </div>
    </div>
  );
}

export default Cart;
