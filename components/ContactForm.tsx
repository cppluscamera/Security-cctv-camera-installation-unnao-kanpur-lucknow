
import React, { useState } from 'react';
import { saveInquiry } from '../services/storageService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Installation' as any,
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveInquiry(formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', service: 'Installation', location: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="glass p-8 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
      
      <h3 className="text-2xl font-bold mb-6 text-sky-400">Request a Service</h3>
      
      {submitted ? (
        <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-6 rounded-xl text-center animate-pulse">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-bold text-xl">Inquiry Received!</p>
          <p className="mt-2">Our expert in Kanpur/Unnao will contact you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-400">Your Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-400">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-400">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-400">Service Type</label>
              <select 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value as any})}
              >
                <option>Installation</option>
                <option>Repair</option>
                <option>Maintenance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-400">Location (Area in Kanpur/Unnao)</label>
              <input 
                placeholder="e.g. Jajmau, Maswanpur Road"
                required
                type="text" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-400">Requirement Details</label>
            <textarea 
              rows={3}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500 transition-all"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-lg transition-all shadow-[0_4px_15px_rgba(0,210,255,0.3)] hover:-translate-y-1 active:scale-95"
          >
            Send Service Request
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
