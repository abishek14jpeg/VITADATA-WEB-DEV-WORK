import React from 'react';
import {
  Stethoscope,
  FlaskConical,
  Pill,
  Monitor,
  Users,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Doctors Portal',
    description: 'Comprehensive portal for medical professionals to manage patients, prescriptions, and appointments.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Suite',
    description: 'End-to-end lab management with automated result delivery, sample tracking, and report integration.',
  },
  {
    icon: Pill,
    title: 'E-Pharmacy',
    description: 'Digital pharmacy integration with prescription verification, medication tracking, and delivery coordination.',
  },
  {
    icon: Monitor,
    title: 'Hospital Administration',
    description: 'Centralized control panel for hospital operations, staff management, and resource allocation.',
  },
  {
    icon: Users,
    title: 'Reception Hub',
    description: 'Smart front-desk management for seamless patient check-in, queue handling, and appointment coordination.',
  },
  {
    icon: Smartphone,
    title: 'Patient Appointment App',
    description: 'Mobile-first scheduling with automated reminders, follow-ups, and health records access.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-8 sm:py-10"
      style={{ background: 'hsl(30, 35%, 97%)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-6">
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight pb-4"
            style={{ color: 'hsl(28, 30%, 15%)' }}
          >
            Our Services
          </h2>
          <div
            className="w-20 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(28, 45%, 32%), transparent)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="group rounded-sm p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  background: 'hsl(0, 0%, 100%)',
                  border: '1px solid hsl(28, 20%, 80%)',
                }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-[hsl(28,30%,15%)] text-[hsl(28,30%,15%)] group-hover:bg-[hsl(28,45%,32%)] group-hover:border-[hsl(28,45%,32%)] group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3
                  className="font-heading text-base font-semibold pt-4 pb-2"
                  style={{ color: 'hsl(28, 30%, 15%)' }}
                >
                  {svc.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'hsl(28, 15%, 45%)' }}
                >
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
