import { CardMedia, Grid, Typography } from '@mui/material';
import { useAppSelector } from 'app/store';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSelector } from 'slices/user/userSlice';
import { Footer } from './components/Footer/Footer';
import { LoginForm } from './components/LoginForm/LoginForm';

export default function Login() {
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Grid container direction="column" padding={6} justifyContent='space-between'>
      <Grid item>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ height: '55px', width: 'fit-content' }} />
            <Typography variant="h1" sx={{ mt: 4 }} fontSize='56px'>
              Welcome to the Product Security Platform
            </Typography>
            <LoginForm />
          </Grid>
          <Grid item sx={{display: { xs: 'none', md: 'block' } }} md={6}>
            <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4, width: 300 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
