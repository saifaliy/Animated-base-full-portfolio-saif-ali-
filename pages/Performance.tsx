
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Gauge, Search, ShieldCheck, Zap, BarChart3, Cloud } from 'lucide-react';

const Performance: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Core Web Vitals" subtitle="Platform Optimization" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {[
             { label: 'Performance', val: '98/100', icon: Gauge, color: 'text-green-500' },
             { label: 'Accessibility', val: '100/100', icon: ShieldCheck, color: 'text-blue-500' },
             { label: 'Best Practices', val: '100/100', icon: Zap, color: 'text-yellow-500' },
             { label: 'SEO Rank', val: '100/100', icon: Search, color: 'text-purple-500' },
           ].map((item, i) => (
             <div key={i} className="glass p-8 rounded-[40px] border border-white/5 text-center">
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-6`} />
                <div className="text-4xl font-black mb-2">{item.val}</div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-500">{item.label}</div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="glass p-12 rounded-[50px] border border-white/5">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                 <BarChart3 className="text-blue-500" /> Technical Optimization
              </h3>
              <ul className="space-y-6">
                 {[
                   { t: 'Image Optimization', d: 'Next-gen WebP formats and lazy loading implementation.' },
                   { t: 'Code Splitting', d: 'Dynamic imports to reduce initial bundle size for faster TTI.' },
                   { t: 'Minification', d: 'Automated minification of JS, CSS, and HTML assets.' },
                   { t: 'Edge Caching', d: 'Global distribution via Cloudflare for sub-100ms response times.' },
                 ].map((opt, i) => (
                   <li key={i}>
                      <div className="font-bold mb-1">{opt.t}</div>
                      <p className="text-sm text-gray-500">{opt.d}</p>
                   </li>
                 ))}
              </ul>
           </div>

           <div className="glass p-12 rounded-[50px] border border-white/5">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                 <Cloud className="text-purple-500" /> SEO Architecture
              </h3>
              <div className="space-y-6">
                 <div>
                    <div className="text-xs font-black uppercase text-purple-400 mb-2">Semantic HTML</div>
                    <p className="text-sm text-gray-400">Strict adherence to HTML5 standards, ensuring screen readers and crawlers parse the hierarchy correctly.</p>
                 </div>
                 <div>
                    <div className="text-xs font-black uppercase text-purple-400 mb-2">Meta Dynamics</div>
                    <p className="text-sm text-gray-400">Automated Open Graph and Twitter Card generation for premium social sharing previews.</p>
                 </div>
                 <div>
                    <div className="text-xs font-black uppercase text-purple-400 mb-2">Keyword Logic</div>
                    <p className="text-sm text-gray-400">Research-driven heading distribution focusing on "AI Engineer", "Software Research", and "Sai Ali Portfolio".</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
