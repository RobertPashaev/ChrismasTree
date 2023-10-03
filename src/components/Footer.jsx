import React, { useState, useEffect } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarRateIcon from '@mui/icons-material/StarRate';
import '../styles/footer/footer.css';

export default function Footer() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const requestURL = 'http://localhost:3000/cat';
      try {
        const response = await fetch(requestURL);
        const data = await response.json();
        const imageUrl = data[0]?.imageSrc || '';
        setImageSrc(imageUrl);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className='footer'>
      <div className='footer__cop'>
        <div className='footer__rewives'>
          <StarRateIcon />
          Отзывы
        </div>
        <div className='footer__inst'>
          <InstagramIcon />
          Instagram
        </div>
        <div className='footer__email'>
          <MailIcon />
          DniweLolShoT@yandex.ru
        </div>
        <div className='footer__number'><ContactPhoneIcon />+7-932-323-23-23</div>
      </div>
    </section>
  );
}
