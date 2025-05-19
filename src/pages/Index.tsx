
import React from 'react';
import Hero from '../components/Hero';
import HotelGrid from '../components/HotelGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Hero 
          title="Top 5-Star Hotels in Hanoi" 
          description="Experience the height of luxury in Vietnam's capital with our curated selection of the finest accommodations, combining traditional charm with modern elegance."
        />
        
        <div className="mt-8 md:mt-12">
          <HotelGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
