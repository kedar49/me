'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entrance animation delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* CSS animations styles */}
      <style jsx>{`
        .float-particle-0 {
          animation: float0 2s ease-in-out infinite;
        }
        .float-particle-1 {
          animation: float1 2s ease-in-out infinite;
        }
        .float-particle-2 {
          animation: float2 2s ease-in-out infinite;
        }
        
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-4px) translateX(8px); }
          75% { transform: translateY(-6px) translateX(2px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-6px) translateX(-4px); }
          50% { transform: translateY(-8px) translateX(-2px); }
          75% { transform: translateY(-4px) translateX(-6px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-4px) translateX(6px); }
          50% { transform: translateY(-6px) translateX(-4px); }
          75% { transform: translateY(-8px) translateX(2px); }
        }
        
        .logo-pulse {
          animation: logoPulse 4s ease-in-out infinite;
        }
        
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15); }
          50% { box-shadow: 0 8px 25px rgba(147, 51, 234, 0.25); }
        }
        
        .breath-animation {
          animation: breathe 5s ease-in-out infinite;
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .entrance-animation {
          animation: slideInBounce 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        @keyframes slideInBounce {
          0% {
            transform: translateX(-100px) translateY(-20px) rotate(-45deg) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translateX(10px) translateY(5px) rotate(5deg) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        /* Mobile positioning to avoid navigation overlap */
        @media (max-width: 1024px) {
          .logo-container {
            top: 1rem !important;
            right: 4rem !important;
            left: auto !important;
          }
          .logo-size {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .entrance-animation {
            animation: slideInBounceMobile 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
        }
        
        @keyframes slideInBounceMobile {
          0% {
            transform: translateX(100px) translateY(-20px) rotate(45deg) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translateX(-10px) translateY(5px) rotate(-5deg) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @media (min-width: 1025px) {
          .logo-container {
            top: 1rem !important;
            left: 1rem !important;
          }
        }
      `}</style>
      
      <div className={`fixed top-4 left-4 lg:top-4 lg:left-4 top-4 right-16 lg:right-auto z-50 logo-container transition-all duration-300 ${
        isVisible ? 'entrance-animation' : 'opacity-0 lg:-translate-x-24 translate-x-24 lg:translate-x-0'
      }`}>
        <Link
          href="/"
          className="block group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Go to Homepage"
        >
          <div className="relative breath-animation">
            {/* Animated border rings */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-blue-500/30 transition-all duration-300 ${
                isHovered ? 'scale-110 border-blue-400/60' : 'scale-100'
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full border border-purple-500/20 transition-all duration-500 ${
                isHovered ? 'scale-125 border-purple-400/40' : 'scale-100'
              }`}
            />
            
            {/* Glowing effect */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`}
            />
            
            {/* Main logo container */}
            <div
              className={`relative w-12 h-12 lg:w-12 lg:h-12 w-10 h-10 logo-size rounded-full overflow-hidden bg-white transition-all duration-300 logo-pulse ${
                isHovered ? 'scale-105 rotate-12 shadow-xl' : 'scale-100 rotate-0 shadow-lg'
              }`}
            >
              <Image
                src="/images/apple-touch-icon.png"
                alt="Kedar Sathe Logo"
                width={48}
                height={48}
                className={`object-cover transition-all duration-300 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                priority
              />
              
              {/* Shine effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 ${
                  isHovered ? 'translate-x-12' : '-translate-x-12'
                }`}
              />
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${
                    isHovered ? `opacity-100 float-particle-${i}` : 'opacity-0'
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 20}%`,
                    animationDelay: `${i * 200}ms`,
                  }}
                />
              ))}
            </div>
            
            {/* Hover tooltip - hidden on mobile */}
            <div
              className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap transition-all duration-300 hidden lg:block ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Home
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
} 