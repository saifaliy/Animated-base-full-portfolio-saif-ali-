
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { RESEARCH_INTERESTS } from '../constants';
import { FlaskConical, Target, Book, Sparkles, Brain, Cpu, Database } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Research Domains" subtitle="Academic Inquiry" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
           <div className="lg:col-span-4">
              <div className="glass p-10 rounded-[50px] border border-white/5 sticky top-32">
                 <FlaskConical className="w-16 h-16 text-blue-500 mb-8" />
                 <h3 className="text-3xl font-black mb-6">Visionary Engineering</h3>
                 <p className="text-lg text-gray-400 leading-relaxed mb-8">
                   My research is driven by the need to solve real-world problems through the lens of computational intelligence. I focus on making complex AI systems lightweight, secure, and highly accurate.
                 </p>
                 <div className="space-y-4">
                    {['Computer Vision', 'NLP', 'Edge-AI', 'Agentic Systems'].map((v, i) => (
                      <div key={i} className="flex items-center gap-3 text-white font-bold">
                         <Target className="w-5 h-5 text-blue-500" />
                         {v}
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-8 space-y-12">
              {RESEARCH_INTERESTS.map((ri, i) => (
                <div key={i} className="glass p-12 rounded-[50px] border border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-all">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <h4 className="text-3xl font-black text-white flex items-center gap-4">
                         {i === 0 ? <Cpu className="text-blue-500" /> : i === 1 ? <Brain className="text-purple-500" /> : <Database className="text-green-500" />}
                         {ri.title}
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Active Inquiry</span>
                   </div>
                   <p className="text-xl text-gray-400 leading-relaxed mb-10">
                      {ri.description}
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ri.goals.map((goal, j) => (
                        <div key={j} className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/5 text-sm font-bold text-gray-300">
                           <Sparkles className="w-4 h-4 text-yellow-500" />
                           {goal}
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Future Roadmap */}
        <div className="mt-32 text-center">
           <h3 className="text-4xl font-black mb-16">Future Research Horizon</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Ph.D. Aspirations', d: 'Pursuing deep research in Autonomous Systems and Visual Perception.' },
                { title: 'Global Tech Hubs', d: 'Connecting Pakistani engineering talent with Silicon Valley research standards.' },
                { title: 'AI Ethics', d: 'Building transparent and bias-free models for critical infrastructure.' },
              ].map((h, i) => (
                <div key={i} className="glass p-10 rounded-[40px] border border-white/5">
                   <h4 className="text-2xl font-black mb-4 text-blue-400">{h.title}</h4>
                   <p className="text-gray-400 leading-relaxed">{h.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
