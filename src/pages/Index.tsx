
import React from 'react';
import Hero from '../components/Hero';
import HotelGrid from '../components/HotelGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Hero 
          title="Top 5 Khách Sạn Hạng Sang Tại Hà Nội" 
          description="Trải nghiệm đỉnh cao của sự sang trọng tại thủ đô Việt Nam với bộ sưu tập những chỗ nghỉ tuyệt vời nhất, kết hợp giữa nét quyến rũ truyền thống và sự thanh lịch hiện đại."
        />
        
        <div className="mt-8 md:mt-12">
          <HotelGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
