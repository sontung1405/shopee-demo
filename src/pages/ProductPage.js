// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('There was an error fetching the products.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h1>Product List</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ProductPage;