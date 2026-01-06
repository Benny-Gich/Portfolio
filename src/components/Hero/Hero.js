import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>🚀 Available for New Opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="accent">Benjamin Gicheche</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        <span className="typing-text">
                            Mobile App Developer • Systems Administrator • Web Developer • UI/UX Designer
                        </span>
                    </h2>

                    <p className="hero-description">
                        Full-stack developer with 5+ years experience in mobile app development,
                        system administration, and web solutions. Passionate about creating
                        efficient, scalable software that drives business growth and enhances user experiences.
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Monthly Users</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">99.9%</span>
                            <span className="stat-label">Uptime</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Let's Connect
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-image-container">
                        <img
                            src={require('../../assets/profile-hero.jpg')}
                            alt="Benjamin Gicheche"
                            className="profile-image"
                        />
                        <div className="image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;