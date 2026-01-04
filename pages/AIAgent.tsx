
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    text: string;
    sender: 'ai' | 'user';
    timestamp: Date;
}

const KNOWLEDGE_BASE = {
    greetings: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    services: ["installation", "setup", "repair", "service", "maintenance", "amc", "fixing"],
    products: ["cctv", "camera", "dvr", "nvr", "ip camera", "wireless camera", "wifi camera", "dome", "bullet"],
    brands: ["cp plus", "hikvision", "dahua", "sony", "honeywell"],
    locations: ["unnao", "kanpur", "lucknow", "bangarmau", "raibareli", "safipur", "nawabganj", "jajmau", "shuklaganj", "raebareli", "near me"],
    pricing: ["price", "cost", "charge", "rate", "fees", "how much", "budget"],
    contact: ["phone", "mobile", "number", "call", "address", "location", "office", "shop"],
    about: ["who are you", "about us", "experience", "company"]
};

const AIAgent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Namaste! I am the Vijay Electronics Expert AI. I can guide you through our professional CCTV installations, expert repair services, and premium AMC packages. What security solution are you looking for today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.0;

            const voices = window.speechSynthesis.getVoices();
            const indianVoice = voices.find(v =>
                (v.lang === 'en-IN' || v.lang === 'hi-IN') &&
                (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('heera'))
            ) || voices.find(v => v.lang.includes('IN'));

            if (indianVoice) utterance.voice = indianVoice;
            window.speechSynthesis.speak(utterance);
        }
    };

    const getAIResponse = (input: string): string => {
        const low = input.toLowerCase();

        if (KNOWLEDGE_BASE.greetings.some(g => low.includes(g))) {
            return "Namaste! How can Vijay Electronics assist you with your security requirements today? We offer complete solutions from home security to large scale industrial surveillance.";
        }

        if (KNOWLEDGE_BASE.services.some(s => low.includes(s))) {
            if (low.includes('amc') || low.includes('maintenance')) {
                return "Our Annual Maintenance Contracts (AMC) are a bestseller! We ensure your cameras never stop recording. Packages start at ₹2,999 per year and include quarterly preventive checkups and priority service.";
            }
            return "Vijay Electronics provides professional on-site installation and repair. Our technicians are experts in structured cabling, NVR/DVR configuration, and remote mobile viewing setup.";
        }

        if (KNOWLEDGE_BASE.products.some(p => low.includes(p))) {
            return "We stock the latest 5MP and 8MP 4K cameras, Color-Vu technology for night vision, and smart AI cameras with human detection. We primarily recommend CP Plus and Hikvision for their reliability.";
        }

        if (KNOWLEDGE_BASE.brands.some(b => low.includes(b))) {
            return "We are authorized dealers for top brands like CP Plus and Hikvision, ensuring you get genuine products and reliable performance.";
        }

        if (KNOWLEDGE_BASE.locations.some(l => low.includes(l))) {
            const matchedLocations = KNOWLEDGE_BASE.locations.filter(word => low.includes(word) && word !== 'near me');
            if (low.includes('near me')) {
                return "Vijay Electronics is the top-rated CCTV service provider near you! We provide doorstep installation and repair in Unnao, Kanpur, Lucknow, Bangarmau, Safipur, Nawabganj, and Raebareli. Our technician can usually reach your location within 2-4 hours.";
            }
            if (matchedLocations.length > 0) {
                return `Yes, we provide expert CCTV installation and repair in ${matchedLocations.join(', ')} and all surrounding areas. Our local team is ready to assist you today!`;
            }
            return "We provide on-site services in Unnao, Kanpur, Lucknow, and all nearby locations including Bangarmau, Safipur, and Raebareli.";
        }

        if (KNOWLEDGE_BASE.pricing.some(p => low.includes(p))) {
            return "A standard 4-camera Full HD setup with 1TB storage starts around ₹12,500. Individual camera installation starts at ₹500. For a precise quote based on your site layout, please call us at 8090090051.";
        }

        if (KNOWLEDGE_BASE.contact.some(c => low.includes(c))) {
            return "You can reach our expert Vijay directly at 8090090051. Our shop is located at 9 Purani Bazar, Unnao. We are ready to help you from 9 AM to 8 PM daily.";
        }

        if (KNOWLEDGE_BASE.about.some(a => low.includes(a))) {
            return "Vijay Electronics has been the leading security provider in Unnao for years. We've completed over 500 projects, ranging from small shops to large warehouses and schools.";
        }

        return "I want to make sure you get the most accurate advice. For specific technical queries or project planning, I recommend speaking with our lead engineer Vijay at 8090090051. Would you like me to tell you more about our AMC packages?";
    };

    const handleSend = async () => {
        const text = inputText.trim();
        if (!text) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        setTimeout(() => {
            const responseText = getAIResponse(text);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
            speak(responseText);
        }, 800);
    };

    const startListening = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const Recognition = (window as any).webkitSpeechRecognition || (window as any).Recognition;
            const recognition = new Recognition();
            recognition.lang = 'en-IN';
            recognition.onstart = () => setIsListening(true);
            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInputText(transcript);
                setIsListening(false);
            };
            recognition.onerror = () => setIsListening(false);
            recognition.onend = () => setIsListening(false);
            recognition.start();
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-slate-950 text-white overflow-hidden flex flex-col">
            <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col px-4 relative z-10">
                <div className="flex items-center space-x-4 mb-8 p-6 glass rounded-3xl border border-sky-500/20">
                    <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                            Vijay Expert AI
                        </h1>
                        <p className="text-slate-400 text-sm flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                            Online | Professional Consultation
                        </p>
                    </div>
                </div>

                <div className="flex-grow glass rounded-3xl border border-slate-800/50 flex flex-col overflow-hidden mb-6 shadow-2xl relative">
                    <div className="flex-grow overflow-y-auto p-6 space-y-4">
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[85%] p-4 rounded-2xl ${m.sender === 'user'
                                    ? 'bg-sky-500 text-white rounded-tr-none shadow-lg'
                                    : 'bg-slate-800/80 text-slate-100 rounded-tl-none border border-slate-700 backdrop-blur-sm'
                                    }`}>
                                    <p className="leading-relaxed whitespace-pre-line">{m.text}</p>
                                    <span className="text-[10px] opacity-50 mt-2 block">
                                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none border border-slate-700">
                                    <div className="flex space-x-1">
                                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-slate-900/80 border-t border-slate-800/50 backdrop-blur-md">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={startListening}
                                className={`p-3 rounded-xl transition-all ${isListening ? 'bg-red-500 animate-pulse text-white' : 'bg-slate-800 text-slate-400 hover:text-sky-400 hover:bg-slate-700'
                                    }`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about CCTV, Repairs, or AMC packages..."
                                className="flex-grow bg-slate-800/30 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-white"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputText.trim()}
                                className="bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white p-3 rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pb-10 opacity-70 hover:opacity-100 transition-opacity">
                    {["Installation Price", "AMC Packages", "Repair Service", "Contact Vijay", "Service Areas"].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => { setInputText(tag); }}
                            className="px-4 py-2 bg-slate-800/50 border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-sky-400 rounded-full text-xs transition-all"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIAgent;
