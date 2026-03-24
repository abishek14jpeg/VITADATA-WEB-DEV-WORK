import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onSignUp }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const ids = ['hero', 'services', 'contact', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg"
      style={{ minHeight: '72px' }}
    >
      <div className="flex items-center justify-between h-[72px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex-shrink-0"
        >
          <img
            src="/vitadata-logo-updated.svg"
            alt="VitaData"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-body text-xs font-medium tracking-widest uppercase transition-all duration-300 pb-1 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:rounded-full after:transition-all after:duration-300 ${
                  activeSection === link.href
                    ? 'text-white after:w-full'
                    : 'text-white/75 hover:text-white after:w-0 hover:after:w-full'
                }`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { if (onSignUp) onSignUp(); }}
              className="bg-white/20 backdrop-blur-sm text-white font-body text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30"
            >
              Sign Up / Login
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <Menu size={22} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`block font-body text-sm font-medium tracking-wider uppercase py-2 transition-all duration-200 border-l-2 pl-2 ${
                    activeSection === link.href
                      ? 'text-white border-white'
                      : 'text-white/70 hover:text-white border-transparent hover:border-white/50'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setMobileOpen(false); if (onSignUp) onSignUp(); }}
                className="w-full bg-white/20 text-white font-body text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-sm transition-colors duration-200 hover:bg-white/30"
              >
                Sign Up / Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
