import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-links">
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/other" className="nav-links">
                            Other Stuff
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            Contact
                        </Link>
                    </li>
                </ul>
			</div>
		</nav>
	);
}

export default Navbar