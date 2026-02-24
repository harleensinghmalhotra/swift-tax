import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Individual Tax Returns', href: '#services' },
        { label: 'Business Tax Returns', href: '#services' },
        { label: 'Tax Planning', href: '#services' },
        { label: 'IRS Representation', href: '#services' },
        { label: 'Amended Returns', href: '#services' },
      ],
    },
  ];

  const contact = [
    { icon: Phone, text: '(317) 322-1040', href: 'tel:3173221040' },
    { icon: Mail, text: 'info@swifttaxservice.com', href: 'mailto:info@swifttaxservice.com' },
    { icon: MapPin, text: '4305 E 38th St, Indianapolis, IN', href: null },
    { icon: Clock, text: 'Mon–Fri 9AM–6PM · Sat 10–2PM', href: null },
  ];

  return (
    <footer style={{ background: '#001f0a' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="anim-fade-up delay-1">
            <div className="inline-block bg-white rounded-xl p-3 mb-5 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              <img src="/New Logo.png" alt="Swift Tax Service" className="h-12 w-auto" />
            </div>
            <p style={{ color: 'rgba(246,244,233,0.45)' }} className="text-sm leading-relaxed mb-6">
              Fast, reliable, and professional tax preparation for Indianapolis families and businesses.
            </p>
            <a href="tel:3173221040"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: '#C9A84C', color: '#003512', boxShadow: '0 4px 14px rgba(201,168,76,0.28)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#D4AF5A';
                el.style.boxShadow = '0 6px 20px rgba(201,168,76,0.42)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#C9A84C';
                el.style.boxShadow = '0 4px 14px rgba(201,168,76,0.28)';
              }}>
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col, i) => (
            <div key={i} className={`anim-fade-up delay-${i + 2}`}>
              <h4 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href}
                      style={{ color: 'rgba(246,244,233,0.50)' }}
                      className="text-sm hover:text-[#F6F4E9] transition-all duration-200 hover:translate-x-1 inline-block">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="anim-fade-up delay-4">
            <h4 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">Contact Info</h4>
            <ul className="space-y-4">
              {contact.map((c, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <c.icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-125" />
                  {c.href
                    ? <a href={c.href} style={{ color: 'rgba(246,244,233,0.50)' }} className="text-sm hover:text-[#F6F4E9] transition-colors">{c.text}</a>
                    : <span style={{ color: 'rgba(246,244,233,0.50)' }} className="text-sm">{c.text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(246,244,233,0.08)' }}>
          <p style={{ color: 'rgba(246,244,233,0.30)' }} className="text-xs">
            © {year} Swift Tax Service. All rights reserved.
          </p>
          <p style={{ color: 'rgba(246,244,233,0.30)' }} className="text-xs">
            Proudly serving Indianapolis and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
