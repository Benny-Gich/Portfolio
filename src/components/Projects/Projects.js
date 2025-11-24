import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    const featuredProjects = [
        {
            id: 1,
            name: "Smart Mirror Application",
            description: "Innovative Flutter-based smart mirror interface with custom widgets and adaptive UI",
            tech: ["Flutter", "Dart", "UI/UX"],
            category: "mobile",
            github: "https://github.com/Benny-Gich/smart-mirror",
            impact: "Advanced IoT integration with facial recognition capabilities"
        },
        {
            id: 2,
            name: "Drilling & Well Control Simulator",
            description: "Complex simulation application for drilling operations with real-time data processing",
            tech: ["Flutter", "Dart", "Algorithms"],
            category: "mobile",
            github: "https://github.com/Benny-Gich/drilling-simulator",
            impact: "Training tool for petroleum industry professionals"
        },
        {
            id: 3,
            name: "Elamanella Websites",
            description: "Responsive web platforms serving 10,000+ monthly users with 99.9% uptime",
            tech: ["React", "WordPress", "MySQL"],
            category: "web",
            live: "http://elamanella.com",
            impact: "High-traffic e-commerce solution with optimized performance"
        },
        {
            id: 4,
            name: "ERP System Migration",
            description: "Led TIMS-regulated ETRS migration and ERP system transitions",
            tech: ["SAP", "Tally", "PostgreSQL"],
            category: "system",
            impact: "Streamlined business processes across multiple departments"
        }
    ];

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
                    Showcasing my work across mobile development, web solutions, and system administration
                </p>

                <div className="project-filters">
                    {['all', 'mobile', 'web', 'system'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <h3>{project.name}</h3>
                            </div>

                            <p className="project-description">{project.description}</p>

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
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;