import { CardMedia, Grid, Typography } from '@mui/material';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginForm } from './components/LoginForm/LoginForm';
import { useAppSelector } from 'app/store';
import { userSelector } from 'slices/user/userSlice';
import { StyledLinkButton } from './shared/Login.styled';


export default function Login() {
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <Grid container direction='column' padding={6} justifyContent={'space-between'}>
      <Grid item>
        <Grid container spacing={7}>
          <Grid item xs={6}>
              <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ height: '55px', width: 'fit-content' }} />
              <Typography variant="h1" sx={{ mt: 4 }} fontSize={'56px'}>
                Welcome to the Product Security Platform
              </Typography>
              <LoginForm />
          </Grid>
          <Grid item xs={6}>
            <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4, width: 300 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent={'space-between'} width={'400px'}>
                {Object.keys(bottomLinks).map((link) => (
                  <Grid item><StyledLinkButton key={link}>{link}</StyledLinkButton></Grid>
                ))}
                </Grid>
        </Grid>
    </Grid>
  );
}
