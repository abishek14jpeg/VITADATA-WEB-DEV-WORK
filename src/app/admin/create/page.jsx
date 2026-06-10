'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CreateAdminAccount from '../../../components/AdminCreate';

export default function AdminCreatePage() {
    const router = useRouter();

    return (
        <CreateAdminAccount 
            onSignIn={() => router.push('/admin/login')}
            onHome={() => router.push('/')}
        />
    );
}
