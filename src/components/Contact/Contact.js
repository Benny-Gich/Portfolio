import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link with form data
        const mailtoLink = `mailto:benjamingicheche98@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Work Together</h2>
                <p className="section-subtitle">
                    Ready to bring your ideas to life? Get in touch and let's discuss your project.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:benjamingicheche98@gmail.com">
                                    benjamingicheche98@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📱</div>
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:+254715210566">+254 715 210 566</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">💼</div>
                            <div>
                                <h4>LinkedIn</h4>
                                <a
                                    href="http://www.linkedin.com/in/benjamin-gicheche/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Benjamin Gicheche
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">🐙</div>
                            <div>
                                <h4>GitHub</h4>
                                <a
                                    href="https://github.com/Benny-Gich"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Benny-Gich
                                </a>
                            </div>
                        </div>

                        <div className="availability">
                            <h4>Current Status</h4>
                            <div className="status available">
                                <span className="status-dot"></span>
                                Available for new opportunities
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-message info">
                            📬 This form will open your default email client to send the message.
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;