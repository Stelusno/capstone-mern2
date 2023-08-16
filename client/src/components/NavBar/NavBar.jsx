import { Link } from 'react-router-dom';
import React from 'react';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav-bar bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-black flex items-center justify-between">
      <div className="logo-container mr-auto">
        <Link className="logo px-4 text-blue-600 text-2xl font-semibold tracking-wider" to="/">
          The Spot
        </Link>
      </div>
      <Link className="links px-4 hover:text-blue-600 transition-colors" to="/">
        All Products
      </Link>
      <Link className="links px-4 hover:text-blue-600 transition-colors" to="/cart" onClick={handleLogOut}>
        Cart
      </Link>
      <Link className="links px-4 hover:text-blue-600 transition-colors" to="/login">
        Log In
      </Link>
    </nav>
  );
}
