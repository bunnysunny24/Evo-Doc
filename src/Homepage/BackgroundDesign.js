import React from 'react';
import { Stethoscope, HeartPulse, Pill, Syringe, Bandage, Thermometer } from 'lucide-react';

const FloatingShape = ({ className, children }) => (
  <div className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/40 animate-float shadow-md ${className}`}>
    {children}
  </div>
);

const BackgroundDesign = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#E7E7FF]">
      {/* Floating Medical Icons */}
      <FloatingShape className="top-16 left-[15%] animate-bounce-slow">
        <Stethoscope size={24} className="text-blue-600" />
      </FloatingShape>
      <FloatingShape className="top-36 right-[20%] animate-float-delay">
        <HeartPulse size={24} className="text-red-500" />
      </FloatingShape>
      <FloatingShape className="bottom-16 left-[25%] animate-float">
        <Pill size={24} className="text-green-500" />
      </FloatingShape>
      <FloatingShape className="top-24 right-[30%] animate-float">
        <Syringe size={24} className="text-purple-500" />
      </FloatingShape>
      <FloatingShape className="bottom-32 right-[10%] animate-float-delay">
        <Bandage size={24} className="text-yellow-500" />
      </FloatingShape>
      <FloatingShape className="top-48 left-[10%] animate-bounce-slow">
        <Thermometer size={24} className="text-orange-500" />
      </FloatingShape>

      {/* Extra Floating Shapes */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-yellow-300/20 rounded animate-float" />
      <div className="absolute top-40 right-1/4 w-4 h-4 bg-blue-300/20 rounded animate-float-delay" />
      <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-red-300/20 rounded animate-float" />
    </div>
  );
};

export default BackgroundDesign;
