'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Most of our projects are completed within 2-4 weeks. We prioritize fast delivery without sacrificing quality.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We include unlimited revisions until you&apos;re completely satisfied with the final result. Client satisfaction is our top priority.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing based on project requirements. We provide custom quotes after understanding your specific needs. No hidden costs, fully transparent pricing.',
  },
  {
    question: 'Can you help with my existing website?',
    answer: 'Absolutely! We provide website redesign, optimization, and enhancement services. We can assess your current site and suggest improvements.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients worldwide. Time zone differences are not a problem as we maintain clear communication via email, video calls, and project management tools.',
  },
  {
    question: 'What is your process for starting a project?',
    answer: 'We begin with a consultation to understand your goals. Then we create a proposal, and once approved, we start with design concepts and regular updates.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="group glass rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                {/* Question */}
                <h3 className="text-base md:text-lg font-bold text-white text-left group-hover:text-blue-300 transition-colors duration-300">
                  {item.question}
                </h3>

                {/* Chevron */}
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 ml-4 text-blue-300 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-4 md:pb-6 border-t border-white/10 animate-slide-up">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
