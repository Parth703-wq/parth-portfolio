import { motion } from 'framer-motion';
import { Trophy, Award, Medal, ExternalLink, Zap, Star } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: "Founder Elite Award",
            organization: "Parul University",
            type: "Award",
            icon: <Award size={32} />
        },
        {
            title: "2nd Position — FusionHack Hackathon",
            organization: "IEEE GECBH SB BRANCH",
            type: "Hackathon",
            icon: <Trophy size={32} />
        },
        {
            title: "Finalist — FINNOVATE HACK 2025",
            organization: "IIT Gandhinagar",
            type: "Hackathon",
            icon: <Medal size={32} />
        },
        {
            title: "Finalist — InnovAItion Hackathon",
            organization: "DAIICT",
            type: "Hackathon",
            icon: <Medal size={32} />
        },
        {
            title: "Finalist — NEXATHON 24-hour Hackathon",
            organization: "GCET, Anand",
            type: "Hackathon",
            icon: <Medal size={32} />
        },
        {
            title: "Finalist — HACKSETU 1.0 36-Hour Hackathon",
            organization: "Amity University",
            type: "Hackathon",
            icon: <Medal size={32} />
        },
        {
            title: "4th Position — IEEE State Level Hackathon",
            organization: "SCET Surat",
            type: "Hackathon",
            icon: <Trophy size={32} />
        }
    ];

    const academic = [
        {
            title: "Nominated twice for Dewang Mehta IT Awards",
            desc: "For highest SPI (1st and 2nd year)",
            icon: <Star size={20} />
        },
        {
            title: "National AI Powered Research & Innovation Poster Competition",
            desc: "Selected for Top 33 from 133 submissions - GTU Chandkheda",
            icon: <Zap size={20} />
        }
    ];

    const grants = [
        {
            title: "SSIP Gujarat Grant: Smart Library System",
            role: "Team Leader (RFID+AI based System)",
            badge: "Team Lead"
        },
        {
            title: "SSIP Gujarat Grant: Smart IoT Dustbin",
            role: "Co-leader",
            badge: "Co-Lead"
        }
    ];

    const certifications = [
        { title: "Amazon ML Summer School 2025", org: "Amazon", type: "Technical" },
        { title: "Database Management Systems", org: "NPTEL", type: "Technical" },
        { title: "Diploma in Multilingual Computer Programming (Grade A)", org: "CDAC", type: "Technical" },
        { title: "Java Programming (Score: 90%)", org: "IIT Bombay", type: "Technical" },
        { title: "Green Skills and Artificial Intelligence", org: "Edunet Foundation", type: "Technical" },
        { title: "Python Machine Learning: From Beginner to Pro", org: "Udemy", type: "Online Learning" },
        { title: "AI for Operational Excellence", org: "Udemy", type: "Online Learning" },
        { title: "Deep Reinforcement Learning using Python", org: "Udemy", type: "Online Learning" }
    ];

    return (
        <div className="achievements-page container section-padding">
            <div className="page-header">
                <span className="section-label">Milestones</span>
                <h1>Honors & <span className="accent">Awards</span></h1>
            </div>

            <div className="achievements-grid">
                {achievements.map((ach, idx) => (
                    <motion.div
                        className="achievement-card glass"
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="ach-icon">{ach.icon}</div>
                        <div className="ach-info">
                            <span className="ach-type">{ach.type}</span>
                            <h3>{ach.title}</h3>
                            <p>{ach.organization}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="premium-sections-row">
                <div className="info-block glass academic-glow">
                    <h2 className="block-title">Academic Achievements</h2>
                    <div className="block-content">
                        {academic.map((item, idx) => (
                            <div className="premium-item" key={idx}>
                                <div className="item-icon">{item.icon}</div>
                                <div className="item-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="info-block glass funding-glow">
                    <h2 className="block-title">Project Funding</h2>
                    <div className="block-content">
                        {grants.map((grant, idx) => (
                            <div className="premium-item funding-item" key={idx}>
                                <div className="item-text">
                                    <h3>{grant.title}</h3>
                                    <p>{grant.role}</p>
                                </div>
                                <span className="item-badge">{grant.badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="certifications-section section-padding">
                <h2 className="section-title text-center">Technical Certifications</h2>
                <div className="certs-grid">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            className="cert-card glass"
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="cert-info">
                                <span className="cert-type">{cert.type}</span>
                                <h3>{cert.title}</h3>
                                <p>{cert.org}</p>
                            </div>
                            <ExternalLink size={18} className="cert-link-icon" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
