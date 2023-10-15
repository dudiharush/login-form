import { CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import theme from 'themes/default';
import type { AppStore } from './store';

type ProvidersProps = PropsWithChildren<{ store: AppStore }>;

export const Providers = ({ store, children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
