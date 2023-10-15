import React from 'react'
import '@testing-library/jest-dom'
import { renderWithProviders } from 'helpers/renderWithProviders'
import {MemoryRouter} from 'react-router-dom';
import App from 'app/App'
import {screen} from '@testing-library/react'
import { UserState } from 'slices/user/user.interface';


const user: UserState = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNjk3MzkyMDkxLCJleHAiOjE2OTczOTU2OTEsInN1YiI6IjEifQ.OWYDoy-pF7Lc_OpKCWJRqglDrOpneuwSR3pPnzS9Wig",
  user: {
    id:1, 
    email:"user@email.com"
  }
}

test('if user is in state, show into page', () => {
  renderWithProviders(<MemoryRouter initialEntries={["/intro"]}><App/></MemoryRouter>, {preloadedState: {
    user
  }});

  expect(screen.getByAltText('Cybellum-intro')).toBeInTheDocument();
})

test('if user is not in state, redirect and show login page', () => {
  renderWithProviders(<MemoryRouter initialEntries={["/intro"]}><App/></MemoryRouter>);
  expect(screen.getByText('Welcome to the Product Security Platform')).toBeInTheDocument();
})

