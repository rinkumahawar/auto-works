'use client';

import React from 'react';
import { 
  TruckIcon, 
  CurrencyDollarIcon, 
  TruckIcon as DeliveryIcon,
  WrenchScrewdriverIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: TruckIcon,
      name: 'Roadside Assistance'
    },
    {
      icon: CurrencyDollarIcon,
      name: 'Car Buy/Sell'
    },
    {
      icon: DeliveryIcon,
      name: 'Quick Delivery'
    },
    {
      icon: WrenchScrewdriverIcon,
      name: 'Spare Parts'
    },
    {
      icon: UserIcon,
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
                {/* Icon - No background, larger size */}
                <div className="flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Service Name - Larger font size */}
                <h3 className="text-base md:text-lg font-poppins font-medium leading-tight text-white">
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
