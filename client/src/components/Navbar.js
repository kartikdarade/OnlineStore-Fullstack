// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🛒 OnlineStore</div>
      
      <div className="nav-groups">
        <ul className="nav-links left-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

        <ul className="nav-links right-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
