import { zodResolver } from '@hookform/resolvers/zod';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { FormHelperText, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useLoginMutation } from 'api/auth/auth';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Styled from './LoginForm.styled';
import { StyledLinkButton } from 'pages/login/shared/Login.styled';

const loginFormValidationSchema = z.object({
  username: z.string().nonempty().email(),
  password: z.string().min(4),
});

type LoginFormValues = z.infer<typeof loginFormValidationSchema>;

export function LoginForm() {
  const [login, { data, error: loginError }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!data?.user) {
      navigate('/');
    }
  }, [data, navigate]);

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

  const loginErrorMessage = ((loginError as FetchBaseQueryError)?.data as string) || '';

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error?.message || !!loginErrorMessage;
          return (
            <TextField
              InputProps={{
                endAdornment: hasError ? (
                  <InputAdornment position="start">
                    <ErrorOutlineIcon color="error" />
                  </InputAdornment>
                ) : undefined,
              }}
              helperText={fieldState.error?.message}
              error={hasError}
              label="Username"
              {...field}
            />
          );
        }}
        name="username"
        control={control}
      />
      <Controller
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error?.message || !!loginErrorMessage;
          return (
            <TextField
              InputProps={{
                endAdornment: hasError ? (
                  <InputAdornment position="start">
                    <ErrorOutlineIcon color="error" />
                  </InputAdornment>
                ) : undefined,
              }}
              helperText={fieldState.error?.message}
              error={hasError}
              label="Password"
              {...field}
              type="password"
              sx={{ mt: 4 }}
            />
          );
        }}
        name="password"
        control={control}
      />
      {loginErrorMessage ? <FormHelperText error>The email or password you entered don't match</FormHelperText> : undefined}

      <StyledLinkButton>Forgot your password?</StyledLinkButton>
      <Styled.SubmitButton type="submit" variant="contained" fullWidth>
        Log in
      </Styled.SubmitButton>
    </Styled.Form>
  );
}
