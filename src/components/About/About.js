import React from 'react';
import './About.css';

const About = () => {
    const experiences = [
        {
            role: "Systems Administrator",
            company: "SARRAI Group of Companies",
            period: "2021 - Present",
            location: "Nairobi, KE",
            achievements: [
                "Directed enterprise infrastructure including server management and databases",
                "Led TIMs-regulated ETRS migration across departments",
                "Pioneered facial recognition attendance automation integrated with payroll",
                "Orchestrated ERP system transitions streamlining business processes"
            ]
        },
        {
            role: "Mobile Application Developer",
            company: "Attractions",
            period: "2024 - Present",
            location: "Staffordshire, UK (Remote)",
            achievements: [
                "Engineered responsive, adaptive UI components for cross-platform experiences",
                "Optimized application performance through strategic widget optimization",
                "Transformed design wireframes into high-quality functional interfaces",
                "Key Projects: Smart Mirror, Drilling and Well Control Simulator"
            ]
        },
        {
            role: "Web Developer",
            company: "App Lovin",
            period: "2022 - 2025",
            location: "California, US (Remote)",
            achievements: [
                "Developed 5+ responsive websites serving 10,000+ monthly users",
                "Optimized database performance reducing query response times by 30%",
                "Improved application loading speeds by 25% through optimization",
                "Maintained production websites with 99.9% uptime"
            ]
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a highly motivated and innovative professional with a strong passion for
                            creating software solutions that enhance lives and optimize business operations.
                            With over 5 years of experience across mobile development, system administration,
                            and web solutions.
                        </p>

                        <p>
                            My expertise spans Flutter mobile development, React.js web applications,
                            enterprise system administration, and database optimization. I thrive in
                            fast-paced environments and am committed to delivering innovative IT solutions.
                        </p>

                        <div className="about-profile-image">
                            <img
                                src={require('../../assets/profile-about.jpg')}
                                alt="Benjamin Gicheche - Professional"
                                className="about-image"
                            />
                        </div>

                        <div className="about-highlights">
                            <div className="highlight">
                                <span className="highlight-icon">🚀</span>
                                <div>
                                    <h4>Fast Learner</h4>
                                    <p>Quick to adapt to new technologies and methodologies</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">💡</span>
                                <div>
                                    <h4>Problem Solver</h4>
                                    <p>Strong analytical skills for complex technical challenges</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">🤝</span>
                                <div>
                                    <h4>Team Player</h4>
                                    <p>Effective communicator and collaborator in team environments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience">
                        <h3>Professional Journey</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>{exp.role}</h4>
                                        <div className="timeline-meta">
                                            <span className="company">{exp.company}</span>
                                            <span className="period">{exp.period}</span>
                                            <span className="location">{exp.location}</span>
                                        </div>
                                        <ul className="achievements">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;