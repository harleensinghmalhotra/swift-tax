import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const inputBase = "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-vivid focus:ring-1 focus:ring-vivid transition-all duration-300";

  return (
    <section id="contact" className="py-24 bg-forest relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: Info */}
          <div className="anim-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-vivid" />
              <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-vivid">Contact Us</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
              Ready to maximize<br />
              <span className="text-vivid font-bold">your refund?</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-md">
              Speak with a professional tax expert in Indianapolis today.
              We'll review your situation and find every dollar you're legally owed.
            </p>

            <div className="space-y-8">
              <a href="tel:3173221040" className="group flex items-center gap-6 p-2 -ml-2 rounded-2xl hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-vivid transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call Now</p>
                  <p className="text-white text-xl font-extrabold">(317) 322-1040</p>
                </div>
              </a>

              <div className="group flex items-center gap-6 p-2 -ml-2">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-vivid transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Office</p>
                  <p className="text-white text-lg font-bold">Indianapolis, IN</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-2 -ml-2 shadow-2xl shadow-vivid/10 bg-white/5 rounded-3xl border border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-vivid flex items-center justify-center text-forest ml-2">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="pr-8 py-4">
                  <p className="text-vivid font-extrabold uppercase tracking-widest text-[10px] mb-1">Quick Response</p>
                  <p className="text-white text-sm font-bold italic">"Average response time under 15 mins"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="anim-fade-right">
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/10 shadow-2xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">First Name</label>
                    <input type="text" placeholder="John" className={inputBase} />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">Last Name</label>
                    <input type="text" placeholder="Doe" className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className={inputBase} />
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2 ml-4">How can we help?</label>
                  <select className={inputBase + " appearance-none"}>
                    <option className="bg-forest">Personal Tax Return</option>
                    <option className="bg-forest">Business Filing</option>
                    <option className="bg-forest">IRS Audit Help</option>
                    <option className="bg-forest">Other Inquiry</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-vivid text-forest py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-vivid/10">
                    Submit Request
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  Secure & Confidential IRS Partner
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
