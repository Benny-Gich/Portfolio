import React, { useState } from 'react';
import './Header.css';

const Header = ({ darkMode, setDarkMode, activeSection }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsDrawerOpen(false); // Close drawer after navigation
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <span>Benjamin Gicheche</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav desktop-nav">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    {/* Hamburger Menu Button */}
                    <button
                        className={`hamburger ${isDrawerOpen ? 'active' : ''}`}
                        onClick={toggleDrawer}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            {isDrawerOpen && (
                <div
                    className="drawer-overlay"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <nav className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`drawer-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;