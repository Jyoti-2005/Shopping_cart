import React, { useContext } from 'react';
import './shop.css';
import { mycontext } from "../../context/Shopcontext";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const { id, productName, price, productImage } = props;
  const { addToCart, cartItems } = useContext(mycontext);
  const cartItemAmount = cartItems[id];

  const navigate = useNavigate();

  const handlerAddcart = () => {
    addToCart(id);
    navigate('/cart');
  };
  
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      
      <button className='addToCartBttn' onClick={handlerAddcart }>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>

      <button onClick={() => navigate(`/product/${id}`)}>
        <BsArrowRightSquareFill />
      </button>
    </div>
  );
};

export default Product;


