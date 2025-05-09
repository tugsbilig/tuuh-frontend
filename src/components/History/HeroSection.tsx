import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => (
  <div className="text-center mb-16">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
      {title}
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto">
      {description}
    </p>
  </div>
);

export default HeroSection;