'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AccessDeniedPage from '../../components/AccessDeniedPage';

export default function AccessDeniedPageWrapper() {
    const router = useRouter();

    return (
        <AccessDeniedPage 
            onReturn={() => router.push('/')}
            onLogin={() => router.push('/login')}
        />
    );
}
