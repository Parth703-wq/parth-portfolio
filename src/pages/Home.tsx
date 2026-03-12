import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronRight, BarChart3, Brain, Cpu, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/profile.png';
import TechStrip from '../components/TechStrip';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    const featuredProjects = [
        {
            title: "Fake News Detection",
            description: "Developed a hybrid deep learning model combining BERT and GPT architectures for fake news detection specifically on Indian datasets.",
            tech: ["BERT", "Python", "NLP", "Statistical Analysis"],
            link: "https://github.com/Parth703-wq/fake-news-detection-bert-gpt2"
        },
        {
            title: "FINTEL AI",
            description: "A fully automated invoice intelligence system integrating Vision AI, Machine Learning, and LLM-powered analysis using Gemini 2.5 Flash.",
            tech: ["Vision AI", "LLM", "Python", "MongoDB"],
            link: "https://github.com/Parth703-wq/fintel-ai"
        },
        {
            title: "Medical Assistant Telegram Bot",
            description: "A multi-modal AI medical assistant (Nidhi AI) supporting voice input, PDF analysis (medical reports), and voice responses using LLMs.",
            tech: ["n8n", "ElevenLabs", "OpenRouter", "Telegram API"],
            link: "https://t.me/medical_nidhi_bot"
        }
    ];

    const expertises = [
        {
            icon: <Brain size={24} />,
            title: "Machine Learning Systems",
            description: "Designing end-to-end ML pipelines for classification, regression, and predictive modeling."
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Data Analysis",
            description: "Transforming raw data into actionable insights through statistical analysis and visualization."
        },
        {
            icon: <Cpu size={24} />,
            title: "AI Automation",
            description: "Building agentic workflows and automated systems using LLMs and modern automation tools."
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero container section-padding">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hello">Hello.</span>
                        <h1>I'm <span className="accent">Parth Hindiya</span></h1>
                        <h2 className="title">Lead AI Developer & Data Scientist</h2>
                        <p className="summary">
                            Computer Engineering undergraduate specializing in <span className="accent">Machine Learning</span> and <span className="accent">Automation</span>.
                            Currently directing technical implementation for <span className="accent">2 Government-funded AI projects</span> while creating data-driven solutions for real-world impact.
                        </p>
                        <div className="hero-btns">
                            <Link to="/projects" className="btn btn-primary">
                                View Projects <ChevronRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Let's Connect
                            </Link>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/Parth703-wq" target="_blank" rel="noreferrer" title="GitHub"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/parth-hindiya-67326a236" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={24} /></a>
                            <a href="mailto:parth.hindiya@gmail.com" title="Email"><Mail size={24} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-rings">
                            <div className="ring ring-1"></div>
                            <div className="ring ring-2"></div>
                        </div>
                        <div className="profile-frame">
                            <img src={profileImg} alt="Parth Hindiya" className="profile-img" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Strip */}
            <TechStrip />

            {/* About & Expertise */}
            <section className="about-preview container section-padding">
                <div className="expertise-grid">
                    <div className="expertise-list">
                        {expertises.map((exp, idx) => (
                            <ServiceCard key={idx} {...exp} />
                        ))}
                    </div>

                    <div className="about-content">
                        <span className="section-label">About Me</span>
                        <h3>Solving complex problems through <span className="accent">Data Science, AI, & ML</span>.</h3>
                        <p>
                            I am a Computer Engineering undergraduate with strong fundamentals in <span className="accent">Data Science</span> and <span className="accent">Machine Learning</span>.
                            Experienced in Python, statistical modeling, and building intelligent models for classification, NLP, and automation.
                        </p>
                        <p>
                            With a proven track record in developing data-driven solutions and working with real-world datasets, I focus on
                            bridging the gap between complex data and practical, scalable AI automation.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-num">15+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">12+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="featured-projects container section-padding">
                <div className="featured-header">
                    <span className="section-label">Work</span>
                    <h3>Featured <span className="accent">Projects</span></h3>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
                <div className="view-all">
                    <Link to="/projects" className="btn btn-text">
                        View All Projects <ChevronRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
