'use client';

import React from 'react';
import Image from 'next/image';

const SmartFeatures: React.FC = () => {
  const features = [
    {
      image: '/images/tracking.png',
      title: 'Real-time Tracking',
      description: 'Track your mechanic in real-time with live GPS updates.'
    },
    {
      image: '/images/in-chat-app.png',
      title: 'In-app Chat',
      description: 'Communicate directly with your mechanic through secure in-app messaging.'
    },
    {
      image: '/images/seacure-payment.png',
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-grade security and encryption.'
    },
    {
      image: '/images/status-update.png',
      title: 'Status Updates',
      description: 'Get instant notifications about service progress and completion.'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6">
            Smart Features That Make a Difference
          </h2>
          <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with professional service to deliver the best roadside assistance experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Features Poster Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/features-poster.png"
                  alt="Smart Features Poster"
                  width={300}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="order-1 lg:order-2 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                {/* Image Icon - No background circle */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
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

export default SmartFeatures;
