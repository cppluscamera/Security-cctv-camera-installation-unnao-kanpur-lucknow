
import React, { useEffect, useState } from 'react';
import { Inquiry } from '../types';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '../services/storageService';

const Admin: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setInquiries(getInquiries());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple static password for demo/local storage usage
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleStatusUpdate = (id: string, status: Inquiry['status']) => {
    updateInquiryStatus(id, status);
    setInquiries(getInquiries());
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      deleteInquiry(id);
      setInquiries(getInquiries());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="glass p-10 rounded-3xl max-w-md w-full border border-sky-500/20 shadow-[0_0_50px_rgba(0,210,255,0.1)]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-sky-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-slate-400">Restricted access for Vijay Electronics</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Access Key"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all shadow-lg">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-sky-400">Service Leads</h1>
          <p className="text-slate-400">Total {inquiries.length} inquiries found in LocalStorage</p>
        </div>
        <div className="flex gap-2">
           <button onClick={() => setInquiries(getInquiries())} className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Refresh
           </button>
           <button onClick={() => setIsAuthenticated(false)} className="bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all">Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {inquiries.length === 0 ? (
          <div className="glass p-20 rounded-3xl text-center">
            <p className="text-slate-500 text-xl">No inquiries found yet.</p>
          </div>
        ) : (
          inquiries.sort((a,b) => b.timestamp - a.timestamp).map((inq) => (
            <div key={inq.id} className="glass p-8 rounded-2xl border-l-4 border-sky-500 hover:bg-slate-900/40 transition-all">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      inq.status === 'New' ? 'bg-sky-500 text-white' : 
                      inq.status === 'Contacted' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'
                    }`}>
                      {inq.status}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {new Date(inq.timestamp).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <p className="text-xl font-bold">{inq.name}</p>
                    <p className="text-sky-400 font-mono">{inq.phone}</p>
                    <p className="text-slate-400">{inq.email}</p>
                    <p className="text-slate-300 font-semibold"><span className="text-slate-500">Area:</span> {inq.location}</p>
                    <p className="text-slate-300"><span className="text-slate-500">Service:</span> {inq.service}</p>
                  </div>
                  
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <p className="text-slate-400 italic">"{inq.message}"</p>
                  </div>
                </div>
                
                <div className="flex lg:flex-col justify-end gap-2 h-fit">
                   <button 
                     onClick={() => handleStatusUpdate(inq.id, 'Contacted')}
                     className="px-4 py-2 rounded-lg bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500 hover:text-white border border-yellow-500/20 text-sm transition-all"
                   >
                     Mark Contacted
                   </button>
                   <button 
                     onClick={() => handleStatusUpdate(inq.id, 'Completed')}
                     className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white border border-green-500/20 text-sm transition-all"
                   >
                     Mark Completed
                   </button>
                   <button 
                     onClick={() => handleDelete(inq.id)}
                     className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 text-sm transition-all"
                   >
                     Delete Lead
                   </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
