"use client";

import { useState, useEffect, useRef } from "react";
import { 
  MapPinIcon, 
  ChevronDownIcon,
  UserIcon,
  PhoneIcon,
  IdentificationIcon
} from "@heroicons/react/24/outline";

export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    customerName: '',
    vehicleType: '',
    vinNumber: ''
  });

  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7128,
    lng: -74.0060,
    address: 'Getting your location...'
  });

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({
            lat: latitude,
            lng: longitude,
            address: 'Current location'
          });
          
          // Reverse geocoding to get address
          if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            const latlng = { lat: latitude, lng: longitude };
            
            geocoder.geocode({ location: latlng }, (results, status) => {
              if (status === 'OK' && results && results[0]) {
                setCurrentLocation(prev => ({
                  ...prev,
                  address: results[0].formatted_address
                }));
              }
            });
          }
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIsLoadingLocation(false);
    }
  };

  const initializeMap = () => {
    if (window.google && window.google.maps && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: currentLocation,
        zoom: 15,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Add custom marker
      const marker = new window.google.maps.Marker({
        position: currentLocation,
        map: map,
        title: 'Service Location',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#DC2626" stroke="white" stroke-width="4"/>
              <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">201</text>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });
    }
  };

  useEffect(() => {
    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=geometry,places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        getCurrentLocation();
        initializeMap();
      };
      document.head.appendChild(script);
    } else {
      getCurrentLocation();
      initializeMap();
    }
  }, []);

  useEffect(() => {
    if (window.google && window.google.maps) {
      initializeMap();
    }
  }, [currentLocation]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-200 h-64 w-full">
        <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">🔧</div>
            <p className="text-lg font-medium">Service Request</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                {/* Map Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-6 h-6 text-red-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Service Location</h3>
                        <p className="text-sm text-gray-600">
                          {isLoadingLocation ? 'Getting your location...' : currentLocation.address}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={getCurrentLocation}
                      disabled={isLoadingLocation}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      <MapPinIcon className="w-4 h-4" />
                      <span>{isLoadingLocation ? 'Loading...' : 'Update'}</span>
                    </button>
                  </div>
                </div>

                {/* Google Map */}
                <div 
                  ref={mapRef}
                  className="w-full bg-gray-200"
                  style={{ height: '500px' }}
                >
                  {/* Map will be rendered here */}
                </div>
              </div>
            </div>

            {/* Right Column - Service Request Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Request Service
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Name */}
                  <div className="space-y-2">
                    <label htmlFor="customerName" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <UserIcon className="w-5 h-5 text-gray-500" />
                      <span>Customer Name</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors placeholder-gray-400 text-gray-900"
                      required
                    />
                  </div>

                  {/* Choose Vehicle */}
                  <div className="space-y-2">
                    <label htmlFor="vehicleType" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Choose Vehicle</span>
                    </label>
                    <div className="relative">
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors appearance-none bg-white text-gray-900 pr-10"
                        required
                      >
                        <option value="" disabled>Select your vehicle type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Truck</option>
                        <option value="coupe">Coupe</option>
                        <option value="convertible">Convertible</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="wagon">Wagon</option>
                        <option value="van">Van</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* VIN Number */}
                  <div className="space-y-2">
                    <label htmlFor="vinNumber" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <IdentificationIcon className="w-5 h-5 text-gray-500" />
                      <span>VIN Number</span>
                    </label>
                    <input
                      type="text"
                      id="vinNumber"
                      name="vinNumber"
                      value={formData.vinNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your vehicle's VIN number"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors placeholder-gray-400 text-gray-900"
                      maxLength={17}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      17-character Vehicle Identification Number
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105"
                    >
                      Place Order
                    </button>
                  </div>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional certified mechanics</li>
                    <li>• Mobile service available</li>
                    <li>• Quality parts and warranties</li>
                    <li>• Competitive pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
