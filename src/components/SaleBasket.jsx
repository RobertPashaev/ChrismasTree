import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/joy';
import CardBasked from './CardBasked';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SaleBasket({ setIsModalOpen, setShowSaleBasket }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  

  const handleClearCart = () => {
    localStorage.clear();
    setCartItems([]);
    
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      sx={{
        backgroundColor: 'whitesmoke',
        position: 'absolute',
      }}
      borderRadius={'8px'}
      padding={'10px'}
      paddingTop={'5px'}
      width={'25%'}
      marginTop={'10px'}
    >
      <Typography level='h4' textAlign={'center'} marginBottom={'20px'}>
        Корзина покупок:
      </Typography>
      {cartItems.length === 0 ? (
        <Typography level='h6' textAlign={'center'} marginBottom={'20px'}>
          Ваша корзина пустая
        </Typography>
      ) : (
        <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
          <CardBasked cartItems={cartItems} setCartItems={setCartItems} />
          <Box
            gap={'10px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
           
              <Link to='/Order'>
              <Button
              variant='contained'
              color='success'
              sx={{ height: '40px', lineHeight: '1', width: '100%' }}
              onClick={() => setIsModalOpen(true)}
            >Оформить заказ
            </Button>
              </Link>
            

            <Button
              variant='outlined'
              color='error'
              sx={{ height: '40px', lineHeight: '1' }}
              onClick={handleClearCart}
            >
              Очистить корзину
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}