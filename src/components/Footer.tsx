import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const links = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  support: [
    { name: 'Tax Resources', href: '#' },
    { name: 'IRS Updates', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-16 lg:pt-20 pb-16 text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle brand glow to make it feel premium */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vivid/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-4 gap-16 mb-20 text-center lg:text-left">

          {/* Brand Col */}
          <div className="lg:col-span-1 anim-fade-up">
            <a href="#" className="inline-block mb-8 transition-transform hover:scale-105">
              <img src="/Logo-Footer.png" alt="Swift Tax Service" className="h-24 w-auto rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs mx-auto lg:mx-0 font-medium">
              Professional tax preparation services in Indianapolis.
              Maximizing your returns with integrity and precision.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-vivid hover:text-forest hover:-translate-y-1 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-vivid hover:text-forest hover:-translate-y-1 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="anim-fade-up delay-1">
            <h4 className="text-vivid font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              {links.company.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/70 text-sm hover:text-vivid transition-colors flex items-center justify-center lg:justify-start gap-2 group">
                    {l.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-vivid" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="anim-fade-up delay-2">
            <h4 className="text-vivid font-black text-xs uppercase tracking-[0.2em] mb-8">Resources</h4>
            <ul className="space-y-4">
              {links.support.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/70 text-sm hover:text-vivid transition-colors flex items-center justify-center lg:justify-start gap-2 group">
                    {l.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-vivid" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="anim-fade-up delay-3 lg:col-span-1">
            <h4 className="text-vivid font-black text-xs uppercase tracking-[0.2em] mb-8">Get Started</h4>
            <div className="space-y-6">
              <a href="tel:3173221040"
                className="btn-shimmer w-full bg-vivid text-forest py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-vivid/20 transition-all">
                (317) 322-1040
                <Phone className="w-5 h-5" />
              </a>
              <div className="flex items-start gap-4 text-white/60 max-w-xs mx-auto lg:mx-0">
                <MapPin className="w-6 h-6 flex-shrink-0 text-vivid" />
                <p className="text-xs font-bold leading-relaxed">
                  Available in-person at our Indianapolis office or remotely nationwide.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 anim-fade-up delay-4">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">
            © 2026 Swift Tax Service • Authorized IRS Partner
          </p>
          <div className="flex gap-10">
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-vivid animate-pulse" />
              Secure Professional Portal
            </span>
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">
              Privacy Matters
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
