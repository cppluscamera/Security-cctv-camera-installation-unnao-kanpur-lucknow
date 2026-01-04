
import React from 'react';
import ContactForm from '../components/ContactForm';

const Repair: React.FC = () => {
  const commonIssues = [
    'No Video Input / Black Screen',
    'HDD Storage Failure',
    'Blurry / Night Vision Issues',
    'Mobile App Connectivity Problems',
    'Frequent Power Cycle / Restarting',
    'Wire Damage / Corrosion'
  ];

  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-bold">Security Camera <span className="text-sky-500">Repair</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Expert troubleshooting for all major security brands. We provide fast response for CCTV maintenance service in Kanpur and Unnao.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                  alt="Technician Repair"
                  className="w-full h-64 object-cover opacity-60"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-sky-400">24/7 Troubleshooting</h3>
                  <p className="text-slate-400 mb-6">
                    Our technicians are equipped with the latest diagnostic tools to find faults in your DVR, NVR, or individual cameras instantly.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {commonIssues.map((issue, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-sky-500/10 border border-sky-500/30 p-8 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">Emergency Repair?</h4>
                  <p className="text-slate-400">Call our direct hotline for Maswanpur area.</p>
                </div>
                <a href="tel:+918090090051" className="bg-sky-500 hover:bg-sky-400 px-6 py-3 rounded-full font-bold text-white transition-all shadow-lg">
                  Call Now
                </a>
              </div>
            </div>

            <div className="glass p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center underline decoration-sky-500 underline-offset-8">Book a Repair</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repair;
