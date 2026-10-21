import React from 'react';
import './About.css';

const About = () => {
    const experiences = [
        {
            role: "IT Officer",
            company: "Comply Industries Limited",
            period: "Mar 2022 – Present",
            location: "Nairobi, KE",
            achievements: [
                "Leadership & Supervision: Supervised 2 IT Technical Support officers, reducing average incident resolution time from 8 hours to 3 hours (62.5% improvement) while maintaining a 94% user satisfaction score (up from 82%).",
                "Infrastructure & Systems: Managed 2 Windows Server instances (2008 & 2019) supporting 100 users at 99.9% uptime and 99.5% patch compliance via WSUS. Restructured Active Directory OUs and Group Policy, automating provisioning for 30+ accounts and cutting access-related tickets by 25%.",
                "ERP & Compliance: Administered SAP, Tally Prime, and SERA for 100 users. Led e-TIMS migration of 10,000+ tax records achieving 100% KRA compliance and saving the finance team 16 person-hours weekly.",
                "Virtualisation & DR: Managed VMware vSphere environment (3 ESXi hosts, 7 production VMs) at 99.95% uptime. Cut RPO from 24 hrs to 4 hrs (83% improvement) and RTO from 8 hrs to 4 hrs (50%) with 100% restore success in quarterly tests.",
                "Security & Surveillance: Deployed pfSense & Cisco ASA firewalls (150+ rules), blocking 12,000+ intrusion attempts/quarter. Led migration from 32 analog to 48 IP-based 4MP cameras over fiber, reducing maintenance costs by KSh 180,000/year.",
                "Payroll Automation: Deployed facial recognition attendance system for 250 employees integrated with SAP payroll, saving KSh 50,000 monthly and reducing payroll errors from 8% to 0.5%."
            ]
        },
        {
            role: "IT Technical Support",
            company: "Comply Industries Limited",
            period: "May 2021 – Feb 2022",
            location: "Nakuru, KE",
            achievements: [
                "Delivered frontline technical support, resolving hardware, software, and network issues within SLA targets.",
                "Reduced ticket resolution time by 20% through improved escalation procedures and knowledge base documentation.",
                "Installed and maintained CCTV systems, network infrastructure, and PBX systems across multiple sites.",
                "Trained end-users on new systems and software, enhancing adoption and reducing repeated issues."
            ]
        },
        {
            role: "Mobile Developer & UI/UX Designer",
            company: "Code Synth",
            period: "Aug 2020 – Feb 2025",
            location: "Remote",
            achievements: [
                "Engineered responsive, adaptive UI components for cross-platform mobile applications using Flutter.",
                "Optimized application performance through strategic widget optimization and efficient code architecture.",
                "Collaborated to publish two apps on the Google Play Store: Smart Mirror and Drilling & Well Control Simulator."
            ]
        },
        {
            role: "Web Developer",
            company: "App Lovin",
            period: "Jan 2020 – Jun 2021",
            location: "Remote",
            achievements: [
                "Designed and developed responsive websites supporting 10,000+ monthly users with 99.9% uptime.",
                "Optimized MySQL and PostgreSQL databases, reducing query response times by 30% and improving load speeds by 25%.",
                "Maintained production websites, implementing security updates and performance enhancements.",
                "Developed and maintained web applications such as elamanella.com, elamanella.com/kindle, gogreenwithnor.pantheonsite.io, and lablog.pantheonsite.io"
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
                            I'm a results-driven IT professional with 5+ years of experience and a proven track record in
                            team leadership, infrastructure management, and strategic project delivery. I directly supervised
                            2 technical staff, reducing average incident resolution time by 62.5% (from 8 to 3 hours).
                        </p>

                        <p>
                            I specialize in enterprise systems administration (Windows Server, VMware, Active Directory),
                            ERP management (SAP, Tally Prime, SERA), IT security compliance, and disaster recovery planning.
                            My focus is on aligning technical solutions with business objectives to drive measurable efficiency
                            and cost savings.
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
                                <span className="highlight-icon">�</span>
                                <div>
                                    <h4>Team Leader</h4>
                                    <p>Supervised 2 officers, cutting incident resolution time by 62.5%</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">💡</span>
                                <div>
                                    <h4>Problem Solver</h4>
                                    <p>Reduced downtime by 35%+ through proactive monitoring and rapid response</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">📊</span>
                                <div>
                                    <h4>Results-Driven</h4>
                                    <p>Delivered KSh 230,000+ in annual operational savings through strategic upgrades</p>
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