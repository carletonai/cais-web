import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './contact';

test('renders ContactPage correctly', () => {
  const { asFragment } = render(<ContactPage />);
  expect(asFragment()).toMatchSnapshot();
});

