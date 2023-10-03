import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import RadioModal from './RadioModal';
import CloseIcon from '@mui/icons-material/Close';
import ModalItem from './ModalItem';

export default function CardItem({ isOpen, onClose, data, addBasket, dimensions }) {
  const [price, setPrice] = useState(data.prices[0].price);
  const [minPrice, setMinPrice] = useState(null);
  const [selectedPrice, setselectedPrice] = useState(null);
  const [selectedDimensions, setSelectedDimensions] = useState({
    height: data.prices[0].height,
    diameter: data.dimensions[0].radius,
  });

  


  useEffect(() => {
    const prices = data.prices.map((price) => parseInt(price.price));
    const min = Math.min(...prices);
    setMinPrice(min);
    setselectedPrice(data.prices[0].height);
  }, [data.prices]);

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
    setselectedPrice(newPrice);
  };

  const handleDimensionChange = (newDimensions) => {
    setSelectedDimensions(newDimensions);
  };
  
  return (
    <>
      {isOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
            onClick={onClose}
          />
          <div
            style={{
              display: 'flex',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '30px',
              gap: '10px',
              position: 'fixed',
              zIndex: 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            className='basket_sale'
          >
            <CloseIcon
              fontSize='large'
              sx={{
                position: 'absolute',
                top: '-25px',
                right: '-25px',
                cursor: 'pointer',
              }}
              onClick={onClose}
            />
            <Box sx={{ width: '250px' }}>
              <ModalItem images={data.imageSrc.map((image) => image.image)} />
              <Typography level='h4' variant='string' color='neutral' sx={{textAlign: 'center'}}>
              Цена: {price ? price : minPrice}

              </Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography
                level='h3'
                variant='string'
                color='neutral'
                textAlign={'center'}
                marginBottom={'15px'}
              >
                {data.title}
              </Typography>
              <RadioModal
               data={data}
               selectedPrice={selectedPrice}
               onPriceChange={handlePriceChange}
               onDimension={handleDimensionChange}
               dimensions={dimensions}
               
              />

              <Button
                variant='outlined'
                style={{ margin: 'auto 25%', width: '150px' }}
                onClick={() => addBasket(data, price, selectedDimensions)}
              >
                В корзину
              </Button>
            </Box>
          </div>
        </>
      )}
    </>
  );
}
