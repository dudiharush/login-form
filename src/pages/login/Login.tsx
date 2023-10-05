import { zodResolver } from '@hookform/resolvers/zod';
import { CardMedia, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import { useLoginMutation } from 'api/auth/auth';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Styled from './Login.styled'
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { useEffect } from 'react';
import { z } from 'zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Style } from '@mui/icons-material';

const loginFormValidationSchema = z.object({
  username: z.string().nonempty().email(),
  password: z.string().min(4),
});

type LoginFormValues = z.infer<typeof loginFormValidationSchema>;

export default function Login() {
  const [login, { data, error: loginError }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!data?.user) {
      navigate('/');
    }
  }, [data, navigate]);

  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };
  const { handleSubmit, control } = useForm<LoginFormValues>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: zodResolver(loginFormValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login({
      email: data.username,
      password: data.password,
    }).then(() => {});
  };

  const loginErrorMessage = (loginError as FetchBaseQueryError)?.data as string || '';

  return (
    <Grid container direction='column' padding={6} justifyContent={'space-between'}>
      <Grid item>
        <Grid container spacing={7}>
          <Grid item xs={6}>
              <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ height: '55px', width: 'fit-content' }} />
              <Typography variant="h1" sx={{ mt: 4 }} fontSize={'56px'}>
                Welcome to the Product Security Platform
              </Typography>
              <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  render={({ field, fieldState }) => {
                    const hasError = !!fieldState.error?.message || !!loginErrorMessage;
                    return (
                    <TextField InputProps={{
                      endAdornment: hasError ? <InputAdornment position="start"><ErrorOutlineIcon color='error'/></InputAdornment> : undefined
                    }} helperText={fieldState.error?.message} error={hasError} label="Username" {...field} />
                  )}}
                  name="username"
                  control={control}
                />
                <Controller
                  render={({ field, fieldState }) => {
                    const hasError = !!fieldState.error?.message || !!loginErrorMessage;
                    return(
                    <TextField InputProps={{
                      endAdornment: hasError ? <InputAdornment position="start"><ErrorOutlineIcon color='error'/></InputAdornment> : undefined
                    }}
                    helperText={fieldState.error?.message} error={hasError} label="Password" {...field} type="password" sx={{ mt: 4 }} />
                  )}}
                  name="password"
                  control={control}
                />
                {loginErrorMessage ? <FormHelperText error>The email or password you entered don't match</FormHelperText> : undefined}

                <Styled.LinkButton>Forgot your password?</Styled.LinkButton>
                <Styled.SubmitButton type="submit" variant="contained" fullWidth>
                  Log in
                </Styled.SubmitButton>
              </Styled.Form>
          </Grid>
          <Grid item xs={6}>
            <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4, width: 300 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent={'space-between'} width={'400px'}>
                {Object.keys(bottomLinks).map((link) => (
                  <Grid item><Styled.LinkButton key={link}>{link}</Styled.LinkButton></Grid>
                ))}
                </Grid>
        </Grid>
    </Grid>
  );
}
