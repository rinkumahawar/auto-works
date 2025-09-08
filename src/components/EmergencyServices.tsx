'use client';

import React from 'react';
import Image from 'next/image';

const EmergencyServices: React.FC = () => {
  const emergencyServices = [
    {
      image: '/images/tyre-replacement.svg',
      title: 'Tyre replacement',
      description: 'Professional tyre replacement service with quality tyres and expert fitting.'
    },
    {
      image: '/images/fuel-replacement.svg',
      title: 'Fuel Delivery',
      description: 'Quick fuel delivery to get you back on the road in no time.'
    },
    {
      image: '/images/jump-start.png',
      title: 'Jump Start',
      description: 'Reliable jump start service for dead batteries with professional equipment.'
    },
    {
      image: '/images/towing-service.png',
      title: 'Towing Service',
      description: '24/7 towing service to the nearest garage or your preferred location.'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6">
            Emergency Services When You Need Them Most
          </h2>
          <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Professional roadside assistance with real-time tracking, instant booking, and verified mechanics available 24/7.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {emergencyServices.map((service, index) => (
            <div key={index} className="bg-white border-2 border-red-600 rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="text-center">
                {/* Image Icon - Larger size */}
                <div className="flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-poppins text-black mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-red-600 text-white rounded-lg font-inter font-bold hover:bg-red-700 transition-colors">
            <span>Show more</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
