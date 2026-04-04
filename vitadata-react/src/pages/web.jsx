import React, { useState } from 'react';

/* ─────────────── Responsive Navbar ─────────────── */
function PageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50 border-b border-black/5">
      <div className="flex items-center justify-between w-full max-w-[1280px] h-[73px] mx-auto px-5 md:px-8">
        <a href="?page=landing" className="flex items-center gap-1.5 no-underline shrink-0">
          <img src="/vitadata-logo-updated.png" alt="Vitadata Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-[22px] tracking-tight uppercase" style={{ fontFamily: "'Poppins', sans-serif", color: '#623222' }}>VITADATA</span>
            <span className="font-normal text-[8px] leading-[14px] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '2.5px', color: '#BA613C' }}>Solutions</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-2">
          <a href="?page=landing" className="font-bold text-[15px] leading-6 px-3 py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>Home</a>
          <div className="flex items-center gap-1.5 px-3 py-2 cursor-pointer">
            <span className="font-bold text-[15px] leading-6" style={{ fontFamily: "'Inter', sans-serif", color: '#BB6C43' }}>Solutions</span>
            <svg width="10" height="6" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="#BB6C43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-2 cursor-pointer">
            <span className="font-bold text-[15px] leading-6" style={{ fontFamily: "'Inter', sans-serif", color: '#0E1011' }}>Technologies</span>
            <svg width="10" height="6" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="#0E1011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <a href="#" className="font-bold text-[15px] leading-6 px-3 py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>About Us</a>
          <a href="#" className="font-bold text-[15px] leading-6 px-3 py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>Contact Us</a>
        </nav>
        <div className="hidden lg:flex items-center gap-3.5 shrink-0">
          <div className="flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-full cursor-pointer" style={{ background: '#F4ECE8' }}>
            <span className="font-normal text-[15px] leading-6" style={{ fontFamily: "'Inclusive Sans', sans-serif", color: '#894E2F' }}>Sign Up</span>
            <i className="bi bi-arrow-right-circle text-base" style={{ color: '#894E2F' }}></i>
          </div>
          <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer" style={{ borderColor: 'rgba(0,0,0,0.21)' }}>
            <i className="bi bi-person-circle text-lg" style={{ color: '#894E2F' }}></i>
          </div>
        </div>
        <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: '#623222' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#623222' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: '#623222' }} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden w-full border-t border-black/5 bg-white px-5 py-4 flex flex-col gap-3">
          <a href="?page=landing" className="font-bold text-[15px] py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>Home</a>
          <a href="#" className="font-bold text-[15px] py-2 no-underline" style={{ fontFamily: "'Inter', sans-serif", color: '#BB6C43' }}>Solutions</a>
          <a href="#" className="font-bold text-[15px] py-2 no-underline" style={{ fontFamily: "'Inter', sans-serif", color: '#0E1011' }}>Technologies</a>
          <a href="#" className="font-bold text-[15px] py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>About Us</a>
          <a href="#" className="font-bold text-[15px] py-2 no-underline" style={{ fontFamily: "'Istok Web', sans-serif", color: '#BB6C43' }}>Contact Us</a>
          <div className="flex items-center gap-3 pt-2 border-t border-black/5">
            <div className="flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-full" style={{ background: '#F4ECE8' }}>
              <span className="text-[15px]" style={{ fontFamily: "'Inclusive Sans', sans-serif", color: '#894E2F' }}>Sign Up</span>
              <i className="bi bi-arrow-right-circle text-base" style={{ color: '#894E2F' }}></i>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────── Responsive Footer ─────────────── */
