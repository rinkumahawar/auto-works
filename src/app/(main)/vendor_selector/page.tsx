'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPinIcon, PhoneIcon, ChatBubbleLeftRightIcon, StarIcon, MapIcon } from '@heroicons/react/24/outline';

const VendorSelectorPage: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7128,
    lng: -74.0060,
    address: 'New York, NY'
  });
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  const vendors = [
    {
      id: '1',
      name: 'AAMCO Total Car Care',
      address: '2916 Atlantic Ave, Brooklyn, NY 11207, U.S.A.',
      rating: 5,
      profileImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      phone: '+1 (555) 123-4567',
      distance: '0.8 miles away'
    },
    {
      id: '2',
      name: 'AAMCO Total Car Care',
      address: '2916 Atlantic Ave, Brooklyn, NY 11207, U.S.A.',
      rating: 5,
      profileImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      phone: '+1 (555) 123-4567',
      distance: '1.2 miles away'
    }
  ];

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
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="#ef4444"/>
            <circle cx="16" cy="16" r="8" fill="#ef4444"/>
            <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">201</text>
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

  const handleVendorSelect = (vendorId: string) => {
    setSelectedVendor(vendorId);
  };

  const handleBookNow = (vendorId: string) => {
    console.log('Booking vendor:', vendorId);
    // Handle booking logic here
  };

  const handleNext = () => {
    if (selectedVendor) {
      console.log('Proceeding with vendor:', selectedVendor);
      // Handle next step logic here
    } else {
      alert('Please select a vendor first');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Select Your Service Vendor
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our network of trusted automotive service providers 
              near your location for quality and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Contained */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column - Vendor Selection (2/3 width) */}
            <div className="lg:w-2/3 space-y-6">
              {/* Section Header */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Select your near by vendor
                </h2>
                <p className="text-gray-600">
                  Choose from our verified automotive service providers
                </p>
              </div>

              {/* Vendor Listings */}
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div 
                    key={vendor.id}
                    className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-200 cursor-pointer hover:shadow-xl ${
                      selectedVendor === vendor.id ? 'border-red-500' : 'border-transparent'
                    }`}
                    onClick={() => handleVendorSelect(vendor.id)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Vendor Profile Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={vendor.profileImage}
                          alt={vendor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>

                      {/* Vendor Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {vendor.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {vendor.address}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {vendor.distance}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(vendor.rating)].map((_, index) => (
                            <StarIcon key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {vendor.rating}.0
                          </span>
                        </div>

                        {/* Book Now Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookNow(vendor.id);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                          Book Now
                        </button>
                      </div>

                      {/* Contact Icons */}
                      <div className="flex space-x-3">
                        <button className="w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors">
                          <ChatBubbleLeftRightIcon className="w-5 h-5 text-red-600" />
                        </button>
                        <button className="w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors">
                          <PhoneIcon className="w-5 h-5 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Map (1/3 width) */}
            <div className="lg:w-1/3 space-y-6">
              {/* Map Section */}
              <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                {/* Map Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapIcon className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium text-gray-700">Your Location</span>
                    </div>
                    <button
                      onClick={getCurrentLocation}
                      disabled={isLoadingLocation}
                      className="text-xs bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded transition-colors"
                    >
                      {isLoadingLocation ? 'Loading...' : 'Update'}
                    </button>
                  </div>
                </div>

                {/* Google Map */}
                <div 
                  ref={mapRef}
                  className="w-full h-80 bg-gray-200"
                  style={{ minHeight: '320px' }}
                >
                  {/* Map will be rendered here */}
                </div>
              </div>

              {/* Next Button */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
                <button
                  onClick={handleNext}
                  disabled={!selectedVendor}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed"
                >
                  Next
                </button>
                {!selectedVendor && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Please select a vendor to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorSelectorPage;
