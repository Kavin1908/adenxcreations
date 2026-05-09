'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/adenxcreations', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/adenxcreations', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/adenxcreations', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative rounded-lg overflow-hidden silver-glow transition-all duration-300">
              <Image
                src="/adenx-logo.jpg"
                alt="AdenX Creations"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">AdenX Creations</span>
          </Link>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Premium digital creative solutions for brands that demand excellence. We transform visions into stunning digital experiences.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-300 hover:border-white/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
