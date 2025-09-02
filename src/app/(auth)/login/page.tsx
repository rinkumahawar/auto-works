'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import Link from 'next/link';

// Custom styles for intl-tel-input
const customStyles = `
  .iti {
    width: 100%;
  }
  .iti__country-list {
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
  }
  .iti__country {
    padding: 0.75rem 1rem;
    transition: background-color 0.2s;
  }
  .iti__country:hover {
    background-color: #f3f4f6;
  }
  .iti__country.iti__active {
    background-color: #ef4444;
    color: white;
  }
  .iti__flag-container {
    padding: 0.75rem;
    border-right: 1px solid #d1d5db;
    background-color: #f9fafb;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .iti__selected-flag {
    border-radius: 0.5rem 0 0 0.5rem;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-right: none;
    transition: background-color 0.2s;
  }
  .iti__selected-flag:hover {
    background-color: #f3f4f6;
  }
  .iti__tel-input {
    border-radius: 0 0.5rem 0.5rem 0;
    border: 1px solid #d1d5db;
    border-left: none;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    height: 48px;
    box-sizing: border-box;
  }
  .iti__tel-input:focus {
    outline: none;
    border-color: #ef4444;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
  }
  .iti__tel-input::placeholder {
    color: #9ca3af;
  }
`;

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const intlTelInputRef = useRef<any>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      // Initialize intl-tel-input
      intlTelInputRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: 'us',
        separateDialCode: true,
        customPlaceholder: function(selectedCountryPlaceholder: string, selectedCountryData: any) {
          return selectedCountryPlaceholder;
        },
      });

      // Add event listener for country change
      phoneInputRef.current.addEventListener('countrychange', () => {
        // Handle country change if needed
        console.log('Country changed to:', intlTelInputRef.current.getSelectedCountryData());
      });
    }

    // Cleanup
    return () => {
      if (intlTelInputRef.current) {
        intlTelInputRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (intlTelInputRef.current) {
      const phoneNumber = intlTelInputRef.current.getNumber();
      const countryData = intlTelInputRef.current.getSelectedCountryData();
      console.log('Phone:', phoneNumber);
      console.log('Country:', countryData);
      
      // Navigate to verification page
      router.push('/verify');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      {/* Custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Left Section - Car Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Branding Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Auto-Works</h2>
              <p className="text-xl opacity-90">Your Complete Automotive Solution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Enter Mobile Number
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-8">
            We will send you one-time password to your mobile number
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Phone Input Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  ref={phoneInputRef}
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-[1.02] shadow-sm"
            >
              Get OTP
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/signup" className="text-red-600 hover:text-red-700 font-medium">
                Sign up
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              <a href="/forgot-password" className="text-red-600 hover:text-red-700">
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
