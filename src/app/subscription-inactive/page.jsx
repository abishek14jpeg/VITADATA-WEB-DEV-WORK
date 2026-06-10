'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SubscriptionInactivePage from '../../components/SubscriptionInactivePage';

export default function SubscriptionInactivePageWrapper() {
    const router = useRouter();

    return (
        <SubscriptionInactivePage 
            onReturnToLogin={() => router.push('/login')}
        />
    );
}
