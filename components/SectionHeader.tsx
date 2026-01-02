
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
  accent?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  accent = 'bg-blue-600' 
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4`}>
        <div className={`w-1.5 h-1.5 rounded-full ${accent} animate-pulse`}></div>
        {subtitle}
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
