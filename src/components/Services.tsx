import { FileText, Building2, ShieldCheck, LineChart, FileEdit, ArrowRight, Check, Sparkles } from 'lucide-react';

const plans = [
  {
    num: '01', tag: 'INDIVIDUAL FILING',
    title: 'File on your own — with expert backup',
    desc: 'Guided step-by-step filing with a dedicated expert available whenever you need one.',
    features: ['Federal & State Filing', 'Deduction Optimizer', 'E-File — Fast Refunds'],
    icon: FileText, badge: null,
  },
  {
    num: '02', tag: 'FULL SERVICE',
    title: 'Stay home. We handle everything.',
    desc: 'A dedicated tax pro completes your return from start to finish — you just review and sign.',
    features: ['LLC & S-Corp Returns', 'Quarterly Estimates', 'Payroll Tax Support'],
    icon: Building2, featured: true, badge: 'Most Popular',
  },
  {
    num: '03', tag: 'IN-PERSON APPOINTMENT',
    title: 'Face-to-face with a local expert',
    desc: 'Come into our Indianapolis office and get personalized attention from a seasoned pro.',
    features: ['Year-Round Support', 'Audit Protection', 'IRS Representation'],
    icon: ShieldCheck, badge: null,
  },
];

const extras = [
  { icon: LineChart, title: 'Tax Planning', desc: 'Year-round strategy to keep more of your money.' },
  { icon: ShieldCheck, title: 'IRS Representation', desc: 'We handle audits and IRS notices on your behalf.' },
  { icon: FileEdit, title: 'Amended Returns', desc: 'Fix past filings and recover missed refunds.' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#F6F4E9' }} className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="mb-14 anim-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="bar-grow h-px w-8 bg-[#003512]" />
            <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#003512]">Our Services</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003512] leading-tight max-w-2xl">
            File your way — every option covered
          </h2>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((p, i) => (
            <div key={i}
              className={`card-hover rounded-3xl flex flex-col relative overflow-hidden group anim-fade-up delay-${i + 1}`}
              style={p.featured
                ? { background: '#003512', boxShadow: '0 20px 60px rgba(0,53,18,0.32)' }
                : { background: '#fff', border: '1px solid #E5E2D4', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>

              {/* Accent bar — grows on hover via group */}
              <div className="h-1 w-full rounded-t-3xl transition-all duration-300 group-hover:h-1.5"
                style={{ background: p.featured ? '#C9A84C' : '#003512' }} />

              {/* Badge */}
              {p.badge && (
                <div className="absolute top-5 right-5">
                  <span className="badge-ring inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider"
                    style={{ background: '#C9A84C', color: '#003512' }}>
                    <Sparkles className="w-2.5 h-2.5" />
                    {p.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Num + Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-extrabold leading-none transition-all duration-300 group-hover:scale-110 origin-left"
                    style={{ color: p.featured ? 'rgba(201,168,76,0.25)' : 'rgba(0,53,18,0.12)' }}>
                    {p.num}
                  </span>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase border-b pb-0.5"
                    style={{
                      color: p.featured ? '#C9A84C' : '#003512',
                      borderColor: p.featured ? 'rgba(201,168,76,0.3)' : 'rgba(0,53,18,0.2)',
                    }}>
                    {p.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="icon-box w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={p.featured ? { background: 'rgba(201,168,76,0.15)' } : { background: '#F0EDD8' }}>
                  <p.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: p.featured ? '#C9A84C' : '#003512' }} />
                </div>

                {/* Text */}
                <h3 className="text-xl font-extrabold leading-snug mb-3"
                  style={{ color: p.featured ? '#F6F4E9' : '#003512' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-7"
                  style={{ color: p.featured ? 'rgba(246,244,233,0.52)' : '#6E6E6E' }}>
                  {p.desc}
                </p>

                {/* Features — slide on hover */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="check-item flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={p.featured ? { background: 'rgba(201,168,76,0.18)' } : { background: '#F0EDD8' }}>
                        <Check className="w-3 h-3" style={{ color: p.featured ? '#C9A84C' : '#003512' }} />
                      </div>
                      <span className="text-sm font-semibold"
                        style={{ color: p.featured ? 'rgba(246,244,233,0.80)' : '#262626' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <div className="mt-auto">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 group/btn hover:gap-3 active:scale-95"
                    style={p.featured
                      ? { background: '#C9A84C', color: '#003512', boxShadow: '0 4px 14px rgba(201,168,76,0.30)' }
                      : { background: '#003512', color: '#F6F4E9' }}>
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra services */}
        <div className="mb-7 flex items-center gap-3">
          <div className="h-px w-8 bg-[#003512]" />
          <h3 className="text-xl font-extrabold text-[#003512]">Additional Services</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {extras.map((e, i) => (
            <div key={i}
              className={`card-hover rounded-2xl p-6 bg-white border border-[#E5E2D4] group anim-fade-up delay-${i + 4}`}
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="icon-box w-11 h-11 rounded-xl bg-[#003512] flex items-center justify-center mb-4">
                <e.icon className="w-5 h-5 text-[#C9A84C] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-base font-extrabold text-[#003512] mb-1.5">{e.title}</h4>
              <p className="text-sm text-[#6E6E6E] leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="card-hover rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 anim-fade-up delay-5"
          style={{ background: '#003512', boxShadow: '0 16px 48px rgba(0,53,18,0.22)' }}>
          <div>
            <p className="text-xl font-extrabold text-[#F6F4E9] mb-1">Not sure where to start?</p>
            <p style={{ color: 'rgba(246,244,233,0.50)' }} className="text-sm">Book a free consultation — no obligation, no pressure.</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: '#C9A84C', color: '#003512', boxShadow: '0 4px 16px rgba(201,168,76,0.30)' }}
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap group">
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
