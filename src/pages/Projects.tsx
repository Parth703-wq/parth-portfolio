import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
    const allProjects = [
        {
            title: "Fake News Detection",
            description: "Developed a hybrid deep learning model combining BERT and GPT architectures for fake news detection specifically on Indian datasets. Implemented advanced text preprocessing and ensemble learning.",
            tech: ["BERT", "GPT", "NLP", "Python"],
            link: "https://github.com/Parth703-wq/fake-news-detection-bert-gpt2"
        },
        {
            title: "FINTEL AI",
            description: "A fully automated invoice intelligence system integrating Vision AI, ML, and LLM-powered analysis. Uses Gemini 2.5 Flash for high-accuracy OCR and structured data extraction.",
            tech: ["Gemini 2.5", "Vision AI", "LangChain", "LLaMA"],
            link: "https://github.com/Parth703-wq/fintel-ai"
        },
        {
            title: "Business Directory RAG-Chatbot",
            description: "Built an advanced RAG chatbot using n8n workflow automation for dynamic business directory queries. Implemented data extraction pipelines and contextual understanding.",
            tech: ["n8n", "Python", "RAG", "Data Pipelines"],
            link: "#",
            isInternal: true
        },
        {
            title: "Human Emotion Detection",
            description: "Real-time emotion recognition system using computer vision techniques and CNNs. Performs facial feature extraction across seven different emotion categories.",
            tech: ["Computer Vision", "CNN", "Python", "OpenCV"],
            link: "https://github.com/Parth703-wq/Human-emotion-detection"
        },
        {
            title: "Data Analysis Agent System",
            description: "Developed automated system for data analysis and reporting using CrewAI. Built data processing workflows and statistical analysis pipelines.",
            tech: ["CrewAI", "Python", "Streamlit", "Agents"],
            link: "#",
            isInternal: true
        },
        {
            title: "AI-Powered Garbage Classification",
            description: "Deep learning model using MobileNetV2 architecture for automated garbage classification. Applied transfer learning techniques for mobile deployment.",
            tech: ["MobileNetV2", "TensorFlow", "Deep Learning", "CNN"],
            link: "https://github.com/Parth703-wq/garbage-classification-ai"
        },
        {
            title: "Medical Assistant Telegram Bot",
            description: "Developed a multi-modal AI medical assistant (Nidhi AI) supporting voice input, PDF analysis (medical reports), and voice responses (TTS). Integrated LLMs for high-accuracy Q&A.",
            tech: ["n8n", "Telegram API", "OpenRouter", "ElevenLabs"],
            link: "https://t.me/medical_nidhi_bot"
        }
    ];

    return (
        <div className="projects-page container section-padding">
            <div className="page-header">
                <span className="section-label">Portfolio</span>
                <h1>Selected <span className="accent">Projects</span></h1>
                <p>A collection of my work in AI, Data Science, and Software Development.</p>
            </div>

            <div className="all-projects-grid">
                {allProjects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
