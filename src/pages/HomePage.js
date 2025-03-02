import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import '../styles/HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const sampleProducts = [
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        name: 'Product 1',
        price: 29.99,
        description: 'This is the description for product 1.'
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        name: 'Product 2',
        price: 39.99,
        description: 'This is the description for product 2.'
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150/00FF00/000000?text=Product+3',
        name: 'Product 3',
        price: 19.99,
        description: 'This is the description for product 3.'
      }
    ];

    setProducts(sampleProducts);
  }, []);

  return (
    <div className="home-page">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;