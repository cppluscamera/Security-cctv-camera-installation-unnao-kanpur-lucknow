
import React from 'react';
import ContactForm from '../components/ContactForm';

const Installation: React.FC = () => {
  const steps = [
    { title: 'Site Survey', desc: 'Detailed analysis of blind spots and light conditions.' },
    { title: 'Strategic Planning', desc: 'Custom network mapping for wired/wireless setups.' },
    { title: 'Quality Hardware', desc: 'Selection of top brands like Hikvision, CP Plus, Dahua.' },
    { title: 'Testing & Handover', desc: 'Full testing of remote view and storage backup.' }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-sky-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold">CCTV Installation <br /><span className="text-sky-400">in Kanpur & Unnao</span></h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Protecting your assets with state-of-the-art surveillance. From single-camera setups to industrial-scale IP solutions, we cover all of Kanpur's security needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((s, i) => (
                  <div key={i} className="glass p-6 rounded-xl border-l-4 border-l-sky-500">
                    <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-3xl shadow-2xl grayscale"
                alt="Installation Work"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold text-sky-400">1K+</p>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Cams Installed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="glass p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Why Choose Our Installation?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center shrink-0 text-sky-400 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Concealed Wiring</h4>
                  <p className="text-slate-400">We ensure neat and tidy cabling to maintain the aesthetics of your property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center shrink-0 text-sky-400 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Remote Mobile Viewing</h4>
                  <p className="text-slate-400">Watch your premises live from anywhere in the world on your smartphone.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center shrink-0 text-sky-400 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Affordable Packages</h4>
                  <p className="text-slate-400">Best CCTV camera price in Kanpur with no hidden charges for standard installs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
             <h3 className="text-xl font-bold mb-6 text-center">Inquire Now</h3>
             <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;
