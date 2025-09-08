"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

type LatLng = { lat: number; lng: number };

export default function BookingStatusPage() {
  const [center, setCenter] = useState<LatLng>({ lat: 40.7128, lng: -74.006 });
  const mapRef = useRef<HTMLDivElement>(null);

  const currentStep = 4; // 0-indexed progress for visual state

  const steps = [
    "Push acceptable the job",
    "Finding the technician",
    "Technician accepted",
    "Technician on the way",
    "Work Started",
    "Work Done",
  ];

  const getLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const next = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCenter(next);
      },
      () => {
        // keep default center
      }
    );
  };

  const initMap = () => {
    if (!window.google || !window.google.maps || !mapRef.current) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 14,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    new window.google.maps.Marker({
      position: center,
      map,
      title: "Current Location",
      icon: {
        url:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#DC2626" stroke="white" stroke-width="4" />
              <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">201</text>
            </svg>
          `),
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=geometry,places";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        getLocation();
        initMap();
      };
      document.head.appendChild(script);
      return;
    }
    getLocation();
    initMap();
  }, []);

  useEffect(() => {
    initMap();
  }, [center]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden order-2 lg:order-1">
              <div ref={mapRef} className="w-full bg-gray-200" style={{ height: "520px" }} />
            </div>

            {/* Status Card */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <p className="font-semibold text-gray-900">Service Status</p>
                </div>
                <ul className="space-y-5">
                  {steps.map((label, index) => {
                    const isDone = index <= currentStep;
                    const isFuture = index > currentStep;
                    return (
                      <li key={label} className="flex items-center gap-4">
                        {isDone ? (
                          <CheckCircleIcon className="w-6 h-6 text-green-600" />
                        ) : (
                          <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 inline-block" />
                        )}
                        <span className={`text-sm ${isFuture ? "text-gray-600" : "text-gray-900"}`}>
                          {label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Cancel Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => window.history.back()}
              className="px-10 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


