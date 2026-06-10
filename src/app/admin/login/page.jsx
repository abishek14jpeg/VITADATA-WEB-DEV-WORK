'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AdminLoginPage from '../../../components/AdminLoginPage';

export default function AdminLoginPageWrapper() {
    const router = useRouter();

    return (
        <AdminLoginPage 
            onLogin={() => router.push('/admin')}
            onSignUp={() => router.push('/admin/create')}
            onHome={() => router.push('/')}
        />
    );
}
