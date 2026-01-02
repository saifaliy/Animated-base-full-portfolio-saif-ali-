
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Neural Insights" subtitle="Research Laboratory Blog" />
        
        {/* Search & Filter Bar */}
        <div className="mb-16 flex justify-between items-center glass p-4 rounded-3xl border border-white/10">
           <div className="flex items-center gap-4 px-6 text-gray-400">
             <Search className="w-5 h-5" />
             <input type="text" placeholder="Search insights..." className="bg-transparent border-none outline-none font-bold text-white placeholder-gray-600" />
           </div>
           <div className="hidden md:flex gap-4">
             {['All', 'AI Research', 'Engineering', 'Ethics'].map((cat)=>(
               <button key={cat} className="px-5 py-2 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-blue-600 transition-all">{cat}</button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group glass p-10 rounded-[50px] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                  <Tag className="w-32 h-32" />
               </div>
               <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase rounded-full border border-blue-500/20">{post.category}</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </div>
               </div>
               <h3 className="text-3xl font-black mb-6 text-white group-hover:text-blue-400 transition-colors leading-tight">{post.title}</h3>
               <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium line-clamp-3">{post.excerpt}</p>
               <div className="mt-auto flex justify-between items-center pt-8 border-t border-white/5">
                  <span className="text-xs font-black text-gray-600 uppercase tracking-[0.2em]">{post.date}</span>
                  <button className="flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-all">
                    Access Post <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
