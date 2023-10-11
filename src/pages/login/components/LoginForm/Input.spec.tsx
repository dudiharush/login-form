import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {InputAdornment} from './InputAdornment'

test('show error icon if hasError is true', () => {
  render(<InputAdornment hasError/>);
  expect(screen.getByTitle('error')).toBeInTheDocument();
})

test('hide error icon if hasError is false', () => {
  render(<InputAdornment />);
  expect(screen.queryByTitle('error')).not.toBeInTheDocument();
})