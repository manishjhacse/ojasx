import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosContact } from "react-icons/io";
import logo from "../../assests/logo.png"
import { useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const loggedIn = useSelector(state => state.loggedIn)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar px-3 pr-6 text-3xl fixed top-0 left-0 right-0 z-50">
                <div className="hamburger" onClick={toggleMenu}>
                    {!isMenuOpen ? <FaBars /> : <RxCross2 />}
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="contact-link text-4xl">
                    <Link to="/">
                    <div className='flex justify-center items-center'><IoIosContact /></div>
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
                    <button className="scroll-to-top button" onClick={closeMenu}>Go Back</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
