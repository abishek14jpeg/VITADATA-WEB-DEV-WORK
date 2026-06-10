import React, { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────────────

const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const PatientsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AppointmentsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PrescriptionsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const LabReportsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.31" />
    <path d="M14 9.3V1.99" />
    <path d="M8.5 2h7" />
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
  </svg>
);

const NotesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HelpCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function DoctorDashboard({ onLogout, doctorName = "Dr. Sarah Johnson", role = "Doctor" }) {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", id: "Dashboard" },
    { label: "Appointments", id: "Appointments" },
    { label: "Patients", id: "Patients" },
    { label: "Prescriptions", id: "Prescriptions" },
    { label: "Lab Requests", id: "Lab Requests" },
    { label: "Medical History", id: "Medical History" },
    { label: "Profile", id: "Profile" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9F9F9] font-sans text-[#3D2010] relative overflow-hidden">

      {/* ── MOBILE SIDEBAR OVERLAY ────────────────────────────────────── */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
      <aside className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-[240px] flex flex-col bg-white border-r border-[rgba(255,204,172,0.3)] shrink-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>

        {/* Logo Area */}
        <div className="h-[80px] flex items-center px-6 border-b border-[rgba(255,204,172,0.3)]">
          <button onClick={onLogout} className="border-none bg-transparent cursor-pointer p-0" title="Back to Home">
            <img
              src="/vitadata-logo-updated.svg"
              alt="VitaData Solutions"
              className="w-[100px] md:w-[115px] object-contain object-left"
            />
          </button>
        </div>

        {/* Navigation Area */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveNav(item.id);
                    setIsSidebarOpen(false); // Close sidebar on mobile after clicking
                  }}
                  className={`w-full text-left px-6 py-[10px] text-[15px] font-medium transition-colors ${activeNav === item.id
                    ? "text-[#D97757] bg-[rgba(255,204,172,0.15)]"
                    : "text-[#9C8276] hover:text-[#3D2010] hover:bg-[rgba(255,204,172,0.08)]"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Area */}
        <div className="p-4 border-t border-[rgba(255,204,172,0.3)]">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 w-full px-2 py-2 text-[#9C8276] hover:text-[#D97757] text-[15px] font-medium transition-colors"
          >
            <LogoutIcon />
            Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 w-full">

        {/* Top Header */}
        <header className="h-[70px] md:h-[80px] bg-white border-b border-[rgba(255,204,172,0.3)] flex items-center justify-between lg:justify-end px-4 md:px-8 shrink-0">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#6B7280] hover:text-[#1F2937]"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-[13px] md:text-[14px] text-[#6B7280] font-medium">{role}</div>
              <div className="text-[14px] md:text-[15px] text-[#1F2937] font-semibold">{doctorName}</div>
            </div>

            <div className="w-10 h-10 rounded-full border border-[#FFCCAC] bg-[rgba(255,204,172,0.15)] text-[#9C8276] flex items-center justify-center overflow-hidden ml-1">
              {/* Fallback dummy image since we don't have the exactly one in screenshot easily isolated. We'll use a placeholder or icon. */}
              <UserIcon />
            </div>
          </div>
        </header>

        {/* Workspace Area */}
        <main className="flex-1 p-4 md:p-8 bg-[#F9F9F9] relative overflow-y-auto">

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1F2937] mb-6 md:mb-8">
            Dashboard
          </h1>

          {/* Blank White Canvas */}
          <div className="animate-fade-up w-full bg-white rounded-xl shadow-sm border border-[rgba(255,204,172,0.3)] p-4 md:p-8 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <p className="text-[#9CA3AF] text-[14px] md:text-[15px] text-center">
              Dashboard content goes here
            </p>
          </div>

          {/* Floating Help Button */}
          <button className="hover-lift animate-fade-up delay-200 fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 bg-[#3D2010] hover:bg-[#D97757] text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50">
            <HelpCircleIcon />
          </button>

        </main>
      </div>

    </div>
  );
}
