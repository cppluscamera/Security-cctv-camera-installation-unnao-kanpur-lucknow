
import React from 'react';
import { Link } from 'react-router-dom';

const Maintenance: React.FC = () => {
  const plans = [
    {
      name: 'Essential Care',
      price: '₹1,999/yr',
      period: 'For 4 Cameras',
      features: [
        'Quarterly On-site Visits',
        'Lens Cleaning & Alignment',
        'Storage Integrity Check',
        'Power Supply Testing',
        '2 Emergency Breakdowns'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹3,999/yr',
      period: 'Up to 8 Cameras',
      features: [
        'Bi-Monthly On-site Visits',
        'Backup Optimization',
        'Remote App Maintenance',
        'Connector/Cable Refresh',
        '4 Emergency Breakdowns',
        'Priority Phone Support'
      ],
      popular: true
    },
    {
      name: 'Industrial',
      price: 'Contact Us',
      period: 'For IP Networks',
      features: [
        'Monthly Health Audit',
        'Server/NVR Maintenance',
        'Switch & PoE Check',
        'Cybersecurity Patching',
        'Unlimited Breakdowns',
        '24/7 Critical Response'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-5xl font-bold">Annual Maintenance <span className="text-sky-500">Contracts</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Never let your security go offline. Our AMC packages ensure your CCTV system in Kanpur and Unnao works flawlessly 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`glass p-8 rounded-3xl relative flex flex-col ${plan.popular ? 'border-sky-500 border-2 scale-105 shadow-[0_0_30px_rgba(0,210,255,0.1)]' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-sky-400">{plan.price}</p>
                  <p className="text-slate-500 text-sm">{plan.period}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/" 
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-sky-500 text-white hover:bg-sky-400 shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 glass p-10 rounded-2xl border-l-4 border-l-sky-500 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Why AMC is better than on-call?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-400">
              <p>On-call repairs can be expensive and take longer to dispatch. With AMC, you get priority scheduling and preventive care that stops failures before they happen.</p>
              <p>Vijay Electronics is the leading CCTV maintenance service in Kanpur, providing cost-effective security solutions for 100+ local businesses.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
