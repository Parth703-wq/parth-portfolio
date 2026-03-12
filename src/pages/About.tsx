import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
    const education = [
        {
            inst: "Government Engineering College Bharuch",
            degree: "Bachelor of Engineering in Computer Engineering",
            period: "Aug 2023 – May 2027",
            score: "CPI: 9.15/10.0"
        },
        {
            inst: "Narayan Vidyalaya, GSEB",
            degree: "Higher Secondary Certificate (HSC)",
            period: "2021 – 2023",
            score: "Grade: B1"
        },
        {
            inst: "B. E. S. Union High School, GSEB",
            degree: "Secondary School Certificate (SSC)",
            period: "2019 – 2021",
            score: "Result: A1"
        }
    ];

    return (
        <div className="about-page container section-padding">
            <motion.div
                className="about-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="section-label">Biography</span>
                <h1>Dedicated to innovation in <span className="accent">Machine Learning</span>.</h1>
            </motion.div>

            <div className="about-grid">
                <div className="about-story">
                    <p>
                        Computer Engineering undergraduate with strong fundamentals in <span className="accent">Data Science</span> and <span className="accent">Machine Learning</span>.
                        Experienced in Python, statistical modeling, and data analysis with hands-on experience in building ML models for
                        classification, NLP, and automation.
                    </p>
                    <p>
                        Proven track record in developing data-driven solutions and working with real-world datasets.
                        My focus lies on architecting intelligent systems that bridge the gap between complex data
                        and practical automation through cutting-edge ML techniques.
                    </p>
                </div>

                <div className="education-column">
                    <h3 className="column-title"><BookOpen size={24} /> Education</h3>
                    <div className="timeline">
                        {education.map((edu, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="period">{edu.period}</span>
                                    <h4>{edu.inst}</h4>
                                    <p>{edu.degree}</p>
                                    <span className="score">{edu.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
