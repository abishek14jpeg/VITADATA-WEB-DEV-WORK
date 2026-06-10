'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginTypesPage from '../components/LoginTypesPage';

export default function Home() {
    const router = useRouter();

    const handleSelectRole = (rolePage) => {
        if (rolePage === 'adminC') {
            router.push('/admin/create');
        } else if (rolePage === 'doctor-login') {
            router.push('/doctor/login');
        } else if (rolePage === 'login') {
            router.push('/login');
        } else {
            router.push('/');
        }
    };

    const handleContact = () => {
        router.push('/about');
    };

    return (
        <LoginTypesPage 
            onSelectRole={handleSelectRole} 
            onContact={handleContact} 
        />
    );
}
