import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Shopee Clone</Link>
      <ul className="navbar-nav">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/auth">Login/Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;