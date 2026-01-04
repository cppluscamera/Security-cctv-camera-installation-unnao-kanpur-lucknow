
import React, { useEffect } from 'react';

const VoiceAgent: React.FC = () => {
  useEffect(() => {
    // Prevent repeating the greeting multiple times in one session
    const hasSpokenThisSession = sessionStorage.getItem('has_greeted');
    if (hasSpokenThisSession) return;

    const greeting = "Namaste! Welcome to Vijay Electronics, your trusted partner for premium security solutions in Kanpur and Unnao. We specialize in world-class CCTV installation, professional repairs, and comprehensive maintenance packages for brands like CP Plus and Hik-vision. Our expert technicians are dedicated to keeping your home and business safe with 24/7 security excellence. Explore our services or speak with our AI agent to learn more about how we can protect what matters most to you.";

    const speak = () => {
      if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(greeting);
        utterance.rate = 0.85; // Slightly slower for clarity
        utterance.pitch = 1.0;

        // Find an Indian Female voice
        const voices = window.speechSynthesis.getVoices();

        // Priority: 1. Google English (India) Female, 2. Microsoft Heera (India), 3. Any en-IN/hi-IN voice
        const indianVoice = voices.find(v =>
          (v.lang === 'en-IN' || v.lang === 'hi-IN') &&
          (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('heera'))
        ) || voices.find(v => v.lang.includes('IN'));

        if (indianVoice) {
          utterance.voice = indianVoice;
          console.log("Selected Voice:", indianVoice.name);
        } else {
          // Fallback to a clear female voice if Indian not found
          const fallbackVoice = voices.find(v => v.name.toLowerCase().includes('female') && v.lang.includes('en'));
          if (fallbackVoice) utterance.voice = fallbackVoice;
        }

        window.speechSynthesis.speak(utterance);
        sessionStorage.setItem('has_greeted', 'true');
      }
    };

    // Chrome and other browsers require user interaction to play audio.
    // We try to trigger it after a short delay, but it might only work if the user has clicked something.
    const timer = setTimeout(() => {
      speak();
    }, 2000);

    // Also try to speak on the first click if speech was blocked
    const handleFirstClick = () => {
      speak();
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleFirstClick);
    };
  }, []);

  return null;
};

export default VoiceAgent;
