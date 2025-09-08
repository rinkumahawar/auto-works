'use client';

import React from 'react';
import Image from 'next/image';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      image: '/images/road-assistance.png',
      name: 'Roadside Assistance'
    },
    {
      image: '/images/car-buy-sell.png',
      name: 'Car Buy/Sell'
    },
    {
      image: '/images/quick-delivery.png',
      name: 'Quick Delivery'
    },
    {
      image: '/images/spare-parts.png',
      name: 'Spare Parts'
    },
    {
      image: '/images/machanic.png',
      name: 'Mechanic Booking'
    }
  ];

  return (
    <section className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex flex-col items-center space-y-4">
                {/* Image Icon - Equal height and width */}
                <div className="flex items-center justify-center w-16 h-16">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                
                {/* Service Name - Consistent alignment */}
                <h3 className="text-base md:text-lg font-poppins font-medium leading-tight text-white text-center">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
