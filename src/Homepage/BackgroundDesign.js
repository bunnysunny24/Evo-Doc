import React from 'react';
import { Stethoscope, HeartPulse, Pill } from 'lucide-react';

const FloatingShape = ({ className, children }) => (
  <div className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/40 animate-float shadow-md ${className}`}>
    {children}
  </div>
);

const BackgroundDesign = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Medical Icons */}
      <FloatingShape className="top-16 left-[15%]">
        <Stethoscope size={24} className="text-blue-600 animate-pulse" />
      </FloatingShape>
      <FloatingShape className="top-36 right-[20%]">
        <HeartPulse size={24} className="text-red-500 animate-pulse" />
      </FloatingShape>
      <FloatingShape className="bottom-16 left-[25%]">
        <Pill size={24} className="text-green-500 animate-pulse" />
      </FloatingShape>
    </div>
  );
};

export default BackgroundDesign;
