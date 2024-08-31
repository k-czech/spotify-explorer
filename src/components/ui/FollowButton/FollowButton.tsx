import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton, type IconButtonProps } from '@mui/material';

import './styles.scss';

export const FollowButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton {...props} size="small" className={`follow-button ${props.className}`}>
      <FavoriteBorderOutlinedIcon />
    </IconButton>
  );
};
