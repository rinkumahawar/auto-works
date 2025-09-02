'use client';

import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book Service',
      description: 'Choose your service and book instantly through our mobile app or website.'
    },
    {
      number: '02',
      title: 'Track Mechanic',
      description: 'Get real-time updates and track your assigned mechanic on the map.'
    },
    {
      number: '03',
      title: 'Get Service',
      description: 'Professional mechanic arrives at your location and provides the service.'
    },
    {
      number: '04',
      title: 'Complete & Pay',
      description: 'Service completed and pay securely through multiple payment options.'
    }
  ];

  return (
    <section className="relative bg-black text-white py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            How Road Smart Works
          </h2>
          <p className="text-xl font-inter text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get help in 4 simple steps. From booking to completion, we've made automotive services as easy as possible.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center group hover:transform hover:scale-105 transition-transform">
              {/* Step Number */}
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                <span className="text-2xl font-bold font-poppins text-white">
                  {step.number}
                </span>
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold font-poppins text-black mb-3">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-600 font-inter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Visual Element - Sports Car */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="w-32 h-20 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-20 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-300 font-inter">
              Your journey to automotive excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
