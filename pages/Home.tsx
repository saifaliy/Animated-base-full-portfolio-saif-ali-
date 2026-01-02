import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Zap, Binary, Globe, 
  Target, Rocket, Shield, Activity, Database, MessageSquare, 
  Award, CheckCircle2, BarChart3, ChevronDown, HelpCircle, 
  Download, Mail, Calendar, Layers
} from 'lucide-react';
import { PROJECTS, FAQS, WORKFLOW, CV_LINK } from '../constants';
import SectionHeader from '../components/SectionHeader';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marqueeSkills = [
    "Artificial Intelligence", "Data Science", "Machine Learning", 
    "Deep Learning", "Computer Vision", "NLP", "AI Automation", 
    "Full-Stack Development", "Flutter", "React", "Node.js", "Cloud & DevOps"
  ];

  const expertiseDomains = [
    "Artificial Intelligence", "Data Science", "Machine Learning", 
    "Deep Learning", "Computer Vision", "Natural Language Processing", 
    "Full-Stack Development", "AI Automation & Intelligent Pipelines", "Cloud-Based AI Deployment"
  ];

  return (
    <div className="pt-20 md:pt-24 overflow-x-hidden bg-[#030712] min-h-screen bg-grid">
      
      {/* 1. HANGING IDENTITY TEXT (Floating) */}
      <div className="fixed top-24 left-4 sm:left-12 z-50 pointer-events-none hidden md:block animate-in slide-in-from-top duration-1000">
         <div className="bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
              Saif Ali — Expert in Artificial Intelligence & Data Science
            </span>
         </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto gap-12 lg:gap-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-72 md:w-[600px] h-72 md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] md:blur-[180px] animate-blob"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-72 md:w-[600px] h-72 md:h-[600px] bg-purple-600/10 rounded-full blur-[120px] md:blur-[180px] animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1 relative z-30 px-2 sm:px-0 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-500/30 mb-6 md:mb-10">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
             <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-blue-200">Neural Intelligence Architect</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-white tracking-tighter mb-8 md:mb-10 uppercase">
             AI & DATA <br className="hidden lg:block" />
             <span className="text-gradient">SCIENCE.</span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10 md:mb-14">
             Architecting <span className="text-white">Intelligent</span>, <span className="text-white">Scalable</span>, and <span className="text-white">Data-Driven</span> Solutions for global enterprise stakeholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
             <Link to="/contact" className="px-10 md:px-14 py-4 md:py-6 bg-white text-black rounded-full font-black text-base md:text-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl text-center group">
                Contact Now <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
             <a 
               href={CV_LINK} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="px-10 md:px-14 py-4 md:py-6 glass text-white rounded-full font-black text-base md:text-xl hover:bg-white/10 transition-all border border-white/15 text-center flex items-center justify-center gap-3"
             >
                Download CV <Download className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2 relative z-20 animate-in fade-in slide-in-from-right duration-1000">
           <div 
             className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-md transition-all duration-500 group"
             style={{ transform: `translateY(${scrollY * -0.05}px)` }}
           >
              <div className="aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10 relative z-20 transition-all duration-700 hover:scale-[1.02]">
                 <img 
                    src="/saifie.png"
                    alt="Saif Ali AI & Data Science Engineer" 
                    className="w-full h-full object-cover brightness-[0.75] contrast-[1.1] grayscale-[0.2]" 
                    loading="eager"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90"></div>
                 <div className="absolute inset-0 bg-[#030712]/40 mix-blend-multiply"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/20 via-transparent to-[#030712]/20"></div>
              </div>
              {/* System Tag */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[240px] z-30">
                 <div className="glass p-4 rounded-2xl border border-blue-500/40 flex items-center gap-4 bg-black/90 backdrop-blur-3xl shadow-2xl">
                    <Activity className="text-blue-500 w-6 h-6 animate-pulse" />
                    <div>
                       <div className="text-[8px] font-black uppercase text-blue-400 tracking-widest">AI & Data Science </div>
                       <div className="text-[10px] font-mono text-white">Contact: Saif Ali</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. SKILL MARQUEE */}
      <section className="py-10 bg-white/[0.02] border-y border-white/5 overflow-hidden whitespace-nowrap z-40 relative">
        <div className="flex animate-marquee hover:pause group">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <div key={i} className="inline-flex items-center mx-12">
               <span className="text-3xl md:text-5xl font-black text-white/10 group-hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">{skill}</span>
               <div className="w-3 h-3 bg-blue-500/20 rounded-full ml-12"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERTISE DOMAINS (9 Cards) */}
      <section className="py-24 lg:py-48 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="These are my areas of expertise" subtitle="Authoritative Capabilities" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseDomains.map((domain, i) => (
              <div key={i} className="group glass p-12 md:p-16 rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:border-blue-500/50 hover:-translate-y-3 relative overflow-hidden flex flex-col justify-center text-center shadow-2xl hover:shadow-blue-500/10">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 tracking-tighter relative z-10">{domain}</h3>
                 <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full group-hover:w-24 transition-all duration-700 relative z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL AVAILABILITY (GREY WORLD MAP) */}
      <section className="py-24 lg:py-48 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        {/* Abstract Grey World Map Visual */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg viewBox="0 0 1000 500" className="w-full h-full stroke-gray-600 fill-none opacity-50">
            {/* Continental Outlines (Abstracted) */}
            <path d="M150,150 Q200,100 250,150 T400,120 T600,180 T800,100" strokeWidth="0.8" strokeDasharray="4,4" />
            <path d="M100,350 Q300,250 500,380 T800,300 T950,350" strokeWidth="0.8" strokeDasharray="8,8" />
            <path d="M400,100 Q450,250 420,400" strokeWidth="0.5" opacity="0.2" />
            {/* Glowing Interaction Points */}
            <circle cx="220" cy="180" r="4" fill="#4b5563" className="animate-ping" />
            <circle cx="520" cy="320" r="4" fill="#6b7280" className="animate-ping" style={{ animationDelay: '1.2s' }} />
            <circle cx="820" cy="220" r="4" fill="#4b5563" className="animate-ping" style={{ animationDelay: '2.4s' }} />
            {/* Neural Links */}
            <path d="M220,180 L520,320 L820,220" stroke="#4b5563" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
             Operating globally with <br className="hidden md:block" /> 
             <span className="text-gradient">international reach.</span>
           </h2>
           <p className="text-xl md:text-2xl text-gray-500 mb-16 font-medium max-w-4xl mx-auto leading-relaxed">
             I am available to work with international clients worldwide for high-fidelity AI & Data Science projects. Delivering mission-critical digital intelligence across all global nodes.
           </p>
           
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-black rounded-full font-black text-lg hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                 Establish Link
              </Link>
              <Link to="/consultation" className="px-12 py-5 glass text-white rounded-full font-black text-lg hover:bg-blue-600 transition-all border border-white/10">
                 Book Session
              </Link>
              <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="px-12 py-5 glass text-white rounded-full font-black text-lg hover:bg-blue-600 transition-all border border-white/10">
                 Access CV
              </a>
           </div>
        </div>
      </section>

      {/* 6. INTELLIGENT PIPELINE (9 Steps) */}
      <section className="py-24 lg:py-48 px-4">
        <div className="max-w-7xl mx-auto">
           <SectionHeader title="The Intelligence Pipeline" subtitle="Lifecycle Architecture" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {WORKFLOW.map((step, i) => (
                <div key={i} className="group glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-blue-500/30 flex flex-col h-full shadow-lg">
                   <div className="text-5xl font-black text-white/5 mb-8 group-hover:text-blue-500/10 transition-colors">0{i+1}</div>
                   <div className="mb-6 w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      {step.icon === 'Target' && <Target className="w-8 h-8" />}
                      {step.icon === 'Database' && <Database className="w-8 h-8" />}
                      {step.icon === 'BarChart3' && <BarChart3 className="w-8 h-8" />}
                      {step.icon === 'Binary' && <Binary className="w-8 h-8" />}
                      {step.icon === 'Cpu' && <Cpu className="w-8 h-8" />}
                      {step.icon === 'Zap' && <Zap className="w-8 h-8" />}
                      {step.icon === 'Layers' && <Layers className="w-8 h-8" />}
                      {step.icon === 'Globe' && <Globe className="w-8 h-8" />}
                      {step.icon === 'Activity' && <Activity className="w-8 h-8" />}
                   </div>
                   <h4 className="text-xl font-black text-white mb-4 tracking-tight">{step.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Premium Side-by-Side) */}
      <section className="py-24 lg:py-48 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5 flex flex-col justify-center">
                 <h2 className="text-7xl md:text-9xl font-black text-white/5 mb-8 leading-none">FAQ</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Strategic Clarity.</h3>
                 <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                   Addressing critical technical and operational queries to ensure seamless global collaboration and intelligence deployment.
                 </p>
              </div>
              <div className="lg:col-span-7 space-y-6">
                 {FAQS.map((faq, i) => (
                   <div key={i} className="glass rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 bg-white/[0.02]">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full p-8 md:p-10 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
                      >
                         <span className="text-lg md:text-xl font-black text-white leading-tight pr-6">{faq.question}</span>
                         <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {activeFaq === i && (
                        <div className="p-8 md:p-10 pt-0 text-lg text-gray-400 leading-relaxed font-medium animate-in slide-in-from-top-4 duration-500">
                           {faq.answer}
                        </div>
                      )}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 8. CONNECT SECTION (3D UPGRADE) */}
      <section className="py-32 md:py-60 relative text-center px-4 overflow-hidden">
        {/* 3D Tech Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-600/20 rounded-3xl border border-blue-500/20 rotate-[25deg] blur-[2px] animate-float opacity-30 md:opacity-60"></div>
           <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-600/20 rounded-full border border-purple-500/20 -rotate-[15deg] blur-[3px] animate-float animation-delay-2000 opacity-30 md:opacity-60"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
           <div className="inline-block w-full p-10 md:p-24 glass rounded-[3rem] md:rounded-[4rem] border border-blue-500/10 bg-black/60 shadow-[0_0_150px_rgba(59,130,246,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-8 md:mb-12 text-white leading-[0.85] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase">CONNECT.</h2>
              
              <p className="text-lg md:text-2xl lg:text-4xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed md:leading-tight mb-12 md:mb-20 px-2">
                Ready to transform high-fidelity mission requirements into next-generation AI intelligence?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
                 <Link 
                   to="/contact" 
                   className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-white text-black rounded-full font-black text-lg md:text-xl hover:scale-105 hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 group/btn"
                 >
                    Establish Link <Mail className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
                 <Link 
                   to="/consultation" 
                   className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 glass text-white rounded-full font-black text-lg md:text-xl hover:bg-blue-600 transition-all border border-white/20 flex items-center justify-center gap-4 group/btn"
                 >
                    Book Session <Calendar className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <style>{`
        .text-gradient { background: linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; animation: marquee 40s linear infinite; }
        .pause { animation-play-state: paused; }
        @keyframes blob { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-blob { animation: blob 10s infinite alternate; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        .bg-gradient-radial {
          background-image: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
};

export default Home;
