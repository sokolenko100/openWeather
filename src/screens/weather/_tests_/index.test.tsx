import {render, waitFor} from '@testing-library/react-native';
import axios from 'axios';
import React from 'react';
import Weather from '..';

jest.mock('axios');

describe('Weather screen', () => {
  it('fetches and displays weather data', async () => {
    const mockWeatherData = {
      weather: [{description: 'Clear sky'}],
      main: {temp: 288.55},
    };

    axios.get.mockResolvedValueOnce({data: mockWeatherData});

    const {getByText} = render(<Weather route={{params: {city: 'London'}}} />);

    await waitFor(() => {
      expect(getByText('Weather in London:')).toBeTruthy();
      expect(getByText('Clear sky')).toBeTruthy();
      expect(getByText('Temperature: 288.55')).toBeTruthy();
    });
  });
});
