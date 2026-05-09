'use client';

import React from 'react';
import { Mail, Phone, MessageSquare, Instagram } from 'lucide-react';

export default function Contact() {

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'adenxcreations@gmail.com',
      href: 'mailto:adenxcreations@gmail.com',
      color: 'text-blue-300',
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+91 7200906819',
      href: 'tel:+917200906819',
      color: 'text-blue-300',
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'WhatsApp',
      value: '+91 7200906819',
      href: 'https://wa.me/917200906819',
      color: 'text-blue-300',
    },
    {
      icon: <Instagram size={28} />,
      title: 'Instagram',
      value: '@adenxcreations',
      href: 'https://instagram.com/adenxcreations',
      color: 'text-blue-300',
    },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Ready to transform your brand? Reach out through any of these channels.
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative glass rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-gray-500/0 group-hover:from-blue-500/5 group-hover:to-gray-500/5 rounded-xl transition-all duration-500 -z-10"></div>

              {/* Icon */}
              <div className="mb-4 inline-block p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <div className={`${method.color}`}>{method.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {method.title}
              </h3>

              {/* Value */}
              <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {method.value}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 rounded-b-xl w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Ready to get started? Connect with us on WhatsApp
          </p>
          <a 
            href="https://wa.me/917200906819"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:scale-105"
          >
            <MessageSquare size={20} className="mr-2" />
            Start on WhatsApp
          </a>
        </div>
      </div>


    </section>
  );
}
