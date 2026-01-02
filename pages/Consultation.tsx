import React, { useState, useRef, useEffect } from 'react';
// Added ShieldCheck to imports
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ArrowRight, ArrowLeft, Send, X, AlertCircle, Phone, Search, ChevronDown, Globe, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { COUNTRIES } from '../constants';
import emailjs from '@emailjs/browser';

const Consultation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Hardcoded EmailJS configuration
  const SERVICE_ID = 'service_pacrsac';
  const TEMPLATE_ID = 'template_9sd87vo';
  const PUBLIC_KEY = 'XZBubXhTUB8TAYDcE';

  // Real-time Date Logic
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthName = today.toLocaleString('default', { month: 'short' }).toUpperCase();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
  // Generate selectable days (only from today onwards)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(d => d >= currentDay);

  const times = [
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
    "04:00 PM", "04:30 PM", "05:00 PM", "06:00 PM", 
    "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
      console.log('EmailJS initialized successfully for consultation page');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    c.code.includes(countrySearch)
  );

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    if (!formData.phone) {
      setStatus('error');
      setErrorMessage('Phone number is required');
      return;
    }

    if (!formRef.current) {
      setStatus('error');
      setErrorMessage('Form reference not found');
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
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
      console.log('Sending consultation booking with configuration:', { 
        SERVICE_ID, 
        TEMPLATE_ID 
      });
      
      // Add hidden fields for the booking details
      const bookingDate = `${currentMonthName} ${selectedDate}, ${today.getFullYear()}`;
      const bookingTime = selectedTime || 'Not selected';
      const timeZone = "PKT (GMT+5)";
      const fullPhone = `${selectedCountry.code} ${formData.phone}`;
      const bookingSubject = `STRATEGIC BOOKING: ${formData.name} - ${bookingTime}`;

      // Create a temporary form element to hold all data
      const tempForm = formRef.current;
      
      // Add hidden input for booking details if they don't exist
      const addHiddenField = (name: string, value: string) => {
        let field = tempForm.querySelector(`[name="${name}"]`) as HTMLInputElement;
        if (!field) {
          field = document.createElement('input');
          field.type = 'hidden';
          field.name = name;
          field.value = value;
          tempForm.appendChild(field);
        } else {
          field.value = value;
        }
      };

      // Set all the values
      addHiddenField('booking_date', bookingDate);
      addHiddenField('booking_time', bookingTime);
      addHiddenField('time_zone', timeZone);
      addHiddenField('full_phone', fullPhone);
      addHiddenField('subject', bookingSubject);
      addHiddenField('country', selectedCountry.name);

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('✅ Consultation booking sent successfully:', result.text, 'Status:', result.status);
      setStatus('success');
      
    } catch (error: any) {
      console.error('❌ Consultation booking failed:', error);
      setStatus('error');
      
      // Provide more specific error messages
      if (error.text) {
        setErrorMessage(`EmailJS Error: ${error.text}`);
      } else if (error.message) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage('Failed to book consultation. Please try again or contact directly at mrsaifie.512@gmail.com');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-[#030712] bg-grid px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-500/40 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">MISSION SYNCED</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto">Your tactical consultation has been scheduled. Check your terminal for further instructions within 24 hours.</p>
          <button onClick={() => navigate('/')} className="px-16 py-7 bg-white text-black rounded-full font-black text-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Return to Core</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-[#030712] bg-grid px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Progress Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-in fade-in slide-in-from-top duration-700">
           <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 mb-4">
                 <Globe className="w-3.5 h-3.5 text-blue-500" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Synchronized with PKT (GMT+5)</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Strategic <span className="text-gradient">Session.</span></h1>
           </div>
           
           <div className="flex items-center gap-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all duration-500 border ${
                     step === s ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 
                     step > s ? 'bg-green-600/20 border-green-500/30 text-green-500' : 'glass border-white/10 text-gray-600'
                   }`}>
                      {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                   </div>
                   {s < 3 && <div className={`w-8 h-[2px] rounded-full ${step > s ? 'bg-green-600/30' : 'bg-white/5'}`}></div>}
                </div>
              ))}
           </div>
        </div>

        {/* Main Form Terminal */}
        <div className="glass rounded-[40px] md:rounded-[60px] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] relative bg-black/40 backdrop-blur-3xl">
          
          {/* Internal Header */}
          <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center">
                   {step === 1 && <CalendarIcon className="text-blue-500 w-6 h-6" />}
                   {step === 2 && <Clock className="text-purple-500 w-6 h-6" />}
                   {step === 3 && <User className="text-green-500 w-6 h-6" />}
                </div>
                <div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Step 0{step} Phase</div>
                   <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      {step === 1 && "Temporal Mapping"}
                      {step === 2 && "Sync Window Selection"}
                      {step === 3 && "Identity Parameters"}
                   </div>
                </div>
             </div>
             <button onClick={() => navigate('/')} className="p-4 glass rounded-2xl hover:bg-white/10 transition-all group border-white/5">
                <X className="w-6 h-6 text-gray-400 group-hover:rotate-90 transition-transform" />
             </button>
          </div>

          <div className="p-8 md:p-16">
             {/* STEP 1: DATE */}
             {step === 1 && (
               <div className="animate-in fade-in slide-in-from-right duration-500">
                  <div className="mb-12 flex items-center justify-between">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tight">Select Target Date</h3>
                     <span className="text-blue-500 font-black text-sm uppercase tracking-widest">{currentMonthName} {today.getFullYear()}</span>
                  </div>
                  
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 md:gap-5 mb-16">
                     {days.map((d) => (
                       <button 
                         key={d} 
                         onClick={() => setSelectedDate(d)}
                         className={`aspect-square rounded-2xl md:rounded-3xl flex flex-col items-center justify-center border transition-all duration-300 relative group ${
                           selectedDate === d ? 'bg-blue-600 border-blue-500 scale-105 shadow-[0_20px_40px_rgba(59,130,246,0.3)]' : 'glass border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5'
                         }`}
                       >
                         <span className={`text-[8px] md:text-[10px] font-black uppercase mb-1 ${selectedDate === d ? 'text-white/70' : 'text-gray-500'}`}>{currentMonthName}</span>
                         <span className={`text-xl md:text-3xl font-black ${selectedDate === d ? 'text-white' : 'text-white/80'}`}>{d}</span>
                         {d === currentDay && <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>}
                       </button>
                     ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      disabled={!selectedDate}
                      onClick={() => setStep(2)}
                      className="px-12 py-6 bg-white text-black rounded-full font-black text-lg md:text-xl flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all disabled:opacity-20 shadow-xl group/btn"
                    >
                      Continue <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
               </div>
             )}

             {/* STEP 2: TIME */}
             {step === 2 && (
               <div className="animate-in fade-in slide-in-from-right duration-500">
                  <div className="mb-12 flex items-center justify-between">
                     <h3 className="text-2xl font-black text-white uppercase tracking-tight">Available Time Portals</h3>
                     <div className="flex items-center gap-2 text-purple-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">GMT +5</span>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                     {times.map((t) => (
                       <button 
                         key={t}
                         onClick={() => setSelectedTime(t)}
                         className={`py-6 md:py-8 rounded-3xl border transition-all font-black text-base md:text-lg ${
                           selectedTime === t ? 'bg-purple-600 border-purple-500 shadow-xl scale-105 text-white' : 'glass border-white/10 hover:border-purple-500/50 hover:bg-purple-600/5 text-gray-400'
                         }`}
                       >
                         {t}
                       </button>
                     ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button onClick={() => setStep(1)} className="flex items-center gap-3 text-gray-500 font-black uppercase text-xs tracking-widest hover:text-white transition-all">
                       <ArrowLeft className="w-5 h-5" /> Back
                    </button>
                    <button 
                      disabled={!selectedTime}
                      onClick={() => setStep(3)}
                      className="px-12 py-6 bg-white text-black rounded-full font-black text-lg md:text-xl flex items-center gap-4 hover:bg-purple-600 hover:text-white transition-all disabled:opacity-20 shadow-xl group/btn"
                    >
                      Finalize Specs <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
               </div>
             )}

             {/* STEP 3: CONTACT */}
             {step === 3 && (
               <div className="animate-in fade-in slide-in-from-right duration-500">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-12">Mission Identification</h3>
                  
                  <form ref={formRef} onSubmit={handleFinalSubmit} className="space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                           <input 
                             required 
                             type="text" 
                             name="user_name"
                             value={formData.name} 
                             onChange={(e)=>setFormData({...formData, name: e.target.value})} 
                             className="w-full px-8 py-6 bg-white/[0.03] rounded-3xl border border-white/10 focus:border-blue-500 outline-none text-xl placeholder:text-gray-700 text-white transition-all" 
                             placeholder="Full Identity Name" 
                           />
                           <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black uppercase text-white scale-0 group-focus-within:scale-100 transition-transform">Full Name</div>
                        </div>
                        <div className="relative group">
                           <input 
                             required 
                             type="email" 
                             name="user_email"
                             value={formData.email} 
                             onChange={(e)=>setFormData({...formData, email: e.target.value})} 
                             className="w-full px-8 py-6 bg-white/[0.03] rounded-3xl border border-white/10 focus:border-blue-500 outline-none text-xl placeholder:text-gray-700 text-white transition-all" 
                             placeholder="Strategic Email Port" 
                           />
                           <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black uppercase text-white scale-0 group-focus-within:scale-100 transition-transform">Email</div>
                        </div>
                     </div>

                     {/* Phone Selector */}
                     <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-6" ref={dropdownRef}>
                           <div className="relative sm:w-1/3">
                              <button 
                                 type="button" 
                                 onClick={() => setIsCountryOpen(!isCountryOpen)} 
                                 className="w-full h-[76px] px-8 glass rounded-3xl border border-white/10 flex items-center justify-between text-xl font-black hover:border-blue-500 transition-all text-white"
                              >
                                 <span className="flex items-center gap-3">
                                    <span>{selectedCountry.flag}</span>
                                    <span>{selectedCountry.code}</span>
                                 </span>
                                 <ChevronDown className={`w-5 h-5 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {isCountryOpen && (
                                <div className="absolute top-[85px] left-0 w-full sm:w-[320px] glass rounded-3xl border border-white/10 overflow-hidden z-50 bg-[#030712]/98 backdrop-blur-3xl shadow-2xl animate-in fade-in slide-in-from-top-2">
                                   <div className="p-5 border-b border-white/5 flex items-center gap-4 bg-white/5">
                                      <Search className="w-4 h-4 text-gray-500" />
                                      <input 
                                         autoFocus
                                         type="text" 
                                         placeholder="Filter Node..." 
                                         className="bg-transparent border-none outline-none text-sm font-black w-full placeholder:text-gray-700 text-white"
                                         value={countrySearch}
                                         onChange={(e) => setCountrySearch(e.target.value)}
                                      />
                                   </div>
                                   <div className="max-h-[300px] overflow-y-auto py-2">
                                      {filteredCountries.map((c, i) => (
                                        <button 
                                           key={i} 
                                           type="button" 
                                           onClick={() => { setSelectedCountry(c); setIsCountryOpen(false); setCountrySearch(''); }} 
                                           className="w-full px-8 py-4 hover:bg-white/5 flex items-center justify-between font-bold text-base group transition-all"
                                        >
                                           <div className="flex items-center gap-4">
                                              <span className="text-xl">{c.flag}</span>
                                              <span className="text-gray-400 group-hover:text-white transition-colors">{c.name}</span>
                                           </div>
                                           <span className="text-blue-500 font-black text-sm">{c.code}</span>
                                        </button>
                                      ))}
                                   </div>
                                </div>
                              )}
                           </div>
                           <input 
                              required 
                              type="tel" 
                              name="phone"
                              value={formData.phone} 
                              onChange={(e)=>setFormData({...formData, phone: e.target.value})} 
                              className="flex-grow h-[76px] px-8 bg-white/[0.03] rounded-3xl border border-white/10 focus:border-blue-500 outline-none text-xl placeholder:text-gray-700 text-white transition-all" 
                              placeholder="Phone Number" 
                           />
                        </div>
                     </div>

                     <div className="relative group">
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message} 
                          onChange={(e)=>setFormData({...formData, message: e.target.value})} 
                          className="w-full px-8 py-6 bg-white/[0.03] rounded-3xl border border-white/10 focus:border-blue-500 outline-none resize-none text-xl placeholder:text-gray-700 text-white transition-all" 
                          placeholder="Mission Parameters & Project Intent..."
                        ></textarea>
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black uppercase text-white scale-0 group-focus-within:scale-100 transition-transform">Brief</div>
                     </div>

                     {/* Hidden fields for EmailJS */}
                     <input type="hidden" name="booking_date" value={selectedDate ? `${currentMonthName} ${selectedDate}, ${today.getFullYear()}` : ''} />
                     <input type="hidden" name="booking_time" value={selectedTime || ''} />
                     <input type="hidden" name="time_zone" value="PKT (GMT+5)" />
                     <input type="hidden" name="full_phone" value={formData.phone ? `${selectedCountry.code} ${formData.phone}` : ''} />
                     <input type="hidden" name="subject" value={`STRATEGIC BOOKING: ${formData.name} - ${selectedTime}`} />
                     <input type="hidden" name="country" value={selectedCountry.name} />

                     {status === 'error' && (
                       <div className="flex items-center gap-4 text-red-400 font-bold glass p-6 rounded-3xl border border-red-500/20 bg-red-500/5">
                         <AlertCircle className="w-5 h-5" />
                         <div>
                           <div className="text-sm md:text-base">Sync failure</div>
                           <div className="text-xs text-red-300/80 mt-1">
                             {errorMessage || 'Verify data node connections.'}
                           </div>
                         </div>
                       </div>
                     )}

                     <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-6">
                        <button type="button" onClick={() => setStep(2)} className="flex items-center gap-3 text-gray-500 font-black uppercase text-xs tracking-widest hover:text-white transition-all">
                           <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                        <button 
                          disabled={status === 'submitting'}
                          className="w-full md:w-auto px-16 py-8 bg-blue-600 text-white rounded-full font-black text-2xl flex items-center justify-center gap-6 hover:bg-blue-700 transition-all shadow-[0_30px_60px_rgba(59,130,246,0.4)] disabled:opacity-30 group/btn"
                        >
                          {status === 'submitting' ? (
                             <div className="flex items-center gap-4">
                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                <span>Syncing...</span>
                             </div>
                          ) : (
                            <><Send className="w-7 h-7 group-hover/btn:scale-110 transition-transform" /> Establish Link</>
                          )}
                        </button>
                     </div>
                  </form>
               </div>
             )}
          </div>

          {/* Context Footer */}
          <div className="px-8 md:px-16 py-8 bg-white/[0.03] border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-gray-600">
                <ShieldCheck className="w-3 h-3 text-green-500" /> Neural Port Encrypted via EmailJS
             </div>
             <div className="text-[9px] font-black uppercase tracking-widest text-gray-600">
                Latency: 18ms • Protocol: SECURE_SYNC_V3
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;