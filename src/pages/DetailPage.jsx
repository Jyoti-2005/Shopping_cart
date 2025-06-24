import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT } from '../products'
import './DetailPage.css';

const DetailPage = () => {
  const {id} = useParams();
  const product = PRODUCT.find((item) => item.id === Number(id));

  return (
    <div>
      {product ? (
        <>
          <h2 className='param'>{product.productName}</h2>
          <img src={product.productImage} />
          <p className='param'> Price: ${product.price}</p>
        </>
      ) : (<p>Product not found</p>)}
    </div>
  );
};

export default DetailPage;
