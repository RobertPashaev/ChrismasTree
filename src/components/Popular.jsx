import React, { useEffect } from 'react';
import imgLit from '../images/litaya.png';
import imgSteer from '../images/Уличная.png';
import imgTabl from '../images/Настольные.png';
import imgSnow from '../images/Заснежные.png';
import imgComb from '../images/Комбинированные.png';
import { Box, Card, Typography } from '@mui/material';
import CardForm from './CardForm';
import '../styles/popular/pupular.css';
import { Link } from 'react-router-dom';

export default function Popular(props) {
  return (
    <>
      <Box id='popular' className='popular'></Box>
      <h1 className='popular__title'>Популярные разделы</h1>
      <Link to='/Catalog'>
        <Box display={'flex'} marginTop={'9vh'}>
          <CardForm
            title='Литые Елки'
            subtitle='Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial.
'
            image={imgLit}
          />

          <CardForm
            title='Уличные Елки'
            subtitle='Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial.
'
            image={imgSteer}
          />
          <CardForm
            title='Настольные Елки'
            subtitle='Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial.
'
            image={imgTabl}
          />
          <CardForm
            title='Заснежанные Елки'
            subtitle='Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial.
'
            image={imgSnow}
          />
          <CardForm
            title='Комбинированные Елки'
            subtitle='Gradients are CSS elements of the image data type that show a transition between two or more colors. These transitions are shown as either linear or radial.
'
            image={imgComb}
          />
        </Box>
      </Link>
    </>
  );
}
