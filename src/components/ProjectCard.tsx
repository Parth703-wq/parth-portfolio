import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Card.css';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    isInternal?: boolean;
}

const ProjectCard = ({ title, description, tech, link, isInternal }: ProjectCardProps) => {
    return (
        <motion.div
            className={`project-card glass ${isInternal ? 'internal-card' : ''}`}
            whileHover={{ y: -10, elevation: 20 }}
        >
            <div className="card-header">
                <h4>{title}</h4>
                {isInternal ? (
                    <span className="lock-icon" title="Internal Access Only"><Lock size={18} /></span>
                ) : (
                    <a href={link} target="_blank" rel="noreferrer" className="external-link">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
            <p>{description}</p>
            <div className="card-tech">
                {tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                ))}
            </div>
            {isInternal ? (
                <Link to="/contact" className="view-btn internal-btn">Request Demo</Link>
            ) : (
                <a href={link} target="_blank" rel="noreferrer" className="view-btn">View Full Project</a>
            )}
        </motion.div>
    );
};

export default ProjectCard;
