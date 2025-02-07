import React from 'react';
import { ChartBar, Pill, Bot } from 'lucide-react';

const HealthTrackingFeatures = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Personalized care with smart health tracking Future
      </h1>
      
      {/* Subtext */}
      <div className="text-gray-600 text-center mb-8">
        We calculate your BMI index from data like age, height, weight.
      </div>
      
      {/* Feature Grid - Only these will have a white background */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Treatment Recommendations */}
        <div className="p-5 text-center shadow-md rounded-lg bg-white">
          <div className="flex justify-center mb-4">
            <Pill className="text-blue-600" size={48} />
          </div>
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Treatment Recommendations
          </h2>
          <p className="text-gray-600">
            We provide personalized treatment suggestions based on your medical history and symptoms.
          </p>
        </div>
        
        {/* Interactive Health Assistant */}
        <div className="p-5 text-center shadow-md rounded-lg bg-white">
          <div className="flex justify-center mb-4">
            <Bot className="text-green-600" size={48} />
          </div>
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Interactive Health Assistant
          </h2>
          <p className="text-gray-600">
            Solve your health queries and get guidance through our smart assistant.
          </p>
        </div>
        
        {/* Health Insights */}
        <div className="p-5 text-center shadow-md rounded-lg bg-white">
          <div className="flex justify-center mb-4">
            <ChartBar className="text-purple-600" size={48} />
          </div>
          <h2 className="text-xl font-semibold text-purple-800 mb-3">
            Health Insights
          </h2>
          <p className="text-gray-600">
            Access detailed insights into your medical history and disease patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTrackingFeatures;
