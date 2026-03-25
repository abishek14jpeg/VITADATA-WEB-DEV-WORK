import React, { useState, useEffect, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DoctorDashboard from './components/DoctorDashboard';
import PatientPage from './components/PatientPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SubscriptionInactivePage from './components/SubscriptionInactivePage';
import DoctorLoginPage from './components/DoctorLoginPage';
import OtpVerificationPage from './components/OtpVerificationPage';
import AdminDashboard from './components/AdminDashboard';
import AccessDeniedPage from './components/AccessDeniedPage';
import LoginTypesPage from './components/LoginTypesPage';
import ResetPassword from './components/ResetPassword';
import CreateAdminAccount from './components/AdminCreate';
export default function App() {
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "landing";
  });

  // Push a history entry whenever we navigate to a new page
  const navigate = useCallback((newPage) => {
    const newUrl = newPage === "landing" ? window.location.pathname : `${window.location.pathname}?page=${newPage}`;
    window.history.pushState({ page: newPage }, '', newUrl);
    setPage(newPage);
  }, []);

  // Replace the very first history entry so the landing page is always in the stack
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialPage = params.get("page") || "landing";
    window.history.replaceState({ page: initialPage }, '');
  }, []);

  // Sync the back/forward browser buttons with our page state
  useEffect(() => {
    const handlePop = (e) => {
      const p = e.state?.page ?? "landing";
      setPage(p);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const renderPage = () => {
    if (page === "patient") {
      return (
        <PatientPage
          onNavigate={(label) => { if (label === "Dashboard") navigate("doctor"); }}
          onLogout={() => navigate("landing")}
        />
      );
    }

    if (page === "doctor") {
      return <DoctorDashboard onLogout={() => navigate("landing")} onPatients={() => navigate("patient")} />;
    }

    if (page === "login") {
      return (
        <LoginPage
          onLogin={(role) => {
            if (role === "DOCTOR") navigate("doctor");
            else navigate("landing");
          }}
          onSignUp={() => navigate("signup")}
          onHome={() => navigate("landing")}
        />
      );
    }

    if (page === "subscription-inactive") {
      return <SubscriptionInactivePage onReturnToLogin={() => navigate("login")} />;
    }
    if(page == "resetPassword"){
      return <ResetPassword/> ;
    }

    if (page === "doctor-login") {
      return <DoctorLoginPage onLogin={() => navigate("doctor")} onSignUp={() => navigate("signup")} onHome={() => navigate("landing")} />;
    }

    if (page === "otp") {
      return <OtpVerificationPage onVerify={() => navigate("doctor")} onBack={() => navigate("login")} onHome={() => navigate("landing")} />;
    }

    if (page === "admin") {
      return <AdminDashboard onLogout={() => navigate("landing")} />;
    }
    if (page === "adminC") {
      return <CreateAdminAccount />;
    }

    if (page === "access-denied") {
      return <AccessDeniedPage onReturn={() => navigate("landing")} onLogin={() => navigate("login")} />;
    }

    if (page === "login-types") {
      return <LoginTypesPage onSelectRole={(rolePage) => navigate(rolePage)} onContact={() => navigate("landing")} />;
    }

    if (page === "signup") {
      return (
        <SignUpPage
          onLogin={() => navigate("login")}
          onHome={() => navigate("landing")}
        />
      );
    }

    return (
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar onSignUp={() => navigate("login")} />
        <main>
          <Hero />
          <Services />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <>
      {renderPage()}
    </>
  );
}
