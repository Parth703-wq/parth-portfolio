import { motion } from 'framer-motion';
import './Skills.css';
import n8nLogo from '../assets/n8n.png';
import matplotlibLogo from '../assets/matplotlib_circle.png';

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
            ]
        },
        {
            title: "Machine Learning",
            skills: [
                { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
            ]
        },
        {
            title: "Data Analysis",
            skills: [
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                { name: "Matplotlib", icon: matplotlibLogo },
                { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "n8n", icon: n8nLogo },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ]
        }
    ];

    return (
        <div className="skills-page container section-padding">
            <div className="page-header">
                <span className="section-label">Expertise</span>
                <h1>Technical <span className="accent">Proficiency</span></h1>
                <p>A comprehensive overview of my technical skills and toolstack.</p>
            </div>

            <div className="categories-stack">
                {categories.map((cat, idx) => (
                    <motion.div
                        className="skill-category"
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3>{cat.title}</h3>
                        <div className="skills-grid">
                            {cat.skills.map((skill, sIdx) => (
                                <div className="skill-card glass" key={sIdx}>
                                    <img src={skill.icon} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
