'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from '../../components/LoginPage';

export default function LoginPageWrapper() {
    const router = useRouter();

    const handleLogin = (role) => {
        if (role === 'DOCTOR') {
            router.push('/doctor');
        } else if (role === 'PATIENT') {
            router.push('/patient');
        } else {
            // Otherwise redirect to root/home for this simulation
            router.push('/');
        }
    };

    return (
        <LoginPage 
            onLogin={handleLogin}
            onSignUp={() => router.push('/signup')}
            onHome={() => router.push('/')}
        />
    );
}
