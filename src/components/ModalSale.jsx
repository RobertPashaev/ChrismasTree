import React, { useState, useEffect } from 'react';
import FormSell from './ModalSell';
import { Box } from '@mui/joy';
import CardSale from './CardSale';
import Typography from 'antd/es/typography/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Header';

export default function ModalSale({ setIsModalOpen }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems'))
  );
  const [isEmpty, setIsEmpty] = useState(false);
  

  // useEffect(() => {
  //   if (isEmpty) {
  //     setIsModalOpen(false);
  //   }
  // }, [isEmpty, setIsModalOpen]);

  return (
    <div>
      <Header />
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          style={{ marginTop: '100px', textAlign: 'center' }}
          component='h2'
        >
          Ваш Заказ
        </Typography>
        <CardSale setIsEmpty={setIsEmpty} />
        <FormSell />
      </Box>
    </div>
  );
}
