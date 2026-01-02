
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, Eye, Zap, Smartphone, Monitor, Activity, Cpu, Bell, Lock } from 'lucide-react';

const VisionX: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-blue-600/20 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-8 md:mb-10 border border-blue-500/20">
            <Lock className="w-3 h-3 md:w-4 md:h-4" /> Strategic Core • Final Year Project
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-10 tracking-tighter text-white leading-tight">Vision-X Sentinel</h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-4xl font-medium leading-relaxed mx-auto lg:mx-0">
            A research-driven, proactive security ecosystem utilizing YOLOv8 for sub-second weapon detection and unauthorized breach analysis.
          </p>
        </div>

        {/* Engineering Visualization */}
        <div className="glass p-3 md:p-5 rounded-[2rem] md:rounded-[4rem] border border-white/5 mb-16 md:mb-32 overflow-hidden relative shadow-2xl">
          <div className="aspect-[16/9] lg:aspect-[21/9] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" 
              alt="Vision X Neural Interface" 
              className="w-full h-full object-cover grayscale-[0.3] brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-6 md:p-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12 w-full text-white">
                <div className="flex items-center gap-3 md:gap-4 glass p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-xl">
                  <Activity className="text-green-500 w-6 h-6 md:w-8 md:h-8" />
                  <div>
                    <div className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">FPS / Latency</div>
                    <div className="text-base md:text-xl font-black">60 FPS @ 40ms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 glass p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-xl">
                  <ShieldCheck className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
                  <div>
                    <div className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Model Core</div>
                    <div className="text-base md:text-xl font-black">YOLOv8 Small</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 glass p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-xl">
                  <Bell className="text-red-500 w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                  <div>
                    <div className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Protocol</div>
                    <div className="text-base md:text-xl font-black">Firebase Cloud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-20 md:mb-32">
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 flex items-center gap-4">
                <Cpu className="text-blue-500 w-6 h-6 md:w-8 md:h-8" /> System Architecture
              </h2>
              <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 relative overflow-hidden bg-white/[0.01]">
                <div className="flex flex-col items-center gap-10 md:gap-12 w-full relative z-10">
                   <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-lg">
                      <div className="w-full p-5 glass rounded-2xl border border-white/10 text-center font-black text-blue-300 text-sm md:text-base">RTSP Stream Source</div>
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                      <div className="w-full p-8 md:p-10 bg-blue-600 rounded-3xl shadow-xl shadow-blue-500/20 text-center">
                        <div className="font-black text-white text-xl md:text-2xl mb-2">AI Inference Engine</div>
                        <div className="text-[9px] md:text-[11px] uppercase font-black text-white/70 tracking-widest">Custom Weights (YOLOv8)</div>
                      </div>
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-purple-500 to-green-500"></div>
                      <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                         <div className="p-4 md:p-6 glass border border-white/10 rounded-2xl text-center">
                            <Smartphone className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-3 text-green-400" />
                            <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Mobile Client</div>
                         </div>
                         <div className="p-4 md:p-6 glass border border-white/10 rounded-2xl text-center">
                            <Monitor className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-3 text-blue-400" />
                            <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Admin Deck</div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">Technical Impact</h2>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed font-medium">
                Vision X successfully bridges the gap between raw research and production-ready security software. By optimizing the inference pipeline, we achieved near-instantaneous detection of dangerous objects, providing a critical buffer for emergency response teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 {[
                   { label: 'Detection Accuracy', val: '94.2% mAP' },
                   { label: 'Inference Speed', val: 'Sub-40ms' },
                   { label: 'Integration Type', val: 'REST Pipeline' },
                   { label: 'Storage Sync', val: 'Firebase Cloud' },
                 ].map((stat, i) => (
                   <div key={i} className="glass p-5 md:p-6 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                      <span className="font-bold text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px]">{stat.label}</span>
                      <span className="font-black text-white text-sm md:text-base">{stat.val}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/5 lg:sticky lg:top-32 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black mb-8 text-white tracking-tight">System Modules</h3>
              <ul className="space-y-5 md:space-y-6">
                {[
                  { name: 'YOLOv8 Core', icon: ShieldCheck, color: 'text-blue-500' },
                  { name: 'RTSP Decoding', icon: Eye, color: 'text-green-500' },
                  { name: 'Cloud Push Service', icon: Zap, color: 'text-yellow-500' },
                  { name: 'Encrypted Vault', icon: Lock, color: 'text-purple-500' },
                  { name: 'Observer Dashboard', icon: Monitor, color: 'text-white' },
                ].map((mod, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 group">
                    <div className="p-2.5 md:p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/20 transition-all">
                      <mod.icon className={`w-4 h-4 md:w-5 md:h-5 ${mod.color}`} />
                    </div>
                    <span className="font-bold text-sm md:text-base group-hover:text-white transition-colors">{mod.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/10">
                 <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Stack Overview</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Python', 'PyTorch', 'YOLOv8', 'Flutter', 'Firebase', 'OpenCV'].map((t, i) => (
                     <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-xl text-[9px] md:text-[10px] font-black text-blue-400 border border-white/5 uppercase tracking-tighter">{t}</span>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionX;
