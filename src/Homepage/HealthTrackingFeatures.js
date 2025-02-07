import React from "react";
import { Utensils, Bot, ChartBar, HeartPulse } from "lucide-react";

const HealthTrackingFeatures = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Title Section */}
      <div className="mb-12 text-center">
        <h3 className="text-blue-600 font-semibold uppercase tracking-wide">
          Features We Provide
        </h3>
        <h1 className="text-4xl font-bold text-black mt-2">
          Calculating BMI is easier <HeartPulse className="inline text-blue-500" size={32} />
        </h1>
        <p className="text-gray-600 mt-2">
          We calculate your BMI index from data like age, height, weight.
        </p>
      </div>

      {/* Features Layout */}
      <div className="flex justify-between items-start gap-8">
        {/* Food Recommendation */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center">
          <Utensils className="text-green-600 mb-4 mx-auto" size={48} />
          <h2 className="text-lg font-semibold text-black">Food Recommendation</h2>
          <p className="text-gray-600">
            We provide food recommendations according to your calorie requirements.
          </p>
        </div>

        {/* Interactive Chatbot */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center">
          <Bot className="text-blue-600 mb-4 mx-auto" size={48} />
          <h2 className="text-lg font-semibold text-black">Interactive Chatbot</h2>
          <p className="text-gray-600">
            Solve your queries by interacting with our bot.
          </p>
        </div>

        {/* Nutritional Value */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center">
          <ChartBar className="text-purple-600 mb-4 mx-auto" size={48} />
          <h2 className="text-lg font-semibold text-black">Nutritional Value</h2>
          <p className="text-gray-600">
            Get all the nutritional values of your preferred dish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTrackingFeatures;
