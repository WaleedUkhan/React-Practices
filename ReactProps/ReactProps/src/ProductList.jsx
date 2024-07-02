// ProductList.jsx
// import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <>
      {products.map((product, index) => (
        <ProductItem key={index} name={product.name} price={product.price} />
      ))}
    </>
  );
}

export default ProductList;
