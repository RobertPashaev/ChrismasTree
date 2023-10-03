import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import tree from '../images/tree.png'



export default function CardForm(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: '15px'}}>

      <CardActionArea sx={{backgroundColor: 'white'} } >
        <CardMedia
          component="img"
          height="370px"
          image={props.image}
          alt="green iguana"
          className='cardedia'
          sx={{backgroundColor: 'none'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography  color="text.secondary">
          {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


