import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CardMedia, FormHelperText, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useLoginMutation } from 'api/auth/auth';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { z } from 'zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const loginFormValidationSchema = z.object({
  username: z.string().nonempty().email(),
  password: z.string().min(4),
});

type LoginFormValues = z.infer<typeof loginFormValidationSchema>;

export default function Login() {
  const [login, { data, error: loginError }] = useLoginMutation();
  debugger;
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
    <Box sx={{ p: 10 }}>
      <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 200 }} />
      <Typography variant="h1" sx={{ mt: 4 }}>
        Welcome to the Product Security Platform
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field, fieldState }) => (
            <TextField helperText={fieldState.error?.message} error={!!fieldState.error?.message || !!loginErrorMessage} label="Username" {...field} />
          )}
          name="username"
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => (
            <TextField helperText={fieldState.error?.message} error={!!fieldState.error?.message || !!loginErrorMessage} label="Password" {...field} type="password" sx={{ mt: 4 }} />
          )}
          name="password"
          control={control}
        />
        {loginErrorMessage && <FormHelperText error>The email or password you entered don't match</FormHelperText>}

        <Button>Forgot your password?</Button>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 4, mb: 4, clear: 'both' }}>
          Log in
        </Button>
      </form>

      {Object.keys(bottomLinks).map((link) => (
        <Button key={link}>{link}</Button>
      ))}
      <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4, width: 300 }} />
    </Box>
  );
}
