
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="mx-auto max-w-4xl text-center py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Hero;
