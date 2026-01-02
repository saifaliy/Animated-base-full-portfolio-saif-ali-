
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { VOLUNTEER_WORK } from '../constants';
import { Users, Heart, Globe, Sparkles, Gift } from 'lucide-react';

const Volunteer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-10 h-10 text-blue-500" />;
      case 'Heart': return <Heart className="w-10 h-10 text-red-500" />;
      case 'Globe': return <Globe className="w-10 h-10 text-green-500" />;
      default: return <Sparkles className="w-10 h-10 text-yellow-500" />;
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Altruism & Impact" subtitle="Giving Back" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-7">
            <h3 className="text-4xl font-black mb-8 text-white">The Engineering of <span className="text-gradient">Kindness.</span></h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Technology is most powerful when it serves those in need. Beyond complex algorithms, I dedicate my time to community leadership, mentoring the next generation of engineers, and bridging the digital divide in Pakistan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-8 rounded-[40px] border border-white/5 bg-white/[0.01]">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                   <Users className="w-6 h-6 text-blue-500" />
                 </div>
                 <h4 className="text-xl font-black mb-3">Community Lead</h4>
                 <p className="text-sm text-gray-500">Managing events for 500+ students, fostering a culture of innovation and collaboration.</p>
               </div>
               <div className="glass p-8 rounded-[40px] border border-white/5 bg-white/[0.01]">
                 <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                   <Heart className="w-6 h-6 text-red-500" />
                 </div>
                 <h4 className="text-xl font-black mb-3">Direct Mentorship</h4>
                 <p className="text-sm text-gray-500">Providing free logical thinking and technical guidance to underprivileged youth.</p>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
             <div className="relative glass p-4 rounded-[60px] border border-white/10 overflow-hidden group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd26736f5ff8?q=80&w=800" 
                  alt="Community Impact" 
                  className="w-full h-auto rounded-[50px] grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
             </div>
             <div className="absolute -bottom-8 -left-8 glass p-10 rounded-[40px] border border-blue-500/20 shadow-2xl bg-[#030712]/90">
                <Gift className="w-12 h-12 text-blue-500 mb-4 animate-bounce" />
                <div className="text-2xl font-black text-white">Boxes of Kindness</div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-500">Social Initiative</div>
             </div>
          </div>
        </div>

        {/* The Kindness Matrix */}
        <h3 className="text-3xl font-black text-center mb-20 text-white">The Kindness Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {VOLUNTEER_WORK.map((work, i) => (
             <div key={i} className="group glass p-12 rounded-[50px] border border-white/5 hover:border-blue-500/30 transition-all text-center flex flex-col items-center shadow-lg hover:shadow-blue-500/10">
                <div className="mb-10 p-6 glass rounded-3xl border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(work.icon)}
                </div>
                <h4 className="text-2xl font-black mb-2 text-white">{work.title}</h4>
                <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-6">{work.org}</div>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {work.description}
                </p>
                <div className="mt-10 flex gap-1">
                   {[...Array(5)].map((_, j) => (
                     <div key={j} className="w-1.5 h-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-colors" style={{ transitionDelay: `${j * 100}ms` }}></div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
