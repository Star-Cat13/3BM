import '../assets/navbar.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';


const Navbar = () => {
    const [responsive, setResponsive] = useState(false);

    const handleToggleResponsive = () => {
        setResponsive(prevState => !prevState);
    };

    return (
        <div>
            <nav className={`navbar topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
                <Link to="/home" className="active">
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                        Home
                    </span>
                </Link>
                <Link to="/about">
                    <i className="fa fa-info fa-2x"></i>
                    <span className="nav-text">
                        About
                    </span>
                </Link>
                <Link to="/contact">
                    <i className="fa fa-comments fa-2x"></i>
                    <span className="nav-text">
                        Contact
                    </span>
                </Link>

                <a href="javascript:void(0);" className="icon" onClick={handleToggleResponsive}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </div>
    );
};

export default Navbar;