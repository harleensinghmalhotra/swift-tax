import { ShieldCheck, Users, Trophy, Star } from 'lucide-react';

const achievements = [
  { val: '15+', label: 'Years Experience', icon: <Trophy className="w-5 h-5" /> },
  { val: '5k+', label: 'Happy Clients', icon: <Users className="w-5 h-5" /> },
  { val: '5.0', label: 'Google Rating', icon: <Star className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Image / Visuals */}
          <div className="relative anim-fade-left">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Founder"
                className="w-full h-[520px] object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white font-extrabold text-xl mb-1">Expert Led Service</p>
                <p className="text-white/70 text-sm">Our team brings decades of collective tax expertise to every filing.</p>
              </div>
            </div>

            {/* Abstract elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-vivid/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-forest/5 rounded-full blur-3xl" />
          </div>

          {/* Right: Content */}
          <div className="anim-fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-vivid" />
              <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-vivid">Why Swift Tax Service</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-forest leading-tight mb-8">
              Indianapolis' trusted tax partner <br />
              <span className="text-vivid/80 font-bold text-3xl md:text-4xl">since day one.</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-ink-soft/70 leading-relaxed">
                At Swift Tax Service, we believe that professional tax preparation should be
                accessible, accurate, and stress-free. Our team of local experts in Indianapolis
                is dedicated to maximizing your returns while ensuring total compliance.
              </p>
              <p className="text-lg text-ink-soft/70 leading-relaxed">
                We're not just another tax office; we're your year-round financial advocates,
                providing the same high-end expertise you'd expect from a major firm with
                the heart of a local business.
              </p>
            </div>

            {/* Achievements Strip */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {achievements.map((a, i) => (
                <div key={i} className="flex flex-col gap-2 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest transition-colors group-hover:bg-vivid group-hover:text-white">
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-forest">{a.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft/40">{a.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {['IRS Authorized E-file Provider', 'Maximum Refund Guarantee', 'Audit Support Inclusion'].map(t => (
                <div key={t} className="flex items-center gap-3 group px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-vivid/10 flex items-center justify-center text-vivid">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-ink-soft">{t}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
