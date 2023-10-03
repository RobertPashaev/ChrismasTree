// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { cardData } from '../constans/catalog';

// export default function BasicCard() {
  

//   return (
//     <>
//       {cardData.map((card, index) => (
//         <Card key={index} sx={{ width: 200 }}>
//           <div>
//             <Typography level='title-lg'>{card.title}</Typography>
//           </div>
//           <AspectRatio minHeight='320px' maxHeight='200px'>
//             <img
//               src={card.imageSrc}
//               srcSet={card.imageSrcSet}
//               loading='lazy'
//               alt=''
//             />
//           </AspectRatio>
//           <CardContent orientation='horizontal'>
//             <div>
//               <Typography level='body-xs'>Цена:</Typography>
//               <Typography fontSize='lg' fontWeight='lg'>
//                 {card.price}
//               </Typography>
//             </div>
//             <Button
//               variant='solid'
//               size='md'
//               color='primary'
//               aria-label={`Explore ${card.title}`}
//               sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
//             >
//               В корзину
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </>
//   );
// }
