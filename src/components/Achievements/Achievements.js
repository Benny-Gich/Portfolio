import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            metric: "62.5%",
            label: "Faster Incident Resolution",
            detail: "Cut average resolution from 8 hrs to 3 hrs by supervising 2 direct reports",
            icon: "⚡"
        },
        {
            metric: "KSh 230K+",
            label: "Annual Savings Delivered",
            detail: "Through IP surveillance overhaul and payroll automation eliminating buddy-punching",
            icon: "💰"
        },
        {
            metric: "10,000+",
            label: "Records Migrated",
            detail: "Tax records migrated to e-TIMS achieving 100% KRA compliance",
            icon: "✅"
        },
        {
            metric: "83%",
            label: "RPO Improvement",
            detail: "Reduced Recovery Point Objective from 24 hours to 4 hours with Acronis backups",
            icon: "🛡️"
        },
        {
            metric: "99.95%",
            label: "VM Uptime",
            detail: "Maintained across 7 production VMs on VMware vSphere with 3 ESXi hosts",
            icon: "🖥️"
        },
        {
            metric: "40%",
            label: "Fewer ERP Errors",
            detail: "Reduced permission-related errors by redesigning role-based permissions matrix",
            icon: "📊"
        }
    ];

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <h2 className="section-title">Key Achievements</h2>
                <p className="section-subtitle">
                    Quantifiable results delivered across infrastructure, security, and operations
                </p>

                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-metric">{item.metric}</div>
                            <div className="achievement-label">{item.label}</div>
                            <p className="achievement-detail">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
