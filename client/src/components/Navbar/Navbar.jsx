import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const userLoggedIn = false; // Change this value based on user's login status

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo">
                    <img src="Transparent Logo.png" alt="Logo" />
                </div>
                <div className="contact-link">
                    <Link to="/contact">
                        <img src="contact.png" alt="Contact Us" />
                    </Link>
                </div>
            </nav>

            <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="slide-menu-content">
                    <Link to="/login" className="curve-button" onClick={closeMenu}>Login</Link>
                    <Link to="/signup" className="curve-button" onClick={closeMenu}>Sign Up</Link>
                    <hr />
                    <ul>
                        <li><a href="#">My Events</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ's</a></li>
                    </ul>
                    <button className="scroll-to-top" onClick={closeMenu}>Go Back</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
