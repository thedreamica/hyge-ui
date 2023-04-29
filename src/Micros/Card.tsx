import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface CardMicroProps {
  width: number;
  hight: number;
  imgUrl: string;
  altText: string;
}

const CardMicro:  React.FC<CardMicroProps> = ({ width, hight, imgUrl, altText }) => {

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