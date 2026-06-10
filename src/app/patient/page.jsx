'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PatientPage from '../../components/PatientPage';

export default function PatientPageWrapper() {
    const router = useRouter();

    const handleNavigate = (label) => {
        if (label === 'Dashboard') {
            router.push('/doctor');
        }
    };

    return (
        <PatientPage 
            onNavigate={handleNavigate}
            onLogout={() => router.push('/')}
        />
    );
}
