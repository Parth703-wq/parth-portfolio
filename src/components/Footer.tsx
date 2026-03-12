import './Footer.css';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <p>© {new Date().getFullYear()} Parth Hindiya.</p>
                    <p className="footer-tagline">Data Science Enthusiast | AI Developer</p>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/Parth703-wq" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/parth-hindiya-67326a236" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                    <a href="mailto:parth.hindiya@gmail.com" title="Email"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
