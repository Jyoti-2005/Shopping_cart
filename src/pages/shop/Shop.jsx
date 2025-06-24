import React from 'react'
import Navbar from '../../component/Navbar'
import { PRODUCT } from '../../products'
import Product from './product'
import './shop.css'

function Shop() {
  return (
    <div className='shop'>
      {/* <Navbar/> */}
      <div className='shopTitle'>
        <h1>Pedrotech Shop</h1>
      </div>
      <div className='products'>
        {PRODUCT.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            productName={item.productName}
            price={item.price}
            productImage={item.productImage}
          />
        ))}
      </div>
    </div>
  )
}
export default Shop