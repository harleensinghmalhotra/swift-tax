import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white shadow-lg py-4 border-b border-gray-100'
      : 'bg-white py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 origin-left">
          <img src="/New Logo.png" alt="Swift Tax Service" className="h-16 lg:h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(l => (
            <a key={l.name} href={l.href}
              className="nav-link text-[15px] font-bold text-ink-soft hover:text-vivid transition-colors duration-200">
              {l.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:3173221040"
            className="flex items-center gap-2 text-sm font-bold text-ink-soft hover:text-vivid transition-all duration-200">
            <Phone className="w-4 h-4 text-vivid" />
            (317) 322-1040
          </a>
          <a href="#contact"
            className="btn-shimmer px-7 py-3 rounded-full text-sm font-extrabold text-white transition-all duration-250 bg-forest hover:scale-105 active:scale-95 shadow-lg shadow-forest/20">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-ink-soft" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
        }`}>
        <div className="px-5 py-8 flex flex-col gap-6">
          {navLinks.map((l, i) => (
            <a key={l.name} href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-bold text-ink-soft anim-fade-up`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {l.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-5 anim-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="tel:3173221040" className="flex items-center gap-3 text-lg font-bold text-ink-soft">
              <Phone className="w-5 h-5 text-vivid" />
              (317) 322-1040
            </a>
            <a href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-vivid text-forest py-4 rounded-2xl text-center font-extrabold text-lg">
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}