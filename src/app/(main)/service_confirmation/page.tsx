"use client";

import { useState, useEffect, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ServiceConfirmation() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7128,
    lng: -74.0060,
    address: 'Getting your location...'
  });

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // Service confirmation data
  const confirmationData = {
    serviceRequestId: "Q2132415",
    customerName: "Ramesh",
    vehicle: "Honda City",
    vehicleNumber: "TN 34 SD 5734",
    paymentEstimation: "$4,000",
    serviceCost: "$100",
    totalEstimation: "$4,100"
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

      // Add custom marker with "201"
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

  const handlePlaceOrder = () => {
    // Handle order placement
    console.log('Order placed:', confirmationData);
    alert('Order placed successfully!');
  };

  const handleCancel = () => {
    // Handle cancellation
    console.log('Order cancelled');
    window.history.back();
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
            <CheckCircleIcon className="w-16 h-16 mx-auto mb-2 text-green-600" />
            <p className="text-lg font-medium">Service Confirmation</p>
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
                {/* Google Map */}
                <div 
                  ref={mapRef}
                  className="w-full bg-gray-200"
                  style={{ height: '600px' }}
                >
                  {/* Map will be rendered here */}
                </div>
              </div>
            </div>

            {/* Right Column - Service Confirmation Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg p-10 h-full">
                {/* Header */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Service Confirmation
                  </h1>
                </div>
                
                {/* Service Request ID */}
                <div className="mb-8">
                  <div className="text-left">
                    <span className="text-gray-700">Service Request # </span>
                    <span className="text-gray-900 font-bold">{confirmationData.serviceRequestId}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-6 mb-10">
                  {/* Customer Name */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Name:</span>
                    <span className="text-gray-900 font-semibold">{confirmationData.customerName}</span>
                  </div>

                  {/* Vehicle */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Vehicle:</span>
                    <span className="text-gray-900 font-semibold">{confirmationData.vehicle}</span>
                  </div>

                  {/* Vehicle Number */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Vehicle Number:</span>
                    <span className="text-gray-900 font-semibold">{confirmationData.vehicleNumber}</span>
                  </div>
                </div>

                {/* Payment Estimation Details */}
                <div className="space-y-6 mb-10">
                  {/* Payment Estimation */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payment Estimation:</span>
                    <span className="text-gray-900 font-semibold">{confirmationData.paymentEstimation}</span>
                  </div>

                  {/* Service Cost */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service Cost:</span>
                    <span className="text-gray-900 font-semibold">{confirmationData.serviceCost}</span>
                  </div>

                  {/* Total Estimation */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-900 font-bold text-lg">TOTAL ESTIMATION</span>
                    <span className="text-gray-900 font-bold text-lg">{confirmationData.totalEstimation}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Place Order
                  </button>

                  {/* Cancel Button */}
                  <button
                    onClick={handleCancel}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
