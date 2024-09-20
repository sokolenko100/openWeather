import { render } from '@testing-library/react-native';
import React from 'react';
import { Weather } from '../weather';

const mockRoute = {
    params: {
        city: 'New York',
        weatherData: {
            main: {
                temp: 25,
                feels_like: 24,
                humidity: 60,
                pressure: 1012,
            },
            clouds: {
                all: 75,
            },
            weather: [
                {
                    description: 'broken clouds',
                },
            ],
            wind: {
                speed: 5,
            },
        },
    },
};

describe('Weather Component', () => {
    it('should display weather information when provided with valid data', () => {
        const { getByText } = render(<Weather route={mockRoute as any} />);

        // Check if city name is displayed
        expect(getByText('Weather in New York:')).toBeTruthy();

        // Check if weather details are displayed
        expect(getByText('Temperature: 25°C')).toBeTruthy();
        expect(getByText('Feels Like: 24°C')).toBeTruthy();
        expect(getByText('Humidity: 60%')).toBeTruthy();
        expect(getByText('Pressure: 1012 hPa')).toBeTruthy();
        expect(getByText('Clouds: 75% (broken clouds)')).toBeTruthy();
        expect(getByText('Wind Speed: 5 m/s')).toBeTruthy();
    });

    it('should not render weather details if weatherData is missing', () => {
        const routeWithoutWeatherData = {
            params: {
                city: 'New York',
                weatherData: null,
            },
        };

        const { queryByText } = render(<Weather route={routeWithoutWeatherData as any} />);

        // Ensure no weather details are rendered
        expect(queryByText('Temperature')).toBeNull();
        expect(queryByText('Feels Like')).toBeNull();
        expect(queryByText('Humidity')).toBeNull();
        expect(queryByText('Pressure')).toBeNull();
        expect(queryByText('Clouds')).toBeNull();
        expect(queryByText('Wind Speed')).toBeNull();
    });

    it('should not render weather details if city is missing', () => {
        const routeWithoutCity = {
            params: {
                city: null,
                weatherData: mockRoute.params.weatherData,
            },
        };

        const { queryByText } = render(<Weather route={routeWithoutCity as any} />);

        // Ensure no weather details are rendered
        expect(queryByText('Temperature')).toBeNull();
        expect(queryByText('Feels Like')).toBeNull();
        expect(queryByText('Humidity')).toBeNull();
        expect(queryByText('Pressure')).toBeNull();
        expect(queryByText('Clouds')).toBeNull();
        expect(queryByText('Wind Speed')).toBeNull();
    });
});
