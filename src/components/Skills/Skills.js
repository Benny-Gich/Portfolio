import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Mobile Development",
            icon: "📱",
            skills: [
                { name: "Flutter", level: 90 },
                { name: "Dart", level: 85 },
                { name: "Android Studio", level: 80 },
                { name: "UI/UX Design", level: 75 }
            ]
        },
        {
            title: "Web Development",
            icon: "🌐",
            skills: [
                { name: "React.js", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "HTML/CSS", level: 90 },
                { name: "WordPress", level: 75 }
            ]
        },
        {
            title: "Systems & Databases",
            icon: "⚙️",
            skills: [
                { name: "PostgreSQL", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "Linux Administration", level: 75 },
                { name: "AWS Cloud", level: 70 }
            ]
        },
        {
            title: "Business Systems",
            icon: "💼",
            skills: [
                { name: "ERP Systems", level: 85 },
                { name: "SAP", level: 75 },
                { name: "Tally", level: 80 },
                { name: "Network Admin", level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <p className="section-subtitle">
                    Comprehensive skill set spanning development, administration, and business systems
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-cloud">
                    <h3>Additional Technologies</h3>
                    <div className="tech-tags">
                        {[
                            "Git", "GitHub", "Figma", "Agile", "Automated Testing",
                            "TCP/IP", "DNS", "DHCP", "WAN", "Helpdesk", "Payroll",
                            "Visual Studio Code", "SEO", "Java", "Wireframes"
                        ].map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;