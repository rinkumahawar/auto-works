'use client';

import React from 'react';
import { 
  ClockIcon, 
  CheckCircleIcon, 
  LockClosedIcon 
} from '@heroicons/react/24/outline';

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
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  {/* SUV Representation */}
                  <div className="w-40 h-24 bg-gray-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-20 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>
                  
                  {/* Two Smartphones */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-24 bg-black rounded-xl p-1">
                      <div className="w-full h-full bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="w-16 h-24 bg-black rounded-xl p-1">
                      <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4 font-inter">
                    Marketplace apps for cars & parts
                  </p>
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
