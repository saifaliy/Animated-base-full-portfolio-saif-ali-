
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Target, Brain, Quote, Layers, Cpu, Code2, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Saif Ali's Dossier" subtitle="Biographical Data" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4 text-white">
                <Target className="text-blue-500" /> Professional Identity
              </h3>
              <p className="text-2xl text-gray-400 leading-relaxed mb-8 font-medium">
                I am <span className="text-white">Saif Ali</span>, a research-oriented Software & AI Engineer. Currently pursuing my BS in Computer Science at the <span className="text-blue-400">University of Wah</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                With a background in research engineering and full-stack development, I focus on building scalable, real-time applications. My journey is defined by a passion for <span className="text-white font-bold underline decoration-blue-600 decoration-4">Computer Vision</span> and <span className="text-white font-bold underline decoration-purple-600 decoration-4">Deep Learning</span>. From Livingston Research to high-end mobile engineering, I deliver technical excellence at every layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass p-10 rounded-[40px] border border-white/5 hover:border-blue-500/30 transition-all group shadow-xl">
                <Brain className="w-12 h-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black mb-4 text-white">Neural Logic</h4>
                <p className="text-gray-400 leading-relaxed">
                  Integrating advanced ML models into real-world SaaS ecosystems. I prioritize accuracy and inference speed.
                </p>
              </div>
              <div className="glass p-10 rounded-[40px] border border-white/5 hover:border-purple-500/30 transition-all group shadow-xl">
                <Layers className="w-12 h-12 text-purple-500 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black mb-4 text-white">System Design</h4>
                <p className="text-gray-400 leading-relaxed">
                  Architecting robust backends and reactive frontends. I treat software as a living, evolving intelligence.
                </p>
              </div>
            </div>

            <div className="p-12 glass rounded-[40px] border-l-[12px] border-blue-600 italic relative bg-white/[0.01]">
               <Quote className="absolute -top-8 -left-8 w-20 h-20 text-blue-600/10" />
               <p className="text-2xl font-medium text-gray-300 leading-relaxed">
                 "Innovation is not just about complexity; it's about solving the right problems with the most efficient intelligence possible."
               </p>
            </div>
          </div>

          <div className="lg:col-span-5">
             <div className="sticky top-32 space-y-10">
                {/* Stats Card */}
                <div className="glass p-12 rounded-[50px] border border-white/10 text-center relative overflow-hidden group shadow-2xl">
                   <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                   <div className="text-8xl font-black text-gradient mb-4 tracking-tighter">3.10</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">BS Computer Science (GPA)</div>
                   <div className="flex justify-center gap-6">
                      <div className="flex flex-col items-center">
                         <div className="text-white font-black text-xl">2025</div>
                         <div className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Graduation</div>
                      </div>
                      <div className="w-[1px] h-10 bg-white/10"></div>
                      <div className="flex flex-col items-center">
                         <div className="text-white font-black text-xl">Pakistan</div>
                         <div className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Location</div>
                      </div>
                   </div>
                </div>

                {/* Info Cards */}
                <div className="glass p-10 rounded-[40px] border border-white/10 space-y-8">
                   <div className="flex items-center gap-4 text-white font-bold">
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/10">
                         <GraduationCap className="text-blue-400 w-5 h-5" />
                      </div>
                      <span className="text-lg">University of Wah</span>
                   </div>
                   <div className="flex items-center gap-4 text-white font-bold">
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/10">
                         <MapPin className="text-red-400 w-5 h-5" />
                      </div>
                      <span className="text-lg">Rawalpindi, Pakistan</span>
                   </div>
                   <div className="flex items-center gap-4 text-white font-bold">
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/10">
                         <Code2 className="text-green-400 w-5 h-5" />
                      </div>
                      <span className="text-lg">AI SaaS Expert</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mt-40 glass p-20 rounded-[80px] border border-white/5 relative overflow-hidden bg-gradient-to-br from-black to-blue-900/10">
           <div className="absolute top-0 right-0 p-16 opacity-5 select-none text-white">
              <Cpu className="w-[500px] h-[500px]" />
           </div>
           <h3 className="text-5xl font-black mb-16 text-white tracking-tight">The Professional Roadmap</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              <div className="space-y-6">
                 <div className="text-8xl font-black text-white/5 select-none">01</div>
                 <h4 className="text-2xl font-black text-blue-500">The Discovery Phase</h4>
                 <p className="text-gray-400 text-lg leading-relaxed font-medium">Entering University of Wah and discovering the intersection of Python and algorithmic intelligence.</p>
              </div>
              <div className="space-y-6">
                 <div className="text-8xl font-black text-white/5 select-none">02</div>
                 <h4 className="text-2xl font-black text-purple-500">The Research Pivot</h4>
                 <p className="text-gray-400 text-lg leading-relaxed font-medium">Leading research for Vision X and joining Livingston Research (UK) to deliver technical analytics globally.</p>
              </div>
              <div className="space-y-6">
                 <div className="text-8xl font-black text-white/5 select-none">03</div>
                 <h4 className="text-2xl font-black text-green-500">The SaaS Architect</h4>
                 <p className="text-gray-400 text-lg leading-relaxed font-medium">Building Saifie.ai and looking forward to scaling intelligent, automated systems across international markets.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
