import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png'; // Import the logo image

const headerStyles = {
    background: '#ffffff',
    background: 'linear-gradient(90deg, #11b232 0%, #6e78f7 100%)',
    transition: 'all 0.5s',
    zIndex: 997,
    padding: '2px 0',
    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
};

const logoStyles = {
    height: '70px', // Adjust the size as needed
    marginRight: '10px',
};

const navLinkStyles = {
    color: '#eeedef',
    textTransform: 'capitalize',
    textDecoration: 'none',
};

const navLinkHoverStyles = {
    color: '#ccc',
    textDecoration: 'underline',
};

const Header = () => {
    return (
        <header id="header" style={headerStyles}>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/home">
                                <img src={logo} alt="DairySync Logo" style={logoStyles} />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/home" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>About Us</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Services</a>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Pricing</a>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Reviews & Feedbacks</a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup" style={navLinkStyles} onMouseOver={e => e.currentTarget.style = navLinkHoverStyles} onMouseOut={e => e.currentTarget.style = navLinkStyles}>Signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
