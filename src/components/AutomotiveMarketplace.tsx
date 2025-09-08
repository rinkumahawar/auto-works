'use client';

import React from 'react';
import { 
  ClockIcon, 
  CheckCircleIcon, 
  LockClosedIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const AutomotiveMarketplace: React.FC = () => {
  const marketplaceFeatures = [
    {
      icon: ClockIcon,
      title: 'Real time Inquiries',
      description: 'Get instant responses to your car and parts inquiries from verified sellers.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Verified Listings',
      description: 'All listings are verified and quality-checked for your peace of mind.'
    },
    {
      icon: LockClosedIcon,
      title: 'Secure Payments',
      description: 'Protected transactions with escrow services and buyer protection.'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6">
            Your One Stop Automotive Marketplace
          </h2>
          <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Buy and sell cars, find genuine spare parts, and connect with trusted dealers - all in one integrated platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* SUV with Smartphones */}
              <div className="relative">
              {/* Marketplace Poster Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/marketplace-poster.png"
                  alt="Automotive Marketplace Poster"
                  width={300}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="order-1 lg:order-2 space-y-8">
            {marketplaceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                {/* Icon */}
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-poppins text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveMarketplace;
