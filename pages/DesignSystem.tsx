
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Palette, Type, Square, Layout, Sparkles } from 'lucide-react';

const DesignSystem: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Neural UI Core" subtitle="Visual Architecture" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
           {/* Color Palette */}
           <div className="space-y-12">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <Palette className="text-blue-500" /> Chromatic Matrix
              </h3>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { name: 'Core Neural Blue', hex: '#3b82f6', use: 'Primary Actions' },
                   { name: 'Void Black', hex: '#030712', use: 'Canvas Base' },
                   { name: 'Neural Pulse', hex: '#a855f7', use: 'Secondary Accents' },
                   { name: 'Glass Tint', hex: 'RGBA(255,255,255,0.05)', use: 'Surface Glass' },
                 ].map((c, i) => (
                   <div key={i} className="glass p-6 rounded-3xl border border-white/5 flex flex-col items-center">
                      <div className="w-full h-24 rounded-2xl mb-4" style={{ backgroundColor: c.hex }}></div>
                      <div className="text-xs font-black uppercase mb-1">{c.name}</div>
                      <div className="text-[10px] text-gray-500 font-bold">{c.hex}</div>
                      <div className="mt-2 text-[10px] text-blue-400 font-bold">{c.use}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Typography */}
           <div className="space-y-12">
              <h3 className="text-3xl font-black flex items-center gap-4">
                 <Type className="text-purple-500" /> Typeface Dynamics
              </h3>
              <div className="glass p-10 rounded-[40px] border border-white/5 space-y-10">
                 <div>
                    <div className="text-xs font-black uppercase text-gray-500 mb-4 tracking-[0.2em]">Primary: Plus Jakarta Sans</div>
                    <div className="text-6xl font-black mb-2 tracking-tighter">Display Heading</div>
                    <div className="text-2xl font-bold text-gray-400">Section Subtitle</div>
                 </div>
                 <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-300">Body Large: Used for deep narratives and project descriptions. Optimized for readability in dark environments.</p>
                    <p className="text-sm text-gray-500">Body Small: Used for metadata and subtle descriptions.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Components */}
        <div className="mt-32">
           <h3 className="text-3xl font-black mb-16 flex items-center gap-4">
              <Square className="text-green-500" /> Component Library
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                 <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Glass Buttons</h4>
                 <div className="flex flex-col gap-4">
                    <button className="px-8 py-4 bg-blue-600 rounded-full font-black">Primary Action</button>
                    <button className="px-8 py-4 glass rounded-full font-black border border-white/10">Ghost State</button>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Neural Cards</h4>
                 <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                    <Sparkles className="text-blue-500 mb-4" />
                    <div className="font-bold">Standard Glass Surface</div>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Navigation Tags</h4>
                 <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-500 rounded-full text-[10px] font-black uppercase">AI Core</span>
                    <span className="px-4 py-2 glass rounded-full text-[10px] font-black uppercase">Research</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
