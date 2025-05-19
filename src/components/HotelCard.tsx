
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface HotelCardProps {
  name: string;
  image: string;
  description: string;
  address: string;
  priceRange: string;
  bookingUrl: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  image,
  description,
  address,
  priceRange,
  bookingUrl,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{address}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="text-sm font-medium">{priceRange}</div>
        <Button asChild>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
