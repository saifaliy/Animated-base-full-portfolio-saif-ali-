import React from 'react';
import { Github, Linkedin, Mail, Cpu, ArrowUpRight, Zap, Brain, Code, BookOpen, Target, BarChart, Cloud, Award, MessageSquare, Shield, Terminal, Home, User, Layers, Settings, GraduationCap, Trophy, Heart, FileText, Rocket, Eye, FlaskRound, Server, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  // All page data organized by category
  const pageSections = [
    {
      title: "Navigation Hub",
      icon: <Brain className="w-3 h-3" />,
      pages: [
        { name: "Home", path: "/", icon: <Home className="w-3 h-3" /> },
        { name: "The Architect", path: "/about", icon: <User className="w-3 h-3" /> },
        { name: "AI Gallery", path: "/projects", icon: <Layers className="w-3 h-3" /> },
        { name: "Expertise Matrix", path: "/skills", icon: <Settings className="w-3 h-3" /> },
        { name: "Engineering Log", path: "/experience", icon: <FileText className="w-3 h-3" /> },
      ]
    },
    {
      title: "Research Core",
      icon: <Code className="w-3 h-3" />,
      pages: [
        { name: "Research", path: "/research", icon: <FlaskRound className="w-3 h-3" /> },
        { name: "Vision X Sentinel", path: "/vision-x", icon: <Eye className="w-3 h-3" /> },
        { name: "Vitals Benchmark", path: "/performance", icon: <BarChart className="w-3 h-3" /> },
        { name: "Deployment Hub", path: "/deployment", icon: <Server className="w-3 h-3" /> },
        { name: "Design System", path: "/design-system", icon: <Palette className="w-3 h-3" /> },
      ]
    },
    {
      title: "Learning & Impact",
      icon: <BookOpen className="w-3 h-3" />,
      pages: [
        { name: "Education", path: "/education", icon: <GraduationCap className="w-3 h-3" /> },
        { name: "Achievements", path: "/achievements", icon: <Trophy className="w-3 h-3" /> },
        { name: "Volunteer", path: "/volunteer", icon: <Heart className="w-3 h-3" /> },
        { name: "Blog", path: "/blog", icon: <FileText className="w-3 h-3" /> },
        { name: "Startup", path: "/startup", icon: <Rocket className="w-3 h-3" /> },
      ]
    }
  ];

  const quickLinks = [
    { name: "Consultation", path: "/consultation", icon: <Target className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Performance", path: "/performance", icon: <BarChart className="w-4 h-4" /> },
    { name: "Deployment", path: "/deployment", icon: <Cloud className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4 md:w-5 md:h-5" />, href: "https://github.com/saifaliy", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, href: "https://www.linkedin.com/in/saifaliy", label: "LinkedIn" },
    { icon: <Mail className="w-4 h-4 md:w-5 md:h-5" />, href: "mailto:mrsaifie.512@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 md:py-20 lg:py-24 glass border-t border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mb-12 md:mb-16">
          
          {/* Brand Section - Full width on mobile, 2 cols on desktop */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter">SAIF ALI</span>
                <span className="text-[6px] md:text-[6px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-500 mt-1">Intelligence Architect</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm md:text-sm leading-relaxed font-medium max-w-md">
              Research-driven AI Engineer delivering scalable, high-fidelity data solutions for global enterprise stakeholders. Specializing in computer vision and deep learning ecosystems.
            </p>
            
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 md:p-3 glass rounded-lg md:rounded-xl hover:bg-blue-600 transition-all duration-300 group hover:scale-105"
                  aria-label={social.label}
                >
                  <div className="text-gray-500 group-hover:text-white group-hover:rotate-12 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Page Links - Responsive grid for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-8 md:gap-12">
            {pageSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4 md:space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400 flex items-center gap-1.5 md:gap-2">
                  {section.icon}
                  <span className="truncate">{section.title}</span>
                </h4>
                <ul className="space-y-2.5 md:space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        to={page.path} 
                        className="text-xs md:text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 md:gap-2 group"
                      >
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                          {page.icon}
                        </span>
                        <span className="truncate">{page.name}</span>
                        <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Quick Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Contact Section */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400 flex items-center gap-1.5 md:gap-2">
              <MessageSquare className="w-3 h-3" />
              Direct Port
            </h4>
            <div className="space-y-4 md:space-y-6">
              <a 
                href="mailto:mrsaifie.512@gmail.com" 
                className="text-base md:text-lg font-black text-white hover:text-blue-400 transition-colors inline-block"
              >
                mrsaifie.512@gmail.com
              </a>
              <div className="text-[9px] font-black uppercase tracking-[0.1em] text-gray-600">
                Sync Response: &lt; 24h • Priority Access
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <Link 
                  to="/consultation" 
                  className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg md:rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20"
                >
                  Establish Sync
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 glass text-gray-400 rounded-lg md:rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400 flex items-center gap-1.5 md:gap-2">
              <Zap className="w-3 h-3" />
              Quick Access
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="p-3 md:p-4 glass rounded-lg md:rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group text-center"
                >
                  <div className="text-gray-500 group-hover:text-blue-500 mx-auto mb-1.5 md:mb-2 transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-xs font-black text-gray-500 group-hover:text-white block truncate">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom - Responsive layout */}
        <div className="pt-8 md:pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Copyright */}
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-600 text-center md:text-left order-2 md:order-1">
              © 2025 SAIF ALI. ALL NEURAL LINKS SECURED.
            </p>
            
            {/* Status Indicators */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-700 order-1 md:order-2 mb-4 md:mb-0">
              <span className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div> 
                <span className="hidden sm:inline">Status:</span>
                <span className="sm:hidden">Online</span>
              </span>
              <span className="flex items-center gap-1.5 md:gap-2">
                <Zap className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" />
                <span className="hidden sm:inline">Latency:</span>
                <span>12ms</span>
              </span>
              <span className="flex items-center gap-1.5 md:gap-2">
                <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" />
                <span className="hidden sm:inline">Protocol:</span>
                <span>AES-256</span>
              </span>
              <span className="hidden md:flex items-center gap-2">
                <Terminal className="w-3 h-3 flex-shrink-0" />
                <span>Uptime: 99.9%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
