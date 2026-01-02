
import { Project, Skill, Experience, Education, ResearchInterest, Certification, BlogPost, VolunteerWork, FAQItem, WorkflowStep } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1000&auto=format&fit=crop"; 

export const CV_LINK = "https://drive.google.com/file/d/1T_hEcBufizC8pi9k4Q8blC4d-sioPfWF/view?usp=sharing";

export const EDUCATION: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "University of Wah",
    period: "2021 – 2025",
    details: "Final year student specializing in Artificial Intelligence and Neural Architectures.",
    highlights: ["CGPA: 3.10 / 4.00 (Consistency + Growth)", "Core: Deep Learning & Machine Learning Theory"]
  },
  {
    degree: "Intermediate Pre-Engineering",
    institution: "Kallar Kahar Science College",
    period: "2019 – 2021",
    details: "Strong foundation in Mathematics and Physics.",
    highlights: ["Grade: A+", "Pre-Engineering Merit List"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'vision-x',
    title: 'Vision-X Sentinel',
    category: 'AI & Research',
    description: 'Autonomous threat detection using YOLOv8 for sub-second weapon detection in high-security environments.',
    problem: 'Traditional surveillance requires manual monitoring, leading to delayed response.',
    solution: 'Built a real-time neural inference pipeline achieving 60 FPS on edge devices using YOLOv8.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'PyQt', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    impact: 'Reduced threat detection latency by 85%.'
  },
  {
    id: 'ai-resume-optimizer',
    title: 'AI Resume Optimizer',
    category: 'AI & Research',
    description: 'An intelligent NLP-based system that analyzes and scores resumes against job descriptions with 90% ATS accuracy.',
    problem: 'Job seekers struggle to align with ATS requirements.',
    solution: 'Used LangChain and OpenAI to provide real-time suggestions and keyword gap analysis.',
    tech: ['Python', 'NLP', 'LangChain', 'React'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', level: 98, category: 'AI & Machine Learning', description: 'Ensemble Methods, Regression, Clustering' },
  { name: 'Deep Learning', level: 95, category: 'AI & Machine Learning', description: 'CNNs, RNNs, LSTMs, Transformers' },
  { name: 'Computer Vision', level: 94, category: 'AI & Machine Learning', description: 'Object Detection (YOLO), Segmentation' },
  { name: 'NLP & LLMs', level: 92, category: 'AI & Machine Learning', description: 'LangChain, BERT, GPT Fine-tuning' },
  { name: 'Python Engineering', level: 97, category: 'Core Engineering', description: 'Advanced Backend & Data Science' },
  { name: 'Full-Stack Integration', level: 88, category: 'Core Engineering', description: 'React, Node.js, FastAPI, Flutter' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'livingston',
    role: 'Software Engineer (Research Division)',
    company: 'Livingston Research (UK - Remote)',
    period: '2024 - Present',
    description: [
      'Leading global AI/ML research reporting and data analysis.',
      'Developing data analysis pipelines using Python, Pandas, and NumPy.',
      'Architecting high-performance ML documentation for enterprise clients.'
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Research Methodology'],
    type: 'Research'
  }
];

export const ACHIEVEMENTS: string[] = [
  "2nd Place - Rising Pakistan Technology Competition",
  "1st Place - Asian Technical Institute Challenge",
  "Qualified - HITECH National Olympiad",
  "Winner - TechON UOW Pitch Competition"
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Autonomous Visual Perception",
    description: "Developing robust object detection models for high-stakes environments.",
    goals: ["Sub-40ms Inference", "Zero-Bias Training"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", date: "2024" },
  { name: "Google Cloud Data Engineer", issuer: "Google", date: "2023" },
  { name: "Natural Language Processing", issuer: "Stanford Online", date: "2023" }
];

export const MENU_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export const FAQS: FAQItem[] = [
  { 
    question: "What type of AI & Data Science projects do you work on?", 
    answer: "I specialize in end-to-end AI pipelines, including Computer Vision for security, NLP for data extraction, and deep learning models for complex predictive analytics." 
  },
  { 
    question: "Are you available for international clients?", 
    answer: "I am available to work with international clients worldwide for AI & Data Science projects, operating with a global and remote-first professional mindset." 
  },
  { 
    question: "How do you ensure data security?", 
    answer: "I implement strict data handling protocols, utilizing encrypted cloud environments and ensuring all AI models adhere to privacy-by-design principles." 
  },
  { 
    question: "Can you handle end-to-end AI projects?", 
    answer: "Yes, from initial data collection and cleaning to model deployment and building the final web/mobile interface." 
  }
];

export const WORKFLOW: WorkflowStep[] = [
  { title: "Problem Understanding", description: "In-depth mission requirements & feasibility study.", icon: "Target" },
  { title: "Data Collection & Cleaning", description: "Multi-source aggregation & preprocessing.", icon: "Database" },
  { title: "Exploratory Data Analysis (EDA)", description: "Pattern recognition & statistical insights.", icon: "BarChart3" },
  { title: "Feature Engineering", description: "Crafting neural-ready input vectors.", icon: "Binary" },
  { title: "Model Training", description: "Architecture selection & neural training.", icon: "Cpu" },
  { title: "Evaluation & Optimization", description: "Rigorous benchmarking & tuning.", icon: "Zap" },
  { title: "AI Integration", description: "Merging intelligence into live systems.", icon: "Layers" },
  { title: "Full-Stack Deployment", description: "Scalable cloud-ready serving platforms.", icon: "Globe" },
  { title: "Monitoring & Improvement", description: "Continuous drift detection & retraining.", icon: "Activity" }
];

export const COUNTRIES = [
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" }
];

export const VOLUNTEER_WORK: VolunteerWork[] = [
  {
    title: "Community Outreach Lead",
    org: "University of Wah",
    description: "Orchestrating technical workshops and awareness campaigns for undergraduate students.",
    icon: "Users"
  },
  {
    title: "STEM Mentor",
    org: "Tech For All",
    description: "Volunteering to teach core programming concepts to high school students in rural areas.",
    icon: "Globe"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-future',
    title: 'The Future of Computer Vision in 2025',
    excerpt: 'Exploring how YOLOv8 and real-time inference are changing the landscape of security and autonomous systems.',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    category: 'AI Research'
  },
  {
    id: 'scaling-intelligence',
    title: 'Scaling Intelligence: From Local to Global',
    excerpt: 'A deep dive into architecting scalable AI solutions for international enterprise stakeholders.',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    category: 'Engineering'
  }
];
