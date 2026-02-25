import { Phone, ShieldCheck, Clock3, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-20 lg:pt-32 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="anim-fade-up">
            {/* Badge — subtle */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-vivid" />
              <span className="text-xs font-bold tracking-widest uppercase text-cream/70">
                Indianapolis' #1 Tax Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-cream">
              Get the refund<br />
              <span className="text-vivid">you deserve.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-xl text-cream/60">
              Swift Tax Service has filed 5,000+ returns for Indianapolis families and businesses.
              Experience professional expertise tailored to your financial goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold text-base transition-all bg-vivid text-forest hover:bg-vivid-hover active:scale-95 group shadow-lg shadow-vivid/20">
                Get Started Free →
              </button>

              <a href="tel:3173221040"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all border border-cream/20 text-cream hover:bg-cream/5 active:scale-95">
                <Phone className="w-5 h-5 text-vivid" />
                (317) 322-1040
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-8 flex-wrap opacity-50">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F0C040] text-transparent" />)}
                </div>
                <span className="text-xs font-semibold">5.0 Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" /> IRS Authorized
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <Clock3 className="w-4 h-4" /> 24hr Turnaround
              </div>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="anim-fade-right hidden lg:block relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Professional Tax Advisor"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Simple accent background shape */}
            <div className="absolute -inset-4 bg-vivid/10 blur-3xl rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
