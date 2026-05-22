import React, { useState, useEffect } from 'react';
import './Projects.css';

const featuredProjects = [
    {
        id: 1,
        name: "Enterprise e-TIMS Compliance Migration",
        description: "Led the end-to-end migration of 10,000+ tax transaction records from a legacy ETR system to the KRA-mandated e-TIMS platform, redesigning ERP workflows and user permission matrices across the finance and operations departments.",
        tech: ["SAP", "Tally Prime", "SERA", "Data Migration", "Regulatory Compliance"],
        category: "infrastructure",
        challenge: "Legacy ERP system non-compliant with KRA regulations, risking penalties and causing manual 3-day monthly financial reports.",
        result: "Achieved 100% KRA compliance. Slashed monthly financial reporting from 3 days to 1 day, saving the finance team 16 person-hours weekly. Reduced ERP permission errors by 40%.",
        impact: "100% KRA compliance · 16 person-hours saved weekly · 40% fewer permission errors"
    },
    {
        id: 2,
        name: "IP Surveillance & Payroll Automation Overhaul",
        description: "Architected and led the full migration from 32 analog CCTV cameras to 48 IP-based 4MP cameras over fiber, and deployed an enterprise facial recognition attendance system integrated with SAP payroll for 250 employees.",
        tech: ["Network Infrastructure", "IP Cameras", "Facial Recognition", "SAP Payroll", "Fiber Networking"],
        category: "infrastructure",
        challenge: "Outdated analog CCTV with poor night coverage and rampant time theft ('buddy-punching') causing 8% payroll errors and high maintenance costs.",
        result: "Reduced CCTV maintenance costs by KSh 180,000/year, improved night incident capture by 60%, eliminated buddy-punching, and saved KSh 50,000 monthly by cutting payroll errors from 8% to 0.5%.",
        impact: "KSh 230,000+ saved annually · Payroll errors reduced from 8% to 0.5% · 60% better night capture"
    },
    {
        id: 3,
        name: "VMware vSphere Infrastructure & Disaster Recovery",
        description: "Managed a production VMware vSphere environment with 3 ESXi hosts and 7 VMs supporting 100 users. Implemented a comprehensive Disaster Recovery Plan with Acronis daily backups and quarterly DR testing.",
        tech: ["VMware vSphere", "ESXi", "Acronis", "Windows Server", "Disaster Recovery"],
        category: "infrastructure",
        challenge: "VM provisioning took 4 hours, RPO was 24 hours, and RTO was 8 hours — unacceptable for business continuity requirements.",
        result: "Cut VM provisioning from 4 hours to 45 minutes (81% faster), reduced RPO from 24 hrs to 4 hrs (83% improvement), and slashed RTO from 8 hrs to 4 hrs (50% improvement) with 100% restore success.",
        impact: "99.95% uptime · RPO reduced by 83% · RTO reduced by 50% · 100% restore success rate"
    },
    {
        id: 4,
        name: "Smart Mirror Application",
        description: "Innovative Flutter-based smart mirror interface with custom widgets and adaptive UI, featuring IoT integration and facial recognition capabilities.",
        tech: ["Flutter", "Dart", "UI/UX"],
        category: "mobile",
        playstore: "https://play.google.com/store/apps/details?id=com.smartmirror.saral",
        impact: "Published on Google Play Store · Advanced IoT integration"
    },
    {
        id: 5,
        name: "Drilling & Well Control Simulator",
        description: "Complex simulation application for drilling operations with real-time data processing, used as a training tool for petroleum industry professionals.",
        tech: ["Flutter", "Dart", "Algorithms"],
        category: "mobile",
        playstore: "https://play.google.com/store/apps/details?id=com.ltd.simulation.drilling",
        impact: "Published on Google Play Store · Industry training tool"
    },
    {
        id: 6,
        name: "Responsive Web Platforms",
        description: "Designed and developed responsive websites serving 10,000+ monthly users with optimized database performance and 99.9% uptime.",
        tech: ["React", "WordPress", "MySQL", "PostgreSQL"],
        category: "web",
        impact: "10,000+ monthly users · 30% faster query response · 99.9% uptime",
        links: [
            { label: "Elamanella", url: "https://elamanella.com" },
            { label: "Elamanella/Kindle", url: "https://elamanella.com/kindle" },
            { label: "GoGreen", url: "https://gogreenwithnor.pantheonsite.io" },
            { label: "Lablog", url: "https://lablog.pantheonsite.io" },
            { label: "Portfolio", url: "https://benjamingicecheportfolio.netlify.app/" }
        ]
    }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // For now, we'll use the featured projects
        // In a real implementation, you'd fetch from GitHub API
        setProjects(featuredProjects);
    }, []);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    IT infrastructure leadership, system migrations, and development work
                </p>

                <div className="project-filters">
                    {[
                        { key: 'all', label: 'All' },
                        { key: 'infrastructure', label: 'Infrastructure' },
                        { key: 'mobile', label: 'Mobile' },
                        { key: 'web', label: 'Web' }
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            className={`filter-btn ${filter === key ? 'active' : ''}`}
                            onClick={() => setFilter(key)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className={`project-card ${project.category !== 'all' ? 'project-card--featured' : ''}`}>
                            <div className="project-header">
                                {project.category === 'infrastructure' && (
                                    <span className="project-badge">IT Infrastructure</span>
                                )}
                                {project.category === 'mobile' && (
                                    <span className="project-badge">Mobile</span>
                                )}
                                {project.category === 'web' && (
                                    <span className="project-badge">Web</span>
                                )}
                                <h3>{project.name}</h3>
                            </div>

                            <p className="project-description">{project.description}</p>

                            {project.details && (
                                <ul className="project-details">
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            )}

                            {project.challenge && (
                                <div className="project-challenge">
                                    <strong>Challenge:</strong> {project.challenge}
                                </div>
                            )}

                            {project.result && (
                                <div className="project-result">
                                    <strong>Result:</strong> {project.result}
                                </div>
                            )}

                            {project.impact && (
                                <div className="project-impact">
                                    <strong>Impact:</strong> {project.impact}
                                </div>
                            )}

                            <div className="project-tech">
                                {project.tech.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.playstore && (
                                    <a href={project.playstore} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Play Store
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Live Demo
                                    </a>
                                )}
                                {project.links && project.links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;