function PageFooter() {
  return (
    <footer className="w-full pt-0 pb-8" style={{ background: '#F8EBE7', borderTop: '1px solid rgba(217,194,184,0.15)' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-8 py-8 md:py-10 w-full max-w-[1280px] mx-auto gap-6 md:gap-0">
        <div className="flex flex-col gap-1.5">
          <span className="font-bold text-base leading-6" style={{ fontFamily: "'Public Sans', sans-serif", color: '#201A18' }}>VITADATA SOLUTIONS</span>
          <span className="font-normal text-xs leading-[18px] uppercase" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1.2px', color: 'rgba(32,26,24,0.7)' }}>CURATING HEALTHCARE INTELLIGENCE.</span>
        </div>
        <div className="flex gap-4 md:gap-6 flex-wrap">
          {['PRIVACY POLICY', 'TERMS OF SERVICE', 'DATA SECURITY', 'COOKIE SETTINGS'].map((link) => (
            <a key={link} href="#" className="font-medium text-xs leading-[18px] uppercase no-underline" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1.2px', color: 'rgba(32,26,24,0.7)' }}>{link}</a>
          ))}
        </div>
      </div>
      <div className="w-full text-center opacity-60">
        <span className="font-normal text-[11px] leading-4 uppercase" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1px', color: '#201A18' }}>
          &copy; 2024 VITADATA SOLUTIONS. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}

/* ─────────────── WEB PORTALS PAGE ─────────────── */
export default function PortalsPage() {
  const features = [
    { icon: 'bi-speedometer2', title: 'Real-time Dashboards', description: 'Live synchronization of clinical metrics with sub-second latency, providing immediate insights for time-critical care environments.' },
    { icon: 'bi-shield-lock', title: 'Secure Multi-tenant Architecture', description: 'Engineered for massive scale with isolated data environments, ensuring uncompromising privacy and enterprise-grade compliance.' },
    { icon: 'bi-gear', title: 'Custom Workflow Integration', description: 'Seamlessly connecting with existing EMRs and laboratory information systems through advanced API-first design principles.' },
  ];

  const checkItems = ['HIPAA & GDPR Compliant Infrastructure', 'Mobile-First Responsive Web Design', 'Legacy Data Modernization Pathways'];

  return (
    <div className="flex flex-col items-start w-full" style={{ background: '#FCF9F7' }}>
      <PageNavbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/web-hero.png" alt="Web Hero" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(193,53,8,0.2), rgba(193,53,8,0.2))' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(67,36,26,0.18) 0%, rgba(67,36,26,0.14) 50%, rgba(67,36,26,0) 100%)' }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto h-full px-5 md:px-8 flex items-center">
          <div className="max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] flex flex-col items-start p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px]"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="inline-flex items-start py-1 px-3.5 rounded-full w-fit" style={{ background: '#FCDCC9' }}>
                <span className="font-bold text-[10px] sm:text-[11px] leading-4 uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.6px', color: '#28180C' }}>CLINICAL GRADE PLATFORM</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] m-0" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '-1px', color: '#43241A' }}>
                Enterprise Web Portals
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 m-0 max-w-[560px]" style={{ fontFamily: "'Inter', sans-serif", color: '#000000' }}>
                Custom-engineered portals that bridge the gap between complex health data and clinical decision-making. High-performance, secure, and human-centric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="w-full px-5 md:px-8 py-14 md:py-20" style={{ background: '#DDC8BE' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8 md:mb-10 max-w-[560px]">
            <h2 className="text-2xl md:text-[26px] font-bold leading-tight m-0 mb-3" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>Functional Excellence</h2>
            <p className="text-sm md:text-[15px] leading-[22px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#776051' }}>
              Every portal is designed with the precision of a research laboratory and the intuitiveness of a premium lifestyle app.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-7 pb-10 md:pb-12 flex flex-col items-start gap-3.5 hover-lift">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#FCDCC9' }}>
                  <i className={`bi ${f.icon} text-xl`} style={{ color: '#280F06' }}></i>
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-[17px] leading-6 m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>{f.title}</h3>
                </div>
                <p className="font-normal text-sm leading-[22px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#776051' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE SECTION: The Curator Approach ── */}
      <section className="w-full px-5 md:px-8 py-14 md:py-20" style={{ background: '#FCF9F7' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Image with badge */}
          <div className="relative w-full lg:w-[460px] aspect-[11/10] shrink-0">
            {/* Glow */}
            <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full z-0" style={{ background: 'rgba(252,220,201,0.5)', filter: 'blur(28px)' }} />
            <img src="/web-clinical-research.png" alt="Clinical Research" className="relative z-[1] w-full h-full object-cover rounded-2xl" style={{ boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)' }} />
            {/* Dark badge */}
            <div className="absolute -right-3 sm:-right-5 -bottom-3 sm:-bottom-5 w-[180px] sm:w-[210px] rounded-[14px] p-4 sm:p-6 z-[2] flex flex-col" style={{ background: '#280F06' }}>
              <span className="font-normal text-[11px] sm:text-xs leading-[18px] uppercase opacity-70 text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '1.2px' }}>METRIC FOCUS</span>
              <span className="font-bold text-xl sm:text-[22px] leading-7 text-white mt-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>99.99%</span>
              <span className="font-normal text-[10px] sm:text-[11px] leading-4 text-white opacity-80 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                System availability for mission-critical clinical portals.
              </span>
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-5 md:gap-6">
            <h2 className="text-2xl md:text-[30px] font-bold leading-tight m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>The Clinical Curator Approach</h2>
            <p className="text-[15px] md:text-base leading-[26px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#776051' }}>
              We don't just build software; we curate data experiences. By prioritizing the human observer, we reduce cognitive load and empower healthcare professionals to act with confidence.
            </p>
            <div className="flex flex-col gap-4 md:gap-[18px] pt-1">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-lg shrink-0" style={{ color: '#402318' }}></i>
                  <span className="font-medium text-sm leading-[22px]" style={{ fontFamily: "'Inter', sans-serif", color: '#280F06' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
