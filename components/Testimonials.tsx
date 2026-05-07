'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  feedback: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    feedback: 'AdenX Creations transformed our brand entirely. Their team understood our vision and delivered a stunning website and branding package that exceeded expectations.',
    rating: 5,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Michael Chen',
    company: 'Digital Innovation Co.',
    feedback: 'Professional, modern, and results-driven. The design work perfectly captured our brand identity and helped us stand out in a competitive market.',
    rating: 5,
    color: 'from-gray-500 to-gray-600',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Trusted by <span className="gradient-text">Innovative Brands</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Real feedback from clients who transformed their businesses with our work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:scale-105 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 rounded-xl transition-all duration-500 -z-10`}></div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-blue-300 fill-blue-300"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                {/* Avatar placeholder */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg md:text-xl`}>
                  {testimonial.name.charAt(0)}
                </div>

                {/* Name and company */}
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-300 text-xs md:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
