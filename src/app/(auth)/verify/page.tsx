'use client';

import React, { useState, useRef, useEffect } from 'react';

const VerifyPage: React.FC = () => {
  const [otp, setOtp] = useState(['6', '7', '', '']);
  const [phoneNumber] = useState('+91 987987333');
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus to next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = () => {
    setCanResend(false);
    setCountdown(30);
    // Handle resend logic here
    console.log('Resending OTP...');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 4) {
      console.log('Verifying OTP:', otpString);
      // Handle verification logic here
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
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

      {/* Right Section - Verification Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            OTP Verification
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-8">
            Enter the OTP sent to <span className="font-semibold text-gray-800">{phoneNumber}</span>
          </p>

          {/* Back Link */}
          <div className="text-center mb-6">
            <button
              onClick={() => window.history.back()}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Back to Login
            </button>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleVerify} className="space-y-8">
            {/* OTP Input Fields */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Enter 4-digit OTP
              </label>
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-16 h-16 text-center text-2xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder=""
                  />
                ))}
              </div>
            </div>

            {/* Resend OTP */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Didn&apos;t you receive the OTP?{' '}
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span className="text-gray-400">
                    Resend OTP in {countdown}s
                  </span>
                )}
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={otp.join('').length !== 4}
              className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-[1.02] shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
