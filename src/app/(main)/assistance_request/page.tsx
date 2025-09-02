'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPinIcon, PhoneIcon, UserIcon, ChatBubbleLeftRightIcon, MapIcon } from '@heroicons/react/24/outline';

const AssistanceRequestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: ''
  });
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7128,
    lng: -74.0060,
    address: 'New York, NY'
  });
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize Google Map
  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: currentLocation.lat, lng: currentLocation.lng },
      zoom: 15,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Add marker
    const marker = new window.google.maps.Marker({
      position: { lat: currentLocation.lat, lng: currentLocation.lng },
      map: map,
      title: 'Your Location',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#ef4444"/>
            <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">201</text>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32)
      }
    });

    markerRef.current = marker;
  };

  // Get current location
  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({
            lat: latitude,
            lng: longitude,
            address: 'Getting address...'
          });

          // Update map
          if (mapInstanceRef.current && markerRef.current) {
            const newPosition = { lat: latitude, lng: longitude };
            mapInstanceRef.current.setCenter(newPosition);
            markerRef.current.setPosition(newPosition);
          }

          // Get address from coordinates
          getAddressFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      console.error('Geolocation not supported');
      setIsLoadingLocation(false);
    }
  };

  // Get address from coordinates using Google Geocoding
  const getAddressFromCoordinates = (lat: number, lng: number) => {
    if (!window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat, lng } },
      (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const address = results[0].formatted_address;
          setCurrentLocation(prev => ({ ...prev, address }));
        }
        setIsLoadingLocation(false);
      }
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assistance request:', formData);
    console.log('Current location:', currentLocation);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Emergency Roadside Assistance
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get immediate help when you need it most. Our professional towing and 
              roadside assistance services are available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Image and Form */}
            <div className="space-y-8">
              {/* Tow Truck Image */}
              <div className="relative">
                <div className="w-full h-80 bg-gray-300 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Tow truck with sports car"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Request Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request towing assistance
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <UserIcon className="w-5 h-5 text-red-600" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <PhoneIcon className="w-5 h-5 text-red-600" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-red-600" />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your situation and location details"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105"
                  >
                    Request Assistance
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Location and Map */}
            <div className="space-y-8">
              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Map Header with Location Info */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MapIcon className="w-6 h-6 text-red-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Your Location</h3>
                        <p className="text-sm text-gray-600">
                          {isLoadingLocation ? 'Getting your location...' : currentLocation.address}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={getCurrentLocation}
                      disabled={isLoadingLocation}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <MapPinIcon className="w-4 h-4" />
                      <span>{isLoadingLocation ? 'Loading...' : 'Update Location'}</span>
                    </button>
                  </div>
                </div>

                {/* Google Map */}
                <div 
                  ref={mapRef}
                  className="w-full h-96 bg-gray-200"
                  style={{ minHeight: '400px' }}
                >
                  {/* Map will be rendered here */}
                </div>
                
                {/* Map Controls */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center justify-end">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Roadside Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond towing, we offer comprehensive roadside assistance to get you back on the road quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Jump Start', icon: '🔋', description: 'Battery jump start service' },
              { title: 'Fuel Delivery', icon: '⛽', description: 'Emergency fuel delivery' },
              { title: 'Tire Change', icon: '🛞', description: 'Flat tire replacement' },
              { title: 'Lockout Service', icon: '🔑', description: 'Car lockout assistance' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssistanceRequestPage;
