'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SignUpPage from '../../components/SignUpPage';

export default function SignUpPageWrapper() {
    const router = useRouter();

    return (
        <SignUpPage 
            onLogin={() => router.push('/login')}
            onHome={() => router.push('/')}
        />
    );
}
