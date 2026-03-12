import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Codepoets Pvt Ltd",
            role: "AI Intern",
            period: "May 2025 – July 2025",
            type: "Remote | Stipend-based",
            description: [
                "Built automated data processing pipelines using n8n and Python, reducing manual processing time by 35%.",
                "Developed machine learning models for business automation and chatbot applications.",
                "Implemented data analysis workflows using LangChain for structured data extraction and processing."
            ],
            tech: ["Python", "n8n", "Flowise", "LangChain", "CrewAI"]
        }
    ];

    const leadership = [
        {
            role: "Department Coordinator (DC) - Computer Department",
            org: "Techfest, Government Engineering College Bharuch",
            details: [
                "Organized data science workshops attended by 200+ students, resulting in a 20% increase in department event participation.",
                "Managed multiple technical hackathons and facilitated team collaboration for regional coding competitions.",
                "Organized analytics showcases and project presentations attracting 300+ total attendees across department festivals."
            ]
        }
    ];

    return (
        <div className="experience-page container section-padding">
            <div className="page-header">
                <span className="section-label">Trajectory</span>
                <h1>Professional <span className="accent">Experience</span></h1>
            </div>

            <div className="experience-list">
                {experiences.map((exp, idx) => (
                    <motion.div
                        className="exp-item glass"
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="exp-header">
                            <div className="company-info">
                                <div className="exp-icon"><Briefcase size={24} /></div>
                                <div>
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                            </div>
                            <div className="exp-meta">
                                <span className="period">{exp.period}</span>
                                <span className="type">{exp.type}</span>
                            </div>
                        </div>

                        <ul className="exp-details">
                            {exp.description.map((item, iIdx) => (
                                <li key={iIdx}>{item}</li>
                            ))}
                        </ul>

                        <div className="exp-tech">
                            {exp.tech.map((t, tIdx) => (
                                <span key={tIdx} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="leadership-section section-padding">
                <h2 className="section-title">Leadership <span className="accent">Experience</span></h2>
                <div className="leadership-list">
                    {leadership.map((item, idx) => (
                        <motion.div
                            className="leadership-card glass"
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="leadership-header">
                                <div className="lead-icon"><Users size={24} /></div>
                                <div>
                                    <h3>{item.role}</h3>
                                    <h4>{item.org}</h4>
                                </div>
                            </div>
                            <ul className="lead-details">
                                {item.details.map((detail, dIdx) => (
                                    <li key={dIdx}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
