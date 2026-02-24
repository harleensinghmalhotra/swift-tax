import { ArrowRight, Phone, ShieldCheck, Clock3, Star } from 'lucide-react';

const stats = [
  { val: '$3,120+', label: 'Avg. Refund', featured: true },
  { val: '5,000+', label: 'Returns Filed', featured: false },
  { val: '99%', label: 'Accuracy Rate', featured: false },
  { val: '15+', label: 'Years Experience', featured: false },
];

export default function Hero() {
  return (
    <section style={{ background: '#003512' }} className="relative overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-0 relative z-10">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 items-end">

          {/* ── Left content ── */}
          <div className="pb-20">
            {/* Badge — animated in + pulse ring */}
            <div
              className="badge-ring inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 anim-fade-up"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">
                Indianapolis' #1 Tax Service
              </span>
            </div>

            {/* Headline — staggered */}
            <h1 className="anim-fade-up delay-1 text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: '#F6F4E9' }}>
              Get the refund<br />
              <span style={{ color: '#C9A84C' }}>you deserve.</span>
            </h1>

            <p className="anim-fade-up delay-2 text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(246,244,233,0.60)' }}>
              Swift Tax Service has filed 5,000+ returns for Indianapolis families and businesses.
              We fight for every dollar — accuracy guaranteed.
            </p>

            {/* CTAs */}
            <div className="anim-fade-up delay-3 flex flex-col sm:flex-row gap-3 mb-14">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold text-base transition-all duration-250 hover:scale-105 active:scale-95 group"
                style={{ background: '#C9A84C', color: '#003512', boxShadow: '0 6px 24px rgba(201,168,76,0.35)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 10px 32px rgba(201,168,76,0.50)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 6px 24px rgba(201,168,76,0.35)';
                }}>
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a href="tel:3173221040"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ border: '1.5px solid rgba(246,244,233,0.22)', color: '#F6F4E9' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(246,244,233,0.07)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                <Phone className="w-5 h-5" />
                (317) 322-1040
              </a>
            </div>

            {/* Trust strip */}
            <div className="anim-fade-up delay-4 flex items-center gap-7 flex-wrap">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
                <span className="text-xs font-semibold" style={{ color: 'rgba(246,244,233,0.45)' }}>5.0 · Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'rgba(246,244,233,0.45)' }}>
                <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />IRS Authorized
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'rgba(246,244,233,0.45)' }}>
                <Clock3 className="w-4 h-4 text-[#C9A84C]" />24hr Turnaround
              </div>
            </div>
          </div>

          {/* ── Right: floating stat cards ── */}
          <div className="hidden lg:grid grid-cols-2 gap-3 self-end pb-0 anim-fade-right delay-2">
            {stats.map((s, i) => (
              <div key={i}
                className={`stat-card rounded-2xl p-6 flex flex-col justify-end cursor-default ${i > 0 ? `anim-float float-delay-${i}` : ''}`}
                style={s.featured
                  ? {
                    background: '#C9A84C',
                    gridColumn: 'span 2',
                    boxShadow: '0 12px 36px rgba(201,168,76,0.35)',
                  }
                  : {
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    backdropFilter: 'blur(8px)',
                  }}>
                <p className="text-4xl font-extrabold mb-1" style={{ color: s.featured ? '#003512' : '#F6F4E9' }}>
                  {s.val}
                </p>
                <p className="text-xs font-bold tracking-[0.15em] uppercase"
                  style={{ color: s.featured ? 'rgba(0,53,18,0.65)' : 'rgba(246,244,233,0.45)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-14" style={{ background: 'linear-gradient(to bottom, #003512, #F6F4E9)' }} />
    </section>
  );
}
