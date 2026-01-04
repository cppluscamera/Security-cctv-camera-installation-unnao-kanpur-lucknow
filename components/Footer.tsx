
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glass border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <span className="text-2xl font-bold">Vijay Electronics</span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Professional CCTV installation, repair, and maintenance services in Kanpur & Unnao. Trusted local provider for 24/7 security solutions at affordable prices.
          </p>
          <div className="flex space-x-4">
             {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
               <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 group-hover:bg-white mask-icon"></div>
               </a>
             ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-sky-400">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/installation" className="hover:text-white transition-colors">CCTV Installation</Link></li>
            <li><Link to="/repair" className="hover:text-white transition-colors">Electronics Repair</Link></li>
            <li><Link to="/maintenance" className="hover:text-white transition-colors">AMC Packages</Link></li>
            <li><Link to="/admin" className="hover:text-white transition-colors">Partner Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-sky-400">Local Service</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-2">
               <span className="text-sky-500">•</span> Kanpur (Maswanpur Road)
            </li>
            <li className="flex gap-2">
               <span className="text-sky-500">•</span> Jajmau Area Service
            </li>
            <li className="flex gap-2">
               <span className="text-sky-500">•</span> Unnao City
            </li>
            <li className="flex gap-2">
               <span className="text-sky-500">•</span> Shuklaganj Area
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Vijay Electronics. All rights reserved. Designed for excellence in Security.</p>
        <p className="mt-2 text-xs">Serving CCTV Installation Unnao | Security camera repair Kanpur | Best CCTV camera price Kanpur</p>
      </div>
    </footer>
  );
};

export default Footer;
