import React, { useState } from 'react';

const HelpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        <path fill="none" d="M0 0h48v48H0z" />
    </svg>
);

export default function DoctorLoginPage({ onLogin, onSignUp, onHome }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin) onLogin();
    };

    return (
        <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center font-sans text-[#3D2010] relative overflow-hidden">

            {/* Main Card */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(217,119,87,0.08)] w-full max-w-[320px] sm:max-w-[360px] p-5 sm:p-7 flex flex-col items-center mx-4 border border-[rgba(255,204,172,0.3)] relative z-10 animate-fade-up">

                {/* Logo */}
                <div className="flex flex-col items-center mb-2">
                    <button onClick={() => onHome && onHome()} className="border-none bg-transparent cursor-pointer p-0" title="Back to Home">
                        <img src="/vitadata-logo-updated.svg" alt="VitaData Solutions" className="w-[85px] sm:w-[100px] h-auto object-contain mb-1" />
                    </button>
                </div>

                {/* Heading */}
                <h1 className="text-[20px] sm:text-[22px] font-bold text-[#3D2010] mb-1.5">Doctor Login</h1>
                <p className="text-[#6B7280] text-[13px] sm:text-[14px] mb-3">Sign in to access your dashboard</p>

                {/* Form */}
                <form className="w-full" onSubmit={handleSubmit}>

                    <div className="mb-3.5">
                        <label className="block text-[#374151] text-[12px] sm:text-[13px] font-medium mb-1.5">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-[8px] sm:px-4 sm:py-[10px] rounded-lg border border-[rgba(255,204,172,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D97757]/20 focus:border-[#D97757] text-[13px] sm:text-[14px] text-[#3D2010]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#374151] text-[12px] sm:text-[13px] font-medium mb-1.5">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-[8px] sm:px-4 sm:py-[10px] rounded-lg border border-[rgba(255,204,172,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D97757]/20 focus:border-[#D97757] text-[13px] sm:text-[14px] text-[#3D2010]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                            <input type="checkbox" className="w-[14px] h-[14px] rounded border-[#FFCCAC] text-[#D97757] focus:ring-[#D97757]" />
                            <span className="text-[#3D2010] text-[12px] sm:text-[13px] font-medium">Remember me</span>
                        </label>
                        <a href="#" className="text-[#D97757] text-[12px] sm:text-[13px] hover:underline hover:text-[#9B6B5A]">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="hover-lift w-full bg-[#3D2010] hover:bg-[#D97757] text-white font-medium py-[8px] sm:py-[10px] rounded-lg transition-colors text-[13px] sm:text-[14px] mb-4 shadow-sm"
                    >
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="absolute w-full border-t border-[#E5E7EB]"></div>
                        <span className="relative bg-white px-3 text-[#9CA3AF] text-[11px] sm:text-[12px]">Or continue with</span>
                    </div>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="hover-lift w-full bg-white border border-[rgba(255,204,172,0.4)] hover:bg-[rgba(255,204,172,0.1)] text-[#3D2010] font-semibold py-[8px] sm:py-[10px] rounded-lg transition-colors text-[12px] sm:text-[13px] flex items-center justify-center gap-2 mb-5"
                    >
                        <GoogleIcon />
                        Continue with Google
                    </button>

                </form>

                {/* Footer Link */}
                <p className="text-[#9C8276] text-[14px]">
                    Don't have an account?{' '}
                    <button onClick={onSignUp} className="text-[#D97757] hover:underline font-medium focus:outline-none">
                        Sign up
                    </button>
                </p>

            </div>

            {/* Floating Help Button */}
            <button className="hover-lift animate-fade-up delay-200 absolute bottom-8 right-8 w-12 h-12 bg-[#3D2010] hover:bg-[#D97757] text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-20">
                <HelpIcon />
            </button>

            {/* Back to Home Link */}
            <button
                onClick={() => onHome && onHome()}
                className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-[#3D2010] hover:text-[#D97757] font-medium transition-colors text-[14px] sm:text-[16px] z-20"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
            </button>

        </div>
    );
}
