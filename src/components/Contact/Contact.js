import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://formspree.io/f/xdkozwzq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                        {status === 'success' && (
                            <div className="form-message success">
                                ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="form-message error">
                                ❌ Oops! Something went wrong. Please try again or email me directly.
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;