import { FileText, Building2, LineChart, Shield, FileEdit, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Individual Tax Returns',
    description: 'Comprehensive personal tax preparation with maximum refund optimization. We handle W-2s, 1099s, investments, and complex filing situations.',
    features: ['Federal & State Filing', 'Deduction Optimization', 'E-File for Fast Refunds'],
  },
  {
    icon: Building2,
    title: 'Business Tax Returns',
    description: 'Expert tax services for businesses of all sizes. From sole proprietors to corporations, we ensure compliance and minimize your tax burden.',
    features: ['LLC & S-Corp Filing', 'Quarterly Estimates', 'Payroll Tax Support'],
  },
  {
    icon: LineChart,
    title: 'Tax Planning',
    description: 'Strategic year-round tax planning to help you make smart financial decisions and reduce your overall tax liability.',
    features: ['Year-Round Support', 'Investment Planning', 'Retirement Strategy'],
  },
  {
    icon: Shield,
    title: 'IRS Representation',
    description: 'Professional representation when dealing with IRS audits, notices, or disputes. We advocate on your behalf to resolve issues quickly.',
    features: ['Audit Defense', 'Notice Response', 'Payment Plans'],
  },
  {
    icon: FileEdit,
    title: 'Amended Returns',
    description: 'Corrections to previously filed returns to claim missed deductions, fix errors, and recover refunds you may have left behind.',
    features: ['Error Corrections', 'Missed Credits Recovery', 'Prior Year Amendments'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Tax Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From individual returns to complex business filings, we provide expert guidance tailored to your unique situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-fuchsia-200 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/20 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="text-left">
              <p className="text-lg font-semibold">Not sure which service you need?</p>
              <p className="text-gray-400">Schedule a free consultation and we'll help you figure it out.</p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 rounded-xl font-semibold transition-colors whitespace-nowrap shadow-lg shadow-fuchsia-500/30"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
