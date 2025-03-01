import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;