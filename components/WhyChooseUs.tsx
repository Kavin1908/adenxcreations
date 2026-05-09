'use client';

import React from 'react';
import { Zap, DollarSign, Heart, Smartphone, Star, Sparkles } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Modern Creative Designs',
    description: 'Cutting-edge designs that captivate and engage your audience with premium aesthetics.',
  },
  {
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality or attention to detail.',
  },
  {
    icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Transparent Pricing',
    description: 'Clear, competitive rates with no hidden fees. You know what you&apos;re paying for.',
  },
  {
    icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Client Focused',
    description: 'Your satisfaction is our priority. Unlimited revisions until you&apos;re 100% happy.',
  },
  {
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Fully Responsive',
    description: 'All solutions perfectly optimized for every device and screen size.',
  },
  {
    icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Professional Expertise',
    description: 'Experienced team with proven track record in digital creative solutions.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Why Choose <span className="gradient-text">AdenX</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            We combine creativity, expertise, and technology to deliver exceptional results that drive real business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:scale-105 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-gray-500/0 group-hover:from-blue-500/5 group-hover:to-gray-500/5 rounded-xl transition-all duration-500 -z-10"></div>

              {/* Icon */}
              <div className="mb-4 inline-block p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <div className="text-gray-300 group-hover:text-blue-300 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 rounded-b-xl w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
