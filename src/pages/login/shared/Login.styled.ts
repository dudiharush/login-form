import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledLinkButton = styled(Button)(({ theme }) => {
  return {
    color: theme.palette.action.active,
    ':hover': {
      backgroundColor: '#EBEBEC',
    },
    padding: 2,
    borderRadius: 4,
  };
}) as typeof Button;
