import React, { useState } from 'react';

/* ─────────────── Responsive Navbar ─────────────── */
function PageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50 border-b border-black/5">
      <div className="flex items-center justify-between w-full max-w-[1280px] h-[73px] mx-auto px-5 md:px-8">
        {/* Logo */}
        <a href="?page=landing" className="flex items-center gap-1.5 no-underline shrink-0">
          <img src="/vitadata-logo-updated.png" alt="Vitadata Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-[22px] tracking-tight uppercase" style={{ fontFamily: "'Poppins', sans-serif", color: '#623222' }}>VITADATA</span>
            <span className="font-normal text-[8px] leading-[14px] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '2.5px', color: '#BA613C' }}>Solutions</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
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

        {/* Desktop Sign Up + User */}
        <div className="hidden lg:flex items-center gap-3.5 shrink-0">
          <div className="flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-full cursor-pointer" style={{ background: '#F4ECE8' }}>
            <span className="font-normal text-[15px] leading-6" style={{ fontFamily: "'Inclusive Sans', sans-serif", color: '#894E2F' }}>Sign Up</span>
            <i className="bi bi-arrow-right-circle text-base" style={{ color: '#894E2F' }}></i>
          </div>
          <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer" style={{ borderColor: 'rgba(0,0,0,0.21)' }}>
            <i className="bi bi-person-circle text-lg" style={{ color: '#894E2F' }}></i>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: '#623222' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#623222' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: '#623222' }} />
        </button>
      </div>

      {/* Mobile menu */}
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

/* ─────────────── AI/ML PAGE ─────────────── */
export default function AIMLPage() {
  const features = [
    { icon: 'bi-cpu', title: 'Neural Diagnostic Engine', description: 'Advanced deep learning models trained on multi-modal clinical datasets for rapid pathology identification.', bgColor: '#EEE0D8' },
    { icon: 'bi-stars', title: 'Automated Curation', description: 'Intelligent parsing of unstructured patient records into high-fidelity structured research databases.', bgColor: '#FCDCC9' },
    { icon: 'bi-lightning-charge', title: 'Genomic Mapping', description: 'High-resolution genetic analysis pipelines identifying variants and markers with unprecedented speed.', bgColor: '#FFDBCF' },
  ];

  const checkItems = ['HIPAA & GDPR Compliant Infrastructure', 'Real-time Predictive Analytics', 'Seamless EHR Integration'];

  return (
    <div className="flex flex-col items-start w-full" style={{ background: '#DDC8BE' }}>
      <PageNavbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full px-5 md:px-8 py-12 md:py-16 lg:py-20 overflow-hidden" style={{ background: '#DDC8BE' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-5 max-w-[600px] flex-1 order-2 lg:order-1">
            <div className="inline-flex items-start py-1 px-3.5 rounded-full w-fit" style={{ background: '#FCDCC9' }}>
              <span className="font-bold text-[11px] leading-4 uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.6px', color: '#28180C' }}>AI & ML ANALYSIS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#43241A' }}>
              Predictive AI for Clinical Insight
            </h1>
            <p className="text-base md:text-lg leading-7 m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>
              Harness the power of machine learning to transform raw medical data into actionable biological intelligence. We provide the tools for precision healthcare and faster discovery.
            </p>
          </div>

          {/* Right: Hero Image Card */}
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[10/11] shrink-0 flex flex-col justify-center items-start p-1 rounded-[28px] order-1 lg:order-2"
            style={{ background: 'linear-gradient(135deg, #280F06 0%, #402318 100%)', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <img src="/aiml-hero.png" alt="AI/ML Visual" className="w-full h-full object-cover rounded-[24px]" style={{ mixBlendMode: 'luminosity', opacity: 0.8 }} />
            <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(40,15,6,0.4) 0%, rgba(40,15,6,0) 100%)' }} />
            {/* Expertise Tile */}
            <div className="absolute -left-4 -bottom-4 sm:-left-5 sm:-bottom-5 w-[200px] sm:w-[220px] rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 z-[2]"
              style={{ background: '#DDC8BE', border: '1px solid rgba(213,195,189,0.1)', boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FCDCC9' }}>
                  <i className="bi bi-lightning-charge-fill text-base" style={{ color: '#280F06' }}></i>
                </div>
                <span className="font-bold text-sm leading-5" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>Live Engine</span>
              </div>
              <span className="font-normal text-[11px] leading-4" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>99.8% precision rate in genomic sequence mapping.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE BENTO GRID ── */}
      <section className="w-full px-5 md:px-8 py-14 md:py-20" style={{ background: '#F6F3F1' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-[30px] font-bold leading-tight text-center m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>Precision Technology Stack</h2>
            <p className="text-sm md:text-[15px] leading-[22px] text-center max-w-[540px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>
              State-of-the-art computational tools designed for the next generation of clinical research.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-7 hover-lift">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: f.bgColor }}>
                  <i className={`bi ${f.icon} text-xl`} style={{ color: '#280F06' }}></i>
                </div>
                <h3 className="font-bold text-[17px] leading-6 mb-2.5 m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>{f.title}</h3>
                <p className="font-normal text-sm leading-[22px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TONAL SHIFT SECTION ── */}
      <section className="w-full px-5 md:px-8 py-14 md:py-20" style={{ background: '#DDC8BE' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left: Image */}
          <div className="w-full lg:w-[480px] aspect-[4/3] relative shrink-0">
            <div className="w-full h-full rounded-2xl overflow-hidden" style={{ boxShadow: '0px 1px 2px rgba(0,0,0,0.05)' }}>
              <img src="/aiml-lab-data.png" alt="Laboratory Data" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(40,15,6,0.05)' }} />
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-2xl md:text-[30px] font-bold leading-tight m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>
              Designed for Researchers, Built for Clinical Scale.
            </h2>
            <p className="text-[15px] leading-6 m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>
              Our platform bridges the gap between raw biological data and pharmaceutical breakthroughs. By removing the technical overhead of ML infrastructure, your team can focus on what matters most: discovery.
            </p>
            <div className="flex flex-col gap-3.5 pt-1">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <i className="bi bi-check-circle-fill text-lg shrink-0" style={{ color: '#B38879' }}></i>
                  <span className="font-semibold text-sm leading-5" style={{ fontFamily: "'Inter', sans-serif", color: '#280F06' }}>{item}</span>
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
