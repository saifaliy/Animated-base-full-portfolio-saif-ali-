
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ACHIEVEMENTS } from '../constants';
import { Award, Trophy, Users, Star, GraduationCap, Medal } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Distinctions & Impact" subtitle="Honor Roll" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
           {ACHIEVEMENTS.map((item, i) => (
             <div key={i} className="glass p-12 rounded-[50px] border border-white/5 flex items-center gap-8 group hover:bg-blue-600/5 transition-all">
                <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                   {i === 0 ? <Trophy className="w-10 h-10 text-blue-500 group-hover:text-white" /> : 
                    i === 1 ? <Medal className="w-10 h-10 text-blue-500 group-hover:text-white" /> : 
                    i === 2 ? <GraduationCap className="w-10 h-10 text-blue-500 group-hover:text-white" /> : 
                    <Star className="w-10 h-10 text-blue-500 group-hover:text-white" />}
                </div>
                <div>
                   <h4 className="text-2xl font-black text-white mb-2">{item}</h4>
                   <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Verified Distinction</p>
                </div>
             </div>
           ))}
        </div>

        {/* Volunteer Segment */}
        <div className="mt-32">
           <h3 className="text-4xl font-black text-center mb-16">Volunteering & Leadership</h3>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                { title: 'Tech Community Lead', d: 'Organized university-wide hackathons and coding bootcamps for 500+ students.', icon: Users },
                { title: 'STEM Mentorship', d: 'Mentoring underrepresented youth in basic programming and ML logic.', icon: Award },
                { title: 'Open Source Contributor', d: 'Actively contributing to AI libraries and community research documentation.', icon: Star },
              ].map((v, i) => (
                <div key={i} className="glass p-10 rounded-[40px] border border-white/5 text-center flex flex-col items-center">
                   <div className="w-16 h-16 glass border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                      <v.icon className="w-8 h-8 text-blue-400" />
                   </div>
                   <h4 className="text-2xl font-black mb-4 text-white">{v.title}</h4>
                   <p className="text-gray-400 leading-relaxed">{v.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
