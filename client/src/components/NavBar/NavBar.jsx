import { Link } from 'react-router-dom'
import React from 'react'
import "../../App.css"

export default function NavBar() {
    return (
        <nav>
            <Link to="/">All Products</Link>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
        </nav>
    );
}