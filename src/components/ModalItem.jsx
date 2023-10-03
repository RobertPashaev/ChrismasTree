import { Box } from '@mui/joy';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CardCover from '@mui/joy/CardCover';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ModalItem({ images, index }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `http://localhost:3000/cat/${index}`;
      try {
        const response = await fetch(requestURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        
      }
    };
  
    fetchData();
  }, [index]);

  return (
    <Swiper>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <img
              src={image}
              alt={`Product image ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}