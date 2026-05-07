'use client';

import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              About <span className="gradient-text">AddenX Creations</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              We are a team of creative professionals dedicated to transforming your vision into stunning digital experiences. With expertise spanning web design, branding, video production, and more, we help businesses elevate their online presence.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Founded on the principles of creativity, innovation, and client satisfaction, AddenX Creations partners with businesses to achieve their digital goals. We combine cutting-edge design with strategic thinking to deliver results that matter.
            </p>

            {/* Values */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-base md:text-lg">Our Mission</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    To empower brands through premium digital solutions that inspire, engage, and drive growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-base md:text-lg">Our Approach</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Creativity meets strategy. We deliver thoughtful solutions that produce tangible, measurable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-base md:text-lg">Our Team</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Experienced creators and technologists committed to excellence and your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative h-96 md:h-[500px] animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* Large gradient circle */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass border border-white/10">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-500/10"></div>

              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 blur-xl animate-float"></div>
              <div
                className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 opacity-20 blur-xl animate-float"
                style={{ animationDelay: '1s' }}
              ></div>

              {/* Center content */}
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="gradient-text">Digital</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold">
                  <span className="gradient-text">Excellence</span>
                </div>
                <p className="text-gray-300 mt-6 text-sm md:text-base max-w-xs">
                  Crafting premium digital experiences
                </p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/20 pointer-events-none animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
