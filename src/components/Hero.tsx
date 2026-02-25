import { Phone, ShieldCheck, Clock3, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="anim-fade-up">
            {/* Professional Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-vivid/50" />
              <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-vivid">
                Indianapolis' #1 Tax Service
              </p>
            </div>

            {/* Headline — High Contrast */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 text-cream">
              Get the refund<br />
              <span className="text-vivid">you deserve.</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed mb-12 max-w-xl text-cream/70 font-medium">
              Swift Tax Service has filed 5,000+ returns for Indianapolis families and businesses.
              Experience professional expertise tailored to your financial goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-black text-base transition-all bg-vivid text-forest hover:bg-white hover:text-forest active:scale-95 shadow-xl shadow-vivid/10">
                Get Started Free →
              </button>

              <a href="tel:3173221040"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-base transition-all border-2 border-cream/10 text-cream hover:bg-cream/5 active:scale-95">
                <Phone className="w-5 h-5 text-vivid" />
                (317) 322-1040
              </a>
            </div>

            {/* Trust strip — Cleaned & Refined */}
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-vivid text-vivid" />)}
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-cream/60">5.0 Google</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-cream/60">
                <ShieldCheck className="w-4 h-4 text-vivid" /> IRS Authorized
              </div>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-cream/60">
                <Clock3 className="w-4 h-4 text-vivid" /> 24hr Turnaround
              </div>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="anim-fade-right hidden lg:flex relative items-center justify-center">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/5 w-full max-w-md h-[520px]">
              <img
                src="/hero-portrait.jpg"
                alt="Professional Tax Advisor"
                className="w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent pointer-events-none" />
            </div>

            {/* Accent background shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-vivid/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-forest/50 blur-[120px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
