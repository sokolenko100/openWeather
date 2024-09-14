import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '..';

describe('Home screen', () => {
  it('renders correctly and allows city name input', () => {
    const {getByPlaceholderText, getByText} = render(<Home />);

    const input = getByPlaceholderText('Enter city');
    fireEvent.changeText(input, 'London');

    const button = getByText('Get Weather');
    fireEvent.press(button);
  });
});
