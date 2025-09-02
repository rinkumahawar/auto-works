'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Illinois');

  const locations = ['Illinois', 'California', 'Texas', 'New York', 'Florida'];

  return (
    <header className="bg-white text-black px-6 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo and Location */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold font-poppins text-black">Aut</span>
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
            <span className="text-2xl font-bold font-poppins text-black">Works</span>
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center space-x-2 text-sm font-poppins text-black hover:text-gray-600 transition-colors"
            >
              <span>{selectedLocation}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-32">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsLocationOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-poppins text-black hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-poppins text-black hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link href="/shop" className="text-sm font-poppins text-black hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link href="/buy-sell-car" className="text-sm font-poppins text-black hover:text-gray-600 transition-colors">
            Buy/Sell Car
          </Link>
          <Link href="/contact-us" className="text-sm font-poppins text-black hover:text-gray-600 transition-colors">
            Contact us
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="px-6 py-2 bg-white text-red-600 rounded-lg text-sm font-inter font-bold hover:bg-gray-50 transition-colors border border-red-600">
              Sign In
            </button>
          </Link>
          <button className="px-6 py-2 bg-red-600 rounded-lg text-sm font-inter font-bold hover:bg-red-700 transition-colors text-white">
            Join As
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
