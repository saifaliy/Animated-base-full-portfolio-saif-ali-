
import React from 'react';
import { Github, Linkedin, Mail, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 glass border-t border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">
          
          {/* Bio & Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter">SAI ALI</span>
                <span className="text-[6px] font-black uppercase tracking-[0.4em] text-blue-500 mt-1">Intelligence Architect</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Research-driven AI Engineer delivering scalable, high-fidelity data solutions for global enterprise stakeholders. Specializing in computer vision and deep learning ecosystems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/saifaliy" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all group">
                <Github className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/saifaliy" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all group">
                <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </a>
              <a href="mrsaifie.512@gmail.com" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all group">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Navigation Hub</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">The Architect <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/projects" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">AI Gallery <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/skills" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Expertise Matrix <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/experience" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Engineering Log <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Engineering Protocols */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Research Core</h4>
            <ul className="space-y-4">
              <li><Link to="/vision-x" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors">Vision X Sentinel</Link></li>
              <li><Link to="/performance" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors">Vitals Benchmark</Link></li>
              <li><Link to="/consultation" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors">Strategic Booking</Link></li>
            </ul>
          </div>

          {/* Contact Port */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Direct Port</h4>
            <div className="space-y-4">
               <div className="text-lg font-black text-white">mrsaifie.512@gmail.com</div>
               <div className="text-[9px] font-black uppercase tracking-[0.1em] text-gray-600">Sync Response: &lt; 24h</div>
               <div className="pt-4">
                  <Link to="/consultation" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10">Establish Sync</Link>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">© 2025 SAIF ALI. ALL NEURAL LINKS SECURED.</p>
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Status: Always Available </span>
             <span>Latency: 12ms</span>
             <span>Protocol: AES-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
