import { FileText, Users, Calculator, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    num: '01',
    tag: 'Individual Filing',
    title: 'File on your own — with expert backup',
    desc: 'Guided step-by-step filing with a dedicated expert available whenever you need one.',
    features: ['Federal & State Filing', 'Deduction Optimizer', 'E-File — Fast Refunds'],
    icon: <FileText className="w-6 h-6" />,
    featured: false
  },
  {
    num: '02',
    tag: 'Full Service',
    title: 'Stay home. We handle everything.',
    desc: 'A dedicated tax pro completes your return from start to finish — you just review and sign.',
    features: ['LLC & S-Corp Returns', 'Quarterly Estimates', 'Payroll Tax Support'],
    icon: <Calculator className="w-6 h-6" />,
    badge: 'Most Popular',
    featured: true
  },
  {
    num: '03',
    tag: 'In-Person Appointment',
    title: 'Face-to-face with a local expert',
    desc: 'Come into our Indianapolis office and get personalized attention from a seasoned pro.',
    features: ['Year-Round Support', 'Audit Protection', 'IRS Representation'],
    icon: <Users className="w-6 h-6" />,
    featured: false
  }
];

const subServices = [
  { title: 'Tax Planning', desc: 'Year-round strategies to lower your liability.' },
  { title: 'IRS Representation', desc: 'We handle audits and notifications on your behalf.' },
  { title: 'Bookkeeping', desc: 'Precise financial record maintenance for small businesses.' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-vivid" />
            <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-vivid">Professional Services</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest leading-tight max-w-2xl tracking-tight">
            Comprehensive tax solutions<br />
            <span className="text-vivid/80 font-bold">for every situation.</span>
          </h2>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((p, i) => (
            <div key={i}
              className={`card-hover rounded-[2.5rem] flex flex-col relative overflow-hidden group shadow-card anim-fade-up`}
              style={{
                background: p.featured ? '#003512' : '#fff',
                border: p.featured ? 'none' : '1px solid #E5E2D4',
                animationDelay: `${i * 0.1}s`
              }}>

              {/* Top Accent line */}
              <div className={`h-1.5 w-full transition-all duration-300 group-hover:h-2 ${p.featured ? 'bg-vivid' : 'bg-forest'
                }`} />

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                {/* Badge if exists */}
                {p.badge && (
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-vivid text-forest uppercase">
                      <Sparkles className="w-3 h-3" />
                      {p.badge}
                    </span>
                  </div>
                )}

                {/* Step + Tag badge */}
                <div className="flex items-center gap-3 mb-8">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold transition-transform duration-300 group-hover:scale-110 ${p.featured ? 'bg-vivid text-forest' : 'bg-forest text-white'
                    }`}>
                    {p.num}
                  </span>
                  <span className={`text-[11px] font-extrabold tracking-[0.2em] uppercase ${p.featured ? 'text-vivid' : 'text-forest'
                    }`}>
                    {p.tag}
                  </span>
                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${p.featured ? 'bg-white/10 text-vivid' : 'bg-forest/5 text-forest'
                  }`}>
                  {p.icon}
                </div>

                <h3 className={`text-2xl font-extrabold mb-4 leading-tight ${p.featured ? 'text-white' : 'text-forest'
                  }`}>
                  {p.title}
                </h3>

                <p className={`text-sm mb-8 leading-relaxed ${p.featured ? 'text-white/60' : 'text-ink-soft/70'
                  }`}>
                  {p.desc}
                </p>

                <div className="space-y-3.5 mb-10 mt-auto">
                  {p.features.map(f => (
                    <div key={f} className="flex items-center gap-3 group/item transition-transform duration-200 hover:translate-x-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.featured ? 'bg-vivid/20 text-vivid' : 'bg-forest/10 text-forest'
                        }`}>
                        <ShieldCheck className="w-3 h-3" />
                      </div>
                      <span className={`text-sm font-bold ${p.featured ? 'text-white/80' : 'text-ink-soft'
                        }`}>{f}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95 ${p.featured
                  ? 'bg-vivid text-forest hover:bg-white hover:text-forest'
                  : 'bg-forest text-white hover:bg-vivid hover:text-forest'
                  }`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-services CTA strip — Professional Overhaul */}
        <div className="mt-24 p-1 rounded-[3rem] bg-forest/5 shadow-2xl shadow-forest/5">
          <div className="bg-forest rounded-[2.8rem] p-10 lg:p-16 flex flex-col lg:row-span-2 lg:flex-row items-center justify-between gap-12 relative overflow-hidden text-center lg:text-left">
            {/* High-end decorative background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-vivid/10 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-vivid/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="anim-fade-up max-w-2xl relative z-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="h-px w-6 bg-vivid" />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-vivid">More Services</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Not sure where<br className="hidden lg:block" />
                <span className="text-vivid">to start?</span>
              </h3>

              <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-12 max-w-xl font-medium">
                From bookkeeping to audit protection, our team of experts in Indianapolis is
                ready to handle your unique requirements with precision and care.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
                {subServices.map(s => (
                  <div key={s.title} className="group/item transition-all duration-300">
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                      <div className="w-2 h-2 rounded-full bg-vivid shadow-[0_0_12px_rgba(204,255,0,0.6)]" />
                      <div>
                        <p className="text-sm font-black text-white mb-1 group-hover/item:text-vivid transition-colors uppercase tracking-wider">{s.title}</p>
                        <p className="text-xs text-white/50 leading-relaxed font-medium">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 relative z-10 w-full lg:w-auto">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer w-full lg:w-auto bg-white text-forest px-12 py-6 rounded-[2rem] font-black text-lg hover:scale-105 active:scale-95 shadow-2xl transition-all shadow-black/20">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
