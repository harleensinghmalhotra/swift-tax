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
    <footer className="bg-forest pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Col */}
          <div className="lg:col-span-1 anim-fade-up">
            <a href="#" className="inline-block mb-8 transition-transform hover:scale-105">
              <img src="/New Logo.png" alt="Swift Tax Service" className="h-16 w-auto" />
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Professional tax preparation services in Indianapolis.
              Maximizing your returns with integrity and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-vivid hover:text-forest transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-vivid hover:text-forest transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="anim-fade-up delay-1">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {links.company.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-vivid transition-colors flex items-center gap-1 group">
                    {l.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="anim-fade-up delay-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4">
              {links.support.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-vivid transition-colors flex items-center gap-1 group">
                    {l.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="anim-fade-up delay-3 lg:col-span-1">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-8">Get Started</h4>
            <div className="space-y-6">
              <a href="tel:3173221040"
                className="btn-shimmer w-full bg-vivid text-forest py-4 rounded-2xl flex items-center justify-center gap-3 font-extrabold hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-vivid/10 transition-all">
                Call (317) 322-1040
                <Phone className="w-4 h-4" />
              </a>
              <div className="flex items-start gap-3 text-white/40">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p className="text-xs font-bold leading-relaxed">
                  Available in-person at our Indianapolis office or remotely nationwide.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 anim-fade-up delay-4">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Swift Tax Service. Authorized IRS e-file Provider. Indianapolis, IN.
          </p>
          <div className="flex gap-8">
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-vivid" />
              Secure Professional Portal
            </span>
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              Privacy Matters
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
