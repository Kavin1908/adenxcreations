'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceSlide {
  title: string;
  description: string;
  image: string;
}

const SERVICES: ServiceSlide[] = [
  {
    title: 'Website Design & Development',
    description: 'Creating responsive, modern websites that drive conversions and engage users with cutting-edge technology',
    image: '/service-web-design.jpg',
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing with cinematic effects, color grading, and compelling storytelling',
    image: '/service-video-editing.jpg',
  },
  {
    title: 'Photo Editing',
    description: 'Expert photo retouching and enhancement to make your visuals stunning and professional',
    image: '/service-photo-editing.jpg',
  },
  {
    title: 'Graphic Design',
    description: 'Creative graphic design solutions that capture attention and communicate your brand message effectively',
    image: '/service-graphic-design.jpg',
  },
  {
    title: 'Social Media Design',
    description: 'Engaging social media content designed to increase engagement and build your online presence',
    image: '/service-social-media.jpg',
  },
  {
    title: 'Branding Services',
    description: 'Complete brand identity solutions including logos, guidelines, and visual systems',
    image: '/service-branding.jpg',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interface and experience design that creates intuitive and beautiful digital products',
    image: '/service-ux-design.jpg',
  },
  {
    title: 'Motion Graphics',
    description: 'Dynamic animated graphics and motion design that bring your content to life',
    image: '/service-motion-graphics.jpg',
  },
];

export default function ServicesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const currentSlide = SERVICES[currentIndex];

  return (
    <section id="showcase" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            See Our <span className="gradient-text">Services in Action</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Explore the visual work across all our creative services
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] mb-12 animate-slide-up">
          {/* Slide Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass border border-white/10">
            {/* Current Slide Image */}
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-cover"
              priority
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                {currentSlide.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl mb-6">
                {currentSlide.description}
              </p>
              <a
                href="#contact"
                className="inline-block btn-primary text-sm md:text-base"
              >
                Get Started with This Service
              </a>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 neon-glow"
            >
              <ChevronLeft size={24} className="md:w-6 md:h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 neon-glow"
            >
              <ChevronRight size={24} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center text-gray-400 text-sm md:text-base mb-12">
          {currentIndex + 1} / {SERVICES.length}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 flex-wrap">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-400 w-8 md:w-10'
                  : 'bg-white/20 w-2 md:w-3 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
