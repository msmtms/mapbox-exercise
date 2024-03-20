import React from 'react';
import { render, screen } from '@testing-library/react';
import PolyMap from './index';

describe('<PolyMap/>', () => {
  it('should render', () => {
    render(<PolyMap />);
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });
});
