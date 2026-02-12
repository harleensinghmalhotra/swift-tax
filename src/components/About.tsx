import { Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

const benefits = [
  'Personalized attention to every tax return',
  'Year-round availability for questions and support',
  'Competitive pricing with no hidden fees',
  'Convenient Indianapolis location',
  'Electronic filing for faster refunds',
  'Guaranteed accuracy with audit support',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-semibold mb-4">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Tax Partner in
                <span className="text-gradient-pink"> Indianapolis</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by John, Swift Tax Service has been proudly serving the Indianapolis community with professional and reliable tax preparation services. We believe that everyone deserves accurate, affordable tax assistance delivered with a personal touch.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence, attention to detail, and dedication to staying current with ever-changing tax laws ensures that our clients receive the maximum refund they deserve while maintaining full compliance.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Licensed</p>
                    <p className="text-sm text-gray-500">Tax Pro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Fast</p>
                    <p className="text-sm text-gray-500">Turnaround</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Personal</p>
                    <p className="text-sm text-gray-500">Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-3xl transform rotate-3 opacity-20" />

              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-8">
                  Why Choose Swift Tax Service?
                </h3>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 group-hover:text-white transition-colors" />
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-white">John</p>
                      <p className="text-sm text-gray-400">Founder & Lead Tax Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
