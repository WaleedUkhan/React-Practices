// ProductItem.jsx
// import React from 'react';

function ProductItem({ name, price }) {
  const styles = {backgroundColor: price> 30000 ? "powderblue": ""}
  return (
    <div className="product-item" style={styles}>
      <h1>Product: {name}</h1>
      <h2>Price: {price}</h2>
    </div>
  );
}

export default ProductItem;
