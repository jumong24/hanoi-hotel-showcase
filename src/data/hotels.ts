
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
    name: "Sofitel Legend Metropole Hà Nội",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "Khách sạn sang trọng lịch sử kết hợp giữa sự thanh lịch kiểu Pháp với tiện nghi hiện đại. Có phòng sang trọng, nhiều lựa chọn ẩm thực và hồ bơi sân trong yên tĩnh.",
    address: "15 Ngô Quyền, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "5.800.000 - 11.500.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-metropole",
  },
  {
    name: "JW Marriott Hà Nội",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Kiệt tác kiến trúc với tầm nhìn rộng ra thành phố, chỗ ở sang trọng và các tiện nghi đẳng cấp thế giới bao gồm spa, trung tâm thể dục và nhiều nhà hàng.",
    address: "8 Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội",
    priceRange: "5.100.000 - 10.400.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-jw-marriott",
  },
  {
    name: "InterContinental Hà Nội Westlake",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    description: "Nằm trên mặt nước yên bình của Hồ Tây, khách sạn này có các gian nhà trên mặt nước, phòng thanh lịch với ban công riêng và nhiều không gian ăn uống với tầm nhìn ra hồ.",
    address: "5 Từ Hoa, Quận Tây Hồ, Hà Nội",
    priceRange: "4.200.000 - 9.300.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-intercontinental",
  },
  {
    name: "Khách Sạn Apricot",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Khách sạn nghệ thuật boutique trưng bày nghệ thuật Việt Nam trong toàn bộ khuôn viên. Có phòng phong cách, hồ bơi trên sân thượng với tầm nhìn toàn cảnh và trải nghiệm ẩm thực đặc biệt.",
    address: "136 Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "3.500.000 - 8.100.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-apricot",
  },
  {
    name: "Pan Pacific Hà Nội",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description: "Nhìn ra Hồ Tây và Sông Hồng, khách sạn hiện đại này có phòng rộng rãi, quầy bar trên sân thượng ấn tượng và spa sang trọng cung cấp các liệu pháp truyền thống của Việt Nam.",
    address: "1 Thanh Niên, Quận Ba Đình, Hà Nội",
    priceRange: "3.700.000 - 8.800.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-pan-pacific",
  },
  {
    name: "Lotte Hotel Hà Nội",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Nằm trong tòa nhà cao thứ hai của Hà Nội, khách sạn sang trọng này có tầm nhìn toàn cảnh thành phố, phòng rộng rãi với cửa sổ từ sàn đến trần và các tiện nghi ăn uống và giải trí đẳng cấp thế giới.",
    address: "54 Liễu Giai, Quận Ba Đình, Hà Nội",
    priceRange: "4.600.000 - 10.400.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-lotte",
  },
  // Adding 10 more hotels
  {
    name: "Melia Hà Nội",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description: "Khách sạn sang trọng nằm ở vị trí trung tâm với phòng hiện đại, nhiều nhà hàng quốc tế và trung tâm spa đẳng cấp. Cung cấp dịch vụ chuyên nghiệp và không gian nghỉ ngơi cao cấp.",
    address: "44B Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "3.000.000 - 7.500.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-melia",
  },
  {
    name: "Sheraton Hà Nội",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    description: "Khách sạn 5 sao nổi tiếng với khu vườn nhiệt đới và hồ nước xanh biếc. Có phòng đẹp mắt, các lựa chọn ẩm thực phong phú và tiện nghi thư giãn như spa và hồ bơi ngoài trời.",
    address: "K5 Nghi Tàm, 11 Xuân Diệu, Quận Tây Hồ, Hà Nội",
    priceRange: "3.800.000 - 9.200.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-sheraton",
  },
  {
    name: "Hilton Hà Nội Opera",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
    description: "Tọa lạc gần Nhà hát Lớn Hà Nội, khách sạn mang phong cách truyền thống này cung cấp chỗ ở sang trọng, nhà hàng thơm ngon và dịch vụ không thể chê vào đâu được.",
    address: "1 Lê Thánh Tông, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "4.000.000 - 9.500.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-hilton-opera",
  },
  {
    name: "The Oriental Jade Hotel",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    description: "Khách sạn boutique cao cấp nằm trong khu phố cổ, với tầm nhìn tuyệt đẹp ra Hồ Hoàn Kiếm. Nổi tiếng với dịch vụ cá nhân hóa và nhà hàng trên sân thượng.",
    address: "92 Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "2.800.000 - 6.500.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-oriental-jade",
  },
  {
    name: "Movenpick Hotel Hà Nội",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    description: "Khách sạn hiện đại nằm trong khu vực thương mại, cung cấp dịch vụ Thụy Sĩ chất lượng cao. Có phòng được thiết kế trang nhã và nhà hàng với các món ăn quốc tế cao cấp.",
    address: "83A Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "3.200.000 - 7.600.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-movenpick",
  },
  {
    name: "Hotel de l'Opera Hà Nội - MGallery",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    description: "Khách sạn lấy cảm hứng từ nhà hát với thiết kế đầy màu sắc và sang trọng. Cung cấp dịch vụ vượt trội, nhà hàng đẳng cấp thế giới và spa cao cấp.",
    address: "29 Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "3.500.000 - 8.300.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-hotel-opera",
  },
  {
    name: "Somerset Grand Hà Nội",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    description: "Căn hộ dịch vụ cao cấp với không gian rộng rãi, tiện nghi đầy đủ như phòng khách và bếp. Lý tưởng cho cả chuyến công tác và kỳ nghỉ kéo dài.",
    address: "49 Hai Bà Trưng, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "3.000.000 - 7.000.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-somerset",
  },
  {
    name: "Pullman Hà Nội",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    description: "Khách sạn hiện đại với dịch vụ chu đáo và tiện nghi đẳng cấp. Có phòng rộng rãi, nhà hàng với sự pha trộn giữa ẩm thực phương Đông và phương Tây, cùng trung tâm thể dục hiện đại.",
    address: "40 Cát Linh, Quận Đống Đa, Hà Nội",
    priceRange: "3.000.000 - 7.200.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-pullman",
  },
  {
    name: "Silk Path Hotel Hà Nội",
    image: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f",
    description: "Khách sạn boutique sang trọng nằm trong khu phố cổ sôi động. Nổi tiếng với phong cách thiết kế đương đại, dịch vụ cá nhân hóa và nhà hàng trên sân thượng có tầm nhìn tuyệt đẹp.",
    address: "195 Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
    priceRange: "2.500.000 - 6.000.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-silk-path",
  },
  {
    name: "Fraser Suites Hà Nội",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    description: "Căn hộ dịch vụ sang trọng với thiết kế hiện đại và tiện nghi cao cấp. Cung cấp không gian rộng rãi, các tiện nghi giải trí và dịch vụ chu đáo cho khách doanh nhân và gia đình.",
    address: "51 Xuân Diệu, Quận Tây Hồ, Hà Nội",
    priceRange: "3.500.000 - 8.000.000 VNĐ/đêm",
    bookingUrl: "https://example.com/book-fraser-suites",
  }
];
