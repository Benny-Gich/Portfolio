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
                        <span>Available for New Opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="accent">Benjamin Gicheche</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        <span className="typing-text">
                            IT Officer | IT Assistant Manager | Systems Administrator | Mobile &amp; Web Developer
                        </span>
                    </h2>

                    <p className="hero-description">
                        IT Assistant Manager ready with 5+ years of experience and a proven track record in team leadership, infrastructure management, and strategic project delivery. I directly supervised 2 technical staff, reducing average incident resolution time by 62.5% (from 8 to 3 hours). I specialize in leading complex system migrations (ERP, surveillance), enforcing security compliance, and implementing disaster recovery plans that cut RTO by 50%. My focus is on aligning technical solutions with business objectives to drive efficiency and growth.
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">62.5%</span>
                            <span className="stat-label">Faster Incident Resolution</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">99.9%</span>
                            <span className="stat-label">Uptime Maintained</span>
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