import React from 'react';
import { render } from '@testing-library/react';
import EventsPage from './events';

test('renders EventsPage correctly', () => {
  const { asFragment } = render(<EventsPage />);
  expect(asFragment()).toMatchSnapshot();
});

