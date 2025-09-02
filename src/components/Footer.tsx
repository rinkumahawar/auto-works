'use client';

import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      'Emergency',
      'Towing',
      'Jump Start Service',
      'Fuel Delivery',
      'On-site Repairs',
      'Tire Change'
    ],
    marketplace: [
      'Buy Cars',
      'Sell Cars',
      'Spare Parts',
      'Verified Dealers',
      'Part Search'
    ],
    company: [
      'Company',
      'About Us',
      'How It Works',
      'Careers'
    ],
    support: [
      'Safety Guidelines',
      'Privacy Policy',
      'Help Center'
    ]
  };

  const socialMedia = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📷' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'WhatsApp', icon: '💬' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Aut</span>
              <span className="text-2xl font-bold text-red-600">O</span>
              <span className="text-2xl font-bold">Works</span>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 font-inter mb-6 leading-relaxed max-w-md">
              Your complete automotive solution platform providing roadside assistance, car marketplace, and professional services 24/7.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm font-inter">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>123 Auto Street, Chicago, IL 60601</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>18001202540</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@autoworks.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-lg font-bold font-poppins mb-4">Services</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-inter">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketplace */}
              <div>
                <h3 className="text-lg font-bold font-poppins mb-4">Marketplace</h3>
                <ul className="space-y-2">
                  {footerLinks.marketplace.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-inter">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold font-poppins mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-inter">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-bold font-poppins mb-4">Support</h3>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-inter">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm font-inter mb-4 md:mb-0">
            Copyright@2025 Auto-Works. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm font-inter">Follow On</span>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
