import React from 'react';
import { Search, Mic, Image } from 'lucide-react';
import LogoImage from '../image/image.png'; // Adjust the path based on your project structure
import doc from '../image/doc.png'

const Logo = () => (
  <img src={LogoImage} alt="EvoDoc Logo" className="w-48" />
);

const FloatingShape = ({ className }) => (
  <div className={`absolute w-8 h-8 rounded-lg bg-blue-100/20 animate-float ${className}`} />
);

const HealthcareLanding = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FF] relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-20 left-1/4">
        <div className="w-4 h-4 bg-yellow-300/20 rounded animate-float" />
      </div>
      <div className="absolute top-40 right-1/4">
        <div className="w-4 h-4 bg-blue-300/20 rounded animate-float-delay" />
      </div>
      <div className="absolute bottom-20 left-1/3">
        <div className="w-4 h-4 bg-red-300/20 rounded animate-float" />
      </div>
      
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">How to use</a>
          <button className="bg-[#4285F4] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Log In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 mt-16 flex items-center">
        <div className="w-1/2">
          {/* Health Matters Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-white shadow-sm mb-6">
            <span className="text-gray-700">Health Matters ❤️</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-[#4285F4]">Your One-Stop</span><br />
            <span className="text-[#4285F4]">Solution</span>
            <span className="text-gray-900"> for Smarter</span><br />
            <span className="text-gray-900">Healthcare.</span>
          </h1>

          <p className="text-gray-600 mb-8">
            Using your medical history, we determine if the treatment is suitable for you.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center max-w-xl">
            <input
              type="text"
              placeholder="Search Your Health Records"
              className="flex-1 px-4 py-2 outline-none"
            />
            <div className="flex space-x-2 px-4">
              <button className="p-2 rounded-full bg-[#4285F4] text-white hover:bg-blue-600 transition-colors">
                <Image size={20} />
              </button>
              <button className="p-2 rounded-full bg-[#4285F4] text-white hover:bg-blue-600 transition-colors">
                <Mic size={20} />
              </button>
              <button className="p-2 rounded-full bg-[#4285F4] text-white hover:bg-blue-600 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-1/2 flex justify-center">
          <div className="relative w-96 h-96">
            <div className="" />
            <img
                src={doc}
                alt="Doctor with laptop"
                className="relative z-10 max-w-full w-[700px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthcareLanding;