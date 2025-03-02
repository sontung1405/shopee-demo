import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;