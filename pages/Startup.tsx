
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Globe, Shield, Rocket, Users, ChevronRight, Zap } from 'lucide-react';

const Startup: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-black uppercase tracking-widest">Global Operations</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-black mb-12">Masq <span className="text-gradient">Tech</span></h1>
           <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
             A premier digital collective delivering cutting-edge AI, mobile, and web experiences to the global market.
           </p>
        </div>

        {/* Branding Visuals */}
        <div className="relative mb-32 h-[400px] md:h-[600px] glass rounded-[40px] border border-white/10 overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/startup-grid/1920/1080')] opacity-20 grayscale bg-cover bg-center"></div>
           <div className="relative z-10 text-center scale-150 opacity-10 font-black text-9xl tracking-tighter select-none">MASQ</div>
           <div className="absolute z-20 flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                 <Rocket className="w-12 h-12 text-white -rotate-12" />
              </div>
              <h2 className="text-4xl font-black">Digital Dominance.</h2>
           </div>
        </div>

        {/* Services & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
           <div>
              <SectionHeader title="Our Vision" subtitle="The North Star" alignment="left" />
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                At Masq Tech, we believe that high-end technology should be accessible yet premium. We bridge the gap between complex engineering and elegant user experiences. Our mission is to scale Pakistani talent to a global audience, delivering Silicon Valley quality from Lahore.
              </p>
              <div className="space-y-4">
                 {[
                   'Client-focused Strategy',
                   'AI-First Approach',
                   'Scalable Cloud Architecture',
                   'Pixel-Perfect Design'
                 ].map((v, i) => (
                   <div key={i} className="flex items-center gap-3 font-bold text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {v}
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Global Mindset', icon: Globe, desc: 'Serving clients in 5+ countries.' },
                { title: 'Enterprise Security', icon: Shield, desc: 'Bank-grade data protection.' },
                { title: 'High Octane Team', icon: Users, desc: 'Collective of specialized pros.' },
                { title: 'Rapid Delivery', icon: Zap, desc: 'Agile sprints, daily updates.' },
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                   <item.icon className="w-8 h-8 text-blue-500 mb-6" />
                   <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Future Goals */}
        <div className="glass p-16 rounded-[40px] border border-blue-500/10 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
           <h2 className="text-4xl font-black mb-8">Road to 2030</h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
             Transitioning from a service agency to a product powerhouse. Developing proprietary AI frameworks and establishing offices in Dubai and San Francisco.
           </p>
           <button className="px-12 py-5 bg-white text-black rounded-full font-black hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2 mx-auto">
             Visit masqtech.com <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Startup;
