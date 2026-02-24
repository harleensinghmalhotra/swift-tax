import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Phone, MapPin, Clock, Mail, Zap } from 'lucide-react';

interface FormData { name: string; email: string; phone: string; service: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; service?: string; }

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number';
    if (!form.service) e.service = 'Please select a service';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false); setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const info = [
    { icon: Phone, label: 'Phone', value: '(317) 322-1040', href: 'tel:3173221040' },
    { icon: Mail, label: 'Email', value: 'info@swifttaxservice.com', href: 'mailto:info@swifttaxservice.com' },
    { icon: MapPin, label: 'Location', value: '4305 E 38th St, Indianapolis, IN', href: null },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri 9AM–6PM  ·  Sat 10–2PM', href: null },
  ];

  const inputCls = (field: keyof FormErrors) =>
    `input-animated w-full px-4 py-3.5 rounded-xl border outline-none text-sm font-medium text-[#003512] bg-white ` +
    (errors[field]
      ? 'border-red-400 bg-red-50'
      : 'border-[#D6DAE0] focus:border-[#003512] hover:border-[#003512]/40');

  return (
    <section id="contact" style={{ background: '#003512' }} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="mb-14 anim-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="bar-grow h-px w-8 bg-[#C9A84C]" />
            <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#C9A84C]">Get In Touch</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F6F4E9] mb-3 leading-tight">
            Ready to get your<br />maximum refund?
          </h2>
          <p style={{ color: 'rgba(246,244,233,0.55)' }} className="max-w-lg text-base">
            Fill out the form and we'll reach out within 24 hours. No obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-3 anim-fade-left delay-1">
            {info.map((item, i) => (
              <div key={i}
                className={`card-hover rounded-2xl p-5 flex items-start gap-4 group anim-fade-up delay-${i + 1}`}
                style={{ background: 'rgba(246,244,233,0.05)', border: '1px solid rgba(246,244,233,0.10)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
                <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <item.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#C9A84C] mb-0.5">{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ color: 'rgba(246,244,233,0.75)' }} className="text-sm hover:text-[#F6F4E9] transition-colors">{item.value}</a>
                    : <p style={{ color: 'rgba(246,244,233,0.75)' }} className="text-sm">{item.value}</p>}
                </div>
              </div>
            ))}

            {/* Quick response */}
            <div className="card-hover rounded-2xl p-5 mt-2"
              style={{ background: '#C9A84C', boxShadow: '0 8px 28px rgba(201,168,76,0.30)' }}>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#003512] flex-shrink-0 mt-0.5 transition-transform duration-300 hover:rotate-12" />
                <div>
                  <p className="font-extrabold text-[#003512] text-sm mb-1">Quick Response Guarantee</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,53,18,0.65)' }}>
                    We respond within 24 hours. Call us for urgent help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl p-8 md:p-10 bg-[#F6F4E9] anim-fade-right delay-2"
            style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 anim-fade-up"
                  style={{ background: 'rgba(0,53,18,0.08)' }}>
                  <CheckCircle className="w-10 h-10 text-[#003512]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#003512] mb-2 anim-fade-up delay-1">Message sent!</h3>
                <p className="text-[#6E6E6E] mb-8 anim-fade-up delay-2">We'll be in touch very soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="text-sm font-bold text-[#003512] underline underline-offset-2 hover:text-[#003512] transition-colors anim-fade-up delay-3">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Fields */}
                <div className="anim-fade-up delay-1">
                  <label className="block text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#003512] mb-1.5">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputCls('name')} />
                  {errors.name && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5 anim-fade-up delay-2">
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#003512] mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputCls('email')} />
                    {errors.email && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#003512] mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(317) 555-0123" className={inputCls('phone')} />
                    {errors.phone && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="anim-fade-up delay-3">
                  <label className="block text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#003512] mb-1.5">Service</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputCls('service')}>
                    <option value="">Select a service</option>
                    <option>Individual Tax Return</option>
                    <option>Business Tax Return</option>
                    <option>Tax Planning</option>
                    <option>IRS Representation</option>
                    <option>Amended Returns</option>
                    <option>Other</option>
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-red-600 font-semibold">{errors.service}</p>}
                </div>

                <div className="anim-fade-up delay-4">
                  <label className="block text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#003512] mb-1.5">
                    Message <span className="text-[#6E6E6E] normal-case font-normal tracking-normal">(optional)</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your tax situation…"
                    className="input-animated w-full px-4 py-3.5 rounded-xl border border-[#D6DAE0] bg-white outline-none text-sm font-medium text-[#003512] resize-none focus:border-[#003512] transition-all hover:border-[#003512]/40" />
                </div>

                <div className="anim-fade-up delay-5">
                  <button type="submit" disabled={sending}
                    className="btn-shimmer w-full py-4 rounded-full font-extrabold text-base transition-all disabled:opacity-50 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"
                    style={{ background: '#003512', color: '#F6F4E9', boxShadow: '0 6px 20px rgba(0,53,18,0.30)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,53,18,0.42)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,53,18,0.30)'; }}>
                    {sending
                      ? <><div className="w-5 h-5 border-2 border-[#F6F4E9]/30 border-t-[#F6F4E9] rounded-full animate-spin" /> Sending…</>
                      : <><Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
