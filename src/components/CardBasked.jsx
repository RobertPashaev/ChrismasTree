import React,{useState, useEffect} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import DeleteAlert from './DeleteAlert';
import Link from '@mui/joy/Link';
import { Box } from '@mui/joy';

export default function CardBasket() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = 'http://localhost:3000/cat';
      try {
        const response = await fetch(requestURL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {cartItems &&
        cartItems.map((data, index) => (
          <Card
            key={index}
            variant='outlined'
            sx={{
              width: '325px',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              width: '90%'
            }}
          >
            <img
              src={data.imageSrc}
              alt={data.title}
              style={{ width: '75px', maxHeight: '100px'}}
            />

            <Box display={'flex'} flexDirection={'column'}>
              <Typography
                onClick={() => console.log(cartItems)}
                variant='body1'
              >
                Цена: {data.price}
              </Typography>
              <Typography variant='h6'>
                <Link href='#multiple-actions' underline='none'>
                  {data.title}
                </Link>
              </Typography>
            </Box>
          </Card>
        ))}
    </div>
  );
}
