import React from 'react';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
  ];

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>${item.price} x {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;