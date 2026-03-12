import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/', id: 'nav-home' },
        { name: 'About', path: '/about', id: 'nav-about' },
        { name: 'Skills', path: '/skills', id: 'nav-skills' },
        { name: 'Projects', path: '/projects', id: 'nav-projects' },
        { name: 'Experience', path: '/experience', id: 'nav-experience' },
        { name: 'Achievements', path: '/achievements', id: 'nav-achievements' },
        { name: 'Contact', path: '/contact', id: 'nav-contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="logo" id="logo" onClick={closeMenu}>
                    <span className="accent">P</span>arth<span className="accent">.</span>
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links desktop-only">
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

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile-overlay glass"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <ul className="mobile-nav-links">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={location.pathname === link.path ? 'active' : ''}
                                            onClick={closeMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
