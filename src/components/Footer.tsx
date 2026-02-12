import { Phone, MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Individual Tax Returns',
  'Business Tax Returns',
  'Tax Planning',
  'IRS Representation',
  'Amended Returns',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="bg-white rounded-xl p-3 inline-block shadow-lg">
                  <img
                    src="/US_TAX_SERVICES_LOGO.png"
                    alt="Swift Tax Service"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Fast, reliable, and professional tax preparation services for Indianapolis families and businesses.
              </p>
              <a
                href="tel:3173221040"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-fuchsia-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                  <a href="tel:3173221040" className="text-gray-400 hover:text-white transition-colors">
                    (317) 322-1040
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@swifttaxservice.com" className="text-gray-400 hover:text-white transition-colors">
                    info@swifttaxservice.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    4305 E 38th St<br />Indianapolis, IN
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400">
                    <p>Mon - Fri: 9AM - 6PM</p>
                    <p>Sat: 10AM - 2PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                {currentYear} Swift Tax Service. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Proudly serving Indianapolis and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
