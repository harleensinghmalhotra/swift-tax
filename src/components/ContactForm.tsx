import { useState, useEffect } from 'react';
import { Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const inputBase = "w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-forest placeholder:text-gray-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all duration-300 shadow-sm";

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Info */}
          <div className="anim-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-forest" />
              <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-forest">Contact Us</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-forest leading-tight mb-8">
              Ready to maximize<br />
              <span className="text-vivid font-black bg-forest px-3 py-1 inline-block mt-2">your refund?</span>
            </h2>

            <p className="text-lg text-forest/60 leading-relaxed mb-12 max-w-md font-medium">
              Speak with a professional tax expert in Indianapolis today.
              We'll review your situation and find every dollar you're legally owed.
            </p>

            <div className="space-y-8">
              <a href="tel:3173221040" className="group flex items-center gap-6 p-2 -ml-2 rounded-2xl hover:bg-forest/5 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-vivid transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-forest/40 text-xs font-bold uppercase tracking-widest mb-1">Call Now</p>
                  <p className="text-forest text-xl font-black">(317) 322-1040</p>
                </div>
              </a>

              <div className="group flex items-center gap-6 p-2 -ml-2">
                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-forest/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Office</p>
                  <p className="text-forest text-lg font-bold">Indianapolis, IN</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-2 -ml-2 shadow-xl shadow-forest/5 bg-white rounded-3xl border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-vivid ml-2">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="pr-8 py-4">
                  <p className="text-forest font-black uppercase tracking-widest text-[10px] mb-1">Quick Response</p>
                  <p className="text-forest text-sm font-bold italic">"Average response time under 15 mins"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form / Thank You */}
          <div className="anim-fade-right min-h-[500px] flex flex-col justify-center">
            {submitted ? (
              <div className="bg-forest rounded-[2.5rem] p-12 lg:p-16 text-center shadow-2xl anim-fade-up relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vivid/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-vivid/10 rounded-full flex items-center justify-center text-vivid mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Request Received!</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    Thank you for reaching out. One of our Indianapolis tax experts will review your details
                    and contact you shortly.
                  </p>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-vivid animate-[bar-grow_20s_linear_both]" />
                  </div>
                  <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-vivid/40">
                    Auto-resetting in 20 seconds
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-[0_48px_120px_rgba(13,61,45,0.14)] relative z-10">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-forest/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-4">First Name</label>
                      <input type="text" placeholder="John" className={inputBase} required />
                    </div>
                    <div>
                      <label className="block text-forest/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Last Name</label>
                      <input type="text" placeholder="Doe" className={inputBase} required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-forest/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Email Address</label>
                    <input type="email" placeholder="john@example.com" className={inputBase} required />
                  </div>

                  <div>
                    <label className="block text-forest/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-4">How can we help?</label>
                    <div className="relative">
                      <select className={inputBase + " appearance-none cursor-pointer"}>
                        <option className="bg-white text-forest">Personal Tax Return</option>
                        <option className="bg-white text-forest">Business Filing</option>
                        <option className="bg-white text-forest">IRS Audit Help</option>
                        <option className="bg-white text-forest">Other Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-forest/20">
                        <Send className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-forest/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-4">Additional Message</label>
                    <textarea
                      placeholder="Tell us more about your situation..."
                      rows={4}
                      className={inputBase + " resize-none"}
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="group w-full bg-vivid text-forest py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-vivid/20 btn-shimmer">
                      Submit Request
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <p className="text-center text-forest/20 text-[10px] font-black uppercase tracking-widest">
                    Secure & Confidential IRS Partner
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
