
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, CheckCircle2, FlaskConical, Laptop, Zap, Shield, Globe, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Professional Trajectory" subtitle="Engineering Log" />

        <div className="grid grid-cols-1 gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="glass p-12 rounded-[50px] border border-white/5 group-hover:border-blue-500/30 transition-all relative overflow-hidden shadow-2xl bg-black/40">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-1000">
                  {exp.type === 'Research' ? <Globe className="w-48 h-48" /> : <Laptop className="w-48 h-48" />}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                  <div className="lg:col-span-4">
                    <div className={`inline-block px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${
                      exp.type === 'Research' ? 'bg-purple-600/20 text-purple-400' : 'bg-blue-600/20 text-blue-400'
                    }`}>
                      {exp.type} Segment
                    </div>
                    <h3 className="text-4xl font-black mb-3 tracking-tight text-white">{exp.role}</h3>
                    <div className="text-2xl font-bold text-blue-500 mb-8 flex items-center gap-3">
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 font-black bg-white/5 w-fit px-6 py-3 rounded-2xl border border-white/5">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <div className="space-y-6">
                      {exp.description.map((point, i) => (
                        <div key={i} className="flex gap-5">
                          <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                          <p className="text-xl text-gray-400 leading-relaxed font-medium">{point}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-16 pt-10 border-t border-white/10">
                       <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-6">Expertise Deployed</div>
                       <div className="flex flex-wrap gap-3">
                        {exp.skills.map((s, i) => (
                          <span key={i} className="px-6 py-3 bg-white/5 rounded-2xl text-xs font-black text-blue-300 border border-white/5 hover:bg-blue-600 hover:text-white transition-all cursor-default">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Message */}
        <div className="mt-32 glass p-16 rounded-[60px] border border-blue-500/10 text-center relative overflow-hidden bg-gradient-to-br from-black to-blue-900/10">
           <Zap className="w-20 h-20 text-blue-500 mx-auto mb-10 animate-pulse" />
           <h3 className="text-5xl font-black mb-8 text-white">The Engineering Ethos</h3>
           <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
             My journey from local internships at <span className="text-white">Masq Tech</span> and <span className="text-white">DEN</span> to international research at <span className="text-white">Livingston UK</span> defines a transition from developer to **Intelligence Architect**.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
