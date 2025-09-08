'use client';

import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection: React.FC = () => {
  const slides = [
    {
      title: "Your Complete",
      highlight: "Automotive Solution",
      description: "From emergency roadside assistance to buying cars and spare parts - everything you need for your vehicle in one smart platform.",
      background: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Make Appointment"
    },
    {
      title: "24/7 Emergency",
      highlight: "Roadside Assistance",
      description: "Professional roadside assistance with real-time tracking, instant booking, and verified mechanics available around the clock.",
      background: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Get Help Now"
    },
    {
      title: "Buy & Sell Cars",
      highlight: "Marketplace",
      description: "Your one-stop automotive marketplace. Buy and sell cars, find genuine spare parts, and connect with trusted dealers.",
      background: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Browse Cars"
    }
  ];

  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.background}')` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

              {/* Content */}
              <div className="relative z-20 container mx-auto px-6 py-20 w-full h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Content */}
                  <div className="space-y-8">
                    {/* Main Headline */}
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        {slide.title}{' '}
                        <span className="text-red-600">{slide.highlight}</span>
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-200 max-w-2xl">
                      {slide.description}
                    </p>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 bg-red-600 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors transform hover:scale-105">
                        {slide.cta}
                      </button>
                    </div>

                    {/* Contact Information */}
                    <div className="flex items-center space-x-3 text-lg">
                      <PhoneIcon className="w-6 h-6 text-red-500" />
                      <span className="font-medium">
                        Call Toll Free 18001202540
                      </span>
                    </div>
                  </div>

               
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !bg-black/50 hover:!bg-black/70 !w-12 !h-12 !rounded-full !transition-all duration-300 hover:!scale-110 after:!text-lg"></div>
        <div className="swiper-button-next !text-white !bg-black/50 hover:!bg-black/70 !w-12 !h-12 !rounded-full !transition-all duration-300 hover:!scale-110 after:!text-lg"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-8"></div>
      </Swiper>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #DC2626 !important;
          transform: scale(1.25) !important;
        }
        
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.75) !important;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
