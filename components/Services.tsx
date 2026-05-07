'use client';

import React from 'react';
import {
  Code2,
  Video,
  Image,
  Palette,
  Smartphone,
  Sparkles,
  Zap,
  Layout,
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code2 size={32} />,
    title: 'Website Design & Development',
    description: 'Custom, responsive websites that drive conversions and engage users.',
  },
  {
    icon: <Video size={32} />,
    title: 'Video Editing',
    description: 'Professional video production and editing for all your content needs.',
  },
  {
    icon: <Image size={32} />,
    title: 'Photo Editing',
    description: 'Expert photo retouching and enhancement for stunning visuals.',
  },
  {
    icon: <Palette size={32} />,
    title: 'Graphic Design',
    description: 'Creative design solutions that bring your brand to life.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Social Media Design',
    description: 'Eye-catching content designed for maximum social media engagement.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Branding Services',
    description: 'Complete brand identity design from logo to guidelines.',
  },
  {
    icon: <Layout size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates exceptional digital experiences.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Motion Graphics',
    description: 'Dynamic animations that capture attention and tell your story.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Professional digital solutions tailored to elevate your brand and drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-gray-500/0 group-hover:from-blue-500/5 group-hover:to-gray-500/5 rounded-xl transition-all duration-500 -z-10"></div>

              {/* Icon */}
              <div className="mb-4 md:mb-6 inline-block p-3 md:p-4 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <div className="text-gray-300 group-hover:text-blue-300 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
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
