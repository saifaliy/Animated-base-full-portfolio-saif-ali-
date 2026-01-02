import React, { useState, useRef, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Linkedin, Github, Send, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'AI Research Inquiry', 
    message: '' 
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  // Hardcoded EmailJS configuration (no environment variables needed)
  const SERVICE_ID = 'service_pacrsac';
  const TEMPLATE_ID = 'template_9sd87vo';
  const PUBLIC_KEY = 'XZBubXhTUB8TAYDcE';

  // Initialize EmailJS once
  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    if (!formRef.current) {
      setStatus('error');
      setErrorMessage('Form reference not found');
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      console.log('Sending email with configuration:', { 
        SERVICE_ID, 
        TEMPLATE_ID
      });
      
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result.text, 'Status:', result.status);
      setStatus('success');
      
      // Reset form data
      setFormData({ 
        name: '', 
        email: '', 
        subject: 'AI Research Inquiry', 
        message: '' 
      });
      
    } catch (error: any) {
      console.error('❌ Email sending failed:', error);
      setStatus('error');
      
      // Provide more specific error messages
      if (error.text) {
        setErrorMessage(`EmailJS Error: ${error.text}`);
      } else if (error.message) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage('Failed to send message. Please try again or contact directly at mrsaifie.512@gmail.com');
      }
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#030712] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Establish Neural Link" 
          subtitle="Connection Terminal" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-4xl font-black text-white mb-8">Direct Channels</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Ready to collaborate on global AI missions? All transmissions are routed via encrypted API directly to{' '}
              <span className="text-white font-bold underline decoration-blue-500 underline-offset-8 decoration-2">
                mrsaifie.512@gmail.com
              </span>.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:mrsaifie.512@gmail.com" 
                className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/40 transition-all duration-300 block bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 shadow-xl group-hover:shadow-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Direct Secure Port
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    mrsaifie.512@gmail.com
                  </div>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/saifaliy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/40 transition-all duration-300 block bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0077b5] transition-all duration-500">
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">
                    LinkedIn Network
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Connect on Professional Hub
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/saifaliy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/40 transition-all duration-300 block bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-all duration-500">
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">
                    GitHub Repository
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Explore Code Projects
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-12 p-8 glass rounded-[40px] border border-blue-500/10 bg-blue-600/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-blue-500 w-5 h-5" /> 
                API Transmission Security
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Transmissions are secured using industry-standard SSL encryption. 
                Your project data is handled with maximum privacy protocols via EmailJS.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>EmailJS • Secure Delivery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[50px] border border-white/10 relative overflow-hidden bg-black/40 shadow-2xl">
              {status === 'success' ? (
                <div className="py-16 md:py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 border border-green-500/30 shadow-2xl shadow-green-500/20">
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                    Transmission Sent
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-sm mx-auto">
                    Your inquiry has been successfully delivered to Saif's inbox. 
                    Expect a response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="mt-10 md:mt-12 px-8 md:px-10 py-3 md:py-4 bg-white/5 rounded-full text-blue-500 font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    New Transmission
                  </button>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">
                        Full Identity *
                      </label>
                      <input
                        required
                        name="user_name"
                        type="text"
                        placeholder="e.g. Saif Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 md:px-8 py-4 md:py-5 glass rounded-3xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-gray-600 text-white bg-white/[0.03]"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">
                        Email Terminal *
                      </label>
                      <input
                        required
                        name="user_email"
                        type="email"
                        placeholder="saifali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 md:px-8 py-4 md:py-5 glass rounded-3xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-gray-600 text-white bg-white/[0.03]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">
                      Subject Parameter
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-6 md:px-8 py-4 md:py-5 glass rounded-3xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white bg-white/[0.03] appearance-none cursor-pointer"
                    >
                      <option value="AI Research Inquiry" className="bg-[#030712]">AI Research Inquiry</option>
                      <option value="Enterprise Software Solution" className="bg-[#030712]">Enterprise Software Solution</option>
                      <option value="Custom Neural Systems" className="bg-[#030712]">Custom Neural Systems</option>
                      <option value="General Consultation" className="bg-[#030712]">General Consultation</option>
                      <option value="Data Science Solution" className="bg-[#030712]">Data Science Solution</option>
                      <option value="End to End AI Project" className="bg-[#030712]">End to End AI Project</option>
                      <option value="End to End Full stack Project" className="bg-[#030712]">End to End Full stack Project</option>
                      <option value="Other" className="bg-[#030712]">Other</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">
                      Project Synthesis *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Briefly describe your mission requirements, timeline, and any specific AI/Data Science needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 md:px-8 py-4 md:py-5 glass rounded-3xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none placeholder:text-gray-600 text-white bg-white/[0.03]"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-4 text-red-400 font-bold glass p-4 md:p-6 rounded-3xl border border-red-500/20 bg-red-500/5 animate-in slide-in-from-top-4 duration-300">
                      <AlertCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <div>
                        <div className="text-sm md:text-base">Transmission node failure</div>
                        <div className="text-xs text-red-300/80 mt-1">
                          {errorMessage || 'Check connection and retry.'}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-5 md:py-7 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] font-black text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none group/btn"
                  >
                    {status === 'sending' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-white">Broadcasting...</span>
                      </div>
                    ) : (
                      <>
                        <span className="text-white">Route Transmission</span>
                        <Send className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-xs text-gray-500 pt-4">
                    <p>Using secure EmailJS transmission • Delivered to mrsaifie.512@gmail.com</p>
                    <p className="text-[10px] mt-1">* Required fields</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;