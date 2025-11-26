import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="logo">
                            <span>Benjamin Gicheche</span>
                            {/* <span className="accent">.</span> */}
                        </div>
                        <p>
                            Mobile Application Developer • Systems Administrator • Web Developer
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Quick Links</h4>
                            <a href="#home">Home</a>
                            <a href="#projects">Projects</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="link-group">
                            <h4>Connect</h4>
                            <a
                                href="http://www.linkedin.com/in/benjamin-gicheche/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Benny-Gich"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a href="mailto:benjamingicheche98@gmail.com">
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Benjamin Gicheche. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;