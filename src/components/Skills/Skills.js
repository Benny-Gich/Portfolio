import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Systems & Infrastructure",
            icon: "🖥️",
            skills: [
                { name: "Windows Server (2008/2019)", level: 92 },
                { name: "Active Directory & Group Policy", level: 90 },
                { name: "VMware vSphere / ESXi", level: 88 },
                { name: "Disaster Recovery (RTO/RPO)", level: 85 }
            ]
        },
        {
            title: "Security & Cloud",
            icon: "🔐",
            skills: [
                { name: "Firewalls (pfSense / Cisco ASA)", level: 88 },
                { name: "Patch Management (WSUS)", level: 90 },
                { name: "AWS (EC2, S3, VPC, IAM)", level: 75 },
                { name: "Backup & Recovery (Acronis / Veeam)", level: 85 }
            ]
        },
        {
            title: "Business Systems",
            icon: "💼",
            skills: [
                { name: "ERP Systems (SAP / Tally / SERA)", level: 88 },
                { name: "Regulatory Compliance (KRA/TIMS)", level: 90 },
                { name: "Microsoft 365 (Exchange, SharePoint)", level: 82 },
                { name: "Database Admin (MySQL / PostgreSQL)", level: 80 }
            ]
        },
        {
            title: "Development",
            icon: "💻",
            skills: [
                { name: "Flutter / Dart", level: 85 },
                { name: "React.js / JavaScript", level: 80 },
                { name: "HTML5 / CSS3", level: 88 },
                { name: "UI/UX Design (Figma)", level: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <p className="section-subtitle">
                    Infrastructure leadership, security, business systems, and development expertise
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
                    <h3>Additional Technologies & Tools</h3>
                    <div className="tech-tags">
                        {[
                            "TCP/IP", "DNS", "DHCP", "VLANs", "VPN",
                            "Cisco Switches/Routers", "CCTV Installation", "PBX Systems",
                            "Docker", "Linux (Ubuntu)", "Oracle (basic)", "DynamoDB",
                            "Git", "GitHub", "Figma", "Helpdesk / SLA Management",
                            "Facial Recognition Systems", "RBAC", "WSUS", "Kaspersky AV",
                            "Java", "WordPress", "Agile"
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