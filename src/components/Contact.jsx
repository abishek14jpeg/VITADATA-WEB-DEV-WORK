import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', tos: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => { e.preventDefault(); };

  const inputCls = 'block w-full rounded-sm px-3 py-1.5 font-body text-sm outline-none transition-all duration-200';
  const inputStyle = { background: 'hsl(30, 40%, 94%)', border: '1px solid hsl(28, 20%, 80%)', color: 'hsl(28, 30%, 15%)' };
  const onFocus = (e) => { e.target.style.background = 'hsl(28, 35%, 88%)'; e.target.style.boxShadow = '0 0 0 1px hsl(28, 45%, 32%)'; };
  const onBlur  = (e) => { e.target.style.background = 'hsl(30, 40%, 94%)';  e.target.style.boxShadow = 'none'; };
  const labelStyle = { color: 'hsl(28, 30%, 15%)' };
  const hintStyle  = { color: 'hsl(28, 15%, 45%)' };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-8 sm:py-10"
      style={{ background: 'hsl(30, 35%, 97%)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-center pb-2"
          style={labelStyle}
        >
          Get In Touch
        </h2>
        <p className="font-body text-sm text-center pb-4" style={hintStyle}>
          Fill out the form below and our team will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium pb-1.5" style={labelStyle}>
                Full name
              </label>
              <input
                id="name" type="text" name="name"
                value={form.name} onChange={handleChange}
                autoComplete="name" required
                className={inputCls} style={inputStyle}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium pb-1.5" style={labelStyle}>
                Email address
              </label>
              <input
                id="email" type="email" name="email"
                value={form.email} onChange={handleChange}
                autoComplete="email" required
                className={inputCls} style={inputStyle}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium pb-1.5" style={labelStyle}>
                Message
              </label>
              <textarea
                id="message" name="message"
                value={form.message} onChange={handleChange}
                rows={4} required
                placeholder="Describe how we can help you."
                className={`${inputCls} resize-none`}
                style={inputStyle}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2.5">
              <input
                id="tos" type="checkbox" name="tos"
                checked={form.tos} onChange={handleChange}
                className="w-4 h-4 flex-shrink-0 cursor-pointer"
                style={{ accentColor: 'hsl(28, 45%, 32%)' }}
              />
              <label htmlFor="tos" className="font-body text-xs cursor-pointer" style={hintStyle}>
                I accept the terms of service
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-sm px-5 py-2 font-heading text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'hsl(28, 45%, 32%)', color: 'hsl(0, 0%, 100%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(28, 45%, 26%)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'hsl(28, 45%, 32%)')}
            >
              <Send size={16} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
