
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { EDUCATION, RESEARCH_INTERESTS, CERTIFICATIONS } from '../constants';
import { GraduationCap, Book, Award, Target, Sparkles } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Academic & Research" subtitle="Intellectual Foundation" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           {/* Education */}
           <div className="space-y-12">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <GraduationCap className="text-blue-500" /> Formal Education
              </h3>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="glass p-10 rounded-[40px] border border-white/5 relative group">
                   <div className="absolute top-6 right-6 text-xs font-black bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">{edu.period}</div>
                   <h4 className="text-2xl font-black mb-2">{edu.degree}</h4>
                   <p className="text-lg text-blue-500 font-bold mb-6">{edu.institution}</p>
                   <p className="text-gray-400 mb-8 leading-relaxed">{edu.details}</p>
                   <div className="space-y-4">
                      {edu.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-3">
                           <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                           <span className="text-sm font-medium text-gray-300">{h}</span>
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>

           {/* Research Interests */}
           <div className="space-y-12">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <Target className="text-purple-500" /> Research Vector
              </h3>
              <div className="space-y-8">
                {RESEARCH_INTERESTS.map((ri, i) => (
                  <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all">
                     <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Book className="w-5 h-5 text-purple-500" /> {ri.title}
                     </h4>
                     <p className="text-sm text-gray-400 leading-relaxed mb-6">{ri.description}</p>
                     <div className="flex flex-wrap gap-2">
                        {ri.goals.map((g, j) => (
                          <span key={j} className="px-3 py-1 bg-purple-600/10 text-purple-400 text-[10px] font-black uppercase rounded-lg">{g}</span>
                        ))}
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Certifications */}
        <div className="mt-32">
           <h3 className="text-3xl font-black text-center mb-16">Global Certifications</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group">
                   <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <Award className="w-8 h-8 text-blue-500 group-hover:text-white" />
                   </div>
                   <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                   <p className="text-sm text-gray-500 font-bold mb-4">{cert.issuer}</p>
                   <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{cert.date}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
