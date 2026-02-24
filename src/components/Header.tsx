import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: '#003512' }}
        className="text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wide">
        🧾 2026 Tax Season — Free Consultation Available &nbsp;·&nbsp;
        <a href="#contact" className="underline hover:text-[#C9A84C] transition-colors duration-200">
          Schedule Today
        </a>
      </div>

      <header
        className="sticky top-0 z-50 bg-white transition-all duration-300"
        style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 1px 0 #e5e2d4' }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          {/* Logo with subtle hover scale */}
          <a href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 origin-left">
            <img src="/New Logo.png" alt="Swift Tax Service" className="h-16 w-auto" />
          </a>

          {/* Nav with underline-draw animation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.name} href={l.href}
                className="nav-link text-sm font-bold text-[#262626] hover:text-[#003512] transition-colors duration-200">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href="tel:3173221040"
              className="flex items-center gap-1.5 text-sm font-bold text-[#003512] hover:text-[#003512] transition-all duration-200 hover:scale-105">
              <Phone className="w-4 h-4" />
              (317) 322-1040
            </a>
            <a href="#contact"
              className="btn-shimmer px-6 py-2.5 rounded-full text-sm font-extrabold text-white transition-all duration-250 hover:scale-105 active:scale-95"
              style={{
                background: '#003512',
                boxShadow: '0 4px 14px rgba(0,53,18,0.28)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#003512';
                el.style.boxShadow = '0 6px 22px rgba(0,53,18,0.38)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#003512';
                el.style.boxShadow = '0 4px 14px rgba(0,53,18,0.28)';
              }}>
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#003512] transition-transform duration-200 hover:scale-110 active:scale-90">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 anim-fade-up" style={{ animationDuration: '0.2s' }}>
            <div className="max-w-7xl mx-auto px-5 py-6 space-y-4">
              {navLinks.map((l, i) => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className={`block text-[#262626] font-bold py-1 hover:text-[#003512] hover:translate-x-1 transition-all duration-200 anim-fade-up delay-${i + 1}`}>
                  {l.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a href="tel:3173221040" className="flex items-center gap-2 text-[#003512] font-bold hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" /> (317) 322-1040
                </a>
                <a href="#contact" onClick={() => setOpen(false)}
                  className="btn-shimmer block w-full text-center py-3 rounded-full font-extrabold text-white active:scale-95 transition-transform"
                  style={{ background: '#003512' }}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}