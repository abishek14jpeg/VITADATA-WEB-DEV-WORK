'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DoctorDashboard from '../../components/DoctorDashboard';

export default function DoctorPage() {
    const router = useRouter();

    return (
        <DoctorDashboard 
            onLogout={() => router.push('/')}
            onPatients={() => router.push('/patient')}
        />
    );
}
