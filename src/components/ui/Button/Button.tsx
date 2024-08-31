import { Button as MuiButton, type ButtonProps } from '@mui/material';
import { type PropsWithChildren } from 'react';

import './styles.scss';

type MainButtonProps = ButtonProps &
  PropsWithChildren & {
    buttonType?: 'button' | 'submit' | 'reset' | 'spotify-button';
  };

export const Button = ({ children, buttonType, ...props }: MainButtonProps) => {
  return (
    <MuiButton
      {...props}
      className={`button ${buttonType === 'spotify-button' ? 'button__spotify' : ''}`}>
      {children}
    </MuiButton>
  );
};
