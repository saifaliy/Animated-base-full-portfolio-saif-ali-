
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, CalendarDays } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-20 md:h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 md:gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-all duration-1000">
                <Cpu className="text-white w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-white leading-none">SAIF</span>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse mx-0.5 md:mx-1 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
                  <span className="text-xl md:text-3xl font-light tracking-[0.05em] text-white/50 leading-none">ALI</span>
                </div>
                <span className="text-[5px] md:text-[6px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-blue-500 mt-1.5 opacity-90 whitespace-nowrap">INTELLIGENCE ARCHITECT</span>
              </div>
            </Link>
          </div>

          <div className="hidden xl:flex items-center space-x-1">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-400 relative group/link ${
                  location.pathname === item.path ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 transition-transform duration-300 origin-left ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/consultation"
              className="ml-6 px-8 py-3 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 group/btn"
            >
              Book Call <CalendarDays className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 glass rounded-xl text-gray-400 border border-white/10 hover:text-white transition-colors" aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 md:top-24 z-40 xl:hidden glass backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-8 pb-12 space-y-4 max-w-lg mx-auto">
            {MENU_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${location.pathname === item.path ? 'text-blue-500 bg-blue-500/10 border-blue-500/20 shadow-lg shadow-blue-500/10' : 'text-gray-400 border-white/5'}`}>
                {item.name}
              </Link>
            ))}
            <Link to="/consultation" onClick={() => setIsOpen(false)} className="block w-full text-center px-8 py-5 bg-blue-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] mt-8 shadow-xl shadow-blue-500/20">
              Establish Sync
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
