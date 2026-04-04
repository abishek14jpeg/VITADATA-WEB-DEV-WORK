import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);
const PatientsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const AppointmentsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const AnalyticsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B07A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);
const VitalsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#643F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const MedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#643F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const CalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#643F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B09A8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B07A62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const CakeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9C8276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
    <path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/>
    <path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>
  </svg>
);
const GenderIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9C8276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 8V2"/><path d="M9 5l3-3 3 3"/>
  </svg>
);
const BloodIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9C8276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);
const ScheduleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C8276" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

// Medication pill icons
const PillBlue = () => (
  <div style={{ width:36,height:36,borderRadius:10,backgroundColor:"#EAF0FB",display:"flex",alignItems:"center",justifyContent:"center" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B8DB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
      <path d="m8.5 8.5 7 7"/>
    </svg>
  </div>
);
const PillOrange = () => (
  <div style={{ width:36,height:36,borderRadius:10,backgroundColor:"#FDF0E6",display:"flex",alignItems:"center",justifyContent:"center" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4813A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
      <path d="m8.5 8.5 7 7"/>
    </svg>
  </div>
);
const PillPurple = () => (
  <div style={{ width:36,height:36,borderRadius:10,backgroundColor:"#F0EBF8",display:"flex",alignItems:"center",justifyContent:"center" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B5EA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
    </svg>
  </div>
);

// ── Data ───────────────────────────────────────────────────────────────────

const vitals = [
  { label: "Blood Pressure", value: "120/80", unit: "mmHg", trend: "-2%", up: false, color: "#C0392B" },
  { label: "Blood Sugar",    value: "110",    unit: "mg/dL", trend: "+5%", up: true,  color: "#4CAF50" },
  { label: "Heart Rate",     value: "72",     unit: "bpm",   trend: "-1%", up: false, color: "#C0392B" },
];

const medications = [
  { pill: <PillBlue />,   name: "Lisinopril 10mg",  desc: "1 tablet daily before breakfast", status: "Taken 08:30 AM",       statusColor: "#4CAF50" },
  { pill: <PillOrange />, name: "Metformin 500mg",   desc: "1 tablet with breakfast",         status: "Taken 08:45 AM",       statusColor: "#4CAF50" },
  { pill: <PillPurple />, name: "Multivitamins",     desc: "Dietary supplement",              status: "Scheduled 10:00 AM",   statusColor: "#D4813A" },
];

const appointments = [
  { badge: "IN 2 DAYS", badgeBg: "#4A7C59", time: "10:30 AM", title: "General Check-up",          sub: "Room 402 · Dr. Sarah Miller",   actions: true },
  { date: "Dec 20, 2023",                   time: "02:15 PM", title: "Blood Lab Results Review",   sub: "Virtual Meeting · Dr. Alan Grant" },
  { date: "Jan 12, 2024",                   time: "09:00 AM", title: "Physical Therapy",           sub: "Rehab Wing · Mark Stevens" },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function PatientPage({ onNavigate, onLogout }) {
  const [activeNav, setActiveNav] = useState("Patients");
  const [medTab,    setMedTab]    = useState("Morning");
  const [apptTab,   setApptTab]   = useState("Upcoming");

  const navItems = [
    { label: "Dashboard",    icon: DashboardIcon    },
    { label: "Patients",     icon: PatientsIcon     },
    { label: "Appointments", icon: AppointmentsIcon },
    { label: "Analytics",    icon: AnalyticsIcon    },
    { label: "Settings",     icon: SettingsIcon     },
  ];

  const handleNav = (label) => {
    setActiveNav(label);
    if (onNavigate) onNavigate(label);
  };

  const S = {
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      padding: "22px 24px",
      boxShadow: "0 2px 14px rgba(100,63,48,0.07)",
    },
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#F5EEE9",
      fontFamily: "'Playfair Display', serif",
      color: "#3D2010",
    }}>

      {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
      <aside style={{
        width: 175,
        minWidth: 175,
        backgroundColor: "#F0E8E0",
        display: "flex",
        flexDirection: "column",
        padding: "22px 0 20px",
        borderRight: "1px solid #E4D8D0",
      }}>
        {/* Logo */}
        <div style={{ padding: "0 18px", marginBottom: 32 }}>
          <button
            onClick={() => onLogout && onLogout()}
            style={{ display:"flex", alignItems:"center", gap:9, marginBottom:4, background:"none", border:"none", cursor:"pointer", padding:0 }}
            title="Go to Home"
          >
            <img
              src="/vitadata-logo-updated.svg"
              alt="VitaData"
              style={{ height:32, width:"auto", objectFit:"contain" }}
            />
            <span style={{ fontSize:13, fontWeight:700, letterSpacing:"0.1em", color:"#3D2010", fontFamily: "'Montserrat', sans-serif" }}>VITADATA</span>
          </button>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.12em", color:"#B09A8E", paddingLeft:41 }}>DOCTOR PORTAL</div>
        </div>

        {/* Nav */}
        <nav style={{ flex:1 }}>
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => handleNav(label)}
                style={{
                  display:"flex", alignItems:"center", gap:10,
                  width:"100%", padding:"10px 18px",
                  border:"none",
                  background: isActive ? "#643F30" : "transparent",
                  color: isActive ? "#fff" : "#9C8276",
                  fontWeight: isActive ? 700 : 500,
                  fontSize:13, cursor:"pointer",
                  textAlign:"left", fontFamily:"inherit",
                  borderRadius: isActive ? "0 12px 12px 0" : 0,
                  marginRight: isActive ? 12 : 0,
                  transition:"all 0.15s",
                }}
              >
                <Icon />{label}
              </button>
            );
          })}
        </nav>

        {/* Doctor profile + logout */}
        <div style={{ borderTop:"1px solid #E4D8D0", paddingTop:12 }}>
          <div style={{
            display:"flex", alignItems:"center", gap:10,
            padding:"10px 18px",
          }}>
            <div style={{
              width:34, height:34, borderRadius:"50%",
              backgroundColor:"#8BBDCF",
              display:"flex", alignItems:"center", justifyContent:"center",
              border:"2px solid #6FACC4", overflow:"hidden", flexShrink:0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6478" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize:12, fontWeight:700, color:"#3D2010" }}>Dr. Doctor</div>
              <div style={{ fontSize:10.5, color:"#9C8276" }}>Cardiologist</div>
            </div>
          </div>

          {onLogout && (
            <button
              onClick={onLogout}
              style={{
                display:"flex", alignItems:"center", gap:10,
                width:"100%", padding:"9px 18px",
                border:"none", background:"transparent",
                color:"#9C8276", fontSize:13,
                cursor:"pointer", textAlign:"left", fontFamily:"inherit",
                transition:"color 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#C0392B"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#9C8276"; }}
            >
              <LogoutIcon /> Log Out
            </button>
          )}
        </div>
      </aside>

      {/* ── MAIN ────────────────────────────────────────────────────── */}
      <main style={{
        flex:1, overflowY:"auto",
        padding:"28px 28px 40px",
        display:"flex", flexDirection:"column", gap:18,
      }}>

        {/* ── PATIENT HEADER ── */}
        <div className="hover-lift animate-fade-up" style={{ ...S.card, display:"flex", alignItems:"center", gap:24 }}>
          {/* Avatar */}
          <div style={{
            width:88, height:88, borderRadius:"50%",
            backgroundColor:"#CCE3EF", flexShrink:0,
            display:"flex", alignItems:"center", justifyContent:"center",
            border:"3px solid #A4C8DC",
          }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#B09A8E" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>

          {/* Info */}
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6 }}>
              <h2 style={{ fontSize:22, fontWeight:900, margin:0, color:"#3D2010" }}>John Doe</h2>
              <span style={{
                fontSize:11, fontWeight:700,
                backgroundColor:"#E8F5E9", color:"#388E3C",
                padding:"3px 10px", borderRadius:20,
              }}>Active</span>
            </div>
            <div style={{ fontSize:12.5, color:"#9C8276", marginBottom:8, fontWeight:600 }}>
              Patient ID: #VIT-98234
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:18 }}>
              {[
                { icon:<CakeIcon />, text:"12/05/1978" },
                { icon:<GenderIcon />, text:"Male" },
                { icon:<BloodIcon />, text:"O Positive" },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, color:"#9C8276" }}>
                  {icon}<span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display:"flex", gap:10, flexShrink:0 }}>
            <button className="hover-lift" style={{
              display:"flex", alignItems:"center", gap:7,
              padding:"9px 18px", borderRadius:12,
              border:"1.5px solid #EAE0DA",
              backgroundColor:"#fff", color:"#643F30",
              fontSize:12, fontWeight:700, cursor:"pointer",
              fontFamily:"inherit",
            }}>
              <EditIcon /> Edit Profile
            </button>
            <button className="hover-lift" style={{
              display:"flex", alignItems:"center", gap:7,
              padding:"9px 18px", borderRadius:12,
              border:"none",
              backgroundColor:"#3D2010", color:"#fff",
              fontSize:12, fontWeight:700, cursor:"pointer",
              fontFamily:"inherit",
            }}>
              <DownloadIcon /> Export Records
            </button>
          </div>
        </div>

        {/* ── AI SUMMARY ── */}
        <div className="hover-lift animate-fade-up delay-100" style={{
          ...S.card,
          border:"1.5px solid #F0E0C8",
          backgroundColor:"#FFFDF9",
          position:"relative", overflow:"hidden",
        }}>
          {/* Watermark */}
          <div style={{ position:"absolute", right:20, top:"50%", transform:"translateY(-50%)", opacity:0.07 }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B07A30" strokeWidth="1">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
            </svg>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <SparkleIcon />
            <span style={{ fontSize:14, fontWeight:800, color:"#B07A30" }}>AI Summary (Non-Predictive)</span>
          </div>

          <p style={{
            fontSize:13.5, lineHeight:1.75,
            color:"#5A3A20", margin:"0 0 16px", maxWidth:680,
          }}>
            Patient shows stable recovery post-appendectomy. BP remains within normal range. Adherence to prescribed medications is high at 95%. Observation of slight increase in blood sugar noted during the last 3 days, potentially lifestyle-related. Recommended follow-up in 2 weeks.
          </p>

          <p style={{ fontSize:10.5, color:"#B09A8E", margin:"0 0 14px", lineHeight:1.6, maxWidth:620 }}>
            Legal Disclaimer: This AI-generated summary is for informational purposes only and does not constitute medical advice or diagnosis. Final clinical decisions must be made by a qualified healthcare professional.
          </p>

          <button className="hover-lift" style={{
            display:"flex", alignItems:"center", gap:6,
            background:"none", border:"none",
            color:"#B07A62", fontSize:12.5, fontWeight:700,
            cursor:"pointer", padding:0, fontFamily:"inherit",
          }}>
            View Detailed Insights <ArrowIcon />
          </button>
        </div>

        {/* ── BOTTOM ROW: vitals + meds | appointments ── */}
        <div style={{ display:"flex", gap:18, alignItems:"flex-start" }}>

          {/* Left column */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", gap:18 }}>

            {/* Current Vitals */}
            <div className="hover-lift animate-fade-up delay-200" style={S.card}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <VitalsIcon />
                  <span style={{ fontSize:15, fontWeight:800, color:"#3D2010" }}>Current Vitals</span>
                </div>
                <button style={{
                  fontSize:12, fontWeight:700, color:"#B07A62",
                  background:"none", border:"none", cursor:"pointer",
                  fontFamily:"inherit",
                }}>History</button>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
                {vitals.map((v, i) => (
                  <div key={i} style={{
                    backgroundColor:"#F9F5F2",
                    borderRadius:14, padding:"16px 18px",
                  }}>
                    <div style={{ fontSize:10.5, fontWeight:600, color:"#B09A8E", marginBottom:8, letterSpacing:"0.04em" }}>
                      {v.label}
                    </div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:8 }}>
                      <span style={{ fontSize:26, fontWeight:900, color:"#3D2010" }}>{v.value}</span>
                      <span style={{ fontSize:11, color:"#B09A8E", fontWeight:600 }}>{v.unit}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {v.up
                          ? <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>
                          : <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></>
                        }
                      </svg>
                      <span style={{ fontSize:11, fontWeight:700, color:v.color }}>{v.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Medications */}
            <div className="hover-lift animate-fade-up delay-300" style={S.card}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <MedIcon />
                  <span style={{ fontSize:15, fontWeight:800, color:"#3D2010" }}>Active Medications</span>
                </div>
                {/* Time tabs */}
                <div style={{ display:"flex", backgroundColor:"#F0E8E0", borderRadius:20, padding:3, gap:2 }}>
                  {["Morning","Afternoon","Night"].map(t => (
                    <button key={t} onClick={() => setMedTab(t)}
                      style={{
                        padding:"5px 13px", borderRadius:18, border:"none",
                        backgroundColor: medTab===t ? "#643F30" : "transparent",
                        color: medTab===t ? "#fff" : "#9C8276",
                        fontSize:11, fontWeight:700, cursor:"pointer",
                        fontFamily:"inherit", transition:"all 0.15s",
                      }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                {medications.map((m, i) => (
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:14,
                    padding:"12px 0",
                    borderBottom: i < medications.length-1 ? "1px solid #F5EDE8" : "none",
                  }}>
                    {m.pill}
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:13, fontWeight:700, color:"#3D2010", marginBottom:2 }}>{m.name}</div>
                      <div style={{ fontSize:11.5, color:"#B09A8E" }}>{m.desc}</div>
                    </div>
                    <div style={{ fontSize:11.5, fontWeight:700, color:m.statusColor, whiteSpace:"nowrap" }}>{m.status}</div>
                    <button style={{ background:"none", border:"none", cursor:"pointer", display:"flex", padding:2 }}>
                      <DotsIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Appointments panel ── */}
          <div className="hover-lift animate-fade-up delay-400" style={{
            ...S.card,
            width:290, minWidth:290,
            display:"flex", flexDirection:"column",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
              <CalIcon />
              <span style={{ fontSize:15, fontWeight:800, color:"#3D2010" }}>Appointments</span>
            </div>

            {/* Tabs */}
            <div style={{
              display:"flex",
              borderBottom:"1.5px solid #F0E8E2",
              marginBottom:16, gap:4,
            }}>
              {["Upcoming","Present","Past"].map(t => (
                <button key={t} onClick={() => setApptTab(t)}
                  style={{
                    padding:"6px 12px", border:"none", background:"none",
                    fontSize:12, fontWeight:700, cursor:"pointer",
                    fontFamily:"inherit",
                    color: apptTab===t ? "#643F30" : "#B09A8E",
                    borderBottom: apptTab===t ? "2px solid #643F30" : "2px solid transparent",
                    marginBottom:-1.5,
                    transition:"all 0.15s",
                  }}>
                  {t}
                </button>
              ))}
            </div>

            {/* Appointment list */}
            <div style={{ display:"flex", flexDirection:"column", gap:12, flex:1 }}>
              {appointments.map((a, i) => (
                <div key={i} style={{
                  backgroundColor: i===0 ? "#F9F5F2" : "#fff",
                  border: i===0 ? "none" : "1px solid #F0E8E2",
                  borderRadius:14,
                  padding:"14px 16px",
                }}>
                  {/* Top row */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                    {a.badge
                      ? <span style={{
                          fontSize:9.5, fontWeight:800,
                          backgroundColor:a.badgeBg, color:"#fff",
                          padding:"3px 9px", borderRadius:20, letterSpacing:"0.06em",
                        }}>{a.badge}</span>
                      : <span style={{ fontSize:11, color:"#B09A8E", fontWeight:600 }}>{a.date}</span>
                    }
                    <span style={{ fontSize:11, color:"#B09A8E", fontWeight:600 }}>{a.time}</span>
                  </div>
                  <div style={{ fontSize:13, fontWeight:800, color:"#3D2010", marginBottom:3 }}>{a.title}</div>
                  <div style={{ fontSize:11, color:"#9C8276", marginBottom: a.actions ? 12 : 0 }}>{a.sub}</div>
                  {a.actions && (
                    <div style={{ display:"flex", gap:8 }}>
                      <button className="hover-lift" style={{
                        flex:1, padding:"7px 0", borderRadius:10, border:"none",
                        backgroundColor:"#3D2010", color:"#fff",
                        fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
                      }}>Confirm</button>
                      <button className="hover-lift" style={{
                        flex:1, padding:"7px 0", borderRadius:10,
                        border:"1.5px solid #EAE0DA", backgroundColor:"#fff",
                        color:"#1A6478", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
                      }}>Reschedule</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Schedule button */}
            <button
              className="hover-lift"
              style={{
                display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                marginTop:16, padding:"11px", borderRadius:12,
                border:"1.5px dashed #C9B8B0", backgroundColor:"transparent",
                color:"#9C8276", fontSize:12, fontWeight:700,
                cursor:"pointer", fontFamily:"inherit",
                transition:"all 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#643F30"; e.currentTarget.style.color="#643F30"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="#C9B8B0"; e.currentTarget.style.color="#9C8276"; }}
            >
              <ScheduleIcon /> Schedule Appointment
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}




