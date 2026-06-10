'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

export default function AboutPage() {
    const router = useRouter();

    return (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[#FBEEEA] min-h-screen">
            <Navbar 
                onSignUp={() => router.push('/login')} 
                onHome={() => router.push('/')}
            />
            <main>
                <Hero />
                <Services />
                <Contact />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
