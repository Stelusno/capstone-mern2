import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <Link className="logo" to="/">The Spot</Link>
      </div>
      <Link className="links" to="/">
        All Products
      </Link>
      <Link className="links" to="/login">
        Login
      </Link>
    </nav>
  );
}
