import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const CardMicro: any = ({ width, hight, imgUrl, altText }: any) => {
  console.log('this si', imgUrl)
  return (
    <Card >
      <CardMedia
        sx={{ width: `${width}vh`, hight: `${hight}vh` }}
        component="img"
        image={imgUrl}
        alt={altText}
      />

    </Card>
  );
}

export default CardMicro