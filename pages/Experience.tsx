import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Calendar, Laptop, Zap, Globe, ExternalLink, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    type: 'Research',
    role: 'Software Engineer - Research Division',
    company: 'Livingston Research',
    period: 'Jan 2025 – Present',
    location: 'Remote, United Kingdom',
    proofLink: 'https://drive.google.com/file/d/1HM-L42wPZA6fD71Kt8BRYYs-3BvfSIbj/view',
    description: [
      'Delivered 15+ technical reports on data science, enhancing client understanding by 40% through clear documentation',
      'Used Python, Pandas & NumPy for data analysis, reducing processing time by 25% with optimized algorithms',
      'Developed comprehensive ML project documentation, decreasing client onboarding time by 30%',
      'Implemented automation tools increasing research efficiency by 35%',
      'Specialized in scalable AI solutions for global enterprise clients'
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis', 'Documentation', 'Automation', 'Jupyter']
  },
  {
    type: 'Vision',
    role: 'Computer Vision Intern',
    company: 'Arch Technologies',
    period: 'Aug 2025 – Sep 2025',
    location: 'Islamabad, Pakistan',
    proofLink: 'https://drive.google.com/file/d/1lWpm5Yy9OwNROqWpI6CM-rLssVjG69Qn/view',
    description: [
      'Built CV models with Python, OpenCV, TensorFlow & PyTorch for image classification',
      'Developed object detection & facial recognition systems with high accuracy',
      'Enhanced automation in real-world applications through model optimization',
      'Implemented scalable vision solutions for enterprise AI applications',
      'Focused on computer vision & deep learning ecosystems'
    ],
    skills: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Object Detection', 'Facial Recognition', 'Image Processing']
  },
  {
    type: 'Development',
    role: 'Web Development Engineer Intern',
    company: 'Digital Empowerment Network (DEN)',
    period: 'Sep 2024 – Oct 2024',
    location: 'Wahcantt, Pakistan',
    proofLink: 'https://drive.google.com/file/d/1OofwfVpLe-2KrQoxbVQzURrCi_wVMVz6/view',
    description: [
      'Built 5+ responsive websites with HTML5, CSS3, JavaScript & React.js, improving UX by 25%',
      'Integrated RESTful APIs ensuring 99.8% uptime for dynamic content',
      'Used Git/GitHub with CI/CD pipelines reducing deployment time by 40%',
      'Optimized performance achieving 90+ Lighthouse scores for all apps',
      'Implemented responsive design across all device platforms'
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'CI/CD', 'Performance', 'SEO']
  }
];

const Experience: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Professional Trajectory" subtitle="Engineering Log" />

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="glass p-6 md:p-8 lg:p-12 rounded-3xl md:rounded-[40px] lg:rounded-[50px] border border-white/5 group-hover:border-blue-500/30 transition-all relative overflow-hidden shadow-xl md:shadow-2xl bg-black/40">
                {/* Background Icon - Hidden on small screens */}
                <div className="hidden lg:block absolute top-0 right-0 p-8 lg:p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-1000">
                  {exp.type === 'Research' ? <Globe className="w-32 h-32 lg:w-48 lg:h-48" /> : 
                   exp.type === 'Vision' ? <Laptop className="w-32 h-32 lg:w-48 lg:h-48" /> : 
                   <Briefcase className="w-32 h-32 lg:w-48 lg:h-48" />}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 relative z-10">
                  {/* Left Column - Company Info */}
                  <div className="lg:col-span-4">
                    <div className={`inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8 ${
                      exp.type === 'Research' ? 'bg-purple-600/20 text-purple-400' : 
                      exp.type === 'Vision' ? 'bg-blue-600/20 text-blue-400' : 
                      'bg-green-600/20 text-green-400'
                    }`}>
                      {exp.type} Segment
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 md:mb-3 tracking-tight text-white leading-tight">
                      {exp.role}
                    </h3>
                    
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500 mb-4 md:mb-6 flex flex-wrap items-center gap-2 md:gap-3">
                      {exp.company}
                      {exp.proofLink && (
                        <a 
                          href={exp.proofLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] md:text-xs bg-white/10 px-2 md:px-3 py-1 rounded-full hover:bg-blue-600 transition-all group/link text-nowrap"
                        >
                          <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em]">Proof</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-400 font-bold md:font-black bg-white/5 w-full md:w-fit px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/5 mb-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600 flex-shrink-0" />
                      {exp.location}
                    </div>
                  </div>
                  
                  {/* Right Column - Description & Skills */}
                  <div className="lg:col-span-8">
                    <div className="space-y-4 md:space-y-6">
                      {exp.description.map((point, i) => (
                        <div key={i} className="flex gap-3 md:gap-5">
                          <div className="mt-1.5 md:mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)] md:shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10 md:mt-16 pt-6 md:pt-10 border-t border-white/10">
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-gray-500 mb-4 md:mb-6">
                        Expertise Deployed
                      </div>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {exp.skills.map((s, i) => (
                          <span 
                            key={i} 
                            className="px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-white/5 rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-xs font-black text-blue-300 border border-white/5 hover:bg-blue-600 hover:text-white transition-all cursor-default text-nowrap"
                          >
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
        <div className="mt-20 md:mt-32 glass p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[50px] lg:rounded-[60px] border border-blue-500/10 text-center relative overflow-hidden bg-gradient-to-br from-black to-blue-900/10">
          <Zap className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-500 mx-auto mb-6 md:mb-8 lg:mb-10 animate-pulse" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 md:mb-6 lg:mb-8 text-white">
            The Engineering Ethos
          </h3>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            My journey from web development at <span className="text-white font-semibold">DEN</span> to computer vision at <span className="text-white font-semibold">Arch Technologies</span> and international AI research at <span className="text-white font-semibold">Livingston Research UK</span> defines a transition from developer to <span className="text-white font-bold">Intelligence Architect</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
