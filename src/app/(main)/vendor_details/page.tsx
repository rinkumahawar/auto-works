"use client";

import { useState } from "react";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

export default function VendorDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} className="w-6 h-6 text-yellow-400" />);
      } else {
        stars.push(<StarOutlineIcon key={i} className="w-6 h-6 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-200 h-64 w-full">
        {/* This is a placeholder for hero image/video */}
        <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
          <div className="text-center text-gray-600">
          </div>
        </div>
      </section>

      {/* Vendor Details Section */}
      <section className="container mx-auto py-8">
          <div className="max-w-6xl mx-auto">
            {/* Vendor Details Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Left Column - Vendor Images */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-96 lg:h-full">
                    <img
                      src={images[selectedImage]}
                      alt="AAMCO Transmissions & Total Car Care"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Gallery Overlay */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                          <span className="text-black font-bold text-sm">A</span>
                        </div>
                        <span className="text-sm font-medium">+{images.length - 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex space-x-2 overflow-x-auto">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImage === index 
                              ? 'border-red-500' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Vendor Information */}
                <div className="p-8 lg:p-10">
                  {/* Vendor Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    AAMCO Transmissions & Total Car Care
                  </h1>

                  {/* Location */}
                  <div className="flex items-center space-x-2 mb-6">
                    <MapPinIcon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 text-lg">
                      2916 Atlantic Ave, Brooklyn, NY 11207, United States
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-3xl font-bold text-gray-900">4.2</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(4.2)}
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View more
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      At all AAMCO locations we strive to get your vehicle repaired as quickly as possible, 
                      however different repairs or services will take different lengths of time and we will 
                      never sacrifice quality for speed. We will have a better estimate of completion time 
                      when after we perform our Vehicle Courtesy Check of your vehicle.
                    </p>
                  </div>

                  {/* Book Now Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
