import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from 'app/App';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { createMemoryRouter } from 'react-router-dom';
import { UserState } from 'slices/user/user.interface';
import { routes } from './routes';

const user: UserState = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNjk3MzkyMDkxLCJleHAiOjE2OTczOTU2OTEsInN1YiI6IjEifQ.OWYDoy-pF7Lc_OpKCWJRqglDrOpneuwSR3pPnzS9Wig',
  user: {
    id: 1,
    email: 'user@email.com',
  },
};

test('if user is in state, show into page', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/intro'],
  });

  renderWithProviders(<App router={router} />, {
    preloadedState: {
      user,
    },
  });

  expect(screen.getByAltText('Cybellum-intro')).toBeInTheDocument();
  expect(router.state.location.pathname).toEqual('/intro');
});


test('if user is not in state, redirect and show login page', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/intro'],
  });

  renderWithProviders(<App router={router} />);

  expect(screen.getByText('Welcome to the Product Security Platform')).toBeInTheDocument();
  expect(router.state.location.pathname).toEqual('/login');
});
