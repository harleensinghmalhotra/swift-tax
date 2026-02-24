import { CheckCircle, Star, Award, Clock, Users } from 'lucide-react';

const benefits = [
  'Personalized attention to every tax return',
  'Year-round availability for questions',
  'Competitive pricing — no hidden fees',
  'Convenient Indianapolis location',
  'Electronic filing for faster refunds',
  'Guaranteed accuracy with audit support',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="anim-fade-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bar-grow h-px w-8 bg-[#003512]" />
              <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#003512]">About Us</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003512] leading-tight mb-6">
              Indianapolis' trusted tax partner since day one
            </h2>
            <p className="text-[#6E6E6E] leading-relaxed mb-5">
              Founded by John, Swift Tax Service has been proudly serving Indianapolis families and businesses for over 15 years. We believe you deserve accurate, affordable tax help — with a personal touch you won't find at a big chain.
            </p>
            <p className="text-[#6E6E6E] leading-relaxed mb-10">
              Our commitment to excellence and staying current with ever-changing tax law means every client gets the maximum refund — guaranteed.
            </p>

            {/* Stat trio */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Licensed', sub: 'Tax Pro' },
                { icon: Clock, label: '24hr', sub: 'Turnaround' },
                { icon: Users, label: '5,000+', sub: 'Clients Served' },
              ].map((item, i) => (
                <div key={i}
                  className={`card-hover rounded-2xl p-5 text-center border border-[#E5E2D4] group anim-fade-up delay-${i + 2}`}
                  style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                  <div className="icon-box w-10 h-10 rounded-xl bg-[#003512] flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="font-extrabold text-[#003512] text-sm">{item.label}</p>
                  <p className="text-[#6E6E6E] text-xs mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div
            className="card-hover rounded-2xl p-9 border border-[#E5E2D4] anim-fade-right"
            style={{ background: '#F6F4E9', boxShadow: '0 8px 32px rgba(0,0,0,0.09)' }}>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i}
                  className={`w-5 h-5 text-[#C9A84C] fill-[#C9A84C] transition-transform duration-200 hover:scale-125 delay-${i}`} />
              ))}
              <span className="text-sm text-[#6E6E6E] font-semibold ml-1">5.0 · Google Reviews</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#003512] mb-6">Why clients keep coming back</h3>

            <ul className="space-y-3.5">
              {benefits.map((b, i) => (
                <li key={i} className={`check-item flex items-start gap-3 anim-fade-up delay-${i + 1}`}>
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5 transition-transform duration-200 hover:scale-125" />
                  <span className="text-sm text-[#262626] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Founder */}
            <div className="mt-8 pt-7 border-t border-[#D6DAE0] flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg text-[#C9A84C] flex-shrink-0 transition-transform duration-300 hover:scale-110 cursor-default"
                style={{ background: '#003512', boxShadow: '0 4px 14px rgba(0,53,18,0.25)' }}>
                J
              </div>
              <div>
                <p className="font-extrabold text-[#003512]">John</p>
                <p className="text-xs text-[#6E6E6E]">Founder & Lead Tax Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
