
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowRight, Binary, Code2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI & Research' | 'Web Engineering' | 'Mobile Systems'>('All');
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: ('All' | 'AI & Research' | 'Web Engineering' | 'Mobile Systems')[] = ['All', 'AI & Research', 'Web Engineering', 'Mobile Systems'];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="The Intelligence Suite" subtitle="Project Repository" />

        {/* Intelligent Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 rounded-full font-black text-sm transition-all border ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-500/40 scale-105' 
                  : 'glass border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Manifest */}
        <div className="space-y-40">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center group">
               <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative glass p-4 rounded-[60px] border border-white/5 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                     <div className="aspect-[16/10] overflow-hidden rounded-[45px] relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-overlay"></div>
                     </div>
                     {/* Overlay Stats */}
                     <div className="absolute top-10 right-10 flex gap-4">
                        <div className="glass px-4 py-2 rounded-xl border border-white/20 text-[10px] font-black uppercase text-white backdrop-blur-3xl">
                           Stable v1.0
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 text-blue-500 text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-blue-500/20">
                    <Binary className="w-3 h-3" /> {project.category}
                  </div>
                  <h3 className="text-5xl font-black mb-8 text-white leading-none">{project.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-10 font-medium">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-8 mb-12">
                    <div className="glass p-6 rounded-3xl border border-white/5 bg-white/[0.02]">
                      <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-3">
                        <Cpu className="w-4 h-4" /> The AI Approach
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-5 py-2.5 glass rounded-2xl text-[10px] font-black text-blue-300 border border-white/5">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8">
                    {project.id === 'vision-x' ? (
                       <Link to="/vision-x" className="px-12 py-5 bg-white text-black rounded-full font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl group/btn">
                         Systems Overview <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    ) : (
                       <button className="px-12 py-5 bg-white text-black rounded-full font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl group/btn">
                         Live Execution <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                       </button>
                    )}
                    <a href={project.github || "#"} className="p-4 glass rounded-3xl hover:text-blue-500 transition-all border border-white/10">
                      <Github className="w-8 h-8" />
                    </a>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
