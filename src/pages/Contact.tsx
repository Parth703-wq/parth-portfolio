import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="contact-page container section-padding">
            <div className="page-header">
                <span className="section-label">Connect</span>
                <h1>Get in <span className="accent">Touch</span></h1>
                <p>Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and data-driven opportunities.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    {/* mailto: link to open email client directly */}
                    <a href="mailto:parth.hindiya@gmail.com?subject=Portfolio Contact" className="contact-card-link">
                        <div className="contact-card glass">
                            <Mail className="contact-icon" size={24} />
                            <div>
                                <h4>Email</h4>
                                <p>parth.hindiya@gmail.com</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/Parth703-wq" target="_blank" rel="noreferrer" className="contact-card-link">
                        <div className="contact-card glass">
                            <Github className="contact-icon" size={24} />
                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/Parth703-wq</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/parth-hindiya-67326a236" target="_blank" rel="noreferrer" className="contact-card-link">
                        <div className="contact-card glass">
                            <Linkedin className="contact-icon" size={24} />
                            <div>
                                <h4>LinkedIn</h4>
                                <p>linkedin.com/in/parth-hindiya</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="form-container">
                    {status === "success" ? (
                        <div className="success-message glass">
                            <CheckCircle size={48} className="success-icon" />
                            <h3>Message Sent!</h3>
                            <p>Thanks for reaching out, Parth will get back to you soon.</p>
                            <button className="btn btn-secondary" onClick={() => setStatus("idle")}>Send Another</button>
                        </div>
                    ) : (
                        <form
                            className="contact-form glass"
                            action="https://formspree.io/f/xqeyqdde"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"} <Send size={18} />
                            </button>
                            {status === "error" && <p className="error-text">Oops! Something went wrong. Please try again later or email me directly.</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
