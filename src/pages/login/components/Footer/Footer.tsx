import { Grid } from '@mui/material';
import { StyledLinkButton } from 'pages/login/shared/Login.styled';
const bottomLinks = {
  'Privacy policy': '/privacy-policy',
  'Terms of use': '/terms-of-use',
  'Contact us': '/contact-us',
};

export const Footer = () => {
  return (
    <Grid container justifyContent='space-between' width='400px'>
      {Object.keys(bottomLinks).map((link) => (
        <Grid item>
          <StyledLinkButton key={link}>{link}</StyledLinkButton>
        </Grid>
      ))}
    </Grid>
  );
};
