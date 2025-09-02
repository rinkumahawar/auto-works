'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const LoginHeader: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    'English (United States)',
    'Español',
    'Français',
    'Deutsch',
    'Italiano',
    'हिंदी',
    '中文',
    '日本語'
  ];

  return (
    <header className="bg-white text-black px-6 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold">Aut</span>
            {/* Car Wheel Icon with Speed Lines */}
            <div className="relative">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              {/* Speed Lines */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                <div className="flex space-x-1">
                  <div className="w-1 h-2 bg-red-600"></div>
                  <div className="w-1 h-3 bg-red-600"></div>
                  <div className="w-1 h-2 bg-red-600"></div>
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold">Works</span>
          </Link>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <span className="text-sm font-medium">English (United States)</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>

          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Handle language change
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
