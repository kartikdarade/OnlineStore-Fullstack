// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="logo">🛒 OnlineStore</div>
      
      <div className="nav-groups">
        <ul className="nav-links left-links">
          <li><Link to="/">Home</Link></li>
        </ul>

        <ul className="nav-links right-links">
        <li><Link to="/cart">  🛒 Cart 
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
