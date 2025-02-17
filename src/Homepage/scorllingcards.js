import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';

const HealthInsightsCarousel = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  
  const cards = [
    {
      title: 'Medical History',
      description: 'Access your complete medical history anytime',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Medication Tracker',
      description: 'Track and manage prescriptions with ease',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Symptom Checker',
      description: 'Check symptoms and get recommendations',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Doctor Consultations',
      description: 'Easily connect with your doctor for personalized advice',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Diet Insights',
      description: 'View trends and insights from your health data',
      image: '/api/placeholder/400/300'
    }
  ];

  const cards2 = [
    {
      title: 'Health Alerts',
      description: 'Receive timely alerts for upcoming appointments',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Fitness & Nutrition Tips',
      description: 'Access fitness and dietary advice tailored for you',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Emergency Contacts',
      description: 'Quick access to emergency contacts when needed',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Treatment Recommendations',
      description: 'Get personalized treatment suggestions',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Health Records',
      description: 'Access your health records securely',
      image: '/api/placeholder/400/300'
    }
  ];

  useEffect(() => {
    // First row - Right to Left
    const interval1 = setInterval(() => {
      setPosition1((prev) => {
        const newPosition = prev - 0.5;
        return newPosition <= -100 ? 0 : newPosition;
      });
    }, 50);

    // Second row - Left to Right
    const interval2 = setInterval(() => {
      setPosition2((prev) => {
        const newPosition = prev + 0.5;
        return newPosition >= 100 ? 0 : newPosition;
      });
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-lg space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Our Health Insights</h2>
        <p className="mb-6 text-gray-600">Track your medical history, manage prescriptions and stay informed about your health.</p>
      </div>
      
      {/* First Row - Right to Left */}
      <div className="relative overflow-hidden mb-8">
        <div 
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(${position1}%)` }}
        >
          {[...cards, ...cards].map((card, index) => (
            <Card key={`row1-${index}`} className="flex-shrink-0 w-64 bg-white hover:shadow-lg transition-shadow">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-800">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Second Row - Left to Right */}
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(${-position2}%)` }}
        >
          {[...cards2, ...cards2].map((card, index) => (
            <Card key={`row2-${index}`} className="flex-shrink-0 w-64 bg-white hover:shadow-lg transition-shadow">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-800">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthInsightsCarousel;
