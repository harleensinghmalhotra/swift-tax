import { FileText, Users, MapPin, Calculator, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';

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

        {/* Sub-services CTA strip */}
        <div className="rounded-3xl p-1 lg:p-1.5 bg-forest/5">
          <div className="bg-forest rounded-[2rem] p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl shadow-forest/20 relative overflow-hidden">
            {/* Abstract background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-vivid/10 blur-[100px] pointer-events-none" />

            <div className="anim-fade-up max-w-lg">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-vivid/80 mb-3 block">More Services</span>
              <h3 className="text-3xl font-extrabold text-white mb-4">Not sure where to start?</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                From bookkeeping to audit protection, our team of experts in Indianapolis is
                ready to handle your unique requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {subServices.map(s => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-vivid mt-1.5" />
                    <div>
                      <p className="text-xs font-bold text-white mb-0.5">{s.title}</p>
                      <p className="text-[10px] text-white/40">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer bg-white text-forest px-10 py-5 rounded-2xl font-extrabold hover:scale-105 active:scale-95 shadow-xl transition-all">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
