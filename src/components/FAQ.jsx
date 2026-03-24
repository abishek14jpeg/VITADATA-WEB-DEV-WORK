import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: <>What is <span className="logo-vitadata">VitaData</span> <span className="logo-solutions">Solutions</span>?</>,
    answer:
      <><span className="logo-vitadata">VitaData</span> <span className="logo-solutions">Solutions</span> is a comprehensive healthcare management platform that connects doctors, labs, pharmacies, and patients through an integrated digital ecosystem. We streamline hospital operations and improve patient outcomes.</>,
  },
  {
    question: 'How do I schedule an appointment?',
    answer:
      'You can schedule an appointment through our Patient Appointment App available on both iOS and Android. Simply sign up, choose your preferred doctor, select a convenient time slot, and confirm your booking. You will receive automated reminders before your visit.',
  },
  {
    question: 'Is my medical data secure with VitaData?',
    answer:
      'Absolutely. We employ industry-leading encryption standards and comply with all major healthcare data regulations including HIPAA. Your medical records are stored securely and only accessible by authorized healthcare providers with your consent.',
  },
  {
    question: 'Can hospitals integrate VitaData with existing systems?',
    answer:
      'Yes. VitaData is designed with interoperability in mind. Our platform supports HL7 FHIR standards and can integrate with most existing Electronic Health Record (EHR) systems, laboratory information systems, and hospital management software.',
  },
  {
    question: 'What support options are available?',
    answer:
      'We offer 24/7 technical support through email, phone, and live chat. Enterprise clients receive a dedicated account manager and priority response times. Our comprehensive knowledge base and onboarding training ensure a smooth transition to our platform.',
  },
  {
    question: 'How does the E-Pharmacy feature work?',
    answer:
      'Our E-Pharmacy module digitizes the entire prescription workflow. Doctors prescribe digitally, prescriptions are verified automatically, and patients can choose home delivery or pharmacy pickup. Real-time medication tracking and interaction checks ensure safety.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-8 sm:py-10"
      style={{ background: 'hsl(0, 0%, 100%)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight pb-4"
            style={{ color: 'hsl(28, 30%, 15%)' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: 'hsl(28, 15%, 45%)' }}
          >
            Find answers to common questions about our healthcare management platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AccordionPrimitive.Root type="single" collapsible className="flex flex-col gap-3">
            {faqData.map((item, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid hsl(28, 20%, 80%)' }}
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className="group flex w-full items-center justify-between px-6 py-3.5 text-left font-heading text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[hsl(28,45%,32%)] hover:text-white"
                    style={{
                      color: 'hsl(28, 30%, 15%)',
                      background: 'hsl(30, 35%, 97%)',
                    }}
                  >
                    {item.question}
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-white"
                      style={{ color: 'hsl(28, 45%, 32%)' }}
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                >
                  <div
                    className="px-6 py-4 font-body text-sm leading-relaxed"
                    style={{
                      color: 'hsl(28, 15%, 45%)',
                      background: 'hsl(0, 0%, 100%)',
                    }}
                  >
                    {item.answer}
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}


