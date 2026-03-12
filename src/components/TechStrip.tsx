import './TechStrip.css';
import n8nLogo from '../assets/n8n.png';

const TechStrip = () => {
    const techs = [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "n8n", icon: n8nLogo },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ];

    return (
        <div className="tech-strip">
            <div className="strip-container">
                <div className="strip-content">
                    {[...techs, ...techs].map((tech, idx) => (
                        <div className="tech-item" key={idx}>
                            <img src={tech.icon} alt={tech.name} />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStrip;
