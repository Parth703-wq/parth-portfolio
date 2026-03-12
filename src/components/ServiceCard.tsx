import { motion } from 'framer-motion';
import './Card.css';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <motion.div
            className="service-card glass"
            whileHover={{ y: -5 }}
        >
            <div className="card-icon">{icon}</div>
            <div className="card-info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
