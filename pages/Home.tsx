
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const features = [
    { title: 'Expert Installation', icon: 'M12 4v16m8-8H4', desc: 'Precise CCTV setups for homes & businesses in Unnao & Kanpur.' },
    { title: 'Rapid Repair', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Troubleshooting and fixing security systems in Jajmau area.' },
    { title: 'AMC Packages', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'Worry-free annual maintenance contracts for total peace of mind.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="Security Background"
          />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-bold animate-pulse">
                #1 Security Experts in Kanpur & Unnao
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Safety, <br />
                <span className="text-sky-500">Our Priority.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Vijay Electronics is a trusted CCTV installation and repair service provider serving Unnao, Kanpur, Lucknow, Bangarmau, Safipur, and Nawabganj. We specialize in CCTV camera installation, DVR/NVR repair, wireless camera setup, and annual maintenance contracts. Our experienced technicians provide fast, affordable, and reliable service with 24/7 support. Contact us today for same-day CCTV installation and repair.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-sky-500/20">
                  Explore Services
                </a>
                <Link to="/maintenance" className="glass hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                  View AMC Plans
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full scale-75"></div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800"
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Professional Tech"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="py-20 border-y border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-sky-400">500+</p>
              <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-semibold">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-400">10+</p>
              <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-semibold">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-400">24/7</p>
              <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-semibold">Support</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-400">100%</p>
              <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-semibold">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Expertise</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Vijay Electronics is your one-stop service center for CCTV installation, inverter repair, stabilizer repair, LED TV repair, and general electronics repair across Unnao, Kanpur, Lucknow, and nearby areas. With experienced technicians and home service availability, we deliver fast diagnostics, affordable repairs, and quality installations. Call today for immediate assistance and honest pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-b-transparent hover:border-b-sky-500">
                <div className="w-16 h-16 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 text-sky-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{f.desc}</p>
                <Link to={`/${f.title.split(' ')[1].toLowerCase()}`} className="text-sky-400 font-bold hover:underline inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Get a Free Quote <br /><span className="text-sky-400">for Your Security</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Vijay Electronics has been providing expert CCTV camera installation, DVR/NVR repair, inverter repair, and electronics maintenance to homes and businesses in Unnao, Kanpur, Lucknow, Bangarmau, Safipur, and Nawabganj. We're known for transparent pricing, same-day service, and customer satisfaction. Book your appointment online or call us now.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 text-sky-500"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg></div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-slate-400">Maswanpur Road, Kanpur, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 text-sky-500"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg></div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-slate-400">+91 8090090051</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
