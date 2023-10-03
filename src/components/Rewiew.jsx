import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import { styled } from '@mui/system';

const AnimatedSwipeIcon = styled(SwipeDownIcon)`
  animation: swipeAnimation 1.5s infinite;

  @keyframes swipeAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default function Rewiews() {
  const itemData = [
    {
      img: require('../images/rew1.jpeg'),
      title: 'Breakfast',
    },
    {
      img: require('../images/rew2.jpeg'),
      title: 'Burger',
    },
    {
      img: require('../images/rew3.jpeg'),
      title: 'Camera',
    },
    {
      img: require('../images/rew4.jpeg'),
      title: 'Coffee',
    },
    {
      img: require('../images/rew5.jpeg'),
      title: 'Hats',
    },
    {
      img: require('../images/rew6.jpeg'),
      title: 'Honey',
    },
    {
      img: require('../images/rew7.jpeg'),
      title: 'Basketball',
    },
    {
      img: require('../images/rew8.jpeg'),
      title: 'Fern',
    },
    {
      img: require('../images/rew9.jpeg'),
      title: 'Mushrooms',
    },
    {
      img: require('../images/rew10.jpeg'),
      title: 'Tomato basil',
    },
    {
      img: require('../images/rew11.jpeg'),
      title: 'Sea star',
    },
    {
      img: require('../images/rew12.jpeg'),
      title: 'Bike',
    },
  ];

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'40%'}
          alignContent={'start'}
          paddingTop={'150px'}
        >
          <Typography align='left' right={'25%'} fontSize={'4em'}>
            Отзывы
          </Typography>
          <Typography align='left' fontSize={'2em'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae qui iste consectetur officiis modi reiciendis numquam
            minus tempore! Id
          </Typography>
        </Box>
        <AnimatedSwipeIcon
          fontSize='large'
          sx={{
            position: 'absolute',
            zIndex: '1',
            right: '5vw',
            color: 'black',
          }}
        />

        <ImageList
          sx={{ width: 600, height: 490, marginTop: 15 }}
          cols={2}
          rowHeight={300}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
