import React, { useState } from 'react';
import './css/navbar.css'; // Ensure the CSS path is correct

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to control navbar visibility

    return (
        <div className="navbar-container">
            {/* Navbar content that will push the dash down when visible */}
            {isOpen && (
                <div className="navbar">
                    <div className="logo">
                        <h4>Screen Squid</h4>
                    </div>
                    <div className="nav-links">
                        <a href="/">About</a>
                        <a href="/">Help</a>
                    </div>
                </div>
            )}
            {/* The dash positioned after the navbar content */}
            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>-</div>
        </div>
    );
}
