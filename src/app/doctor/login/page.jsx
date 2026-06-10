'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DoctorLoginPage from '../../../components/DoctorLoginPage';

export default function DoctorLoginPageWrapper() {
    const router = useRouter();

    return (
        <DoctorLoginPage 
            onLogin={() => router.push('/doctor')}
            onSignUp={() => router.push('/signup')}
            onHome={() => router.push('/')}
        />
    );
}
