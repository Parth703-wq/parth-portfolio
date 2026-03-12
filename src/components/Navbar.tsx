import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', id: 'nav-home' },
        { name: 'About', path: '/about', id: 'nav-about' },
        { name: 'Skills', path: '/skills', id: 'nav-skills' },
        { name: 'Projects', path: '/projects', id: 'nav-projects' },
        { name: 'Experience', path: '/experience', id: 'nav-experience' },
        { name: 'Achievements', path: '/achievements', id: 'nav-achievements' },
        { name: 'Contact', path: '/contact', id: 'nav-contact' },
    ];

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="logo" id="logo">
                    <span className="accent">P</span>arth<span className="accent">.</span>
                </Link>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                id={link.id}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        className="nav-indicator"
                                        layoutId="nav-indicator"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
