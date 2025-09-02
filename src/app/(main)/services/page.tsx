import React from 'react';
import { 
  WrenchScrewdriverIcon, 
  CogIcon, 
  ExclamationTriangleIcon,
  BoltIcon,
  CpuChipIcon,
  BoltSlashIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "DIAGNOSTIC SERVICE",
      description: "Minor repairs and tire changes at your location",
      icon: WrenchScrewdriverIcon,
      color: "bg-red-600"
    },
    {
      id: 2,
      title: "ROUTINE MAINTENANCE",
      description: "Minor repairs and tire changes at your location",
      icon: CogIcon,
      color: "bg-red-600"
    },
    {
      id: 3,
      title: "BREAK REPAIR SYSTEM",
      description: "Minor repairs and tire changes at your location",
      icon: ExclamationTriangleIcon,
      color: "bg-red-600"
    },
    {
      id: 4,
      title: "ENGINE REPAIR SYSTEM",
      description: "Minor repairs and tire changes at your location",
      icon: BoltIcon,
      color: "bg-red-600"
    },
    {
      id: 5,
      title: "TRANSMISSION SERVICES",
      description: "Minor repairs and tire changes at your location",
      icon: CpuChipIcon,
      color: "bg-red-600"
    },
    {
      id: 6,
      title: "ELECTRICITY SYSTEM REPAIR",
      description: "Minor repairs and tire changes at your location",
      icon: BoltSlashIcon,
      color: "bg-red-600"
    },
    {
      id: 7,
      title: "TIRE SYSTEM",
      description: "Minor repairs and tire changes at your location",
      icon: CircleStackIcon,
      color: "bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Automotive Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional automotive solutions delivered right to your location. 
              From diagnostics to major repairs, we&apos;ve got you covered with expert 
              mechanics and quality service.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Service
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Auto Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of professional automotive services. 
              All services are performed by certified mechanics with quality guarantees.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Book Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
                  Book
                </button>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t find the service you need? Contact us for custom automotive solutions 
                tailored to your specific requirements.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide professional, reliable, and convenient automotive services 
              that keep you moving safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Emergency services available round the clock for your convenience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Mechanics</h3>
              <p className="text-gray-600">All our technicians are certified and experienced professionals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9l1.879-2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Service</h3>
              <p className="text-gray-600">We come to you! No need to tow your vehicle to a shop.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
