
import React from 'react';
import HotelCard from './HotelCard';
import { hotels } from '../data/hotels';

const HotelGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          image={hotel.image}
          description={hotel.description}
          address={hotel.address}
          priceRange={hotel.priceRange}
          bookingUrl={hotel.bookingUrl}
        />
      ))}
    </div>
  );
};

export default HotelGrid;
