import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductList from '../components/ProductList';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;