
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
                Vijay Electronics
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/installation" className="hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Installation</Link>
              <Link to="/repair" className="hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Repair</Link>
              <Link to="/maintenance" className="hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">AMC Packages</Link>
              <Link to="/ai-agent" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>AI Agent</span>
              </Link>
              <Link to="/admin" className="bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all">Admin</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 hover:text-sky-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-800/50">Home</Link>
            <Link to="/installation" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-800/50">Installation</Link>
            <Link to="/repair" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-800/50">Repair</Link>
            <Link to="/maintenance" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-800/50">AMC Packages</Link>
            <Link to="/ai-agent" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 border-b border-slate-800/50">AI Agent</Link>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-sky-400">Admin Panel</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
