import React from 'react';
import { Github, Linkedin, Mail, Cpu, Globe, ArrowUpRight, Zap, Brain, Code, BookOpen, Rocket, Users, Cloud, Terminal, BarChart, MessageSquare, Shield, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-24 glass border-t border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Bio & Brand */}
          <div className="space-y-8 lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter">SAIF ALI</span>
                <span className="text-[6px] font-black uppercase tracking-[0.4em] text-blue-500 mt-1">Intelligence Architect</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Research-driven AI Engineer delivering scalable, high-fidelity data solutions for global enterprise stakeholders. Specializing in computer vision and deep learning ecosystems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/saifaliy" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-105">
                <Github className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:rotate-12 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/saifaliy" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-105">
                <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:rotate-12 transition-transform" />
              </a>
              <a href="mailto:mrsaifie.512@gmail.com" className="p-3 glass rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-105">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <Brain className="w-3 h-3" />
              Navigation Hub
            </h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/about" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">The Architect <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/projects" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">AI Gallery <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/skills" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Expertise Matrix <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/experience" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Engineering Log <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Research & Development */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <Code className="w-3 h-3" />
              Research Core
            </h4>
            <ul className="space-y-4">
              <li><Link to="/research" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Research <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/vision-x" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Vision X Sentinel <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/performance" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Vitals Benchmark <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/deployment" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Deployment Hub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/design-system" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Design System <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Additional Sections */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <BookOpen className="w-3 h-3" />
              Learning & Impact
            </h4>
            <ul className="space-y-4">
              <li><Link to="/education" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Education <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/achievements" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Achievements <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/volunteer" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Volunteer <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/blog" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Blog <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/startup" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group">Startup <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>
        </div>

        {/* Contact & Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Port */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <MessageSquare className="w-3 h-3" />
              Direct Port
            </h4>
            <div className="space-y-6">
              <div className="text-lg md:text-xl font-black text-white hover:text-blue-400 transition-colors cursor-pointer">
                mrsaifie.512@gmail.com
              </div>
              <div className="text-[9px] font-black uppercase tracking-[0.1em] text-gray-600">
                Sync Response: &lt; 24h • Priority Access
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/consultation" className="inline-block px-6 md:px-8 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20">
                  Establish Sync
                </Link>
                <Link to="/contact" className="inline-block px-6 md:px-8 py-3 glass text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Quick Access
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/consultation" className="p-4 glass rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group text-center">
                <Target className="w-5 h-5 text-gray-500 group-hover:text-blue-500 mx-auto mb-2" />
                <span className="text-xs font-black text-gray-500 group-hover:text-white">Consultation</span>
              </Link>
              <Link to="/performance" className="p-4 glass rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group text-center">
                <BarChart className="w-5 h-5 text-gray-500 group-hover:text-blue-500 mx-auto mb-2" />
                <span className="text-xs font-black text-gray-500 group-hover:text-white">Performance</span>
              </Link>
              <Link to="/deployment" className="p-4 glass rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group text-center">
                <Cloud className="w-5 h-5 text-gray-500 group-hover:text-blue-500 mx-auto mb-2" />
                <span className="text-xs font-black text-gray-500 group-hover:text-white">Deployment</span>
              </Link>
              <Link to="/achievements" className="p-4 glass rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group text-center">
                <Award className="w-5 h-5 text-gray-500 group-hover:text-blue-500 mx-auto mb-2" />
                <span className="text-xs font-black text-gray-500 group-hover:text-white">Achievements</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 text-center md:text-left">
            © 2025 SAIF ALI. ALL NEURAL LINKS SECURED.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> 
              <span className="hidden md:inline">Status:</span> Available
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-3 h-3" />
              <span className="hidden md:inline">Latency:</span> 12ms
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-3 h-3" />
              <span className="hidden md:inline">Protocol:</span> AES-256
            </span>
            <span className="flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              <span className="hidden md:inline">Uptime:</span> 99.9%
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
