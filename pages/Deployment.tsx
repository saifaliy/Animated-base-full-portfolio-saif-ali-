
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Layers, Rocket, GitBranch, Terminal, Server, Shield } from 'lucide-react';

const Deployment: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Infrastructure Stack" subtitle="Deployment Logic" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
           <div className="glass p-10 rounded-[40px] border border-white/5 lg:col-span-2">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                 <Layers className="text-blue-500" /> Core Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { name: 'React 19', type: 'Frontend' },
                   { name: 'Tailwind CSS', type: 'Styling' },
                   { name: 'TypeScript', type: 'Language' },
                   { name: 'Framer Motion', type: 'Motion' },
                   { name: 'FastAPI', type: 'AI Backend' },
                   { name: 'Firebase', type: 'Database' },
                   { name: 'PyTorch', type: 'ML Core' },
                   { name: 'Vite', type: 'Build Tool' },
                 ].map((tech, i) => (
                   <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-xs font-black text-blue-400 mb-1">{tech.type}</div>
                      <div className="font-bold">{tech.name}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass p-10 rounded-[40px] border border-blue-500/20 bg-blue-600/5">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                 <Rocket className="text-white" /> Continuous Delivery
              </h3>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <GitBranch className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <div className="text-sm font-medium">GitHub Actions integration for automated testing and CI/CD pipelines.</div>
                 </div>
                 <div className="flex gap-4">
                    <Server className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <div className="text-sm font-medium">Global Edge deployment via Vercel for zero-latency distribution.</div>
                 </div>
                 <div className="flex gap-4">
                    <Shield className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <div className="text-sm font-medium">SSL encryption and automated DDoS protection at the network level.</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="glass p-12 rounded-[50px] border border-white/5">
           <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
              <Terminal className="text-green-500" /> Build Instruction
           </h3>
           <div className="bg-black/40 p-8 rounded-3xl font-mono text-sm border border-white/10 space-y-4 text-green-400">
              <div># Install dependencies</div>
              <div>$ npm install --force</div>
              <div className="mt-4"># Build production assets</div>
              <div>$ npm run build</div>
              <div className="mt-4"># Preview optimized site</div>
              <div>$ npm run preview</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
