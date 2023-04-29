import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

import Button from '@mui/material/Button';

interface ButtonMicroProps {
    buttonText: string;
    textColor: string;
    onHoverColor: string;
    buttonColor: string;
    variant: string;
  }


const ButtonMicro: React.FC<ButtonMicroProps>  = ({ buttonText, textColor, onHoverColor, buttonColor }) => {

    // const ColorButton: any = styled(Button)(() => ({
    //     color: textColor,
    //     backgroundColor: buttonColor,
    //     '&:hover': {
    //         backgroundColor: onHoverColor,
    //     },
    //     '&.MuiButton-contained': {
    //         color: textColor
    //     },
    // }));

    const ColorButton: React.FC<any> = React.useMemo(
        () =>
          styled(Button)(() => ({
            color: textColor,
            backgroundColor: buttonColor,
            '&:hover': {
              backgroundColor: onHoverColor,
            },
            '&.MuiButton-contained': {
              color: textColor,
            },
          })),
        [buttonColor, onHoverColor, textColor]
      );
      

      return <ColorButton>{buttonText}</ColorButton>;

}

export default ButtonMicro