import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { ExternalLink, Github, ArrowRight, Binary, Code2, Cpu, Shield, Brain, FileText, ShoppingBag, Film, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    id: 'vision-x',
    title: 'Vision X Sentinel',
    category: 'AI & Research',
    description: 'Complete protection surveillance system integrating AI-powered vehicle tracking, fence monitoring, and ID card–based access control.',
    solution: 'Built with Flutter, PyQt/React Native, and Firebase for real-time alerts, automation, and secure monitoring. Features intelligent object detection, facial recognition, and automated threat analysis.',
    tech: ['Python', 'Flutter', 'PyQt', 'React Native', 'Firebase', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    image: '/api/placeholder/800/500',
    github: 'https://github.com/saifaliy/Vision-X-Sentinel-Advanced-Surveillance-Monitoring',
    live: '#'
  },
  {
    id: 'ai-study',
    title: 'AI Study Assistant',
    category: 'AI & Research',
    description: 'Smart learning companion that extracts PDFs, summarizes content, generates quizzes, and recognizes handwritten notes.',
    solution: 'Uses LangChain for content analysis, TensorFlow for quiz generation, PyTorch for handwriting recognition, and NumPy for data preprocessing. Provides personalized learning experience.',
    tech: ['Python', 'LangChain', 'TensorFlow', 'PyTorch', 'NumPy', 'NLP', 'Streamlit', 'PDF Processing'],
    image: '/api/placeholder/800/500',
    github: 'https://github.com/saifaliy/Python-AI-Based-Complete-Study-Assistant-',
    live: '#'
  },
  {
    id: 'resume-optimizer',
    title: 'AI Resume Optimizer',
    category: 'AI & Research',
    description: 'AI-powered resume enhancement tool that optimizes resumes for specific job descriptions using NLP.',
    solution: 'Extracts and preprocesses resume text, generates embeddings, and provides ATS-friendly suggestions. Helps job seekers match their resumes to job requirements automatically.',
    tech: ['Python', 'NLP', 'Streamlit', 'Text Analysis', 'Embeddings', 'ATS Systems', 'Machine Learning'],
    image: '/api/placeholder/800/500',
    github: 'https://github.com/saifaliy/AI-Resume-Optimizer',
    live: '#'
  },
  {
    id: 'product-recommendation',
    title: 'Product Recommendation System',
    category: 'AI & Research',
    description: 'Intelligent recommendation engine for e-commerce suggesting products based on purchase history and patterns.',
    solution: 'Combines popularity-based recommendations with user-based collaborative filtering. Built with Python and Scikit-learn, featuring an interactive Streamlit UI for real-time suggestions.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Collaborative Filtering', 'E-commerce', 'Machine Learning'],
    image: '/api/placeholder/800/500',
    github: 'https://github.com/saifaliy/Product-Recommendation-System',
    live: '#'
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    category: 'AI & Research',
    description: 'Content-based movie recommendation web app suggesting similar movies based on user preferences.',
    solution: 'Uses precomputed similarity matrix with Scikit-learn to provide accurate movie suggestions. Features an intuitive Streamlit interface for seamless user experience.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Content-Based Filtering', 'Pandas', 'Numpy', 'Similarity Matrix'],
    image: '/api/placeholder/800/500',
    github: 'https://github.com/saifaliy/Movie-Recommendation-System',
    live: '#'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI & Research' | 'Web Engineering' | 'Mobile Systems'>('All');
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: ('All' | 'AI & Research' | 'Web Engineering' | 'Mobile Systems')[] = ['All', 'AI & Research', 'Web Engineering', 'Mobile Systems'];

  const getProjectIcon = (id: string) => {
    switch(id) {
      case 'vision-x': return <Shield className="w-5 h-5 md:w-6 md:h-6" />;
      case 'ai-study': return <Brain className="w-5 h-5 md:w-6 md:h-6" />;
      case 'resume-optimizer': return <FileText className="w-5 h-5 md:w-6 md:h-6" />;
      case 'product-recommendation': return <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />;
      case 'movie-recommendation': return <Film className="w-5 h-5 md:w-6 md:h-6" />;
      default: return <Code2 className="w-5 h-5 md:w-6 md:h-6" />;
    }
  };

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="The Intelligence Suite" 
          subtitle="Project Repository" 
        />

        {/* Intelligent Filters - Responsive */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-24 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-full font-black text-xs md:text-sm transition-all border ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl md:shadow-2xl shadow-blue-500/30 md:shadow-blue-500/40 scale-105' 
                  : 'glass border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Manifest - Responsive */}
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center group">
              {/* Project Image - Responsive */}
              <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative glass p-3 md:p-4 rounded-3xl md:rounded-[50px] lg:rounded-[60px] border border-white/5 overflow-hidden shadow-lg md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                  <div className="aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[40px] lg:rounded-[45px] relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        {getProjectIcon(project.id)}
                        <div className="mt-4 text-white font-black text-lg md:text-xl lg:text-2xl">
                          {project.title}
                        </div>
                        <div className="mt-2 text-blue-400 text-sm md:text-base">
                          Click GitHub for details
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
                  </div>
                  {/* Overlay Stats - Responsive */}
                  <div className="absolute top-4 md:top-6 lg:top-10 right-4 md:right-6 lg:right-10 flex gap-2 md:gap-4">
                    <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-white/20 text-[8px] md:text-[10px] font-black uppercase text-white backdrop-blur-3xl">
                      Stable v1.0
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details - Responsive */}
              <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-blue-600/10 text-blue-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] mb-6 md:mb-8 border border-blue-500/20">
                  <Binary className="w-3 h-3 md:w-3 md:h-3" /> {project.category}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 lg:mb-8 text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-medium">
                  {project.description}
                </p>
                
                {/* AI Approach Section - Responsive */}
                <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-10 lg:mb-12">
                  <div className="glass p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-xs md:text-xs font-black text-blue-400 uppercase tracking-widest mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                      <Cpu className="w-3.5 h-3.5 md:w-4 md:h-4" /> The AI Approach
                    </h4>
                    <p className="text-sm md:text-sm text-gray-500 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack - Responsive */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 lg:mb-12">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 glass rounded-xl md:rounded-2xl text-[10px] md:text-[10px] font-black text-blue-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Responsive */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 bg-white text-black rounded-full font-black flex items-center gap-2 md:gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-lg md:shadow-xl group/btn text-sm md:text-base"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                  
                  {project.id === 'vision-x' ? (
                    <Link 
                      to="/vision-x" 
                      className="px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 glass text-white rounded-full font-black flex items-center gap-2 md:gap-3 hover:bg-white/10 transition-all shadow-lg group/btn text-sm md:text-base"
                    >
                      Systems Overview
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 md:p-4 glass rounded-2xl md:rounded-3xl hover:text-blue-500 transition-all border border-white/10 hover:bg-white/5"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 md:py-32">
            <Search className="w-16 h-16 md:w-20 md:h-20 text-gray-600 mx-auto mb-6 md:mb-8" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              No Projects Found
            </h3>
            <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto">
              Try selecting a different category to view more projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
