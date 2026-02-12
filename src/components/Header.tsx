import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault() },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <div className={`rounded-lg p-1.5 transition-all ${isScrolled ? '' : 'bg-white shadow-lg'}`}>
              <img
                src="/US_TAX_SERVICES_LOGO.png"
                alt="Swift Tax Service"
                className="h-10 md:h-12 w-auto"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-fuchsia-600'
                    : 'text-white hover:text-fuchsia-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:3173221040"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>(317) 322-1040</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-all hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-fuchsia-600 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t space-y-4">
              <a
                href="tel:3173221040"
                className="flex items-center gap-2 text-gray-700 font-medium"
              >
                <Phone className="w-4 h-4" />
                (317) 322-1040
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}