
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VoiceAgent from './components/VoiceAgent';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Repair from './pages/Repair';
import Maintenance from './pages/Maintenance';
import Admin from './pages/Admin';
import AIAgent from './pages/AIAgent';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/ai-agent" element={<AIAgent />} />
          </Routes>
        </main>
        <Footer />
        <VoiceAgent />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
