import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;