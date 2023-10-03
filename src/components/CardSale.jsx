import React, { useState, useEffect } from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import DeleteAlert from './DeleteAlert';
import { Box } from '@mui/material';
export default function CardSale({ setIsEmpty }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems'))
  );

  const handleDelete = (card) => {
    const data = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index = data.findIndex((item) => item.id === card.id);

    data.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(data));
    setCartItems(data);

    if (data.length === 0) {
      setIsEmpty(true);
    }
  };

  useEffect(() => {
    if (cartItems && cartItems.length === 0) {
      setIsEmpty(true);
    }
  }, [cartItems, setIsEmpty]);


  return (
    <Box sx={{gap: '30px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: '25px'}}>
      {cartItems &&
        cartItems.map((card, index) => (
          <Card sx={{ height: '450px', width: '350px' }} key={index}>
            <CardCover>
              <img src={card.imageSrc} loading='lazy' alt='' />
            </CardCover>
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 150px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 250px)',
              }}
            />
            <CardContent
              sx={{ alignItems: 'flex-start', justifyContent: 'flex-end' }}
            >
              <DeleteAlert card={card} handleDelete={handleDelete} />
              <Typography level='title-lg' textColor='#fff'>
                {card.title}
              </Typography>
              <Typography textColor='neutral.300'>
                Итог: {card.price} Рублей
              </Typography>
              <Typography textColor='neutral.300'>
                Высота: {card.height}см
              </Typography>
              <Typography textColor='neutral.300'>
                Радиус: {card.radius}см
              </Typography>
              <Typography textColor='neutral.300'>
                Крепления веток: {card.branch}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
