
export interface Hotel {
  name: string;
  image: string;
  description: string;
  address: string;
  priceRange: string;
  bookingUrl: string;
}

export const hotels: Hotel[] = [
  {
    name: "Sofitel Legend Metropole Hanoi",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "A historic luxury hotel that combines French colonial elegance with modern amenities. Featuring opulent rooms, gourmet dining options, and a tranquil courtyard pool.",
    address: "15 Ngo Quyen Street, Hoan Kiem District, Hanoi",
    priceRange: "$250 - $500 per night",
    bookingUrl: "https://example.com/book-metropole",
  },
  {
    name: "JW Marriott Hotel Hanoi",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "An architectural masterpiece offering expansive city views, luxurious accommodations, and world-class facilities including a spa, fitness center, and multiple restaurants.",
    address: "8 Do Duc Duc Road, Me Tri, South Tu Liem, Hanoi",
    priceRange: "$220 - $450 per night",
    bookingUrl: "https://example.com/book-jw-marriott",
  },
  {
    name: "InterContinental Hanoi Westlake",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    description: "Set on the serene waters of West Lake, this hotel features overwater pavilions, elegant rooms with private balconies, and multiple dining venues with lake views.",
    address: "5 Tu Hoa Street, Tay Ho District, Hanoi",
    priceRange: "$180 - $400 per night",
    bookingUrl: "https://example.com/book-intercontinental",
  },
  {
    name: "Apricot Hotel",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "A boutique art hotel showcasing Vietnamese artistry throughout its premises. Offering stylish rooms, a rooftop pool with panoramic views, and exceptional dining experiences.",
    address: "136 Hang Trong Street, Hoan Kiem District, Hanoi",
    priceRange: "$150 - $350 per night",
    bookingUrl: "https://example.com/book-apricot",
  },
  {
    name: "Pan Pacific Hanoi",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description: "Overlooking West Lake and the Red River, this contemporary hotel features spacious rooms, a stunning rooftop bar, and a luxurious spa offering traditional Vietnamese treatments.",
    address: "1 Thanh Nien Road, Ba Dinh District, Hanoi",
    priceRange: "$160 - $380 per night",
    bookingUrl: "https://example.com/book-pan-pacific",
  },
  {
    name: "Lotte Hotel Hanoi",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Located in Hanoi's second tallest building, this luxury hotel offers panoramic city views, spacious rooms with floor-to-ceiling windows, and world-class dining and recreational facilities.",
    address: "54 Lieu Giai Street, Ba Dinh District, Hanoi",
    priceRange: "$200 - $450 per night",
    bookingUrl: "https://example.com/book-lotte",
  }
];
